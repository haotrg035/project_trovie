<div class="modal fade panel-content--room__room-users-modal"
     id="panel-content--room__room-users-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        XEM KHÁCH THUÊ
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <div class="row">
                    <div class="col-md-6">
                        <fieldset class="trovie-fieldset px-2 pb-2">
                            <legend>KHÁCH TRỌ</legend>
                            <div class="row row--custom modal-room-users__list trovie-scrollbar overflow-auto"
                                 style="max-height: calc(369px - (23px + 1rem))"
                                 data-view-url="{{route('api.user.show')}}">
                                <div class="col-6 col-lg-4 col--custom">
                                    <a href="javascript:void(0)" class="list__user" data-id="">
                                        <figure class="user__avatar">
                                            <img src="" alt="">
                                        </figure>
                                        <p class="user__name"></p>
                                    </a>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-md-6 col--custom">
                        <form action="#" class="room-users-modal__form">
                            <fieldset class="trovie-fieldset px-3">
                                <legend>THÔNG TIN</legend>
                                <div class="row row--custom">
                                    <div class="col-6 col--custom">
                                        <div class="form-group form-group--present">
                                            <label for="name">Họ và Tên: </label>
                                            <input type="text" class="form-control trovie-input" readonly
                                                   name="name" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-6 col--custom">
                                        <div
                                            class="form-group  form-group--unit  form-group--unit--date form-group--present">
                                            <label for="">Ngày vào ở: </label>
                                            <input type="text" class="form-control trovie-input trovie-input--date"
                                                   readonly
                                                   name="date_in" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-6 col--custom">
                                        <div class="form-group form-group--present">
                                            <label for="name">Số CMND: </label>
                                            <input type="text" class="form-control trovie-input" readonly
                                                   name="id_card" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-6 col--custom">
                                        <div
                                            class="form-group  form-group--unit form-group--unit--date form-group--present">
                                            <label for="name">Ngày sinh: </label>
                                            <input type="text" class="form-control trovie-input trovie-input--date"
                                                   readonly
                                                   name="birthday" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-6 col--custom">
                                        <div
                                            class="form-group form-group--unit form-group--unit--phone form-group--present">
                                            <label for="name">Số điện thoại: </label>
                                            <input type="text" class="form-control trovie-input" readonly
                                                   name="phone" placeholder="">
                                        </div>
                                    </div>
{{--                                    <div class="col-6 col--custom">--}}
{{--                                        <div class="form-group form-group--present form-group--unit">--}}
{{--                                            <label for="name">Nghề nghiệp: </label>--}}
{{--                                            <input type="text" class="form-control trovie-input" readonly--}}
{{--                                                   name="career" placeholder="">--}}
{{--                                        </div>--}}
{{--                                    </div>--}}
                                    <div class="col-12 col--custom mb-0">
                                        <div class="form-group form-group--present">
                                            <label for="name">Quê quán: </label>
                                            <input type="text" class="form-control trovie-input" readonly
                                                   name="address" placeholder="">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div class="col-12 col--custom text-right mb-0">
                        <a href="{{route('user.contract.index')}}" class="btn btn-base btn-add-user-modal">
                            <i class="fa fa-users" aria-hidden="true"></i>&nbsp;QUẢN LÝ HỢP ĐỒNG THUÊ TRỌ
                        </a>
                    </div>
                </div>
            </x-main-card>
        </div>
    </div>
</div>
