@if( isset($_GET['debug']) && config('app.env') == 'local')
{{dd($data)}}
@endif
    <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="ggmap-api-key" content="{{config('app.api_key.google_map')}}">
    <title>
        @hasSection('site-title') @yield('site-title') - @endif {{config('app.name')}}
    </title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
          name='viewport'/>
    <!--     Fonts and icons     -->

    <!-- CSS Files -->
    <link rel="stylesheet" href="{{asset('user/css/libs.css')}}"/>
    <link rel="stylesheet" href="{{mix(config('app.user_theme').'/css/app.css')}}"/>
    @yield('style')
</head>
<body>
<section class="page-wrapper">
    <main class="main-panel">
        @include('auth._navbar')
        <div class="main-panel__content" data-simplebar>
            @yield('content')
        </div>
    </main>
</section>
<!--   Core JS Files   -->
<script src="{{mix(config('app.user_theme').'/js/app.js')}}"></script>
@yield('script')
</body>
</html>
