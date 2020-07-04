document.addEventListener('DOMContentLoaded', () => {
    initUnitModal()
    unitDeleteHandler();
})

function initUnitModal() {
    let modalUnit = document.getElementById('unit-modal');

    if (modalUnit !== null) {
        let editBtns = modalUnit.querySelectorAll('tr .btn-edit'),
            deleteBtn = modalUnit.querySelectorAll('tr .btn-delete');
        if (editBtns.length > 0) {
            editBtns.forEach(btn => {
                unitEditHandler(btn);
            })
        }
        if (deleteBtn.length > 0) {
            deleteBtn.forEach(btn => {
                unitDeleteHandler(btn);
            })
        }
    }
}

function unitEditHandler(btn) {
    btn.onclick = () => {
        let row = btn.parentNode.parentNode;
        let cancelBtn = row.querySelector('.btn-delete');
        if (btn.dataset.state === 'edit') {
            btn.dataset.state = 'done';
            row.querySelector('input').readOnly = false;
            btn.classList.remove('btn-warning');
            btn.classList.add('btn-success');
            btn.querySelector('.fa').className = 'fa fa-check';
            cancelBtn.dataset.state = 'cancel';
            cancelBtn.querySelector('.fa').className = 'fa fa-times';
        } else {
            if (row.querySelector('input').value.trim() !== '') {
                axios.post(row.dataset.updateUrl, {
                    _method: 'PATCH',
                    api_token: __apiToken,
                    name: row.querySelector('input').value.trim()
                }).then(response => {
                    btn.dataset.state = 'edit';
                    btn.classList.add('btn-warning');
                    btn.classList.remove('btn-success');
                    btn.querySelector('.fa').className = 'fa fa-pencil-square-o';
                    cancelBtn.dataset.state = 'delete';
                    cancelBtn.querySelector('.fa').className = 'fa fa-trash-o';
                    row.querySelector('input').readOnly = true;
                    row.querySelector('input').value = response.data.data.name;
                    row.querySelector('input').dataset.old = response.data.data.name;
                    tata.success('Thành công', response.data.message);

                    window.location.reload();
                }).catch(err => {
                    tata.error('Thất bại', err.data.message)
                })
            } else {
                tata.warn('Thông báo', 'Không được bỏ trống');
            }
        }
    }
}

function unitDeleteHandler(btn) {
    if (btn !== undefined) {
        btn.onclick = (e) => {
            let row = btn.parentNode.parentNode;
            let editBtn = row.querySelector('.btn-edit');

            if (btn.dataset.state === 'cancel') {
                e.preventDefault();
                e.stopPropagation();
                btn.dataset.state = 'delete';
                btn.querySelector('.fa').className = 'fa fa-trash-o';
                editBtn.dataset.state = 'edit';
                editBtn.classList.add('btn-warning');
                editBtn.classList.remove('btn-success');
                editBtn.querySelector('.fa').className = 'fa fa-pencil-square-o';
                row.querySelector('input').readOnly = true;
                row.querySelector('input').value = row.querySelector('input').dataset.old;
            } else {
                if (btn.dataset.state === 'delete') {
                    if (confirm('Bạn có chắc muốn xóa đơn vị này?')) {
                        let row = btn.parentNode.parentNode;
                        axios.post(row.dataset.deleteUrl, {
                            _method: 'DELETE',
                            api_token: __apiToken,
                        }).then(response => {
                            row.parentNode.removeChild(row);
                            tata.success('Thành công', response.data.message);
                        }).catch(err => {
                            tata.error('Thất bại', 'Xóa thất bại')
                        })
                    }
                }
            }

        }
    }
}
