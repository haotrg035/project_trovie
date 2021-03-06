<div class="modal fade panel-content--room__room-modal"
     id="panel-content--room__room-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        Thông tin phòng trọ
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <div class="row row--custom">
                    <div class="col-md-3 col--custom mb-2">
                        <fieldset class="trovie-fieldset h-100 mb-2">
                            <legend>ALBUM</legend>
                            <div class="form-group mb-lg-0 h-100 px-2 trovie-scrollbar"
                                 style="overflow-y: auto;max-height: calc(409px - (23px + 1rem))">
                                <x-trovie-gallery-uploader
                                    data-delete-url="{{route('api.user.host.room.gallery_remove',$data['data']['host_id'])}}"
                                    upload-url="{{route('api.user.host.room.gallery_add',$data['data']['host_id'])}}">
                                </x-trovie-gallery-uploader>
                            </div>
                        </fieldset>
                    </div>
                    <form method="post" action="{{route('api.user.host.room.update',$data['data']['host_id'])}}"
                          class="col-md-9 col--custom panel-content--room__room-modal__form mb-0">
                        <div class="row row--custom">
                            <div class="col-md-7 col--custom">
                                <fieldset class="trovie-fieldset px-3 h-100">
                                    <legend>TIỆN ÍCH</legend>
                                    <div class="row overflow-auto trovie-scrollbar"
                                         style="max-height: calc(401px - 23px);">
                                        <div class="col-12 col--custom">
                                            <div class="form-group">
                                                <div
                                                    class="row row--custom panel-content--room__room-modal__form__services max-height-100 trovie-scrollbar h-auto">
                                                    @foreach($data['data']['service_list'] as $service)
                                                        <div class="col-6 col--custom">
                                                            <div
                                                                class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                                <input type="checkbox" class="custom-control-input"
                                                                       id="room-modal__form__services-checkbox-{{$service['id']}}"
                                                                       value="{{$service['id']}}" name="services[]">
                                                                <label class="custom-control-label"
                                                                       for="room-modal__form__services-checkbox-{{$service['id']}}">
                                                                <span
                                                                    class="text-capitalize">{{$service['name']}}</span>
                                                                    - {{$service['cost']}}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="col-md-5 col--custom">
                                <fieldset class="trovie-fieldset px-2">
                                    <legend>THÔNG TIN PHÒNG TRỌ</legend>
                                    <div class="row row--custom pb-2">
                                        <input type="hidden" name="old_room_id">
                                        <input type="hidden" name="room_id">
                                        <div class="col-12 col--custom">
                                            <div class="form-group">
                                                <label for="name">Tên phòng: </label>
                                                <input type="text" class="form-control trovie-input"
                                                       name="name" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col-6 col--custom">
                                            <div class="form-group form-group--unit form-group--unit--price">
                                                <label for="price">Giá phòng: </label>
                                                <input type="text" class="form-control trovie-input" step="1000"
                                                       min="0" name="price" placeholder="Nhập số tiền">
                                            </div>
                                        </div>
                                        <div class="col-6 col--custom">
                                            <div class="form-group">
                                                <label for="price">Tầng / Khu: </label>
                                                <input type="number" class="form-control trovie-input text-center"
                                                       name="floor" placeholder="Nhập số tầng/khu/dãy" min="0">
                                            </div>
                                        </div>
                                        <div class="col-6 col--custom">
                                            <div class="form-group form-group--unit form-group--unit--meter">
                                                <label for="price">Diện tích: </label>
                                                <input type="number" class="form-control trovie-input text-center"
                                                       name="acreage" placeholder="Nhập diện tích" min="0">
                                            </div>
                                        </div>
                                        <div class="col-6 col--custom">
                                            <div class="form-group form-group--unit form-group--unit--man">
                                                <label for="price">Số người ở tối đa: </label>
                                                <input type="number" class="form-control trovie-input text-center"
                                                       name="members" placeholder="Tối thiểu 1" min="1">
                                            </div>
                                        </div>
                                        <div class="col-12 col--custom">
                                            <div class="form-group">
                                                <label for="name">Thông báo: </label>
                                                <textarea type="text" class="form-control trovie-input trovie-scrollbar"
                                                          name="announcement"></textarea>
                                            </div>
                                            <div class="custom-control custom-switch">
                                                <input name="notice" type="checkbox" class="custom-control-input"
                                                       id="toggleNotice">
                                                <label class="custom-control-label" for="toggleNotice">Bật thông
                                                    báo</label>
                                            </div>
                                        </div>

                                        <div class="col-12 col--custom d-none">
                                            <div class="form-group">
                                                <label for="price">Khách Thuê: </label>
                                                <ul class="panel-content--room__room-modal__form__user-list list-unstyled">
                                                    <li>
                                                        <a href="#" class="user-list__item">
                                                            <figure class="user-list__item__image">
                                                                <img src="" alt="user name">
                                                            </figure>
                                                            <p class="user-list__item__name">Nguyễn Văn A</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                        </div>
                    </form>
                    <div class="col-12 col--custom mb-0">
                        <div class="form-group d-flex justify-content-end pt-3 mb-0 border-top">
                            <button class="btn btn-base btn-room-users mr-3" type="button">
                                <i class="fa fa-users   " aria-hidden="true"></i> XEM KHÁCH THUÊ
                            </button>
                            <button class="btn btn-base btn-create-room-invoice mr-3 d-none" type="button">
                                <i class="fa fa-file-text-o" aria-hidden="true"></i> LẬP PHIẾU THU
                            </button>
                            <button class="btn btn-base btn-room-modal-save" type="submit">
                                <i class="fa fa-floppy-o" aria-hidden="true"></i> LƯU
                            </button>
                            <button class="btn btn-danger ml-3 btn-room-modal-delete" type="button"
                                    data-delete-url="{{route('user.host.room.delete',[$data['data']['host_id']])}}">
                                <i class="fa fa-trash-o" aria-hidden="true"></i> XÓA
                            </button>
                        </div>
                    </div>
                </div>
            </x-main-card>
        </div>
    </div>
</div>
