<?php

namespace App\Models;

use App\Helper\TrovieFile;
use Illuminate\Database\Eloquent\Model;

class HostGallery extends Model
{
    protected $table = 'host_gallery';
    protected $primaryKey = 'id';

    public function host()
    {
        return $this->belongsTo(Host::class, 'host_id', 'id');
    }

}
