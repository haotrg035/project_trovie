@extends('user.master')
@section('site-title',$data['view_name'])
@section('style')
    <link rel="stylesheet" href="{{asset('/lib/DataTables/datatables.min.css')}}">
@endsection
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">{{$data['view_name']}}</h5>
            <div class="panel-content__header__content">
                <a href="{{route('admin.users.create')}}" class="btn btn-base ml-auto">
                    <i class="fa fa-plus" aria-hidden="true"></i> THÊM
                </a>
            </div>
        </div>
        <x-main-card body-class="">
            <div class="mw-100 w-100">
                <table class="table table-striped table-hovertable-responsive" cellspacing="0"
                       id="table-user-list" width="100%">
                    <thead>
                    <tr>
                        <th style="width: 8%">Mã NĐ</th>
                        <th>Ảnh Đại Diện</th>
                        <th>Tài khoản</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Loại người dùng</th>
                        <th>Số điện thoại</th>
                        <th class="text-center" style="width: 8%;">Tùy Chọn</th>
                    </tr>
                    </thead>
                    <tbody>
                    @if(!empty($data['users']))
                        @foreach($data['users'] as $user)
                            <tr>
                                <td>{{$user['id']}}</td>
                                <td>
                                    <img width="50px" height="50px" src="{{$user['avatar']}}"
                                         alt="{{$user['username']}}">
                                </td>
                                <td>{{$user['username']}}</td>
                                <td>{{$user['full_name']}}</td>
                                <td>{{$user['gender'] === 1 ? 'Nam' : 'Nữ' }}</td>
                                <td>{{$user['birthday']}}</td>
                                <td>
                                    {{$user['role'] == config('app.role.host.hostOwner') ? 'Chủ trọ' : 'Khách thuê'}}
                                </td>
                                <td>{{$user['detail']['phone']}}</td>
                                <td>
                                    <a href="{{route('admin.users.show',$user['id'])}}"
                                       class="btn btn-sm btn-base mr-2">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </a>
                                    <form class="d-inline form-deleteUser" method="POST"
                                          action="{{route('admin.users.delete',$user['id'])}}">
                                        @csrf
                                        @method('DELETE')
                                        <button class="btn btn-sm btn-danger btn-delete" type="submit">
                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    @endif
                    </tbody>
                </table>
            </div>
        </x-main-card>
    </div>
@endsection
@section('script')
    <script src="{{asset('/lib/DataTables/datatables.min.js')}}"></script>
    <script src="{{mix('/user/admin/users/index.js')}}"></script>
@endsection
