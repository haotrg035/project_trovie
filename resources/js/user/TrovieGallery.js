class TrovieGallery {

    static initGallery(gallery) {
        let uploadUrl = gallery.getAttribute('upload-url');
        let uploadInput = gallery.querySelector('input[type=file]');
        let galleryItems = gallery.querySelectorAll('.gallery__item:not(.gallery__item--upload)');

        if (uploadInput !== null) {
            TrovieGallery.galleryInputOnChangeHandler(uploadInput, gallery, uploadUrl)
        }
        if (galleryItems.length > 0) {
            for (let item of galleryItems) {
                TrovieGallery.galleryRemoveBtnHandler(item);
            }
        }
    }

    static galleryInputOnChangeHandler(uploadInput, gallery, uploadUrl) {
        uploadInput.addEventListener('change', _.debounce(onClickHandler, 500));

        function onClickHandler() {
            let formData = new FormData(gallery.querySelector('form'));
            let newInput = TrovieGallery.cloneGalleryInput(uploadInput);

            formData.append('api_token', __apiToken);
            axios.post(uploadUrl, formData)
                .then(function (response) {
                    let item = TrovieGallery.renderGalleryItem(response.data.data);

                    TrovieGallery.galleryInputOnChangeHandler(newInput, gallery, uploadUrl);
                    gallery.querySelector('.row').append(item);
                    tata.success('Thành công', response.data.message);
                })
                .catch(function (response) {
                    tata.error('Lỗi', response.message);
                    TrovieGallery.galleryInputOnChangeHandler(newInput, gallery, uploadUrl);
                })
                .then(function () {
                    // always executed
                    uploadInput.parentNode.replaceChild(newInput, uploadInput);
                });
        }
    }

    static cloneGalleryInput(oldInput) {
        let newInput = document.createElement("input");

        newInput.type = "file";
        newInput.name = oldInput.name;
        newInput.className = oldInput.className || '';
        newInput.title = oldInput.title;
        newInput.accept = oldInput.accept;

        return newInput;
    }

    static renderGalleryItem(data, deleteUrl = null) {
        let itemWrapper = document.createElement('a');
        let item = document.createElement('div');
        let item__img = document.createElement('img');
        let item__remove = document.createElement('span');

        itemWrapper.className = 'col-6 col-lg-4 col--custom';
        itemWrapper.href = 'javascript:void(0)';
        item.className = 'gallery__item';
        item.setAttribute('delete-url', data.delete_url);
        item__img.className = 'item__image';
        item__img.src = data.image;
        item__remove.className = 'item__remove';
        item__remove.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        item.append(item__img);
        item.append(item__remove);
        TrovieGallery.galleryRemoveBtnHandler(item, deleteUrl);
        itemWrapper.append(item);

        return itemWrapper;
    }

    static galleryRemoveBtnHandler(item, deleteUrl = null) {
        item.querySelector('.item__remove').addEventListener('click', function () {
            if (confirm('Bạn có chắc muốn xóa ảnh này?')) {
                if (deleteUrl === null) {
                    deleteUrl = item.getAttribute('delete-url');
                }
                axios.delete(deleteUrl, {
                    data: {
                        api_token: __apiToken
                    }
                }).then(function (response) {
                    let parent = item.parentNode;
                    tata.success('Thành công', response.data.message);
                    parent.parentNode.removeChild(parent);
                }).catch(function (response) {
                    try {
                        tata.error('Lỗi', response.data.message);
                    } catch (e) {
                        console.log(e);
                    }
                })
            }
        })
    }
}

export {TrovieGallery};
