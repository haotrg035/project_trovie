@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content__header mb-5">
        <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
        <div class="panel-content__header__content">

        </div>
    </div>
    <form action="{{route('admin.users.store')}}" method="post" class="user-info__form" enctype="multipart/form-data">
        @csrf
        <div class="row row--custom">
            <div class="col-lg-8 col--custom">
                <x-main-card has-header="1" body-class="px-4" header-class="border-bottom p-4" class="rounded">
                    <x-slot name="title">{{'THÔNG TIN NGƯỜI DÙNG'}}</x-slot>
                    @csrf
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <div class="form-group @if($errors->first('username')) is-invalid  @endif">
                                <label for="">TÀI KHOẢN:</label>
                                <input type="text" name="username" id="username" required
                                       class="form-control trovie-input @if($errors->first('username')) is-invalid  @endif"
                                       data-default="" value="{{old('username') ?? ''}}">
                            </div>
                            @if($errors->first('username'))
                                <div class="invalid-feedback">
                                    {{$errors->first('username')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-4">
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
                        <div class="col-md-4">
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
                        <div class="col-12 col-lg-4">
                            <div class="form-group @if($errors->first('full_name')) is-invalid  @endif">
                                <label for="">HỌ TÊN:</label>
                                <input type="text" name="full_name" id="full_name" required
                                       class="form-control trovie-input @if($errors->first('full_name')) is-invalid  @endif"
                                       data-default="" value="{{old('full_name') ?? ''}}">
                            </div>
                            @if($errors->first('full_name'))
                                <div class="invalid-feedback">
                                    {{$errors->first('full_name')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-6 col-lg-4">
                            <div
                                class="form-group form-group--unit form-group--unit--date @if($errors->first('birthday')) is-invalid  @endif">
                                <label for="">NGÀY SINH:</label>
                                <input type="birthday" name="birthday" id="birthday" required
                                       class="form-control trovie-input @if($errors->first('birthday')) is-invalid  @endif"
                                       data-default="" value="{{old('birthday') ?? ''}}">
                            </div>
                            @if($errors->first('birthday'))
                                <div class="invalid-feedback">
                                    {{$errors->first('birthday')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-6 col-lg-4">
                            <div
                                class="form-group form-group--unit form-group--unit--phone @if($errors->first('phone')) is-invalid  @endif">
                                <label for="">ĐIỆN THOẠI:</label>
                                <input type="phone" name="phone" id="phone" required
                                       class="form-control trovie-input @if($errors->first('phone')) is-invalid  @endif"
                                       data-default="" value="{{old('phone') ?? ''}}">
                            </div>
                            @if($errors->first('phone'))
                                <div class="invalid-feedback">
                                    {{$errors->first('phone')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-6 col-lg-4">
                            <div class="form-group @if($errors->first('email')) is-invalid  @endif">
                                <label for="">EMAIL:</label>
                                <input type="email" name="email" id="email"
                                       class="form-control trovie-input @if($errors->first('email')) is-invalid  @endif"
                                       data-default="" value="{{old('email') ?? ''}}">
                            </div>
                            @if($errors->first('email'))
                                <div class="invalid-feedback">
                                    {{$errors->first('email')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-6 col-lg-2">
                            <div class="form-group @if($errors->first('gender')) is-invalid  @endif">
                                <label for="">GIỚI TÍNH:</label>
                                <select type="gender" name="gender" id="gender" required
                                        class="form-control trovie-input @if($errors->first('gender')) is-invalid  @endif"
                                        data-default="">
                                    <option value="1" selected>Nam</option>
                                    <option value="2">Nữ</option>
                                </select>
                            </div>
                            @if($errors->first('gender'))
                                <div class="invalid-feedback">
                                    {{$errors->first('gender')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="form-group  @if($errors->first('address')) is-invalid  @endif">
                                <label for="">NƠI ĐĂNG KÝ HỘ KHẨU:</label>
                                <input type="text" name="address" id="address" required
                                       class="form-control trovie-input @if($errors->first('address')) is-invalid  @endif"
                                       data-default="" value="{{old('address') ?? ''}}">
                            </div>
                            @if($errors->first('address'))
                                <div class="invalid-feedback">
                                    {{$errors->first('address')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-12 col-lg-12">
                            <div class="form-group @if($errors->first('desc')) is-invalid  @endif">
                                <label for="">GIỚI THIỆU VỀ BẢN THÂN:</label>
                                <input type="text" name="desc" id="desc" required
                                       class="form-control trovie-input @if($errors->first('desc')) is-invalid  @endif"
                                       data-default="" value="{{old('desc') ?? ''}}">
                            </div>
                            @if($errors->first('desc'))
                                <div class="invalid-feedback">
                                    {{$errors->first('desc')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-6 col-lg-4">
                            <div class="form-group  @if($errors->first('id_card')) is-invalid  @endif">
                                <label for="">SỐ CMND / CĂN CƯỚC</label>
                                <input type="id_card" name="id_card" id="id_card" required
                                       class="form-control trovie-input @if($errors->first('id_card')) is-invalid  @endif"
                                       data-default="" value="{{old('id_card') ?? ''}}">
                                @if($errors->first('id_card'))
                                    <div class="invalid-feedback">
                                        {{$errors->first('id_card') ?? 'Số CMND không hợp lệ!'}}
                                    </div>
                                @endif
                            </div>
                        </div>
                        <div class="col-6 col-lg-4">
                            <div
                                class="form-group form-group--unit form-group--unit--date @if($errors->first('id_card_date')) is-invalid  @endif">
                                <label for="">NGÀY ĐĂNG KÍ</label>
                                <input type="text" name="id_card_date" id="id_card_date" required
                                       class="form-control trovie-input @if($errors->first('id_card_date')) is-invalid  @endif"
                                       data-default="" value="{{old('id_card_date') ?? ''}}">
                            </div>
                            @if($errors->first('id_card_date'))
                                <div class="invalid-feedback">
                                    {{$errors->first('id_card_date')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="form-group @if($errors->first('id_card_address')) is-invalid  @endif">
                                <label for="">NƠI ĐĂNG KÍ</label>
                                <input type="text" name="id_card_address" id="id_card_address" required
                                       class="form-control trovie-input @if($errors->first('id_card_address')) is-invalid  @endif"
                                       value="{{old('id_card_address') ?? ''}}">
                            </div>
                            @if($errors->first('id_card_address'))
                                <div class="invalid-feedback">
                                    {{$errors->first('id_card_address')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <button type="reset" class="btn btn-base">
                                <i class="fa fa-refresh" aria-hidden="true"></i> LÀM LẠI
                            </button>
                            <button type="submit" class="btn btn-base ml-2">
                                <i class="fa fa-floppy-o" aria-hidden="true"></i> LƯU
                            </button>
                        </div>
                    </div>
                </x-main-card>
            </div>
            <div class="col-lg-4 col--custom">
                <x-main-card has-header="1" body-class="px-4" header-class="border-bottom p-4" class="rounded">
                    <x-slot name="title">LOẠI NGƯỜI DÙNG</x-slot>
                    <div class="form-group">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" checked id="role_user" name="role"
                                   value="{{config('app.role.host.user')}}">
                            <label class="custom-control-label pt-0" for="role_user">Khách thuê</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="role_host" name="role"
                                   value="{{config('app.role.host.hostOwner')}}">
                            <label class="custom-control-label pt-0" for="role_host">Chủ trọ</label>
                        </div>
                    </div>
                </x-main-card>
                <x-main-card has-header="1" body-class="px-4" header-class="border-bottom p-4" class="rounded mt-3">
                    <x-slot name="title">AVATAR</x-slot>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" name="avatar" accept="image/x-png,image/gif,image/jpeg">
                        <label class="custom-file-label" for="customFile">Chọn ảnh</label>
                    </div>
{{--                    <div class="form-group mb-0">--}}
{{--                        <input type="file" name="avatar" accept="image/*">--}}
{{--                    </div>--}}
                </x-main-card>
            </div>
        </div>
    </form>

@endsection
@section('script')
    <script src="{{mix(config('app.user_theme') .'/js/profile/show.js')}}"></script>
    <script>
        $(".custom-file-input").on("change", function() {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
    </script>
@endsection
