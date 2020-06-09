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


Route::get('/', function () {
    return redirect()->route('user.dashboard.index');
});
Route::name('user')->middleware(['auth'])->group(function () {
    Route::name('.dashboard')->prefix('dashboard')->group(function () {
        Route::get('/', function () {
            return view('user.dashboard.index');
        })->name('.index');
    });

});

Route::prefix('/user')->name('user.')->middleware(['auth', 'web', 'host_owner'])->group(function () {
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

    Route::prefix('service')->name('service')->group(function () {

    });

    Route::resource('/service','ServiceController')->names('service');

    Route::prefix('/contract')->name('contract')->group(function () {
        Route::get('/', 'ContractController@index')->name('.index');
    });
});

Auth::routes();
