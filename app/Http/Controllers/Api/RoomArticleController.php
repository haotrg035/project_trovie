<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Models\Host;
use App\Models\Room;
use App\Models\RoomArticle;
use App\Repositories\Interfaces\RoomArticleEloquentRepositoryInterface;
use Illuminate\Http\Request;

class RoomArticleController extends BaseController
{
    /**
     * @var RoomArticleEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(RoomArticleEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    public function getAllArticle(Request $request)
    {
        if (!auth()->user()->isAdmin()) {
            return $this->returnResponse(false, 'show', []);
        }
        $result = $this->repository->getAllArticles();
        return $this->returnResponse($result, 'show', $result);
    }

    public function getAllByHost(Request $request, Host $host)
    {
        $this->checkViewAuth($host);
        $result = $this->repository->getAllByHost($host->id);
        return $this->returnResponse($result, 'show', $result);
    }

    public function getAllByRoom(Request $request, Room $room)
    {
        $this->checkViewAuth($room);
        $result = $this->repository->getAllByRoom($room->id);
        return $this->returnResponse($result, 'show', $result);
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
        $this->checkCreateAuth($this->repository->getModel());
        $result = $this->repository->createArticle($request->all());
        return $this->returnResponse($result['data'], 'create', $result['data'], $result['error']);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Http\Response
     */
    public function show(RoomArticle $roomArticle)
    {
        $this->checkUpdateAuth($roomArticle);
        $result = $this->repository->getRoomArticle($roomArticle->id);
        return $this->returnResponse($result, 'show', $result);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Http\Response
     */
    public function edit(RoomArticle $roomArticle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RoomArticle $roomArticle)
    {
        $this->checkUpdateAuth($roomArticle);
        $result = $this->repository->updateArticle($request->all(), $roomArticle->id);
        return $this->returnResponse($result['data'], 'update', $result['data'], $result['error']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Http\Response
     */
    public function destroy(RoomArticle $roomArticle)
    {
        $this->checkUpdateAuth($roomArticle);
        \DB::table('saved_article')->where('room_article_id', $roomArticle->id)->delete();
        $result = $this->repository->delete($roomArticle->id);
        return $this->returnResponse($result, 'delete', $result);
    }

    public function refresh(RoomArticle $roomArticle)
    {
        $this->checkUpdateAuth($roomArticle);
        $result = $this->repository->refresh($roomArticle->id);
        return $this->returnResponse($result['data'], 'update', $result['data'], $result['error']);
    }

    protected function viewName()
    {
        return 'Tin Đăng';
    }
}
