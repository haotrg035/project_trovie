<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Models\GuestUser;
use Illuminate\Http\Request;

class GuestUserController extends BaseController
{
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GuestUser  $guestUser
     * @return \Illuminate\Http\Response
     */
    public function show(GuestUser $guestUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GuestUser  $guestUser
     * @return \Illuminate\Http\Response
     */
    public function edit(GuestUser $guestUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GuestUser  $guestUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GuestUser $guestUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GuestUser  $guestUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(GuestUser $guestUser)
    {
        //
    }

    /**
     * @inheritDoc
     */
    protected function viewName()
    {
        return 'Khách Vãn Lai';
    }
}
