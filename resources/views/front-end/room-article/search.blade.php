@extends('front-end.master')
@section('style')

@endsection
@section('body')
    <div class="page-section room-article-search">
        <div class="container">
            <div class="row row--custom">
                <div class="col-12 col-lg-8 col--custom">
                    <div class="page-section__header">
                        <p class="header__title">Phòng Trọ Tại Cần Thơ</p>
                    </div>
                    <div class="row row--custom">
                        <div class="col-6 col-md-4 col--custom">
                            <x-front-end.room-card></x-front-end.room-card>
                        </div>
                        <div class="col-6 col-md-4 col--custom">
                            <x-front-end.room-card></x-front-end.room-card>
                        </div>
                        <div class="col-6 col-md-4 col--custom">
                            <x-front-end.room-card></x-front-end.room-card>
                        </div>
                        <div class="col-6 col-md-4 col--custom">
                            <x-front-end.room-card></x-front-end.room-card>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 col--custom">
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
                            <li class="list__item">
                                <x-front-end.room-card horizon="true">
                                </x-front-end.room-card>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
