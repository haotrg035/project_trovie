<?php


namespace App\Repositories;

use App\Helper\TrovieFile;
use App\Models\City;
use App\Repositories\Interfaces\CityEloquentRepositoryInterface;

class CityRepository extends EloquentRepository implements CityEloquentRepositoryInterface
{

    public function getModel()
    {
        return City::class;
    }

    public function getAllCitiesAndDistricts()
    {
        return $this->_model->with(['districts'])->get()->toArray();
    }

    public function updateCity($attributes, $id)
    {
        $attributes = array_diff_key($attributes, ['_token' => 1, '_method' => 1, 'avatar' => 1]);
        if (isset($attributes['active'])) {
            $attributes['active'] = 2;
        } else {
            $attributes['active'] = 1;
        }
        return $this->update($id, $attributes);
    }

    public function updateAvatar($file, $id)
    {
        $city = $this->find($id);
        $new_name = '';
        if (!empty($city->avatar)) {
            $new_name = TrovieFile::updateFIle($file, $city->avatar, config('filepath.images.avatar.city'));
        } else {
            $new_name = TrovieFile::storeFile($file, config('filepath.images.avatar.city'));
        }
        $city->avatar = $new_name;
        if ($city->save()) {
            return 'storage/' . $new_name;
        }
        return false;
    }
}
