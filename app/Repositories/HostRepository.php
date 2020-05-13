<?php


namespace App\Repositories;


use App\Helper\TrovieHelper;
use App\Models\Host;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;

class HostRepository extends EloquentRepository implements HostEloquentRepositoryInterface
{

    public function getModel()
    {
        return Host::class;
    }

    public function getAllHostsByAuth()
    {
        $data = $this->_model->where('user_id', auth()->id())->get()->toArray();
        foreach ($data as $key => $host) {
            $data[$key]['cost_electric'] = TrovieHelper::currencyFormat($host['cost_electric']);
            $data[$key]['cost_water'] = TrovieHelper::currencyFormat($host['cost_electric']);
        }
        return $data;
    }

    public function create(array $attributes)
    {
        $city = ucwords(TrovieHelper::stripAddressCompoentName($attributes['city_name']));
        $district = ucwords(TrovieHelper::stripAddressCompoentName($attributes['district_name']));

        $attributes['cost_electric'] = TrovieHelper::parseCurrencyString($attributes['cost_electric']);
        $attributes['cost_water'] = TrovieHelper::parseCurrencyString($attributes['cost_water']);
        $attributes['user_id'] = auth()->id();
        $attributes['city_id'] = \DB::table('cities')->where('name', $city)->first()->id;
        $attributes['district_id'] = \DB::table('districts')->where('name', $district)->first()->id;
        
        return $this->_model->create($attributes);
    }
}
