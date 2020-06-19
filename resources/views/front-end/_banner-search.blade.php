<section class="page-banner"
         style="background-image: url('{{asset('storage/banner.jpg')}}')">
    <div class="container">
        <form action="" class="search-form">
            <div class="search-form--wrapper">
                <div class="form-group form-group__district mb-0">
                    <select name="cty_id" class="form-control trovie-input">
                        <option value="0">Tỉnh / Thành Phố</option>
                    </select>
                </div>
                <div class="form-group form-group__city mb-0">
                    <select name="district_id" class="form-control trovie-input">
                        <option value="0">Quận / Huyện</option>
                    </select>
                </div>
                <div class="form-group form-group__search_key mb-0">
                    <input type="search" name="search_key" class="form-control trovie-input"
                           placeholder="Nhập Từ Khóa">
                </div>
                <div class="form-group form-group__submit-btn mb-0">
                    <button class="btn btn-base border-left-0" type="submit">
                        <i class="fa fa-search" aria-hidden="true"></i> TÌM KIẾM
                    </button>
                </div>
            </div>
        </form>
    </div>
</section>
