<div
    {{ $attributes->merge(['class' => "room-card room-card--mobile-horizon " . ($horizon ? 'room-card--horizon' : '')]) }}
    data-toggle-follow="{{route('user.saved_articles.follow_article',$articleDetail['id'])}}">
    <a href="{{route('frontend.article.detail', $articleDetail['id'])}}" class="room-card__image">
        @if(!empty($articleDetail['room']['gallery']))
            <img src="{{$articleDetail['room']['gallery'][0]['image']}}" alt="{{$articleDetail['title']}}">
        @else
            <img src="{{asset(\App\Helper\TrovieFile::checkFile(''))}}" alt="{{$articleDetail['title']}}">
        @endif
    </a>
    <a href="javascript:void(0)" class="room-card__follow" title="Lưu tin đăng">
        <i class="fa color-base-text @if($isFollowed) fa-bookmark @else fa-bookmark-o @endif" aria-hidden="true"></i>
    </a>
    <div>
        <div class="room-card__body">
            <a href="{{route('frontend.article.detail', $articleDetail['id'])}}" class="room-card__title"
               title="{{$articleDetail['title']}}">
                {{$articleDetail['title']}}
            </a>
            <p class="room-card__address" title="{{$articleDetail['room']['host']['address']}}">
                <i class="fa fa-map-marker" aria-hidden="true"></i>{{$articleDetail['room']['host']['address']}}
            </p>
            <ul class="room-card__prop-list list-unstyled">
                <li class="prop-list__item prop-list__item--price" title="Giá phòng">
                    <i class="fa fa-dollar" aria-hidden="true"></i>
                    <span>{{$articleDetail['room']['price']}}đ</span>/tháng
                </li>
                <li class="prop-list__item prop-list__item--acreage" title="Diện tích">
                    <i class="fa fa-expand" aria-hidden="true"></i>
                    {{$articleDetail['room']['acreage']}} m<sup>2</sup>
                </li>
                <li class="prop-list__item prop-list__item--price" title="Giá điện">
                    <i class="fa fa-flash" aria-hidden="true"></i>
                    <span>{{$articleDetail['room']['host']['cost_electric']}}đ</span>&nbsp;/kV

                <li class="prop-list__item prop-list__item--price" title="Giá nước">
                    <i class="fa fa-tint" aria-hidden="true"></i>
                    <span>{{$articleDetail['room']['host']['cost_water']}}đ</span>&nbsp;/m<sup>3</sup>
                </li>
            </ul>
        </div>
        <div class="room-card__host">
            <a href="{{route('frontend.article.search')}}?host={{$articleDetail['room']['host']['id']}}"
               class="host__link d-flex" title="Xem nhà trọ">
                <figure class="host__avatar mb-0">
                    <img src="{{$articleDetail['room']['host']['image']}}"
                         alt="{{$articleDetail['room']['host']['name']}}">
                </figure>
                <p class="host__name">{{$articleDetail['room']['host']['name']}}</p>
            </a>
            <a href="tel:{{$articleDetail['room']['host']['user']['phone'] ?? '#'}}" class="host__call"
               title="Gọi Ngay">
                <i class="fa fa-phone" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>
