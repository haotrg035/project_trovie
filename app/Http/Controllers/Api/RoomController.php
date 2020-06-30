<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Models\Host;
use App\Models\Room;
use App\Repositories\Interfaces\RoomEloquentRepositoryInterface;
use Illuminate\Http\Request;

class RoomController extends BaseController
{
    /**
     * @var RoomEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(RoomEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
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
     * @param Host $host
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Host $host)
    {
        $this->checkUpdateAuth($host);
        $result = $this->repository->create($request->all());
        return $this->returnResponse($result, 'create', $result);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Room $room
     * @return \Illuminate\Http\Response
     */
    public function show(Host $host, Room $room)
    {
        $this->checkViewAuth($room);
        $result = $this->repository->getRoom($host->id, $room->id);
        return $this->returnResponse($result, 'show', $result);
    }

    public function getMembers(Host $host, Room $room)
    {
        $this->checkViewAuth($room);
        $result = $this->repository->getRoomMembers($room->id);
        return $this->returnResponse($result, 'show', $result);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Room $room
     * @return \Illuminate\Http\Response
     */
    public function edit(Room $room)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Room $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Host $host, Room $room)
    {
        $this->checkUpdateAuth($room);
        $result = $this->repository->update($room->id, $request->all());
        return $this->returnResponse($result, 'update', $result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Room $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Room $room)
    {
        //
    }

    /**
     * @inheritDoc
     */
    protected function viewName()
    {
        return 'Phòng Trọ';
    }

    public function addGalleryImage(Request $request, Host $host, Room $room)
    {
        $this->checkUpdateAuth($room);
        $result = $this->repository->addGalleryImage($request->file('image'), $host->id, $room->id);
        return $this->returnResponse($result, 'create', $result);
    }

    public function removeGalleryImage(Host $host, $image_id)
    {
        $this->checkUpdateAuth($host);
        $result = $this->repository->removeGalleryImage($image_id);
        return $this->returnResponse($result, 'delete', ['id' => $image_id]);
    }
}
