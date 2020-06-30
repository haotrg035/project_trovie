<?php

namespace App\Models;

use App\Helper\TrovieHelper;
use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    protected $table = 'invoice_details';
    public $timestamps = false;
    protected $fillable = ['invoice_id', 'service', 'quantity', 'price', 'unit'];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_id', 'id');
    }

    public function getPriceAttribute($value)
    {
        return TrovieHelper::currencyFormat($value);
    }
}
