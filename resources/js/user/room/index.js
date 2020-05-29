let roomCards = document.querySelectorAll('.panel-content--room__list-room .room-card');
let roomModal = document.getElementById('panel-content--room__room-modal');
let roomModalForm = document.querySelector('.panel-content--room__room-modal__form');
let addRoomModal = document.getElementById('add-room-modal');
let invoiceModal = document.getElementById('panel-content--room__invoice-modal');
let roomUsersModal = document.getElementById('panel-content--room__room-users-modal');
let roomAddUsersModal = document.getElementById('room-add-users-modal');

document.addEventListener('DOMContentLoaded', function () {
    initRoomModalHandler();
    initRoomTypeFilterHandler();
    initRoomInvoiceModalEventHandler();
    initRoomUsersModalHandler();
});

function fillRoomModalForm(data) {
    let roomModalFormServiceInputs = roomModalForm.querySelectorAll('.panel-content--room__room-modal__form__services input[type=checkbox]');
    roomModalForm.querySelector('input[name=old_room_id]').value = data.id;
    roomModalForm.querySelector('input[name=room_id]').value = data.id;
    roomModalForm.querySelector('input[name=name]').value = data.name;
    roomModalForm.querySelector('input[name=price]').value = data.price;
    roomModalForm.querySelector('input[name=floor]').value = data.floor;
    roomModalForm.querySelector('input[name=acreage]').value = data.acreage;
    roomModalForm.querySelector('input[name=members]').value = data.members;

    for (let input of roomModalFormServiceInputs) {
        input.checked = !!data.service_ids.includes(parseInt(input.value));
    }
}

function roomCardClickHandler(roomCard) {
    let getUrl = roomCard.getAttribute('data-view-url');

    axios.get(getUrl, {
        params: {
            api_token: __apiToken
        }
    }).then(function (response) {
        try {
            fillRoomModalForm(response.data.data);
            console.log(response);
            showBsModal(roomModal);
        } catch (e) {
            console.log(e);
        }
    }).catch(function (err) {
        tata.error('Lỗi', err.response.data.message);
    });
}

function initRoomModalHandler() {
    document.querySelector('.btn-open-add-room-modal').addEventListener('click', function () {
        showBsModal(addRoomModal);
    });

    $(roomModal).on('hidden.bs.modal', function (e) {
        roomModal.querySelector('input[name=room_id]').value = '';
        resetRoomModalIdInput('');
    });

    for (const roomCard of roomCards) {
        roomCard.addEventListener('click', function () {
            roomCardClickHandler(roomCard);
        })
    }
}

function resetRoomModalIdInput(value = null) {
    let _value = roomModal.querySelector('input[name=old_room_id]').value;
    if (value !== null) {
        _value = value;
    }
    roomModal.querySelector('input[name=room_id]').value = _value;
}

function initRoomInvoiceModalEventHandler() {
    document.querySelector('.btn-create-room-invoice').addEventListener('click', function () {
        closeRoomModal();
        showInvoiceModal();
    });

    $(invoiceModal).on('hidden.bs.modal', function () {
        resetRoomModalIdInput();
        showBsModal(roomModal);
    })
}

function initRoomUsersModalHandler() {
    let isAddingUser = false;

    $(roomUsersModal).on('hidden.bs.modal', function () {
        if (!isAddingUser) {
            resetRoomModalIdInput();
            showBsModal(roomModal);
        }
    });

    $(roomAddUsersModal).on('hidden.bs.modal', function () {
        isAddingUser = false;
        showBsModal(roomUsersModal);
    });

    document.querySelector('.btn-room-users').addEventListener('click', function () {
        closeRoomModal();
        showRoomUsersModal();
    });

    document.querySelector('.btn-add-user-modal').addEventListener('click', function () {
        isAddingUser = true;
        closeRoomUsersModal();
        showRoomAddUsersModal();
    });
}

function initRoomTypeFilterHandler() {
    for (let el of document.querySelectorAll('.panel-content--room__filter--room-type__item a')) {
        el.addEventListener('click', function (e) {
            (function (el) {
                const _listRoomType = ['success', 'warning', 'danger'];
                let _roomList = document.querySelectorAll('.room-card');
                let filterRoomType = el.getAttribute('data-room-type') || 'all';
                if (!_listRoomType.includes(filterRoomType)) {
                    for (let _el of _roomList) {
                        $(_el).parent().show();
                    }
                } else {
                    for (let _el of _roomList) {
                        if (_el.classList.contains('room-card--' + filterRoomType)) {
                            $(_el).parent().show();
                        } else {
                            $(_el).parent().hide();
                        }
                    }
                }
            })(el);
        });
    }
}

function closeRoomModal() {
    $(roomModal).modal('hide');
}

function showRoomModal() {
    $(roomModal).modal('show');
}

function closeInvoiceModal() {
    $(invoiceModal).modal('hide');
}

function showInvoiceModal() {
    $(invoiceModal).modal('show');
}

function closeRoomUsersModal() {
    $(roomUsersModal).modal('hide');
}

function showRoomUsersModal() {
    $(roomUsersModal).modal('show');
}

function closeRoomAddUsersModal() {
    $(roomAddUsersModal).modal('hide');
}

function showRoomAddUsersModal() {
    $(roomAddUsersModal).modal('show');
}

function closeAddRoomModal() {
    $(addRoomModal).modal('hide');
}

function showAddRoomModal() {
    $(addRoomModal).modal('show');
}
