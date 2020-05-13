<?php

namespace App\Http\Controllers;

use App\Helper\TrovieHelper;
use App\Http\Requests\Host\StoreRequest;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;
use Illuminate\Http\Request;

class HostController extends BaseController
{

    /**
     * @var HostEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(HostEloquentRepositoryInterface $repository)
    {
        $this->repository = $repository;
        $this->setViewName();
    }

    function viewName()
    {
        return 'nhà trọ';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $this->data['view_name'] = ucwords('danh sách ' . $this->viewName());
        $this->data['data'] = $this->repository->getAllHostsByAuth();

        return view('user.host.index', [
            'data' => $this->data
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(StoreRequest $request)
    {
        $result = $this->repository->create($request->all());

        return $this->returnRedirect($result, route('user.host.index'), 'create');
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Repositories\Interfaces\HostEloquentRepositoryInterface $host
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(HostEloquentRepositoryInterface $host)
    {
        return view('user.host.detail');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Repositories\Interfaces\HostEloquentRepositoryInterface $host
     * @return \Illuminate\Http\Response
     */
    public function edit(HostEloquentRepositoryInterface $host)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Repositories\Interfaces\HostEloquentRepositoryInterface $host
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HostEloquentRepositoryInterface $host)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Repositories\Interfaces\HostEloquentRepositoryInterface $host
     * @return \Illuminate\Http\Response
     */
    public function destroy(HostEloquentRepositoryInterface $host)
    {
        //
    }

}
