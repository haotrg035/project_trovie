@extends('front-end.master')
@section('body')
    <section class="page-products page-section">
        <div class="container">
            <div class="page-section__header">
                <p class="header__title">PHÒNG TRỌ</p>
                <a href="#" class="header__more">Xem thêm <i class="fa fa-angle-double-right"
                                                             aria-hidden="true"></i></a>
            </div>
            <div class="row row--custom">
                <div class="col-12 col-md-6 col-xl-3 col--custom">
                    <x-front-end.room-card></x-front-end.room-card>
                </div>
            </div>
        </div>
    </section>
    <section class="page-place page-section">
        <div class="container">
            <div class="page-section__header">
                <p class="header__title">TÌM THEO ĐỊA ĐIỂM</p>
                <a href="#" class="header__more">Xem thêm <i class="fa fa-angle-double-right"
                                                             aria-hidden="true"></i></a>
            </div>
            <div class="row row--custom">
                <div class="col-12 col-lg-6 col--custom mb-lg-0">
                    <a href="#" class="place__item">
                        <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                        <div class="item__content">
                            <p class="content__name">Hồ Chí Minh</p>
                            <p class="content__number"><span>1000</span> phòng</p>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-lg-6 col--custom mb-0">
                    <div class="row row--custom">
                        <div class="col-6 col-lg-6 col--custom">
                            <a href="#" class="place__item">
                                <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                <div class="item__content">
                                    <p class="content__name">Hồ Chí Minh</p>
                                    <p class="content__number"><span>1000</span> phòng</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-lg-6 col--custom">
                            <a href="#" class="place__item">
                                <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                <div class="item__content">
                                    <p class="content__name">Hồ Chí Minh</p>
                                    <p class="content__number"><span>1000</span> phòng</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-lg-6 col--custom">
                            <a href="#" class="place__item">
                                <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                <div class="item__content">
                                    <p class="content__name">Hồ Chí Minh</p>
                                    <p class="content__number"><span>1000</span> phòng</p>
                                </div>
                            </a>
                        </div>
                        <div class="col-6 col-lg-6 col--custom">
                            <a href="#" class="place__item">
                                <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                <div class="item__content">
                                    <p class="content__name">Hồ Chí Minh</p>
                                    <p class="content__number"><span>1000</span> phòng</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
