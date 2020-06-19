<div class="room-card {{$horizon ? 'room-card--horizon' : ''}} room-card--mobile-horizon">
    <a href="" class="room-card__image">
        <img src="{{asset(\App\Helper\TrovieFile::checkFile(''))}}" alt="">
    </a>
    <div>
        <div class="room-card__body">
            <a href="#" class="room-card__title" title="">
                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
            </a>
            <p class="room-card__address" title="">
                <i class="fa fa-map-marker" aria-hidden="true"></i> Lorem ipsum dolor ipsum dolor Lorem
                ipsum dolor ipsum dolor
            </p>
            <ul class="room-card__prop-list list-unstyled">
                <li class="prop-list__item prop-list__item--price" title="Giá phòng">
                    <i class="fa fa-dollar" aria-hidden="true"></i>
                    <span>{{\App\Helper\TrovieHelper::currencyFormatWord(1250000)}}</span>/tháng
                </li>
                <li class="prop-list__item prop-list__item--acreage" title="Diện tích">
                    <i class="fa fa-expand" aria-hidden="true"></i>
                    20 m<sup>2</sup>
                </li>
                <li class="prop-list__item prop-list__item--price" title="Giá điện">
                    <i class="fa fa-flash" aria-hidden="true"></i>
                    <span>250.000đ</span>&nbsp;/kV

                <li class="prop-list__item prop-list__item--price" title="Giá nước">
                    <i class="fa fa-tint" aria-hidden="true"></i>
                    <span>250.000đ</span>&nbsp;/m<sup>3</sup>
                </li>
            </ul>
        </div>
        <div class="room-card__host">
            <a href="#" class="host__link d-flex" title="Xem nhà trọ">
                <figure class="host__avatar mb-0">
                    <img src="{{asset(\App\Helper\TrovieFile::checkFile(''))}}" alt="">
                </figure>
                <p class="host__name">Lorem ipsum</p>
            </a>
            <a href="tel:#" class="host__call" title="Gọi Ngay">
                <i class="fa fa-phone" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>
