@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="row">
        <div class="col-md-4 col-lg-3 mb-0">
            <x-main-card has-header="0" class="user-avatar rounded-circle" body-class="half-padding">
                {{--                <x-slot name="title">Ảnh Đại Diện</x-slot>--}}
                <x-trovie-avatar-upload image="{{$data['data']['avatar']}}" method="POST" title="Ảnh đại diện"
                                        class="square rounded-circle"
                                        upload-url="{{route('api.user.update_avatar',$data['data']['id'])}}">
                </x-trovie-avatar-upload>
            </x-main-card>
            <div class=" mt-3 d-flex flex-column align-items-center">
                <h3 class="color-base-text text-center mb-3">{{$data['data']['full_name']}}</h3>
                <div class="font-weight-bold d-flex w-100 justify-content-center">
                    <p class="mr-3">
                        <i class="fa fa-intersex color-base-text"
                           aria-hidden="true"></i> {{$data['data']['gender'] === 1 ? 'Nam' : 'Nữ'}}
                    </p>
                    <p class="ml-3">
                        <i class="fa fa-birthday-cake color-base-text"
                           aria-hidden="true"></i>&nbsp;{{$data['data']['birthday']}}
                    </p>
                </div>
                @if($data['data']['state'] === 0)
                    <form action="{{route('api.user.generate_invite_token',auth()->user()->username)}}"
                          id="form-generate-token" class="d-flex w-100 flex-column align-items-center">
                        <input type="hidden" name="{{auth()->user()->username}}" required readonly>
                        <button type="submit" class="btn btn-base mb-3">
                            <i class="fa fa-key" aria-hidden="true"></i> TẠO MÃ MỜI
                        </button>
                        <div class="collapse" id="invite-token__collapse">
                            <input type="text" name="token" style="font-size: 1.35rem;"
                                   class="form-control text-center font-weight-bold rounded bg-white border shadow-sm trovie-input"
                                   readonly
                                   @if(!empty($data['data']['invite_token']))
                                   value="{{!empty($data['data']['invite_token']['token']) ? $data['data']['invite_token']['token'] : ''}}"
                                @endif>
                            <p class="text-center mt-3">Mã mời còn hiệu lực trong <span class="invite_token_timeout">
                                     @if($data['data']['invite_token']) {{$data['data']['invite_token']['expired_at']}} @endif
                                </span>
                            </p>
                        </div>
                    </form>
                @endif
            </div>
        </div>
        <div class="col-md-8 col-lg-9">
            <div class="row row--custom">
                <div class="col-md-8 col--custom">
                    <x-main-card has-header="1" body-class="px-3" header-class="border-bottom p-3" class="">
                        <x-slot name="title">THÔNG TIN</x-slot>
                        <form action="{{route('user.profile.update',auth()->id())}}" method="post"
                              class="user-info__form">
                            @csrf
                            @method('PATCH')
                            <div class="row">
                                <div class="col-12 col-lg-8">
                                    <div class="form-group @if($errors->first('full_name')) is-invalid  @endif">
                                        <label for="">HỌ TÊN:</label>
                                        <input type="text" name="full_name" id="full_name" required
                                               class="form-control trovie-input @if($errors->first('full_name')) is-invalid  @endif"
                                               data-default="{{$data['data']['full_name'] ?? ''}}"
                                               value="{{$data['data']['full_name'] ?? ''}}">
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
                                               data-default="{{$data['data']['birthday'] ?? ''}}"
                                               value="{{$data['data']['birthday'] ?? ''}}">
                                    </div>
                                    @if($errors->first('birthday'))
                                        <div class="invalid-feedback">
                                            {{$errors->first('birthday')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="col-6 col-lg-6">
                                    <div class="form-group @if($errors->first('email')) is-invalid  @endif">
                                        <label for="">EMAIL:</label>
                                        <input type="email" name="email" id="email"
                                               class="form-control trovie-input @if($errors->first('email')) is-invalid  @endif"
                                               data-default="{{$data['data']['email'] ?? ''}}"
                                               value="{{$data['data']['email'] ?? ''}}">
                                    </div>
                                    @if($errors->first('email'))
                                        <div class="invalid-feedback">
                                            {{$errors->first('email')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="col-6 col-lg-6">
                                    <div
                                        class="form-group form-group--unit form-group--unit--phone @if($errors->first('phone')) is-invalid  @endif">
                                        <label for="">ĐIỆN THOẠI:</label>
                                        <input type="phone" name="phone" id="phone" required
                                               class="form-control trovie-input @if($errors->first('phone')) is-invalid  @endif"
                                               data-default="{{$data['data']['detail']['phone'] ?? ''}}"
                                               value="{{$data['data']['detail']['phone'] ?? ''}}">
                                    </div>
                                    @if($errors->first('phone'))
                                        <div class="invalid-feedback">
                                            {{$errors->first('phone')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="col-6 col-lg-2 col--custom">
                                    <div class="form-group @if($errors->first('gender')) is-invalid  @endif">
                                        <label for="">GIỚI TÍNH:</label>
                                        <select type="gender" name="gender" id="gender" required
                                                class="form-control trovie-input @if($errors->first('gender')) is-invalid  @endif"
                                                data-default="{{$data['data']['birthday']}}"
                                                value="{{$data['data']['birthday']}}">
                                            <option value="1" {{$data['data']['gender'] == 1 ? 'selected' : ''}}>Nam
                                            </option>
                                            <option value="2" {{$data['data']['gender'] == 2 ? 'selected' : ''}}>Nữ
                                            </option>
                                        </select>
                                    </div>
                                    @if($errors->first('gender'))
                                        <div class="invalid-feedback">
                                            {{$errors->first('gender')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="col-12 col-lg-10">
                                    <div class="form-group  @if($errors->first('address')) is-invalid  @endif">
                                        <label for="">NƠI ĐĂNG KÝ HỘ KHẨU:</label>
                                        <input type="text" name="address" id="address" required
                                               class="form-control trovie-input @if($errors->first('address')) is-invalid  @endif"
                                               data-default="{{$data['data']['detail']['address'] ?? ''}}"
                                               value="{{$data['data']['detail']['address'] ?? ''}}">
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
                                               data-default="{{$data['data']['detail']['desc'] ?? ''}}"
                                               value="{{$data['data']['detail']['desc'] ?? ''}}">
                                    </div>
                                    @if($errors->first('desc'))
                                        <div class="invalid-feedback">
                                            {{$errors->first('desc')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="col-6 col-lg-4">
                                    <div class="form-group  @if($errors->first('id_card')) is-invalid  @endif">
                                        <label for="">SỐ CMND</label>
                                        <input type="id_card" name="id_card" id="id_card" required
                                               class="form-control trovie-input @if($errors->first('id_card')) is-invalid  @endif"
                                               data-default="{{$data['data']['detail']['id_card'] ?? ''}}"
                                               value="{{$data['data']['detail']['id_card'] ?? ''}}">
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
                                               data-default="{{$data['data']['detail']['id_card_date'] ?? ''}}"
                                               value="{{$data['data']['detail']['id_card_date'] ?? ''}}">
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
                                               value="{{$data['data']['detail']['id_card_address'] ?? ''}}"
                                               value="{{$data['data']['detail']['id_card_address'] ?? ''}}">
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
                        </form>
                    </x-main-card>
                    @if(!empty($data['room']))
                        <x-main-card has-header="1" body-class="px-3" header-class="border-bottom p-3" class="mt-3">
                            <x-slot name="title">NHÀ TRỌ CỦA TÔI</x-slot>
                            <div class="row row--custom">
                                <div class="col-12 col--custom">
                                    <figure class="mb-0 text-center">
                                        <img width="100%" src="{{$data['room']['host']['image']}}"
                                             alt="{{$data['room']['host']['name']}}"
                                             style="max-height: 500px; object-fit: cover;border-radius: 12px">
                                    </figure>
                                </div>
                                <div class="col-12 col--custom">
                                    <h3 class="mb-0">{{$data['room']['host']['name']}}</h3>
                                </div>
                                <div class="col-12 col--custom">
                                    <div class="form-group form-group--present mb-0">
                                        <label for=""><i class="fa fa-home" aria-hidden="true"></i> Địa chỉ</label>
                                        <input type="text" class="form-control trovie-input"
                                               value="{{$data['room']['host']['address']}}">
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col--custom">
                                    <div class="form-group form-group--present mb-0">
                                        <label for="">Phòng</label>
                                        <input type="text" class="form-control trovie-input"
                                               value="{{$data['room']['name']}}" readonly>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col--custom">
                                    <div
                                        class="form-group form-group--present form-group--unit form-group--unit--phone mb-0">
                                        <label for="">Số điện thoại</label>
                                        <input type="text" class="form-control trovie-input"
                                               value="{{$data['room']['host']['phone']}}" readonly>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col--custom">
                                    <div class="form-group form-group--present mb-0">
                                        <label for="">Khu/Tầng</label>
                                        <input type="text" class="form-control trovie-input"
                                               value="{{$data['room']['floor']}}" readonly>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col--custom">
                                    <div
                                        class="form-group form-group--present form-group--unit form-group--unit--price mb-0">
                                        <label for="">Giá phòng</label>
                                        <input type="text" class="form-control trovie-input"
                                               value="{{$data['room']['price']}}" readonly>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col--custom">
                                    <div
                                        class="form-group form-group--present form-group--unit form-group--unit--man mb-0">
                                        <label for="">Khách thuê</label>
                                        <input type="text" class="form-control trovie-input" readonly
                                               value="{{$data['room']['total_users'] .' / '.$data['room']['members']}}">
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col--custom">
                                    <div class="form-group form-group--present mb-0">
                                        <label for="">Ngày vào ở</label>
                                        <input type="text" class="form-control trovie-input"
                                               value="{{date('d/m/Y',strtotime($data['room']['pivot']['date_in']))}}"
                                               readonly>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row row--custom">
                                        <fieldset class="trovie-fieldset px-3 pb-3 mb-3 h-100">
                                            <legend>TIỆN ÍCH</legend>
                                            <div class="row overflow-auto trovie-scrollbar"
                                                 style="max-height: 200px">
                                                <div class="col-12 col--custom">
                                                    <div class="form-group">
                                                        <div
                                                            class="row row--custom panel-content--room__room-modal__form__services max-height-100 trovie-scrollbar h-auto">
                                                            @foreach($data['room']['services'] as $service)
                                                                <div class="col-6 col--custom">
                                                                    <div
                                                                        class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                                        <input type="checkbox" class="custom-control-input" disabled checked
                                                                               id="room-modal__form__services-checkbox-{{$service['id']}}"
                                                                               value="{{$service['id']}}" name="services[]">
                                                                        <label class="custom-control-label"
                                                                               for="room-modal__form__services-checkbox-{{$service['id']}}">
                                                                            <span class="text-capitalize">{{$service['name']}}</span>
                                                                            - {{$service['cost']}} đ/{{$service['unit']['name']}}
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            @endforeach
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                                <div class="col-12 d-flex justify-content-end col--custom mb-0">
                                    <form action="{{route('user.profile.cancel_contract')}}" id="form-cancel-contract" method="POST">
                                        @csrf
                                        @method('PATCH')
                                        <button class="btn btn-danger">
                                            <i class="fa fa-times" aria-hidden="true"></i> HỦY HỢP ĐỒNG
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </x-main-card>
                    @endif
                </div>
                <div class="col-md-4 col--custom">
                    <x-main-card has-header="1" body-class="px-3" header-class="border-bottom p-3" class="mb-3">
                        <x-slot name="title">ĐỔI MẬT KHẨU</x-slot>
                        <form action="{{route('user.profile.change_password', $data['data']['id'])}}" method="post">
                            @csrf
                            @method('PATCH')
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group @error('old_password') is-invalid @enderror">
                                        <label for="old_password"
                                               class="col-form-label text-md-right">Mật khẩu cũ:</label>
                                        <input id="old_password" type="password" name="old_password"
                                               class="form-control trovie-input @error('old_password') is-invalid @enderror"
                                               value="{{ old('old_password') }}" placeholder="Mật khẩu cũ" required>
                                        @error('old_password')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group @error('password') is-invalid @enderror">
                                        <label for="password"
                                               class="col-form-label text-md-right">Mật khẩu mới:</label>
                                        <input id="password" type="password" name="password"
                                               class="form-control trovie-input @error('password') is-invalid @enderror"
                                               value="{{ old('password') }}" placeholder="Mật khẩu" required>
                                        @error('password')
                                        <span class="invalid-feedback"
                                              role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-md-12">
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
                                <div class="col-md-12 d-inline-flex align-items-center justify-content-end">
                                    <button class="btn btn-base"><i class="fa fa-check-circle" aria-hidden="true"></i>
                                        ĐỔI MẬT KHẨU
                                    </button>
                                </div>
                            </div>
                        </form>
                    </x-main-card>
                    @if(!empty($data['room']))
                        @if(!empty($data['room']['host']['announcement']) && $data['room']['host']['notice'] === 1)
                            <div class="alert alert-info shadow-xs" role="alert" style="border-radius: 16px">
                                <h4 class="alert-heading">
                                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                                    Thông báo
                                </h4>
                                <p class="mb-0">
                                    {{$data['room']['host']['announcement']}}
                                </p>
                            </div>
                        @endif
                        @if(!empty($data['room']['announcement']) && $data['room']['notice'] === 1)
                            <div class="alert alert-warning shadow-xs" role="alert" style="border-radius: 16px">
                                <h4 class="alert-heading">
                                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                                    Thông báo riêng
                                </h4>
                                <p class="mb-0">
                                    {{$data['room']['announcement']}}
                                </p>
                            </div>
                        @endif
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script src="{{mix(config('app.user_theme') .'/js/profile/show.js')}}"></script>
@endsection
