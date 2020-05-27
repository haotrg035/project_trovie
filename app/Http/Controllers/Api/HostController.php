<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Requests\Host\CreateRequest;
use App\Models\Host;
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
        parent::__construct();
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function index()
    {
    }

    protected function viewName()
    {
        return 'Nhà Trọ';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateRequest $request
     * @return void
     */
    public function store(CreateRequest $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Host $host
     * @return \Illuminate\Http\Response
     */
    public function show(Host $host)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Host $host
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Host $host)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Host $host
     * @return \Illuminate\Http\Response
     */
    public function destroy(Host $host)
    {
        //
    }

    public function updateAvatar(Request $request, Host $host)
    {
        $this->checkUpdateAuth($host);
        $result = $this->repository->updateAvatar($request->file('avatar'), $host->id);
        return $this->returnResponse($result, 'update', ['image' => asset($result)]);
    }

    public function addGalleryImage(Request $request, Host $host)
    {
        $this->checkUpdateAuth($host);
        $result = $this->repository->addGalleryImage($request->file('image'), $host->id);
        return $this->returnResponse($result, 'create', $result);
    }

    public function removeGalleryImage(Host $host, $image_id)
    {
        $this->checkUpdateAuth($host);
        $result = $this->repository->removeGalleryImage($image_id);
        return $this->returnResponse($result, 'delete', ['id' => $image_id]);
    }
}
