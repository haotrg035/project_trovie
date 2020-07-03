<?php

namespace App\Http\Controllers;

use App\Helper\TrovieHelper;
use App\Models\Menu;
use App\Repositories\Interfaces\MenuEloquentRepositoryInterface;
use Illuminate\Http\Request;

class MenuController extends BaseController
{
    /**
     * @var MenuEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(MenuEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    protected function viewName()
    {
        return 'menu';
    }

    public function index()
    {
        $this->data['menus'] = $this->repository->getMenu();
        return view('user.admin.menu.index', ['data' => $this->data]);
    }

    public function updatePos(Request $request)
    {
        $result = $this->repository->updatePos($request->data);
        return $this->returnResponse($result, 'update', $result);
    }

    public function store(Request $request)
    {
        $data = array_diff_key(
            $request->all(),
            ['_token' => 1, '_method' => 1]
        );
        $result = $this->repository->createMenu($data);
        return $this->returnRedirect($result, 'create', route('admin.menu.index'));
    }

    public function updateInfo(Request $request, Menu $menu)
    {
        $data = array_diff_key(
            $request->all(),
            ['_token' => 1, '_method' => 1]
        );
        $result = $this->repository->update($menu->id, $data);
        return $this->returnRedirect($result, 'update', route('admin.menu.index'));
    }

    public function show(Menu $menu)
    {
        $result = $this->repository->find($menu->id);
        return $this->returnResponse($result, 'show', $result);
    }

    public function destroy(Menu $menu)
    {
        $result = $this->repository->deleteMenu($menu->id);
        return $this->returnResponse($result, 'delete', $result);
    }
}
