@extends('auth.master')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header color-base-bg text-white">{{ __('ĐĂNG KÍ') }}</div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="username"
                                               class="col-form-label text-md-right">Tên tài khoản:</label>
                                        <input id="username" type="text" name="username"
                                               class="form-control trovie-input @error('username') is-invalid @enderror"
                                               value="{{ old('username') }}" required focus>
                                        @error('username')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="email"
                                               class="col-form-label text-md-right">Email:</label>
                                        <input id="email" type="text" name="email"
                                               class="form-control trovie-input @error('email') is-invalid @enderror"
                                               value="{{ old('email') }}">
                                        @error('email')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="password"
                                               class="col-form-label text-md-right">Mật khẩu:</label>
                                        <input id="password" type="password" name="password"
                                               class="form-control trovie-input @error('password') is-invalid @enderror"
                                               value="{{ old('password') }}" placeholder="Mật khẩu" required>
                                        @error('password')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="password_confirmation"
                                               class="col-form-label text-md-right">Xác nhận mật khẩu:</label>
                                        <input id="password_confirmation" type="password" name="password_confirmation"
                                               class="form-control trovie-input @error('password_confirmation') is-invalid @enderror"
                                               value="{{ old('password_confirmation') }}"
                                               placeholder="Xác nhận mật khẩu" required>
                                        @error('password_confirmation')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="full_name"
                                               class="col-form-label text-md-right">Họ và tên:</label>
                                        <input id="full_name" type="text" name="full_name"
                                               class="form-control trovie-input @error('full_name') is-invalid @enderror"
                                               value="{{ old('full_name') }}" required>
                                        @error('full_name')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="gender"
                                               class="col-form-label text-md-right">Giới tính:</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio col-6 pl-4">
                                                <input type="radio" name="gender" value="1"
                                                       class="custom-control-input trovie-input @error('gender') is-invalid @enderror"
                                                       required {{ old('gender') == "1" || empty(old('gender')) ? 'checked' : '' }}>
                                                <label class="custom-control-label p-0" for="gender">Nam</label>
                                            </div>
                                            <div class="custom-control custom-radio col-6 pl-4">
                                                <input type="radio" name="gender"
                                                       class="custom-control-input trovie-input @error('gender') is-invalid @enderror"
                                                       value="0" required {{ old('gender') == "0" ? 'checked' : '' }}>
                                                <label class="custom-control-label p-0" for="gender">Nữ</label>
                                            </div>
                                        </div>
                                        @error('gender')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group form-group--unit form-group--unit--date">
                                        <label for="birthday"
                                               class="col-form-label text-md-right">Ngày sinh:</label>
                                        <input id="birthday" type="text" name="birthday"
                                               class="form-control trovie-input @error('birthday') is-invalid @enderror"
                                               value="{{ old('birthday') }}" required>
                                    </div>
                                    @error('birthday')
                                    <span class="invalid-feedback"
                                          role="alert"><strong>{{ $message }}</strong></span>
                                    @enderror
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-group">
                                        <label for="role"
                                               class="col-form-label text-md-right">Loại tài khoản:</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio col-6 pl-4">
                                                <input type="radio" name="role" value="1"
                                                       class="custom-control-input trovie-input @error('gender') is-invalid @enderror"
                                                       required {{ ((old('role') === "1") || empty(old('role'))) ? 'checked' : '' }}>
                                                <label class="custom-control-label p-0" for="gender">Khách thuê</label>
                                            </div>
                                            <div class="custom-control custom-radio col-6 pl-4">
                                                <input type="radio" name="role"
                                                       class="custom-control-input trovie-input @error('role') is-invalid @enderror"
                                                       value="0" required {{ old('role') === "2" ? 'checked' : '' }}>
                                                <label class="custom-control-label p-0" for="gender">Chủ trọ</label>
                                            </div>
                                        </div>
                                        @error('role')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 d-flex justify-content-center align-items-center">
                                    <div class="form-group text-center mb-0">
                                        <button type="submit" class="btn btn-base">ĐĂNG KÍ</button>
                                    </div>
                                    <span class="ml-2">hoặc hãy</span> <a class="btn btn-link color-base-text"
                                                                          href="{{ route('login') }}">{{ __('Đăng nhập') }}</a>
                                    <span>nếu đã có tài khoản</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script !src="">

    </script>
@endsection
