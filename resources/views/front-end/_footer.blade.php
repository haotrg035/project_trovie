<footer class="page-section page-section__footer mb-0">
    <div class="container">
        <div class="row justify-content-lg-center row--custom">
            <div class="col-12 col-lg-4">
                <div class="footer-item footer-item--logo">
                    <p class="footer-item__title">THÔNG TIN</p>
                    <ul class="footer-item__list list-unstyled mb-0">
                        @if(!empty(config('global.app_desc')))
                            <li class="list__item">
                                <p class="mb-0">
                                    {{config('global.app_desc')}}
                                </p>
                            </li>
                        @endif
                        @if(!empty(config('global.app_phone')))
                            <li class="list__item">
                                <i class="fa fa-phone" aria-hidden="true"></i> Liên hệ: <a
                                    href="tel{{config('global.app_phone')}}">{{config('global.app_phone')}}</a>
                            </li>
                        @endif
                        @if(!empty(config('global.app_email')))
                            <li class="list__item">
                                <i class="fa fa-envelope" aria-hidden="true"></i> Email: <a
                                    href="tel{{config('global.app_email')}}">{{config('global.app_email')}}</a>
                            </li>
                        @endif
                        @if(!empty(config('global.app_address')))
                            <li class="list__item">
                                <i class="fa fa-map-marker" aria-hidden="true"></i> Địa chỉ: <a
                                    href="tel{{config('global.app_address')}}">{{config('global.app_address')}}</a>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
            <div class="col-6 col-lg-2 mb-3 mb-lg-0">
                <div class="footer-item">
                    <p class="footer-item__title">TÀI KHOẢN</p>
                    <ul class="footer-item__list list-unstyled mb-0">
                        <li class="list__item list__item--link">
                            <a href="{{route('login')}}">Đăng nhập</a>
                        </li>
                        <li class="list__item list__item--link">
                            <a href="{{route('register')}}">Đăng ký</a>
                        </li>
                    </ul>
                </div>
            </div>
{{--            <div class="col-6 col-lg-3">--}}
{{--                <div class="footer-item">--}}
{{--                    <p class="footer-item__title">HỎI ĐÁP</p>--}}
{{--                    <ul class="footer-item__list list-unstyled mb-0">--}}
{{--                        <li class="list__item list__item--link">--}}
{{--                            <a href="#">Làm sao để quảng bà phòng trọ của bạn?</a>--}}
{{--                        </li>--}}
{{--                        <li class="list__item list__item--link">--}}
{{--                            <a href="">Cách liên hệ với phòng trọ bạn có hứng thú?</a>--}}
{{--                        </li>--}}
{{--                    </ul>--}}
{{--                </div>--}}
{{--            </div>--}}
            <div class="col-12 col-lg-3">
                <div class="fb-page" data-href="https://www.facebook.com/Trovie-100704748365559/" data-tabs="timeline"
                     data-width="" data-height="180" data-small-header="true" data-adapt-container-width="true"
                     data-hide-cover="true" data-show-facepile="false">
                    <blockquote cite="https://www.facebook.com/Trovie-100704748365559/" class="fb-xfbml-parse-ignore"><a
                                href="https://www.facebook.com/Trovie-100704748365559/">Trovie</a></blockquote>
                </div>
            </div>
        </div>
    </div>
    <p class="mb-0 mt-5 pt-3 pb-3 color-base-bg text-white text-center w-100">
        &copy;{{config('global.app_name') ?? config('app.name')}} 2020, bản quyền thuộc về <a class="text-white"
                                                                                              href="/">Trovie</a>. Thiết
        kế bởi&nbsp;
        <a class="text-white" href="mailto:haotrg035@gmail.com">Hao Truong</a></p>
</footer>
