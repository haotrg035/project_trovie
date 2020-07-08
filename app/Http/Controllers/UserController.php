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
        return 'Quản Lý Người Dùng';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $this->data['users'] = $this->repository->getAdminAllUsers(['detail'])->toArray();
        return view('user.admin.users.index', ['data' => $this->data]);
    }

    public function adminShowUser(User $user)
    {
        $this->data['view_name'] .= ' - CHI TIẾT NGƯỜI DÙNG';
        $this->data['data'] = $this->repository->find($user->id, ['detail', 'inviteToken'])->toArray();
        return view('user.admin.users.show', ['data' => $this->data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        return view('user.admin.users.create', ['data' => $this->data]);
    }

    /**show
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'username' => 'required|unique:users,username',
            'full_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => ['required', 'string', 'min:8', 'max:255', 'confirmed'],
            'gender' => 'required',
            'birthday' => 'required',
            'address' => 'required',
            'phone' => 'required|min:10|max:12|unique:user_details,phone',
            'role' => 'required|between:' . config('app.role.host.user') . ',' . config('app.role.host.hostOwner'),
            'id_card' => 'required|min:12|max:12',
            'id_card_date' => 'required',
            'id_card_address' => 'required',
            'desc' => 'nullable'
        ]);

        $data = array_diff_key($request->all(), ['_token' => 1, '_method' => 1]);
        $result = $this->repository->createUser($data);
        return $this->returnRedirect($result, 'create', route('admin.users.index'));
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

    public function processUpdate(Request $request, User $user)
    {
        $this->validate($request, [
            'full_name' => 'required',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'gender' => 'required',
            'birthday' => 'required',
            'address' => 'required',
            'phone' => 'required|min:10|max:12|unique:user_details,phone,' . $user->id . ',user_id',
            'role' => 'between:' . config('app.role.host.user') . ',' . config('app.role.host.hostOwner'),
            'id_card' => 'required|min:12|max:12',
            'id_card_date' => 'required',
            'id_card_address' => 'required',
            'desc' => 'nullable'
        ]);
        return $this->repository->updateUser($user->id, $request->all());
    }

    public function update(Request $request, User $user)
    {
        return $this->returnRedirect($this->processUpdate($request, $user), 'update', route('user.profile.show'));
    }

    public function adminUpdateUser(Request $request, User $user)
    {
        return $this->returnRedirect($this->processUpdate($request, $user), 'update', route('admin.users.show', $user->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function destroy(User $user)
    {
        if ($user->id === auth()->id()) {
            return $this->returnRedirect(false, 'delete', route('admin.users.index'), 'Không thể xóa chính bạn!');
        }
        if ($user->isAdmin()) {
            return $this->returnRedirect(false, 'delete', route('admin.users.index'), 'Không thể xóa người dùng admin!');
        }
        $result = $this->repository->deleteUser($user->id);
        return $this->returnRedirect($result, 'delete', route('admin.users.index'));
    }

    public function changePassword(Request $request, User $user)
    {
        $this->validate($request, [
            'old_password' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'max:255', 'different:old_password', 'confirmed']
        ]);

        if (auth()->id() !== $user->id) {
            return $this->returnRedirect(
                false,
                'update',
                route('user.profile.show')
            );
        }
        return $this->returnRedirect(
            $this->repository->changePassword($user->id, $request->all(), false),
            'update',
            route('user.profile.show')
        );
    }

    public function adminChangePassword(Request $request, User $user)
    {
        $this->validate($request, [
            'password' => ['required', 'string', 'min:8', 'max:255', 'confirmed']
        ]);
        return $this->returnRedirect(
            $this->repository->changePassword($user->id, $request->all(), true),
            'update',
            route('admin.users.show', $user->id)
        );
    }
}
