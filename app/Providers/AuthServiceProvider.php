<?php

namespace App\Providers;

use App\Models\Contract;
use App\Models\Host;
use App\Models\Room;
use App\Models\Service;
use App\Models\UserInviteToken;
use App\Policies\ContractPolicy;
use App\Policies\HostPolicy;
use App\Policies\RoomPolicy;
use App\Policies\ServicetPolicy;
use App\Policies\UserInviteTokenPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
        Host::class => HostPolicy::class,
        Service::class => ServicetPolicy::class,
        Room::class => RoomPolicy::class,
        Contract::class => ContractPolicy::class,
        UserInviteToken::class => UserInviteTokenPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
