<?php


namespace App\Repositories\Interfaces;


interface ContractEloquentRepositoryInterface
{

    public function getListHostByUser($id);

    public function getAllByHost($id);

    public function getContract($id);

    public function createContract($data);

    public function cancelContract($id);

    public function renewContract($id, $expired_at);
}
