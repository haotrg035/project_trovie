<div class="modal fade"
     id="service-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content border-0">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        THÊM TIỆN ÍCH
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <form action="/" method="POST" id="service-modal__form"
                      data-view-url="{{route('api.user.service.show')}}"
                      data-create-url="{{route('api.user.service.store')}}"
                      data-update-url="{{route('api.user.service.update')}}"
                      data-delete-url="{{route('api.user.service.delete')}}">
                    <input type="hidden" id="process_mode">
                    <input type="hidden" id="service_id">
                    <div class="row row--custom">
                        <div class="col-12 col--custom">
                            <div class="form-group">
                                <label for="name">Tiện ích: </label>
                                <input type="text" class="form-control trovie-input"
                                       name="name" id="name" placeholder=""
                                       value="" autocomplete="off" required>
                            </div>
                        </div>
                        <div class="col-12 col--custom">
                            <div class="form-group form-group--unit form-group--unit--price">
                                <label for="cost">Phí: </label>
                                <input type="text" class="form-control trovie-input"
                                       name="cost" id="cost" placeholder="" required>
                            </div>
                        </div>
                        <div class="col-12 col--custom">
                            <div class="form-group form-group--unit">
                                <label for="unit_id">Đơn vị: </label>
                                <select type="text" class="form-control trovie-input" name="unit_id" id="unit_id"
                                        required>
                                    <option value="" selected disabled>- Đơn vị -</option>
                                    @foreach($data['units'] as $unit)
                                        <option value="{{$unit['id']}}">{{$unit['name']}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col--custom text-right mb-0">
                            <button class="btn btn-base">
                                <i class="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;LƯU
                            </button>
                        </div>
                    </div>
                </form>
            </x-main-card>
        </div>
    </div>
</div>
