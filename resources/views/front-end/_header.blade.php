<section class="top-header color-base-bg text-white d-none">
    <div class="container">
        <div class="d-flex justify-content-between">
            <ul class="list-unstyled mb-0 d-flex"></ul>
            <ul class="list-unstyled mb-0 d-flex">
                @auth
                    <li>
                        <a href="{{route('user.profile.show')}}">
                            <i class="fa fa-user" aria-hidden="true"></i> {{auth()->user()->full_name}}
                        </a>
                    </li>
                @endauth
                @guest
                    <li><a href="{{route('register')}}"><i class="fa fa-key" aria-hidden="true"></i> Đăng Ký</a></li>
                    <li><a href="{{route('login')}}"><i class="fa fa-sign-in" aria-hidden="true"></i> Đăng Nhập</a></li>
                @endguest
            </ul>
        </div>
    </div>
</section>
<header class="main-header">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/">{{config('global.app_name') ?? config('app.name')}}</a>
            <button class="navbar-toggler d-lg-none" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="" id="main-header__menu">
                <button class="close-menu-btn btn btn-danger d-lg-none">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <ul class="navbar-nav">
                    {{--<li class="nav-item home">
                        <a class="nav-link" href="#">
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </a>
                    </li>--}}
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#">Khu Vực <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                        <ul class="dropdown-menu">
                            <li class="menu-item">
                                <a href="" class="nav-link">Cần Thơ</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Hướng Dẫn
                        </a>
                    </li>
                    @auth
                        <li class="nav-item">
                            <a class="nav-link" href="{{route('user.profile.show')}}">
                                <i class="fa fa-user" aria-hidden="true"></i> {{auth()->user()->full_name}}
                            </a>
                        </li>
                    @endauth
                    @guest
                        <li class="nav-item auth">
                            <a class="nav-link" href="{{route('login')}}">
                                Đăng Nhập / Đăng Ký
                            </a>
                        </li>
                    @endguest
                </ul>
            </div>
        </nav>
    </div>
</header>
