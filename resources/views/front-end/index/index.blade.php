@extends('front-end.master')
@section('body')
    @include('front-end._banner-search')
    <div class="page-section d-none">
        <div class="container">
            <div id="room-article-search-map" style="border-radius: 16px; border: 1px solid var(--color-base);">
                <input type="hidden" name="available-hosts-info" value="{{$data['availableHosts']}}">
            </div>
        </div>
    </div>
    @if(!empty($data['recent_articles']))
        <section class="page-products page-section">
            <div class="container">
                <div class="page-section__header">
                    <p class="header__title">PHÒNG TRỌ VỪA ĐĂNG</p>
                    <a href="{{route('frontend.article.search')}}" class="header__more">Xem thêm <i class="fa fa-angle-double-right"
                                                                 aria-hidden="true"></i></a>
                </div>
                <div class="row row--custom">
                    @foreach($data['recent_articles'] as $article)
                        <div class="col-12 col-md-6 col-xl-3 col--custom">
                            <x-front-end.room-card :article-detail="$article"
                                                   is-followed="{{in_array($article['id'],$data['followedArticles'])}}"></x-front-end.room-card>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
    @endif
    @if(!empty($data['featured_cities']))
        <section class="page-place page-section mt-3">
            <div class="container">
                <div class="page-section__header">
                    <p class="header__title">TÌM THEO ĐỊA ĐIỂM</p>
                    {{--                <a href="#" class="header__more">Xem thêm <i class="fa fa-angle-double-right"--}}
                    {{--                                                             aria-hidden="true"></i></a>--}}
                </div>
                <div class="row row--custom">
                    <div class="col-12 col-lg-6 col--custom mb-lg-0">
                        <a href="{{route('frontend.article.search')}}?city={{$data['featured_cities'][0]['id']}}"
                           class="place__item">
                            <img src="{{$data['featured_cities'][0]['avatar']}}"
                                 alt="{{$data['featured_cities'][0]['name']}}">
                            <div class="item__content">
                                <p class="content__name">{{$data['featured_cities'][0]['name']}}</p>
                                {{--                            <p class="content__number"><span>1000</span> phòng</p>--}}
                            </div>
                        </a>
                    </div>
                    @if(isset($data['featured_cities'][1]))
                        <div class="col-12 col-lg-6 col--custom mb-0">
                            <div class="row row--custom">
                                @for($i = 1; $i < count($data['featured_cities']);$i++)
                                    <div class="col-6 col-lg-6 col--custom">
                                        <a href="{{route('frontend.article.search')}}?city={{$data['featured_cities'][$i]['id']}}" class="place__item">
                                            <img src="{{$data['featured_cities'][$i]['avatar']}}"
                                                 alt="{{$data['featured_cities'][$i]['name']}}">
                                            <div class="item__content">
                                                <p class="content__name">{{$data['featured_cities'][$i]['name']}}</p>
                                                {{--                                            <p class="content__number"><span>1000</span> phòng</p>--}}
                                            </div>
                                        </a>
                                    </div>
                                @endfor
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </section>
    @endif
@endsection
@section('script')
    <script src="{{asset('frontend/js/index/index.js')}}"></script>
@endsection
