<?php


namespace App\Repositories\Interfaces;


interface UserEloquentRepositoryInterface
{


    public function getUser($id);

    public function getUserByInviteToken($token);
}
