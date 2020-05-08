<div class="modal fade"
     id="add-service-modal" tabindex="-1" role="dialog" aria-hidden="true">
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
                <div class="row row--custom">
                    <div class="col-12 col--custom">
                        <div class="form-group">
                            <label for="name">Tiện ích: </label>
                            <input type="text" class="form-control trovie-input"
                                   name="name" id="name" placeholder=""
                                   value="Nguyen Van A">
                        </div>
                    </div>
                    <div class="col-12 col--custom">
                        <div class="form-group form-group--unit form-group--unit--price">
                            <label for="name">Phí: </label>
                            <input type="text" class="form-control trovie-input"
                                   name="" id="" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 col--custom">
                        <div class="form-group form-group--unit">
                            <label for="">Đơn vị: </label>
                            <select type="text" class="form-control trovie-input" name="" id="">
                                <option value="">- Đơn vị -</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col--custom text-right mb-0">
                        <button class="btn btn-base">
                            <i class="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;LƯU
                        </button>
                    </div>
                </div>
            </x-main-card>
        </div>
    </div>
</div>
