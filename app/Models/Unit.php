<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $table = 'service_units';
    protected $primaryKey = 'id';
    protected $fillable = ['name','user_id'];
    public $timestamps = false;

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
