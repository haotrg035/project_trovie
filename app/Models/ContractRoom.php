<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContractRoom extends Model
{
    protected $table = 'contract_room_details';
    protected $primaryKey = 'contract_id';
    public $timestamps = false;
    protected $fillable = ['contract_id', 'price', 'cost_water', 'cost_electric', 'date_payment', 'address'];
}
