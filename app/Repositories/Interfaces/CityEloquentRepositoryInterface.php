<?php


namespace App\Repositories\Interfaces;


interface CityEloquentRepositoryInterface
{
    public function getAllCitiesAndDistricts();

    public function updateCity($attributes, $id);

    public function getFeaturedCities();
}
