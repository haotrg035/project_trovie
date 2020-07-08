<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $table = 'user_details';
    protected $primaryKey = 'user_id';
    protected $fillable = ['user_id','address', 'phone', 'id_card', 'id_card_date', 'id_card_address', 'desc'];
    public $timestamps = false;
    protected $casts = [
        'id_card_date' => 'date:d/m/Y',
    ];
}
