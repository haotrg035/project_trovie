<?php

namespace App\Models;

use App\Helper\TrovieFile;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = 'cities';
    protected $fillable = ['active', 'avatar'];
    public $timestamps = false;

    public function districts()
    {
        return $this->hasMany(District::class, 'city_id', 'id');
    }

    public function getAvatarAttribute($value)
    {
        return asset(TrovieFile::checkFile($value));
    }
}
