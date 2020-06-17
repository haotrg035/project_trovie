<?php

namespace App\Policies;

use App\Models\User;
use App\Models\UserInviteToken;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserInviteTokenPolicy
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
     * @param \App\Models\UserInviteToken $userInviteToken
     * @return mixed
     */
    public function view(User $user, UserInviteToken $userInviteToken)
    {
        return $user->id === $userInviteToken->user_id;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param \App\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\UserInviteToken $userInviteToken
     * @return mixed
     */
    public function update(User $user, UserInviteToken $userInviteToken)
    {
        return $user->id === $userInviteToken->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\UserInviteToken $userInviteToken
     * @return mixed
     */
    public function delete(User $user, UserInviteToken $userInviteToken)
    {
        return $user->id === $userInviteToken->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\UserInviteToken $userInviteToken
     * @return mixed
     */
    public function restore(User $user, UserInviteToken $userInviteToken)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param \App\Models\User $user
     * @param \App\Models\UserInviteToken $userInviteToken
     * @return mixed
     */
    public function forceDelete(User $user, UserInviteToken $userInviteToken)
    {
        //
    }
}
