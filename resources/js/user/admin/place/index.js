import nestable from 'nestable';

document.addEventListener('DOMContentLoaded', () => {
    initPlaceList();
    initEditModal();
})

function initPlaceList() {
    let placeList = document.getElementById('place-list');

    if (placeList !== null) {
        placeList = $(placeList).nestable({
            maxDepth: 2,
            listNodeName: 'ul',
            expandBtnHTML: '<button class="btn btn-base" data-action="expand"><i class="fa fa-plus"></i></button>',
            collapseBtnHTML: '<button class="btn btn-base" data-action="collapse"><i class="fa fa-minus"></i></button>',
        });
        document.querySelectorAll('#place-list .dd-item  button[data-action="collapse"]').forEach(item => {
            item.click();
        })
    }
}

function initEditModal() {
    let editModal = document.getElementById('modal-edit'),
        editForm = editModal.querySelector('.form-edit'),
        editBtns = document.querySelectorAll('#place-list .btn-edit');

    editBtns.forEach(btn => {
        btn.onclick = (e) => {
            axios.get(editForm.dataset.getCity + '/' + btn.dataset.id).then(response => {
                editForm.querySelector('input[name=active]').checked = (response.data.data.active === 2);
                editForm.querySelector('input[name=name]').value = (response.data.data.name);
                editForm.action = editForm.dataset.updateCity + '/' + response.data.data.id;
                showBsModal(editModal);
                editModal.querySelector('img').src = response.data.data.avatar;
                editModal.querySelector('.trovie-avatar-upload').setAttribute(
                    'data-upload-url',
                    editForm.dataset.updateCityAvatar + '/' + response.data.data.id)
            }).catch(err => {
                console.log(err)
                tata.error('Thất bại', 'Không tải được dữ liệu.');
            })
        }
    });
}
