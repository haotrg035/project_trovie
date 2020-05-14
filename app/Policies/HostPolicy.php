<?php

namespace App\Policies;

use App\Models\Host;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class HostPolicy
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
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Host $host
     * @return mixed
     */
    public function view(User $user, Host $host)
    {
        return $user->isHostOwner() && $user->id === $host->user_id ? Response::allow() : Response::deny('Bạn không thể xem trang này');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->role < 2 ? Response::allow() : Response::deny('Bạn không có quyền tạo nhà trọ!');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Host $host
     * @return mixed
     */
    public function update(User $user, Host $host)
    {
        return $user->id === $host->user_id ? Response::allow() : Response::deny('Bạn không thể sửa nhà trọ này');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Host $host
     * @return mixed
     */
    public function delete(User $user, Host $host)
    {
        return $user->id === $host->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Host $host
     * @return mixed
     */
    public function restore(User $user, Host $host)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Host $host
     * @return mixed
     */
    public function forceDelete(User $user, Host $host)
    {
        //
    }

}
