@extends('user.master')
@section('site-title','Khu Trọ')
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">Danh sách nhà trọ</h5>
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
                <div class="col-md-4 col--custom">
                    <x-main-card body-class="" class="host-card-wrapper">
                        <a href="#" class="host-card">
                            <p class="host-card__name">Nhà Trọ Võ Văn Kiệt</p>
                            <ul class="host-card__attribute-list mb-0 list-unstyled">
                                <li class="attribute-list__item">
                                    <p class="item__label">
                                        <i class="fa fa-home" aria-hidden="true"></i>
                                        <span>&nbsp;Số phòng:</span>
                                    </p>
                                    <p class="item__value">12</p>
                                </li>
                                <li class="attribute-list__item">
                                    <p class="item__label">
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                        <span>&nbsp;Nhân khẩu:</span>
                                    </p>
                                    <p class="item__value">20</p>
                                </li>
                                <li class="attribute-list__item">
                                    <p class="item__label">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span>&nbsp;Ngày thu tiền trọ:</span>
                                    </p>
                                    <p class="item__value">3</p>
                                </li>
                                <li class="attribute-list__item invisible">
                                    <p class="item__label">
                                        <i class="fa fa-bolt" aria-hidden="true"></i>
                                        <span>&nbsp;</span>
                                    </p>
                                    <p class="item__value"></p>
                                </li>
                                <li class="attribute-list__item">
                                    <p class="item__label">
                                        <i class="fa fa-bolt" aria-hidden="true"></i>
                                        <span>&nbsp;Tiền điện:</span>
                                    </p>
                                    <p class="item__value">1.300 đ/Kv</p>
                                </li>
                                <li class="attribute-list__item">
                                    <p class="item__label">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span>&nbsp;Ngày ghi số điện:</span>
                                    </p>
                                    <p class="item__value">1</p>
                                </li>
                                <li class="attribute-list__item">
                                    <p class="item__label">
                                        <i class="fa fa-tint" aria-hidden="true"></i>
                                        <span>&nbsp;Tiền nước:</span>
                                    </p>
                                    <p class="item__value">2.300 đ/m<sup>3</sup></p>
                                </li>
                                <li class="attribute-list__item">
                                    <p class="item__label">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <span>&nbsp;Ngày ghi số nước:</span>
                                    </p>
                                    <p class="item__value">1</p>
                                </li>
                                <li class="attribute-list__item attribute-list__item--wide">
                                    <p class="item__label">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </p>
                                    <p class="item__value">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                </li>
                            </ul>
                            <ul class="host-card__room-states mb-0 list-unstyled">
                                <li class="room-states__item room-states__item--danger">
                                    <p class="item__label">Đã thuê:</p>
                                    <p class="item__value">15</p>
                                </li>
                                <li class="room-states__item room-states__item--warning">
                                    <p class="item__label">Sắp trả:</p>
                                    <p class="item__value">3</p>
                                </li>
                                <li class="room-states__item room-states__item--success">
                                    <p class="item__label">Phòng trống:</p>
                                    <p class="item__value">3</p>
                                </li>
                            </ul>
                        </a>
                    </x-main-card>
                </div>
            </div>
        </div>
    </div>
    @include('user.host.modal._create-host-modal')
@endsection
@section('script')
    <script src="{{mix(config('app.user_theme') .'/js/host/index.js')}}"></script>
@endsection
