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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/user/profile/show.js":
/*!*******************************************!*\
  !*** ./resources/js/user/profile/show.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  initGenerateToken();
});

function initGenerateToken() {
  var formInviteToken = document.querySelector('#form-generate-token');
  var collapseInviteToken = document.querySelector('#invite-token__collapse');
  var tokenInput = collapseInviteToken.querySelector('input[name=token]');
  var tokenTimeOutSpan = collapseInviteToken.querySelector('.invite_token_timeout');
  var tokenExpiredInterval = null;

  if (formInviteToken !== null) {
    var countdownInterval = function countdownInterval(expired_at) {
      return setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime(); // Find the distance between now and the count down date

        var distance = expired_at - now; // Time calculations for days, hours, minutes and seconds
        // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000); // Display the result in the element with id="demo"

        tokenTimeOutSpan.innerHTML = minutes + " : " + seconds; // If the count down is finished, write some text

        if (distance < 0) {
          clearInterval(tokenExpiredInterval);
        }
      }, 1000);
    };

    formInviteToken.onsubmit = function (e) {
      e.preventDefault();
      axios.get(formInviteToken.action, {
        params: {
          api_token: __apiToken
        }
      }).then(function (response) {
        tokenInput.value = response.data.data.token;
        clearInterval(tokenExpiredInterval);
        tokenExpiredInterval = countdownInterval(new Date(response.data.data.expired_at).getTime());
        tata.success('Thông báo', 'Mã mời có hạn sử dụng trong 15 phút!');
        showBsCollapse(collapseInviteToken);
      })["catch"](function (err) {
        tata.error('Thông báo', err.response.data.message);
      });
    };

    collapseInviteToken.querySelector('input[name=token]').onclick = function () {
      /* Select the text field */
      tokenInput.select();
      tokenInput.setSelectionRange(0, 99999);
      /*For mobile devices*/

      /* Copy the text inside the text field */

      document.execCommand("copy");
      /* Alert the copied text */

      tata.success('Thông báo', 'Đã copy mã mời!');
    };

    if (tokenTimeOutSpan.innerText.trim() !== '') {
      tokenExpiredInterval = countdownInterval(new Date(tokenTimeOutSpan.innerText).getTime());
      showBsCollapse(collapseInviteToken);
    }
  }
}

/***/ }),

/***/ 7:
/*!*************************************************!*\
  !*** multi ./resources/js/user/profile/show.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/project_trovie/resources/js/user/profile/show.js */"./resources/js/user/profile/show.js");


/***/ })

/******/ });