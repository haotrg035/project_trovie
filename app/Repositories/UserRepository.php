<?php


namespace App\Repositories;

use App\Models\User;
use App\Repositories\Interfaces\UserEloquentRepositoryInterface;

class UserRepository extends EloquentRepository implements UserEloquentRepositoryInterface
{

    public function getModel()
    {
        return User::class;
    }

    public function getUser($id)
    {
        $user = $this->_model->where('id', $id)->first(['id', 'avatar', 'birthday', 'email', 'full_name', 'gender']);

        if ($user) {
            return $user->toArray();
        }
        return false;
    }
}
