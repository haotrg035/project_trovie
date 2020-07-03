<?php


namespace App\Repositories\Interfaces;


interface MenuEloquentRepositoryInterface
{
    public function updatePos($data);

    public function createMenu($data);

    public function deleteMenu($id);
}
