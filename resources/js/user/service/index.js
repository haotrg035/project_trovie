import {TrovieHelper} from "../TrovieHelper";
import {error} from "tata-js";

let tableListService = null;
let processMode = document.querySelector('#process_mode');
let ServiceModal = document.querySelector('#service-modal');
let ServiceForm = document.querySelector('#service-modal__form');

$(document).ready(function ($) {
    initTableService();
    addServiceFormSubmitHandler();

    $(ServiceModal).on('hidden.bs.modal', function () {
        ServiceForm.querySelector('input[name=name]').value = '';
        ServiceForm.querySelector('input[name=name]').focus();
        ServiceForm.querySelector('input[name=cost]').value = '';
        ServiceForm.querySelector('select[name=unit_id]').selectedIndex = 0;
    });

    $('.service-add-btn').on('click', function () {
        processMode.value = 'create';
    })
});

function addServiceFormSubmitHandler() {
    ServiceForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let formData = new FormData(ServiceForm);

        formData.append('api_token', window.__apiToken);
        switch (processMode.value) {
            case "create": {
                createService(formData);
                break;
            }
            case "update": {
                updateService(formData);
            }
        }
    })
}

function renderRowData(data) {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCost = document.createElement('td');
    let tdUnit = document.createElement('td');
    let tdUtils = document.createElement('td');

    tdId.innerText = data.id;
    tdName.innerText = data.name;
    tdCost.innerText = data.cost + ' VNĐ';
    tdUnit.innerText = data.unit.name;

    tdCost.setAttribute('data-order', TrovieHelper.parseCurrencyFormat(data.cost));

    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdCost);
    tr.append(tdUnit);
    tr.append(tdUtils);
    return tr;
}

function createService(formData) {
    let createUrl = ServiceForm.getAttribute('data-create-url');

    axios.post(createUrl, formData)
        .then(function (response) {
            try {
                tata.success('Thành công', response.data.message);
                tableListService.rows.add($(renderRowData(response.data.data))).draw();
                $(ServiceModal).modal('hide');
            } catch (e) {
                console.log(e);
            }
        })
        .catch(function (error) {
            tata.error('Lỗi', error.response.data.message);
        });
}

function initTableService() {
    let rowEditBtn = $('#table-list-service .table-list-service__edit-btn');
    let rowDeleteBtn = $('#table-list-service .table-list-service__delete-btn');
    let options = {
        language: TrovieHelper._datatableGetLang(),
        columnDefs: [
            {targets: 3, orderable: true, searchable: false},
            {targets: 4, orderable: false, searchable: false},
        ]
    };

    tableListService = $('#table-list-service').DataTable(options);
    if (rowEditBtn.length > 0) {
        rowEditBtn.each((ind, el) => {
            $(el).on('click', function () {
                let rowParent = $(el).parents('tr')[0];
                editRowBtnHandler(rowParent.getAttribute('data-id'));
            })
        });
    }

    if (rowDeleteBtn.length > 0) {
        rowDeleteBtn.each((ind, el) => {
            $(el).on('click', function () {
                if (confirm('LƯU Ý! Dịch vụ này cũng sẽ bị xóa trong các nhà trọ đang liên kết với nó! Bạn chắc chứ?')) {
                    let rowParent = $(el).parents('tr')[0];
                    deleteRowBtnHandler(rowParent.getAttribute('data-id'));
                }
            })
        })
    }
}

function editRowBtnHandler(serviceId) {
    let getDataUrl = ServiceForm.getAttribute('data-view-url') + '/' + serviceId;

    axios.get(getDataUrl, {
        params: {
            api_token: __apiToken
        }
    }).then(function (response) {
        try {
            let currentUnitIndex = ServiceForm.querySelector('#unit_id option[value="' + response.data.data.unit_id + '"]').index;

            ServiceForm.querySelector('#name').value = response.data.data.name;
            ServiceForm.querySelector('#cost').value = response.data.data.cost;
            ServiceForm.querySelector('#unit_id').selectedIndex = currentUnitIndex;
            document.querySelector('#service_id').value = serviceId;
            processMode.value = 'update';
            $(ServiceModal).modal('show');
        } catch (e) {
            console.log(e)
        }
    });
}

function deleteRowBtnHandler(serviceId) {
    let actionUrl = ServiceForm.getAttribute('data-delete-url') + '/' + serviceId;

    axios.delete(actionUrl, {
        params: {
            api_token: __apiToken
        }
    }).then(function (response) {
        try {
            let parent = document.querySelector('#table-list-service tr[data-id="' + serviceId + '"]');

            parent.parentNode.removeChild(parent);
            tata.success('Thành công', response.data.message);
        } catch (e) {
            console.log(e);
        }
    }).catch(function (err) {
        console.log(err)
    });
}

function updateService(formData) {
    let updateURl = ServiceForm.getAttribute('data-update-url') + '/' + document.querySelector('#service_id').value;

    axios.post(updateURl, formData)
        .then(function (response) {
            console.log(response);

            try {
                let targetRow = document.querySelector('#table-list-service tr[data-id="' + response.data.data.id + '"]');

                targetRow.children[1].innerText = response.data.data.name;
                if (response.data.data.cost > 0) {
                    targetRow.children[2].innerText = response.data.data.cost + ' VNĐ';
                } else {
                    targetRow.children[2].innerText = 'Miễn phí';
                }
                targetRow.children[2].setAttribute('data-order', TrovieHelper.parseCurrencyFormat(response.data.data.cost));
                targetRow.children[3].innerText = response.data.data.unit.name;
                $(ServiceModal).modal('hide');
                tata.success('Thành công', response.data.message);
            } catch (e) {
                console.log(e);
            }
        })
        .catch(function (err) {
            tata.error('Lỗi', err.response.data.message)
        });
}


