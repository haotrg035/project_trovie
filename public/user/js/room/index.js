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

/***/ "./resources/js/user/TrovieGallery.js":
/*!********************************************!*\
  !*** ./resources/js/user/TrovieGallery.js ***!
  \********************************************/
/*! exports provided: TrovieGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrovieGallery", function() { return TrovieGallery; });
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TrovieGallery = /*#__PURE__*/function () {
  function TrovieGallery() {
    _classCallCheck(this, TrovieGallery);
  }

  _createClass(TrovieGallery, null, [{
    key: "initGallery",
    value: function initGallery(gallery) {
      var uploadUrl = gallery.getAttribute('upload-url');
      var uploadInput = gallery.querySelector('input[type=file]');
      var galleryItems = gallery.querySelectorAll('.gallery__item:not(.gallery__item--upload)');

      if (uploadInput !== null) {
        TrovieGallery.galleryInputOnChangeHandler(uploadInput, gallery, uploadUrl);
      }

      if (galleryItems.length > 0) {
        var _iterator = _createForOfIteratorHelper(galleryItems),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            TrovieGallery.galleryRemoveBtnHandler(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "galleryInputOnChangeHandler",
    value: function galleryInputOnChangeHandler(uploadInput, gallery, uploadUrl) {
      uploadInput.onchange = function () {
        onClickHandler();
      };

      function onClickHandler() {
        var formData = new FormData(gallery.querySelector('form'));
        var newInput = TrovieGallery.cloneGalleryInput(uploadInput);
        formData.append('api_token', __apiToken);
        axios.post(uploadUrl, formData).then(function (response) {
          var item = TrovieGallery.renderGalleryItem(response.data.data);
          TrovieGallery.galleryInputOnChangeHandler(newInput, gallery, uploadUrl);
          gallery.querySelector('.row').append(item);
          tata.success('Thành công', response.data.message);
        })["catch"](function (response) {
          tata.error('Lỗi', response.message);
          TrovieGallery.galleryInputOnChangeHandler(newInput, gallery, uploadUrl);
        }).then(function () {
          // always executed
          uploadInput.parentNode.replaceChild(newInput, uploadInput);
        });
      }
    }
  }, {
    key: "cloneGalleryInput",
    value: function cloneGalleryInput(oldInput) {
      var newInput = document.createElement("input");
      newInput.type = "file";
      newInput.name = oldInput.name;
      newInput.className = oldInput.className || '';
      newInput.title = oldInput.title;
      newInput.accept = oldInput.accept;
      return newInput;
    }
  }, {
    key: "renderGalleryItem",
    value: function renderGalleryItem(data) {
      var deleteUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var itemWrapper = document.createElement('a');
      var item = document.createElement('div');
      var item__img = document.createElement('img');
      var item__remove = document.createElement('span');
      itemWrapper.className = 'col-6 col-lg-4 col--custom';
      itemWrapper.href = 'javascript:void(0)';
      item.className = 'gallery__item';
      item.setAttribute('delete-url', data.delete_url);
      item__img.className = 'item__image';
      item__img.src = data.image;
      item__remove.className = 'item__remove';
      item__remove.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
      item.append(item__img);
      item.append(item__remove);
      TrovieGallery.galleryRemoveBtnHandler(item, deleteUrl);
      itemWrapper.append(item);
      return itemWrapper;
    }
  }, {
    key: "galleryRemoveBtnHandler",
    value: function galleryRemoveBtnHandler(item) {
      var deleteUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      item.querySelector('.item__remove').addEventListener('click', function () {
        if (confirm('Bạn có chắc muốn xóa ảnh này?')) {
          if (deleteUrl === null) {
            deleteUrl = item.getAttribute('delete-url');
          }

          axios["delete"](deleteUrl, {
            data: {
              api_token: __apiToken
            }
          }).then(function (response) {
            var parent = item.parentNode;
            tata.success('Thành công', response.data.message);
            parent.parentNode.removeChild(parent);
          })["catch"](function (response) {
            try {
              tata.error('Lỗi', response.data.message);
            } catch (e) {
              console.log(e);
            }
          });
        }
      });
    }
  }]);

  return TrovieGallery;
}();



/***/ }),

/***/ "./resources/js/user/room/index.js":
/*!*****************************************!*\
  !*** ./resources/js/user/room/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrovieGallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TrovieGallery */ "./resources/js/user/TrovieGallery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var roomCardList = document.querySelector('.panel-content--room__list-room');
var roomCards = null;
var ExampleRoomCard = document.querySelector('.panel-content--room__list-room .row div').cloneNode(true);
var ExampleRoomServiceItem = ExampleRoomCard.querySelector('.room-card__service-list li');
var ExampleRoomCardMemberItem = ExampleRoomCard.querySelector('.room-card__customer-list li');
var roomModal = document.getElementById('panel-content--room__room-modal');
var roomModalForm = document.querySelector('.panel-content--room__room-modal__form');
var roomModalGallery = roomModal.querySelector('.trovie-gallery');
var addRoomModal = document.getElementById('add-room-modal');
var addRoomModalForm = addRoomModal.querySelector('.add-room-modal__form');
var invoiceModal = document.getElementById('panel-content--room__invoice-modal');
var roomUsersModal = document.getElementById('panel-content--room__room-users-modal');
var roomUsersModalForm = roomUsersModal.querySelector('.room-users-modal__form');
var roomUsersModalList = document.querySelector('.modal-room-users__list');
var roomUsersModalUserItem = roomUsersModalList.querySelector('div').cloneNode(true);
document.addEventListener('DOMContentLoaded', function () {
  initRoomModalHandler();
  initAddRoomModalHandler();
  initRoomTypeFilterHandler();
  initRoomInvoiceModalEventHandler();
  initRoomUsersModalHandler();
  initRoomSearchHandler();
  ExampleRoomCard.classList.remove('d-none'); //    TODO: update room filter amount after update room data
});

function initRoomSearchHandler() {
  var searchForm = document.querySelector('.panel-content--room__filter--search');
  var searchKey = '';
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    searchRooms();
  });
  searchForm.querySelector('input[type=search]').addEventListener('keydown', function () {
    _.delay(searchRooms, 500);
  });

  function searchRooms() {
    var resultList = [];
    searchKey = searchForm.querySelector('input[type=search]').value.toLowerCase();

    if (searchKey !== '') {
      var _iterator = _createForOfIteratorHelper(roomCards),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var card = _step.value;
          var cardTitle = card.querySelector('.room-card__id').innerText.toLowerCase();

          if (cardTitle.search(searchKey) !== -1) {
            resultList.push(card);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      resultList = roomCards;
    }

    var _iterator2 = _createForOfIteratorHelper(roomCards),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _card = _step2.value;

        if (!_card.parentNode.classList.contains('d-none')) {
          _card.parentNode.classList.add('d-none');
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var _iterator3 = _createForOfIteratorHelper(resultList),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _card2 = _step3.value;

        if (_card2.parentNode.classList.contains('d-none')) {
          _card2.parentNode.classList.remove('d-none');
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
}

function getAllCurrrentRoomCards() {
  return roomCardList.querySelectorAll('.panel-content--room__list-room .room-card');
}

function resetRoomModalIdInput() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _value = roomModal.querySelector('input[name=old_room_id]').value;

  if (value !== null) {
    _value = value;
  }

  roomModal.querySelector('input[name=room_id]').value = _value;
}

function fillRoomModalForm(data) {
  var roomModalFormServiceInputs = roomModalForm.querySelectorAll('.panel-content--room__room-modal__form__services input[type=checkbox]');
  roomModalForm.querySelector('input[name=old_room_id]').value = data.id;
  roomModalForm.querySelector('input[name=room_id]').value = data.id;
  roomModalForm.querySelector('input[name=name]').value = data.name;
  roomModalForm.querySelector('input[name=price]').value = data.price;
  roomModalForm.querySelector('input[name=floor]').value = data.floor;
  roomModalForm.querySelector('input[name=acreage]').value = data.acreage;
  roomModalForm.querySelector('input[name=members]').value = data.members;
  roomModalForm.querySelector('textarea[name=announcement]').innerText = data.announcement;
  roomModalForm.querySelector('input[name=notice]').checked = data.notice === 1;

  var _iterator4 = _createForOfIteratorHelper(roomModalFormServiceInputs),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var input = _step4.value;
      input.checked = !!data.service_ids.includes(parseInt(input.value));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

function renderRoomModalGalleryItems(data) {
  var galleryListElement = roomModalGallery.querySelector('.row');
  var galleryItems = roomModalGallery.querySelectorAll('.gallery__item:not(.gallery__item--upload)');

  var _iterator5 = _createForOfIteratorHelper(galleryItems),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _item2 = _step5.value;
      galleryListElement.removeChild(_item2.parentNode);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  if (data.gallery.length > 0) {
    var deleteUrl = '';

    var _iterator6 = _createForOfIteratorHelper(data.gallery),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var item = _step6.value;
        deleteUrl = roomModalGallery.getAttribute('data-delete-url') + '/' + item.id;
        var image = _TrovieGallery__WEBPACK_IMPORTED_MODULE_0__["TrovieGallery"].renderGalleryItem(item, deleteUrl);
        galleryListElement.append(image);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
}

function initRoomModalGallery(data) {
  var uploadUrl = roomModalGallery.getAttribute('upload-url') + '/' + data.id;
  var uploadInput = roomModalGallery.querySelector('input[type=file]');
  _TrovieGallery__WEBPACK_IMPORTED_MODULE_0__["TrovieGallery"].galleryInputOnChangeHandler(uploadInput, roomModalGallery, uploadUrl);
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
      renderRoomModalGalleryItems(response.data.data);
      initRoomModalGallery(response.data.data);
      document.querySelector('.btn-room-modal-delete').dataset.id = response.data.data.id;
      showBsModal(roomModal);
    } catch (e) {
      console.log(e);
    }
  })["catch"](function (err) {
    try {
      tata.error('Lỗi', err.response.data.message);
    } catch (e) {
      console.log(e);
    }
  });
}

function updateCardServices(targetRoomCard, services) {
  var serviceList = targetRoomCard.querySelector('.room-card__service-list');
  serviceList.innerHTML = '';

  var _iterator7 = _createForOfIteratorHelper(services),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var service = _step7.value;

      var _item = ExampleRoomServiceItem.cloneNode(true);

      if (_item.querySelector('.fa').classList.contains('fa-dollar')) {
        _item.querySelector('.fa').classList.remove('fa-dollar');

        _item.querySelector('.fa').classList.add('fa-dot-circle-o');
      }

      _item.querySelector('p').innerText = service.name;
      serviceList.append(_item);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}

function updateCardMembers(targetRoomCard, members) {
  var MembersList = targetRoomCard.querySelector('.room-card__customer-list');
  MembersList.innerHTML = '';

  if (members !== undefined) {
    var _iterator8 = _createForOfIteratorHelper(members),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var member = _step8.value;

        var _member = ExampleRoomCardMemberItem.cloneNode(true);

        _member.title = member.full_name;
        _member.querySelector('img').src = member.avatar;
        MembersList.append(_member);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }
}

function updateCardData(data) {
  var targetRoomCard = document.querySelector('.room-card[data-id="' + data.id + '"]');
  targetRoomCard.querySelector('.room-card__id').innerText = data.name;
  targetRoomCard.querySelector('.property-list__item--price p .value__content').innerText = data.price;
  targetRoomCard.querySelector('.property-list__item--floor p .value__content').innerText = data.floor;
  targetRoomCard.querySelector('.property-list__item--members .current-users').innerText = data.total_users;
  targetRoomCard.querySelector('.property-list__item--members .max-users').innerText = data.members;
  targetRoomCard.querySelector('.property-list__item--acreage p .value__content').innerText = data.acreage;
  targetRoomCard.classList.remove('room-card--success', 'room-card--warning', 'room-card--danger');

  if (data.state === 1) {
    targetRoomCard.classList.add('room-card--success');
  } else if (data.state === 2) {
    targetRoomCard.classList.add('room-card--warning');
  } else {
    targetRoomCard.classList.add('room-card--danger');
  }

  if (data.services.length > 0) {
    updateCardServices(targetRoomCard, data.services);
  }

  if (_typeof(data.users) !== undefined) {
    updateCardMembers(targetRoomCard, data.users);
  }

  roomCards = getAllCurrrentRoomCards();
}

function roomModalFormSubmitHandler() {
  var updateUrl = roomModalForm.action + '/' + roomModalForm.querySelector('input[name=room_id]').value;
  var formData = new FormData(roomModalForm);
  formData.append('_method', 'PATCH');
  formData.append('api_token', __apiToken);
  axios.post(updateUrl, formData).then(function (response) {
    try {
      tata.success('Thành Công', response.data.message);
      updateCardData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  })["catch"](function (err) {
    tata.error('Lỗi', err.response.data.message);
  });
}

function initRoomModalHandler() {
  document.querySelector('.btn-open-add-room-modal').addEventListener('click', function () {
    clearAddRoomModalFormFields();
    showBsModal(addRoomModal);
  });
  $(roomModal).on('hidden.bs.modal', function (e) {
    roomModal.querySelector('input[name=room_id]').value = '';
    resetRoomModalIdInput('');
  }); // update room modal form

  roomModal.querySelector('.btn-room-modal-save').addEventListener('click', function (e) {
    roomModalFormSubmitHandler();
  });

  if (roomCards == null) {
    roomCards = getAllCurrrentRoomCards();
  }

  ExampleRoomCard.querySelector('.room-card__service-list').innerHTML = '';
  ExampleRoomCard.querySelector('.room-card__customer-list').innerHTML = '';

  if (ExampleRoomCardMemberItem.classList.contains('d-none')) {
    ExampleRoomCardMemberItem.classList.remove('d-none');
  }

  if (ExampleRoomServiceItem.classList.contains('d-none')) {
    ExampleRoomServiceItem.classList.remove('d-none');
  }

  ExampleRoomCard.querySelector('.room-card').classList.remove('d-none', 'room-card--success', 'room-card--warning', 'room-card--danger');

  var _iterator9 = _createForOfIteratorHelper(roomCards),
      _step9;

  try {
    var _loop = function _loop() {
      var roomCard = _step9.value;
      roomCard.addEventListener('click', function () {
        roomCardClickHandler(roomCard);
      });
    };

    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
}

function clearAddRoomModalFormFields() {
  var _iterator10 = _createForOfIteratorHelper(addRoomModalForm.querySelectorAll('input[type=checkbox]')),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var checkBox = _step10.value;
      checkBox.checked = false;
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var _iterator11 = _createForOfIteratorHelper(addRoomModalForm.querySelectorAll('input[type=text],input[type=number]')),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var textInput = _step11.value;
      textInput.value = '';
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
}

function renderNewRoomCard(data) {
  var newCard = ExampleRoomCard.cloneNode(true);
  newCard.querySelector('.room-card').setAttribute('data-id', data.id);
  newCard.querySelector('.room-card').setAttribute('data-view-url', roomCardList.getAttribute('data-room-view-url') + '/' + data.id);
  newCard.querySelector('.room-card').classList.add('room-card--success');
  newCard.querySelector('.room-card').addEventListener('click', function () {
    roomCardClickHandler(newCard.querySelector('.room-card'));
  });
  roomCardList.querySelector('.row').append(newCard);
  updateCardData(data);
}

function initAddRoomModalHandler() {
  var formData = null;
  addRoomModalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formData = new FormData(addRoomModalForm);
    formData.append('api_token', __apiToken);
    axios.post(addRoomModalForm.getAttribute('action'), formData).then(function (response) {
      try {
        tata.success('Thành công', response.data.message);
        hideBsModal(addRoomModal); //Render new room card!!!

        console.log(response.data.data);
        renderNewRoomCard(response.data.data);
      } catch (e) {
        console.log(e);
      }
    })["catch"](function (error) {
      tata.error('Lỗi', error.response.data.message);
    });
  });
}

function initRoomInvoiceModalEventHandler() {
  document.querySelector('.btn-create-room-invoice').addEventListener('click', function () {
    hideBsModal(roomModal);
    showBsModal(invoiceModal);
  });
  $(invoiceModal).on('hidden.bs.modal', function () {
    resetRoomModalIdInput();
    showBsModal(roomModal);
  });
}

function fillRoomUserModalFormData(data) {
  roomUsersModalForm.querySelector('input[name=name]').value = data.name || '';
  roomUsersModalForm.querySelector('input[name=date_in]').value = data.dateIn || '';
  roomUsersModalForm.querySelector('input[name=phone]').value = data.phone || ''; // roomUsersModalForm.querySelector('input[name=email]').value = data.email || '';

  roomUsersModalForm.querySelector('input[name=id_card]').value = data.idCard || '';
  roomUsersModalForm.querySelector('input[name=birthday]').value = data.birthday || '';
  roomUsersModalForm.querySelector('input[name=career]').value = data.career || '';
  roomUsersModalForm.querySelector('input[name=address]').value = data.address || '';
}

function initUserItemCardClick(element) {
  var userCard = element.querySelector('.list__user');
  element.addEventListener('click', function () {
    var _iterator12 = _createForOfIteratorHelper(roomUsersModalList.querySelectorAll('.list__user')),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var user = _step12.value;
        user.classList.remove('active');
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }

    fillRoomUserModalFormData({
      name: userCard.getAttribute('data-name'),
      birthday: userCard.getAttribute('data-birthday'),
      phone: userCard.getAttribute('data-phone'),
      career: userCard.getAttribute('data-career'),
      // email: userCard.getAttribute('data-email'),
      idCard: userCard.getAttribute('data-id-card'),
      address: userCard.getAttribute('data-address'),
      dateIn: userCard.getAttribute('data-date-in')
    });
    userCard.classList.add('active');
  });
}

function renderRoomUsersItem(data) {
  var _userItem = roomUsersModalUserItem.cloneNode(true);

  _userItem.querySelector('.user__avatar img').src = data.avatar;
  _userItem.querySelector('.user__name').innerText = data.full_name;

  _userItem.querySelector('.list__user').setAttribute('data-id', data.id);

  _userItem.querySelector('.list__user').setAttribute('data-name', data.full_name);

  _userItem.querySelector('.list__user').setAttribute('data-birthday', data.birthday);

  if (data.detail.career !== null) {
    _userItem.querySelector('.list__user').setAttribute('data-career', data.detail.career);
  } else {
    _userItem.querySelector('.list__user').setAttribute('data-career', 'N/A');
  }

  _userItem.querySelector('.list__user').setAttribute('data-email', data.email);

  _userItem.querySelector('.list__user').setAttribute('data-phone', data.detail.phone);

  _userItem.querySelector('.list__user').setAttribute('data-id-card', data.detail.id_card);

  _userItem.querySelector('.list__user').setAttribute('data-address', data.detail.address);

  _userItem.querySelector('.list__user').setAttribute('data-date-in', data.pivot.date_in);

  initUserItemCardClick(_userItem, data);
  return _userItem;
}

function fillRoomUserModalData() {
  var roomId = roomModalForm.querySelector('input[name=room_id]').value;
  var getUrl = document.querySelector('.room-card[data-id="' + roomId + '"]').getAttribute('data-view-url');
  axios.get(getUrl + '/members', {
    params: {
      api_token: __apiToken
    }
  }).then(function (response) {
    try {
      roomUsersModalList.innerHTML = '';

      var _iterator13 = _createForOfIteratorHelper(response.data.data),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var user = _step13.value;
          roomUsersModalList.append(renderRoomUsersItem(user));
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      roomUsersModalList.querySelector('.list__user').click();
    } catch (e) {
      console.log(e);
    }
  })["catch"](function (err) {
    roomUsersModalList.innerHTML = '';
    tata.error('Lỗi', err.response.data.message);
  });
}

function initRoomUsersModalHandler() {
  var deleteBtn = document.querySelector('.btn-room-modal-delete');
  $(roomUsersModal).on('hidden.bs.modal', function () {
    resetRoomModalIdInput();
    showBsModal(roomModal);
  });
  $(roomUsersModal).on('hidden.bs.modal', function () {
    fillRoomUserModalFormData({});
  });
  document.querySelector('.btn-room-users').addEventListener('click', function () {
    hideBsModal(roomModal);
    fillRoomUserModalData();
    showBsModal(roomUsersModal);
  });

  deleteBtn.onclick = function () {
    if (confirm('Bạn có chắc muốn xóa phòng này?')) {
      window.location.href = deleteBtn.dataset.deleteUrl + '/' + deleteBtn.dataset.id;
    }
  };
}

function initRoomTypeFilterHandler() {
  var _iterator14 = _createForOfIteratorHelper(document.querySelectorAll('.panel-content--room__filter--room-type__item a')),
      _step14;

  try {
    var _loop2 = function _loop2() {
      var el = _step14.value;
      el.addEventListener('click', function (e) {
        (function (el) {
          var _listRoomType = ['success', 'warning', 'danger'];

          var _roomList = document.querySelectorAll('.room-card');

          var filterRoomType = el.getAttribute('data-room-type') || 'all';

          if (!_listRoomType.includes(filterRoomType)) {
            var _iterator15 = _createForOfIteratorHelper(_roomList),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var _el = _step15.value;
                $(_el).parent().show();
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          } else {
            var _iterator16 = _createForOfIteratorHelper(_roomList),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _el2 = _step16.value;

                if (_el2.classList.contains('room-card--' + filterRoomType)) {
                  $(_el2).parent().show();
                } else {
                  $(_el2).parent().hide();
                }
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        })(el);
      });
    };

    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
}

/***/ }),

/***/ 3:
/*!***********************************************!*\
  !*** multi ./resources/js/user/room/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\www\project_trovie\resources\js\user\room\index.js */"./resources/js/user/room/index.js");


/***/ })

/******/ });