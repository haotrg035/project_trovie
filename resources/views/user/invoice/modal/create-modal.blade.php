<div class="modal fade panel-content--room__invoice-modal"
     id="invoice-create-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
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
                <form action="{{route('api.user.invoice.store')}}" class="invoice-modal__form">
                    <input type="hidden" name="room_id">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-6 col-lg-4">
                                    <div class="form-group">
                                        <label for="name">Loại khoản thu: </label>
                                        <select class="form-control trovie-input" name="invoiceType">
                                            <option value="" disabled selected>- Chọn loại khoản thu</option>
                                            <option value="1">Tiền nhà định kì</option>
                                            <option value="2">Chi phí phát sinh</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-4">
                                    <div class="form-group form-group--unit form-group--unit--date">
                                        <label for="name" class="d-flex align-items-center ">
                                            Ngày lập phiếu:
                                        </label>
                                        <input type="date" class="form-control trovie-input"
                                               name="created_at"
                                               value="{{date('Y-m-d', time())}}" placeholder="Chọn ngày lập phiếu">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group invoice-entries">
                                <table id="invoice-entries__table" border="1" cellpadding="5px" class="mb-3 w-100">
                                    <thead>
                                    <tr>
                                        <th>Nội Dung</th>
                                        <th style="width: 15%;">Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                        <th style="width: 10%"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td colspan="5">Tổng: <span class="invoice-total"></span> đ</td>
                                    </tr>
                                    </tfoot>
                                </table>
                                <div class="invoice-table-add-row-form">
                                    <fieldset class="trovie-fieldset">
                                        <legend>Thêm Khoản Thu</legend>
                                        <div class="d-flex flex-wrap">
                                            <div class="col-4 col--custom mb-0">
                                                <div class="form-group">
                                                    <label for="ghichu">Khoản thu: </label>
                                                    <input type="text" class="form-control trovie-input" name="name">
                                                </div>
                                            </div>
                                            <div class="col-2 col--custom mb-0">
                                                <div class="form-group">
                                                    <label for="ghichu">SL: </label>
                                                    <input type="number" class="form-control trovie-input"
                                                           name="quantity">
                                                </div>
                                            </div>
                                            <div class="col-2 col--custom mb-0">
                                                <div class="form-group">
                                                    <label for="ghichu">Đơn vị: </label>
                                                    <select class="form-control trovie-input" name="unit">
                                                        @foreach($data['unit_list'] as $unit)
                                                            <option value="{{$unit->name}}">{{$unit->name}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-4 col--custom mb-0">
                                                <div class="form-group form-group--unit form-group--unit--price">
                                                    <label for="">Số tiền: </label>
                                                    <input type="text" class="form-control trovie-input" min="0"
                                                           name="cost">
                                                </div>
                                            </div>
                                            <div class="col-12 col--custom d-flex justify-content-center">
                                                <button class="btn btn-sm btn-base btn-add-service" type="button">
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
