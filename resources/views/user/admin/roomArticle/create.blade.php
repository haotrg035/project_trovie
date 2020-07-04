@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <x-panel-header panel-title="{{$data['view_name']}}">
        <div class="ml-auto">
            <button
                class="btn btn-base btn-save-article rounded-0 text-uppercase">
                <i class="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;LƯU
            </button>
        </div>
    </x-panel-header>
    <div class="row row--custom">
        <div class="col-12 col-md-8 col--custom">
            <x-main-card has-header="1">
                <x-slot name="title">Tin Đăng</x-slot>
                <form action="{{route('user.room_article.store')}}" method="post" class="form-create-article">
                    @csrf
                    <div class="form-group">
                        <label for="title">Tiêu đề</label>
                        <input type="text" name="title" id="title" class="form-control trovie-input"
                               placeholder="Tiêu đề tin đăng">
                    </div>
                    <div class="form-group">
                        <label for="content">Nội dung</label>
                        <textarea class="trovie-input form-control" name="content" id="content" rows="10"
                                  placeholder="Nội dung tin đăng..."></textarea>
                    </div>
                </form>
            </x-main-card>
        </div>
    </div>
@endsection
@section('script')
    <script src="{{mix('user/js/roomArticle/index.js')}}"></script>
@endsection
