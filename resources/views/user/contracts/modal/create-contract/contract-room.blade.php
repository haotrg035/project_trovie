<div class="modal fade" id="contract-create__room-modal" tabindex="-1">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title font-weight-bold color-base-text">PHÒNG TRỌ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="pt-3 mx-0 row border-bottom room-modal__select d-flex">
                <div class="col-6 col-lg-3">
                    <div class="form-group">
                        <label>Chọn nhà trọ</label>
                        <select name="host" class="custom-select rounded-0 trovie-input mr-lg-3" required>
                            <option value="" @if(count($data['list_host']) <= 0) selected @endif disabled>-- Chọn nhà
                                trọ --
                            </option>
                            @foreach($data['list_host'] as $host)
                                <option value="{{$host->id}}" @if($loop->first) selected @endif>
                                    {{$host->name}}
                                </option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <div class="form-group">
                        <label>Chọn phòng trọ</label>
                        <select name="room" class="custom-select rounded-0 trovie-input" required>
                            <option value="0" selected disabled>Chọn phòng trọ</option>
                            @foreach($data['list_host'] as $host)
                                @foreach($host['rooms'] as $room)
                                    <option data-get-url="{{route('api.user.host.room.show',[$host->id,$room->id])}}"
                                            value="{{$room->id}}"
                                            data-host-id="{{$host->id}}">
                                        {{$room->name}}
                                    </option>
                                @endforeach
                            @endforeach
                        </select>
                    </div>
                    <div class="invalid-feedback">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        Vui lòng chọn phòng trọ
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <div class="form-group form-group--unit form-group--unit--date">
                        <label>Thời hạn: </label>
                        <input type="text" class="form-control trovie-input" required
                               id="expire_date_picker">
                    </div>
                    <div class="invalid-feedback">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        Vui lòng nhập đầy đủ thông tin
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <div class="form-group form-group--unit form-group--unit--price">
                        <label>Đặt cọc: </label>
                        <input type="text" class="form-control trovie-input" required
                               id="deposit_input" value="0">
                    </div>
                    <div class="invalid-feedback">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        Vui lòng nhập đầy đủ thông tin
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <form action="{{route('api.user.contract.store')}}" method="post">
                    <input type="hidden" name="room_id" required>
                    <input type="hidden" name="host_id" required>
                    <input type="hidden" name="expired_at" required>
                    <input type="hidden" name="deposit" value="0" required>
                    <fieldset class="trovie-fieldset px-3 mb-3">
                        <legend>THÔNG TIN</legend>
                        <div class="row row--custom">
                            <div class="col-lg-4 col--custom">
                                <div
                                    class="form-group form-group--unit form-group--unit--price form-group--present form-group--landscape">
                                    <label>Giá phòng: </label>
                                    <input type="text" required readonly
                                           autocomplete="off" class="form-control trovie-input text-right"
                                           name="price">
                                </div>
                            </div>
                            <div class="col-lg-4 col--custom">
                                <div
                                    class="form-group form-group--unit form-group--unit--electric form-group--present form-group--landscape">
                                    <label>Giá điện: </label>
                                    <input type="text" required readonly
                                           autocomplete="off" class="form-control trovie-input text-right"
                                           name="cost_electric">
                                </div>
                            </div>
                            <div class="col-lg-4 col--custom">
                                <div
                                    class="form-group form-group--unit form-group--unit--water form-group--present form-group--landscape">
                                    <label>Giá nước: </label>
                                    <input type="text" required readonly
                                           autocomplete="off" class="form-control trovie-input text-right"
                                           name="cost_water">
                                </div>
                            </div>
                            <div class="col-lg-4 col--custom mb-0">
                                <div class="form-group form-group--unit form-group--unit--date form-group--present">
                                    <label>Ngày đóng tiền trọ: </label>
                                    <input type="text" disabled class="form-control trovie-input"
                                           name="date_payment">
                                </div>
                            </div>
                            <div class="col-lg-4 col--custom mb-0">
                                <div class="form-group form-group--unit form-group--unit--date form-group--present">
                                    <label>Ngày ghi điện: </label>
                                    <input type="text" disabled class="form-control trovie-input"
                                           name="date_note_electric">
                                </div>
                            </div>
                            <div class="col-lg-4 col--custom mb-0">
                                <div class="form-group form-group--unit form-group--unit--date form-group--present">
                                    <label>Ngày ghi nước: </label>
                                    <input type="text" disabled class="form-control trovie-input"
                                           name="date_note_water">
                                </div>
                            </div>
                            <div class="col-lg-4 col--custom mb-0">
                                <div class="form-group form-group--present">
                                    <label>Khách đang trọ: </label>
                                    <input type="text" disabled class="form-control trovie-input"
                                           name="current_members">
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="trovie-fieldset px-3">
                        <legend>TIỆN ÍCH</legend>
                        <div class="row row--custom room-info__services">
                            <div class="col-6 col-md-4 col--custom">
                                <div class="d-flex align-items-center border px-2 py-1">
                                    <i class="fa fa-dot-circle-o color-base-text" aria-hidden="true"></i>
                                    <p class="mb-0 pl-2 d-flex flex-column  w-100">
                                        <span class="service-name text-capitalize border-bottom">Wifi</span>
                                        <span class="service-price">Miến phí</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div class="row">
                        <div class="d-flex justify-content-end pt-3 px-3 w-100">
                            <button type="button" class="btn btn-base mr-2 btn-back">
                                <i class="fa fa-arrow-left" aria-hidden="true"></i> QUAY LẠI
                            </button>
                            <button type="submit" class="btn btn-base">
                                LẬP HỢP ĐỒNG <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
