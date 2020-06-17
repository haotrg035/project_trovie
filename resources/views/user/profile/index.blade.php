@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    @include('user.host.modal._create-host-modal')
    {{--    <x-panel-header panel-title="{{$data['view_name']}}">--}}
    {{--    </x-panel-header>--}}
    <div class="row">
        <div class="col-md-4 col-lg-3 mb-0">
            <x-main-card has-header="0" class="user-avatar rounded-circle" body-class="half-padding">
                {{--                <x-slot name="title">Ảnh Đại Diện</x-slot>--}}
                <x-trovie-avatar-upload image="{{$data['data']['avatar']}}" method="POST" title="Ảnh đại diện"
                                        class="square rounded-circle"
                                        upload-url="{{route('api.user.host.update_avatar',$data['data']['id'])}}">
                </x-trovie-avatar-upload>
            </x-main-card>
            <div class=" mt-3 d-flex flex-column align-items-center">
                <h3 class="color-base-text mb-3">{{$data['data']['full_name']}}</h3>
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
                                   @if($data['data']['invite_token'])
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
            <x-main-card has-header="1" body-class="px-4" header-class="border-bottom p-4" class="rounded">
                <x-slot name="title">{{$data['view_name']}}</x-slot>
                <form action="{{route('user.profile.update',auth()->id())}}" method="post" class="user-info__form">
                    @csrf
                    @method('PATCH')
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <div class="form-group">
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
                            <div class="form-group form-group--unit form-group--unit--date">
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
                            <div class="form-group">
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
                            <div class="form-group form-group--unit form-group--unit--phone">
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
                            <div class="form-group">
                                <label for="">GIỚI TÍNH:</label>
                                <select type="gender" name="gender" id="gender" required
                                        class="form-control trovie-input @if($errors->first('gender')) is-invalid  @endif"
                                        data-default="{{$data['data']['birthday']}}"
                                        value="{{$data['data']['birthday']}}">
                                    <option value="1" {{$data['data']['gender'] == 1 ? 'selected' : ''}}>Nam</option>
                                    <option value="2" {{$data['data']['gender'] == 2 ? 'selected' : ''}}>Nữ</option>
                                </select>
                            </div>
                            @if($errors->first('gender'))
                                <div class="invalid-feedback">
                                    {{$errors->first('gender')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-12 col-lg-10">
                            <div class="form-group">
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
                            <div class="form-group">
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
                            <div class="form-group">
                                <label for="">SỐ CMND / CĂN CƯỚC</label>
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
                            <div class="form-group form-group--unit form-group--unit--date">
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
                            <div class="form-group">
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
            @if(!empty($data['data']['room']))
                {{--                <x-main-card has-header="1" body-class="px-4" header-class="border-bottom p-4" class="rounded mt-4">--}}
                {{--                    <x-slot name="title">PHÒNG ĐANG TRỌ</x-slot>--}}
                {{--                </x-main-card>--}}
            @endif
        </div>
    </div>
@endsection
@section('script')
    <script src="{{mix(config('app.user_theme') .'/js/profile/show.js')}}"></script>
@endsection
