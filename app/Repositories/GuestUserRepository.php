<?php


namespace App\Repositories;

use App\Models\GuestUser;
use App\Repositories\Interfaces\GuestUserEloquentRepositoryInterface;

class GuestUserRepository extends EloquentRepository implements GuestUserEloquentRepositoryInterface
{

    public function getModel()
    {
        return GuestUser::class;
    }

}
