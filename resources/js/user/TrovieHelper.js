import {success} from "tata-js";

class TrovieHelper {
    static _datatableGetLang(lang = 'vi') {
        if (lang === 'vi') {
            return {
                "decimal": "",
                "emptyTable": "Bảng trống",
                // "info": "Hiển thị từ _START_ đến _END_ trên tổng _TOTAL_ dòng",
                "info": "",
                "infoEmpty": "Không có dữ liệu",
                "infoFiltered": "(Lọc từ _MAX_ tổng số dòng)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Hện _MENU_ dòng",
                "loadingRecords": "Đang tải...",
                "processing": "Đang xử lý...",
                "search": "Tìm:",
                "zeroRecords": "Không có dữ liệu phù hợp với tìm kiếm",
                "paginate": {
                    "first": "Đầu tiên",
                    "last": "Cuối",
                    "next": "<i class='fa fa-angle-right'></i>",
                    "previous": "<i class='fa fa-angle-left'></i>"
                },
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }
        }
    }

    static convertStrToSlug(str) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    static formatCurrencyForm(str, letter = '.') {
        const __arrayStr = [];
        let x = str + '';
        x = x.replace(/[^0-9]/g, '');

        let $j = 0;
        for (let $i = x.length - 1; $i >= 0; $i--) {

            if ($j === 3) {
                __arrayStr.push(letter);
                __arrayStr.push(x[$i]);
                $j = 0;
            } else {
                __arrayStr.push(x[$i]);
            }
            $j++;
        }
        let temp = '';
        for (let $i = __arrayStr.length - 1; $i >= 0; $i--) {
            temp = temp + __arrayStr[$i];
        }

        return temp;
    }

    static parseCurrencyFormat(str) {
        return parseInt(str.replace(/\./gi, ''));
    }

    static splitDate(dateString, format = 'dmY') {
        let result = null;
        if (format === 'dmY') {
            let d = dateString.split(/[-,\/]/);
            result = {
                date: d[0],
                month: d[1],
                year: d[2]
            }
        } else {
            let d = new Date(dateString);
            result = {
                date: d.getUTCDate(),
                month: d.getUTCMonth() + 1,
                year: d.getUTCFullYear()
            }
        }
        return result;
    }
}

export {TrovieHelper};
