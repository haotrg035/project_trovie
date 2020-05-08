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
                <form action="" class="panel-content--room__room-modal__form">
                    <div class="row row--custom">
                        <div class="col-md-4">
                            <div class="form-group mb-lg-0">
                                <div class="trovie-gallery trovie-gallery--room mt-2">
                                    <input class="filepond" type="file" name="gallery" id="file-gallery"
                                           multiple
                                           data-max-file-size="2MB">
                                    <div class="row row--custom">
                                        <a href="javascript:void(0)" class="col-4 col-lg-4 col--custom">
                                            <div class="trovie-gallery__item">
                                                <img class="trovie-gallery__item__image"
                                                     src="{{asset('storage/image.jpg')}}" alt="">
                                                <span class="trovie-gallery__item__remove">
                                                        <i class="fa fa-times" aria-hidden="true"></i></span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="col-4 col-lg-4 col--custom">
                                            <div class="trovie-gallery__item">
                                                <img class="trovie-gallery__item__image"
                                                     src="{{asset('storage/image.jpg')}}" alt="">
                                                <span class="trovie-gallery__item__remove">
                                                        <i class="fa fa-times" aria-hidden="true"></i></span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="col-4 col-lg-4 col--custom">
                                            <div class="trovie-gallery__item">
                                                <img class="trovie-gallery__item__image"
                                                     src="{{asset('storage/image.jpg')}}" alt="">
                                                <span class="trovie-gallery__item__remove">
                                                        <i class="fa fa-times" aria-hidden="true"></i></span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="col-4 col-lg-4 col--custom">
                                            <div class="trovie-gallery__item">
                                                <img class="trovie-gallery__item__image"
                                                     src="{{asset('storage/image.jpg')}}" alt="">
                                                <span class="trovie-gallery__item__remove">
                                                        <i class="fa fa-times" aria-hidden="true"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-12 col--custom">
                                    <div class="form-group">
                                        <label for="price">Tiện ích: </label>
                                        <div
                                            class="row row--custom panel-content--room__room-modal__form__services">
                                            <div class="col-4 col--custom">
                                                <div
                                                    class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                    <input type="checkbox" class="custom-control-input"
                                                           id="service-checkbox1" name="services[]">
                                                    <label class="custom-control-label" for="service-checkbox1">
                                                        Wifi
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-4 col--custom">
                                                <div
                                                    class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                    <input type="checkbox" class="custom-control-input"
                                                           id="service-checkbox2" name="services[]">
                                                    <label class="custom-control-label" for="service-checkbox2">
                                                        Nuôi thú cưng
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-4 col--custom">
                                                <div
                                                    class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                    <input type="checkbox" class="custom-control-input"
                                                           id="service-checkbox3" name="services[]">
                                                    <label class="custom-control-label" for="service-checkbox3">
                                                        Wifi
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-4 col--custom">
                                                <div
                                                    class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                    <input type="checkbox" class="custom-control-input"
                                                           id="service-checkbox4" name="services[]">
                                                    <label class="custom-control-label" for="service-checkbox4">
                                                        Nuôi thú cưng
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-4 col--custom">
                                                <div
                                                    class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                    <input type="checkbox" class="custom-control-input"
                                                           id="service-checkbox5" name="services[]">
                                                    <label class="custom-control-label" for="service-checkbox5">
                                                        Nam nữ ở chung
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-4 col--custom">
                                                <div
                                                    class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                    <input type="checkbox" class="custom-control-input"
                                                           id="service-checkbox6" name="services[]">
                                                    <label class="custom-control-label" for="service-checkbox6">
                                                        Nam nữ ở chung
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row row--custom">
                                <div class="col-12 col--custom">
                                    <div class="form-group">
                                        <label for="name">Tên phòng: </label>
                                        <input type="text" class="form-control trovie-input"
                                               name="name" id="name" placeholder=""
                                               value="P.01">
                                    </div>
                                </div>
                                <div class="col-6 col--custom">
                                    <div class="form-group form-group--unit form-group--unit--price">
                                        <label for="price">Giá phòng: </label>
                                        <input type="text" class="form-control trovie-input" step="1000"
                                               min="0" name="price" id="price" placeholder="Nhập số tiền">
                                    </div>
                                </div>
                                <div class="col-6 col--custom">
                                    <div class="form-group">
                                        <label for="price">Tầng / Khu / Dãy: </label>
                                        <input type="number" class="form-control trovie-input text-center"
                                               name="floor" id="floor" placeholder="Nhập số tầng/khu/dãy" min="0">
                                    </div>
                                </div>
                                <div class="col-6 col--custom">
                                    <div class="form-group form-group--unit form-group--unit--meter">
                                        <label for="price">Diện tích: </label>
                                        <input type="number" class="form-control trovie-input text-center"
                                               name=""  placeholder="Nhập diện tích" min="0">
                                    </div>
                                </div>
                                <div class="col-6 col--custom">
                                    <div class="form-group form-group--unit form-group--unit--man">
                                        <label for="price">Số người ở tối đa: </label>
                                        <input type="number" class="form-control trovie-input text-center"
                                               name=""  placeholder="Tối thiểu 1" min="1">
                                    </div>
                                </div>
                                <div class="col-12 col--custom">
                                    <div class="form-group">
                                        <label for="price">Khách Thuê: </label>
                                        <ul class="panel-content--room__room-modal__form__user-list list-unstyled">
                                            <li>
                                                <a href="#" class="user-list__item">
                                                    <figure class="user-list__item__image">
                                                        <img src="{{asset('storage/image.jpg')}}" alt="user name">
                                                    </figure>
                                                    <p class="user-list__item__name">Nguyễn Văn A</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="user-list__item">
                                                    <figure class="user-list__item__image">
                                                        <img src="{{asset('storage/image.jpg')}}" alt="user name">
                                                    </figure>
                                                    <p class="user-list__item__name">Nguyễn Văn A</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="user-list__item">
                                                    <figure class="user-list__item__image">
                                                        <img src="{{asset('storage/image.jpg')}}" alt="user name">
                                                    </figure>
                                                    <p class="user-list__item__name">Nguyễn Văn A</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="user-list__item">
                                                    <figure class="user-list__item__image">
                                                        <img src="{{asset('storage/image.jpg')}}" alt="user name">
                                                    </figure>
                                                    <p class="user-list__item__name">Nguyễn Văn A</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col--custom mb-0">
                            <div class="form-group d-flex justify-content-end pt-3 border-top">
                                <button class="btn btn-base btn-room-users mr-3" type="button">
                                    <i class="fa fa-users   " aria-hidden="true"></i> Quản Lý Khách Thuê
                                </button>
                                <button class="btn btn-base btn-create-room-invoice mr-3" type="button">
                                    <i class="fa fa-file-text-o" aria-hidden="true"></i> Lập Phiếu Thu
                                </button>
                                <button class="btn btn-base" type="submit">
                                    <i class="fa fa-floppy-o" aria-hidden="true"></i> Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </x-main-card>
        </div>
    </div>
</div>
