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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/user/room/index.js":
/*!*****************************************!*\
  !*** ./resources/js/user/room/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var roomCards = document.querySelectorAll('.panel-content--room__list-room .room-card');
var roomModal = document.getElementById('panel-content--room__room-modal');
var roomModalForm = document.querySelector('.panel-content--room__room-modal__form');
var addRoomModal = document.getElementById('add-room-modal');
var invoiceModal = document.getElementById('panel-content--room__invoice-modal');
var roomUsersModal = document.getElementById('panel-content--room__room-users-modal');
var roomAddUsersModal = document.getElementById('room-add-users-modal');
document.addEventListener('DOMContentLoaded', function () {
  initRoomModalHandler();
  initRoomTypeFilterHandler();
  initRoomInvoiceModalEventHandler();
  initRoomUsersModalHandler();
});

function fillRoomModalForm(data) {
  var roomModalFormServiceInputs = roomModalForm.querySelectorAll('.panel-content--room__room-modal__form__services input[type=checkbox]');
  roomModalForm.querySelector('input[name=old_room_id]').value = data.id;
  roomModalForm.querySelector('input[name=room_id]').value = data.id;
  roomModalForm.querySelector('input[name=name]').value = data.name;
  roomModalForm.querySelector('input[name=price]').value = data.price;
  roomModalForm.querySelector('input[name=floor]').value = data.floor;
  roomModalForm.querySelector('input[name=acreage]').value = data.acreage;
  roomModalForm.querySelector('input[name=members]').value = data.members;

  var _iterator = _createForOfIteratorHelper(roomModalFormServiceInputs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var input = _step.value;
      input.checked = !!data.service_ids.includes(parseInt(input.value));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function roomCardClickHandler(roomCard) {
  var getUrl = roomCard.getAttribute('data-view-url');
  axios.get(getUrl, {
    params: {
      api_token: __apiToken
    }
  }).then(function (response) {
    try {
      fillRoomModalForm(response.data.data);
      console.log(response);
      showBsModal(roomModal);
    } catch (e) {
      console.log(e);
    }
  })["catch"](function (err) {
    tata.error('Lỗi', err.response.data.message);
  });
}

function initRoomModalHandler() {
  document.querySelector('.btn-open-add-room-modal').addEventListener('click', function () {
    showBsModal(addRoomModal);
  });
  $(roomModal).on('hidden.bs.modal', function (e) {
    roomModal.querySelector('input[name=room_id]').value = '';
    resetRoomModalIdInput('');
  });

  var _iterator2 = _createForOfIteratorHelper(roomCards),
      _step2;

  try {
    var _loop = function _loop() {
      var roomCard = _step2.value;
      roomCard.addEventListener('click', function () {
        roomCardClickHandler(roomCard);
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function resetRoomModalIdInput() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _value = roomModal.querySelector('input[name=old_room_id]').value;

  if (value !== null) {
    _value = value;
  }

  roomModal.querySelector('input[name=room_id]').value = _value;
}

function initRoomInvoiceModalEventHandler() {
  document.querySelector('.btn-create-room-invoice').addEventListener('click', function () {
    closeRoomModal();
    showInvoiceModal();
  });
  $(invoiceModal).on('hidden.bs.modal', function () {
    resetRoomModalIdInput();
    showBsModal(roomModal);
  });
}

function initRoomUsersModalHandler() {
  var isAddingUser = false;
  $(roomUsersModal).on('hidden.bs.modal', function () {
    if (!isAddingUser) {
      resetRoomModalIdInput();
      showBsModal(roomModal);
    }
  });
  $(roomAddUsersModal).on('hidden.bs.modal', function () {
    isAddingUser = false;
    showBsModal(roomUsersModal);
  });
  document.querySelector('.btn-room-users').addEventListener('click', function () {
    closeRoomModal();
    showRoomUsersModal();
  });
  document.querySelector('.btn-add-user-modal').addEventListener('click', function () {
    isAddingUser = true;
    closeRoomUsersModal();
    showRoomAddUsersModal();
  });
}

function initRoomTypeFilterHandler() {
  var _iterator3 = _createForOfIteratorHelper(document.querySelectorAll('.panel-content--room__filter--room-type__item a')),
      _step3;

  try {
    var _loop2 = function _loop2() {
      var el = _step3.value;
      el.addEventListener('click', function (e) {
        (function (el) {
          var _listRoomType = ['success', 'warning', 'danger'];

          var _roomList = document.querySelectorAll('.room-card');

          var filterRoomType = el.getAttribute('data-room-type') || 'all';

          if (!_listRoomType.includes(filterRoomType)) {
            var _iterator4 = _createForOfIteratorHelper(_roomList),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _el = _step4.value;
                $(_el).parent().show();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          } else {
            var _iterator5 = _createForOfIteratorHelper(_roomList),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _el2 = _step5.value;

                if (_el2.classList.contains('room-card--' + filterRoomType)) {
                  $(_el2).parent().show();
                } else {
                  $(_el2).parent().hide();
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        })(el);
      });
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function closeRoomModal() {
  $(roomModal).modal('hide');
}

function showRoomModal() {
  $(roomModal).modal('show');
}

function closeInvoiceModal() {
  $(invoiceModal).modal('hide');
}

function showInvoiceModal() {
  $(invoiceModal).modal('show');
}

function closeRoomUsersModal() {
  $(roomUsersModal).modal('hide');
}

function showRoomUsersModal() {
  $(roomUsersModal).modal('show');
}

function closeRoomAddUsersModal() {
  $(roomAddUsersModal).modal('hide');
}

function showRoomAddUsersModal() {
  $(roomAddUsersModal).modal('show');
}

function closeAddRoomModal() {
  $(addRoomModal).modal('hide');
}

function showAddRoomModal() {
  $(addRoomModal).modal('show');
}

/***/ }),

/***/ 3:
/*!***********************************************!*\
  !*** multi ./resources/js/user/room/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/trovie/resources/js/user/room/index.js */"./resources/js/user/room/index.js");


/***/ })

/******/ });