@extends('front-end.master')
@section('style')
    <style>
        #room-article-search-map{
            width: 100%;
            height: calc(100vh - (48px + 2rem));
            position: sticky;
            top: calc((48px + 1rem));
        }
    </style>
@endsection
@section('body')
    @include('front-end._banner-search')
    <div class="page-section room-article-search">
        <div class="container">
            <div class="row row--custom">
                @if(!empty($data['data']))
                <div class="col-12 col-lg-6 col--custom d-none d-lg-block">
                    <div id="room-article-search-map" style="border-radius: 16px; border: 1px solid var(--color-base);">
                        <input type="hidden" name="available-hosts-info" value="{{$data['availableHosts']}}">
                    </div>
                </div>
                @endif
                <div class="col-12 col-lg-6 col--custom">
                    <div class="page-section__header">
                        <p class="header__title">KẾT QUẢ PHÙ HỢP</p>
                    </div>
                    @if(!empty($data['data']))
                        <div class="row row--custom">
                            @foreach($data['data'] as $article)
                                <div class="col-12 col-md-6 col--custom">
                                    <x-front-end.room-card :article-detail="$article->toArray()"
                                                           data-host-id="{{$article->room->host->id}}"
                                                           data-latitude="{{$article->room->host->latitude}}"
                                                           data-longitude="{{$article->room->host->longitude}}">
                                    </x-front-end.room-card>
                                </div>
                            @endforeach
                        </div>
                        <div class="flex justify-content-center w-12">
                            {{$data['data']->appends($_GET)->links()}}
                        </div>
                    @else
                        <p>Không tìm thấy kết quả phù hợp.</p>
                    @endif
                </div>
            </div>

        </div>
    </div>
@endsection
@section('script')
    <script src="{{asset('frontend/js/RoomArticle/search.js')}}"></script>
@endsection
