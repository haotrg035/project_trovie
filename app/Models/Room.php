<?php

namespace App\Models;

use App\Helper\TrovieHelper;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $table = 'rooms';
    protected $primaryKey = 'id';
    protected $appends = ['total_users'];
    protected $fillable = [
        'host_id',
        'name',
        'announcement',
        'notice',
        'state',
        'type',
        'desc',
    ];

    public function getTotalUsersAttribute()
    {
        $data = $this->users()->get();
        return count($data);
    }

    public function host()
    {
        return $this->belongsTo(Host::class, 'host_id', 'id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'room_user');
    }

    public function getPriceAttribute($value)
    {
        return TrovieHelper::currencyFormat($value);
    }
}
