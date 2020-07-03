@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
            <div class="panel-content__header__content">
                <button class="btn btn-base ml-auto" data-toggle="modal" data-target="#modal-create">
                    <i class="fa fa-plus" aria-hidden="true"></i> THÊM MENU
                </button>
            </div>
        </div>
    </div>
    <x-main-card has-header="1" class="menu-list-wrapper">
        <x-slot name="title">Danh Sách Menu</x-slot>
        <div id="menu-list" class="dd" data-update-menu-pos="{{route('admin.menu.update_pos')}}"
             data-delete-menu="{{route('admin.menu.destroy')}}">
            <ul class="dd-list">
                @foreach($data['menus'] as $menu)
                    <li class="dd-item" data-id="{{$menu['id']}}">
                        <div class="dd-handle">
                            {{$menu['title']}}
                        </div>
                        <button class="btn btn-warning btn-edit" data-id="{{$menu['id']}}">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </button>
                        <button class="btn btn-danger btn-delete" data-id="{{$menu['id']}}">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                        @if(!empty($menu['children']))
                            <ul class="dd-list">
                                @foreach($menu['children'] as $menu_lv1)
                                    <li class="dd-item" data-id="{{$menu_lv1['id']}}">
                                        <div class="dd-handle">
                                            {{$menu_lv1['title']}}
                                        </div>
                                        <button class="btn btn-warning btn-edit" data-id="{{$menu_lv1['id']}}">
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </button>
                                        <button class="btn btn-danger btn-delete" data-id="{{$menu_lv1['id']}}">
                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                        @if(!empty($menu_lv1['children']))
                                            <ul class="dd-list">
                                                @foreach($menu_lv1['children'] as $menu_lv2)
                                                    <li class="dd-item" data-id="{{$menu_lv2['id']}}">
                                                        <div class="dd-handle">
                                                            {{$menu_lv2['title']}}
                                                        </div>
                                                        <button class="btn btn-warning btn-edit"
                                                                data-id="{{$menu_lv2['id']}}">
                                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                        </button>
                                                        <button class="btn btn-danger btn-delete"
                                                                data-id="{{$menu_lv2['id']}}">
                                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                        </button>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    </li>
                                @endforeach
                            </ul>
                        @endif
                    </li>
                @endforeach
            </ul>
        </div>
    </x-main-card>
    @include('user.admin.menu.modal.create')
    @include('user.admin.menu.modal.edit')
@endsection
@section('script')
    <script src="{{mix('/user/admin/menu/index.js')}}"></script>
@endsection
