let galleries = document.querySelectorAll('.trovie-gallery');
document.addEventListener('DOMContentLoaded', function () {
    if (galleries.length > 0) {
        for (let gallery of galleries) {
            let uploadUrl = gallery.getAttribute('data-upload-url');
            let uploadInput = gallery.querySelector('input[type=file]');
            let galleryItems = gallery.querySelectorAll('.gallery__item:not(.gallery__item--upload)');

            if (uploadInput !== null) {
                galleryInputOnChangeHandler(uploadInput, gallery, uploadUrl)
            }
            if (galleryItems.length > 0) {
                for (let item of galleryItems) {
                    galleryRemoveBtnHandler(item);
                }
            }
        }
    }
});

function galleryInputOnChangeHandler(uploadInput, gallery, uploadUrl) {
    uploadInput.addEventListener('change', function () {
        let formData = new FormData(gallery.querySelector('form'));
        let newInput = cloneGalleryInput(uploadInput);

        axios.post(uploadUrl, formData)
            .then(function (response) {
                let item = renderGalleryItem(response.data.data);

                galleryInputOnChangeHandler(newInput, gallery, uploadUrl);
                gallery.querySelector('.row').append(item);
                tata.success('Thành công', response.data.message);
            })
            .catch(function (response) {
                tata.error('Lỗi', response.message);
                galleryInputOnChangeHandler(newInput, gallery, uploadUrl);
            })
            .then(function () {
                // always executed
                uploadInput.parentNode.replaceChild(newInput, uploadInput);
            });
    })
}

function cloneGalleryInput(oldInput) {
    let newInput = document.createElement("input");

    newInput.type = "file";
    newInput.name = oldInput.name;
    newInput.className = oldInput.className || '';
    newInput.title = oldInput.title;

    return newInput;
}

function renderGalleryItem(data) {
    let itemWrapper = document.createElement('a');
    let item = document.createElement('div');
    let item__img = document.createElement('img');
    let item__remove = document.createElement('span');

    itemWrapper.className = 'col-6 col-lg-4 col--custom';
    itemWrapper.href = 'javascript:void(0)';
    item.className = 'gallery__item';
    item.setAttribute('data-delete-url', data.delete_url);
    item__img.className = 'item__image';
    item__img.src = data.image;
    item__remove.className = 'item__remove';
    item__remove.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    item.append(item__img);
    item.append(item__remove);
    galleryRemoveBtnHandler(item);
    itemWrapper.append(item);

    return itemWrapper;
}

function galleryRemoveBtnHandler(item) {
    item.querySelector('.item__remove').addEventListener('click', function () {
        if (confirm('Bạn có chắc muốn xóa ảnh này?')) {
            let deleteUrl = item.getAttribute('data-delete-url');
            axios.delete(deleteUrl)
                .then(function (response) {
                    let parent = item.parentNode;

                    tata.success('Thành công', response.data.message);
                    parent.parentNode.removeChild(parent);
                })
                .catch(function (response) {
                    tata.error('Lỗi', response.data.message);
                })
        }
    })
}
