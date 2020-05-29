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
        <div class="tab-content panel-content--room__list-room">
            <div class="row row--custom">
                @foreach($data['data']['room_list'] as $room)
                    <div class="col-6 col-lg-3 col--custom">
                        <a href="javascript:void(0)" data-id="{{$room['id']}}"
                           data-view-url="{{route('api.user.host.room.show',[$data['data']['host_id'],$room['id']])}}"
                           class="room-card
                            @switch($room['state'])
                           @case(1)
                               room-card--success
                               @break
                           @case(2)
                               room-card--warning
                               @break
                           @case(3)
                               room-card--danger
                               @break
                           @endswitch">
                            <p class="room-card__id">{{$room['name']}}</p>
                            <ul class="room-card__property-list list-unstyled">
                                <li class="room-card__property-list__item" title="Giá phòng">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-dollar" aria-hidden="true"></i>
                                    </span>
                                    <p class="room-card__property-list__item__value mb-0">{{$room['price']}} đ</p>
                                </li>
                                <li class="room-card__property-list__item" title="Tầng / Khu / Dãy">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-building" aria-hidden="true"></i>
                                    </span>
                                    <p class="room-card__property-list__item__value mb-0">Tầng/ Khu/
                                        Dãy: {{$room['floor']}}</p>
                                </li>
                                <li class="room-card__property-list__item" title="Số người thuê">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                    </span>
                                    <p class="room-card__property-list__item__value mb-0">2 / {{$room['members']}}</p>
                                </li>
                                <li class="room-card__property-list__item" title="Diện tích">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-expand" aria-hidden="true"></i>
                                    </span>
                                    <p class="room-card__property-list__item__value mb-0">{{$room['acreage']}}
                                        m<sup>2</sup></p>
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
                                @endif
                            </ul>
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
        @include('user.host.room.modal._room-modal')
        @include('user.host.room.modal._room-add-modal')
        @include('user.host.room.modal._invoice-modal')
        @include('user.host.room.modal._room-users-modal')
        @include('user.host.room.modal._room-add-users-modal')
    </div>
@endsection
@section('script')
    <script src="{{mix('user/js/room/index.js')}}"></script>
@endsection
