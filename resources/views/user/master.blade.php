@if( isset($_GET['debug']) && config('app.env') == 'local')
{{dd($data)}}
@endif
    <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @auth
        <meta name="access_token" content="{{auth()->user()->api_token}}">
    @endauth
    <meta name="ggmap-api-key" content="{{config('app.api_key.google_map')}}">
    <meta name="goong-map-api-key" content="{{config('app.api_key.goong_map_api')}}">
    <meta name="goong-map-titles-key" content="{{config('app.api_key.goong_map_titles')}}">
    <title>
        {{config('app.name')}}@hasSection('site-title') - @yield('site-title')@endif
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
    @include(config('app.user_theme').'._sidebar')
    <main class="main-panel">
        {{--        @include('layouts._navbar')--}}
        <div class="main-panel__content" data-simplebar>
            @yield('panel-content')
        </div>
    </main>
</section>
<!--   Core JS Files   -->
<script src="{{mix(config('app.user_theme').'/js/app.js')}}"></script>
@if(!empty(session()->get('response_message')))
    @php($message = session()->get('response_message'))
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            @switch($message['status'])
            @case('success')
            tata.success('Thông báo', '{{$message['message']}}');
            @break
            @case('warning')
            tata.warn('Thông báo', '{{$message['message']}}');
            @break
            @case('error')
            tata.error('Thông báo', '{{$message['message']}}');
            @break
            @default
            tata.text('Thông báo', '{{$message['message']}}');
            @endswitch
            // tata.log('Hello World', 'CSSScript.Com')
            // tata.info('Hello World', 'CSSScript.Com')
        });
    </script>
@endif
@yield('script')
</body>
</html>
