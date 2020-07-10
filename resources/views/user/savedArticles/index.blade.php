@extends('user.master')
@section('site-title',$data['view_name'])
@section('panel-content')
    <x-panel-header panel-title="{{$data['view_name']}}">
        <div class="panel-content--room__header-tool">
            <button id="btn-create-article"
                    class="panel-content--room__header-tool__btn btn btn-base btn-open-add-room-modal rounded-0 text-uppercase">
                <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;THÊM<span
                    class="d-none d-lg-inline"> {{$data['view_name']}}</span>
            </button>
        </div>
    </x-panel-header>
    <div class="row row--custom">
        @foreach($data['followedArticles'] as $article)
            <div class="col-12 col-md-3 col--custom frontend-room-card">
                <x-front-end.room-card class="p-2" :article-detail="(array)$article"
                                       is-followed="true"></x-front-end.room-card>
            </div>
        @endforeach
    </div>
@endsection
@section('script')
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let roomCards = document.querySelectorAll('.room-card');
            if (roomCards.length > 0) {
                roomCards.forEach(roomCard => {
                    roomCard.querySelector('.room-card__follow').onclick = () => {
                        axios.get(roomCard.dataset.toggleFollow).then(response => {
                            tata.success('Thành công', response.data.message);
                            roomCard.querySelector('.room-card__follow .fa').classList.toggle('fa-bookmark');
                            roomCard.querySelector('.room-card__follow .fa').classList.toggle('fa-bookmark-o');
                        }).catch(err => {
                            tata.error('Thất bại', err.response.data.message);
                        })
                    }
                });
            }
        })
    </script>
@endsection
