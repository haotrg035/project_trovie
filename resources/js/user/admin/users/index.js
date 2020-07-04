import {TrovieHelper} from "../../TrovieHelper";

document.addEventListener('DOMContentLoaded', () => {
    let options = {
        language: TrovieHelper._datatableGetLang(),
        columnDefs: [
            {targets: 1, orderable: false, searchable: false},
        ]
    };

    $('#table-user-list').DataTable(options);

    document.querySelectorAll('.form-deleteUser').forEach(form => {
        form.onsubmit = e => {
            e.preventDefault();
            if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
                if (confirm('Xác nhận?')) {
                    form.submit();
                }
            }
        }
    })
})
