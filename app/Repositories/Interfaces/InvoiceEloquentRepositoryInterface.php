<?php


namespace App\Repositories\Interfaces;


interface InvoiceEloquentRepositoryInterface
{
    public function getAllByHost($id);

    public function getAllByRoom($id);
}
