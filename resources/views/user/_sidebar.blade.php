<ul class="main-sidebar list-unstyled">
    <li class="main-sidebar__item main-sidebar__item--logo">
        <a href="{{route('user.dashboard.index')}}" class="item__link">
            {{config('app.name')}}
        </a>
    </li>
    <li class="main-sidebar__item">
        <a href="{{route('user.host.index')}}" class="item__link @if(Route::is('user.host.index')) active @endif">
            <figure class="link__icon">
                <i class="fa fa-home" aria-hidden="true"></i>
            </figure>
            <p class="link__text">Nhà Trọ</p>
        </a>
    </li>
    <li class="main-sidebar__item">
        <a href="{{route('user.service.index')}}" class="item__link @if(Route::is('user.service.index')) active @endif">
            <figure class="link__icon">
                <i class="fa fa-cubes" aria-hidden="true"></i>
            </figure>
            <p class="link__text">Dịch Vụ</p>
        </a>
    </li>
    <li class="main-sidebar__item">
        <a href="javascript:void(0)" class="item__link sign-out-point">
            <figure class="link__icon">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
            </figure>
            <p class="link__text">Đăng Xuất</p>
        </a>
        <form action="{{route('logout')}}" method="post" id="form-log-out">
            @csrf
        </form>
    </li>
</ul>
