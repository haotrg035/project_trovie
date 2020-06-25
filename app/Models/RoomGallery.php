<?php

namespace App\Models;

use App\Helper\TrovieFile;
use Illuminate\Database\Eloquent\Model;

class RoomGallery extends Model
{
    protected $table = 'room_gallery';

//    public function getImageAttribute($value)
//    {
//        return asset(TrovieFile::checkFile($value));
//    }
}
