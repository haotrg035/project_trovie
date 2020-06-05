import {TrovieGallery} from "../TrovieGallery";

let roomCardList = document.querySelector('.panel-content--room__list-room');
let roomCards = null;
let ExampleRoomCard = document.querySelector('.panel-content--room__list-room .row div').cloneNode(true);
let ExampleRoomServiceItem = ExampleRoomCard.querySelector('.room-card__service-list li');
let ExampleRoomCardMemberItem = ExampleRoomCard.querySelector('.room-card__customer-list li');

let roomModal = document.getElementById('panel-content--room__room-modal');
let roomModalForm = document.querySelector('.panel-content--room__room-modal__form');
let roomModalGallery = roomModal.querySelector('.trovie-gallery');
let addRoomModal = document.getElementById('add-room-modal');
let addRoomModalForm = addRoomModal.querySelector('.add-room-modal__form');
let invoiceModal = document.getElementById('panel-content--room__invoice-modal');
let roomUsersModal = document.getElementById('panel-content--room__room-users-modal');
let roomUsersModalForm = roomUsersModal.querySelector('.room-users-modal__form');
let roomUsersModalList = document.querySelector('.modal-room-users__list');
let roomUsersModalUserItem = roomUsersModalList.querySelector('div').cloneNode(true);

document.addEventListener('DOMContentLoaded', function () {
    initRoomModalHandler();
    initAddRoomModalHandler();
    initRoomTypeFilterHandler();
    initRoomInvoiceModalEventHandler();
    initRoomUsersModalHandler();
    initRoomSearchHandler();
});

function initRoomSearchHandler() {
    let searchForm = document.querySelector('.panel-content--room__filter--search');
    let searchKey = '';
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        searchRooms();
    });
    searchForm.querySelector('input[type=search]').addEventListener('keydown', function () {
        _.delay(searchRooms, 500);
    });

    function searchRooms() {
        let resultList = [];

        searchKey = searchForm.querySelector('input[type=search]').value.toLowerCase();
        if (searchKey !== '') {
            for (let card of roomCards) {
                let cardTitle = card.querySelector('.room-card__id').innerText.toLowerCase();
                if (cardTitle.search(searchKey) !== -1) {
                    resultList.push(card);
                }
            }
        } else {
            resultList = roomCards;
        }
        for (let card of roomCards) {
            if (!card.parentNode.classList.contains('d-none')) {
                card.parentNode.classList.add('d-none');
            }
        }
        for (let card of resultList) {
            if (card.parentNode.classList.contains('d-none')) {
                card.parentNode.classList.remove('d-none');
            }
        }
    }
}

function getAllCurrrentRoomCards() {
    return roomCardList.querySelectorAll('.panel-content--room__list-room .room-card');
}

function resetRoomModalIdInput(value = null) {
    let _value = roomModal.querySelector('input[name=old_room_id]').value;
    if (value !== null) {
        _value = value;
    }
    roomModal.querySelector('input[name=room_id]').value = _value;
}

function fillRoomModalForm(data) {
    let roomModalFormServiceInputs = roomModalForm.querySelectorAll('.panel-content--room__room-modal__form__services input[type=checkbox]');
    roomModalForm.querySelector('input[name=old_room_id]').value = data.id;
    roomModalForm.querySelector('input[name=room_id]').value = data.id;
    roomModalForm.querySelector('input[name=name]').value = data.name;
    roomModalForm.querySelector('input[name=price]').value = data.price;
    roomModalForm.querySelector('input[name=floor]').value = data.floor;
    roomModalForm.querySelector('input[name=acreage]').value = data.acreage;
    roomModalForm.querySelector('input[name=members]').value = data.members;
    roomModalForm.querySelector('textarea[name=announcement]').innerText = data.announcement;
    roomModalForm.querySelector('input[name=notice]').checked = data.notice === 1;

    for (let input of roomModalFormServiceInputs) {
        input.checked = !!data.service_ids.includes(parseInt(input.value));
    }
}

function renderRoomModalGalleryItems(data) {
    let galleryListElement = roomModalGallery.querySelector('.row');
    let galleryItems = roomModalGallery.querySelectorAll('.gallery__item:not(.gallery__item--upload)');

    for (let item of galleryItems) {
        galleryListElement.removeChild(item.parentNode);
    }
    if (data.gallery.length > 0) {
        let deleteUrl = '';
        for (let item of data.gallery) {
            deleteUrl = roomModalGallery.getAttribute('data-delete-url') + '/' + item.id;
            let image = TrovieGallery.renderGalleryItem(item, deleteUrl);
            galleryListElement.append(image);
        }
    }
}

function initRoomModalGallery(data) {
    let uploadUrl = roomModalGallery.getAttribute('upload-url') + '/' + data.id;
    let uploadInput = roomModalGallery.querySelector('input[type=file]');

    TrovieGallery.galleryInputOnChangeHandler(uploadInput, roomModalGallery, uploadUrl);
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
            renderRoomModalGalleryItems(response.data.data);
            initRoomModalGallery(response.data.data);
            showBsModal(roomModal);
        } catch (e) {
            console.log(e);
        }
    }).catch(function (err) {
        try {
            tata.error('Lỗi', err.response.data.message);
        } catch (e) {
            console.log(e);
        }
    });
}

function updateCardServices(targetRoomCard, services) {
    let serviceList = targetRoomCard.querySelector('.room-card__service-list');

    serviceList.innerHTML = '';
    for (let service of services) {
        let _item = ExampleRoomServiceItem.cloneNode(true);
        if (_item.querySelector('.fa').classList.contains('fa-dollar')) {
            _item.querySelector('.fa').classList.remove('fa-dollar');
            _item.querySelector('.fa').classList.add('fa-dot-circle-o');
        }
        _item.querySelector('p').innerText = service.name;
        serviceList.append(_item);
    }
}

function updateCardMembers(targetRoomCard, members) {
    let MembersList = targetRoomCard.querySelector('.room-card__customer-list');

    MembersList.innerHTML = '';
    for (let member of members) {
        let _member = ExampleRoomCardMemberItem.cloneNode(true);
        _member.title = member.full_name;
        _member.querySelector('img').src = member.avatar;
        MembersList.append(_member);
    }
}

function updateCardData(data) {
    let targetRoomCard = document.querySelector('.room-card[data-id="' + data.id + '"]');

    targetRoomCard.querySelector('.room-card__id').innerText = data.name;
    targetRoomCard.querySelector('.property-list__item--price p .value__content').innerText = data.price;
    targetRoomCard.querySelector('.property-list__item--floor p .value__content').innerText = data.floor;
    targetRoomCard.querySelector('.property-list__item--members .current-users').innerText = data.total_users;
    targetRoomCard.querySelector('.property-list__item--members .max-users').innerText = data.members;
    targetRoomCard.querySelector('.property-list__item--acreage p .value__content').innerText = data.acreage;
    targetRoomCard.classList.remove('room-card--success', 'room-card--warning', 'room-card--danger');

    if (data.state === 1) {
        targetRoomCard.classList.add('room-card--success');
    } else if (data.state === 2) {
        targetRoomCard.classList.add('room-card--warning');
    } else {
        targetRoomCard.classList.add('room-card--danger');
    }

    if (data.services.length > 0) {
        updateCardServices(targetRoomCard, data.services);
    }
    if (typeof data.users !== undefined) {
        updateCardMembers(targetRoomCard, data.users);
    }
    roomCards = getAllCurrrentRoomCards();
}

function roomModalFormSubmitHandler() {
    let updateUrl = roomModalForm.action + '/' + roomModalForm.querySelector('input[name=room_id]').value;
    let formData = new FormData(roomModalForm);

    formData.append('_method', 'PATCH');
    formData.append('api_token', __apiToken);
    axios.post(updateUrl, formData).then(function (response) {
        try {
            tata.success('Thành Công', response.data.message);
            updateCardData(response.data.data);
        } catch (e) {
            console.log(e);
        }
    }).catch(function (err) {
        tata.error('Lỗi', err.response.data.message);
    })
}

function initRoomModalHandler() {
    document.querySelector('.btn-open-add-room-modal').addEventListener('click', function () {
        clearAddRoomModalFormFields();
        showBsModal(addRoomModal);
    });

    $(roomModal).on('hidden.bs.modal', function (e) {
        roomModal.querySelector('input[name=room_id]').value = '';
        resetRoomModalIdInput('');
    });

    // update room modal form
    roomModal.querySelector('.btn-room-modal-save').addEventListener('click', function (e) {
        roomModalFormSubmitHandler();
    });
    if (roomCards == null) {
        roomCards = getAllCurrrentRoomCards();
    }
    ExampleRoomCard.querySelector('.room-card__service-list').innerHTML = '';
    ExampleRoomCard.querySelector('.room-card__customer-list').innerHTML = '';
    if (ExampleRoomCardMemberItem.classList.contains('d-none')) {
        ExampleRoomCardMemberItem.classList.remove('d-none');
    }
    if (ExampleRoomServiceItem.classList.contains('d-none')) {
        ExampleRoomServiceItem.classList.remove('d-none');
    }
    ExampleRoomCard.querySelector('.room-card')
        .classList.remove('d-none', 'room-card--success', 'room-card--warning', 'room-card--danger');

    for (const roomCard of roomCards) {
        roomCard.addEventListener('click', function () {
            roomCardClickHandler(roomCard);
        })
    }
}

function clearAddRoomModalFormFields() {
    for (let checkBox of addRoomModalForm.querySelectorAll('input[type=checkbox]')) {
        checkBox.checked = false;
    }
    for (let textInput of addRoomModalForm.querySelectorAll('input[type=text],input[type=number]')) {
        textInput.value = '';
    }
}

function renderNewRoomCard(data) {
    let newCard = ExampleRoomCard.cloneNode(true);
    newCard.querySelector('.room-card').setAttribute('data-id', data.id);
    newCard.querySelector('.room-card').setAttribute(
        'data-view-url',
        roomCardList.getAttribute('data-room-view-url') + '/' + data.id
    );
    newCard.querySelector('.room-card').classList.add('room-card--success');
    newCard.querySelector('.room-card').addEventListener('click', function () {
        roomCardClickHandler(newCard.querySelector('.room-card'));
    });
    roomCardList.querySelector('.row').append(newCard);
    updateCardData(data);
}

function initAddRoomModalHandler() {
    let formData = null;

    addRoomModalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        formData = new FormData(addRoomModalForm);
        formData.append('api_token', __apiToken);
        axios.post(
            addRoomModalForm.getAttribute('action'),
            formData
        ).then(function (response) {
            try {
                tata.success('Thành công', response.data.message);
                hideBsModal(addRoomModal);
                //Render new room card!!!
                renderNewRoomCard(response.data.data);
            } catch (e) {
                console.log(e);
            }
        }).catch(function (error) {
            tata.error('Lỗi', error.response.data.message);
        })
    })
}

function initRoomInvoiceModalEventHandler() {
    document.querySelector('.btn-create-room-invoice').addEventListener('click', function () {
        hideBsModal(roomModal);
        showBsModal(invoiceModal);
    });

    $(invoiceModal).on('hidden.bs.modal', function () {
        resetRoomModalIdInput();
        showBsModal(roomModal);
    })
}

function fillRoomUserModalFormData(data) {
    roomUsersModalForm.querySelector('input[name=name]').value = data.name || '';
    roomUsersModalForm.querySelector('input[name=date_in]').value = data.dateIn || '';
    roomUsersModalForm.querySelector('input[name=phone]').value = data.phone || '';
    // roomUsersModalForm.querySelector('input[name=email]').value = data.email || '';
    roomUsersModalForm.querySelector('input[name=id_card]').value = data.idCard || '';
    roomUsersModalForm.querySelector('input[name=birthday]').value = data.birthday || '';
    roomUsersModalForm.querySelector('input[name=career]').value = data.career || '';
    roomUsersModalForm.querySelector('input[name=address]').value = data.address || '';

}

function initUserItemCardClick(element) {
    let userCard = element.querySelector('.list__user');

    element.addEventListener('click', function () {
        for (let user of roomUsersModalList.querySelectorAll('.list__user')) {
            user.classList.remove('active');
        }
        fillRoomUserModalFormData({
            name: userCard.getAttribute('data-name'),
            birthday: userCard.getAttribute('data-birthday'),
            phone: userCard.getAttribute('data-phone'),
            career: userCard.getAttribute('data-career'),
            // email: userCard.getAttribute('data-email'),
            idCard: userCard.getAttribute('data-id-card'),
            address: userCard.getAttribute('data-address'),
            dateIn: userCard.getAttribute('data-date-in'),
        });
        userCard.classList.add('active');
    })

}

function renderRoomUsersItem(data) {
    let _userItem = roomUsersModalUserItem.cloneNode(true);

    _userItem.querySelector('.user__avatar img').src = data.avatar;
    _userItem.querySelector('.user__name').innerText = data.full_name;
    _userItem.querySelector('.list__user').setAttribute('data-id', data.id);
    _userItem.querySelector('.list__user').setAttribute('data-name', data.full_name);
    _userItem.querySelector('.list__user').setAttribute('data-birthday', data.birthday);
    _userItem.querySelector('.list__user').setAttribute('data-career', data.detail.career);
    _userItem.querySelector('.list__user').setAttribute('data-email', data.email);
    _userItem.querySelector('.list__user').setAttribute('data-phone', data.detail.phone);
    _userItem.querySelector('.list__user').setAttribute('data-id-card', data.detail.id_card);
    _userItem.querySelector('.list__user').setAttribute('data-address', data.detail.address);
    _userItem.querySelector('.list__user').setAttribute('data-date-in', data.pivot.date_in);
    initUserItemCardClick(_userItem, data);

    return _userItem;
}

function fillRoomUserModalData() {
    let roomId = roomModalForm.querySelector('input[name=room_id]').value;
    let getUrl = document.querySelector('.room-card[data-id="' + roomId + '"]').getAttribute('data-view-url');

    axios.get(getUrl + '/members', {
        params: {
            api_token: __apiToken,
        }
    }).then(function (response) {
        try {
            roomUsersModalList.innerHTML = '';
            for (let user of response.data.data) {
                roomUsersModalList.append(renderRoomUsersItem(user));
            }
            roomUsersModalList.querySelector('.list__user').click();
        } catch (e) {
            console.log(e);
        }
    }).catch(function (err) {
        roomUsersModalList.innerHTML = '';
        tata.error('Lỗi', err.response.data.message);
    });
}

function initRoomUsersModalHandler() {
    $(roomUsersModal).on('hidden.bs.modal', function () {
        resetRoomModalIdInput();
        showBsModal(roomModal);
    });
    $(roomUsersModal).on('hidden.bs.modal', function () {
        fillRoomUserModalFormData({});
    });
    document.querySelector('.btn-room-users').addEventListener('click', function () {
        hideBsModal(roomModal);
        fillRoomUserModalData();
        showBsModal(roomUsersModal);
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
