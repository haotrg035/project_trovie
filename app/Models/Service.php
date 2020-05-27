<?php

namespace App\Models;

use App\Helper\TrovieHelper;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $table = 'services';
    protected $fillable = ['unit_id', 'user_id', 'name', 'cost', 'type'];
    public $timestamps = false;

    public function unit()
    {
        return $this->hasOne(ServiceUnit::class, 'id', 'unit_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    function getCostAttribute($value)
    {
        return TrovieHelper::currencyFormat($value);
    }

//    function setCostAttribute($value)
//    {
//        return TrovieHelper::parseCurrencyString($value);
//    }
}
