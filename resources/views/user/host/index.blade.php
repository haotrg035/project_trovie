@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
            <div class="panel-content__header__content">
                <ul class="panel-content--host__header__elements list-unstyled">
                    <li class="panel-content--host__header__elements__item">
                        <a href="#create-host-modal" class="btn rounded-0 btn-base-outline" data-toggle="modal">
                            <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Thêm Nhà Trọ
                        </a>
                    </li>
                    <li class="panel-content--host__header__elements__item">
                        <a href="#" class="btn rounded-0 btn-base-outline">
                            <i class="fa fa-cubes" aria-hidden="true"></i>&nbsp;Tiện Ích
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="host-list">
            <div class="row row--custom">
                @foreach($data['data'] as $host)
                    <div class="col-sm-6 col-md-6 col-xl-4 col--custom">
                        <x-main-card body-class="" class="host-card-wrapper">
                            <a href="{{route('user.host.show',$host['id'])}}" class="host-card">
                                <p class="host-card__name line-clamp" title="{{$host['name']}}"
                                   style="line-height: 1.5em;height: 1.5em;-webkit-line-clamp:1">
                                    {{$host['name']}}
                                </p>
                                <ul class="host-card__attribute-list mb-0 list-unstyled">
                                    <li class="attribute-list__item">
                                        <p class="item__label">
                                            <i class="fa fa-bolt" aria-hidden="true"></i>
                                            <span>&nbsp;Điện:</span>
                                        </p>
                                        <p class="item__value">{{$host['cost_electric']}}đ / Kv</p>
                                    </li>
                                    <li class="attribute-list__item" title="Ngày ghi số điện">
                                        <p class="item__label">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span>&nbsp;Ghi điện:</span>
                                        </p>
                                        <p class="item__value">{{$host['date_note_electric']}}</p>
                                    </li>
                                    <li class="attribute-list__item">
                                        <p class="item__label">
                                            <i class="fa fa-tint" aria-hidden="true"></i>
                                            <span>&nbsp;Nước:</span>
                                        </p>
                                        <p class="item__value">{{$host['cost_water']}}đ / m<sup>3</sup></p>
                                    </li>
                                    <li class="attribute-list__item" title="Ngày ghi số nước">
                                        <p class="item__label">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span>&nbsp;Ghi nước:</span>
                                        </p>
                                        <p class="item__value">{{$host['date_note_water']}}</p>
                                    </li>
                                    <li class="attribute-list__item attribute-list__item--separator attribute-list__item--wide"></li>
                                    <li class="attribute-list__item">
                                        <p class="item__label">
                                            <i class="fa fa-home" aria-hidden="true"></i>
                                            <span>&nbsp;Số phòng:</span>
                                        </p>
                                        <p class="item__value">{{$host['countable_info']['rooms']}}</p>
                                    </li>
                                    <li class="attribute-list__item">
                                        <p class="item__label">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                            <span>&nbsp;Nhân khẩu:</span>
                                        </p>
                                        <p class="item__value">{{$host['countable_info']['users']}}</p>
                                    </li>
                                    <li class="attribute-list__item" title="Ngày thu tiền trọ">
                                        <p class="item__label">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                            <span>&nbsp;Thu tiền trọ:</span>
                                        </p>
                                        <p class="item__value">{{$host['date_payment']}}</p>
                                    </li>
                                    <li class="attribute-list__item invisible">
                                        <p class="item__label">
                                            <i class="fa fa-bolt" aria-hidden="true"></i>
                                            <span>&nbsp;</span>
                                        </p>
                                        <p class="item__value"></p>
                                    </li>

                                    <li class="attribute-list__item attribute-list__item--wide">
                                        <p class="item__label">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        </p>
                                        <p class="item__value line-clamp" title="{{$host['address']}}"
                                           style="line-height: 1.5em;height: 1.5em; -webkit-line-clamp:1">
                                            {{$host['address']}}</p>
                                    </li>
                                </ul>
                                <ul class="host-card__room-states mb-0 list-unstyled">
                                    <li class="room-states__item room-states__item--success">
                                        <p class="item__label">Trống:</p>
                                        <p class="item__value">{{$host['countable_info']['room_type']['free']}}</p>
                                    </li>
                                    <li class="room-states__item room-states__item--warning justify-content-center">
                                        <p class="item__label">Sắp trả:</p>
                                        <p class="item__value">{{$host['countable_info']['room_type']['waiting']}}</p>
                                    </li>
                                    <li class="room-states__item room-states__item--danger justify-content-end">
                                        <p class="item__label">Đã thuê:</p>
                                        <p class="item__value">{{$host['countable_info']['room_type']['full']}}</p>
                                    </li>
                                </ul>
                            </a>
                        </x-main-card>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    @include('user.host.modal._create-host-modal')
@endsection
@section('script')
    <script src="{{mix(config('app.user_theme') .'/js/host/index.js')}}"></script>
@endsection
