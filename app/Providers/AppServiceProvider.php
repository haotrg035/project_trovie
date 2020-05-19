<?php

namespace App\Providers;

use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use App\Repositories\HostRepository;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;
use App\Repositories\Interfaces\RoomEloquentRepositoryInterface;
use App\Repositories\RoomRepository;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(HostEloquentRepositoryInterface::class, function () {
            return new HostRepository();
        });
        $this->app->bind(RoomEloquentRepositoryInterface::class, function () {
            return new RoomRepository();
        });
        $this->app->singleton(TrovieHelper::class, function () {
            return new TrovieHelper();
        });
        $this->app->singleton(TrovieFile::class, function () {
            return new TrovieHelper();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Builder::defaultStringLength(191);
    }
}
