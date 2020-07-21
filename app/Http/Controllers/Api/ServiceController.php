<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\User;
use App\Repositories\Interfaces\ServiceEloquentRepositoryInterface;
use Illuminate\Http\Request;

class ServiceController extends BaseController
{
    /**
     * @var ServiceEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(ServiceEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    protected function viewName()
    {
        return 'Dịch vụ';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->repository->create($request->all());

        return $this->returnResponse($data, 'create', $data);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        $data = $this->repository->find($service->id);

        return $this->returnResponse($data, 'view', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        $this->checkUpdateAuth($service);
        $result = $this->repository->update($service->id, $request->all());

        return $this->returnResponse($result, 'update', $result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        $this->checkDeleteAuth($service);
        \DB::table('room_service')->where('service_id',$service->id)->delete();
        $result = $this->repository->delete($service->id);

        return $this->returnResponse($result, 'delete', $service->id);
    }
}
