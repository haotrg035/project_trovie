<div class="modal fade add-room-modal"
     id="add-room-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        THÊM PHÒNG TRỌ MỚI
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <form action="{{route('api.user.host.room.store',$data['data']['host_id'])}}"
                      class="add-room-modal__form">
                    <div class="row row--custom">
                        <div class="col-md-6 col--custom">
                            <fieldset class="trovie-fieldset px-3"
                                      style="padding-top: .8rem;padding-bottom: .8rem;">
                                <legend>TIỆN ÍCH</legend>
                                <div class="form-group mb-md-0">
                                    <div
                                        class="row row--custom panel-content--room__room-modal__form__services trovie-scrollbar">
                                        @foreach($data['data']['service_list'] as $service)
                                            <div class="col-6 col--custom">
                                                <div
                                                    class="custom-control custom-checkbox panel-content--room__room-modal__form__services__item">
                                                    <input type="checkbox" class="custom-control-input"
                                                           id="add-room-modal__form__services-checkbox-{{$service['id']}}"
                                                           value="{{$service['id']}}" name="services[]">
                                                    <label class="custom-control-label"
                                                           for="add-room-modal__form__services-checkbox-{{$service['id']}}">
                                                                <span class="text-capitalize">
                                                                    {{$service['name']}}
                                                                </span>
                                                        - {{$service['cost']}}
                                                    </label>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-md-6 col--custom">
                            <fieldset class="trovie-fieldset px-3">
                                <legend>THÔNG TIN PHÒNG TRỌ</legend>
                                <div class="row row--custom">
                                    <input type="hidden" name="host_id" value="{{$data['data']['host_id']}}">
                                    <div class="col-12 col--custom">
                                        <div class="form-group">
                                            <label for="name">Tên phòng: </label>
                                            <input type="text" class="form-control trovie-input" required
                                                   name="name" placeholder="">
                                        </div>
                                    </div>
                                    <div class="col-6 col--custom">
                                        <div class="form-group form-group--unit form-group--unit--price">
                                            <label for="price">Giá phòng: </label>
                                            <input type="text" class="form-control trovie-input" step="1000" required
                                                   min="0" name="price" placeholder="Nhập số tiền">
                                        </div>
                                    </div>
                                    <div class="col-6 col--custom">
                                        <div class="form-group">
                                            <label for="floor">Tầng / Khu: </label>
                                            <input type="number" class="form-control trovie-input text-center" required
                                                   name="floor" placeholder="Nhập số tầng/khu/dãy" min="0">
                                        </div>
                                    </div>
                                    <div class="col-6 col--custom mb-0">
                                        <div class="form-group form-group--unit form-group--unit--meter">
                                            <label for="price">Diện tích: </label>
                                            <input type="number" class="form-control trovie-input text-center" required
                                                   name="acreage" placeholder="Nhập diện tích" min="0">
                                        </div>
                                    </div>
                                    <div class="col-6 col--custom mb-0">
                                        <div class="form-group form-group--unit form-group--unit--man">
                                            <label for="members">Số người ở tối đa: </label>
                                            <input type="number" class="form-control trovie-input text-center" required
                                                   name="members" placeholder="Tối thiểu 1" min="1">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-12 col--custom mb-0 mt-3">
                            <div class="form-group d-flex justify-content-end mb-0">
                                <button class="btn btn-base" type="submit">
                                    <i class="fa fa-floppy-o" aria-hidden="true"></i> Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </x-main-card>
        </div>
    </div>
</div>
