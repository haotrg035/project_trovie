<?php


namespace App\Repositories;

use App\Helper\TrovieFile;
use App\Repositories\Interfaces\SettingEloquentRepositoryInterface;
use App\Models\Setting;

class SettingRepository extends EloquentRepository implements SettingEloquentRepositoryInterface
{

    public function getModel()
    {
        return Setting::class;
    }

    public function updateSettings($attributes)
    {
        $result = true;
        foreach ($attributes as $key => $attribute) {
            if (!empty($attribute)) {
                if ($this->_model->where('name', $key)->exists()) {
                    $this->_model->where('name', $key)->update(['value' => $attribute]);
                } else {
                    if (!$this->_model->where('name', $key)->insert([
                        'name' => $key,
                        'value' => $attribute
                    ])) {
                        $result = false;
                    }
                };
            }
        }
        return $result;
    }


    public function updateBanner($file)
    {
        $result = null;
        $new_name = '';
        $settings = $this->_model->get()->keyBy('name')->transform(function ($setting) {
            return $setting->value;
        });
        if (isset($settings['app_banner'])) {
            $new_name = TrovieFile::updateFIle($file, $settings['app_banner'], config('filepath.images.web.logo'));
            $result = $this->_model->where('name' , 'app_banner')->update(['value' => $new_name]);
        } else {
            $new_name = TrovieFile::storeFile($file, config('filepath.images.web.logo'));
            $result = $this->_model->insert(['name' => 'app_banner', 'value' => $new_name]);
        }
        if ($result){
            return asset(TrovieFile::checkFile($new_name));
        }
        return false;
    }
}
