<?php


namespace App\Repositories\Interfaces;


interface ContractEloquentRepositoryInterface
{

    public function getHostIds($id);

    public function getAllByHost($id);
}
