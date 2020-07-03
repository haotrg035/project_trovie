<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menu_tables';
    protected $fillable = ['title', 'parent_id', 'pos', 'url', 'type'];
    public $timestamps = false;
}
