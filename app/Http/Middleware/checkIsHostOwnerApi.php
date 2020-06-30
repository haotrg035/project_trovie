<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;

class checkIsHostOwnerApi
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = User::where('api_token', $request->api_token)->first();
        if (!$user || $user->role > 1) {
            return response(['message' => 'Lỗi xác thực!'], 401);
        }
        $request['user_id'] = $user->id;
        return $next($request);
    }
}
