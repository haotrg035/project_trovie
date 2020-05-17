<?php


namespace App\Repositories\Interfaces;


interface HostEloquentRepositoryInterface
{

    public function updateAvatar(\File $file, $id);
}
