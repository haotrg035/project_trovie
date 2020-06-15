<?php


namespace App\Http\Controllers;

use App\Repositories\EloquentRepository;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\Model;

abstract class BaseController extends Controller
{
    protected $data;

    public function __construct()
    {
        $this->setViewName();
    }

    abstract protected function viewName();

    protected function setViewName()
    {
        $this->data['view_name'] = $this->viewName();
    }

    private function getResponse(
        $result,
        $messageType,
        $data = null,
        $customFailedMessage = null,
        $successMessage = null
    ) {
        $_response = [];
        if ($result) {
            $_response['status'] = 'success';
            if ($successMessage) {
                $_response['message'] = $successMessage;
            } else {
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
            }
            if (!empty($data)) {
                $_response['data'] = $data;
            }
        } else {
            $_response['status'] = 'error';
            if ($customFailedMessage) {
                $_response['message'] = $customFailedMessage;
            } else {
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
                    case 'show':
                    {
                        $_response['message'] = __('curd.message.failed.nodata');
                        break;
                    }
                    default :
                    {
                        $_response['message'] = __('curd.message.failed.view');
                        break;
                    }
                }
            }
        }
        return $_response;
    }

    protected function returnResponse($result, $messageType, $data = null, $customFailedMessage = null)
    {
        $_response = $this->getResponse($result, $messageType, $data, $customFailedMessage);
        if ($result) {
            return response($_response, 200);
        }
        return response($_response, 404);
    }

    protected function returnRedirect($result, $messageType, $route)
    {
        return redirect($route)->with(['response_message' => $this->getResponse($result, $messageType)]);
    }

    public function checkViewAuth(Model $model)
    {
        return $this->authorize('view', $model);
    }

    public function checkCreateAuth(Model $model)
    {
        return $this->authorize('create', $model);
    }

    public function checkUpdateAuth(Model $model)
    {
        $this->authorize('update', $model);
    }

    public function checkDeleteAuth(Model $model)
    {
        $this->authorize('delete', $model);
    }

}
