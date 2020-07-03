<?php

namespace App\Http\Controllers;

use App\Repositories\Interfaces\SettingEloquentRepositoryInterface;
use Illuminate\Http\Request;

class SettingController extends BaseController
{
    /**
     * @var SettingEloquentRepositoryInterface
     */
    private $repository;

    protected function viewName()
    {
        return 'Cài Đặt';
    }

    public function __construct(SettingEloquentRepositoryInterface $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    public function setting()
    {

        return view('user.admin.setting.index', ['data' => $this->data]);
    }

    public function update(Request $request)
    {
        $data = array_diff_key($request->all(), ['_token' => 1, '_method' => 1]);
        $result = $this->repository->updateSettings($data);
        return $this->returnRedirect($result, 'update', route('admin.setting.index'));
    }

    public function updateBanner(Request $request)
    {
        $result = $this->repository->updateBanner($request->file('avatar'));
        return $this->returnResponse($result, 'update', ['image' => $result]);
    }
    public function updateNoImage(Request $request)
    {
        $result = $this->repository->updateNoImage($request->file('avatar'));
        return $this->returnResponse($result, 'update', ['image' => $result]);
    }
}
