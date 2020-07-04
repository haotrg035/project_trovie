<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use App\Repositories\Interfaces\UnitEloquentRepositoryInterface;
use App\Repositories\ServiceRepository;
use Illuminate\Http\Request;

class UnitController extends BaseController
{
    //
    /**
     * @var UnitEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(UnitEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    protected function viewName()
    {
        return 'Đơn Vị';
    }

    public function api_update(Request $request, Unit $unit)
    {
        $data = array_diff($request->all(), ['_token' => 1, '_method' => 1]);
        $result = $this->repository->update($unit->id, $data);
        return $this->returnResponse($result, 'update', $result);
    }

    public function api_delete(Unit $unit)
    {
        $isUsing = \DB::table('services')->where('unit_id', $unit->id)->get();
        if (count($isUsing) > 0) {
            return $this->returnResponse(false, 'delete', $isUsing, 'Đơn vị còn đang được sử dụng cho dich vụ khác!');
        }
        $result = $this->repository->delete($unit->id);
        return $this->returnResponse($result, 'delete', $result);
    }

    public function create(Request $request)
    {
        $result = $this->repository->create(array_merge(
            array_diff_key(
                $request->all(),
                ['api_token' => 1, '_method' => 1]
            ),
            ['user_id' => auth()->id()]
        ));
        return $this->returnRedirect($result, 'create', route('user.service.index'));
    }
}
