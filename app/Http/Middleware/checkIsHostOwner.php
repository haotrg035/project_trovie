<?php

namespace App\Http\Middleware;

use Closure;

class checkIsHostOwner
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
        if (\Auth::user()->isHostOwner()) {
            return $next($request);
        }
        return redirect('/');
    }
}
