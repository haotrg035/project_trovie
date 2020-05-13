<?php


namespace App\Http\Controllers;

use App\Repositories\EloquentRepository;

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
            $_response['status'] = true;
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
            $_response['status'] = false;
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

}
