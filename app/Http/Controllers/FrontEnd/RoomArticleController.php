<?php

namespace App\Http\Controllers\FrontEnd;

use App\Helper\TrovieFile;
use App\Http\Controllers\BaseController;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(RoomArticle $roomArticle)
    {
        $this->data['article'] = $this->repository->getArticle($roomArticle->id);
        $this->data['recent_articles'] = $this->repository->getArticles(3)->toArray();
        $this->data['near_articles'] = $this->repository->getNearArticles(
            $this->data['article']['room']['host']
        );

        return view('front-end.room-article.detail', ['data' => $this->data]);
    }

    public function searchMap(Request $request)
    {
        return view('front-end.room-article.map-search');
    }

    public function search(Request $request)
    {
        return view('front-end.room-article.search');
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
