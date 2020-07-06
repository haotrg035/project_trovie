<?php

namespace App\Models;

use App\Helper\TrovieFile;
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
//        'avatar',
        'address',
        'phone',
        'id_card',
        'id_card_date',
        'id_card_address'
    ];

    public function getAvatarAttribute($val){
        return asset(TrovieFile::checkFile($val));
    }

    protected $casts = [
        'birthday' => 'date:d/m/Y',
        'updated_at' => 'datetime:d/m/Y',
        'created_at' => 'datetime:d/m/Y'
    ];
}
