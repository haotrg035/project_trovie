<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['api_host_owner', 'auth:api'])->group(function () {
    Route::prefix('user')->name('api.user')->group(function () {
        Route::get('/get-by-invite-token', 'Api\UserController@getUserByInviteToken')->name('.get_by_token');
        Route::get('/show', 'Api\UserController@show')->name('.show');
    });

    Route::name('api.user')->group(function () {
        Route::prefix('host')->name('.host')->group(function () {
            Route::post('/update-avatar/{host}', 'Api\HostController@updateAvatar')->name('.update_avatar');
            Route::post('/gallery-add/{host}', 'Api\HostController@addGalleryImage')->name('.gallery_add');
            Route::delete('{host}/gallery-remove/{image_id}', 'Api\HostController@removeGalleryImage')
                ->name('.gallery_remove');
        });

        Route::prefix('host/{host}/room')->name('.host.room')->group(function () {
            Route::get('/{room?}', 'Api\RoomController@show')->name('.show');
            Route::get('/{room}/members', 'Api\RoomController@getMembers')->name('.show_members');
            Route::post('/store', 'Api\RoomController@store')->name('.store');
            Route::patch('/{room?}', 'Api\RoomController@update')->name('.update');
            Route::post('/gallery-add/{room?}', 'Api\RoomController@addGalleryImage')->name('.gallery_add');
            Route::delete('/gallery-delete/{image_id?}',
                'Api\RoomController@removeGalleryImage')->name('.gallery_remove');
        });

        Route::prefix('service')->name('.service')->group(function () {
            Route::get('/{service?}', 'Api\ServiceController@show')->name('.show');
            Route::post('/update/{service?}', 'Api\ServiceController@update')->name('.update');
            Route::delete('/delete/{service?}', 'Api\ServiceController@destroy')->name('.delete');
        });

        Route::prefix('contract')->name('.contract')->group(function () {
            Route::prefix('/get-contracts')->name('.get_contracts')->group(function () {
                Route::get('/host/{host?}', 'Api\ContractController@getContractsByHost')->name('.host');
                Route::get('/room/{room?}', 'Api\ContractController@getContractsByRoom')->name('.room');
            });
            Route::get('/{contract?}', 'Api\ContractController@show')->name('.show');
            Route::post('/store', 'Api\ContractController@store')->name('.store');
            Route::patch('/renew/{contract?}', 'Api\ContractController@renewContract')->name('.renew');
            Route::patch('/cancel', 'Api\ContractController@cancel')->name('.cancel');
        });

        Route::prefix('invoice')->name('.invoice')->group(function () {
            Route::prefix('/get-invoices')->name('.get_invoices')->group(function () {
                Route::get('/host/{host?}', 'Api\InvoiceController@getAllByHost')->name('.host');
                Route::get('/room/{room?}', 'Api\InvoiceController@getAllByRoom')->name('.room');
            });
            Route::get('/{invoice?}', 'Api\InvoiceController@show')->name('.show');
        });
    });

    Route::apiResource('host', 'Api\HostController')->except(['update'])->names('api.user.host');
    Route::apiResource('service', 'Api\ServiceController')->except([
        'update',
        'show',
        'delete'
    ])->names('api.user.service');

});

