import {TrovieHelper} from "../TrovieHelper";

let dataListHostSelect = document.querySelector('.form-data-select-host select[name=host]');
let dataListRoomSelect = document.querySelector('.form-data-select-host select[name=room]');
let modalInvoice = document.querySelector('#invoice-modal');
let modalInvoiceCreate = document.querySelector('#invoice-create-modal');
let dataTableCreateInvoice = modalInvoiceCreate.querySelector('#invoice-entries__table');
let dataTableListDataElement = document.querySelector('#table-invoice-list');
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
        {data: 'state'},
        {data: 'options'},
    ],
    order: [
        // [0, 'desc'],
        [5, 'asc'],
        [0, 'desc'],
    ],
    columnDefs: [
        {
            targets: 1, // your case first column
            className: 'text-center',
        },
        {
            targets: 3, // your case first column
            className: 'text-center',
        },
        {
            targets: 2, // your case first column
            className: 'text-center',
        },
        {
            targets: 4, // your case first column
            className: 'text-center',
        },
        {
            targets: 5, // your case first column
            className: 'text-center',
            order: false
        },
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initTableDataList();
    initInvoiceListSelect();
    initInvoiceCreateModal();
});

function fillInvoiceTemplate(data) {
    let template = modalInvoice.querySelector('.invoice-template');

    template.querySelector('.invoice-created_at').innerText = data.created_at;
    template.querySelector('.invoice-name').innerText = data.room.name;
    template.querySelector('.invoice-total_amount').innerText = data.total_amount + ' đ';

    let stt = 1;
    template.querySelector('tbody').innerHTML = '';
    for (let item of data.details) {
        let row = document.createElement('tr');
        row.innerHTML = '<td>' + (stt++) + '</td>' +
            '<td>' + (item.service) + '</td>' +
            '<td>' + (item.quantity) + '</td>' +
            '<td>' + (item.price) + 'đ / ' + (item.unit) + '</td>' +
            '<td>' +
            TrovieHelper.formatCurrencyForm(TrovieHelper.parseCurrencyFormat(item.price) * (item.quantity))
            + 'đ</td>';
        template.querySelector('tbody').append(row);
    }
}

function showInvoiceModal(id) {
    axios.get(
        dataTableListDataElement.getAttribute('data-view-url') + '/' + id,
        {
            params: {
                api_token: __apiToken
            }
        }
    ).then(response => {
        if (response.data.data.state === 1) {
            modalInvoice.querySelector('.invoice-modal__paid').classList.remove('d-none');
            modalInvoice.querySelector('.invoice-modal__cancel').classList.remove('d-none');
        } else {
            modalInvoice.querySelector('.invoice-modal__paid').classList.add('d-none');
            modalInvoice.querySelector('.invoice-modal__cancel').classList.add('d-none');
        }
        fillInvoiceTemplate(response.data.data);
        showBsModal(modalInvoice);
    });
}

function initEventViewTemplate() {
    let editBtns = document.querySelectorAll('.btn-edit');

    if (editBtns.length > 0) {
        for (let btn of editBtns) {
            btn.addEventListener('click', () => {
                modalInvoice.setAttribute('data-invoice-id', btn.getAttribute('data-id'));
                showInvoiceModal(btn.getAttribute('data-id'))
            });
        }
    }
}

function initTableDataList() {

    dataTableListData = $(dataTableListDataElement).DataTable(dataTableOptions);
    modalInvoice.querySelector('.invoice-modal__print').onclick = () => {
        _.debounce(window.print(), 500);
    };
    modalInvoice.querySelector('.invoice-modal__paid').onclick = () => {
        if (confirm('Thanh toán hóa đơn này?')) {
            let url = dataTableListDataElement.getAttribute('data-paid-url') + '/' + modalInvoice.getAttribute('data-invoice-id');
            let data = {
                _method: 'PATCH',
                api_token: __apiToken
            };
            axios.post(url, data).then(response => {
                hideBsModal(modalInvoice);
                dataListRoomSelect.onchange();
                tata.success('Thông báo', response.data.message)
            }).catch(err => {
                tata.error('Thông báo', err.response.data.message);
            })
        }
    };
    modalInvoice.querySelector('.invoice-modal__cancel').onclick = () => {
        if (confirm('Hủy hóa đơn này?')) {
            let url = dataTableListDataElement.getAttribute('data-cancel-url') + '/' + modalInvoice.getAttribute('data-invoice-id');
            let data = {
                _method: 'PATCH',
                api_token: __apiToken
            };
            axios.post(url, data).then(response => {
                hideBsModal(modalInvoice);
                dataListRoomSelect.onchange();
                tata.success('Thông báo', response.data.message)
            }).catch(err => {
                tata.error('Thông báo', err.response.data.message);
            })
        }
    };
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

function initInvoiceCreateModal() {
    let invoiceForm = modalInvoiceCreate.querySelector('form');
    let invoiceTypeSelect = invoiceForm.querySelector('select[name=invoiceType]');
    let invoiceTable = invoiceForm.querySelector('table');
    let createModalButton = document.querySelector('#btn-show-create-modal');
    let invoiceTableAddRowForm = document.querySelector('.invoice-table-add-row-form');

    invoiceTypeSelect.onchange = () => {
        invoiceTable.querySelector('tbody').innerHTML = '';
        if (invoiceTypeSelect.value === '1') {
            let room_id = modalInvoiceCreate.querySelector('input[name=room_id]').value;
            let url = dataListRoomSelect.querySelector('option[value="' + room_id + '"]').getAttribute('data-view-url');
            axios.get(url, {
                params: {
                    api_token: __apiToken
                }
            }).then(response => {
                let roomPriceItem = {
                    cost: response.data.data.price,
                    name: 'Tiền phòng',
                    unit: {
                        name: 'Tháng'
                    }

                };
                invoiceTable.querySelector('tbody').append(renderInvoiceTableRow(roomPriceItem));
                for (let item of response.data.data.services) {
                    if (TrovieHelper.parseCurrencyFormat(item.cost) > 0) {
                        invoiceTable.querySelector('tbody').append(renderInvoiceTableRow(item));
                    }
                }
                updateInvoiceTotal();
            })
        }
        updateInvoiceTotal();
    };
    createModalButton.onclick = () => {
        if (dataListRoomSelect.value != 0) {
            modalInvoiceCreate.querySelector('form input[name=room_id]').value = dataListRoomSelect.value;
            invoiceTable.querySelector('tbody').innerHTML = '';
            updateInvoiceTotal();
            showBsModal(modalInvoiceCreate);
        } else {
            tata.warn('Thông báo', 'Vui lòng chọn 1 phòng!');
        }
    };

    invoiceForm.onsubmit = (e) => {
        e.preventDefault();

        if (invoiceTable.querySelectorAll('tbody tr').length > 0) {
            let data = {
                api_token: __apiToken,
                room_id: invoiceForm.querySelector('input[name=room_id]').value,
                total_amount: invoiceTable.querySelector('.invoice-total').getAttribute('data-price'),
                created_at: invoiceForm.querySelector('input[name=created_at]').value,
                updated_at: invoiceForm.querySelector('input[name=created_at]').value,
                details: []
            };

            for (let row of invoiceTable.querySelectorAll('tbody tr')) {
                data.details.push({
                    service: row.querySelector('.cell-name').innerText,
                    quantity: row.querySelector('.cell-quantity input').value,
                    price: parseInt(row.querySelector('.cell-quantity input').getAttribute('data-price')),
                    unit: row.querySelector('.cell-price').getAttribute('data-unit'),
                });
            }
            axios.post(invoiceForm.action, data).then(response => {
                hideBsModal(modalInvoiceCreate);
                dataListRoomSelect.onchange();
                tata.success('Thông báo', response.data.message);
            }).catch(err => {
                tata.error('Thông báo', err.response.data.message);
            })
        } else {
            tata.warn('Thông báo', 'Chưa có khoản thu nào trong hóa đơn!');
        }
    };

    invoiceTableAddRowForm.querySelector('.btn-add-service').onclick = () => {
        let data = {
            cost: invoiceTableAddRowForm.querySelector('input[name=cost]').value,
            name: invoiceTableAddRowForm.querySelector('input[name=name]').value.trim(),
            unit: {
                name: invoiceTableAddRowForm.querySelector('select[name=unit]').value
            },
        };
        if (data.cost !== '' && data.name !== '' && data.unit.name !== '') {
            invoiceTable.querySelector('tbody').append(renderInvoiceTableRow(data));
            updateInvoiceTotal();
        } else {
            tata.error('Thông báo', 'Vui lòng điền đầy đủ thông tin!');
        }
    };

    function renderInvoiceTableRow(item) {
        let row = document.createElement('tr');
        let cellName = document.createElement('td');
        let cellQuantity = document.createElement('td');
        let inputQuantity = document.createElement('input');
        let cellPrice = document.createElement('td');
        let cellTotal = document.createElement('td');
        let cellOptions = document.createElement('td');
        let removeButton = document.createElement('button');

        cellName.classList.add('cell-name');
        cellName.innerText = item.name;
        cellPrice.setAttribute('data-unit', item.unit.name);
        cellPrice.classList.add('cell-price');
        cellPrice.innerText = item.cost + 'đ/' + item.unit.name;
        inputQuantity.classList.add('trovie-input');
        inputQuantity.type = 'number';
        inputQuantity.min = 1;
        inputQuantity.value = 1;
        inputQuantity.style.width = '120px';
        inputQuantity.setAttribute('data-price', TrovieHelper.parseCurrencyFormat(item.cost) + '');
        updateRecordPriceOnChange(inputQuantity);
        cellQuantity.classList.add('cell-quantity');
        cellQuantity.append(inputQuantity);
        cellTotal.innerText = item.cost + ' đ';
        cellTotal.setAttribute('data-price', TrovieHelper.parseCurrencyFormat(item.cost));
        cellTotal.classList.add('cell-total');
        removeButton.classList.add('btn', 'btn-sm', 'btn-danger');
        removeButton.innerHTML = '<i class="fa fa-trash"></i>';
        removeButtonHandler(removeButton);
        cellOptions.classList.add('text-center');
        cellOptions.append(removeButton);

        row.append(cellName);
        row.append(cellQuantity);
        row.append(cellPrice);
        row.append(cellTotal);
        row.append(cellOptions);
        return row;
    }

    function updateRecordPriceOnChange(element) {
        element.onchange = () => {
            let total = parseInt(element.getAttribute('data-price')) * element.value;
            element.parentNode.parentNode.querySelector('.cell-total').innerText = TrovieHelper.formatCurrencyForm(total) + 'đ';
            updateInvoiceTotal();
        };
    }

    function updateInvoiceTotal() {
        let total = 0;
        for (let tr of invoiceTable.querySelectorAll('tbody tr')) {
            let price = parseInt(tr.querySelector('.cell-quantity input').getAttribute('data-price'));
            let quantity = tr.querySelector('.cell-quantity input').value;
            total += price * quantity;
        }
        invoiceTable.querySelector('.invoice-total').setAttribute('data-price', total);
        invoiceTable.querySelector('.invoice-total').innerText = TrovieHelper.formatCurrencyForm(total);
    }

    function removeButtonHandler(element) {
        element.onclick = () => {
            if (confirm('Xóa dòng này?')) {
                let parentTr = element.parentNode.parentNode;
                parentTr.parentNode.removeChild(parentTr);
                updateInvoiceTotal();
            }
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

function renderRowRecords(_data, refreshRoomSelect) {
    let data = [];
    if (_data.length > 0) {
        for (let _item of _data) {
            // let state = _item.active === 0 ? 'Kết thúc' : (_item.active === 1 && _item.state === true ? 'Hiệu lực' : 'Quá hạn');
            let state = null;
            if (_item.state === 1) {
                state = '<div class="d-none">1</div><div class="contract-state"><i title="Đang chờ" class="fa fa-dot-circle-o text-secondary"></i><span class="text-secondary"> Đang chờ</span></div>';
            } else if (_item.state === 2) {
                state = '<div class="d-none">2</div><div class="contract-state"><i title="Đã thu" class="fa fa-dot-circle-o text-success"></i><span class="text-success"> Thanh toán</span></div>';
            } else {
                state = '<div class="d-none">3</div><div class="contract-state""><i title="Đã hủy" class="fa fa-dot-circle-o text-danger"></i><span class="text-danger"> Đã Hủy</span></div>';
            }
            data.push({
                id: _item.id,
                // avatar:_item.avatar,
                created_date: _item.created_at,
                updated_date: _item.updated_at,
                name: _item.name,
                total_amount: _item.total_amount + ' đ',
                state: state,
                options: renderRowOptionButtons(_item.id)
            })
        }
    }
    loadDataTableContent(data);
    initEventViewTemplate();
    if (refreshRoomSelect) {
        updateRoomSelectByHostSelect(dataListHostSelect, dataListRoomSelect)
    }
}

async function getListData(select) {
    let url = '';
    if (select.value === '0') {
        url = dataListHostSelect.getAttribute('data-get-all-url') + '/' + dataListHostSelect.value;
    } else {
        url = select.getAttribute('data-get-all-url') + '/' + select.value;
    }
    return await axios.get(url, {
        params: {
            api_token: __apiToken
        }
    });
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
            tata.warn('Thông báo', err.response.data.message);
            renderRowRecords([], resetRoomSelect);
        })
    }
}

