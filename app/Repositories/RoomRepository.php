<?php


namespace App\Repositories;

use App\Models\Room;
use App\Repositories\Interfaces\RoomEloquentRepositoryInterface;

class RoomRepository extends EloquentRepository implements RoomEloquentRepositoryInterface
{

    public function getModel()
    {
        return Room::class;
    }

    public function getAllRoomsByHost($id)
    {
        $room_list = Room::where('host_id', $id)->get();
        $room_count['total'] = $room_list->count();
        for ($i = 1; $i <= 3; $i++) {
            $room_count['state']["$i"] = $room_list->where('state', $i)->count();
        }
//        foreach ($room_list as $key => $value) {
//            $room_list[$key]['']
//        }
        $data['room_list'] = $room_list->toArray();
        $data['room_count'] = $room_count;
        if ($data) {
            return $data;
        }
        return false;
    }
}
