<div class="modal fade panel-content--room__invoice-modal"
     id="panel-content--room__invoice-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        LẬP PHIẾU THU
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <form action="" class="panel-content--room__invoice-modal__form">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group form-group--landscape">
                                        <label for="name">Tên khoản thu: </label>
                                        <input type="text" class="form-control trovie-input" name="name">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="name">Loại khoản thu: </label>
                                        <select class="form-control trovie-input" name="invoiceType">
                                            <option value="" disabled selected>- Chọn loại khoản thu</option>
                                            <option value="1">Tiền nhà định kì</option>
                                            <option value="2">Chi phí phát sinh</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="name" class="d-flex align-items-center">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;Ngày lập phiếu:
                                        </label>
                                        <input type="date" class="form-control trovie-input trovie-input--date"
                                               name="create-date"
                                               value="{{date('Y-m-d', time())}}" placeholder="Chọn ngày lập phiếu">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group form-group--unit">
                                        <label for="">Tổng số tiền phải thu: </label>
                                        <input type="text" class="form-control trovie-input"
                                               min="0" name="" readonly value="2.400.000 VNĐ">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group form-group--unit form-group--unit--price">
                                        <label for="">Số tiền đã thu: </label>
                                        <input type="text" class="form-control trovie-input" step="1000"
                                               min="0" name="">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="ghichu">Ghi chú: </label>
                                        <textarea type="text" class="form-control trovie-input" name="ghichu"
                                                  rows="1"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group invoice-entries">
                                <label for="ghichu"></label>
                                <table class="invoice-entries__table table table-sm rounded table-responsive w-100">
                                    <thead class="thead-light">
                                    <tr>
                                        <th style="width:10%">STT</th>
                                        <th style="width:34%">Khoản thu</th>
                                        <th style="width:10%">SL</th>
                                        <th style="width:15%" class="text-center">Đơn vị</th>
                                        <th style="width:26%">Số tiền (vnđ)</th>
                                        <th style="width:5%"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tiền nhà</td>
                                        <td class="text-center">1</td>
                                        <td class="text-center">Tháng</td>
                                        <td>1.200.000</td>
                                        <td>
                                            <button class="btn btn-sm btn-danger">
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tiền điện</td>
                                        <td class="text-center">20</td>
                                        <td class="text-center">Kv</td>
                                        <td>200.000</td>
                                        <td>
                                            <button
                                                class="invoice-entries__table__remove-entry-btn btn btn-sm btn-danger">
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tiền nước</td>
                                        <td class="text-center">20</td>
                                        <td class="text-center">m3</td>
                                        <td>150.000</td>
                                        <td>
                                            <button
                                                class="invoice-entries__table__remove-entry-btn btn btn-sm btn-danger">
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Đổ rác</td>
                                        <td class="text-center">1</td>
                                        <td class="text-center">Tháng</td>
                                        <td>50.000</td>
                                        <td>
                                            <button
                                                class="invoice-entries__table__remove-entry-btn btn btn-sm btn-danger">
                                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="invoice-entries__add-entry-form">
                                    <fieldset>
                                        <legend>Thêm Khoản Thu</legend>
                                        <div class="d-flex flex-wrap">
                                            <div class="col-4 col--custom mb-0">
                                                <div class="form-group">
                                                    <label for="ghichu">Khoản thu: </label>
                                                    <input type="text" class="form-control trovie-input" name="">
                                                </div>
                                            </div>
                                            <div class="col-2 col--custom mb-0">
                                                <div class="form-group">
                                                    <label for="ghichu">SL: </label>
                                                    <input type="number" class="form-control trovie-input" name="">
                                                </div>
                                            </div>
                                            <div class="col-2 col--custom mb-0">
                                                <div class="form-group">
                                                    <label for="ghichu">Đơn vị: </label>
                                                    <select class="form-control trovie-input" name="">
                                                        <option value="0" selected>Khác</option>
                                                        <option value="1">Tháng</option>
                                                        <option value="2">Kv</option>
                                                        <option value="3">m3</option>
                                                        <option value="4">Cái</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-4 col--custom mb-0">
                                                <div class="form-group form-group--unit form-group--unit--">
                                                    <label for="">Số tiền: </label>
                                                    <input type="text" class="form-control trovie-input" step="1000"
                                                           min="0" name=""  placeholder="1.000.000">
                                                </div>
                                            </div>
                                            <div class="col-12 col--custom d-flex justify-content-center">
                                                <button class="btn btn-sm btn-base">
                                                    <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Thêm
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-0">
                            <div
                                class="form-group d-flex justify-content-end pt-3 mb-0 border-top">
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
