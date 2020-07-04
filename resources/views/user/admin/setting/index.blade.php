@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
            <div class="panel-content__header__content">
                <button class="btn btn-base btn-save ml-auto">
                    <i class="fa fa-floppy-o" aria-hidden="true"></i> Lưu
                </button>
            </div>
        </div>
        <div class="row">
            <form action="{{route('admin.setting.update')}}" method="POST" class="col-lg-8" id="setting-form">
                @csrf
                @method('PATCH')
                <x-main-card has-header="1">
                    <x-slot name="title">
                        <div class="d-flex justify-content-between w-100">
                            THÔNG TIN WEBSITE
                        </div>
                    </x-slot>
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
                    <div class="form-group">
                        <label for="app_name">Giới thiệu website</label>
                        <input type="text" class="form-control trovie-input" name="app_desc"
                               value="{{config('global.app_desc') ?? config('app.app_desc') ?? ''}}">
                    </div>
                </x-main-card>
                <x-main-card has-header="1" class="mt-3">
                    <x-slot name="title">SỐ LƯỢNG TIN ĐĂNG</x-slot>
                    <div class="row row--custom">
                        <div class="col-md-4 col--custom">
                            <fieldset class="trovie-fieldset px-3">
                                <legend>Trang Chủ</legend>
                                <div class="form-group">
                                    <label for="index_newest_post_total">Tin đăng mới nhất</label>
                                    <input type="text" class="form-control trovie-input"
                                           name="article_total_newest_index"
                                           min="4"
                                           value="{{config('global.article_total_newest_index') ?? 4}}">
                                    <small class="form-text text-muted">khuyến cáo là 4</small>
                                </div>
                                <div class="form-group">
                                    <label for="index_newest_post_total">Số lượng thành phố</label>
                                    <input type="text" class="form-control trovie-input"
                                           name="featured_cities_total_index"
                                           min="4"
                                           value="{{config('global.featured_cities_total_index') ?? 5}}">
                                    <small class="form-text text-muted">khuyến cáo là 5</small>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-md-4 col--custom">
                            <fieldset class="trovie-fieldset px-3">
                                <legend>Tìm Kiếm</legend>
                                <div class="form-group">
                                    <label for="sidebar_newest_post_total">Số lượng kết quả</label>
                                    <input type="text" class="form-control trovie-input"
                                           name="article_total_search_result" min="4"
                                           value="{{config('global.article_total_search_result') ?? 4}}">
                                    <small class="form-text text-muted">khuyến cáo là 4</small>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-md-4 col--custom">
                            <fieldset class="trovie-fieldset px-3">
                                <legend>Chi Tiết Tin Đăng</legend>
                                <div class="form-group">
                                    <label for="index_newest_post_total">Tin đăng mới nhất</label>
                                    <input type="text" class="form-control trovie-input"
                                           name="article_total_newest_detail_page"
                                           min="4"
                                           value="{{config('global.article_total_newest_detail_page') ?? 3}}">
                                    <small class="form-text text-muted">khuyến cáo là 3</small>
                                </div>
                                <div class="form-group">
                                    <label for="index_newest_post_total">Tin đăng liên quan</label>
                                    <input type="text" class="form-control trovie-input"
                                           name="article_total_related_detail_page"
                                           min="4"
                                           value="{{config('global.article_total_related_detail_page') ?? 4}}">
                                    <small class="form-text text-muted">khuyến cáo là 4</small>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </x-main-card>
            </form>
            <div class="col-lg-4">
                <div class="form-group">
                    <label for="" class="mb-1">Banner</label>
                    <x-trovie-avatar-upload
                        image="{{asset(\App\Helper\TrovieFile::checkFile(config('global.app_banner'))) ?? ''}}"
                        method="POST"
                        title="website banner" class=""
                        upload-url="{{route('admin.setting.update_banner')}}">
                    </x-trovie-avatar-upload>
                </div>
                <div class="form-group">
                    <label for="" class="mb-1">Ảnh No-Image</label>
                    <x-trovie-avatar-upload
                        image="{{asset(\App\Helper\TrovieFile::checkFile(config('global.app_no_image'))) ?? ''}}"
                        method="POST"
                        title="Logo website" class="" upload-url="{{route('admin.setting.update_no_image')}}">
                    </x-trovie-avatar-upload>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('.btn-save').onclick = () => {
                document.getElementById('setting-form').submit();
            }
        })
    </script>
@endsection
