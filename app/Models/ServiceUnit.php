<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceUnit extends Model
{
    protected $table = 'service_units';
    protected $fillable = ['name', 'user_id'];
}
