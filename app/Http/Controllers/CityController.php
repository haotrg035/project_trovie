<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Repositories\Interfaces\CityEloquentRepositoryInterface;
use Illuminate\Http\Request;

class CityController extends BaseController
{
    /**
     * @var CityEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(CityEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $this->data['cities'] = $this->repository->getAllCitiesAndDistricts();
        return view('user.admin.places.index', ['data' => $this->data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return void
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param City $city
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        $result = $this->repository->find($city->id);
        return $this->returnResponse($result, 'show', $result->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param City $city
     * @return void
     */
    public function edit(City $city)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param City $city
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, City $city)
    {
        $result = $this->repository->updateCity($request->all(), $city->id);
        return $this->returnRedirect($result, 'update', route('admin.place.index'));
    }

    public function updateAvatar(Request $request, City $city)
    {
        $result = $this->repository->updateAvatar($request->file('avatar'), $city->id);
        return $this->returnResponse($result, 'update', ['image' => asset($result)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param City $city
     * @return void
     */
    public function destroy(City $city)
    {
        //
    }

    protected function viewName()
    {
        return 'Địa Điểm';
    }
}
