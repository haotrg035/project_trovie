let uploaders = document.querySelectorAll('.trovie-avatar-upload');

document.addEventListener('DOMContentLoaded', function () {
    console.log(uploaders);
    if (uploaders.length > 0) {
        for (let uploader of uploaders) {
            let uploadInput = uploader.querySelector('input[type=file]');
            avatarInputOnChangeHandler(uploadInput, uploader)
        }
    }
});

function avatarInputOnChangeHandler(uploadInput, uploader) {
    uploadInput.addEventListener('change', function () {
        let formData = new FormData(uploader.querySelector('form'));
        let newInput = cloneFileInput(uploadInput);
        let uploadUrl = uploader.getAttribute('data-upload-url');

        formData.append('api_token', __apiToken);
        axios.post(uploadUrl, formData)
            .then(function (response) {

                avatarInputOnChangeHandler(newInput, uploader);
                uploader.querySelector('.upload__image img').src = response.data.data.image;
                tata.success('Thành công', response.data.message);
            })
            .catch(function (response) {
                tata.error('Lỗi', response.message);
                avatarInputOnChangeHandler(newInput, uploader);
            })
            .then(function () {
                // always executed
                uploadInput.parentNode.replaceChild(newInput, uploadInput);
            });
    })
}

function cloneFileInput(oldInput) {
    let newInput = document.createElement("input");

    newInput.type = "file";
    newInput.name = oldInput.name;
    newInput.className = oldInput.className || '';
    newInput.title = oldInput.title;

    return newInput;
}
