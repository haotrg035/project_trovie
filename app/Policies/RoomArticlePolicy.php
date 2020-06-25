<?php

namespace App\Policies;

use App\Models\RoomArticle;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RoomArticlePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param \App\Models\User $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\RoomArticle $roomArticle
     * @return mixed
     */
    public function view(User $user, RoomArticle $roomArticle)
    {
        return $user->isOwnRoom($roomArticle->id);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param \App\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isHostOwner();
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\RoomArticle $roomArticle
     * @return mixed
     */
    public function update(User $user, RoomArticle $roomArticle)
    {
        return $user->isHostOwner() && $user->isOwnArticle($roomArticle->id);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\RoomArticle $roomArticle
     * @return mixed
     */
    public function delete(User $user, RoomArticle $roomArticle)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\RoomArticle $roomArticle
     * @return mixed
     */
    public function restore(User $user, RoomArticle $roomArticle)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\RoomArticle $roomArticle
     * @return mixed
     */
    public function forceDelete(User $user, RoomArticle $roomArticle)
    {
        //
    }
}
