<?php


namespace App\Repositories;

use App\Models\Service;
use App\Repositories\Interfaces\ServiceEloquentRepositoryInterface;

class ServiceRepository extends EloquentRepository implements ServiceEloquentRepositoryInterface
{

    public function getModel()
    {
        return Service::class;
    }
}
