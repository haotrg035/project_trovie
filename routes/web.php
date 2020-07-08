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
    Route::get('/', function () {
        return redirect(route('admin.setting.index'));
    });
    
    Route::prefix('setting')->name('.setting')->group(function () {
        Route::get('/', 'SettingController@setting')->name('.index');
        Route::patch('/update', 'SettingController@update')->name('.update');
        Route::post('/update-banner', 'SettingController@updateBanner')->name('.update_banner');
        Route::post('/update-no-image', 'SettingController@updateNoImage')->name('.update_no_image');
    });

    Route::prefix('menu')->name('.menu')->group(function () {
        Route::get('/', 'MenuController@index')->name('.index');
        Route::get('/get-menu/{menu?}', 'MenuController@show')->name('.show');
        Route::patch('/update-menu-pos', 'MenuController@updatePos')->name('.update_pos');
        Route::patch('/update-menu-info/{menu?}', 'MenuController@updateInfo')->name('.update_info');
        Route::post('/create-menu', 'MenuController@store')->name('.store');
        Route::delete('/delete-menu/{menu?}', 'MenuController@destroy')->name('.destroy');
    });

    Route::prefix('place')->name('.place')->group(function () {
        Route::get('/', 'CityController@index')->name('.index');
        Route::get('/get-city/{city?}', 'CityController@show')->name('.show_city');
        Route::post('/update-city/{city?}', 'CityController@update')->name('.update_city');
        Route::post('/update-city-avatar/{city?}', 'CityController@updateAvatar')->name('.update_city_avatar');
    });

    Route::prefix('users')->name('.users')->group(function () {
        Route::get('/', 'UserController@index')->name('.index');
        Route::get('/create', 'UserController@create')->name('.create');
        Route::post('/store', 'UserController@store')->name('.store');
        Route::get('/show/{user}', 'UserController@adminShowUser')->name('.show');
        Route::delete('/delete/{user}', 'UserController@destroy')->name('.delete');
        Route::patch('/update/{user}', 'UserController@adminUpdateUser')->name('.update');
        Route::patch('/change-password/{user}', 'UserController@adminChangePassword')->name('.change_password');
    });

    Route::prefix('articles')->name('.articles')->group(function (){
        Route::get('/', 'RoomArticleController@adminIndex')->name('.index');
    });
});

Route::prefix('user/profile')->name('user.profile')->middleware(['auth', 'web'])->group(function () {
    Route::get('/', 'UserController@show')->name('.show');
    Route::patch('/update/{user}', 'UserController@update')->name('.update');
    Route::patch('/change-password/{user}', 'UserController@changePassword')->name('.change_password');
});

Route::prefix('/user')->name('user.')->middleware(['auth', 'web', 'host_owner'])->group(function () {

    Route::prefix('/unit')->name('unit')->group(function () {
        Route::get('/create', 'UnitController@create')->name('.create');
    });
    Route::prefix('/host')->name('host')->group(function () {
        Route::patch('/update-info/{host}', 'HostController@updateInfo')->name('.update_info');
        Route::patch('/update-address/{host}', 'HostController@updateAddress')->name('.update_address');
        Route::patch('/update-announcement/{host}', 'HostController@updateAnouncement')->name('.update_announcement');
        Route::post('/update-avatar/{host}', 'HostController@updateAvatar')->name('.update_avatar');
        Route::prefix('/{host}/room')->name('.room')->group(function () {
            Route::get('/', 'RoomController@index')->name('.index');
            Route::get('/delete/{room?}', 'RoomController@destroy')->name('.delete');
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
