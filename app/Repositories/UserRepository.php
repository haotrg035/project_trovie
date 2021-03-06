<?php


namespace App\Repositories;

use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use App\Models\User;
use App\Models\UserDetail;
use App\Models\UserInviteToken;
use App\Repositories\Interfaces\UserEloquentRepositoryInterface;
use Illuminate\Support\Str;

class UserRepository extends EloquentRepository implements UserEloquentRepositoryInterface
{

    public function getModel()
    {
        return User::class;
    }

    public function getAllUsers($relations = ['detail'])
    {
        return $this->_model->with($relations)->get();
    }

    public function getUser($id, $relations = [])
    {
        $user = $this->find($id, $relations)->toArray();
        if (!empty($user['invite_token'])) {
            if (time() > strtotime($user['invite_token']['expired_at'])) {
                $user['invite_token'] = [];
            }
        }
        if ($user) {
            return $user;
        }
        return false;
    }

    public function generateInviteToken($id)
    {
        $result = ['data' => false, 'error' => ''];
        $user = $this->find($id)->toArray();
        $token = '';

        if ($user['state'] !== 0) {
            $result['error'] = 'Bạn đang ở trọ. Không thể tạo mã mời!';
            return $result;
        }
        $userToken = UserInviteToken::where('user_id', $user['id'])->first();
        if ($userToken) {
            if (time() < strtotime($userToken->next_generate_at)) {
                $result['error'] = 'Vui lòng chờ ' . config('app.user_invitation_token_regen_at') . ' phút trước khi tạo một mã mời mới!';
                return $result;
            }
            if ($userToken->count() > 0) {
                UserInviteToken::destroy($userToken->token);
            }
        }
        do {
            $token = Str::random(config('app.user_invitation_token_length'));
        } while (
            UserInviteToken::where('expired_at', '>=', date('Y-m-d H:i:s', time()))
                ->where('token', $token)->count() > 0
        );
        $token_info = [
            'token' => $token,
            'user_id' => $user['id'],
            'expired_at' => date(
                'Y-m-d H:i:s',
                time() + TrovieHelper::getMinuteToTimeStamp(config('app.user_invitation_token_minutes'))
            ),
            'next_generate_at' => date(
                'Y-m-d H:i:s',
                time() + TrovieHelper::getMinuteToTimeStamp(config('app.user_invitation_token_regen_at'))
            ),
        ];

        if (UserInviteToken::create($token_info)->toArray()) {
            $result['data'] = $token_info;
            return $result;
        }
        return $result;
    }

    public function getUserByInviteToken($token)
    {
        $user = \DB::table('user_invite_tokens')
            ->where('token', $token)->first();
        $userHasRoom = \DB::table('room_user')->where('active', 1)->where('user_id', $user->user_id)->exists();
        if ($user && !$userHasRoom) {
            $userRepository = new UserRepository();
            if (time() <= strtotime($user->expired_at)) {
                $user_info = $userRepository->find($user->user_id, ['detail'])->toArray();
                $user_return_keys = [
                    'id',
                    'birthday',
                    'full_name',
                    'gender',
                    'address',
                    'phone',
                    'id_card',
                    'id_card_date',
                    'id_card_address'
                ];
                $result = [];
                foreach ($user_return_keys as $key) {
                    if (isset($user_info[$key]) && !empty($user_info[$key])) {
                        $result[$key] = $user_info[$key];
                        continue;
                    }
                    $result[$key] = $user_info['detail'][$key];
                }
                return $result;
            }
            return false;
        }
        return false;
    }

    public function updateUser($id, $attributes)
    {
        $user_info_keys = ['full_name', 'email', 'gender', 'role', 'birthday'];
        $user_detail_keys = ['address', 'phone', 'id_card', 'id_card_date', 'id_card_address', 'desc'];
        $user_info = [];
        $user_detail_info = [];
        foreach ($attributes as $key => $attribute) {
            if (in_array($key, ['birthday', 'id_card_date'])) {
                $attribute = TrovieHelper::convertDateFormat($attribute);
            }
            if (in_array($key, $user_info_keys)) {
                $user_info[$key] = $attribute;
            }
            if (in_array($key, $user_detail_keys)) {
                $user_detail_info[$key] = $attribute;
            }
        }

        $userUpdated = $this->update($id, $user_info);
        if ($userUpdated && UserDetail::find($id)->update($user_detail_info)) {
            return true;
        }
        return false;
    }

    public function updateAvatar($file, $id)
    {
        $current_user = $this->find($id);
        $new_name = '';
        if (!empty($current_user->avatar)) {
            $new_name = TrovieFile::updateFIle($file, $current_user->avatar, config('filepath.images.avatar.user'));
        } else {
            $new_name = TrovieFile::storeFile($file, config('filepath.images.avatar.user'));
        }
        $current_user->avatar = $new_name;
        if ($current_user->save()) {
            return 'storage/' . $new_name;
        }
        return false;
    }

    public function deleteUser($id)
    {
        $contractRepo = new ContractRepository();

        $user = $this->find($id, ['hosts']);
        TrovieFile::deleteFIle($user->avatar);
        if (!empty($user->hosts) && count($user->hosts->toArray()) > 0) {
            $hostRepo = new HostRepository();
            $host_ids = TrovieHelper::convertAssocIdArrayToValueIdArray($user->hosts->toArray(), 'id');
            foreach ($host_ids as $host_id) {
                $hostRepo->destroyHost($host_id);
            }
        }
        return $this->delete($id);
    }

    public function getAdminAllUsers($relations = ['detail'])
    {
        return $this->_model
            ->where('admin_role', '<', config('app.role.web.admin'))
            ->with($relations)->get();
    }

    public function createUser($attributes)
    {
        $user_info_keys = ['username', 'password', 'full_name', 'email', 'gender', 'birthday', 'role'];
        $user_detail_keys = ['address', 'phone', 'id_card', 'id_card_date', 'id_card_address', 'desc'];
        $user_info = [];
        $user_detail_info = [];
        foreach ($attributes as $key => $attribute) {
            if (in_array($key, ['birthday', 'id_card_date'])) {
                $attribute = TrovieHelper::convertDateFormat($attribute);
            }
            if (in_array($key, $user_info_keys)) {
                $user_info[$key] = $attribute == 'password' ? \Hash::make($attribute) : $attribute;
            }
            if (in_array($key, $user_detail_keys)) {
                $user_detail_info[$key] = $attribute;
            }
        }

        $userCreated = $this->create($user_info);
        if ($userCreated) {
            $user_detail_info = array_merge($user_detail_info, ['user_id' => $userCreated->id]);
            UserDetail::create($user_detail_info);
            if (!empty($attributes['avatar'])) {
                $this->updateAvatar($attributes['avatar'], $userCreated->id);
            }
            return true;
        }
        return false;
    }

    public function changePassword($id, array $attributes, bool $isAdmin)
    {
        $user = $this->_model->makeVisible(['password'])->where('id', $id)->first();
        if (!$isAdmin || ($isAdmin && ($id === auth()->id()))) {
            if (!\Hash::check($attributes['old_password'], $user->password)) {
                throw \Illuminate\Validation\ValidationException::withMessages([
                    'old_password' => ['Mật khẩu cũ không chính xác.'],
                ]);
                return false;
            }
        }
        return $this->_model->where('id', $id)->update([
            'password' => \Hash::make($attributes['password'])
        ]);
    }

    public function cancelCurrentContract(?int $id)
    {
        $result = ['data' => false, 'error' => ''];;
        $currentContract = \DB::table('room_user')
            ->where([
                ['user_id', '=', $id],
                ['active', '=', 1]
            ]);
        if ($currentContract->count() <= 0) {
            $result['error'] = 'Bạn không có hợp đồng nào.';
            return $result;
        }
        if ($currentContract->update(['active' => 0])) {
            $result['data'] = true;
            return $result;
        } else {
            $result['error'] = 'Hủy hợp đồng thất bại';
        }
        return $result;
    }
}
