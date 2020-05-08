@extends('user.master')
@section('site-title','Tiện Ích')
@section('style')
    <link rel="stylesheet" href="{{asset('/lib/DataTables/datatables.min.css')}}">
@endsection
@section('panel-content')
    <div class="panel-content--service">
        <x-panel-header panel-title="Tiện Ích">
            <div class="panel-content--room__header-tool">
                <button class="btn btn-base rounded-0"
                        data-toggle="modal" data-target="#add-service-modal">
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Thêm Tiện Ích
                </button>
            </div>
        </x-panel-header>
        <x-main-card body-class="half-padding">
            <table class="table" id="table-list-service">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiện ích</th>
                    <th>Phí</th>
                    <th>Đơn vị tính</th>
                    <th style="width: 10%">Tùy Chọn</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Wifi</td>
                    <td>50.000 VNĐ</td>
                    <td>Tháng</td>
                    <td></td>
                </tr>

                </tbody>
            </table>
        </x-main-card>
        @include('user.service.modal.add-service-modal')
    </div>
@endsection
@section('script')
    <script src="{{asset('/lib/DataTables/datatables.min.js')}}"></script>
    <script src="{{mix('user/js/service.js')}}"></script>
@endsection
