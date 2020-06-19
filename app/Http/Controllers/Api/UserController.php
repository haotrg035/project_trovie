<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Models\User;
use App\Repositories\Interfaces\UserEloquentRepositoryInterface;
use Illuminate\Http\Request;

class UserController extends BaseController
{
    /**
     * @var UserEloquentRepositoryInterface
     */
    private $repository;

    /**
     * UserController constructor.
     * @param UserEloquentRepositoryInterface $repository
     */
    public function __construct(UserEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    protected function viewName()
    {
        return 'Người Dùng';
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
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $result = $this->repository->getUser($user->id);
        return $this->returnResponse($result, 'show', $result);
    }

    public function generateInviteToken(User $user, Request $request)
    {
        $result = $this->repository->generateInviteToken($user->id);
        return $this->returnResponse($result['data'], 'update', $result['data'], $result['error']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    public function getUserByInviteToken(Request $request)
    {
        $result = $this->repository->getUserByInviteToken($request->token);
        return $this->returnResponse($result, 'show', $result, 'Mã mời không hợp lệ');
    }

    public function updateAvatar(Request $request, User $user)
    {
//        $this->checkUpdateAuth($user);
        $result = $this->repository->updateAvatar($request->file('avatar'), $user->id);
        return $this->returnResponse($result, 'update', ['image' => asset($result)]);
    }

}
