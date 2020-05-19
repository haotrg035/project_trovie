@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
            <div class="panel-content__header__content">
                <ul class="panel-content--host__header__elements list-unstyled">
                    <li class="panel-content--host__header__elements__item">
                        <a href="{{route('user.host.room.index',$data['data']['id'])}}"
                           class="btn rounded-0 btn-base-outline">
                            <i class="fa fa-home" aria-hidden="true"></i>&nbsp;Phòng Trọ
                        </a>
                    </li>
                    <li class="panel-content--host__header__elements__item">
                        <a href="#" class="btn rounded-0 btn-outline-danger">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>&nbsp;Xóa Nhà Trọ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row row--custom">
            <div class="col-lg-6 col--custom">
                <div class="row row--custom">
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1" class="host-info">
                            <x-slot name="title">Thông Tin</x-slot>
                            <form action="{{route('user.host.update_info',$data['data']['id'])}}" id="form-host-info"
                                  method="post" class="host-info__form-detail">
                                @method('PATCH')
                                @csrf
                                <div class="host-info__form-change-name">
                                    <div class="form-group form-group--edit">
                                        <input type="text"
                                               class="form-control trovie-input @if($errors->first('name')) is-invalid  @endif"
                                               name="name" id="name" required
                                               placeholder="Nhập tên khu trọ" data-default="{{$data['data']['name']}}"
                                               value="{{$data['data']['name']}}" readonly>
                                        <a href="javascript:void(0)" class="form-group--edit__edit-btn">
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    @if($errors->first('name'))
                                        <div class="invalid-feedback">
                                            {{$errors->first('name')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="row row--custom">
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group">
                                            <label for="date_note_electric">Ngày Ghi Điện:</label>
                                            <input type="number" min="1" max="31"
                                                   class="form-control trovie-input @if($errors->first('date_note_electric')) is-invalid  @endif"
                                                   name="date_note_electric" required
                                                   value="{{$data['data']['date_note_electric']}}"
                                                   id="date_note_electric" placeholder="">
                                            @if($errors->first('date_note_electric'))
                                                <div class="invalid-feedback">
                                                    {{$errors->first('date_note_electric')}}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group">
                                            <label for="date_note_water">Ngày Ghi Nước:</label>
                                            <input type="number" min="1" max="31" required
                                                   class="form-control trovie-input @if($errors->first('date_note_water')) is-invalid  @endif"
                                                   name="date_note_water" value="{{$data['data']['date_note_water']}}"
                                                   id="date_note_water" placeholder="">
                                            @if($errors->first('date_note_water'))
                                                <div class="invalid-feedback">
                                                    {{$errors->first('date_note_water')}}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group">
                                            <label for="date_payment">Ngày Thu Tiền:</label>
                                            <input type="number" min="1" max="31" required
                                                   class="form-control trovie-input @if($errors->first('date_payment')) is-invalid  @endif"
                                                   name="date_payment" value="{{$data['data']['date_payment']}}"
                                                   id="date_payment" placeholder="">
                                            @if($errors->first('date_payment'))
                                                <div class="invalid-feedback">
                                                    {{$errors->first('date_payment')}}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group form-group--unit form-group--unit--electric">
                                            <label for="cost_electric">
                                                <i class="fa fa-bolt text-warning" aria-hidden="true"></i>
                                                Tiền Điện: </label>
                                            <input type="text" required
                                                   class="form-control form-control--wide trovie-input @if($errors->first('cost_electric')) is-invalid  @endif"
                                                   value="{{\App\Helper\TrovieHelper::currencyFormat($data['data']['cost_electric'])}}"
                                                   name="cost_electric" id="cost_electric" placeholder="">
                                            @if($errors->first('cost_electric'))
                                                <div class="invalid-feedback">
                                                    {{$errors->first('cost_electric')}}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group form-group--unit form-group--unit--water">
                                            <label for="cost_water">
                                                <i class="fa fa-tint text-primary" aria-hidden="true"></i>
                                                Tiền Nước: </label>
                                            <input type="text" required
                                                   class="form-control form-control--wide trovie-input @if($errors->first('cost_water')) is-invalid  @endif"
                                                   name="cost_water"
                                                   id="cost_water" placeholder=""
                                                   value="{{\App\Helper\TrovieHelper::currencyFormat($data['data']['cost_water'])}}">
                                            @if($errors->first('cost_water'))
                                                <div class="invalid-feedback">
                                                    {{$errors->first('cost_water')}}
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="desc">Mô Tả:</label>
                                    <textarea name="desc" id="desc" cols="30" rows="3" required
                                              class="form-control trovie-input @if($errors->first('desc')) is-invalid  @endif"
                                              placeholder="Mô tả ngắn về khu trọ">{{$data['data']['desc']}}</textarea>
                                    @if($errors->first('desc'))
                                        <div class="invalid-feedback">
                                            {{$errors->first('desc')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button class="btn btn-base" type="submit">
                                        <i class="fa fa-floppy-o" aria-hidden="true"></i>
                                        &nbsp;Lưu
                                    </button>
                                </div>
                            </form>
                        </x-main-card>
                    </div>
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1" class="host-info" body-class="pb-0">
                            <x-slot name="title">Vị trí</x-slot>
                            <form action="{{route('user.host.update_address',$data['data']['id'])}}"
                                  id="form-host-position" method="post"
                                  class="host-info__form-position">
                                @method('PATCH')
                                @csrf
                                <div class="row row--custom">
                                    <div class="col-12 col-lg-12 col--custom">
                                        <div class="form-group">
                                            <label for="address">Địa chỉ:</label>
                                            <input type="text" class="form-control trovie-input" name="address"
                                                   id="address" value="{{$data['data']['address']}}" required
                                                   placeholder="Số nhà, quận/huyện, tỉnh/thành" autocomplete="off"
                                                   data-address="{{$data['data']['address']}}">
                                            <ul class="address-result-list list-unstyled mb-0">
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-12 col--custom">
                                        <div id="form-position__map"
                                             class="host-info__form-position__map"></div>
                                    </div>
                                    <div class="col-12 col--custom d-flex justify-content-end">
                                        <button class="btn btn-base" type="submit">
                                            <i class="fa fa-floppy-o" aria-hidden="true"></i>
                                            &nbsp;Lưu
                                        </button>
                                    </div>
                                </div>
                                <input type="hidden" name="latitude" id="latitude"
                                       value="{{$data['data']['latitude']}}" required>
                                <input type="hidden" name="longitude" id="longitude"
                                       value="{{$data['data']['longitude']}}" required>
                                <input type="hidden" name="city_name" id="city_name" required>
                                <input type="hidden" name="district_name" id="district_name" required>
                            </form>
                        </x-main-card>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col--custom">
                <div class="row row--custom">
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1">
                            <x-slot name="title">Thông Báo</x-slot>
                            <form action="{{route('user.host.update_announcement',$data['data']['id'])}}"
                                  class="host-info__form-announce" method="POST">
                                @method('PATCH')
                                @csrf
                                <div class="form-group">
                                    <textarea name="announcement" id="announcement" cols="30" rows="3"
                                              class="form-control trovie-input" required
                                              placeholder="Nội dung thông báo">{{$data['data']['announcement']}}</textarea>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="custom-control custom-switch">
                                        <input name="notice" type="checkbox" class="custom-control-input"
                                               id="toggleThongBao" @if($data['data']['notice'] === 1) checked @endif>
                                        <label class="custom-control-label" for="toggleThongBao">Bật thông báo</label>
                                    </div>
                                    <button class="btn btn-base" type="submit">
                                        <i class="fa fa-floppy-o" aria-hidden="true"></i>
                                        &nbsp;Lưu
                                    </button>
                                </div>
                            </form>
                        </x-main-card>
                    </div>
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1" class="host-avatar">
                            <x-slot name="title">Ảnh Đại Diện</x-slot>
                            <form action="{{route('api.user.host.update_avatar',$data['data']['id'])}}" method="POST"
                                  enctype="multipart/form-data">
                                <input class="filepond mb-0" type="file" name="avatar" id="file-avatar"
                                       data-host-id="{{$data['data']['id']}}"
                                       data-poster-src="{{asset($data['data']['image'])}}"
                                       {{--                                       data-poster-size="3001025"--}}
                                       data-max-file-size="2MB"
                                       data-poster-name="Ảnh Đại Diện">
                            </form>
                        </x-main-card>
                    </div>
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1" class="host-gallery" body-class="pb-0">
                            <x-slot name="title">Album Ảnh</x-slot>
                            <x-trovie-gallery :gallery-items="$data['data']['gallery']"
                                              upload-url="{{route('api.user.host.gallery_add',$data['data']['id'])}}">
                            </x-trovie-gallery>
                        </x-main-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script src="{{mix(config('app.user_theme') .'/js/host/detail.js')}}"></script>
@endsection
