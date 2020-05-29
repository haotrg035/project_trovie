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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:api', 'api_host_owner'])->group(function () {
    Route::prefix('host')->group(function () {
        Route::post('/update-avatar/{host}', 'Api\HostController@updateAvatar')->name('api.user.host.update_avatar');
        Route::post('/gallery-add/{host}', 'Api\HostController@addGalleryImage')->name('api.user.host.gallery_add');
        Route::delete('{host}/gallery-remove/{image_id}', 'Api\HostController@removeGalleryImage')
            ->name('api.user.host.gallery_remove');
    });
    Route::apiResource('host', 'Api\HostController')->except(['update'])->names('api.user.host');

    Route::prefix('service')->group(function () {
        Route::get('/{service?}', 'Api\ServiceController@show')->name('api.user.service.show');
        Route::post('/update/{service?}', 'Api\ServiceController@update')->name('api.user.service.update');
        Route::delete('/delete/{service?}', 'Api\ServiceController@destroy')->name('api.user.service.delete');
    });
    Route::apiResource('service', 'Api\ServiceController')
        ->except(['update', 'show', 'delete'])
        ->names('api.user.service');

    Route::prefix('host/{host}/room')->name('api.user.host.room')->group(function () {
        Route::get('/{room?}', 'Api\RoomController@show')->name('.show');
    });
});

