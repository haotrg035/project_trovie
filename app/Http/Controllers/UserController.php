<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repositories\Interfaces\UserEloquentRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends BaseController
{
    /**
     * @var UserEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(UserEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    protected function viewName()
    {
        return 'Thông Tin Cá Nhân';
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**show
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show()
    {
//        if ($user->id !== auth()->id()) {
//            return redirect('/');
//        }
        $this->data['data'] = $this->repository->getUser(auth()->id(), ['detail', 'inviteToken', 'room']);
        if (!empty($this->data['data']['room']) && count($this->data['data']['room']) > 0) {
            $this->data['data']['room'] = $this->data['data']['room'][0];
        }
        return view('user.profile.index', ['data' => $this->data]);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, User $user)
    {

//        $this->checkUpdateAuth($user);
        $this->validate($request, [
            'full_name' => 'required',
            'email' => 'required',
            'gender' => 'required',
            'birthday' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'id_card' => 'required|min:12|max:12',
            'id_card_date' => 'required',
            'id_card_address' => 'required',
            'desc' => 'nullable'
        ]);
        $result = $this->repository->updateUser($user->id, $request->all());
        return $this->returnRedirect($result, 'update', route('user.profile.show'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return Response
     */
    public function destroy(User $user)
    {
        //
    }
}
