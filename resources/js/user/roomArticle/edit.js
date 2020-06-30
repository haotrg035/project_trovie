import {TrovieHelper} from "../TrovieHelper";

let tableArticle = document.querySelector('#table-articles');
let dataTableArticle = null;
let selectHost = document.querySelector('.form-select-host select[name=host]');
let selectRoom = document.querySelector('.form-select-host select[name=room]');
let dataTableOptions = {
    responsive: true,
    autoWidth: true,
    language: TrovieHelper._datatableGetLang(),
    columns: [
        {data: 'id'},
        // {data: 'avatar'},
        {data: 'title'},
        {data: 'room_name'},
        {data: 'created_at'},
        {data: 'options'},
    ],
    order: [
        // [0, 'desc'],
        // [7, 'asc'],
        [0, 'desc'],
    ],
    columnDefs: [
        {
            targets: 1, // your case first column
            className: 'text-left',
        },
        {
            targets: 2, // your case first column
            className: 'text-left',
        },
        {
            targets: 3, // your case first column
            className: 'text-center',
        },
        {
            targets: 4, // your case first column
            className: 'text-center',
        },
    ]
};
document.addEventListener('DOMContentLoaded', () => {
    initArticleTable();
    selectFormHandler(selectHost, true);
    selectFormHandler(selectRoom);

    selectHost.onchange();
});

function initArticleTable() {
    dataTableArticle = $(tableArticle).DataTable(dataTableOptions);
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

function renderRowOptionButtons(id) {
    return '<button class=" mx-1 btn d-inline-flex btn-sm btn-base rounded btn-edit mb-1 mb-lg-0" data-id="' + id + '">' +
        '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>' +
        '</button>' +
        '<button class=" mx-1 btn d-inline-flex btn-sm btn-danger rounded btn-delete" data-id="' + id + '">' +
        '<i class="fa fa-trash" aria-hidden="true"></i>' +
        '</button>';
}

function loadDataTableContent(data) {
    dataTableArticle.clear();
    dataTableArticle.rows.add(data);
    dataTableArticle.draw();
}

function renderRowRecords(_data, refreshRoomSelect) {
    let data = [];
    if (_data.length > 0) {
        for (let _article of _data) {
            data.push({
                id: _article.id,
                title: _article.title,
                room_name: _article.room_name,
                created_at: _article.created_at,
                updated_at: _article.updated_at,
                options: renderRowOptionButtons(_article.id)
            })
        }
    }
    loadDataTableContent(data);
    if (refreshRoomSelect) {
        updateRoomSelectByHostSelect(selectHost, selectRoom)
    }
}

async function getListData(select) {
    let url = '';
    if (select.value === '0') {
        url = selectHost.getAttribute('data-get-articles-url') + '/' + selectHost.value;
    } else {
        url = select.getAttribute('data-get-articles-url') + '/' + select.value;
    }
    return await axios.get(url, {
        params: {
            api_token: __apiToken
        }
    });
}

function selectFormHandler(select, resetRoomSelect = false) {
    select.onchange = () => {
        getListData(select).then((response => {
            try {
                renderRowRecords(response.data.data, resetRoomSelect);
            } catch (e) {
                console.log(e);
            }
        })).catch(err => {
            tata.warn('Trống', 'Chưa có tin đăng nào!');
            renderRowRecords([], resetRoomSelect);
        })
    }
}
