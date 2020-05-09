@extends('user.master')
@section('panel-content')
    <div class="panel-content panel-content--host">
        <div class="panel-content__header">
            <h5 class="panel-content__header__title">Thông Tin Nhà Trọ</h5>
            <div class="panel-content__header__content">
                <ul class="panel-content--host__header__elements list-unstyled">
                    <li class="panel-content--host__header__elements__item">
                        <a href="#" class="btn rounded-0 btn-base-outline">
                            <i class="fa fa-home" aria-hidden="true"></i>&nbsp;Phòng Trọ
                        </a>
                    </li>
                    <li class="panel-content--host__header__elements__item">
                        <a href="#" class="btn rounded-0 btn-base-outline">
                            <i class="fa fa-cubes" aria-hidden="true"></i>&nbsp;Tiện Ích
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row row--custom">
            <div class="col-lg-6 col--custom">
                <div class="row row--custom">
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1" class="host-info">
                            <x-slot name="title">Thông Tin</x-slot>
                            <form action="" class="host-info__form-change-name">
                                <div class="form-group form-group--edit">
                                    <input type="text" class="form-control trovie-input"
                                           name="name" id="name" placeholder=""
                                           value="Nhà Trọ Võ Văn Kiệt" readonly>
                                    <a href="javascript:void(0)" class="form-group--edit__edit-btn">
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </form>
                            <form action="" class="host-info__form-detail">
                                <div class="row row--custom">
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group">
                                            <label for="date_payment">Ngày Ghi Điện:</label>
                                            <input type="number" min="1" max="31" class="form-control trovie-input"
                                                   name="date_payment"
                                                   id="date_payment" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group">
                                            <label for="date_note_electric">Ngày Ghi Nước:</label>
                                            <input type="number" min="1" max="31" class="form-control trovie-input"
                                                   name="date_note_water"
                                                   id="date_note_electric" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group">
                                            <label for="date_payment">Ngày Thu Tiền:</label>
                                            <input type="number" min="1" max="31" class="form-control trovie-input" name="date_payment"
                                                   id="date_payment" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group form-group--unit form-group--unit--electric">
                                            <label for=""><i class="fa fa-bolt text-warning" aria-hidden="true"></i>
                                                Tiền Điện
                                                (VNĐ): </label>
                                            <input type="number"
                                                   class="form-control trovie-input"
                                                   name="cost_electricity" id="cost_electricity" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom">
                                        <div class="form-group form-group--unit form-group--unit--water">
                                            <label for=""><i class="fa fa-tint text-primary" aria-hidden="true"></i>
                                                Tiền Nước
                                                (VNĐ): </label>
                                            <input type="number" class="form-control trovie-input" name="cost_water"
                                                   id="cost_water" placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Mô Tả:</label>
                                    <textarea name="desc" id="desc" cols="30" rows="3"
                                              class="form-control trovie-input"
                                              placeholder="Mô tả ngắn về khu trọ"></textarea>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button class="btn btn-base" type="submit">
                                        <i class="fa fa-floppy-o" aria-hidden="true"></i>
                                        &nbsp;Lưu
                                    </button>
                                </div>
                            </form>
                        </x-main-card>
                    </div>
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1" class="host-info" body-class="pb-0">
                            <x-slot name="title">Vị trí</x-slot>
                            <form action="" class="host-info__form-position">
                                <div class="row row--custom">
                                    <div class="col-12 col-lg-4 col--custom">
                                        <div class="form-group form-group">
                                            <label for="">Địa chỉ:</label>
                                            <input type="text" class="form-control trovie-input" name="address"
                                                   id="address"
                                                   placeholder="Số nhà, quận, huyện...">
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-4 col--custom">
                                        <div class="form-group form-group">
                                            <label for="">Quận/Huyện</label>
                                            <select class="form-control trovie-input" name="city" id="city">
                                                <option selected disabled>Chọn quận/huyện</option>
                                                <option>Cần Thơ</option>
                                                <option>Hồ Chí Minh</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-4 col--custom">
                                        <div class="form-group form-group">
                                            <label for="">Tỉnh/Thành phố</label>
                                            <select class="form-control trovie-input" name="city" id="city">
                                                <option selected disabled>Chọn tỉnh/thành phố</option>
                                                <option>Cần Thơ</option>
                                                <option>Hồ Chí Minh</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col--custom">
                                        <div id="host-info__form-position__map"
                                             class="host-info__form-position__map"></div>
                                    </div>
                                    <div class="col-12 col--custom d-flex justify-content-end">
                                        <button class="btn btn-base" type="submit">
                                            <i class="fa fa-floppy-o" aria-hidden="true"></i>
                                            &nbsp;Lưu
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </x-main-card>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col--custom">
                <div class="row row--custom">
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1">
                            <x-slot name="title">Thông Báo</x-slot>
                            <form action="#" class="host-info__form-announce">
                                <div class="form-group">
                            <textarea name="announcement" id="announcement" cols="30" rows="3"
                                      class="form-control trovie-input" placeholder="Nội dung thông báo"></textarea>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="toggleThongBao">
                                        <label class="custom-control-label" for="toggleThongBao">Bật thông báo</label>
                                    </div>
                                    <button class="btn btn-base" type="submit">
                                        <i class="fa fa-floppy-o" aria-hidden="true"></i>
                                        &nbsp;Lưu
                                    </button>
                                </div>
                            </form>
                        </x-main-card>
                    </div>
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1" class="host-avatar">
                            <x-slot name="title">Ảnh Đại Diện</x-slot>
                            <input class="filepond mb-0" type="file" name="avatar" id="file-avatar"
                                   data-poster-src="{{asset('storage/image.jpg')}}"
                                   data-poster-size="3001025"
                                   data-max-file-size="2MB"
                                   data-poster-name="Ảnh Đại Diện">
                        </x-main-card>
                    </div>
                    <div class="col-lg-12 col--custom">
                        <x-main-card has-header="1" class="host-gallery" body-class="pb-0">
                            <x-slot name="title">Album Ảnh</x-slot>
                            <input class="filepond" type="file" name="gallery" id="file-gallery" multiple
                                   data-max-file-size="2MB">
                            <div class="trovie-gallery">
                                <div class="row row--custom">
                                    <a href="javascript:void(0)" class="col-6 col-lg-4 col--custom">
                                        <div class="trovie-gallery__item">
                                            <img class="trovie-gallery__item__image"
                                                 src="{{asset('storage/image.jpg')}}" alt="">
                                            <span class="trovie-gallery__item__remove">
                                                <i class="fa fa-times" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </x-main-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script src="{{mix(config('app.user_theme') .'/js/host/detail.js')}}"></script>
@endsection
