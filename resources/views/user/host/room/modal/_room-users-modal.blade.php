<div class="modal fade panel-content--room__room-users-modal"
     id="panel-content--room__room-users-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        QUẢN LÝ KHÁCH THUÊ
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <div class="row">
                    <div class="col-md-6">
                        <div class="row row--custom modal-room-users__list">
                            <div class="col-6 col-lg-4 col--custom">
                                <a href="javascript:void(0)" class="list__user">
                                    <figure class="user__avatar">
                                        <img src="https://via.placeholder.com/300x300" alt="">
                                    </figure>
                                    <p class="user__name">Nguyen Van A</p>
                                </a>
                            </div>
                            <div class="col-6 col-lg-4 col--custom">
                                <a href="javascript:void(0)" class="list__user">
                                    <figure class="user__avatar">
                                        <img src="https://via.placeholder.com/300x300" alt="">
                                    </figure>
                                    <p class="user__name">Nguyen Van A</p>
                                </a>
                            </div>
                            <div class="col-6 col-lg-4 col--custom">
                                <a href="javascript:void(0)" class="list__user">
                                    <figure class="user__avatar">
                                        <img src="https://via.placeholder.com/300x300" alt="">
                                    </figure>
                                    <p class="user__name">Nguyen Van A</p>
                                </a>
                            </div>
                            <div class="col-6 col-lg-4 col--custom">
                                <a href="javascript:void(0)" class="list__user">
                                    <figure class="user__avatar">
                                        <img src="https://via.placeholder.com/300x300" alt="">
                                    </figure>
                                    <p class="user__name">Nguyen Van A</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row row--custom">
                            <div class="col-6 col--custom">
                                <div class="form-group">
                                    <label for="name">Họ và Tên: </label>
                                    <input type="text" class="form-control trovie-input"
                                           name="name" id="name" placeholder=""
                                           value="Nguyen Van A">
                                </div>
                            </div>
                            <div class="col-6 col--custom">
                                <div class="form-group  form-group--unit  form-group--unit--date">
                                    <label for="">Ngày vào ở: </label>
                                    <input type="text" class="form-control trovie-input trovie-input--date"
                                           name="" id="" placeholder="">
                                </div>
                            </div>
                            <div class="col-6 col--custom">
                                <div class="form-group">
                                    <label for="name">Số CMND: </label>
                                    <input type="text" class="form-control trovie-input"
                                           name="" id="" placeholder="">
                                </div>
                            </div>
                            <div class="col-6 col--custom">
                                <div class="form-group  form-group--unit form-group--unit--date">
                                    <label for="name">Ngày sinh: </label>
                                    <input type="text" class="form-control trovie-input trovie-input--date"
                                           name="" id="" placeholder="">
                                </div>
                            </div>
                            <div class="col-6 col--custom">
                                <div class="form-group form-group--unit form-group--unit--phone">
                                    <label for="name">Số điện thoại: </label>
                                    <input type="text" class="form-control trovie-input"
                                           name="" id="" placeholder="">
                                </div>
                            </div>
                            <div class="col-6 col--custom">
                                <div class="form-group form-group--unit">
                                    <label for="name">Nghề nghiệp: </label>
                                    <input type="text" class="form-control trovie-input"
                                           name="" id="" placeholder="">
                                </div>
                            </div>
                            <div class="col-12 col--custom">
                                <div class="form-group">
                                    <label for="name">Quê quán: </label>
                                    <input type="text" class="form-control trovie-input"
                                           name="" id="" placeholder="">
                                </div>
                            </div>
                            <div class="col-12 col--custom text-right mb-0">
                                <button class="btn btn-base btn-add-user-modal">
                                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;THÊM KHÁCH THUÊ
                                </button>
                                <button class="btn btn-base">
                                    <i class="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;LƯU
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </x-main-card>
        </div>
    </div>
</div>
