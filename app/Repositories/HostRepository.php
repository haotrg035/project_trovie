<?php


namespace App\Repositories;


use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use App\Models\Host;
use App\Models\HostGallery;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;

class HostRepository extends EloquentRepository implements HostEloquentRepositoryInterface
{

    public function getModel()
    {
        return Host::class;
    }

    public function getAllUserHosts()
    {
        $data = $this->_model->with(['gallery'])->where('user_id', auth()->id())->get()->toArray();
        foreach ($data as $key => $host) {
            $data[$key]['cost_electric'] = TrovieHelper::currencyFormat($host['cost_electric']);
            $data[$key]['cost_water'] = TrovieHelper::currencyFormat($host['cost_water']);
//            $data[$key]['image'] = 'storage/' . $host['image'];
        }
        return $data;
    }

    public function getHostDetail($id)
    {
        $data = $this->_model->with([
            'gallery',
            'user' => function ($query) {
                return $query->get()->append(['phone']);
            }
        ])->find($id)->toArray();
//        $data['image'] = TrovieFile::checkFile($data['image']);
        foreach ($data['gallery'] as $key => $image) {
            $data['gallery'][$key]['image'] = TrovieFile::checkFile($image['image']);
        }
        return $data;
    }

    public function create(array $attributes)
    {
        $city = ucwords(TrovieHelper::stripAddressComponentName($attributes['city_name']));
        $district = ucwords(TrovieHelper::stripAddressComponentName($attributes['district_name']));

        $attributes['cost_electric'] = TrovieHelper::parseCurrencyString($attributes['cost_electric']);
        $attributes['cost_water'] = TrovieHelper::parseCurrencyString($attributes['cost_water']);
        $attributes['user_id'] = auth()->id();
        $attributes['city_id'] = \DB::table('cities')->where('name', $city)->first()->id;
        $attributes['district_id'] = \DB::table('districts')->where('name', $district)->first()->id;
        $hostCreated = $this->_model->create($attributes);
        if ($hostCreated) {
//            $defaultUnits = config('app.default_service_units');
//            if (!empty($defaultUnits)) {
//                $defaultUnits = array_map(function ($unit) use ($hostCreated) {
//                    return ['name' => $unit, 'user_id' => $hostCreated->user_id];
//                }, $defaultUnits);
//                \DB::table('service_units')->insert($defaultUnits);
//            }
            $defaultServices = config('app.default_services');
            $units = \DB::table('service_units')->where('user_id', $hostCreated->user_id)->get()->toArray();
            $units = TrovieHelper::convertAssocIdArrayToValueIdArray($units, 'id');
            if (!empty($defaultServices)) {
                $array_map = [];
                foreach ($defaultServices as $key => $service) {
                    $array_map[$key] = [
                        'name' => $service,
                        'user_id' => $hostCreated->user_id,
                        'unit_id' => $units[array_rand($units)],
                        'cost' => 0
                    ];
                }
                $defaultServices = $array_map;
            }
            \DB::table('services')->insert($defaultServices);
            return $defaultServices;
        }
        return false;
    }

    public function update($id, array $attributes)
    {
        if (isset($attributes['city_name'])) {
            $city = ucwords(TrovieHelper::stripAddressComponentName($attributes['city_name']));
            $attributes['city_id'] = \DB::table('cities')->where('name', $city)->first()->id;
        }
        if (isset($attributes['district_name'])) {
            $district = ucwords(TrovieHelper::stripAddressComponentName($attributes['district_name']));
            $attributes['district_id'] = \DB::table('districts')->where('name', $district)->first()->id;
        }

        if (isset($attributes['notice'])) {
            $attributes['notice'] = 1;
        } else {
            $attributes['notice'] = 0;
        }
        if (isset($attributes['cost_electric'])) {
            $attributes['cost_electric'] = TrovieHelper::parseCurrencyString($attributes['cost_electric']);
        }
        if (isset($attributes['cost_water'])) {
            $attributes['cost_water'] = TrovieHelper::parseCurrencyString($attributes['cost_water']);
        }
        $result = $this->find($id);
        if ($result) {
            $result->update($attributes);
            return $result;
        }
        return false;
    }

    public function updateAvatar($file, $id)
    {
        $current_host = $this->find($id);
        $new_name = '';
        if (!empty($current_host->image)) {
            $new_name = TrovieFile::updateFIle($file, $current_host->image, config('filepath.images.avatar.host'));
        } else {
            $new_name = TrovieFile::storeFile($file, config('filepath.images.avatar.host'));
        }
        $current_host->image = $new_name;
        if ($current_host->save()) {
            return 'storage/' . $new_name;
        }
        return false;
    }

    public function addGalleryImage($file, $id)
    {
        $image_path = TrovieFile::storeFile($file, config('filepath.images.gallery.host'));
        $result = HostGallery::insertGetId([
            'image' => $image_path,
            'host_id' => $id
        ]);
        if ($result) {
            try {
                return [
                    'id' => $result,
                    'image' => asset(TrovieFile::checkFile($image_path)),
                    'delete_url' => route('api.user.host.gallery_remove', [$id, $result])
                ];
            } catch (\Exception $e) {
                return false;
            }
        }
        return false;
    }

    public function removeGalleryImage($id)
    {
        $image = HostGallery::find($id);
        if (TrovieFile::deleteFIle($image->image) && $image->delete()) {
            return true;
        }
        return false;
    }

    public function getHostsByUserId($id, $attachRoomList = false)
    {
        $hosts = '';
        if ($attachRoomList) {
            $hosts = $this->_model->with(['rooms'])->where('user_id', $id)->get();
        } else {
            $hosts = $this->_model->where('user_id', $id)->get();
        }
        if ($hosts) {
            return $hosts;
        }
        return false;
    }

    public function getClosestHostAround(array $locate, $distance = 0, $total = 5)
    {
        $kilometer_cont = 6371;
        $mile_cont = 3959;
        $result = \DB::table('hosts')->selectRaw('*,
                 (3959 * acos ( cos ( radians(' . $locate['lat'] . ') )
                  * cos( radians( latitude ) )
                  * cos( radians( longitude )
                  - radians(' . $locate['long'] . ') )
                  + sin ( radians(' . $locate['lat'] . ') )
                  * sin( radians( latitude ) ) ) )
                  AS distance')
            ->having('distance', '>=', 0)
            ->orderBy('distance')
            ->limit($total);
        if ($distance > 0) {
            $result = $result->having('distance', '<', $distance);
        }
        return $result->get();
    }

    public function destroyHost($id)
    {
        $currentHost = $this->find($id, ['rooms']);
        TrovieFile::deleteFIle($currentHost->image);
        $galleries = \DB::table('host_gallery')->where('host_id', $id);
        if ($galleries->exists()) {
            foreach ($galleries->get() as $gallery) {
                $this->removeGalleryImage($gallery->id);
            }
        }
        if (!empty($currentHost->rooms)) {
            $roomRepo = new RoomRepository();
            foreach ($currentHost->rooms as $room) {
                $roomRepo->deleteRoom($room->id);
            }
        }
        return $this->delete($id);
    }
}
