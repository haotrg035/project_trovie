<?php

namespace App\Http\Controllers;

use App\Helper\TrovieHelper;
use App\Http\Requests\Host\StoreRequest;
use App\Models\Host;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use function GuzzleHttp\Promise\all;

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
        $this->data['data'] = $this->repository->getAllUserHosts();

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
     * @param Host $host
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\Illuminate\View\View
     */
    public function show(Host $host)
    {
        $this->checkUpdateAuth($host);
        $this->data['view_name'] = ucwords('thông tin ' . $this->viewName());
        $this->data['data'] = $this->repository->find($host->id)->toArray();


        return view('user.host.detail', ['data' => $this->data]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Host $host
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, Host $host)
    {
        $this->checkUpdateAuth($host);
        $result = $this->repository->update($host->id, $request->all());
        return $this->returnRedirect($result, route('user.host.show', $host->id), 'update');
    }

    /**
     * @param Request $request
     * @param Host $host
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */
    public function updateInfo(Request $request, Host $host)
    {
        return $this->update($request, $host);
    }

    public function updateAddress(Request $request, Host $host)
    {
        return $this->update($request, $host);
    }

    public function updateAnouncement(Request $request, Host $host)
    {
        return $this->update($request, $host);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Host $host
     * @return void
     */
    public function destroy(Host $host)
    {
        //
    }

}
