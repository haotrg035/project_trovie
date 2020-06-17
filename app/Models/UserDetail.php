<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $table = 'user_details';
    protected $primaryKey = 'user_id';
    protected $fillable = ['address', 'phone', 'id_card', 'id_card_date', 'id_card_address', 'desc'];

    protected $casts = [
        'id_card_date' => 'date:d/m/Y',
    ];
}
