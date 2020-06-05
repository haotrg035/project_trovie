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
        'price',
        'floor',
        'acreage',
        'members',
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
        return $this->belongsToMany(User::class, 'room_user')->withPivot('date_in');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

    public function gallery()
    {
        return $this->hasMany(RoomGallery::class, 'room_id', 'id');
    }

    public function getPriceAttribute($value)
    {
        return TrovieHelper::currencyFormat($value);
    }

    public function updateState()
    {
        $total_users = $this->users()->count();
        $this->state = $total_users >= $this->members ? 3 : ($total_users < $this->members && $total_users > 0 ? 2 : 1);
        if ($this->save()) {
            return $this;
        }
        return false;
    }
}
