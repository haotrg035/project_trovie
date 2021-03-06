<?php

namespace App\Models;

use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Host extends Model
{
    use SoftDeletes;
    protected $table = 'hosts';
    protected $primaryKey = 'id';
    protected $appends = ['countable_info'];
    protected $fillable = [
        'user_id',
        'name',
        'desc',
        'announcement',
        'image',
        'notice',
        'address',
        'phone',
        'district_id',
        'city_id',
        'date_payment',
        'date_note_electric',
        'date_note_water',
        'cost_electric',
        'cost_water',
        'latitude',
        'longitude',
        'floors'
    ];
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function rooms()
    {
        return $this->hasMany(Room::class, 'host_id', 'id');
    }

    public function gallery()
    {
        return $this->hasMany(HostGallery::class, 'host_id', 'id');
    }

    public function getImageAttribute($value)
    {
        return asset(TrovieFile::checkFile($value));
    }

    function getCountableInfoAttribute()
    {
        $totalUsers = 0;
        $rooms = $this->rooms()->get();
        $room_type = [
            'free' => 0,
            'waiting' => 0,
            'full' => 0
        ];
        foreach ($rooms as $room) {
            $totalUsers += $room->total_users;
            switch ($room->state) {
                case config('app.room_state.free') :
                    {
                        $room_type['free']++;
                        break;
                    }
                case config('app.room_state.waiting') :
                    {
                        $room_type['waiting']++;
                        break;
                    }
                case config('app.room_state.full') :
                    {
                        $room_type['full']++;
                        break;
                    }
            }
        }
        return [
            'rooms' => count($rooms),
            'users' => $totalUsers,
            'room_type' => $room_type
        ];
    }

//    public function setCostElectricAttribute($value)
//    {
//        $this->attributes['cost_electric'] = TrovieHelper::parseCurrencyString($value);
//    }
//
//    public function setCostWaterAttribute($value)
//    {
//        $this->attributes['cost_water'] = TrovieHelper::parseCurrencyString($value);
//    }
}
