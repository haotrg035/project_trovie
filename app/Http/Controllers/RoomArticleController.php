<?php

namespace App\Http\Controllers;

use App\Models\RoomArticle;
use App\Repositories\HostRepository;
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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $this->data['list_host'] = $this->repository->getListHostByUser(auth()->id());

        return view('user.roomArticle.index', ['data' => $this->data]);
    }

    public function adminIndex()
    {
       $hostRepo = new HostRepository();
        $this->data['list_host'] = $hostRepo->getAll();
        return view('user.admin.roomArticle.index', ['data' => $this->data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        $this->data['view_name'] = 'Thêm ' . $this->viewName();
        return view('user.roomArticle.create', ['data' => $this->data]);
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
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Http\Response
     */
    public function show(RoomArticle $roomArticle)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Http\Response
     */
    public function destroy(RoomArticle $roomArticle)
    {
        //
    }

    protected function viewName()
    {
        return 'Tin Đăng';
    }
}
