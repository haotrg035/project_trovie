import {TrovieHelper} from "../TrovieHelper";

let contractListHostSelect = document.querySelector('.form-contract-select-host select[name=host]');
let contractListRoomSelect = document.querySelector('.form-contract-select-host select[name=room]');
let tableContractList = document.querySelector('#table-contract-list');
let contractTemplate = document.querySelector('.template-contract');
let modalContract = document.querySelector('#contract-modal');
let collapseRenewContract = document.querySelector('#collapse_contract_renew');
let contractCreate__infoModal = document.querySelector('#contract-create__info-modal');
let contractCreate__roomModal = document.querySelector('#contract-create__room-modal');
let dataTableContractList = null;
let dataTableOptions = {
    responsive: false,
    autoWidth: false,
    language: TrovieHelper._datatableGetLang(),
    columns: [
        {data: 'id'},
        // {data: 'avatar'},
        {data: 'created_date'},
        {data: 'updated_date'},
        {data: 'expired_date'},
        {data: 'deposit'},
        {data: 'b_full_name'},
        {data: 'b_phone'},
        {data: 'active'},
        {data: 'options'},
    ],
    order: [
        // [0, 'desc'],
        [7, 'asc'],
        [0, 'desc'],
    ],
    columnDefs: [
        {
            targets: 1, // your case first column
            className: 'text-center',
        },
        {
            targets: 2, // your case first column
            className: 'text-center',
        },
        {
            targets: 3, // your case first column
            className: 'text-center',
        },
        {
            targets: 7, // your case first column
            className: 'text-center',
        },
        {
            targets: 8, // your case first column
            className: 'text-center',
            order: false
        },
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initTableContract();
    contractsListSelectHandler(contractListHostSelect, true);
    contractsListSelectHandler(contractListRoomSelect);
    initContractCreateModal();
    if (contractListHostSelect.querySelectorAll('option').length > 1) {
        contractListHostSelect.onchange();
    }
    window.onresize = () => {
        let w = window.innerWidth;
        dataTableContractList.column(1).visible(w > 768);
        dataTableContractList.column(2).visible(w > 425);
        dataTableContractList.column(4).visible(w > 768);
        dataTableContractList.column(6).visible(w > 425);
    };
    $(window).trigger('resize');
});

function initTableContract() {
    dataTableContractList = $(tableContractList).DataTable(dataTableOptions);
    modalContract.querySelector('.contract-modal__print').onclick = () => {
        _.debounce(window.print(), 500);
    };
    modalContract.querySelector('.contract-modal__cancel').onclick = () => {
        if (confirm('Bạn có chắc muốn kết thúc hợp đồng này?')) {
            let data = {
                _method: 'PATCH',
                api_token: __apiToken,
                id: modalContract.getAttribute('data-contract-id')
            };
            axios.post(tableContractList.getAttribute('data-cancel-url'), data).then(response => {
                modalContract.querySelector('.contract-modal__cancel').classList.add('d-none');
                modalContract.querySelector('.contract-modal__renew').classList.add('d-none');
                tata.success('Thành công', response.data.message);
                contractListRoomSelect.onchange();
            }).catch(err => {
                tata.error('Lỗi', response.data.message);
            })
        }
    };
    collapseRenewContract.querySelector('form').onsubmit = (e) => {
        e.preventDefault();
        let expired_date = collapseRenewContract.querySelector('input').value;
        if (expired_date === '') {
            collapseRenewContract.querySelector('input').parentNode.classList.add('is-invalid');
            return false;
        } else {
            collapseRenewContract.querySelector('input').parentNode.classList.remove('is-invalid');
        }
        let url = tableContractList.getAttribute('data-renew-url') + '/' + modalContract.getAttribute('data-contract-id');
        let data = {
            _method: 'PATCH',
            api_token: __apiToken,
            expired_at: expired_date
        };
        axios.post(url, data).then(response => {
            hideBsModal(modalContract);
            contractListRoomSelect.onchange();
            tata.success('Thông Báo', response.data.message);
        }).catch(err => {
            tata.error('Thông Báo', err.response.data.message);
        })
    }
}

function fillContractInformation(data) {
    let createdAt = TrovieHelper.splitDate(data.created_at);
    let updatedAt = TrovieHelper.splitDate(data.updated_at);
    let expiredAt = TrovieHelper.splitDate(data.expired_at);

    modalContract.setAttribute('data-contract-id', data.id);
    collapseRenewContract.querySelector('input').value = data.expired_at;

    function fillItem(selector, data) {
        let item = contractTemplate.querySelector(selector);
        if (item !== null) {
            item.innerText = data;
        }
    }

    fillItem('.contract__content__address', data.address);
    for (let _key in createdAt) {
        fillItem('.contract__content__created_at-' + _key, updatedAt[_key]);
    }
    for (let _key in updatedAt) {
        fillItem('.contract__content__' + _key, updatedAt[_key]);
    }
    for (let _key in expiredAt) {
        fillItem('.contract__content__expired_at-' + _key, expiredAt[_key]);
    }
    for (let _key in data['parties']) {
        fillItem('.contract__content__' + _key, data['parties'][_key])
    }
    fillItem('.contract__content__room-address', data.room_detail.address);
    fillItem('.contract__content__room-price', TrovieHelper.formatCurrencyForm(data.room_detail.price));
    fillItem('.contract__content__room-cost_electric', TrovieHelper.formatCurrencyForm(data.room_detail.cost_electric));
    fillItem('.contract__content__room-cost_water', TrovieHelper.formatCurrencyForm(data.room_detail.cost_water));
    fillItem(
        '.contract__content__room-deposit',
        data.deposit === '0' ? 'Không' : TrovieHelper.formatCurrencyForm(data.deposit) + ' đ'
    );
}

function showContract(id) {
    axios.get(
        tableContractList.getAttribute('data-view-url') + '/' + id,
        {
            params: {
                api_token: __apiToken
            }
        }
    ).then(response => {
        if (response.data.data.active === 0) {
            modalContract.querySelector('.contract-modal__cancel').classList.add('d-none');
            modalContract.querySelector('.contract-modal__renew').classList.add('d-none');
        } else {
            modalContract.querySelector('.contract-modal__cancel').classList.remove('d-none');
            modalContract.querySelector('.contract-modal__renew').classList.remove('d-none');
        }
        fillContractInformation(response.data.data);
    });
    hideBsCollapse(collapseRenewContract);
    showBsModal(modalContract);
}

function initEventViewContract() {
    let editBtns = document.querySelectorAll('.btn-edit');

    if (editBtns.length > 0) {
        for (let btn of editBtns) {
            btn.addEventListener('click', () => {
                showContract(btn.getAttribute('data-id'))
            });
        }
    }
}

function loadDataTableContent(data) {
    dataTableContractList.clear();
    dataTableContractList.rows.add(data);
    dataTableContractList.draw();
}

function renderRowOptionButtons(id) {
    return '<button class=" mx-auto btn d-flex btn-sm btn-base rounded btn-edit" data-id="' + id + '">' +
        '<i class="fa fa-eye" aria-hidden="true"></i>' +
        '</button>';
}

function renderRowAvatar(data) {
    return '<img src="' + data.avatar + '" alt="' + data.b_full_name + '">';
}

function updateRoomSelectByHostSelect(_hostSelect, _roomSelect) {
    let currentHostId = _hostSelect.value;
    let valueRoomSelect = _roomSelect.querySelectorAll('option:not([value="0"])');

    for (let option of valueRoomSelect) {
        option.style.display = 'none';
        option.setAttribute('selected', false);
    }
    for (let option of _roomSelect.querySelectorAll(`option[data-host-id="${currentHostId}"]`)) {
        option.style.display = 'block';
    }
    _roomSelect.selectedIndex = 0;
}

async function getContractListData(select) {
    let url = '';
    if (select.value === '0') {
        url = contractListHostSelect.getAttribute('data-get-contracts-url') + '/' + contractListHostSelect.value;
    } else {
        url = select.getAttribute('data-get-contracts-url') + '/' + select.value;
    }
    return await axios.get(url, {
        params: {
            api_token: __apiToken
        }
    });
}

function renderRowRecords(_data, refreshRoomSelect) {
    let data = [];
    if (_data.length > 0) {
        for (let _contract of _data) {
            // let state = _contract.active === 0 ? 'Kết thúc' : (_contract.active === 1 && _contract.state === true ? 'Hiệu lực' : 'Quá hạn');
            let state = null;
            if (_contract.active === 0) {
                state = '<div class="contract-state"><i title="Kết thúc" class="fa fa-dot-circle-o text-secondary"></i><span class="text-secondary"> Kết thúc</span></div>';
            } else if (_contract.active === 1 && _contract.state === true) {
                state = '<div class="contract-state"><i title="Hiệu lực" class="fa fa-dot-circle-o text-success"></i><span class="text-success"> Hiệu lực</span></div>';
            } else {
                state = '<div class="contract-state""><i title="Quá hạn" class="fa fa-dot-circle-o text-danger"></i><span class="text-danger"> Quá hạn</span></div>';
            }
            data.push({
                id: _contract.id,
                // avatar:_contract.avatar,
                created_date: _contract.created_at,
                updated_date: _contract.updated_at,
                expired_date: _contract.expired_at,
                deposit: _contract.deposit === '0' ? 'Không' : _contract.deposit + ' đ',
                b_full_name: _contract.b_full_name,
                b_phone: _contract.b_phone,
                active: state,
                options: renderRowOptionButtons(_contract.id)
            })
        }
    }
    loadDataTableContent(data);
    initEventViewContract();
    if (refreshRoomSelect) {
        updateRoomSelectByHostSelect(contractListHostSelect, contractListRoomSelect)
    }
}

function contractsListSelectHandler(select, resetRoomSelect = false) {
    select.onchange = () => {
        getContractListData(select).then((response => {
            try {
                renderRowRecords(response.data.data, resetRoomSelect);
            } catch (e) {
                console.log(e);
            }
        })).catch(err => {
            tata.warn('Trống', 'Chưa có hợp đồng nào!');
            renderRowRecords([], resetRoomSelect);
        })
    }
}

function initContractCreateModal() {
    let collapseUserSearch = contractCreate__infoModal.querySelector('#collapse-user-search');
    let formUserSearch = contractCreate__infoModal.querySelector('form');
    let collapseUserInfo = contractCreate__infoModal.querySelector('#collapse-user-info');
    let formUserInfo = collapseUserInfo.querySelector('form');
    let formRoomInfo = contractCreate__roomModal.querySelector('form');
    let roomModalHostSelect = contractCreate__roomModal.querySelector('select[name=host]');
    let roomModalRoomSelect = contractCreate__roomModal.querySelector('select[name=room]');
    let formRoomInfoServiceList = formRoomInfo.querySelector('.room-info__services');
    let expiredDatePicker = contractCreate__roomModal.querySelector('#expire_date_picker');
    let depositInput = contractCreate__roomModal.querySelector('#deposit_input');
    let exampleRoomInfoServiceItem = formRoomInfoServiceList.querySelector('.col--custom');

    formRoomInfoServiceList.innerHTML = '';
    document.querySelector('#btn-collapse-user-search').onclick = () => {
    };
    formUserInfo.querySelector('button[type=reset]').onclick = () => {
        enableFormUserInfo();
        formUserInfo.querySelector('input[name=user_type]').value = 2;
        for (let input of formUserInfo.querySelectorAll('.is-invalid')) {
            input.classList.remove('is-invalid');
        }
        hideBsCollapse(collapseUserInfo);
        hideBsCollapse(collapseUserSearch);
    };
    document.querySelector('#show-contract-create-modal').onclick = () => {
        contractCreate__infoModal.querySelector('input[name=user_type]').value = 2;
        formUserInfo.querySelector('button[type=reset]').click();
        // formRoomInfo.querySelector('select[name=room]').onchange();
        showBsModal(contractCreate__infoModal);
    };
    formUserSearch.onsubmit = (e) => {
        e.preventDefault();
        let _token = formUserSearch.querySelector('input').value.trim();

        axios.get(
            formUserSearch.action,
            {
                params: {
                    token: _token,
                    api_token: __apiToken,
                }
            }
        ).then(response => {
            try {
                fillFormUserInfoData(response.data.data);
                disableFormUserInfo();
                showBsCollapse(collapseUserInfo);
            } catch (e) {
                console.log(e);
            }
        }).catch(err => {
            tata.error('Thông báo', err.response.data.message)
        });
    };
    formUserInfo.onsubmit = (e) => {
        e.preventDefault();

        if (validateFormUserInfo()) {
            hideBsModal(contractCreate__infoModal);
            showBsModal(contractCreate__roomModal);
        }
    };

    formRoomInfo.querySelector('.btn-back').onclick = () => {
        hideBsModal(contractCreate__roomModal);
        showBsModal(contractCreate__infoModal);
    };
    roomModalHostSelect.onchange = () => {
        updateRoomSelectByHostSelect(roomModalHostSelect, roomModalRoomSelect);
    };
    roomModalHostSelect.onchange();
    roomModalRoomSelect.onchange = () => {
        formRoomInfo.querySelector('input[name=room_id]').value = roomModalRoomSelect.value;
        if (roomModalHostSelect.value !== '' && roomModalHostSelect.value !== '0') {
            formRoomInfo.querySelector('input[name=host_id]').value = roomModalHostSelect.value;
        }
        if (roomModalRoomSelect.value !== '0') {
            let url = roomModalRoomSelect.querySelector('option[value="' + roomModalRoomSelect.value + '"]').getAttribute('data-get-url');
            axios.get(url,
                {
                    params: {
                        api_token: __apiToken
                    }
                }
            ).then(response => {
                fillFormRoomInfoData(response.data.data);
            })
        }
    };
    expiredDatePicker.oninput = () => {
        formRoomInfo.querySelector('input[name=expired_at]').value = expiredDatePicker.value;
    };
    depositInput.oninput = () => {
        formRoomInfo.querySelector('input[name=deposit]').value = depositInput.value;
    };
    formRoomInfo.onsubmit = (e) => {
        e.preventDefault();
        if (validateFOrmRoomInfo()) {
            let data;
            data = new FormData(formUserInfo);
            data.append('host_id', formRoomInfo.querySelector('input[name=host_id]').value);
            data.append('room_id', formRoomInfo.querySelector('input[name=room_id]').value);
            data.append('expired_at', formRoomInfo.querySelector('input[name=expired_at]').value);
            data.append('deposit', formRoomInfo.querySelector('input[name=deposit]').value);
            data.append('api_token', __apiToken);
            axios.post(formRoomInfo.getAttribute('action'), data).then(response => {
                try {
                    contractListRoomSelect.onchange();
                    hideBsModal(contractCreate__roomModal);
                    tata.success('Thông báo', response.data.message);
                    _.delay(() => {
                        showContract(response.data.data.id);
                    }, 300);
                } catch (e) {
                    console.log(e);
                }
            }).catch(err => {
                tata.error('Thông báo', err.response.data.message);
            });
        }
        return false;
    };

    function fillFormUserInfoData(data) {
        formUserInfo.querySelector('input[name=user_type]').value = 1;
        formUserInfo.querySelector('input[name=customer_user_id]').value = data.id;
        formUserInfo.querySelector('select[name=b_gender]').selectedIndex =
            formUserInfo.querySelector('select[name=b_gender] option[value="' + data.gender + '"]').index;
        for (let key in data) {
            if (key !== 'gender' && key !== 'id') {
                if (key === 'birthday' || key === 'id_card_date') {
                    formUserInfo.querySelector('input[name=b_' + key + ']').parentNode.querySelector('.flatpickr-input').value = data['key'];
                }
                formUserInfo.querySelector('input[name=b_' + key + ']').value = data[key];
            }
        }
    }

    function validateFormUserInfo() {
        let idCardInput = formUserInfo.querySelector('input[name=b_id_card]');
        let dateInputs = formUserInfo.querySelectorAll('.form-group--unit--date .trovie-input');

        if (idCardInput.value.trim().length !== 12) {
            idCardInput.parentNode.classList.add('is-invalid', 'mb-0');
            return false
        } else {
            idCardInput.parentNode.classList.remove('is-invalid', 'mb-0');
        }
        for (let input of dateInputs) {
            if (input.value.trim() === '') {
                input.parentNode.classList.add('is-invalid', 'mb-0');
                return false;
            } else {
                input.parentNode.classList.remove('is-invalid', 'mb-0');
            }
        }

        return true;
    }

    function changeStateFormUserInfoInput(prop = 'readOnly', value = true) {
        for (let input of formUserInfo.querySelectorAll('input,textarea')) {
            if (!input.classList.contains('form-group--unit--date')) {
                input[prop] = value;
            }
        }
    }

    function disableFormUserInfo() {
        changeStateFormUserInfoInput('readOnly', true);
        for (let row of collapseUserInfo.querySelectorAll('fieldset > .row')) {
            row.classList.add('disabled');
        }
        for (let input of formUserInfo.querySelectorAll('input.form-group--unit--date')) {
            input.disabled = true
        }
    }

    function enableFormUserInfo() {
        changeStateFormUserInfoInput('readOnly', false);
        for (let row of collapseUserInfo.querySelectorAll('fieldset > .row')) {
            row.classList.remove('disabled');
        }
        for (let input of formUserInfo.querySelectorAll('input.form-group--unit--date')) {
            input.disabled = false
        }
    }

    function fillFormRoomInfoData(data) {
        formRoomInfo.querySelector('input[name=price]').value = data.price;
        formRoomInfo.querySelector('input[name=cost_electric]').value = data.host.cost_electric;
        formRoomInfo.querySelector('input[name=cost_water]').value = data.host.cost_water;
        formRoomInfo.querySelector('input[name=date_payment]').value = data.host.date_payment;
        formRoomInfo.querySelector('input[name=date_note_electric]').value = data.host.date_note_electric;
        formRoomInfo.querySelector('input[name=date_note_water]').value = data.host.date_note_water;
        formRoomInfo.querySelector('input[name=current_members]').value = data.total_users + ' / ' + data.members;

        if (data.services.length > 0) {
            formRoomInfoServiceList.innerHTML = '';
            for (let service of data.services) {
                let newItem = exampleRoomInfoServiceItem.cloneNode(true);
                newItem.querySelector('span.service-name').innerText = service.name;
                newItem.querySelector('span.service-price').innerText = service.cost <= 0 ? 'Miễn phí' : service.cost + 'đ / ' + service.unit.name;
                formRoomInfoServiceList.append(newItem);
            }
        }
    }

    function validateFOrmRoomInfo() {
        if (formRoomInfo.querySelector('input[name=room_id]').value === '0' || formRoomInfo.querySelector('input[name=room_id]').value === '') {
            roomModalRoomSelect.parentNode.classList.add('is-invalid', 'mb-0');
            return false;
        }
        if (formRoomInfo.querySelector('input[name=expired_at]').value.trim() === '') {
            expiredDatePicker.parentNode.classList.add('is-invalid', 'mb-0');
            return false;
        }
        expiredDatePicker.parentNode.classList.remove('is-invalid', 'mb-0');
        roomModalRoomSelect.parentNode.classList.remove('is-invalid', 'mb-0');
        return true;
    }
}
