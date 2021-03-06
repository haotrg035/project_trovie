<?php

namespace App\Models;

use App\Helper\TrovieFile;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;

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
    ];
    public $timestamps = false;
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

    public function getFollowedArticlesAttribute()
    {
        return \DB::table('saved_article')->where('user_id', $this->id)->get()->toArray();
    }

    public function hosts()
    {
        return $this->hasMany(Host::class, 'user_id', 'id');
    }

    public function detail()
    {
        return $this->hasOne(UserDetail::class, 'user_id', 'id');
    }

    public function room()
    {
        return $this->belongsToMany(Room::class, 'room_user')
            ->withPivot('date_in')
            ->wherePivot('active', 1);
    }

    public function units()
    {
        return $this->hasMany(Unit::class, 'user_id', 'id');
    }

    public function inviteToken()
    {
        return $this->hasOne(UserInviteToken::class, 'user_id', 'id');
    }

    public function getPhoneAttribute()
    {
        return $this->detail()->get()->toArray()['phone'] ?? false;
    }

    public function isAdmin()
    {
        return $this->admin_role >= config('app.role.web.admin');
    }

    public function isHostOwner()
    {
        return $this->role >= config('app.role.host.hostOwner');
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
