<style>
    .invoice-list-table tbody td {
        text-align: center;
    }
</style>
<div class="modal fade" id="invoice-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0 rounded">
            <div class="modal-header no-print">
                <div>
                    <button class="btn btn-info rounded invoice-modal__print">
                        <i class="fa fa-print" aria-hidden="true"></i> IN
                    </button>
                    <button class="btn btn-success rounded invoice-modal__paid">
                        <i class="fa fa-check-circle" aria-hidden="true"></i> THANH TOÁN
                    </button>
                    <button class="btn btn-danger rounded invoice-modal__cancel">
                        <i class="fa fa-trash" aria-hidden="true"></i> HỦY HÓA ĐƠN</button>
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <article class="invoice-template">
                    <header>
                        <h3 class="w-100 text-center font-weight-bold">PHIẾU THU</h3>
                        <p class="font-weight-bold w-100 text-center">
                            Thời gian: <span class="invoice-created_at">.......................................</span>
                        </p>
                    </header>
                    <section>
                        <p>Phòng: <span class="invoice-name">...................</span></p>
                        <table cellpadding="5px" border="1" class="invoice-list-table w-100">
                            <thead>
                            <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">Nội dung</th>
                                <th class="text-center">Số lượng</th>
                                <th class="text-center">Đơn giá</th>
                                <th class="text-center">Thành tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="5">
                                    Tổng: <span class="invoice-total_amount">.........</span>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                        <div class="d-flex justify-content-around mt-3">
                            <div>
                                <p class="font-weight-bold text-center mb-0">ĐẠI DIỆN BÊN THUÊ</p>
                                <p class="text-center">(Kí xác nhận)</p>
                            </div>
                            <div>
                                <p class="font-weight-bold text-center mb-0">ĐẠI DIỆN BÊN CHO THUÊ</p>
                                <p class="text-center mb-5">(Kí, ghi rõ họ tên)</p>
                                <p class="">Họ và tên:
                                    ................................................................</p>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    </div>
</div>
