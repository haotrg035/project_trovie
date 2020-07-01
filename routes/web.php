<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('/')->name('frontend')->namespace('FrontEnd')->group(function () {
    Route::get('/', 'IndexController@index')->name('.index');
    Route::prefix('/phong')->name('.article')->group(function () {
        Route::get('/tim-kiem', 'RoomArticleController@search')->name('.search');
        Route::get('/map', 'RoomArticleController@searchMap')->name('.map_search');
        Route::get('/{room_article}', 'RoomArticleController@show')->name('.detail');
    });
});

Route::prefix('/admin')->name('admin')->middleware(['auth', 'web', 'is_admin'])->group(function () {
    Route::prefix('setting')->name('.setting')->group(function () {
        Route::get('/', 'SettingController@setting')->name('.index');
        Route::patch('/update','SettingController@update')->name('.update');
        Route::post('/update-banner','SettingController@updateBanner')->name('.update_banner');
    });
});

Route::prefix('/user')->name('user.')->middleware(['auth', 'web', 'host_owner'])->group(function () {
    Route::prefix('/profile')->name('profile')->group(function () {
        Route::get('/', 'UserController@show')->name('.show');
        Route::patch('/update/{user}', 'UserController@update')->name('.update');
    });
    Route::prefix('/host')->name('host')->group(function () {
        Route::patch('/update-info/{host}', 'HostController@updateInfo')->name('.update_info');
        Route::patch('/update-address/{host}', 'HostController@updateAddress')->name('.update_address');
        Route::patch('/update-announcement/{host}', 'HostController@updateAnouncement')->name('.update_announcement');
        Route::post('/update-avatar/{host}', 'HostController@updateAvatar')->name('.update_avatar');
        Route::prefix('/{host}/room')->name('.room')->group(function () {
            Route::get('/', 'RoomController@index')->name('.index');
        });
    });
    Route::resource('/host', 'HostController')->except(['create', 'edit', 'update'])
        ->middleware(['host_owner'])->names('host');
    Route::resource('/service', 'ServiceController')->names('service');
    Route::prefix('/contract')->name('contract')->group(function () {
        Route::get('/', 'ContractController@index')->name('.index');
    });
    Route::prefix('/invoice')->name('invoice')->group(function () {
        Route::get('/', 'InvoiceController@index')->name('.index');
    });
    Route::prefix('/article')->name('article')->group(function () {
        Route::get('/edit/{room_article?}', 'Api\RoomArticleController@edit')->name('.edit');

    });
    Route::resource('/room-article', 'RoomArticleController')->except(['edit'])->names('room_article');
});

Auth::routes();
