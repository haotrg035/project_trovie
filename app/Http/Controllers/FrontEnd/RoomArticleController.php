<?php

namespace App\Http\Controllers\FrontEnd;

use App\Helper\TrovieFile;
use App\Http\Controllers\BaseController;
use App\Models\RoomArticle;
use App\Repositories\CityRepository;
use App\Repositories\Interfaces\CityEloquentRepositoryInterface;
use App\Repositories\Interfaces\MenuEloquentRepositoryInterface;
use App\Repositories\Interfaces\RoomArticleEloquentRepositoryInterface;
use Illuminate\Http\Request;

class RoomArticleController extends BaseController
{
    /**
     * @var RoomArticleEloquentRepositoryInterface
     */
    private $repository;
    /**
     * @var CityEloquentRepositoryInterface
     */
    private $cityRepository;
    /**
     * @var MenuEloquentRepositoryInterface
     */
    private $menuRepository;

    public function __construct(
        RoomArticleEloquentRepositoryInterface $repository,
        CityEloquentRepositoryInterface $cityRepository,
        MenuEloquentRepositoryInterface $menuRepository

    )
    {
        parent::__construct();
        $this->repository = $repository;
        $this->cityRepository = $cityRepository;
        $this->menuRepository = $menuRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public
    function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public
    function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public
    function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public
    function show(RoomArticle $roomArticle)
    {
        $this->data['menu'] = $this->menuRepository->getMenu();
        $this->data['cities'] = $this->cityRepository->getAllCitiesAndDistricts();
        $this->data['article'] = $this->repository->getArticle($roomArticle->id);
        $this->data['recent_articles'] = $this->repository->getArticles(config('global.article_total_newest_detail_page') ?? 3);
        $this->data['near_articles'] = $this->repository->getNearArticles(
            $this->data['article']['room']['host'],
            config('global.article_total_related_detail_page') ?? 4
        );

        return view('front-end.room-article.detail', ['data' => $this->data]);
    }

    public
    function searchMap(Request $request)
    {
        return view('front-end.room-article.map-search');
    }

    public
    function search(Request $request)
    {
        $this->data['menu'] = $this->menuRepository->getMenu();
        $this->data['cities'] = $this->cityRepository->getAllCitiesAndDistricts();
        $this->data['data'] = $this->repository->search($request->all(), config('global.article_total_search_result') ?? 8, true);
        $this->data['availableHosts'] = json_encode($this->repository->getAvailableHosts());
        return view('front-end.room-article.search', ['data' => $this->data]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Http\Response
     */
    public
    function edit(RoomArticle $roomArticle)
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
    public
    function update(Request $request, RoomArticle $roomArticle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\RoomArticle $roomArticle
     * @return \Illuminate\Http\Response
     */
    public
    function destroy(RoomArticle $roomArticle)
    {
        //
    }

    protected
    function viewName()
    {
        return 'Tin Đăng';
    }

}
