<div class="trovie-avatar-upload" data-upload-url="{{$uploadUrl}}">
    <form action="{{$uploadUrl}}" method="POST"
          enctype="multipart/form-data">
        @method($method)
        @csrf
        {{--                                <input class="filepond mb-0" type="file" name="avatar" id="file-avatar"--}}
        {{--                                       data-host-id="{{$data['data']['id']}}"--}}
        {{--                                       data-poster-src="{{asset($data['data']['image'])}}"--}}
        {{--                                       --}}{{--                                       data-poster-size="3001025"--}}
        {{--                                       data-max-file-size="2MB"--}}
        {{--                                       data-poster-name="Ảnh Đại Diện">--}}
        <figure class="upload__image">
            <img src="{{asset($image)}}">
        </figure>
        <input type="file" class="upload__file" name="avatar">
    </form>
</div>
