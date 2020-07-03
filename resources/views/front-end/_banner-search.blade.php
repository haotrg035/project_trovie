<section class="page-banner"
         style="background-image: url('{{asset(\App\Helper\TrovieFile::checkFile(config('global.app_banner')))}}')">
    <div class="container">
        <form action="/phong/tim-kiem" class="search-form">
            <div class="search-form--wrapper">
                <div class="form-group form-group__district mb-0">
                    <select name="city" class="form-control trovie-input">
                        <option value="">Tỉnh / Thành Phố</option>
                        @foreach($data['cities'] as $city)
                            <option value="{{$city['id']}}"
                                    @if(isset($_GET['city']) && intval($_GET['city']) === intval($city['id'])) selected @endif>
                                {{$city['name']}}
                            </option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group form-group__city mb-0">
                    <select name="district" class="form-control trovie-input">
                        <option value="">Quận / Huyện</option>
                        @foreach($data['cities'] as $city)
                            @foreach($city['districts'] as $district)
                                <option data-city="{{$city['id']}}" value="{{$district['id']}}"
                                        @if(isset($_GET['city']) && intval($_GET['city']) === intval($city['id'])) style="display: block" @else style="display: none" @endif
                                        @if(isset($_GET['district']) && intval($_GET['district']) === intval($district['id'])) selected @endif>
                                    {{$district['name']}}
                                </option>
                            @endforeach
                        @endforeach
                    </select>
                </div>
                <div class="form-group form-group__search_key mb-0">
                    <input type="search" name="q" class="form-control trovie-input"
                           placeholder="Nhập Từ Khóa" value="@if(!empty($_GET['q'])){{trim($_GET['q'])}}@endif">
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
