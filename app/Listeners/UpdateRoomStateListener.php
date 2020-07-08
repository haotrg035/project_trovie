<?php

namespace App\Listeners;

use App\Events\RoomContractUpdatedEvent;
use App\Repositories\Interfaces\RoomEloquentRepositoryInterface;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateRoomStateListener
{
    /**
     * @var RoomEloquentRepositoryInterface
     */
    protected $repository;

    /**
     * Create the event listener.
     *
     * @param RoomEloquentRepositoryInterface $repository
     */
    public function __construct(RoomEloquentRepositoryInterface $repository)
    {
        //
        $this->repository = $repository;
    }

    /**
     * Handle the event.
     *
     * @param RoomContractUpdatedEvent $event
     * @return void
     */
    public function handle(RoomContractUpdatedEvent $event)
    {
        $event->room->updateState();
    }
}
