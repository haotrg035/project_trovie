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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/user/host/index.js":
/*!*****************************************!*\
  !*** ./resources/js/user/host/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/html/project_trovie/resources/js/user/host/index.js: Unexpected token (41:19)\n\n\u001b[0m \u001b[90m 39 | \u001b[39m            })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 | \u001b[39m            addressInput\u001b[33m.\u001b[39mclassList\u001b[33m.\u001b[39madd(\u001b[32m'is-invalid'\u001b[39m)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 41 | \u001b[39m        } \u001b[36melse\u001b[39m \u001b[36mif\u001b[39m () {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 42 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 43 | \u001b[39m        } \u001b[36melse\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 44 | \u001b[39m            \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msubmit()\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.unexpected (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:8779:16)\n    at Parser.parseExprAtom (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:10074:20)\n    at Parser.parseExprSubscripts (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9624:23)\n    at Parser.parseMaybeUnary (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Parser.parseExprOps (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9474:23)\n    at Parser.parseMaybeConditional (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9447:23)\n    at Parser.parseMaybeAssign (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9402:21)\n    at Parser.parseExpression (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9354:23)\n    at Parser.parseHeaderExpression (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11373:22)\n    at Parser.parseIfStatement (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11455:22)\n    at Parser.parseStatementContent (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11149:21)\n    at Parser.parseStatement (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11104:17)\n    at Parser.parseIfStatement (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11457:51)\n    at Parser.parseStatementContent (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11149:21)\n    at Parser.parseStatement (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11104:17)\n    at Parser.parseBlockOrModuleBlockBody (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11679:25)\n    at Parser.parseBlockBody (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11665:10)\n    at Parser.parseBlock (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11649:10)\n    at Parser.parseFunctionBody (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:10656:24)\n    at Parser.parseFunctionBodyAndFinish (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:10639:10)\n    at /var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11819:12\n    at Parser.withTopicForbiddingContext (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:10979:14)\n    at Parser.parseFunction (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:11818:10)\n    at Parser.parseFunctionExpression (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:10115:17)\n    at Parser.parseExprAtom (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:10023:21)\n    at Parser.parseExprSubscripts (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9624:23)\n    at Parser.parseMaybeUnary (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Parser.parseExprOps (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9474:23)\n    at Parser.parseMaybeConditional (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9447:23)\n    at Parser.parseMaybeAssign (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9402:21)\n    at Parser.parseExprListItem (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:10740:18)\n    at Parser.parseCallExpressionArguments (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9812:22)\n    at Parser.parseSubscript (/var/www/html/project_trovie/node_modules/@babel/parser/lib/index.js:9718:31)");

/***/ }),

/***/ 2:
/*!***********************************************!*\
  !*** multi ./resources/js/user/host/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/project_trovie/resources/js/user/host/index.js */"./resources/js/user/host/index.js");


/***/ })

/******/ });