@if(auth()->user()->isAdmin())
    <ul class="admin-sidebar main-sidebar list-unstyled no-print d-lg-none">
        <li class="main-sidebar__item--separator"></li>
        <li class="main-sidebar__item">
            <a href="{{route('admin.setting.index')}}"
               class="item__link @if(Route::is('admin.setting.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-gear" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Cài Đặt</p>
            </a>
        </li>
        <li class="main-sidebar__item">
            <a href="{{route('admin.menu.index')}}" class="item__link @if(Route::is('admin.menu.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Menu</p>
            </a>
        </li>
        <li class="main-sidebar__item">
            <a href="{{route('admin.place.index')}}" class="item__link @if(Route::is('admin.place.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-building" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Tỉnh Thành</p>
            </a>
        </li>
    </ul>
@endif
<ul class="main-sidebar list-unstyled no-print trovie-scrollbar" style="overflow-y: auto">
    <li class="main-sidebar__item main-sidebar__item--logo">
        <a href="/" class="item__link">
            {{config('global.app_name') ?? config('app.name')}}
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
        <a href="{{route('user.profile.show')}}"
           class="item__link @if(Route::is('user.user.*')) active @endif">
            <figure class="link__icon">
                <i class="fa fa-hotel" aria-hidden="true"></i>
            </figure>
            <p class="link__text">Phòng Trọ Của Tôi</p>
        </a>
    </li>
    @if(auth()->user()->isAdmin())
        <li class="main-sidebar__item--separator d-none d-lg-block"></li>
        <li class="main-sidebar__item d-none d-lg-block">
            <a href="{{route('admin.setting.index')}}"
               class="item__link @if(Route::is('admin.setting.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-gear" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Cài Đặt</p>
            </a>
        </li>
        <li class="main-sidebar__item d-none d-lg-block">
            <a href="{{route('admin.menu.index')}}" class="item__link @if(Route::is('admin.menu.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Menu</p>
            </a>
        </li>
        <li class="main-sidebar__item d-none d-lg-block">
            <a href="{{route('admin.place.index')}}" class="item__link @if(Route::is('admin.place.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-building" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Tỉnh Thành</p>
            </a>
        </li>
        <li class="main-sidebar__item d-none d-lg-block">
            <a href="{{route('admin.users.index')}}" class="item__link @if(Route::is('admin.users.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-users" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Người dùng</p>
            </a>
        </li>
        <li class="main-sidebar__item d-none d-lg-block">
            <a href="{{route('admin.articles.index')}}"
               class="item__link @if(Route::is('admin.articles.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-files-o" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Tin đăng</p>
            </a>
        </li>
    @endif
    @if(auth()->user()->isHostOwner())
        <li class="main-sidebar__item--separator"></li>
        <li class="main-sidebar__item">
            <a href="{{route('user.host.index')}}" class="item__link @if(Route::is('user.host.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-home" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Nhà Trọ</p>
            </a>
        </li>
        <li class="main-sidebar__item">
            <a href="{{route('user.service.index')}}"
               class="item__link @if(Route::is('user.service.index')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-cubes" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Tiện ích</p>
            </a>
        </li>
        <li class="main-sidebar__item">
            <a href="{{route('user.contract.index')}}"
               class="item__link @if(Route::is('user.contract.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Hợp Đồng Thuê</p>
            </a>
        </li>
        <li class="main-sidebar__item">
            <a href="{{route('user.invoice.index')}}" class="item__link @if(Route::is('user.invoice.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-file-excel-o" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Hóa Đơn</p>
            </a>
        </li>
        <li class="main-sidebar__item">
            <a href="{{route('user.room_article.index')}}"
               class="item__link @if(Route::is('user.room_article.*')) active @endif">
                <figure class="link__icon">
                    <i class="fa fa-file-o" aria-hidden="true"></i>
                </figure>
                <p class="link__text">Tin Đăng</p>
            </a>
        </li>
        <li class="main-sidebar__item--separator"></li>
    @endif
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
