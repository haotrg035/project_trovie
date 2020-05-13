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
    Route::name('.host')->prefix('host')->group(function () {
        Route::name('room')->prefix('room')->group(function () {
            Route::get('/', function () {
                return view('user.host.room.index');
            })->name('.index');
        });
    });

    Route::name('service')->prefix('service')->group(function () {
        Route::get('/', function () {
            return view('user.service.index');
        })->name('.index');
    });
});

Route::middleware(['auth'])->group(function () {
    Route::resource('/host', 'HostController')->except([
        'create',
    ])->names('user.host');
});

Auth::routes();
