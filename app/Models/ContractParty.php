<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContractParty extends Model
{
    protected $table = 'contract_parties_details';
    protected $primaryKey = 'contract_id';
    public $timestamps = false;
    protected $fillable = [
        'contract_id',
        'a_full_name',
        'a_birthday',
        'a_gender',
        'a_address',
        'a_phone',
        'a_id_card',
        'a_id_card_date',
        'b_full_name',
        'b_birthday',
        'b_gender',
        'b_address',
        'b_phone',
        'b_id_card',
        'b_id_card_date'
    ];
    protected $hidden = [
        'a_birthday',
        'a_address',
        'a_phone',
        'a_id_card',
        'a_id_card_date',
        'b_birthday',
        'b_id_card',
        'b_id_card_date'
    ];
}
