<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserInviteToken extends Model
{
    protected $table = 'user_invite_tokens';
    protected $primaryKey = 'token';
    public $timestamps = false;
    protected $fillable = ['token', 'user_id', 'expired_at', 'next_generate_at'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    protected $casts = [
        'token' => 'string',
    ];
}
