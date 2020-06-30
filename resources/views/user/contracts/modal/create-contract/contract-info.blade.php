<div class="modal fade" id="contract-create__info-modal" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-weight-bold color-base-text">KHÁCH THUÊ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="py-3">
                <div class="col-12 d-flex">
                    <button class="btn btn-base mr-2 d-flex d-md-block flex-column align-items-center" id="btn-collapse-user-search" data-toggle="collapse"
                            data-target="#collapse-user-search">
                        <i class="fa fa-search" aria-hidden="true"></i> <span>TÌM TÀI KHOẢN</span>
                    </button>
                    <button class="btn btn-base d-flex d-md-block flex-column align-items-center" id="btn-collapse-user-info" data-toggle="collapse"
                            data-target="#collapse-user-info">
                        <i class="fa fa-user-plus" aria-hidden="true"></i> <span>KHÁCH VÃN LAI</span>
                    </button>
                </div>
            </div>
            <div class="modal-body py-0">
                <div class="collapse" id="collapse-user-search">
                    <form action="{{route('api.user.get_by_token')}}" method="post"
                          class="form-inline py-3 row px-3 border-top">
                        <div class="col-lg-8 mx-auto col--custom mb-0">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text color-base-bg text-white">Mã mời</span>
                                </div>
                                <input type="text" class="form-control">
                                <div class="input-group-append">
                                    <button class="btn btn-base-outline rounded-right">
                                        <i class="fa fa-search" aria-hidden="true"></i> Tìm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="collapse" id="collapse-user-info">
                    <form action="#" method="post" class="py-3 row border-top">
                        <input type="hidden" name="customer_user_id">
                        <input type="hidden" name="user_type" value="2" required>
                        <div class="col-12">
                            <fieldset class="trovie-fieldset px-3 mb-3 pb-2">
                                <legend>THÔNG TIN KHÁCH THUÊ</legend>
                                <div class="row row--custom">
                                    <div class="col-lg-5 col--custom">
                                        <div class="form-group">
                                            <label>Tên khách thuê: </label>
                                            <input type="text" placeholder="Họ và tên khách thuê" required
                                                   autocomplete="off" class="form-control trovie-input"
                                                   name="b_full_name">
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-4 col--custom">
                                        <div class="form-group form-group--unit form-group--unit--date">
                                            <label>Ngày sinh: </label>
                                            <input type="text" autocomplete="off"
                                                   class="form-control trovie-input"
                                                   name="b_birthday">
                                        </div>
                                        <div class="invalid-feedback">
                                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            Vui lòng nhập đầy đủ thông tin
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-3 col--custom">
                                        <div class="form-group">
                                            <label for="" class="mr-2">Giới Tính: </label>
                                            <select type="text" class="form-control trovie-input" required
                                                    name="b_gender">
                                                <option value="1">Nam</option>
                                                <option value="2">Nữ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col--custom mb-0">
                                        <div class="form-group">
                                            <label>Nơi đăng ký hộ khẩu: </label>
                                            <input type="text" placeholder="Nơi đăng ký HK của khách thuê" required
                                                   autocomplete="off" class="form-control trovie-input"
                                                   name="b_address">
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col--custom mb-0">
                                        <div
                                            class="form-group form-group--unit form-group--unit--phone form-group--numeric">
                                            <label>Số điện thoại: </label>
                                            <input type="text" required
                                                   autocomplete="off" class="form-control trovie-input"
                                                   name="b_phone">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-12">
                            <fieldset class="trovie-fieldset px-3 pb-2">
                                <legend>CMND / CĂN CƯỚC</legend>
                                <div class="row row--custom">
                                    <div class="col-lg-4 col--custom mb-0">
                                        <div class="form-group form-group--numeric">
                                            <label>Số CMNĐ/Thẻ căn cước: </label>
                                            <input type="text" required
                                                   autocomplete="off" class="form-control trovie-input"
                                                   name="b_id_card">
                                        </div>
                                        <div class="invalid-feedback">
                                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            Số CMND / Căn cước không hợp lệ
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-4 col--custom mb-0">
                                        <div class="form-group form-group--unit form-group--unit--date">
                                            <label>Ngày Cấp: </label>
                                            <input type="text" autocomplete="off"
                                                   placeholder="Ghi trên CMND/TCC"
                                                   class="form-control trovie-input"
                                                   name="b_id_card_date">
                                        </div>
                                        <div class="invalid-feedback">
                                            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            Vui lòng nhập đầy đủ thông tin
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-4 col--custom mb-0">
                                        <div class="form-group">
                                            <label>Nơi cấp: </label>
                                            <input type="text" required
                                                   autocomplete="off" class="form-control trovie-input"
                                                   name="b_id_card_address">
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                        </div>
                        <div class="d-flex justify-content-end pt-3 px-3 w-100">
                            <button type="reset" class="btn btn-base mr-2">
                                <i class="fa fa-refresh" aria-hidden="true"></i> ĐIỀN LẠI
                            </button>
                            <button type="submit" class="btn btn-base">
                                TIẾP <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
