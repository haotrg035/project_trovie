<?php

namespace App\Models;

use App\Helper\TrovieHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Room extends Model
{
    use SoftDeletes;

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
        'cost_electric',
        'cost_water'
    ];
    public $timestamps = false;

    public function getTotalUsersAttribute()
    {
        $users = $this->users()->get();
        $guest_users = $this->guestUsers()->get();
        return count($users) + count($guest_users);
    }

    public function host()
    {
        return $this->belongsTo(Host::class, 'host_id');
    }
//    public function getUsersAttribute(){
//        return
//    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'room_user')
            ->withPivot('date_in')
            ->wherePivot('active', 1);
    }

    public function guestUsers()
    {
        return $this->belongsToMany(GuestUser::class, 'room_guest_user')
            ->withPivot('date_in')
            ->wherePivot('active', 1);
    }

    public function articles()
    {
        return $this->hasMany(RoomArticle::class, 'room_id', 'id');
    }

    public function allKindUsers()
    {
        return $this->belongsToMany(User::class, 'room_user')->withPivot('date_in');
    }

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

    public function contracts()
    {
        return $this->belongsToMany(Contract::class, 'room_user')->withPivot(['active', 'user_id']);
    }

    public function guestContracts()
    {
        return $this->belongsToMany(Contract::class, 'room_guest_user')->withPivot(['active', 'guest_user_id']);
    }

    public function gallery()
    {
        return $this->hasMany(RoomGallery::class, 'room_id', 'id');
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class, 'room_id', 'id');
    }

    public function getPriceAttribute($value)
    {
        return TrovieHelper::currencyFormat($value);
    }

    public function getCostElectricAttribute($value)
    {
        return TrovieHelper::currencyFormat($value);
    }

    public function getCostWaterAttribute($value)
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
