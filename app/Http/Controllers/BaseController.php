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

    private function getResponse($result, $messageType, $data = null)
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
            if (!empty($data)) {
                $_response['data'] = $data;
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
        return $_response;
    }

    protected function returnResponse($result, $messageType, $data = null)
    {
        $_response = $this->getResponse($result, $messageType, $data);
        if ($result) {
            return response($_response, 200);
        }
        return response($_response, 500);
    }

    protected function returnRedirect($result, $messageType, $route)
    {
        return redirect($route)->with(['response_message' => $this->getResponse($result, $messageType)]);
    }

    public function checkUpdateAuth(Model $model)
    {
        try {
            $this->authorize('update', $model);
        } catch (AuthorizationException $e) {
            return redirect('/');
        }
    }

    public function checkUpdateAuthApi(Model $model)
    {
        try {
            $this->authorize('update', $model);
        } catch (AuthorizationException $e) {
            return $this->getResponse(false, 'update');
        }
    }
}
