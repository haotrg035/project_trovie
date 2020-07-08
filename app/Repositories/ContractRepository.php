<?php


namespace App\Repositories;

use App\Events\RoomContractUpdatedEvent;
use App\Helper\TrovieHelper;
use App\Models\Contract;
use App\Models\Host;
use App\Models\Room;
use App\Repositories\Interfaces\ContractEloquentRepositoryInterface;

class ContractRepository extends EloquentRepository implements ContractEloquentRepositoryInterface
{
    public function getModel()
    {
        return Contract::class;
    }

    public function getAllByRoom($ids)
    {
        $rooms = [];
        $result = [];
        if (!is_array($ids)) {
            $ids = [$ids];
        }
        try {
            $roomRepository = new RoomRepository();
            $rooms = $roomRepository->_model->withTrashed()->with([
                'contracts' => function ($query) {
                    return $query->with(['parties'])->get();
                },
                'guestContracts' => function ($query) {
                    return $query->with(['parties'])->get();
                }
            ])->whereIn('id', $ids)->get()->toArray();
//            return dd($rooms);
        } catch (\Exception $e) {
            \Log::error('get Contract failed, Error: ' . $e->getMessage());
        }

        if ($rooms) {
            foreach ($rooms as $room) {
                if (!empty($room['contracts'])) {
                    foreach ($room['contracts'] as $contract) {
                        $_contract = array_diff_key($contract, ['parties' => 1, 'room' => 1, 'pivot' => 1]);
                        $_parties = array_diff_key($contract['parties'], ['contract_id' => 1]);
                        $result[] = array_merge($_contract, $_parties);
                    }
                }
                if (!empty($room['guest_contracts'])) {
                    foreach ($room['guest_contracts'] as $contract) {
                        $_contract = array_diff_key($contract, ['parties' => 1, 'room' => 1, 'pivot' => 1]);
                        $_parties = array_diff_key($contract['parties'], ['contract_id' => 1]);
                        $result[] = array_merge($_contract, $_parties);
                    }
                }
            }
            return $result;
        }
        return false;
    }

    public function getAllByHost($id)
    {
        $roomRepo = new RoomRepository();
        $list_room_id = $roomRepo->_model->withTrashed()->where('host_id', $id)->get('id')->toArray();
        $list_room_id = TrovieHelper::convertAssocIdArrayToValueIdArray(
            $list_room_id,
            'id'
        );
        return $this->getAllByRoom($list_room_id);
    }

    public function getContract($id)
    {
        return $this->_model->with(['parties', 'room_detail'])->where('id', $id)->first();
    }

    public function createContract($data)
    {
        $result = ['data' => null, 'error' => ''];
        $room = null;
        $user = null;
        $userRepository = null;
        $roomRepository = new RoomRepository();
        $hostRepository = new HostRepository();
        $user_info_keys = [
            'full_name',
            'birthday',
            'gender',
            'address',
            'phone',
            'id_card',
            'id_card_date',
            'id_card_address'
        ];
        $expired_at = TrovieHelper::convertDateFormat($data['expired_at']);
        if (strtotime($expired_at) < (time() + 86400 * 30)) {
            $result['error'] = 'Thời hạn hợp đồng phải dài hơn 1 tháng kể từ thời điểm hiện tại!';
            return $result;
        }
        $room = $roomRepository->find($data['room_id']);
        if ($room->total_users >= $room->members) {
            $result['error'] = 'Số lượng khách trọ của phòng đã đạt giới hạn!';
            return $result;
        }
        try {
            $listRoomId = TrovieHelper::convertAssocIdArrayToValueIdArray(
                $roomRepository->getAllRoomsByHost($data['host_id'])['room_list'], 'id'
            );

            // Người dùng có tài khoản
            if ($data['user_type'] == 1) {
                $userRepository = new UserRepository();
                $listActiveUser = TrovieHelper::convertAssocIdArrayToValueIdArray(
                    \DB::table('room_user')
                        ->whereIn('room_id', $listRoomId)
                        ->where('active', 1)
                        ->get()->toArray(),
                    'user_id'
                );
                // User đã và đang ở trọ
                if (in_array($data['customer_user_id'], $listActiveUser)) {
                    $result['error'] = 'Tài khoản người dùng đang trọ tại một nhà trọ / phòng trọ khác!';
                    return false;
                }
                $user = $userRepository->find($data['customer_user_id'], ['detail'])->toArray();
                $user['birthday'] = TrovieHelper::convertDateFormat($user['birthday']);
            }
            // Khách vãn lai
            if ($data['user_type'] == 2) {
                $userRepository = new GuestUserRepository();
                $listActiveUser = TrovieHelper::convertAssocIdArrayToValueIdArray(
                    \DB::table('room_guest_user')
                        ->whereIn('room_id', $listRoomId)
                        ->where('active', 1)
                        ->get()->toArray(),
                    'guest_user_id'
                );
                $duplicateIdCardUserActivating = $userRepository->_model
                    ->whereIn('id', $listActiveUser)
                    ->where('id_card', $data['b_id_card'])
                    ->get()->count();
                if ($duplicateIdCardUserActivating) {
                    $result['error'] = 'Số CMND/Căn Cước đang được đăng ký tại một nhà trọ / phòng trọ khác!';
                }
                $user_info = [];
                foreach ($user_info_keys as $key) {
                    $user_info[$key] = $data['b_' . $key];
                }
                $user_info['birthday'] = TrovieHelper::convertDateFormat($user_info['birthday']);
                $user_info['id_card_date'] = TrovieHelper::convertDateFormat($user_info['id_card_date']);
                $user = $userRepository->create($user_info);
                if (!$user) {
                    $result['error'] = 'Khởi tạo người dùng thất bại!';
                }
            }

            $host = $hostRepository->_model->with(['user', 'user.detail'])->where('id', $data['host_id'])->first();
            $contract_parties_info = [];
            foreach ($user_info_keys as $key) {
                if (isset($host->user[$key]) && !empty($host->user[$key])) {
                    $contract_parties_info['a_' . $key] = $host->user[$key];
                } else {
                    $contract_parties_info['a_' . $key] = $host->user->detail[$key];
                }
                if (isset($user[$key]) && !empty($user[$key])) {
                    $contract_parties_info['b_' . $key] = $user[$key];
                } else {
                    $contract_parties_info['b_' . $key] = $user['detail'][$key];
                }
            }
            $contract_parties_info['a_birthday'] = TrovieHelper::convertDateFormat($contract_parties_info['a_birthday']);
            $contract_parties_info['b_id_card_date'] = TrovieHelper::convertDateFormat($contract_parties_info['b_id_card_date']);
            $contract_room_info = [
                'price' => TrovieHelper::parseCurrencyString($room->price),
                'cost_water' => TrovieHelper::parseCurrencyString($host->cost_water),
                'cost_electric' => TrovieHelper::parseCurrencyString($host->cost_electric),
                'date_payment' => TrovieHelper::convertDateFormat($host->date_payment),
                'address' => $host->address
            ];
            $contract_info = [
                'expired_at' => TrovieHelper::convertDateFormat($data['expired_at']),
                'deposit' => TrovieHelper::parseCurrencyString($data['deposit']),
                'address' => $host->address
            ];
            $contract = $this->create($contract_info);
            $contract->parties()->create($contract_parties_info);
            $contract->room_detail()->create($contract_room_info);
            // Người dùng có tài khoản
            if ($data['user_type'] == 1) {
                if (!$contract) {
                    return false;
                }
                \DB::table('user_invite_tokens')->where('user_id', $data['customer_user_id'])->delete();
                $result['data'] = \DB::table('room_user')->insert([
                    'room_id' => $room->id,
                    'user_id' => $user['id'],
                    'date_in' => date('Y-m-d', time()),
                    'contract_id' => $contract->id
                ]);
            }
            // Khách vãn lai
            if ($data['user_type'] == 2) {
                if (!$contract) {
                    $user->delete();
                    return false;
                }
                $result['data'] = \DB::table('room_guest_user')->insert([
                    'room_id' => $room->id,
                    'guest_user_id' => $user['id'],
                    'date_in' => date('Y-m-d', time()),
                    'contract_id' => $contract->id
                ]);
            }
            if ($result['data']) {
//                $roomRepository->find($room->id);
                $result['data'] = $contract->toArray();
                $result['data']['room_id'] = $room['id'];
                $result['data']['host_id'] = $host['id'];
                event(new RoomContractUpdatedEvent($room));
                return $result;
            }
        } catch (\Exception $e) {
            \Log::error('Fail to create contract, Error: ' . $e->getMessage());
        }
        return false;
    }

    public function cancelContract($id)
    {
        $result = ['data' => null, 'error' => ''];
//        return dd(\DB::table('room_user')->where(['active' => 1, 'contract_id' => $id])->update(['active' => 1]));
        try {
            $room = null;
            if (\DB::table('room_user')->where(['active' => 1, 'contract_id' => $id])->exists()) {
                $room = \DB::table('room_user')->where(['active' => 1, 'contract_id' => $id]);
                $room_id = $room->first()->room_id;
                if (
                    $room->update(['active' => 0])
                    && $this->find($id)->update(['active' => 0])
                ) {
                    $result['data'] = true;
                    event(new RoomContractUpdatedEvent(
                        (new RoomRepository())->find($room_id)
                    ));
                    return $result;
                }
            }
            if (\DB::table('room_guest_user')->where(['active' => 1, 'contract_id' => $id])->exists()) {
                $room = \DB::table('room_guest_user')->where(['active' => 1, 'contract_id' => $id]);
                $room_id = $room->first()->room_id;
                if (
                    $room->update(['active' => 0])
                    && $this->find($id)->update(['active' => 0])
                ) {
                    $result['data'] = true;
                    event(new RoomContractUpdatedEvent(
                        (new RoomRepository())->find($room_id)
                    ));
                    return $result;
                }
            }
        } catch (\Exception $e) {
            \Log::error('Can\'t update active column of contract id:' . $id . ' Error: ' . $e->getMessage() . ' - ' . $e->getFile() . ':' . $e->getLine());
        }
        $result['data'] = false;
        return $result;
    }

    public function renewContract($id, $expired_at)
    {
        $result = ['data' => false, 'error' => ''];
        $contract = $this->find($id);
        if ($contract->active !== 1) {
            $result['error'] = 'Hợp đồng này đã kết thúc, không thể gia hạn!';
            return $result;
        }
        if (
            strtotime(TrovieHelper::convertDateFormat($expired_at))
            <= strtotime(TrovieHelper::convertDateFormat($contract->expired_at)) + (86400 * 30)
        ) {
            $result['error'] = 'Thời hạn hợp đồng mới phải lâu hơn thời hạn cũ ít nhât 1 tháng!';
            return $result;
        }
        $result['data'] = $this->update($id, [
            'expired_at' => TrovieHelper::convertDateFormat($expired_at),
            'updated_at' => date('Y-m-d', time())
        ]);
        return $result;
    }
}
