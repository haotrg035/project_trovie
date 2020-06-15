<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GuestUser extends Model
{
    protected $table = 'guest_users';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'birthday',
        'full_name',
        'gender',
        'avatar',
        'address',
        'phone',
        'id_card',
        'id_card_date',
        'id_card_address'
    ];
}
