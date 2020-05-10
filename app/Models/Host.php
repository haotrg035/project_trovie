<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Host extends Model
{
    protected $table = 'hosts';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id', 'name', 'desc', 'address', 'district_id', 'city_id', 'latitude', 'longitude', 'floors'];
}
