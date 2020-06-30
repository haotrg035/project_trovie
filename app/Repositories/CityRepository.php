<?php


namespace App\Repositories;

use App\Models\City;
use App\Repositories\Interfaces\CityEloquentRepositoryInterface;

class CityRepository extends EloquentRepository implements CityEloquentRepositoryInterface
{

    public function getModel()
    {
        return City::class;
    }

    public function getAllCitiesAndDistricts(){
        return $this->_model->with(['districts'])->get()->toArray();
    }
}
