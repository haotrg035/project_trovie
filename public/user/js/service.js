/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
    value: function initGoogleMap(element) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'window.initMap';
      var addressInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var latitudeInput = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var longitudeInput = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      if ((typeof google === "undefined" ? "undefined" : _typeof(google)) !== 'object') {
        var script = document.createElement("script");
        var apiKey = document.querySelector('meta[name=ggmap-api-key]').getAttribute('content');
        script.type = "text/javascript";
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&libraries=places&callback=' + callback;
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
      }

      window.initMap = function () {
        var current = {
          lat: 10.1235905,
          lng: 105.2519962
        };
        var map = new google.maps.Map(element, {
          zoom: 10,
          center: current
        }); // The marker, positioned at current

        var marker = new google.maps.Marker({
          position: current,
          map: map
        });
        return map;
      };

      window.initialize = function () {
        // $('form').on('keyup keypress', function (e) {
        //     var keyCode = e.keyCode || e.which;
        //     if (keyCode === 13) {
        //         e.preventDefault();
        //         return false;
        //     }
        // });
        var locationInputs = document.getElementById("address");
        var autocompletes = [];
        var geocoder = new google.maps.Geocoder();
        var input = locationInputs;
        var fieldKey = input.id.replace("-input", "");
        var isEdit = latitudeInput.value != '' && longitudeInput.value != '';
        var latitude = parseFloat(latitudeInput.value) || 10.1235905;
        var longitude = parseFloat(longitudeInput.value) || 105.2519962;
        var map = new google.maps.Map(element, {
          center: {
            lat: latitude,
            lng: longitude
          },
          zoom: 13
        });
        var marker = new google.maps.Marker({
          map: map,
          position: {
            lat: latitude,
            lng: longitude
          }
        });
        marker.setVisible(isEdit);
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.key = fieldKey;
        autocompletes.push({
          input: input,
          map: map,
          marker: marker,
          autocomplete: autocomplete
        });

        var _loop = function _loop(i) {
          var input = autocompletes[i].input;
          var autocomplete = autocompletes[i].autocomplete;
          var map = autocompletes[i].map;
          var marker = autocompletes[i].marker;
          google.maps.event.addListener(autocomplete, 'place_changed', function () {
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            geocoder.geocode({
              'placeId': place.place_id
            }, function (results, status) {
              if (status === google.maps.GeocoderStatus.OK) {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                setLocationCoordinates(autocomplete.key, lat, lng);
              }
            });

            if (!place.geometry) {
              window.alert("No details available for input: '" + place.name + "'");
              input.value = "";
              return;
            }

            if (place.geometry.viewport) {
              map.fitBounds(place.geometry.viewport);
            } else {
              map.setCenter(place.geometry.location);
              map.setZoom(17);
            }

            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
          });
        };

        for (var i = 0; i < autocompletes.length; i++) {
          _loop(i);
        }
      };

      function setLocationCoordinates(key, lat, lng) {
        latitudeInput.value = lat;
        longitudeInput.value = lng;
      }
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
    key: "formatCurrencyForm",
    value: function formatCurrencyForm(str) {
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

/***/ "./resources/js/user/service.js":
/*!**************************************!*\
  !*** ./resources/js/user/service.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrovieHelper */ "./resources/js/user/TrovieHelper.js");

$(document).ready(function ($) {
  var tableListService = $('#table-list-service').dataTable({
    "language": new _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__["TrovieHelper"]().getDataTableLanguage()
  });
});

/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** multi ./resources/js/user/service.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/trovie/resources/js/user/service.js */"./resources/js/user/service.js");


/***/ })

/******/ });