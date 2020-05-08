class TrovieHelper {
    static getOptionsForFIlepondInstance(element, serverObj = {}) {
        let options = {
            labelIdle: '<span class="btn btn-sm btn-base"> <i class="fa fa-upload" aria-hidden="true"></i> Duyệt ảnh </span>',
            labelFileLoading: 'Đang tải',
            labelFileProcessing: 'Đang upload',
            labelFileProcessingComplete: 'Upload thành công',
            labelFileProcessingAborted: 'Đã hủy upload',
            labelTapToCancel: 'Nhấn vào để hủy',
            labelTapToRetry: 'Nhấn để tải lại',
            labelFileLoadError: 'Có lỗi trong quá trình upload',
            stylePanelLayout: element.getAttribute('data-style-panel') || '',
            allowFilePoster: true,
            server: {
                url: serverObj.url || '/filepond/api',
                process: serverObj.process || '/process',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').attributes.content.value
                }
            }
        };
        if (element.hasAttribute('data-poster-src')) {
            options.files = [{
                source: '12345',
                options: {
                    type: 'local',
                    file: {
                        name: element.getAttribute('data-poster-name') || 'Ảnh',
                        size: element.getAttribute('data-poster-size') || 3001025,
                        type: 'image/jpg'
                    },
                    metadata: {
                        poster: element.getAttribute('data-poster-src')
                    }
                }
            }]
        } else {
            options.files = null;
        }
        return options;
    }

    getDataTableLanguage(lang = 'vi') {
        if (lang === 'vi') {
            return {
                "decimal": "",
                "emptyTable": "Bảng trống",
                "info": "Hiển thị từ _START_ đến _END_ trên tổng _TOTAL_ dòng",
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
                    "next": "Tiếp",
                    "previous": "Trước"
                },
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            }
        }
    }

    initGoogleMap() {
        if (typeof google !== 'object') {
            let script = document.createElement("script");
            let apiKey = document.querySelector('meta[name=ggmap-api-key]').getAttribute('content');
            script.type = "text/javascript";
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=window.initMap';
            script.defer = true;
            script.async = true;
            document.body.appendChild(script);
        }

        window.initMap = function () {
            const current = {lat: 10.1235905, lng: 105.2519962};
            const map = new google.maps.Map(
                document.getElementById('host-info__form-position__map'),
                {
                    zoom: 10,
                    center: current
                }
            );
            // The marker, positioned at current
            const marker = new google.maps.Marker({position: current, map: map});
        };
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

    static formatMoneyForm(str) {
        const array = [];
        const arraystr = [];
        let x = str;
        x = x.replace(/[^0-9]/g, '');

        let $j = 0;
        for (let $i = x.length - 1; $i >= 0; $i--) {

            if ($j === 3) {
                arraystr.push('.');
                arraystr.push(x[$i]);
                $j = 0;
            } else {
                arraystr.push(x[$i]);
            }
            $j++;
        }
        let temp = '';
        for (let $i = arraystr.length - 1; $i >= 0; $i--) {
            temp = temp + arraystr[$i];
        }

        return temp;
    }
}

export {TrovieHelper};
