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
                            data-get-all-url="{{route('api.user.invoice.get_invoices.host')}}">
                        <option value="" @if(count($data['list_host']) <= 0) selected @endif disabled>-- Chọn nhà trọ --
                        </option>
                        @foreach($data['list_host'] as $host)
                            <option value="{{$host->id}}" @if($loop->first) selected @endif>
                                {{$host->name}}
                            </option>
                        @endforeach
                    </select>
                    <select name="room" class="custom-select rounded-0"
                            data-get-all-url="{{route('api.user.invoice.get_invoices.room')}}">
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
                <button id="btn-show-create-modal"
                        class="btn btn-base rounded-0 contract-add-btn d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <b>
                        &nbsp;LẬP&nbsp;<span class="d-none d-md-inline">HÓA ĐƠN</span><span class="d-md-none">HĐ</span>
                    </b>
                </button>
            </div>
        </x-panel-header>
        <x-main-card body-class="half-padding">
            <div class="mw-100 w-100">
                <table class="table table-striped table-hovertable-responsive" cellspacing="0"
                       id="table-invoice-list" width="100%"
                       data-view-url="{{route('api.user.invoice.show')}}">
                    <thead>
                    <tr>
                        <th style="width: 8%">Mã HĐ</th>
                        <th style="width: 13%;" class="text-center">Ngày Lập</th>
                        <th style="width: 14%;" class="text-center">Ngày Thanh Toán</th>
                        <th style="width: 25%;" class="text-center">Phòng</th>
                        <th style="width: 15%;" class="text-center">Tổng Số Tiền</th>
                        <th style="width: 15%;">Tình Trạng</th>
                        <th class="text-center" style="width: 8%;">Tùy Chọn</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </x-main-card>
    </div>
    @include('user.invoice.modal.invoice-modal')
@endsection
@section('script')
    <script src="{{asset('/lib/DataTables/datatables.min.js')}}"></script>
    <script src="{{mix('user/js/invoice/index.js')}}"></script>
@endsection
