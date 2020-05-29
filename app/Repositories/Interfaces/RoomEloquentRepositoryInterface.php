<?php


namespace App\Repositories\Interfaces;


interface RoomEloquentRepositoryInterface
{

    public function getAllRoomsByHost($id);

    public function getRoom($host_id, $room_id);
}
