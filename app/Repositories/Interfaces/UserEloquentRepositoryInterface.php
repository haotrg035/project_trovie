<?php


namespace App\Repositories\Interfaces;


interface UserEloquentRepositoryInterface
{


    public function getUser($id, $relations);

    public function getUserByInviteToken($token);

    public function updateAvatar($file, $id);

    public function deleteUser($id);

    public function getAdminAllUsers($relations);

    public function createUser($attributes);

    public function changePassword($id, array $attributes, bool $isAdmin);

    public function cancelCurrentContract(?int $id);
}
