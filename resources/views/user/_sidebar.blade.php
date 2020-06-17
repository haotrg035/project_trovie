<ul class="main-sidebar list-unstyled no-print">
    <li class="main-sidebar__item main-sidebar__item--logo">
        <a href="/" class="item__link">
            {{config('app.name')}}
        </a>
    </li>
    <li class="main-sidebar__item">
        <a href="{{route('user.profile.show')}}"
           class="item__link @if(Route::is('user.user.*')) active @endif">
            <figure class="link__icon">
                <i class="fa fa-user" aria-hidden="true"></i>
            </figure>
            <p class="link__text">Cá Nhân</p>
        </a>
    </li>
    <li class="main-sidebar__item">
        <a href="{{route('user.host.index')}}" class="item__link @if(Route::is('user.host.*')) active @endif">
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
            <p class="link__text">Tiện ích</p>
        </a>
    </li>
    <li class="main-sidebar__item">
        <a href="{{route('user.contract.index')}}" class="item__link @if(Route::is('user.contract.*')) active @endif">
            <figure class="link__icon">
                <i class="fa fa-id-card" aria-hidden="true"></i>
            </figure>
            <p class="link__text">Hợp Đồng Thuê</p>
        </a>
    </li>
    <li class="main-sidebar__item">
        <a href="{{route('user.invoice.index')}}" class="item__link @if(Route::is('/')) active @endif">
            <figure class="link__icon">
                <i class="fa fa-file-excel-o" aria-hidden="true"></i>
            </figure>
            <p class="link__text">Hóa Đơn</p>
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
