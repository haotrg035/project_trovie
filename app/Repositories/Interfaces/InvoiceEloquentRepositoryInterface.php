<?php


namespace App\Repositories\Interfaces;


interface InvoiceEloquentRepositoryInterface
{
    public function getAllByHost($id);

    public function getAllByRoom($id);

    public function paidInvoice($id);

    public function createInvoice($attributes);
}
