<?php


namespace App\Repositories;

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

    public function getHostIds($id)
    {
        $hostRepository = new HostRepository();
        $hosts = $hostRepository->getHostsByUserId($id);
        if ($hosts) {
            return $hosts;
        }
        return [];
    }

    public function getAllByRoom($ids)
    {
        $rooms = [];
        $rooms = [];
        $result = [];
        if (!is_array($ids)) {
            $ids = [$ids];
        }
        try {
            $rooms = Room::with([
                'contracts' => function ($query) {
                    return $query->with(['parties'])->get();
                }
            ])->whereIn('id', $ids)->get()->toArray();
        } catch (\Exception $e) {
            \Log::error('get Contract failed, Error: ' . $e->getMessage());
        }

        if ($rooms) {
            foreach ($rooms as $room) {
                foreach ($room['contracts'] as $contract) {
                    $_contract = array_diff_key($contract, ['parties' => 1, 'room' => 1, 'pivot' => 1]);
                    $_parties = array_diff_key($contract['parties'], ['contract_id' => 1]);
                    $result[] = array_merge($_contract, $_parties);
                }
            }
            return $result;
        }
        return false;
    }

    public function getAllByHost($id)
    {
        $list_room_id = TrovieHelper::convertAssocIdArrayToValueIdArray(
            \DB::table('rooms')->where('host_id', $id)->get('id')->toArray(),
            'id'
        );
        return $this->getAllByRoom($list_room_id);
    }

}
