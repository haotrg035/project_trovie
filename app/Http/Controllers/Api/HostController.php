<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Host\CreateRequest;
use App\Models\Host;
use Illuminate\Http\Request;

class HostController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param CreateRequest $request
     * @return void
     */
    public function store(CreateRequest $request)
    {
        return 'hi';
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Host $host
     * @return \Illuminate\Http\Response
     */
    public function show(Host $host)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Host $host
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Host $host)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Host $host
     * @return \Illuminate\Http\Response
     */
    public function destroy(Host $host)
    {
        //
    }
}
