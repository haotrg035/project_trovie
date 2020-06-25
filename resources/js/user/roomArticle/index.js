import {TrovieHelper} from "../TrovieHelper";

let tableArticle = document.querySelector('#table-articles');
let dataTableArticle = null;
let selectHost = document.querySelector('#select-host');
let selectRoom = document.querySelector('#select-room');
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

let modalArticle = document.querySelector('#modal-article');
let formArticle = modalArticle.querySelector('form');
let roomInfo = formArticle.querySelector('.room-info');
let roomServiceList = formArticle.querySelector('.room-card__service-list');
let presentRoomCard = document.querySelector('#present-room-card');
let exampleServiceItem = roomServiceList.querySelector('li');
let contentEditor = null;

document.addEventListener('DOMContentLoaded', () => {
    initArticleTable();
    initArticleModal();
    selectFormHandler(selectHost, true);
    // selectFormHandler(selectRoom);

    selectHost.onchange();
});

function initArticleTable() {
    dataTableArticle = $(tableArticle).DataTable(dataTableOptions);
    document.querySelector('#btn-create-article').onclick = () => {
        modalArticle.querySelector('.modal-header .modal-title').innerText = 'THÊM TIN ĐĂNG';
        formArticle.action = formArticle.getAttribute('data-create-url');
        formArticle.setAttribute('data-mode', 'create');
        selectHost.onchange();
        showBsModal(modalArticle);
    };
}

function updateRoomInfo(data = null) {
    roomInfo.querySelector('#floor').value = data !== null ? data.floor : '';
    roomInfo.querySelector('#members').value = data !== null ? data.members : '';
    if (data !== null && data.services.length > 0) {
        for (let service of data.services) {
            let newServiceItem = exampleServiceItem.cloneNode(true);
            newServiceItem.querySelector('.room-card__service-list__item__value').innerText = service.name;
            roomServiceList.append(newServiceItem);
        }
    }
    updateRoomCard(data);
}

function updateRoomCard(data) {
    presentRoomCard.querySelector('.room-card__address span').innerText = data !== null ? data.host.address : 'Địa chỉ';
    presentRoomCard.querySelector('.room-card__address').setAttribute('title', data !== null ? data.host.address : 'Địa chỉ');
    presentRoomCard.querySelector('.prop-list__item--price span').innerText = data !== null ? data.price + 'đ' : 'Giá';
    presentRoomCard.querySelector('.prop-list__item--acreage span').innerText = data !== null ? data.acreage : 'xx';
    presentRoomCard.querySelector('.prop-list__item.electric span').innerText = data !== null ? data.host.cost_electric + 'đ' : 'xxx.xxxđ';
    presentRoomCard.querySelector('.prop-list__item.water span').innerText = data !== null ? data.host.cost_water + 'đ' : 'xxx.xxxđ';
    presentRoomCard.querySelector('.room-card__host .host__name').innerText = data !== null ? data.host.name : 'Tên nhà trọ';
    if (data !== null && data.gallery !== null && data.gallery.length > 0) {
        presentRoomCard.querySelector('.room-card__image img').src = data.gallery[0].image;
        if (data.host.image !== null) {
            presentRoomCard.querySelector('.room-card__host .host__avatar').src = data.host.image;
        }
    } else {
        presentRoomCard.querySelector('.room-card__host .host__avatar img').src = '/storage/no_image.jpg';
        presentRoomCard.querySelector('.room-card__image img').src = '/storage/no_image.jpg';
    }
}

function initArticleModal() {
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        // ['blockquote', 'code-block'],

        // [{'header': 1}, {'header': 2}],               // custom button values
        [
            {'list': 'ordered'},
            {'list': 'bullet'}
        ],
        [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
        // [{'direction': 'rtl'}],                         // text direction

        [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
        [{'header': [1, 2, 3, 4, 5, 6, false]}],

        // [{'color': []}, {'background': []}],          // dropdown with defaults from theme
        // [{'font': []}],
        [{'align': []}],

        ['clean']                                         // remove formatting button
    ];
    contentEditor = new Quill(formArticle.querySelector('#article-content'), {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
    });

    formArticle.onsubmit = (e) => {
        e.preventDefault();
        let data = null;
        if (parseInt(selectRoom.value) === 0) {
            tata.warn('Thông báo', 'Vui lòng chọn phòng trọ!');
            return false;
        }
        if (contentEditor.root.innerHTML === '<p><br></p>') {
            formArticle.querySelector('input[name=content]').value = '';
        } else {
            formArticle.querySelector('input[name=content]').value = contentEditor.root.innerHTML.trim();
        }
        data = new FormData(formArticle);
        data.append('api_token', __apiToken);
        if (formArticle.getAttribute('data-mode') === 'update') {
            data.append('_method', 'PATCH');
        }
        axios.post(formArticle.action, data).then(response => {
            try {
                tata.success('Thông báo', response.data.message);
                hideBsModal(modalArticle);
            } catch (e) {
                console.log(e);
            }
        }).catch(err => {
            tata.error('Thông báo', err.response.data.message);
        })
    };

    formArticle.querySelector('input[name=title]').oninput = () => {
        let title = formArticle.querySelector('input[name=title]').value.trim();
        if (title === '') {
            title = 'Tiêu đề';
        }
        presentRoomCard.querySelector('.room-card__title').innerText = title;
        presentRoomCard.querySelector('.room-card__title').setAttribute('title', title);
    };

    selectRoom.onchange = () => {
        roomServiceList.innerHTML = '';
        if (parseInt(selectRoom.value) !== 0) {
            let url = formArticle.querySelector('select[name=room] option[value="' + selectRoom.value + '"]').getAttribute('data-get-room-url');
            axios.get(url, {
                params: {
                    api_token: __apiToken
                }
            }).then(response => {
                try {
                    updateRoomInfo(response.data.data);
                } catch (e) {
                    console.log(e);
                }
            }).catch(err => {
                tata.error('Thông báo', err.response.data.message);
            })
        } else {
            updateRoomInfo();
        }
    };

    $(modalArticle).on('hidden.bs.modal', () => {
        clearFormArticle();
        selectHost.onchange();
    });

    function clearFormArticle() {
        formArticle.querySelector('input[name=title]').value = '';
        formArticle.querySelector('input[name=title]').oninput();
        formArticle.querySelector('input[name=content]').value = '';
        contentEditor.root.innerHTML = '';
    }
}

function updateRoomSelectByHostSelect(_hostSelect, _roomSelect, pickedRoomIds = []) {
    let currentHostId = _hostSelect.value;
    let valueRoomSelect = _roomSelect.querySelectorAll('option:not([value="0"])');

    for (let option of valueRoomSelect) {
        option.style.display = 'none';
        option.setAttribute('selected', false);
    }
    for (let option of _roomSelect.querySelectorAll(`option[data-host-id="${currentHostId}"]`)) {
        if (pickedRoomIds.indexOf(parseInt(option.value)) < 0) {
            option.style.display = 'block';
        }
    }
    _roomSelect.selectedIndex = 0;
    _roomSelect.onchange();
}

window.deleteRoomArticle = (element) => {
    if (confirm('Bạn có chắc muốn xóa tin đăng này?')) {
        let url = element.getAttribute('data-delete-url');
        axios.post(url, {
            _method: 'DELETE',
            api_token: __apiToken
        }).then(response => {
            selectHost.onchange();
            tata.success('Thông Báo', response.data.message);
        }).catch(err => {
            tata.error('Thông báo', err.responsive.data.message);
        })
    }
};
window.refreshRoomArticle = (element) => {
    let url = element.getAttribute('data-refresh-url');
    console.log(url);
    axios.post(url, {
        _method: 'PATCH',
        api_token: __apiToken
    }).then(response => {
        tata.success('Thông Báo', response.data.message);
        selectHost.onchange();
    }).catch(err => {
        tata.error('Thông báo', err.response.data.message);
    })
};

window.editRoomArticle = (element) => {
    axios.get(
        element.getAttribute('data-view-url'),
        {
            params: {
                api_token: __apiToken
            }
        }
    ).then(response => {
        let option = selectRoom.querySelector('option[value="' + response.data.data.room_id + '"]');
        selectRoom.selectedIndex = option.index;
        option.style.display = 'block';
        selectRoom.onchange();
        modalArticle.querySelector('.modal-header .modal-title').innerText = 'CẬP NHẬT TIN ĐĂNG';
        formArticle.action = element.getAttribute('data-update-url');
        formArticle.setAttribute('data-mode', 'update');
        formArticle.querySelector('input[name=title]').value = response.data.data.title;
        formArticle.querySelector('input[name=title]').oninput();
        contentEditor.root.innerHTML = response.data.data.content;
        showBsModal(modalArticle);
    })
};

function renderRowOptionButtons(id, url) {
    return '<button onclick="refreshRoomArticle(this)" title="Làm mới tin" class=" mx-1 btn d-inline-flex btn-sm btn-success rounded" data-id="' + id + '"' +
        ' data-refresh-url="' + url.refresh + '">' +
        '<i class="fa fa-refresh" aria-hidden="true"></i>' +
        '</button>' +
        '<button onclick="editRoomArticle(this)" class=" mx-1 btn d-inline-flex btn-sm btn-base rounded btn-edit mb-1 mb-lg-0" data-id="' + id + '" ' +
        ' data-update-url="' + url.update + '" data-view-url="' + url.show + '">' +
        '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>' +
        '</button>' +
        '<button onclick="deleteRoomArticle(this)" class=" mx-1 btn d-inline-flex btn-sm btn-danger rounded btn-delete" data-id="' + id + '"' +
        ' data-delete-url="' + url.delete + '">' +
        '<i class="fa fa-trash" aria-hidden="true"></i>' +
        '</button>';
}

function loadDataTableContent(data) {
    dataTableArticle.clear();
    dataTableArticle.rows.add(data);
    dataTableArticle.draw();
}

function renderArticleTableRowRecords(_data, refreshRoomSelect) {
    let data = [];
    let room_ids = _data.map((val => {
        return val.room_id;
    }));
    if (_data.length > 0) {
        for (let _article of _data) {
            data.push({
                id: _article.id,
                title: _article.title,
                room_name: _article.room_name,
                created_at: _article.created_at,
                updated_at: _article.updated_at,
                options: renderRowOptionButtons(_article.id, _article.url)
            })
        }
    }
    loadDataTableContent(data);
    if (refreshRoomSelect) {
        updateRoomSelectByHostSelect(selectHost, selectRoom, room_ids)
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
                renderArticleTableRowRecords(response.data.data, resetRoomSelect);
            } catch (e) {
                console.log(e);
            }
        })).catch(err => {
            // tata.warn('Trống', 'Chưa có tin đăng nào!');
            console.log(err.response.data.message);
            renderArticleTableRowRecords([], resetRoomSelect);
        })
    }
}
