@extends('user.master')
@section('site-title',$data['view_name'])
@section('style')
    <link rel="stylesheet" href="{{asset('/lib/DataTables/datatables.min.css')}}">
    <link rel="stylesheet" href="{{asset('/lib/quill/dist/quill.core.css')}}">
    <link rel="stylesheet" href="{{asset('/lib/quill/dist/quill.snow.css')}}">
    {{--    <link rel="stylesheet" href="{{asset('/lib/quill/dist/quill.bubble.css')}}">--}}
@endsection
@section('panel-content')
    <x-panel-header panel-title="{{$data['view_name']}}">
        <div class="panel-content--room__header-tool">
            <form class="mr-3 form-select-host form-inline">
                <select name="host" id="select-host" class="custom-select rounded-0 mb-lg-0"
                        data-get-articles-url="{{route('api.user.article.get_articles.host')}}"
                        data-get-all-articles-url="{{route('api.admin.articles.get_all')}}">
                    <option value="0" @if(count($data['list_host']) <= 0) selected @endif>-- Tất Cả --
                    </option>
                    @foreach($data['list_host'] as $host)
                        <option value="{{$host->id}}" @if($loop->first) selected @endif>
                            {{$host->name}}
                        </option>
                    @endforeach
                </select>
            </form>
            <button id="btn-create-article"
                    class="panel-content--room__header-tool__btn btn btn-base btn-open-add-room-modal rounded-0 text-uppercase d-none">
                <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;THÊM<span
                    class="d-none d-lg-inline"> {{$data['view_name']}}</span>
            </button>
        </div>
    </x-panel-header>
    <x-main-card>
        <table class="table table-striped" id="table-articles" data-delete-url="{{route('api.user.article.delete')}}"
               data-edit-url="{{route('user.article.edit')}}">
            <thead>
            <tr>
                <th style="width: 10%">Mã Tin</th>
                <th style="width: auto">Tiêu Đề</th>
                <th style="width: 15%;">Phòng</th>
                <th style="width: 15%">Ngày Đăng</th>
                <th style="width: 15%"></th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </x-main-card>
    <div class="modal fade" id="modal-article" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">

                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body px-0">
                    <div class="container-fluid">
                        <form action="{{route('api.user.article.store')}}"
                              data-mode="create"
                              data-create-url="{{route('api.user.article.store')}}"
                              data-update-url="{{route('api.user.article.update')}}">
                            <div class="row row--custom">
                                <div class="col-12 col-lg-8 col--custom mb-lg-0">
                                    <div class="row row--custom">
                                        <div class="col-12 col-lg-7 col--custom">
                                            <fieldset class="trovie-fieldset px-3">
                                                <legend>TIN ĐĂNG</legend>
                                                <div class="form-group">
                                                    <label for="">Tiêu đề:</label>
                                                    <input type="text" name="title"
                                                           class="form-control trovie-input" required
                                                           placeholder="Nội dung tiêu đề tin đăng">
                                                </div>
                                                <div class="form-group">
                                                    <label for="">Nội dung:</label>
                                                    <div style="height: 18rem" id="article-content" type="text"
                                                         class="form-control trovie-input"></div>
                                                    <input type="hidden" name="content">
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col-12 col-lg-5 col--custom mb-0">
                                            <fieldset class="trovie-fieldset px-3 room-info">
                                                <legend>PHÒNG TRỌ</legend>
                                                <select name="room" id="select-room" disabled
                                                        class="select-room custom-select rounded-0"
                                                        data-get-articles-url="{{route('api.user.article.get_articles.room')}}"
                                                        required>
                                                    <option value="0">-- Chọn phòng --</option>
                                                    @foreach($data['list_host'] as $host)
                                                        @foreach($host['rooms'] as $room)
                                                            <option
                                                                data-get-room-url="{{route('api.user.host.room.show',[$host->id,$room->id])}}"
                                                                value="{{$room->id}}" data-host-id="{{$host->id}}">
                                                                {{$room->name}}
                                                            </option>
                                                        @endforeach
                                                    @endforeach
                                                </select>
                                                <div class="row row--custom mt-3">
                                                    <div class="col-6 col--custom">
                                                        <div class="form-group form-group--present">
                                                            <label for="price">Tầng / Khu: </label>
                                                            <input type="number"
                                                                   class="form-control trovie-input text-center"
                                                                   readonly
                                                                   id="floor" placeholder="Số tầng/khu/dãy" min="0">
                                                        </div>
                                                    </div>
                                                    <div class="col-6 col--custom">
                                                        <div
                                                            class="form-group form-group--unit form-group--unit--man form-group--present">
                                                            <label for="price">Số người ở tối đa: </label>
                                                            <input type="number"
                                                                   class="form-control trovie-input text-center"
                                                                   readonly
                                                                   id="members" placeholder="Tối thiểu 1" min="1">
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset class="trovie-fieldset px-3 mt-2">
                                                <legend>TIỆN ÍCH</legend>
                                                <ul class="room-card__service-list list-unstyled h-auto">
                                                    <li class="room-card__service-list__item">
                                            <span class="room-card__service-list__item__icon">
                                                <i class="fa fa-dot-circle-o"></i></span>
                                                        <p class="room-card__service-list__item__value mb-0 text-capitalize">
                                                        </p>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col--custom mb-0">
                                    <div class="frontend-room-card">
                                        <div id="present-room-card" class="room-card room-card--mobile-horizon p-0">
                                            <a href="javascript:void(0)" class="room-card__image">
                                                <img src="{{asset(\App\Helper\TrovieFile::checkFile(''))}}" alt="">
                                            </a>
                                            <div>
                                                <div class="room-card__body">
                                                    <a href="javascript:void(0)" class="room-card__title" title="">
                                                        tiêu đề
                                                    </a>
                                                    <p class="room-card__address d-flex" title="">
                                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                        <span></span>
                                                    </p>
                                                    <ul class="room-card__prop-list list-unstyled">
                                                        <li class="prop-list__item prop-list__item--price"
                                                            title="Giá phòng">
                                                            <i class="fa fa-dollar" aria-hidden="true"></i>
                                                            <span>xxx.xxxđ</span>/tháng
                                                        </li>
                                                        <li class="prop-list__item prop-list__item--acreage"
                                                            title="Diện tích">
                                                            <i class="fa fa-expand" aria-hidden="true"></i>
                                                            <span>xx</span> m<sup>2</sup>
                                                        </li>
                                                        <li class="prop-list__item electric prop-list__item--price"
                                                            title="Giá điện">
                                                            <i class="fa fa-flash" aria-hidden="true"></i>
                                                            <span>250.000đ</span>&nbsp;/kV

                                                        <li class="prop-list__item water prop-list__item--price"
                                                            title="Giá nước">
                                                            <i class="fa fa-tint" aria-hidden="true"></i>
                                                            <span>250.000đ</span>&nbsp;/m<sup>3</sup>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="room-card__host">
                                                    <a href="javascript:void(0)" class="host__link d-flex"
                                                       title="Xem nhà trọ">
                                                        <figure class="host__avatar mb-0">
                                                            <img src="{{asset(\App\Helper\TrovieFile::checkFile(''))}}"
                                                                 alt="">
                                                        </figure>
                                                        <p class="host__name">Lorem ipsum</p>
                                                    </a>
                                                    <a href="javascript:void(0)" class="host__call" title="Gọi Ngay">
                                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-white px-0 pb-0 text-right">
                                <button type="submit" class="btn btn-base ml-auto   ">
                                    <i class="fa fa-floppy-o" aria-hidden="true"></i> LƯU
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection
@section('script')
    <script src="{{asset('/lib/DataTables/datatables.min.js')}}"></script>
    <script src="{{asset('/lib/quill/dist/quill.min.js')}}"></script>
    <script src="{{mix('user/admin/articles/index.js')}}"></script>
@endsection
