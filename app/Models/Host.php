<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Host extends Model
{
    protected $table = 'homes';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id', 'name', 'desc', 'address', 'district_id', 'floors'];
}
