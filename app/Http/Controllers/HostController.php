<?php

namespace App\Http\Controllers;

use App\Models\Host;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;
use Illuminate\Http\Request;

class HostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('user.host.index');
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
     * @param \App\Repositories\Interfaces\HostEloquentRepositoryInterface $host
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(HostEloquentRepositoryInterface $host)
    {
        return view('user.host.detail');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Repositories\Interfaces\HostEloquentRepositoryInterface $host
     * @return \Illuminate\Http\Response
     */
    public function edit(HostEloquentRepositoryInterface $host)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Repositories\Interfaces\HostEloquentRepositoryInterface $host
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HostEloquentRepositoryInterface $host)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Repositories\Interfaces\HostEloquentRepositoryInterface $host
     * @return \Illuminate\Http\Response
     */
    public function destroy(HostEloquentRepositoryInterface $host)
    {
        //
    }
}
