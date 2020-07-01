<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;

class IsAdminApi
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
        if (!$user || $user->role < config('app.role.web.admin')) {
            return response(['message' => 'Lỗi xác thực!'], 401);
        }
        $request['user_id'] = $user->id;
        return $next($request);
    }
}
