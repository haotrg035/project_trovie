@extends('front-end.master')
@section('style')

@endsection
@section('body')
    <div class="page-section">
        <div class="container">
            <div class="row row--custom">
                <div class="col-12 col-lg-7 col-xl-8 col--custom">
                    <div class="room-article-detail">
                        <div class="room-article-detail__gallery">
                            <ul class="gallery__list mb-0 list-unstyled" id="gallery__list">
                                <li data-thumb="{{\App\Helper\TrovieFile::checkFile('')}}">
                                    <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                </li>
                                <li data-thumb="{{\App\Helper\TrovieFile::checkFile('')}}">
                                    <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                </li>
                                <li data-thumb="{{\App\Helper\TrovieFile::checkFile('')}}">
                                    <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                </li>
                                <li data-thumb="{{\App\Helper\TrovieFile::checkFile('')}}">
                                    <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5 col-xl-4 col--custom position-relative">
                    <div class="sticky-top" style="top: calc(48px + 1rem)">
                        <div class="room-article-detail-info">
                            <p class="info__title">NỀN MẶT TIỀN ĐƯỜNG NGUYỄN TRI PHƯƠNG ĐOẠN CHƯA QUA NGÃ TƯ</p>
                            <p class="info__address">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                Phường An Khánh, quận Ninh Kiều, thành phố Cần Thơ
                            </p>
                            <ul class="list-unstyled mb-0 info__prop-list">
                                <li class="prop-list__item">
                                    <b>Giá thuê:</b> 1.2 tr/tháng
                                </li>
                                <li class="prop-list__item">
                                    <b>Diện tích:</b> 20 m<sup>2</sup>
                                </li>
                                <li class="prop-list__item">
                                    <b>Giá điện:</b> 5.000 đ/Kv
                                </li>
                                <li class="prop-list__item">
                                    <b>Giá nước:</b> 8.000 đ/m<sup>3</sup>
                                </li>
                            </ul>
                            <ul class="list-unstyled mb-0 info__service-list">
                                <li class="service-list__item">
                                    Wifi
                                </li>
                                <li class="service-list__item">
                                    Máy giặt
                                </li>
                                <li class="service-list__item">
                                    Máy nước nóng
                                </li>
                                <li class="service-list__item">
                                    Tủ lạnh
                                </li>
                                <li class="service-list__item">
                                    Máy lạnh
                                </li>
                            </ul>
                        </div>
                        <div class="room-article-detail-host">
                            <div class="host__info">
                                <figure class="info__image">
                                    <img src="{{\App\Helper\TrovieFile::checkFile('')}}" alt="">
                                </figure>
                                <div class="info__contact">
                                    <p class="contact__name">Lorem ipsum dolor amet</p>
                                    <ul class="contact__list list-unstyled mb-0">
                                        <li class="list__item">
                                            <a href="tel:0332014888" class="btn btn-base">
                                                <i class="fa fa-phone" aria-hidden="true"></i> Gọi ngay
                                            </a>
                                        </li>
                                        <li class="list__item d-none">
                                            <a href="tel:0332014888" class="btn btn-outline-info">
                                                <i class="fa fa-home" aria-hidden="true"></i> Xem phòng
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row--custom">
                <div class="col-12 col-lg-7 col-xl-8 col--custom">
                    <div class="room-article-detail-general rounded-card">
                        <p class="general__title">TỔNG QUAN</p>
                        <div class="general__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum dolorem dolores
                                exercitationem explicabo harum illum ipsum laudantium non suscipit tempore velit,
                                voluptatibus? Aspernatur doloremque hic magni perspiciatis ut voluptates?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum dolorem dolores
                                exercitationem explicabo harum illum ipsum laudantium non suscipit tempore velit,
                                voluptatibus? Aspernatur doloremque hic magni perspiciatis ut voluptates?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum dolorem dolores
                                exercitationem explicabo harum illum ipsum laudantium non suscipit tempore velit,
                                voluptatibus? Aspernatur doloremque hic magni perspiciatis ut voluptates?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum dolorem dolores
                                exercitationem explicabo harum illum ipsum laudantium non suscipit tempore velit,
                                voluptatibus? Aspernatur doloremque hic magni perspiciatis ut voluptates?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum dolorem dolores
                                exercitationem explicabo harum illum ipsum laudantium non suscipit tempore velit,
                                voluptatibus? Aspernatur doloremque hic magni perspiciatis ut voluptates?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum dolorem dolores
                                exercitationem explicabo harum illum ipsum laudantium non suscipit tempore velit,
                                voluptatibus? Aspernatur doloremque hic magni perspiciatis ut voluptates?</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5 col-xl-4 col--custom">
                    <div class="side-room-articles">
                        <div class="page-section__header">
                            <p class="header__title">Tin Đăng Mới Nhất</p>
                        </div>
                        <ul class="side-room-articles__list list-unstyled mb-0">
                            <li class="list__item">
                                <x-front-end.room-card horizon="true">
                                </x-front-end.room-card>
                            </li>
                            <li class="list__item">
                                <x-front-end.room-card horizon="true">
                                </x-front-end.room-card>
                            </li>
                            <li class="list__item">
                                <x-front-end.room-card horizon="true">
                                </x-front-end.room-card>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row row--custom mb-0">
                <div class="col-12 col--custom">
                    <div class="page-section__header">
                        <p class="header__title">CÁC TIN ĐĂNG KHÁC</p>
                    </div>
                </div>
                <div class="col-12 col--custom mb-0">
                    <ul class="list-unstyled" id="related-room-articles">
                        <li>
                            <x-front-end.room-card></x-front-end.room-card>
                        </li>
                        <li>
                            <x-front-end.room-card></x-front-end.room-card>
                        </li>
                        <li>
                            <x-front-end.room-card></x-front-end.room-card>
                        </li>
                        <li>
                            <x-front-end.room-card></x-front-end.room-card>
                        </li>
                        <li>
                            <x-front-end.room-card></x-front-end.room-card>
                        </li>
                        <li>
                            <x-front-end.room-card></x-front-end.room-card>
                        </li>
                        <li>
                            <x-front-end.room-card></x-front-end.room-card>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection
