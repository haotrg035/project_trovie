<div class="modal fade create-host-modal"
     id="create-host-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
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
                <form action="{{route('user.host.store')}}" method="POST" class="create-host-modal__form">
                    @csrf
                    <div class="row row--custom">
                        <div class="col-md-6">
                            <div class="row row--custom">
                                <div class="col-lg-8 col--custom">
                                    <div class="form-group">
                                        <label for="name">Tên khu trọ: </label>
                                        <input type="text"
                                               class="form-control trovie-input @if($errors->first('name')) is-invalid  @endif"
                                               name="name" id="name" placeholder="" required value="{{old('name')}}">
                                        @if($errors->first('name'))
                                            <div class="invalid-feedback">{{$errors->first('name')}}</div>
                                        @endif
                                    </div>
                                </div>
                                <div class="col-lg-4 col--custom">
                                    <div class="form-group">
                                        <label for="date_payment">Ngày thu tiền trọ:</label>
                                        <input type="number" min="1" max="31"
                                               class="form-control trovie-input @if($errors->first('date_payment')) is-invalid  @endif"
                                               name="date_payment" required value="{{old('date_payment')}}"
                                               id="date_payment" placeholder="Ngày trong tháng">
                                        @if($errors->first('date_payment'))
                                            <div class="invalid-feedback">{{$errors->first('date_payment')}}</div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="row row--custom">
                                <div class="col-lg-8 mb-0 col--custom">
                                    <div class="row row--custom">
                                        <div class="col-lg-6 col--custom">
                                            <div class="form-group">
                                                <label for="date_note_electric">Ngày Ghi Điện:</label>
                                                <input type="number" min="1" max="31"
                                                       class="form-control trovie-input @if($errors->first('date_note_electric')) is-invalid  @endif"
                                                       name="date_note_electric" id="date_note_electric" required
                                                       placeholder="Ngày trong tháng"
                                                       value="{{old('date_note_electric')}}">
                                                @if($errors->first('date_note_electric'))
                                                    <div
                                                        class="invalid-feedback">{{$errors->first('date_note_electric')}}</div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col--custom">
                                            <div class="form-group">
                                                <label for="date_note_water">Ngày Ghi Nước:</label>
                                                <input type="number" min="1" max="31"
                                                       class="form-control trovie-input @if($errors->first('date_note_water')) is-invalid  @endif"
                                                       name="date_note_water" id="date_note_water" required
                                                       placeholder="Ngày trong tháng"
                                                       value="{{old('date_note_water')}}">
                                                @if($errors->first('date_note_water'))
                                                    <div
                                                        class="invalid-feedback">{{$errors->first('date_note_water')}}</div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col--custom">
                                            <div
                                                class="form-group form-group--unit form-group--unit--electric form-group--unit--price">
                                                <label for="cost_electric">
                                                    <i class="fa fa-bolt text-warning" aria-hidden="true"></i>
                                                    &nbsp;Tiền Điện (VNĐ): </label>
                                                <input type="text" value="{{old('cost_electric')}}" required
                                                       class="form-control trovie-input @if($errors->first('cost_electric')) is-invalid  @endif"
                                                       name="cost_electric" id="cost_electric" placeholder="">
                                                @if($errors->first('cost_electric'))
                                                    <div class="invalid-feedback">
                                                        {{$errors->first('cost_electric')}}
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col--custom">
                                            <div
                                                class="form-group form-group--unit form-group--unit--water form-group--unit--price">
                                                <label for="cost_water">
                                                    <i class="fa fa-tint text-primary"></i>&nbsp;
                                                    Tiền Nước (VNĐ): </label>
                                                <input type="text"
                                                       class="form-control trovie-input  @if($errors->first('cost_water')) is-invalid  @endif"
                                                       name="cost_water" id="cost_water" placeholder="" required
                                                       value="{{old('cost_water')}}">
                                                @if($errors->first('cost_water'))
                                                    <div class="invalid-feedback">
                                                        {{$errors->first('cost_water')}}
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-0 col--custom">
                                    <div class="form-group d-flex flex-column pb-4 mb-0 h-100">
                                        <label for="desc">Mô Tả:</label>
                                        <textarea name="desc" id="desc" cols="30"
                                                  class="form-control trovie-input h-auto d-flex flex-fill mb-2 @if($errors->first('desc')) is-invalid  @endif"
                                                  placeholder="Mô tả ngắn về khu trọ">{{old('desc') || ''}}</textarea>
                                        @if($errors->first('desc'))
                                            <div class="invalid-feedback">
                                                {{$errors->first('desc')}}
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="row row--custom">
                                <div class="col-lg-4 col--custom">
                                    <div class="form-group">
                                        <label for="floors">Số tầng:</label>
                                        <input type="number" min="1" value="{{old('floors') || 1}}"
                                               class="form-control trovie-input @if($errors->first('floors')) is-invalid  @endif"
                                               name="floors" id="floors" required
                                               placeholder="Số tầng/khu của khu trọ.">
                                        @if($errors->first('floors'))
                                            <div class="invalid-feedback">
                                                {{$errors->first('floors')}}
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row row--custom">
                                <div class="col-12 col-lg-12 col--custom">
                                    <div class="form-group form-group">
                                        <label for="address">Địa chỉ:</label>
                                        <input type="text" class="form-control trovie-input" name="address"
                                               id="address" autocomplete="off" required value="{{old('address')}}"
                                               placeholder="Số nhà, quận, huyện...">
                                        <div class="position-relative">
                                            <ul class="address-result-list list-unstyled mb-0">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="data-address" id="data-address">
                                <input type="hidden" name="latitude" id="latitude">
                                <input type="hidden" name="longitude" id="longitude">
                                <input type="hidden" name="city_name" id="city_name">
                                <input type="hidden" name="district_name" id="district_name">
                                <div class="col-12 col--custom">
                                    <div id="form__map"
                                         class="form__map"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col--custom mb-0">
                            <div class="form-group d-flex justify-content-end pt-3 mb-0 border-top">
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
