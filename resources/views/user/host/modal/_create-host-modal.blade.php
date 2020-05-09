<div class="modal fade create-host-modal"
     id="create-host-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        THÊM KHU TRỌ
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <form action="" class="create-host-modal__form">
                    <div class="row row--custom">
                        <div class="col-md-12">
                            <div class="row row--custom">
                                <div class="col-lg-8 col--custom">
                                    <div class="form-group">
                                        <label for="">Tên khu trọ: </label>
                                        <input type="number" class="form-control trovie-input" name="cost_water"
                                               id="cost_water" placeholder="">
                                    </div>
                                </div>
                                <div class="col-lg-4 col--custom">
                                    <div class="form-group">
                                        <label for="date_payment">Ngày Thu Tiền:</label>
                                        <input type="number" min="1" max="31" class="form-control trovie-input"
                                               name="date_payment"
                                               id="date_payment" placeholder="Ngày trong tháng">
                                    </div>
                                </div>
                            </div>
                            <div class="row row--custom">
                                <div class="col-lg-8 mb-0 col--custom">
                                    <div class="row row--custom">
                                        <div class="col-lg-6 col--custom">
                                            <div class="form-group">
                                                <label for="date_payment">Ngày Ghi Điện:</label>
                                                <input type="number" min="1" max="31" class="form-control trovie-input"
                                                       name="date_payment"
                                                       id="date_payment" placeholder="Ngày trong tháng">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col--custom">
                                            <div class="form-group">
                                                <label for="date_note_electric">Ngày Ghi Nước:</label>
                                                <input type="number" min="1" max="31" class="form-control trovie-input"
                                                       name="date_note_water"
                                                       id="date_note_electric" placeholder="Ngày trong tháng">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col--custom">
                                            <div class="form-group form-group--unit form-group--unit--electric">
                                                <label for=""><i class="fa fa-bolt text-warning" aria-hidden="true"></i>
                                                    Tiền Điện
                                                    (VNĐ): </label>
                                                <input type="number"
                                                       class="form-control trovie-input"
                                                       name="cost_electricity" id="cost_electricity" placeholder="">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col--custom">
                                            <div class="form-group form-group--unit form-group--unit--water">
                                                <label for=""><i class="fa fa-tint text-primary" aria-hidden="true"></i>
                                                    Tiền Nước
                                                    (VNĐ): </label>
                                                <input type="number" class="form-control trovie-input" name="cost_water"
                                                       id="cost_water" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-0 col--custom">
                                    <div class="form-group d-flex flex-column pb-4 h-100">
                                        <label for="">Mô Tả:</label>
                                        <textarea name="desc" id="desc" cols="30"
                                                  class="form-control trovie-input h-auto d-flex flex-fill mb-2"
                                                  placeholder="Mô tả ngắn về khu trọ"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col--custom mb-0">
                            <div class="form-group d-flex justify-content-end pt-3 border-top">
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
