<?php

namespace App\Models;

use App\Helper\TrovieHelper;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    protected $table = 'contracts';
    protected $primaryKey = 'id';
    protected $fillable = ['created_at', 'expire_date', 'deposit'];
    protected $hidden = ['updated_at'];

    public function parties()
    {
        return $this->hasOne(ContractParty::class, 'contract_id', $this->primaryKey);
    }

    public function room()
    {
        return $this->hasOne(ContractRoom::class, 'contract_id', $this->primaryKey);
    }

    public function getCreatedAtAttribute($value)
    {
        return date('d-m-Y', strtotime($value));
    }

    public function getExpireDateAttribute($value)
    {
        return date('d-m-Y', strtotime($value));
    }
    public function getDepositAttribute($value){
        return TrovieHelper::currencyFormat($value);
    }
}
