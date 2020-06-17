<?php


namespace App\Repositories\Interfaces;


interface UserEloquentRepositoryInterface
{


    public function getUser($id, $relations);

    public function getUserByInviteToken($token);
}
