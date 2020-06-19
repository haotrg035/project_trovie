<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomArticle extends Model
{
    protected $table = 'room_articles';
    protected $fillable = ['title', 'content', 'room_id', 'updated_at'];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
