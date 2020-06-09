@extends('user.master')
@section('site-title',$data['view_name'])
@section('style')
    <link rel="stylesheet" href="{{asset('/lib/DataTables/datatables.min.css')}}">
@endsection
@section('panel-content')
    <div class="panel-content no-print">
        <x-panel-header panel-title="{{$data['view_name']}}">
            <div class="panel-content--room__header-tool">
                <form class="mr-3 form-contract-select-host">
                    <select name="host" class="custom-select rounded-0">
                        <option value="" @if(count($data['list_host']) <= 0) selected @endif disabled>-- Chọn nhà trọ --
                        </option>
                        @foreach($data['list_host'] as $host)
                            <option value="{{route('api.user.contract.get_contracts.host',$host->id)}}"
                                    @if($loop->first) selected @endif>
                                {{$host->name}}
                            </option>
                        @endforeach
                    </select>
                </form>
                <button class="btn btn-base rounded-0 contract-add-btn"
                        data-toggle="modal" data-target="#contract-create-modal">
                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;LẬP HỢP ĐỒNG
                </button>
            </div>
        </x-panel-header>
        <x-main-card body-class="half-padding">
            <table class="table table-hover" id="table-contract-list">
                <thead>
                <tr>
                    <th style="width: 10%">Mã HĐ</th>
                    <th>Ngày Lập</th>
                    <th>Ngày Hết Hạn</th>
                    <th>Đặt Cọc</th>
                    <th>Khách Thuê</th>
                    <th>Số Điện Thoại</th>
                    <th class="text-center" style="width: 7%;">Tùy Chọn</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </x-main-card>
    </div>
    @include('user.contracts.modal.contract-modal')
@endsection
@section('script')
    <script src="{{asset('/lib/DataTables/datatables.min.js')}}"></script>
    <script src="{{mix('user/js/contract/index.js')}}"></script>
@endsection
