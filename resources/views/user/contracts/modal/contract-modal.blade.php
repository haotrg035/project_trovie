<div class="modal fade" id="contract-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0 rounded">
            <div class="modal-header no-print">
                <div>
                    <button class="btn btn-info rounded contract-modal__print">
                        <i class="fa fa-print" aria-hidden="true"></i> IN
                    </button>
                    <button class="btn btn-base rounded contract-modal__renew" data-toggle="collapse" style="display: none!important;"
                            data-target="#collapse_contract_renew">
                        <i class="fa fa-file-o" aria-hidden="true"></i> GIA HẠN HỢP ĐỒNG
                    </button>
                    <button class="btn btn-danger rounded contract-modal__cancel">KẾT THÚC HỢP ĐỒNG</button>
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div id="collapse_contract_renew" class="collapse in border-bottom">
                <div class="card-body">
                    <form action="" method="post" class="form-inline">
                        <div class="d-flex align-items-start">
                            <label class="mr-3 font-weight-bold">Thời hạn mới: </label>
                            <div>
                                <div class="form-group form-group--unit form-group--unit--date d-flex">
                                    <input type="text" class="form-control trovie-input" required name="expired_date">
                                </div>
                                <div class="invalid-feedback">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                    Vui lòng nhập đầy đủ thông tin
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-base btn-sm ml-3">GIA HẠN</button>
                    </form>
                </div>
            </div>
            <div class="modal-body">
                <article class="template-contract mx-auto"
                         style="font-family: Arial; width: 8.3in;">
                    <header class="contract__header mb-5">
                        <div class="header__swear">
                            <h5 class="w-100 text-center font-weight-bold">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h5>
                            <h5 class="w-100 text-center">Độc lập – Tự do – Hạnh phúc</h5>
                        </div>
                        <h4 class="header__title w-100 mt-4 text-center font-weight-bold">HỢP ĐỒNG THUÊ PHÒNG TRỌ</h4>
                    </header>
                    <section class="contract__body">
                        <p>Hôm nay ngày
                            <span class="contract__content__date">....</span> tháng <span
                                class="contract__content__month">....</span> năm <span
                                class="contract__content__year">....</span>, tại địa chỉ: <span
                                class="contract__content__address">...............................................................................................</span>
                        </p>
                        <p class="font-weight-bold">Chúng tôi gồm</p>
                        <p>1. Đại diện bên cho thuê phòng trọ (Bên A):</p>
                        <p>Ông/bà: <span class="contract__content__a_full_name">……………………………………………</span> sinh ngày:
                            <span
                                class="contract__content__a_birthday">..../..../......</span></p>
                        <p>Nơi đăng ký HK: <span class="contract__content__a_address">……………………………………………</span></p>
                        <p>CMND số: <span class="contract__content__a_id_card">.....</span>, cấp ngày <span
                                class="contract__content__a_id_card_date">......</span>, tại: <span
                                class="contract__content__a_id_card_address">......</span></p>
                        <p>Số điện thoại: <span class="contract__content__a_phone">......</span></p>
                        <p>2. Bên thuê phòng trọ (Bên B):</p>
                        <p>Ông/bà: <span class="contract__content__b_full_name">……………………………………………</span> sinh ngày:
                            <span
                                class="contract__content__b_birthday">..../..../......</span></p>
                        <p>Nơi đăng ký HK: <span class="contract__content__b_address">……………………………………………</span></p>
                        <p>CMND số: <span class="contract__content__b_id_card">.....</span>, cấp ngày <span
                                class="contract__content__b_id_card_date">......</span>, tại: <span
                                class="contract__content__b_id_card_address">......</span></p>
                        <p>Số điện thoại: <span class="contract__content__b_phone">......</span></p>
                        <p class="font-weight-bold">Chúng tôi tự nguyện thỏa thuận, cam kết và chịu trách nhiệm trước
                            pháp luật về các điều khoản sau đây:</p>
                        <p><span class="font-weight-bold">Điều 1.</span> Bên A đồng ý cho bên B thuê 01 phòng ở tại địa
                            chỉ: <span class="contract__content__room-address">....</span></p>
                        <p>Giá thuê: <span class="contract__content__room-price">………………….</span> đ/tháng</p>
                        <p>Hình thức thanh toán: <span class="contract__content__room-pay_method">Tiền mặt</span></p>
                        <p>Tiền điện: <span class="contract__content__room-cost_electric">....</span> đ/kwh tính theo
                            chỉ số
                            công tơ, thanh toán vào cuối các tháng.</p>
                        <p>Tiền nước: <span class="contract__content__room-cost_water">....</span> đ/m<sup>3</sup> thanh
                            toán vào đầu
                            các tháng.</p>
                        <p>Tiền đặt cọc: <span class="contract__content__room-deposit">Không</span></p>
                        <p>Hợp đồng có giá trị kể từ ngày <span class="contract__content__created_at-date">...</span>
                            tháng <span class="contract__content__created_at-month">...</span> năm <span
                                class="contract__content__created_at-year">...</span> đến ngày <span
                                class="contract__content__expired_at-date">...</span> tháng <span
                                class="contract__content__expired_at-month">...</span> năm <span
                                class="contract__content__expired_at-year">...</span></p>
                        <p class="font-weight-bold">Điều 2. TRÁCH NHIỆM CỦA CÁC BÊN</p>
                        <ul>
                            <li>
                                <p class="font-weight-bold">Trách nhiệm của bên A:</p>
                                <ul>
                                    <li>Tạo mọi điều kiện thuận lợi để bên B thực hiện theo hợp đồng.</li>
                                    <li>Cung cấp nguồn điện, nước, wifi cho bên B sử dụng.</li>
                                    <li>Sửa chữa những hư hỏng không do lỗi trực tiếp của Bên B gây ra.</li>
                                </ul>
                            </li>
                            <li>
                                <p class="font-weight-bold">Trách nhiệm của bên B:</p>
                                <ul>
                                    <li>Thanh toán đầy đủ các khoản tiền theo đúng thỏa thuận.</li>
                                    <li>Bảo quản các trang thiết bị và cơ sở vật chất của bên A trang bị cho ban đầu
                                        (làm hỏng
                                        phải sửa, mất phải đền).
                                    </li>
                                    <li>Không được tự ý sửa chữa, cải tạo cơ sở vật chất khi chưa được sự đồng ý của bên
                                        A.
                                    </li>
                                    <li> Bên B phải chấp hành mọi quy định của pháp luật Nhà nước và quy định của địa
                                        phương.
                                    </li>
                                    <li>Nếu bên B cho khách ở qua đêm thì phải báo và được sự đồng ý của chủ nhà đồng
                                        thời phải
                                        chịu trách nhiệm về các hành vi vi phạm pháp luật của khách trong thời gian ở
                                        lại.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p class="font-weight-bold">Điều 3. TRÁCH NHIỆM CHUNG</p>
                        <ul>
                            <li>Hai bên phải tạo điều kiện cho nhau thực hiện hợp đồng.</li>
                            <li>Trong thời gian hợp đồng còn hiệu lực nếu bên nào vi phạm các điều khoản đã thỏa thuận
                                thì bên còn lại có quyền đơn phương chấm dứt hợp đồng; nếu sự vi phạm hợp đồng đó gây
                                tổn thất cho bên bị vi phạm hợp đồng thì bên vi phạm hợp đồng phải bồi thường thiệt hại.
                            </li>
                            <li>Một trong hai bên muốn chấm dứt hợp đồng trước thời hạn thì phải báo trước cho bên kia
                                ít nhất 30 ngày và hai bên phải có sự thống nhất.
                            </li>
                            <li>Bên A phải trả lại tiền đặt cọc cho bên B.</li>
                            <li>Bên nào vi phạm điều khoản chung thì phải chịu trách nhiệm trước pháp luật.</li>
                            <li>Hợp đồng được lập thành 02 (hai) bản có giá trị pháp lý như nhau, mỗi bên giữ một bản.
                            </li>
                        </ul>
                        <div class="d-flex justify-content-between mt-4">
                            <p style="width: 15%" class="text-center font-weight-bold">
                                BÊN A
                            </p>
                            <p style="width: 15%" class="text-center font-weight-bold">
                                BÊN B
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    </div>
</div>
