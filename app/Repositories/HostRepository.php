<?php


namespace App\Repositories;


use App\Models\Host;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;

class HostRepository extends EloquentRepository implements HostEloquentRepositoryInterface
{

    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return Host::class;
    }
}
