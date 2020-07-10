<?php

namespace App\Http\Controllers\FrontEnd;

use App\Helper\TrovieHelper;
use App\Http\Controllers\BaseController;
use App\Repositories\Interfaces\CityEloquentRepositoryInterface;
use App\Repositories\Interfaces\MenuEloquentRepositoryInterface;
use App\Repositories\Interfaces\RoomArticleEloquentRepositoryInterface;
use Illuminate\Http\Request;

class IndexController extends BaseController
{
    /**
     * @var RoomArticleEloquentRepositoryInterface
     */
    private $roomArticleRepository;
    /**
     * @var CityEloquentRepositoryInterface
     */
    private $cityRepository;
    /**
     * @var MenuEloquentRepositoryInterface
     */
    private $menuRepository;

    public function __construct(
        RoomArticleEloquentRepositoryInterface $roomArticleRepository,
        CityEloquentRepositoryInterface $cityRepository,
        MenuEloquentRepositoryInterface $menuRepository
    )
    {
        parent::__construct();
        $this->roomArticleRepository = $roomArticleRepository;
        $this->cityRepository = $cityRepository;
        $this->menuRepository = $menuRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $this->data['cities'] = $this->cityRepository->getAllCitiesAndDistricts();
        $this->data['featured_cities'] = $this->cityRepository->getFeaturedCities();
        $this->data['recent_articles'] = $this->roomArticleRepository->getArticles(8);
        $this->data['availableHosts'] = json_encode($this->roomArticleRepository->getAvailableHosts());
        $this->data['followedArticles'] = TrovieHelper::convertAssocIdArrayToValueIdArray(
            $this->roomArticleRepository->getFollowedArticles(auth()->id())->toArray(),
            'room_article_id'
        );
        $this->data['menu'] = $this->menuRepository->getMenu();
        return view('front-end.index.index', ['data' => $this->data]);
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
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    protected function viewName()
    {
        return 'Trang chủ';
    }
}
