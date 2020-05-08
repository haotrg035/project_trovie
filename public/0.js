(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/user/TrovieHelper.js":
/*!*******************************************!*\
  !*** ./resources/js/user/TrovieHelper.js ***!
  \*******************************************/
/*! exports provided: TrovieHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrovieHelper", function() { return TrovieHelper; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TrovieHelper = /*#__PURE__*/function () {
  function TrovieHelper() {
    _classCallCheck(this, TrovieHelper);
  }

  _createClass(TrovieHelper, [{
    key: "getDataTableLanguage",
    value: function getDataTableLanguage() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vi';

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
        };
      }
    }
  }, {
    key: "initGoogleMap",
    value: function initGoogleMap() {
      if ((typeof google === "undefined" ? "undefined" : _typeof(google)) !== 'object') {
        var script = document.createElement("script");
        var apiKey = document.querySelector('meta[name=ggmap-api-key]').getAttribute('content');
        script.type = "text/javascript";
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=window.initMap';
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
      }

      window.initMap = function () {
        var current = {
          lat: 10.1235905,
          lng: 105.2519962
        };
        var map = new google.maps.Map(document.getElementById('host-info__form-position__map'), {
          zoom: 10,
          center: current
        }); // The marker, positioned at current

        var marker = new google.maps.Marker({
          position: current,
          map: map
        });
      };
    }
  }], [{
    key: "getOptionsForFIlepondInstance",
    value: function getOptionsForFIlepondInstance(element) {
      var serverObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = {
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
        }];
      } else {
        options.files = null;
      }

      return options;
    }
  }, {
    key: "convertStrToSlug",
    value: function convertStrToSlug(str) {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase(); // xóa dấu

      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd'); // Xóa ký tự đặc biệt

      str = str.replace(/([^0-9a-z-\s])/g, ''); // Xóa khoảng trắng thay bằng ký tự -

      str = str.replace(/(\s+)/g, '-'); // xóa phần dự - ở đầu

      str = str.replace(/^-+/g, ''); // xóa phần dư - ở cuối

      str = str.replace(/-+$/g, ''); // return

      return str;
    }
  }, {
    key: "formatMoneyForm",
    value: function formatMoneyForm(str) {
      var array = [];
      var arraystr = [];
      var x = str;
      x = x.replace(/[^0-9]/g, '');
      var $j = 0;

      for (var $i = x.length - 1; $i >= 0; $i--) {
        if ($j === 3) {
          arraystr.push('.');
          arraystr.push(x[$i]);
          $j = 0;
        } else {
          arraystr.push(x[$i]);
        }

        $j++;
      }

      var temp = '';

      for (var _$i = arraystr.length - 1; _$i >= 0; _$i--) {
        temp = temp + arraystr[_$i];
      }

      return temp;
    }
  }]);

  return TrovieHelper;
}();



/***/ }),

/***/ "./resources/js/user/input.js":
/*!************************************!*\
  !*** ./resources/js/user/input.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrovieHelper */ "./resources/js/user/TrovieHelper.js");
/* harmony import */ var flatpickr_dist_l10n_vn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/l10n/vn */ "./node_modules/flatpickr/dist/l10n/vn.js");
/* harmony import */ var flatpickr_dist_l10n_vn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_vn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




document.addEventListener('DOMContentLoaded', function () {
  var priceInputs = document.querySelectorAll('.form-group--unit--price .trovie-input');
  var dateInputs = document.querySelectorAll('.trovie-input--date');

  if (priceInputs.length > 0) {
    var _iterator = _createForOfIteratorHelper(priceInputs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var input = _step.value;
        input.addEventListener('input', function (e) {
          this.value = _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__["TrovieHelper"].formatMoneyForm(this.value);
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  alert(1);

  if (dateInputs.length > 0) {
    var _iterator2 = _createForOfIteratorHelper(dateInputs),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _input = _step2.value;
        flatpickr__WEBPACK_IMPORTED_MODULE_2___default()(_input, {
          enableTime: false,
          dateFormat: "d / m / Y",
          locale: flatpickr_dist_l10n_vn__WEBPACK_IMPORTED_MODULE_1__["Vietnamese"]
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
});

/***/ })

}]);