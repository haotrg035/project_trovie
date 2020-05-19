<div class="trovie-gallery" data-upload-url="{{$uploadUrl}}">
    <div class="row row--custom">
        @if($uploadUrl)
            <div class="col-6 col-lg-4 col--custom">
                <div class="gallery__item gallery__item--upload">
                    <form action="" method="post" enctype="multipart/form-data" class="item__form">
                        <input type="file" name="image" title="Thêm ảnh">
                    </form>
                </div>
            </div>
        @endif
        @foreach($galleryItems as $item)
            <a href="javascript:void(0)" class="col-6 col-lg-4 col--custom">
                <div class="gallery__item"
                     data-delete-url="{{route('api.user.host.gallery_remove',[$item['host_id'],$item['id']])}}">
                    <img class="item__image" src="{{asset($item['image'])}}">
                    <span class="item__remove"><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </a>
        @endforeach
    </div>
</div>
