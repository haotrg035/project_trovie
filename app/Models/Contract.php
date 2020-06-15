<?php

namespace App\Models;

use App\Helper\TrovieHelper;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    protected $table = 'contracts';
    protected $primaryKey = 'id';
    protected $fillable = ['created_at', 'updated_at', 'expired_at', 'deposit', 'address', 'active'];
    protected $appends = ['state'];
    protected $casts = [
        'created_at' => 'date:d/m/Y',
        'updated_at' => 'date:d/m/Y',
        'expired_at' => 'date:d/m/Y',
    ];

    public function parties()
    {
        return $this->hasOne(ContractParty::class, 'contract_id', $this->primaryKey);
    }

    public function room_detail()
    {
        return $this->hasOne(ContractRoom::class, 'contract_id', $this->primaryKey);
    }

//    public function getCreatedAtAttribute($value)
//    {
//        return date('d-m-Y', strtotime($value));
//    }
//
//    public function getUpdatedAtAttribute($value)
//    {
//        return date('d-m-Y', strtotime($value));
//    }
//
//    public function getExpiredAtAttribute($value)
//    {
//        return date('d-m-Y', strtotime($value));
//    }

    public function getDepositAttribute($value)
    {
        return TrovieHelper::currencyFormat($value);
    }

    public function getStateAttribute()
    {
        return date('Y-m-d') <= date('Y-m-d', strtotime($this->expired_at));
    }
}
