import {TrovieHelper} from "../TrovieHelper";

let dataListHostSelect = document.querySelector('.form-contract-select-host select[name=host]');
let dataListRoomSelect = document.querySelector('.form-contract-select-host select[name=room]');
let modalInvoice = document.querySelector('#invoice-modal');
let dataTableListData = null;
let dataTableOptions = {
    responsive: false,
    autoWidth: false,
    language: TrovieHelper._datatableGetLang(),
    columns: [
        {data: 'id'},
        // {data: 'avatar'},
        {data: 'created_date'},
        {data: 'updated_date'},
        {data: 'name'},
        {data: 'total_amount'},
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
    initInvoiceListSelect();
});

function initTableContract() {
    let createModalButton = document.querySelector('#btn-show-create-modal');

    dataTableListData = $('#table-invoice-list').DataTable(dataTableOptions);
    modalInvoice.querySelector('.contract-modal__print').onclick = () => {
        _.debounce(window.print(), 500);
    };
    createModalButton.onclick = () => {
        alert('show create modal');
    }
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

function initInvoiceListSelect() {
    dataListSelectHandler(dataListHostSelect, true);
    dataListSelectHandler(dataListRoomSelect);
    if (dataListHostSelect.querySelectorAll('option').length > 1) {
        dataListHostSelect.onchange();
    }
}

function showInvoiceModal(id) {
    axios.get(
        dataTableListData.getAttribute('data-view-url') + '/' + id,
        {
            params: {
                api_token: __apiToken
            }
        }
    ).then(response => {
        showBsModal(modalInvoice);
    });
}

function initEventViewContract() {
    let editBtns = document.querySelectorAll('.btn-edit');

    if (editBtns.length > 0) {
        for (let btn of editBtns) {
            btn.addEventListener('click', () => {
                showInvoiceModal(btn.getAttribute('data-id'))
            });
        }
    }
}

function loadDataTableContent(data) {
    dataTableListData.clear();
    dataTableListData.rows.add(data);
    dataTableListData.draw();
}

function renderRowOptionButtons(id) {
    return '<button class=" mx-auto btn d-flex btn-sm btn-base rounded btn-edit" data-id="' + id + '">' +
        '<i class="fa fa-eye" aria-hidden="true"></i>' +
        '</button>';
}

async function getListData(select) {
    let url = '';
    if (select.value === '0') {
        url = dataListHostSelect.getAttribute('data-get-contracts-url') + '/' + dataListHostSelect.value;
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
        updateRoomSelectByHostSelect(dataListHostSelect, dataListRoomSelect)
    }
}

function dataListSelectHandler(select, resetRoomSelect = false) {
    select.onchange = () => {
        getListData(select).then((response => {
            try {
                renderRowRecords(response.data.data, resetRoomSelect);
            } catch (e) {
                console.log(e);
            }
        })).catch(err => {
            tata.warn('Trống', 'Chưa có hóa đơn nào!');
            renderRowRecords([], resetRoomSelect);
        })
    }
}

