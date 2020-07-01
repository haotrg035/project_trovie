<?php

namespace App\Http\Controllers\Auth;

use App\Helper\TrovieHelper;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required', 'string', 'max:191', 'unique:users'],
            'full_name' => ['required', 'string', 'max:60'],
            'email' => ['nullable', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'max:255', 'confirmed'],
            'gender' => ['required'],
            'birthday' => [
                'required',
                'date_format:d/m/Y',
                function ($attribute, $value, $fail) {
                    if (strtotime(TrovieHelper::convertDateFormat($value)) > (time() - TrovieHelper::getDayToTimeStamp(30 * 12 * 14))) {
                        return $fail(' người dùng phải từ 14 tuổi trở lên');
                    }
                }
            ],
            'role' => ['required', 'between:' . config('app.role.host.user') . ',' . config('app.role.host.hostOwner')],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        $data['birthday'] = date_create_from_format('d/m/Y', $data['birthday'])->format('Y-m-d');
        $user = User::create([
            'username' => $data['username'],
            'full_name' => $data['full_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'gender' => $data['gender'],
            'birthday' => $data['birthday'],
            'role' => $data['role'],
            'api_token' => Str::random(80),
        ]);
        \DB::table('user_details')->insert(['user_id' => $user->id]);
        return $user;
    }
}
