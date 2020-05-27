<?php


namespace App\Repositories;

use App\Helper\TrovieHelper;
use App\Models\Service;
use App\Repositories\Interfaces\ServiceEloquentRepositoryInterface;

class ServiceRepository extends EloquentRepository implements ServiceEloquentRepositoryInterface
{

    public function getModel()
    {
        return Service::class;
    }

    public function getAllByUser(?int $id)
    {
        $data = $this->_model->with('unit')->where('user_id', $id)->get()->toArray();
        return $data;
    }

    public function create(array $attributes)
    {
        $data = new Service();
        $data->name = $attributes['name'];
        $data->cost = TrovieHelper::parseCurrencyString($attributes['cost']);
        $data->user_id = $attributes['user_id'];
        $data->unit_id = $attributes['unit_id'];
        if ($data->save()) {
            return $this->_model->with(['unit'])->find($data->id)->toArray();
        }
        return false;
    }

    public function update($id, array $attributes)
    {
        $data = $this->find($id);
        $data->name = $attributes['name'];
        $data->cost = TrovieHelper::parseCurrencyString($attributes['cost']);
        $data->user_id = $attributes['user_id'];
        $data->unit_id = $attributes['unit_id'];
        if ($data->save()) {
            return $this->_model->with(['unit'])->find($data->id)->toArray();
        }
        return false;
    }

    public function deleteService($id)
    {
        $deleteRoomsRelations = \DB::table('room_service')->where('service_id', $id)->delete();
        if ($deleteRoomsRelations) {
            if ($this->delete($id)) {
                return $id;
            }
            \Log::error('Delete service failed, service id: ' . $id);
            return false;
        }
        \Log::error('Delete service\'s room relations failed, service id: ' . $id);
        return false;
    }
}
