<?php


namespace App\Repositories;

use App\Models\User;
use App\Repositories\Interfaces\UserEloquentRepositoryInterface;

class UserRepository extends EloquentRepository implements UserEloquentRepositoryInterface
{

    public function getModel()
    {
        return User::class;
    }

    public function getUser($id)
    {
        $user = $this->_model->where('id', $id)->first(['id', 'avatar', 'birthday', 'email', 'full_name', 'gender']);

        if ($user) {
            return $user->toArray();
        }
        return false;
    }

    public function getUserByInviteToken($token)
    {
        $user = \DB::table('user_invite_tokens')
            ->where('invite_token', $token)->first();
        $userHasRoom = \DB::table('room_user')->where('active', 1)->where('user_id', $user->user_id)->exists();
        if ($user && !$userHasRoom) {
            $userRepository = new UserRepository();
            if (time() <= strtotime($user->expired_at)) {
                $user_info = $userRepository->find($user->user_id, ['detail'])->toArray();
                $user_return_keys = [
                    'id',
                    'birthday',
                    'full_name',
                    'gender',
                    'address',
                    'phone',
                    'id_card',
                    'id_card_date',
                    'id_card_address'
                ];
                $result = [];
                foreach ($user_return_keys as $key) {
                    if (isset($user_info[$key]) && !empty($user_info[$key])) {
                        $result[$key] = $user_info[$key];
                        continue;
                    }
                    $result[$key] = $user_info['detail'][$key];
                }
                return $result;
            }
            return false;
        }
        return false;
    }
}
