@extends('user.master')
@section('site-title',$data['view_name'])
@section('style')
    <link rel="stylesheet" href="{{asset('/lib/DataTables/datatables.min.css')}}">
@endsection
@section('panel-content')
    <div class="panel-content no-print">
        <x-panel-header panel-title="{{$data['view_name']}}">
            <div class="panel-content--room__header-tool">
                <form class="mr-3 form-contract-select-host form-inline">
                    <select name="host" class="custom-select rounded-0 mr-lg-3 mb-2 mb-lg-0"
                            data-get-contracts-url="{{route('api.user.contract.get_contracts.host')}}">
                        <option value="" @if(count($data['list_host']) <= 0) selected @endif disabled>-- Chọn nhà trọ --
                        </option>
                        @foreach($data['list_host'] as $host)
                            <option value="{{$host->id}}" @if($loop->first) selected @endif>
                                {{$host->name}}
                            </option>
                        @endforeach
                    </select>
                    <select name="room" class="custom-select rounded-0"
                            data-get-contracts-url="{{route('api.user.contract.get_contracts.room')}}">
                        <option value="0">Tất cả phòng</option>
                        @foreach($data['list_host'] as $host)
                            @foreach($host['rooms'] as $room)
                                <option value="{{$room->id}}" data-host-id="{{$host->id}}">
                                    {{$room->name}}
                                </option>
                            @endforeach
                        @endforeach
                    </select>
                </form>
                <button id="show-contract-create-modal"
                        class="btn btn-base rounded-0 contract-add-btn d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <b>
                        &nbsp;LẬP&nbsp;<span class="d-none d-md-inline">HỢP ĐỒNG</span><span class="d-md-none">HĐ</span>
                    </b>
                </button>
            </div>
        </x-panel-header>
        <x-main-card body-class="half-padding">
            <div class="mw-100 w-100">
                <table class="table table-striped table-hovertable-responsive" cellspacing="0"
                       id="table-contract-list" width="100%"
                       data-view-url="{{route('api.user.contract.show')}}"
                       data-renew-url="{{route('api.user.contract.renew')}}"
                       data-cancel-url="{{route('api.user.contract.cancel')}}">
                    <thead>
                    <tr>
                        <th style="width: 8%">Mã HĐ</th>
                        {{--                    <th>Ảnh Đại Diện</th>--}}
                        <th style="width: 12%;" class="text-center">Ngày Lập</th>
                        <th style="width: 12%;" class="text-center">Ngày Gia Hạn</th>
                        <th style="width: 12%;" class="text-center">Ngày Hết Hạn</th>
                        <th>Đặt Cọc</th>
                        <th>Khách Thuê</th>
                        <th>Số Điện Thoại</th>
                        <th>Trạng Thái</th>
                        <th class="text-center" style="width: 7%;">Tùy Chọn</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </x-main-card>
    </div>
    @include('user.contracts.modal.contract-modal')
    @include('user.contracts.modal.create-contract.contract-info')
    @include('user.contracts.modal.create-contract.contract-room')
@endsection
@section('script')
    <script src="{{asset('/lib/DataTables/datatables.min.js')}}"></script>
    <script src="{{mix('user/js/contract/index.js')}}"></script>
@endsection
