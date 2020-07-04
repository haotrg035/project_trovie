<?php


namespace App\Repositories;

use App\Models\Unit;
use App\Repositories\Interfaces\UnitEloquentRepositoryInterface;

class UnitRepository extends EloquentRepository implements UnitEloquentRepositoryInterface
{

    public function getModel()
    {
        return Unit::class;
    }
}
