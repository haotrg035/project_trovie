<?php


namespace App\Http\Controllers;

use App\Repositories\EloquentRepository;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\Model;

abstract class BaseController extends Controller
{
    protected $data;

    /**
     * set view's name
     * @return string
     */
    abstract protected function viewName();

    protected function setViewName()
    {
        $this->data['view_name'] = $this->viewName();
    }

    protected function returnRedirect($result, $route, $messageType)
    {
        $_response = [];
        if ($result) {
            $_response['status'] = 'success';
            switch ($messageType) {
                case 'create':
                {
                    $_response['message'] = __('curd.message.success.create');
                    break;
                }
                case 'update':
                {
                    $_response['message'] = __('curd.message.success.update');
                    break;
                }
                case 'delete':
                {
                    $_response['message'] = __('curd.message.success.delete');
                    break;
                }
            }
        } else {
            $_response['status'] = 'error';
            switch ($messageType) {
                case 'create':
                {
                    $_response['message'] = __('curd.message.failed.create');
                    break;
                }
                case 'update':
                {
                    $_response['message'] = __('curd.message.failed.update');
                    break;
                }
                case 'delete':
                {
                    $_response['message'] = __('curd.message.failed.delete');
                    break;
                }
            }
        }
        return redirect($route)->with(['response_message' => $_response]);
    }

    public function checkUpdateAuth(Model $model)
    {
        try {
            $this->authorize('update', $model);
        } catch (AuthorizationException $e) {
            return redirect('/');
        }
    }
}
