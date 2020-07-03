import nestable from 'nestable';

document.addEventListener('DOMContentLoaded', () => {
    initMenuList();
    initEditModal();
    initDeleteBtns();
})

function initMenuList() {
    let menuList = document.getElementById('menu-list');

    if (menuList !== null) {
        menuList = $(menuList).nestable({
            maxDepth: 3,
            listNodeName: 'ul',
            expandBtnHTML: '<button class="btn btn-base" data-action="expand"><i class="fa fa-plus"></i></button>',
            collapseBtnHTML: '<button class="btn btn-base" data-action="collapse"><i class="fa fa-minus"></i></button>',
        });

        $(menuList).on('change', function () {
            axios.post($(menuList).data('update-menu-pos'), {
                data: $(menuList).nestable('serialize'),
                // api_token: __apiToken,
                _method: 'PATCH'
            }).then(response => {
                tata.success('Thành công', 'Đã cập nhật menu.')
            }).catch(err => {
                tata.error('Thất bại', 'Cập nhật thất bại.')
            })
        })
    }
}

function initEditModal() {
    let editModal = document.getElementById('modal-edit'),
        editForm = editModal.querySelector('form'),
        editBtns = document.querySelectorAll('#menu-list .btn-edit');

    editBtns.forEach(btn => {
        btn.onclick = (e) => {
            axios.get(editForm.dataset.getMenu + '/' + btn.dataset.id).then(response => {
                editForm.querySelector('input[name=title]').value = response.data.data.title;
                editForm.querySelector('input[name=url]').value = response.data.data.url;
                editForm.querySelector('select[name=type]').selectedIndex
                    = editForm.querySelector('select[name=type] option[value="' + response.data.data.type + '"]').index;
                showBsModal(editModal);
                editForm.action = editForm.dataset.updateMenu + '/' + response.data.data.id;
            }).catch(err => {
                tata.error('Thất bại', 'Không tải được dữ liệu.');
            })
        }
    });
}

function initDeleteBtns() {
    let delBtns = document.querySelectorAll('#menu-list .btn-delete');

    delBtns.forEach(btn => {
        btn.onclick = () => {
            if (confirm('Bạn có chắc muốn xóa menu này?')) {
                axios.post(
                    document.getElementById('menu-list').dataset.deleteMenu + '/' + btn.dataset.id,
                    {
                        _method: 'DELETE'
                    }
                ).then(response => {
                    window.location.reload();
                }).catch(err => {
                    tata.error('Thất bại', 'Xóa không thành công.');
                })
            }
        }
    })
}
