@extends('user.master')
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
                            Tất cả <span>(299)</span>
                        </a>
                    </li>
                    <li class="nav-item panel-content--room__filter--room-type__item panel-content--room__filter--room-type__item--success">
                        <a href="javascript:void(0)" data-toggle="tab" class="nav-link" data-room-type="success">
                            Phòng trống <span>(90)</span></a>
                    </li>
                    <li class="nav-item panel-content--room__filter--room-type__item panel-content--room__filter--room-type__item--warning">
                        <a href="javascript:void(0)" data-toggle="tab" class="nav-link" data-room-type="warning">
                            Sắp trả <span>(20)</span>
                        </a>
                    </li>
                    <li class="nav-item panel-content--room__filter--room-type__item panel-content--room__filter--room-type__item--danger">
                        <a href="javascript:void(0)" data-toggle="tab" class="nav-link" data-room-type="danger">
                            Đã thuê <span>(150)</span>
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
                <div class="col-6 col-lg-3 col--custom">
                    <a href="javascript:void(0)" class="room-card room-card--danger">
                        <p class="room-card__id">P.01</p>
                        <ul class="room-card__property-list list-unstyled">
                            <li class="room-card__property-list__item" title="Giá phòng">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-dollar" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">1.200.000 đ</p>
                            </li>
                            <li class="room-card__property-list__item" title="Ngày vào ở">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">07/02/2020</p>
                            </li>
                            <li class="room-card__property-list__item" title="Số người thuê">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">2 / 2</p>
                            </li>
                            <li class="room-card__property-list__item" title="Diện tích">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-expand" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">15 m<sup>2</sup></p>
                            </li>
                        </ul>
                        <ul class="room-card__service-list list-unstyled">
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-wifi" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Wifi</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-paw" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Nuôi thú cưng</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-intersex" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Nam nữ ở chung</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-wifi" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Ban công</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-paw" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Bảo vệ</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-intersex" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Máy giặt</p>
                            </li>
                        </ul>
                        <ul class="room-card__customer-list list-unstyled">
                            <li class="room-card__customer-list__item">
                                    <span class="room-card__customer-list__item__avatar">
                                        <img src="{{asset('storage/image.jpg')}}" alt="">
                                    </span>
                            </li>
                            <li class="room-card__customer-list__item">
                                    <span class="room-card__customer-list__item__avatar">
                                        <img src="{{asset('storage/image.jpg')}}" alt="">
                                    </span>
                            </li>
                        </ul>
                    </a>
                </div>
                <div class="col-6 col-lg-3 col--custom">
                    <a href="javascript:void(0)" class="room-card room-card--success">
                        <p class="room-card__id">P.01</p>
                        <ul class="room-card__property-list list-unstyled">
                            <li class="room-card__property-list__item" title="Giá phòng">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-dollar" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">1.200.000 đ</p>
                            </li>
                            <li class="room-card__property-list__item" title="Ngày vào ở">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">07/02/2020</p>
                            </li>
                            <li class="room-card__property-list__item" title="Số người thuê">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">0 / 2</p>
                            </li>
                            <li class="room-card__property-list__item" title="Diện tích">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-expand" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">15 m<sup>2</sup></p>
                            </li>
                        </ul>
                        <ul class="room-card__service-list list-unstyled">
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-wifi" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Wifi</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-paw" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Nuôi thú cưng</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-intersex" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Nam nữ ở chung</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-wifi" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Ban công</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-paw" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Bảo vệ</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-intersex" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Máy giặt</p>
                            </li>
                        </ul>
                    </a>
                </div>
                <div class="col-6 col-lg-3 col--custom">
                    <a href="javascript:void(0)" class="room-card room-card--warning">
                        <p class="room-card__id">P.01</p>
                        <ul class="room-card__property-list list-unstyled">
                            <li class="room-card__property-list__item" title="Giá phòng">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-dollar" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">1.200.000 đ</p>
                            </li>
                            <li class="room-card__property-list__item" title="Ngày vào ở">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">07/02/2020</p>
                            </li>
                            <li class="room-card__property-list__item" title="Số người thuê">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">0 / 2</p>
                            </li>
                            <li class="room-card__property-list__item" title="Diện tích">
                                    <span class="room-card__property-list__item__icon">
                                        <i class="fa fa-expand" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__property-list__item__value mb-0">15 m<sup>2</sup></p>
                            </li>
                        </ul>
                        <ul class="room-card__service-list list-unstyled">
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-wifi" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Wifi</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-paw" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Nuôi thú cưng</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-intersex" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Nam nữ ở chung</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-wifi" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Ban công</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-paw" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Bảo vệ</p>
                            </li>
                            <li class="room-card__service-list__item">
                                    <span class="room-card__service-list__item__icon">
                                        <i class="fa fa-intersex" aria-hidden="true"></i>
                                    </span>
                                <p class="room-card__service-list__item__value mb-0">Máy giặt</p>
                            </li>
                        </ul>
                    </a>
                </div>
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
    <script src="{{mix('user/js/room.js')}}"></script>
@endsection
