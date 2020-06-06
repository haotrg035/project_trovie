@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
            <div class="panel-content__header__content">
                <ul class="list-unstyled">
                    <li class="">
                        <a href="#" class="btn rounded-0 btn-base-outline" data-toggle="modal">
                            <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Thêm Nhà Trọ
                        </a>
                    </li>
                    <li class="">
                        <a href="#" class="btn rounded-0 btn-base-outline">
                            <i class="fa fa-cubes" aria-hidden="true"></i>&nbsp;Tiện Ích
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script src="{{mix(config('app.user_theme') .'/js/host/index.js')}}"></script>
@endsection
