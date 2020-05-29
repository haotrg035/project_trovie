<?php


namespace App\Repositories;

use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use App\Models\Room;
use App\Models\Service;
use App\Repositories\Interfaces\RoomEloquentRepositoryInterface;

class RoomRepository extends EloquentRepository implements RoomEloquentRepositoryInterface
{

    public function getModel()
    {
        return Room::class;
    }

    public function getAllRoomsByHost($id)
    {
        $room_list = Room::where('host_id', $id)->with([
            'services' => function ($query) {
                return $query->get(['id', 'name']);
            },
            'users' => function ($query) {
                return $query->get(['id', 'full_name', 'avatar']);
            }
        ])->get();
        $service_list = Service::where('user_id', auth()->id())->get()->toArray();
        $room_count['total'] = $room_list->count();

        for ($i = 1; $i <= 3; $i++) {
            $room_count['state']["$i"] = $room_list->where('state', $i)->count();
        }
        foreach ($room_list as $keyR => $room) {
            foreach ($room['users'] as $keyU => $user) {
                $room_list[$keyR]['users'][$keyU]['avatar'] = TrovieFile::checkFile($user['avatar']);
            }
        }
        foreach ($service_list as $key => $item) {
            $service_list[$key]['cost'] = TrovieHelper::parseCurrencyString($item['cost']) > 0 ? $item['cost'] . ' đ' : 'Miễn phí';
        }

        $data['room_list'] = $room_list->toArray();
        $data['service_list'] = $service_list;
        $data['room_count'] = $room_count;
        $data['host_id'] = $id;
        if ($data) {
            return $data;
        }
        return false;
    }

    public function getRoom($host_id, $room_id)
    {
        $room = $this->_model
            ->with([
//                'users' => function ($query) {
//                    return $query->get(['id', 'full_name', 'avatar']);
//                },
                'services' => function ($query) {
                    return $query->get(['id', 'cost', 'name']);
                }
            ])
            ->where('host_id', $host_id)->where('id', $room_id)
            ->first(['id', 'name', 'price', 'floor', 'members', 'acreage', 'announcement', 'notice']);
        $room['service_ids'] = array_map(function ($val) {
            return $val['id'];
        }, $room['services']->toArray());
        if ($room) {
            return $room->toArray();
        }
        return false;
    }
}
