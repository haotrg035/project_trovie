@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content--room">
        <x-panel-header panel-title="Phòng Trọ">
            <div class="panel-content--room__header-tool">
                <button class="panel-content--room__header-tool__btn btn btn-base btn-open-add-room-modal rounded-0">
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Thêm Phòng
                </button>
            </div>
        </x-panel-header>
        <x-main-card body-class="half-padding">
            <div class="panel-content--room__filter d-flex align-items-center justify-content-between">
                <ul class="nav panel-content--room__filter--room-type">
                    <li class="nav-item panel-content--room__filter--room-type__item">
                        <a href="javascript:void(0)" data-toggle="tab" class="nav-link active"
                           data-room-type="all">
                            Tất cả <span>({{$data['data']['room_count']['total']}})</span>
                        </a>
                    </li>
                    <li class="nav-item panel-content--room__filter--room-type__item panel-content--room__filter--room-type__item--success">
                        <a href="javascript:void(0)" data-toggle="tab" class="nav-link" data-room-type="success">
                            Phòng trống <span>({{$data['data']['room_count']['state'][1]}})</span></a>
                    </li>
                    <li class="nav-item panel-content--room__filter--room-type__item panel-content--room__filter--room-type__item--warning">
                        <a href="javascript:void(0)" data-toggle="tab" class="nav-link" data-room-type="warning">
                            Sắp trả <span>({{$data['data']['room_count']['state'][2]}})</span>
                        </a>
                    </li>
                    <li class="nav-item panel-content--room__filter--room-type__item panel-content--room__filter--room-type__item--danger">
                        <a href="javascript:void(0)" data-toggle="tab" class="nav-link" data-room-type="danger">
                            Đã thuê <span>({{$data['data']['room_count']['state'][3]}})</span>
                        </a>
                    </li>
                </ul>
                <form action="" class="panel-content--room__filter--search form-inline">
                    <div class="form-group">
                        <input type="search" class="form-control" name="" id="" placeholder="Tìm kiếm phòng trọ">
                        <button class="btn" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        </x-main-card>
        <div class="tab-content panel-content--room__list-room" data-room-view-url="{{route('api.user.host.room.show',$data['data']['host_id'])}}">
            <div class="row row--custom">
                @if($data['data']['room_list'])
                    @foreach($data['data']['room_list'] as $room)
                        <div class="col-6 col-lg-3 col--custom">
                            <a href="javascript:void(0)" data-id="{{$room['id']}}"
                               data-view-url="{{route('api.user.host.room.show',[$data['data']['host_id'],$room['id']])}}"
                               class="room-card
                            @switch($room['state'])
                               @case(1)
                                   room-card--success @break
                               @case(2)
                                   room-card--warning @break
                               @case(3)
                                   room-card--danger @break
                               @endswitch">
                                <p class="room-card__id">{{$room['name']}}</p>
                                <ul class="room-card__property-list list-unstyled">
                                    <li class="room-card__property-list__item property-list__item--price"
                                        title="Giá phòng">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-dollar" aria-hidden="true"></i>
                                    </span>
                                        <p class="room-card__property-list__item__value mb-0">
                                            <span class="value__content">{{$room['price']}}</span> đ
                                        </p>
                                    </li>
                                    <li class="room-card__property-list__item property-list__item--floor"
                                        title="Tầng / Khu / Dãy">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-building" aria-hidden="true"></i>
                                    </span>
                                        <p class="room-card__property-list__item__value mb-0">Tầng/
                                            Khu: <span class="value__content">{{$room['floor']}}</span>
                                        </p>
                                    </li>
                                    <li class="room-card__property-list__item property-list__item--members"
                                        title="Số người thuê">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                    </span>
                                        <p class="room-card__property-list__item__value mb-0">
                                            <span class="current-users">{{$room['total_users']}}</span>
                                            / <span class="max-users">{{$room['members']}}</span></p>
                                    </li>
                                    <li class="room-card__property-list__item property-list__item--acreage"
                                        title="Diện tích">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-expand" aria-hidden="true"></i>
                                    </span>
                                        <p class="room-card__property-list__item__value mb-0">
                                            <span class="value__content">{{$room['acreage']}}</span> m<sup>2</sup></p>
                                    </li>
                                </ul>
                                <ul class="room-card__service-list list-unstyled">
                                    @if($room['services'])
                                        @foreach($room['services'] as $service)
                                            <li class="room-card__service-list__item">
                                            <span class="room-card__service-list__item__icon">
                                                <i class="fa fa-dot-circle-o"></i></span>
                                                <p class="room-card__service-list__item__value mb-0 text-capitalize">
                                                    {{$service['name']}}
                                                </p>
                                            </li>
                                        @endforeach
                                    @else
                                        <li class="room-card__service-list__item d-none">
                                            <span class="room-card__service-list__item__icon">
                                                <i class="fa fa-dot-circle-o"></i></span>
                                            <p class="room-card__service-list__item__value mb-0 text-capitalize">
                                            </p>
                                        </li>
                                    @endif
                                </ul>
                                <ul class="room-card__customer-list list-unstyled">
                                    @if($room['users'])
                                        @foreach($room['users'] as $user)
                                            <li class="room-card__customer-list__item" title="{{$user['full_name']}}">
                                            <span class="room-card__customer-list__item__avatar">
                                                <img src="{{asset($user['avatar'])}}" alt="">
                                            </span>
                                            </li>
                                        @endforeach
                                    @else
                                        <li class="room-card__customer-list__item d-none" title="">
                                            <span class="room-card__customer-list__item__avatar">
                                                <img src="" alt="">
                                            </span>
                                        </li>
                                    @endif
                                </ul>
                            </a>
                        </div>
                    @endforeach
                @else
                    <div class="col-6 col-lg-3 col--custom d-none">
                        <a href="javascript:void(0)" data-id=""
                           data-view-url="{{route('api.user.host.room.show',$data['data']['host_id'])}}"
                           class="room-card">
                            <p class="room-card__id"></p>
                            <ul class="room-card__property-list list-unstyled">
                                <li class="room-card__property-list__item property-list__item--price"
                                    title="Giá phòng">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-dollar" aria-hidden="true"></i>
                                    </span>
                                    <p class="room-card__property-list__item__value mb-0">
                                        <span class="value__content"></span> đ
                                    </p>
                                </li>
                                <li class="room-card__property-list__item property-list__item--floor"
                                    title="Tầng / Khu / Dãy">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-building" aria-hidden="true"></i>
                                    </span>
                                    <p class="room-card__property-list__item__value mb-0">Tầng/
                                        Khu: <span class="value__content"></span>
                                    </p>
                                </li>
                                <li class="room-card__property-list__item property-list__item--members"
                                    title="Số người thuê">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                    </span>
                                    <p class="room-card__property-list__item__value mb-0">
                                        <span class="current-users"></span>
                                        / <span class="max-users"></span></p>
                                </li>
                                <li class="room-card__property-list__item property-list__item--acreage"
                                    title="Diện tích">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-expand" aria-hidden="true"></i>
                                    </span>
                                    <p class="room-card__property-list__item__value mb-0">
                                        <span class="value__content"></span> m<sup>2</sup></p>
                                </li>
                            </ul>
                            <ul class="room-card__service-list list-unstyled">
                                <li class="room-card__service-list__item d-none">
                                            <span class="room-card__service-list__item__icon">
                                                <i class="fa fa-dot-circle-o"></i></span>
                                    <p class="room-card__service-list__item__value mb-0 text-capitalize">
                                    </p>
                                </li>
                            </ul>
                            <ul class="room-card__customer-list list-unstyled">
                                <li class="room-card__customer-list__item d-none" title="">
                                            <span class="room-card__customer-list__item__avatar">
                                                <img src="" alt="">
                                            </span>
                                </li>
                            </ul>
                        </a>
                    </div>
                @endif
            </div>
        </div>
        @include('user.host.room.modal._room-modal')
        @include('user.host.room.modal._room-add-modal')
        @include('user.host.room.modal._invoice-modal')
        @include('user.host.room.modal._room-users-modal')
    </div>
@endsection
@section('script')
    <script src="{{mix('user/js/room/index.js')}}"></script>
@endsection
