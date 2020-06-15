<?php


namespace App\Repositories;

use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use App\Models\Room;
use App\Models\RoomGallery;
use App\Models\Service;
use App\Models\User;
use App\Repositories\Interfaces\RoomEloquentRepositoryInterface;
use function foo\func;

class RoomRepository extends EloquentRepository implements RoomEloquentRepositoryInterface
{

    public function getModel()
    {
        return Room::class;
    }

    public function getAllRoomsByHost($id)
    {
        $room_list = Room::where('host_id', $id)->with([
            'services' => function ($query) {
                return $query->get(['id', 'name']);
            },
            'users' => function ($query) {
                return $query->get(['id', 'full_name', 'avatar']);
            }
        ])->get();
        $service_list = Service::where('user_id', auth()->id())->get()->toArray();
        $room_count['total'] = $room_list->count();

        for ($i = 1; $i <= 3; $i++) {
            $room_count['state']["$i"] = $room_list->where('state', $i)->count();
        }
        foreach ($room_list as $keyR => $room) {
            foreach ($room['users'] as $keyU => $user) {
                $room_list[$keyR]['users'][$keyU]['avatar'] = TrovieFile::checkFile($user['avatar']);
            }
        }
        foreach ($service_list as $key => $item) {
            $service_list[$key]['cost'] = TrovieHelper::parseCurrencyString($item['cost']) > 0 ? $item['cost'] . ' đ' : 'Miễn phí';
        }

        $data['room_list'] = $room_list->toArray();
        $data['service_list'] = $service_list;
        $data['room_count'] = $room_count;
        $data['host_id'] = $id;
        if ($data) {
            return $data;
        }
        return false;
    }

    public function getRoom($host_id, $room_id)
    {

        $room = $this->_model
            ->with([
                'host',
//                'users' => function ($query) {
//                    return $query->get(['id', 'full_name', 'avatar']);
//                },
                'services' => function ($query) {
                    return $query->with(['unit'])->get();
                },
                'gallery',
            ])
            ->where('host_id', $host_id)->where('id', $room_id)
            ->first();
//        ['id', 'name', 'price', 'floor', 'members', 'acreage', 'state', 'announcement', 'notice']
        $room['service_ids'] = TrovieHelper::convertAssocIdArrayToValueIdArray($room['services']->toArray(), 'id');
        $room['host']['cost_electric'] = TrovieHelper::currencyFormat($room['host']['cost_electric']);
        $room['host']['cost_water'] = TrovieHelper::currencyFormat($room['host']['cost_water']);
        foreach ($room['gallery'] as $key => $item) {
            $room['gallery'][$key]['image'] = asset(TrovieFile::checkFile($item['image']));
        }

        if ($room) {
            return $room->toArray();
        }
        return false;
    }

    public function getRoomMembers($id)
    {
        $result = $this->_model->with([
            'users' => function ($query) {
                return $query->with([
                    'detail' => function ($q) {
                        return $q->get(['user_id', 'career', 'id_card', 'address', 'phone']);
                    }
                ])->get(['id', 'full_name', 'avatar', 'email', 'birthday', 'gender']);
            }
        ])->where('id', $id)->first()->toArray();

        if (count($result) > 0) {
            $result = $result['users'];
            foreach ($result as $key => $user) {
                $result[$key]['pivot']['date_in'] = date('d/m/Y', strtotime($user['pivot']['date_in']));
                $result[$key]['detail'] = array_diff_key(
                    $user['detail'],
                    ['created_at' => 1, 'desc' => 1, 'id_card_date' => 1, 'updated_at' => 1, 'user_id' => 1]
                );
            }
            return $result;
        }

        if (count($result) == 0) {
            return [];
        }

        return false;
    }

    public function create(array $attributes)
    {
        $roomData = array_diff_key($attributes, ['api_token' => 1, 'services' => 1, 'user_id' => 1]);
        if (!isset($roomData['state'])) {
            $roomData['state'] = 1;
        }
        if (!isset($roomData['desc'])) {
            $roomData['desc'] = 0;
        }
        $roomData['price'] = TrovieHelper::parseCurrencyString($roomData['price']);
        try {
            $room = $this->_model->create($roomData);
            if ($room) {
                if (isset($attributes['services'])) {
                    $serviceDataSet = [];
                    foreach ($attributes['services'] as $service) {
                        $serviceDataSet[] = ['room_id' => $room->id, 'service_id' => $service];
                    }
                    \DB::table('room_service')->insert($serviceDataSet);
                }
                $result = $this->_model->with([
                    'services' => function ($query) {
                        return $query->get(['id', 'name']);
                    },
//                    'users' => function ($query) {
//                        return $query->get(['id', 'avatar', 'full_name']);
//                    }
                ])->find($room->id);
                return $result;
            }
        } catch (\Exception $e) {
            \Log::error('Creating room failed, host id: ' . $attributes['host_id'] . ' Error: ' . $e->getMessage());
        }
        return false;
    }

    public function addGalleryImage($file, $host_id, $room_id)
    {
        $image_path = TrovieFile::storeFile($file, config('filepath.images.gallery.room'));
        $result = RoomGallery::insertGetId([
            'image' => $image_path,
            'room_id' => $room_id
        ]);
        if ($result) {
            try {
                return [
                    'id' => $result,
                    'image' => asset(TrovieFile::checkFile($image_path)),
                    'delete_url' => route('api.user.host.room.gallery_remove', [$host_id, $result])
                ];
            } catch (\Exception $e) {
                \Log::error('Fail to add image to gallery, room id :' . $room_id . 'Error: ' . $e->getMessage());
            }
        }
        \Log::error('Fail to add image to gallery, room id :' . $room_id);
        return false;
    }

    public function removeGalleryImage($id)
    {
        $image = RoomGallery::find($id);
        if (TrovieFile::deleteFIle($image->image) && $image->delete()) {
            return true;
        }
        return false;
    }

    function update($id, array $attributes)
    {
        if (isset($attributes['services'])) {
            try {
                $currentServices = \DB::table('room_service')->where('room_id', $id)->get()->toArray();
                $currentServices = array_map(function ($val) {
                    return $val->service_id;
                }, $currentServices);

                if ($currentServices != $attributes['services']) {
                    $newServiceList = array_map(function ($val) use ($id) {
                        return ['room_id' => $id, 'service_id' => $val];
                    }, $attributes['services']);
                    \DB::table('room_service')->where('room_id', $id)->delete();
                    \DB::table('room_service')->insert($newServiceList);
                }
            } catch (\Error $e) {
                \Log::error('Failed in deleting and adding service list to room, room id: ' . $id . ' Error: ' . $e->getMessage());
                return false;
            }
        } else {
            \DB::table('room_service')->where('room_id', $id)->delete();
        }
        $room = $this->_model->where('id', $id);
        $attributes = array_diff_key(
            $attributes,
            [
                'services' => 1,
                'old_room_id' => 1,
                'room_id' => 1,
                '_method' => 1,
                'api_token' => 1,
                'user_id' => 1,
                'ec_ec' => 1
            ]
        );
        if (isset($attributes['notice'])) {
            $attributes['notice'] = 1;
        } else {
            $attributes['notice'] = 0;
        }
        $attributes['price'] = TrovieHelper::parseCurrencyString($attributes['price']);
        if ($room->update($attributes)) {
            $instance = new $this->_model;
            $room = $instance->with([
                'services' => function ($query) {
                    return $query->get(['id', 'name']);
                },
                'users' => function ($query) {
                    return $query->get(['id', 'full_name', 'avatar']);
                }
            ])->where('id', $id)->first()->updateState()->toArray();
            foreach ($room['users'] as $key => $user) {
                $room['users'][$key]['avatar'] = asset(TrovieFile::checkFile($user['avatar']));
            }
            return $room;
        }
        return false;
    }
}
