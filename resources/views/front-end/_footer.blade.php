<footer class="page-section page-section__footer mb-0">
    <div class="container">
        <div class="row row--custom">
            <div class="col-12 col-lg-4">
                <div class="footer-item footer-item--logo">
                    <p class="footer-item__title">THÔNG TIN</p>
                    <ul class="footer-item__list list-unstyled mb-0">
                        <li class="list__item">
                            <p class="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis deleniti
                                dolorem, eligendi fuga hic, modi nesciunt omnis perferendis quaerat ratione rem sint
                                velit. Error, pariatur, placeat. Corporis dolorum, odio!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-6 col-lg-2">
                <div class="footer-item">
                    <p class="footer-item__title">TÀI KHOẢN</p>
                    <ul class="footer-item__list list-unstyled mb-0">
                        <li class="list__item">
                            <a href="{{route('login')}}">Đăng nhập</a>
                        </li>
                        <li class="list__item">
                            <a href="{{route('register')}}">Đăng ký</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-6 col-lg-3">
                <div class="footer-item">
                    <p class="footer-item__title">HỎI ĐÁP</p>
                    <ul class="footer-item__list list-unstyled mb-0">
                        <li class="list__item">
                            <a href="#">Làm sao để quảng bà phòng trọ của bạn?</a>
                        </li>
                        <li class="list__item">
                            <a href="">Cách liên hệ với phòng trọ bạn có hứng thú?</a>
                        </li>
                    </ul>
                </div>
            </div>
            {{-- <div class="col-12 col-lg-3">
                 <div class="fb-page" data-href="https://www.facebook.com/Trovie-100704748365559/" data-tabs="timeline"
                      data-width="" data-height="180" data-small-header="true" data-adapt-container-width="true"
                      data-hide-cover="true" data-show-facepile="false">
                     <blockquote cite="https://www.facebook.com/Trovie-100704748365559/" class="fb-xfbml-parse-ignore"><a
                             href="https://www.facebook.com/Trovie-100704748365559/">Trovie</a></blockquote>
                 </div>
             </div> --}}

        </div>
        <p class="mb-0 mt-5 text-center w-100">
            &copy;{{config('global.app_name') ?? config('app.name')}} 2020, bản quyền thuộc về Trovie. Thiết kế bởi&nbsp;
            <a class="text-dark" href="mailto:haotrg035@gmail.com">Hao Truong</a></p>
    </div>
</footer>
