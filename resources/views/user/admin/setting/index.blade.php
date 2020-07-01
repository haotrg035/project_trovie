@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
            <div class="panel-content__header__content d-none">

            </div>
        </div>
        <div class="row">
            <form action="{{route('admin.setting.update')}}" method="POST" class="col-lg-8">
                @csrf
                @method('PATCH')
                <x-main-card>
                    <div class="form-group">
                        <label for="app_name">Tên Website</label>
                        <input type="text" class="form-control trovie-input" name="app_name"
                               value="{{config('global.app_name') ?? config('app.name')}}">
                    </div>
                    <div class="form-group form-group--unit form-group--unit--phone">
                        <label for="app_name">Số điện thoại</label>
                        <input type="text" class="form-control trovie-input" name="app_phone"
                               value="{{config('global.app_phone') ?? config('app.phone') ?? ''}}">
                    </div>
                    <div class="form-group">
                        <label for="app_email">Email</label>
                        <input type="email" class="form-control trovie-input" name="app_email"
                               value="{{config('global.app_email') ?? config('app.email') ?? ''}}">
                    </div>
                    <div class="form-group">
                        <label for="app_name">Địa chỉ</label>
                        <input type="text" class="form-control trovie-input" name="app_address"
                               value="{{config('global.app_address') ?? config('app.address') ?? ''}}">
                    </div>
                    <div class="text-right">
                        <button class="btn btn-base">
                            <i class="fa fa-floppy-o" aria-hidden="true"></i> Lưu
                        </button>
                    </div>
                </x-main-card>
            </form>
            <div class="col-lg-4">
                {{--                <div class="form-group">--}}
                {{--                    <label for="" class="mb-1">Logo</label>--}}
                {{--                    <x-trovie-avatar-upload image="{{config('global.app_logo') ?? ''}}" method="POST"--}}
                {{--                                            title="Logo website" class="" upload-url="/">--}}
                {{--                    </x-trovie-avatar-upload>--}}
                {{--                </div>--}}
                <div class="form-group">
                    <label for="" class="mb-1">Banner</label>
                    <x-trovie-avatar-upload image="{{asset(\App\Helper\TrovieFile::checkFile(config('global.app_banner'))) ?? ''}}" method="POST"
                                            title="website banner" class=""
                                            upload-url="{{route('admin.setting.update_banner')}}">
                    </x-trovie-avatar-upload>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')

@endsection
