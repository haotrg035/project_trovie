<?php

namespace App\Http\Controllers;

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

    protected function viewName()
    {
        return 'Phòng Trọ';
    }

    /**
     * Display a listing of the resource.
     *
     * @param Host $host
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Host $host)
    {
        $this->data['data'] = $this->repository->getAllRoomsByHost($host->id);
        return view('user.host.room.index', ['data' => $this->data]);
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
     * @param \App\Models\Room $room
     * @return \Illuminate\Http\Response
     */
    public function show(Room $room)
    {
        //
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
    public function update(Request $request, Room $room)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Host $host
     * @param \App\Models\Room $room
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(Host $host, Room $room)
    {
        $this->checkUpdateAuth($room);
        return $this->returnRedirect($this->repository->deleteRoom($room->id), 'delete', route('user.host.room.index', [$host->id]));
    }
}
