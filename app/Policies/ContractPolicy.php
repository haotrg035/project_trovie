<?php

namespace App\Policies;

use App\Models\Contract;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ContractPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Contract $contract
     * @return mixed
     */
    public function view(User $user, Contract $contract)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isHostOwner();
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Contract $contract
     * @return mixed
     */
    public function update(User $user, Contract $contract)
    {
        return $user->isHostOwner() && $user->isOwnContract($contract->id);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Contract $contract
     * @return mixed
     */
    public function delete(User $user, Contract $contract)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Contract $contract
     * @return mixed
     */
    public function restore(User $user, Contract $contract)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Contract $contract
     * @return mixed
     */
    public function forceDelete(User $user, Contract $contract)
    {
        //
    }
}
