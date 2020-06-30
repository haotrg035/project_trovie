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
                                @if(!empty($data['article']['room']['gallery']))
                                    @foreach($data['article']['room']['gallery'] as $image)
                                        <li data-thumb="{{$image['image']}}">
                                            <img src="{{$image['image']}}" alt="{{$data['article']['title']}}">
                                        </li>
                                    @endforeach
                                @else
                                    <li data-thumb="{{$data['article']['room']['host']['image']}}">
                                        <img src="{{$data['article']['room']['host']['image']}}"
                                             alt="{{$data['article']['title']}}">
                                    </li>
                                @endif
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5 col-xl-4 col--custom position-relative">
                    <div class="sticky-top" style="top: calc(48px + 1rem)">
                        <div class="room-article-detail-info">
                            <p class="info__title">{{$data['article']['title']}}</p>
                            <p class="info__address">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                {{$data['article']['room']['host']['address']}}
                            </p>
                            <ul class="list-unstyled mb-0 info__prop-list">
                                <li class="prop-list__item w-100">
                                    <b>Giá thuê:</b> {{$data['article']['room']['price']}} đ/tháng
                                </li>
                                <li class="prop-list__item">
                                    <b>Khách tối đa:</b> {{$data['article']['room']['members']}} người
                                </li>
                                <li class="prop-list__item">
                                    <b>Diện tích:</b> {{$data['article']['room']['acreage']}} m<sup>2</sup>
                                </li>
                                <li class="prop-list__item">
                                    <b>Giá điện:</b>&nbsp;
                                    {{\App\Helper\TrovieHelper::currencyFormat($data['article']['room']['host']['cost_electric'])}}
                                    đ/Kv
                                </li>
                                <li class="prop-list__item">
                                    <b>Giá nước:</b>&nbsp;
                                    {{\App\Helper\TrovieHelper::currencyFormat($data['article']['room']['host']['cost_water'])}}
                                    đ/m<sup>3</sup>
                                </li>
                            </ul>
                            <ul class="list-unstyled mb-0 info__service-list">
                                @foreach($data['article']['room']['services'] as $service)
                                    <li class="service-list__item text-capitalize">
                                        {{$service['name']}}
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="room-article-detail-host">
                            <div class="host__info">
                                <figure class="info__image">
                                    <img src="{{$data['article']['room']['host']['image']}}" alt="">
                                </figure>
                                <div class="info__contact">
                                    <p class="contact__name">{{$data['article']['room']['host']['name']}}</p>
                                    <ul class="contact__list list-unstyled mb-0">
                                        <li class="list__item">
                                            <a href="tel:{{$data['article']['room']['host']['phone']}}"
                                               title="{{$data['article']['room']['host']['phone']}}"
                                               class="btn btn-base">
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
            @if(!empty($data['article']['content']))
                <div class="row row--custom">
                    <div class="col-12 col-lg-7 col-xl-8 col--custom">
                        <div class="room-article-detail-general rounded-card">
                            <p class="general__title">TỔNG QUAN</p>
                            <div class="general__content">
                                {{$data['article']['content']}}
                            </div>
                        </div>
                    </div>
                    @if(!empty($data['recent_articles']))
                        <div class="col-12 col-lg-5 col-xl-4 col--custom">
                            <div class="side-room-articles">
                                <div class="page-section__header">
                                    <p class="header__title">Tin Đăng Mới Nhất</p>
                                </div>
                                <ul class="side-room-articles__list list-unstyled mb-0">
                                    @foreach($data['recent_articles'] as $article)
                                        <li class="list__item">
                                            <x-front-end.room-card horizon="true" :article-detail="$article">
                                            </x-front-end.room-card>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    @endif
                </div>
            @endif
            @if(!empty($data['near_articles']))
                <div class="row row--custom mb-0">
                    <div class="col-12 col--custom">
                        <div class="page-section__header">
                            <p class="header__title">CÁC TIN ĐĂNG KHÁC</p>
                        </div>
                    </div>
                    <div class="col-12 col--custom mb-0">
                        <ul class="list-unstyled" id="related-room-articles">
                            @foreach($data['near_articles'] as $article)
                                <li>
                                    <x-front-end.room-card :article-detail="$article">
                                    </x-front-end.room-card>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif
        </div>
    </div>
@endsection
@section('script')
    <script src="{{asset('/frontend/js/RoomArticle/detail.js')}}"></script>
@endsection
