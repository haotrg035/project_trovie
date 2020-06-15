<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $table = 'user_details';
    protected $primaryKey = 'user_id';

    protected $casts = [
      'id_card_date' => 'date:d/m/Y',
    ];
}
