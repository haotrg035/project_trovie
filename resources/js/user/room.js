import * as FilePond from 'filepond';
import {TrovieHelper} from "./TrovieHelper";

let roomCards = document.querySelectorAll('.panel-content--room__list-room .room-card');
let roomModal = document.getElementById('panel-content--room__room-modal');
let addRoomModal = document.getElementById('add-room-modal');
let invoiceModal = document.getElementById('panel-content--room__invoice-modal');
let roomUsersModal = document.getElementById('panel-content--room__room-users-modal');
let roomAddUsersModal = document.getElementById('room-add-users-modal');

document.addEventListener('DOMContentLoaded', function () {
    initRoomImageUploader();
    initRoomModalHandler();
    initRoomTypeFilterHandler();
    initRoomInvoiceModalEventHandler();
    initRoomUsersModalHandler();
});

function initRoomImageUploader() {
    let uploaderInput = document.querySelector('#file-gallery');
    FilePond.create(uploaderInput, TrovieHelper.getOptionsForFIlepondInstance(uploaderInput));
}

function initRoomModalHandler() {
    document.querySelector('.btn-open-add-room-modal').addEventListener('click', function () {
        showAddRoomModal();
    });

    for (const roomCard of roomCards) {
        roomCard.addEventListener('click', function () {
            roomCardClickHandler(roomCard);
        })
    }
}

function roomCardClickHandler(card = document.querySelector('')) {
    if (typeof card !== 'object') {
        return false;
    }
    $(roomModal).modal('show');
}

function initRoomInvoiceModalEventHandler() {
    document.querySelector('.btn-create-room-invoice').addEventListener('click', function () {
        closeRoomModal();
        showInvoiceModal();
    });

    $(invoiceModal).on('hidden.bs.modal', function () {
        showRoomModal();
    })
}

function initRoomUsersModalHandler() {
    let isAddingUser = false;
    $(roomUsersModal).on('hidden.bs.modal', function () {
        if (!isAddingUser) {
            showRoomModal();
        }
    });

    $(roomAddUsersModal).on('hidden.bs.modal', function () {
        isAddingUser = false;
        showRoomUsersModal();
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