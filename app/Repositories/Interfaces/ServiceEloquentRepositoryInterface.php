<?php


namespace App\Repositories\Interfaces;


interface ServiceEloquentRepositoryInterface
{

    public function getAllByUser(?int $id);
}
