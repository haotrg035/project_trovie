@extends('auth.master')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header color-base-bg text-white font-weight-bold d-flex align-items-center">
                        <i class="fa fa-lock d-inline-block mr-3" aria-hidden="true"></i>
                        {{ __('ĐĂNG NHẬP') }}
                    </div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            <div class="row justify-content-center">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label for="username"
                                               class="col-form-label text-md-right">Tên tài khoản:</label>
                                        <input id="username" type="text" name="username"
                                               class="form-control trovie-input @error('username') is-invalid @enderror"
                                               value="{{ old('username') }}" required autofocus>
                                        @error('username')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="password"
                                               class="col-form-label text-md-right">Mật khẩu:</label>
                                        <input id="password" type="password" name="password"
                                               class="form-control trovie-input @error('password') is-invalid @enderror"
                                               value="{{ old('password') }}" placeholder="Mật khẩu" required autofocus>
                                        @error('password')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <div class="">
                                            <div class="custom-control custom-checkbox d-flex align-items-center">
                                                <input class="custom-control-input" type="checkbox" name="remember"
                                                       id="remember" {{ old('remember') ? 'checked' : '' }}>

                                                <label class="custom-control-label" style="padding-top: .15rem;"
                                                       for="remember">
                                                    {{ __('Nhớ tài khoản') }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-0">
                                        <button type="submit" class="btn btn-base">
                                            <i class="fa fa-sign-in" aria-hidden="true"></i>
                                            {{ __('Đăng Nhập') }}
                                        </button>

                                        @if (Route::has('password.request'))
                                            <a class="btn btn-link color-base-text"
                                               href="{{ route('password.request') }}">
                                                {{ __('Quên mật khẩu?') }}
                                            </a>
                                            <span>hoặc</span>
                                        @endif
                                        <a class="btn btn-link btn-base-outline"
                                           href="{{ route('register') }}">
                                            {{ __('Đăng Kí') }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
