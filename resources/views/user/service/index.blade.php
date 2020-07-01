@extends('user.master')
@section('site-title',$data['view_name'])
@section('style')
    <link rel="stylesheet" href="{{asset('/lib/DataTables/datatables.min.css')}}">
@endsection
@section('panel-content')
    <div class="panel-content--service">
        <x-panel-header panel-title="Tiện Ích">
            <div class="panel-content--room__header-tool">
                <button class="btn btn-base rounded-0 service-add-btn"
                        data-toggle="modal" data-target="#service-modal">
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Thêm Tiện Ích
                </button>
                <button class="btn btn-base rounded-0 service-add-btn ml-3"
                        data-toggle="modal" data-target="#unit-modal">
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Đơn Vị
                </button>
            </div>
        </x-panel-header>
        <x-main-card body-class="half-padding">
            <table class="table table-hover" id="table-list-service">
                <thead>
                <tr>
                    <th style="width: 5%">ID</th>
                    <th>Tiện ích</th>
                    <th>Phí</th>
                    <th>Đơn vị tính</th>
                    <th class="text-center no-sort" style="width: 10%;">Tùy Chọn</th>
                </tr>
                </thead>
                <tbody>
                @foreach($data['data'] as $service)
                    <tr data-id="{{$service['id']}}">
                        <td scope="row">{{$service['id']}}</td>
                        <td>{{$service['name']}}</td>
                        <td data-order="{{\App\Helper\TrovieHelper::parseCurrencyString($service['cost'])}}">
                            @if($service['cost'] > 0)
                                {{$service['cost']}} VNĐ
                            @else
                                Miễn phí
                            @endif
                        </td>
                        <td>{{$service['unit']['name']}}</td>
                        <td class="text-center">
                            <button class="table-list-service__edit-btn btn btn-warning btn-sm rounded"
                                    title="Chỉnh sửa">
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                            <button class="table-list-service__delete-btn btn btn-danger btn-sm rounded" title="Xóa">
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </x-main-card>
        @include('user.service.modal.service-modal')
        @include('user.service.modal.unit-modal')
    </div>
@endsection
@section('script')
    <script src="{{asset('/lib/DataTables/datatables.min.js')}}"></script>
    <script src="{{mix('user/js/service/index.js')}}"></script>
@endsection
