@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
            <div class="panel-content__header__content">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <x-main-card has-header="1" class="menu-list-wrapper">
                    <x-slot name="title">Danh Sách Tỉnh Thành</x-slot>
                    <div id="place-list" class="dd" data-update-menu-pos="{{route('admin.menu.update_pos')}}"
                         data-delete-menu="{{route('admin.menu.destroy')}}">
                        <ul class="dd-list">
                            @foreach($data['cities'] as $city)
                                <li class="dd-item" data-id="{{$city['id']}}">
                                    <div class="dd-handle">
                                        {{$city['name']}}
                                    </div>
                                    <button class="btn btn-warning btn-edit" data-id="{{$city['id']}}">
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </button>
                                    @if($city['active'] == 2)
                                        <button class="btn btn-danger btn-delete" data-id="{{$city['id']}}">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </button>
                                    @endif
                                    {{--                                    <button class="btn btn-danger btn-delete" data-id="{{$city['id']}}">--}}
                                    {{--                                        <i class="fa fa-trash-o" aria-hidden="true"></i>--}}
                                    {{--                                    </button>--}}
                                    @if(!empty($city['districts']))
                                        <ul class="dd-list">
                                            @foreach($city['districts'] as $district)
                                                <li class="dd-item" data-id="{{$district['id']}}">
                                                    <div class="dd-handle">
                                                        {{$district['name']}}
                                                    </div>
                                                    {{--                                                    <button class="btn btn-warning btn-edit"--}}
                                                    {{--                                                            data-id="{{$district['id']}}">--}}
                                                    {{--                                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>--}}
                                                    {{--                                                    </button>--}}
                                                    {{--                                                    <button class="btn btn-danger btn-delete" data-id="{{$menu_lv1['id']}}">--}}
                                                    {{--                                                        <i class="fa fa-trash-o" aria-hidden="true"></i>--}}
                                                    {{--                                                    </button>--}}
                                                </li>
                                            @endforeach
                                        </ul>
                                    @endif
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </x-main-card>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="modal-edit" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">CẬP NHẬT TỈNH THÀNH</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="form-edit-wrapper">
                    <div class="form-group px-3 mb-0">
                        <label for="" class="mb-1">Ảnh đại diện</label>
                        <x-trovie-avatar-upload
                            image="{{asset(\App\Helper\TrovieFile::checkFile('')) ?? ''}}"
                            method="POST"
                            title="website banner" class=""
                            upload-url="{{'/'}}">
                        </x-trovie-avatar-upload>
                    </div>
                    <form action="" class="form-edit" method="post"
                          data-get-city="{{route('admin.place.show_city')}}"
                          data-update-city-avatar="{{route('admin.place.update_city_avatar')}}"
                          data-update-city="{{route('admin.place.update_city')}}">
                        @csrf
                        <div class="p-3">
                            <fieldset class="trovie-fieldset px-3 pb-3">
                                <legend>Thông Tin</legend>
                                <div class="form-group form-group--present">
                                    <label for="">Địa điểm</label>
                                    <input type="text" class="form-control trovie-input" name="name">
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="active" value="active">
                                    <label class="form-check-label" for="active"><b>Nổi bật</b></label>
                                </div>
                            </fieldset>
                            <div class="d-flex justify-content-between">
                                <button class="btn btn-base btn-save mt-3 mx-auto">
                                    <i class="fa fa-floppy-o" aria-hidden="true"></i> Cập nhật
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script src="{{mix('/user/admin/place/index.js')}}"></script>
@endsection
