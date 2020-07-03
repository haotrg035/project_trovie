<?php

namespace App\Providers;

use App\Helper\TrovieFile;
use App\Helper\TrovieHelper;
use App\Repositories\CityRepository;
use App\Repositories\ContractRepository;
use App\Repositories\GuestUserRepository;
use App\Repositories\HostRepository;
use App\Repositories\Interfaces\CityEloquentRepositoryInterface;
use App\Repositories\Interfaces\ContractEloquentRepositoryInterface;
use App\Repositories\Interfaces\GuestUserEloquentRepositoryInterface;
use App\Repositories\Interfaces\HostEloquentRepositoryInterface;
use App\Repositories\Interfaces\InvoiceEloquentRepositoryInterface;
use App\Repositories\Interfaces\MenuEloquentRepositoryInterface;
use App\Repositories\Interfaces\RoomArticleEloquentRepositoryInterface;
use App\Repositories\Interfaces\RoomEloquentRepositoryInterface;
use App\Repositories\Interfaces\ServiceEloquentRepositoryInterface;
use App\Repositories\Interfaces\SettingEloquentRepositoryInterface;
use App\Repositories\Interfaces\UserEloquentRepositoryInterface;
use App\Repositories\InvoiceRepository;
use App\Repositories\MenuRepository;
use App\Repositories\RoomArticleRepository;
use App\Repositories\RoomRepository;
use App\Repositories\ServiceRepository;
use App\Repositories\SettingRepository;
use App\Repositories\UserRepository;
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
        $this->app->bind(ServiceEloquentRepositoryInterface::class, function () {
            return new ServiceRepository();
        });
        $this->app->bind(ContractEloquentRepositoryInterface::class, function () {
            return new ContractRepository();
        });
        $this->app->bind(InvoiceEloquentRepositoryInterface::class, function () {
            return new InvoiceRepository();
        });
        $this->app->bind(UserEloquentRepositoryInterface::class, function () {
            return new UserRepository();
        });
        $this->app->bind(GuestUserEloquentRepositoryInterface::class, function () {
            return new GuestUserRepository();
        });
        $this->app->bind(RoomArticleEloquentRepositoryInterface::class, function () {
            return new RoomArticleRepository();
        });
        $this->app->bind(CityEloquentRepositoryInterface::class, function () {
            return new CityRepository();
        });
        $this->app->bind(SettingEloquentRepositoryInterface::class, function () {
            return new SettingRepository();
        });
        $this->app->bind(MenuEloquentRepositoryInterface::class, function () {
            return new MenuRepository();
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
        if (\DB::table('settings')->exists()) {
            config([
                'global' => \DB::table('settings')->get()->keyBy('name')->transform(function ($setting) {
                    return $setting->value;
                })->toArray()
            ]);
        }
    }
}
