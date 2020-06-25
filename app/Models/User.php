<?php

namespace App\Models;

use App\Helper\TrovieFile;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'password',
        'full_name',
        'email',
        'gender',
        'birthday',
        'role',
        'api_token'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'api_token',
        'remember_token',
        'email_verified_at',
        'role'
    ];
    protected $appends = ['phone'];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getAvatarAttribute($value)
    {
        return asset(TrovieFile::checkFile($value));
    }

    public function getBirthdayAttribute($value)
    {
        return date('d/m/Y', strtotime($value));
    }

    public function getIdCardAttribute($value)
    {
        return $value ? $value : '';
    }

    public function getStateAttribute()
    {
        return $this->room()->count();
    }

    public function detail()
    {
        return $this->hasOne(UserDetail::class, 'user_id', 'id');
    }

    public function room()
    {
        return $this->belongsToMany(Room::class, 'room_user')->wherePivot('active', 1);
    }

    public function inviteToken()
    {
        return $this->hasOne(UserInviteToken::class, 'user_id', 'id');
    }

    public function getPhoneAttribute()
    {
        return $this->detail()->get()->first()->phone;
    }

    public function isHostOwner()
    {
        return $this->role < 2;
    }

    public function isOwnHost($host_id)
    {
        $host_ids = \DB::table('hosts')->where('user_id', $this->id)->get('id')->toArray();
        $host_ids = array_map(function ($val) {
            return $val->id;
        }, $host_ids);
        return in_array($host_id, $host_ids);
    }

    public function isOwnRoom($room_id)
    {
        $room = \DB::table('rooms')->where('id', $room_id)->first();
        if ($room) {
            return $this->isOwnHost($room->host_id);
        }
        return false;
    }

    public function isOwnContract($contract_id)
    {
        $contract = null;

        if (\DB::table('room_user')->where(['active' => 1, 'contract_id' => $contract_id,])->exists()) {
            $contract = \DB::table('room_user')->where([
                'active' => 1,
                'contract_id' => $contract_id,
            ])->first();
        }
        if (\DB::table('room_guest_user')->where(['active' => 1, 'contract_id' => $contract_id,])->exists()) {
            $contract = \DB::table('room_user')->where([
                'active' => 1,
                'contract_id' => $contract_id,
            ])->first();
        }

        if (!$contract) {
            return false;
        }
        return $this->isOwnRoom($contract->room_id);
    }

    public function isOwnArticle($id)
    {
        $article = \DB::table('room_articles')->where('id', $id)->first();
        return $this->isOwnRoom($article->room_id);
    }
}
