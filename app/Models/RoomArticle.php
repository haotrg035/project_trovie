<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomArticle extends Model
{
    protected $table = 'room_articles';
    protected $fillable = ['title', 'content', 'room_id', 'created_at','updated_at'];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    protected $casts = [
        'updated_at' => 'datetime:H:i, d/m/Y',
        'created_at' => 'datetime:H:i, d/m/Y',
    ];
}
