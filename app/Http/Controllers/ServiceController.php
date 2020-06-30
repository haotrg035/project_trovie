<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceUnit;
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
        return 'Tiện Ích';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $this->data['data'] = $this->repository->getAllByUser(auth()->id());
        $this->data['units'] = ServiceUnit::where('user_id', auth()->id())->get()->toArray();

        return view('user.service.index', ['data' => $this->data]);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Service $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Service $service)
    {
        //
    }
}
