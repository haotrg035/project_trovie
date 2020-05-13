<?php

namespace App\Providers;

use App\Helper\TrovieHelper;
use App\Repositories\HostRepository;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;
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
        $this->app->singleton(TrovieHelper::class, function () {
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
