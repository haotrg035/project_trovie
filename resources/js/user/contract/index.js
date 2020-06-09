import {TrovieHelper} from "../TrovieHelper";

let hostSelect = document.querySelector('.form-contract-select-host select');
let modalContract = document.querySelector('#contract-modal');
let tableContractList = document.querySelector('#table-contract-list');
let dataTableContractList = null;
let dataTableOptions = {
    language: TrovieHelper._datatableGetLang(),
    columns: [
        {data: 'id'},
        {data: 'created_date'},
        {data: 'expire_date'},
        {data: 'deposit'},
        {data: 'b_full_name'},
        {data: 'b_phone'},
        {data: 'options'},
    ],
};

document.addEventListener('DOMContentLoaded', () => {
    initTableContract();
    if (hostSelect.querySelectorAll('option').length > 1) {
        hostSelect.click();
    }
});

function initTableContract() {
    dataTableContractList = $(tableContractList).DataTable(dataTableOptions);
    hostSelectHandler();
}

function showContract(id) {

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
    let editBtn = '<button class=" mx-auto btn d-flex btn-sm btn-base rounded btn-edit" data-id="' + id + '">' +
        '<i class="fa fa-eye" aria-hidden="true"></i>' +
        '</button>';
    return editBtn;
}

function hostSelectHandler() {
    hostSelect.addEventListener('click', () => {
        getContractsData(hostSelect.value).then((response => {
            if (response.data.data.length > 0) {
                try {
                    let data = [];
                    for (let _contract of response.data.data) {
                        data.push({
                            id: _contract.id,
                            created_date: _contract.created_at,
                            expire_date: _contract.expire_date,
                            deposit: _contract.deposit + ' đ',
                            b_full_name: _contract.b_full_name,
                            b_phone: _contract.b_phone,
                            options: renderRowOptionButtons(_contract.id)
                        })
                    }
                    loadDataTableContent(data);
                    initEventViewContract();
                } catch (e) {
                    console.log(e);
                }
            }
        })).catch(err => {
            // tata.warn('Trống','Chưa có hợp đồng nào!')
        })
    })
}

async function getContractsData($url) {
    return await axios.get($url, {
        params: {
            api_token: __apiToken
        }
    });
}
