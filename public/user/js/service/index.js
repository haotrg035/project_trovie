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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tata-js/src/tata.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/tata-js/src/tata.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tata {\n  position: fixed;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 300px;\n  border-radius: 3px;\n  color: #ffffff;\n  font-size: 16px;\n  z-index: 9999;\n  pointer-events: auto;\n  padding: 12px 14px 12px 20px;\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n}\n\n.tata:hover {\n  opacity: 1;\n}\n\n.tata * {\n  box-sizing: border-box;\n}\n\n.tata .tata-icon {\n  font-size: 2em;\n  color: inherit;\n}\n\n.tata .tata-body {\n  margin: 0;\n  padding: 0 14px;\n  min-height: 38px;\n  min-width: 260px;\n}\n\n.tata .tata-title {\n  margin: 0 0 2px 0;\n  font-size: 1em;\n}\n\n.tata .tata-text {\n  margin: 0;\n  font-size: .9em;\n}\n\n.tata .tata-close {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  border: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-weight: bold;\n  color: inherit;\n  cursor: pointer;\n  outline: none;\n  background: transparent;\n}\n\n.tata-progress {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  border-radius: 0 0 3px 3px;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.tata .tata-close:hover {\n  opacity: 0.4;\n}\n\n.tata.top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.tata.top-mid {\n  top: 12px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.tata.top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.tata.bottom-right {\n  right: 12px;\n  bottom: 18px;\n}\n\n.tata.bottom-mid {\n  left: 50%;\n  bottom: 18px;\n  transform: translateX(-50%);\n}\n\n.tata.bottom-left {\n  bottom: 18px;\n  left: 12px;\n}\n\n.tata.mid-right {\n  top: 50%;\n  right: 12px;\n  transform: translateY(-50%);\n}\n\n.tata.mid-left {\n  top: 50%;\n  left: 12px;\n  transform: translateY(-50%);\n}\n\n.tata.mid-mid {\n  top: 35%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.tata.text {\n  color: #fff;\n  background: #323232;\n}\n\n.tata.log {\n  color: #333333;\n  background: #fffffc;\n}\n\n.tata.info {\n  background: #2ca9e1;\n}\n\n.tata.warn {\n  background: #f89406;\n}\n\n.tata.error {\n  background: #e9546b;\n}\n\n.tata.success {\n  background: #38b48b;\n}\n\n.tata.fade-in {\n  -webkit-animation: .4s ease-in fadeIn forwards;\n          animation: .4s ease-in fadeIn forwards;\n}\n\n.tata.fade-out {\n  -webkit-animation: .4s linear fadeOut forwards;\n          animation: .4s linear fadeOut forwards;\n}\n\n.tata.slide-right-in {\n  -webkit-animation: .4s ease slideRightIn forwards;\n          animation: .4s ease slideRightIn forwards;\n}\n\n.tata.slide-right-out {\n  -webkit-animation: .4s ease slideRightOut forwards;\n          animation: .4s ease slideRightOut forwards;\n}\n\n.tata.slide-left-in {\n  -webkit-animation: .4s ease slideLeftIn forwards;\n          animation: .4s ease slideLeftIn forwards;\n}\n\n.tata.slide-left-out {\n  -webkit-animation: .4s ease slideLeftOut forwards;\n          animation: .4s ease slideLeftOut forwards;\n}\n\n.tata.slide-top-in {\n  -webkit-animation: .4s ease slideTopIn forwards;\n          animation: .4s ease slideTopIn forwards;\n}\n\n.tata.slide-top-out {\n  -webkit-animation: .4s ease slideTopOut forwards;\n          animation: .4s ease slideTopOut forwards;\n}\n\n.tata.slide-bottom-in {\n  -webkit-animation: .4s ease slideBottomIn forwards;\n          animation: .4s ease slideBottomIn forwards;\n}\n\n.tata.slide-bottom-out {\n  -webkit-animation: .4s ease slideBottomOut forwards;\n          animation: .4s ease slideBottomOut forwards;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes slideRightIn {\n  from {\n    right: -310px;\n  }\n\n  to {\n    right: 12px;\n  }\n}\n\n@keyframes slideRightIn {\n  from {\n    right: -310px;\n  }\n\n  to {\n    right: 12px;\n  }\n}\n\n@-webkit-keyframes slideRightOut {\n  from {\n    right: 12px;\n  }\n\n  to {\n    right: -310px;\n  }\n}\n\n@keyframes slideRightOut {\n  from {\n    right: 12px;\n  }\n\n  to {\n    right: -310px;\n  }\n}\n\n@-webkit-keyframes slideLeftIn {\n  from {\n    left: -310px;\n  }\n\n  to {\n    left: 12px;\n  }\n}\n\n@keyframes slideLeftIn {\n  from {\n    left: -310px;\n  }\n\n  to {\n    left: 12px;\n  }\n}\n\n@-webkit-keyframes slideLeftOut {\n  from {\n    left: 12px;\n  }\n\n  to {\n    left: -310px;\n  }\n}\n\n@keyframes slideLeftOut {\n  from {\n    left: 12px;\n  }\n\n  to {\n    left: -310px;\n  }\n}\n\n@-webkit-keyframes slideTopIn {\n  from {\n    top: calc(-100% + -12px);\n  }\n  to {\n    top: 12px;\n  }\n}\n\n@keyframes slideTopIn {\n  from {\n    top: calc(-100% + -12px);\n  }\n  to {\n    top: 12px;\n  }\n}\n\n@-webkit-keyframes slideTopOut {\n  from {\n    top: 12px;\n  }\n  to {\n    top: calc(-100% + -12px);\n  }\n}\n\n@keyframes slideTopOut {\n  from {\n    top: 12px;\n  }\n  to {\n    top: calc(-100% + -12px);\n  }\n}\n\n@-webkit-keyframes slideBottomIn {\n  from {\n    bottom: calc(-100% + -18px);\n  }\n  to {\n    bottom: 18px;\n  }\n}\n\n@keyframes slideBottomIn {\n  from {\n    bottom: calc(-100% + -18px);\n  }\n  to {\n    bottom: 18px;\n  }\n}\n\n@-webkit-keyframes slideBottomOut {\n  from {\n    bottom: 18px;\n  }\n  to {\n    bottom: calc(-100% + -18px);\n  }\n}\n\n@keyframes slideBottomOut {\n  from {\n    bottom: 18px;\n  }\n  to {\n    bottom: calc(-100% + -18px);\n  }\n}\n\n@-webkit-keyframes reduceWidth {\n  from {\n    width: 100%;\n  }\n\n  to {\n    width: 0%;\n  }\n}\n\n@keyframes reduceWidth {\n  from {\n    width: 100%;\n  }\n\n  to {\n    width: 0%;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/tata-js/src/tata.css":
/*!*******************************************!*\
  !*** ./node_modules/tata-js/src/tata.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./tata.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tata-js/src/tata.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/tata-js/src/tata.js":
/*!******************************************!*\
  !*** ./node_modules/tata-js/src/tata.js ***!
  \******************************************/
/*! exports provided: text, log, info, warn, error, success, ask, clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ask", function() { return ask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony import */ var _tata_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tata.css */ "./node_modules/tata-js/src/tata.css");
/* harmony import */ var _tata_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tata_css__WEBPACK_IMPORTED_MODULE_0__);


function randomId() {
  return `tata-${Date.now()}`
}

function addIconsLink(href) {
  const iconLink = document.createElement('link')
  iconLink.rel = 'stylesheet'
  iconLink.href = href
  document.head.appendChild(iconLink)
}

addIconsLink('https://fonts.googleapis.com/icon?family=Material+Icons')

function mapPostion(pos = 'tr') {
  switch (pos) {
    case 'tr':
      return 'top-right'
    case 'tm':
      return 'top-mid'
    case 'tl':
      return 'top-left'
    case 'mr':
      return 'mid-right'
    case 'mm':
      return 'mid-mid'
    case 'ml':
      return 'mid-left'
    case 'br':
      return 'bottom-right'
    case 'bm':
      return 'bottom-mid'
    case 'bl':
      return 'bottom-left'
    default:
      return 'top-right'
  }
}

function type2Icon(type = 'text') {
  switch (type) {
    case 'text':
      return 'chat_bubble'
    case 'log':
      return 'textsms'
    case 'info':
      return 'forum'
    case 'warn':
      return 'info_outline'
    case 'success':
      return 'check'
    case 'error':
      return 'block'
    case 'ask':
      return 'help_outline'  
    default:
      return ''
  }
}

function mapAnimateIn(animate = 'fade', position = 'tr') {
  if (animate === 'slide') {
    switch (position) {
      case 'tr':
      case 'mr':
      case 'br':
        return 'slide-right-in'
      case 'tl':
      case 'ml':
      case 'bl':
        return 'slide-left-in'
      case 'tm':
        return 'slide-top-in'
      case 'bm':
        return 'slide-bottom-in'
    }
  }
  return 'fade-in'
}

function mapAnimateOut(animate = 'fade', position = 'tr') {
  if (animate === 'slide') {
    switch (position) {
      case 'tr':
      case 'mr':
      case 'br':
        return 'slide-right-out'
      case 'tl':
      case 'ml':
      case 'bl':
        return 'slide-left-out'
      case 'tm':
        return 'slide-top-out'
      case 'bm':
        return 'slide-bottom-out'
    }
  }
  return 'fade-out'
}

function clickTaTa(event) {
  const target = event.target
  if (target.classList.contains('tata-close')) return
  this.opts.onClick.call(this)
}

function closeTaTa(event) {
  const target = event.target
  if (!target.classList.contains('tata-close')) return
  const id = target.parentNode.getAttribute('id')
  const ta = tatas.find(ta => ta.id === id)
  const element = document.getElementById(id)

  element.classList.add(mapAnimateOut(ta.opts.animate, ta.opts.position))
  removeElement(element)

  !!ta.opts.onClose &&
    typeof ta.opts.onClose === 'function' &&
    ta.opts.onClose.call(ta)
}

document.addEventListener('click', closeTaTa, false)

const tatas = []

function removeElement(element) {
  const timeout = setTimeout(() => {
    if (typeof element.remove === 'function') {
      element.remove()
    } else {
      document.body.removeChild(element)
    }
    clearTimeout(timeout)
  }, 800)
}

function render(title, text, opts) {
  const id = randomId() 
  const icon = type2Icon(opts.type)
  const position = mapPostion(opts.position)
  const animate = mapAnimateIn(opts.animate, opts.position)
  const ta = { title, text, opts, id }
  const idx = tatas.findIndex(tata => tata.id === id)
  const prevTa = idx === 0 ? null : tatas[idx - 1]
  tatas.push(ta)

  const template = `
  <div class="tata ${opts.type} ${animate} ${position}" id=${id}>
    <i class="tata-icon material-icons">${icon}</i>
    <div class="tata-body">
      <h4 class="tata-title">${title}</h4>
      <p class="tata-text">${text}</p>
    </div>
    ${opts.closeBtn || opts.holding ?
      '<button class="tata-close material-icons">clear</button>' : ''
    }
    ${!opts.holding && opts.progress ?
      '<div class="tata-progress"></div>' : ''
    }
  </div>
 `

  document.body.insertAdjacentHTML('beforeend', template)
  console.log(performance.now())

  if (prevTa && prevTa.opts.position === ta.opts.position) {
    removeElement(document.getElementById(prevTa.id))
  }

  const element = document.getElementById(id)

  !!opts.onClick &&
    typeof opts.onClick === 'function' &&
    element.addEventListener('click', clickTaTa.bind(ta), {
      capture: true,
      once: true
    })

  if (!opts.holding && opts.progress) {
    const progress = element.querySelector('.tata-progress')
    progress.style.animation = `${opts.duration / 1000}s reduceWidth linear forwards`

    const vanish = setTimeout(() => {
      const idx = tatas.findIndex(ta => ta === ta)
      tatas.splice(idx, 1)
      element.classList.add(mapAnimateOut(ta.opts.animate, ta.opts.position))
      console.log(performance.now())
      removeElement(element)
      clearTimeout(vanish)
      !!ta.opts.onClose &&
        typeof ta.opts.onClose === 'function' &&
        ta.opts.onClose.call(ta)
    }, opts.duration)

  }
}

const defaultOpts = {
  type: 'log',
  position: 'tr',
  animate: 'fade', // slide
  duration: 3000,
  progress: true,
  holding: false,
  closeBtn: true,
  onClick: null,
  onClose: null
}


function text(title = '你好', text = '今天是' + new Date().toLocaleString(), opts = {}) {
  const _opts = Object.assign({}, defaultOpts, opts, { type: 'text' })
  render(title, text, _opts)
}

function log(title = '你好', text = '今天是' + new Date().toLocaleString(), opts = {}) {
  const _opts = Object.assign({}, defaultOpts, opts, { type: 'log' })
  render(title, text, _opts)
}

function info(title = '你好', text = '今天是' + new Date().toLocaleString(), opts = {}) {
  const _opts = Object.assign({}, defaultOpts, opts, { type: 'info' })
  render(title, text, _opts)
}

function warn(title = '你好', text = '今天是' + new Date().toLocaleString(), opts = {}) {
  const _opts = Object.assign({}, defaultOpts, opts, { type: 'warn' })
  render(title, text, _opts)
}

function error(title = '你好', text = '今天是' + new Date().toLocaleString(), opts = {}) {
  const _opts = Object.assign({}, defaultOpts, opts, { type: 'error' })
  render(title, text, _opts)
}

function success(title = '你好', text = '今天是' + new Date().toLocaleString(), opts = {}) {
  const _opts = Object.assign({}, defaultOpts, opts, { type: 'success' })
  render(title, text, _opts)
}

function ask() {
  const _opts = Object.assign({}, defaultOpts, opts, { type: 'ask' })
  render(title, text, _opts)
}

function clear() {
  tatas.forEach(tata => removeElement(document.getElementById(tata.id)))
  tatas.length = 0
}


/***/ }),

/***/ "./resources/js/user/TrovieHelper.js":
/*!*******************************************!*\
  !*** ./resources/js/user/TrovieHelper.js ***!
  \*******************************************/
/*! exports provided: TrovieHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrovieHelper", function() { return TrovieHelper; });
/* harmony import */ var tata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tata-js */ "./node_modules/tata-js/src/tata.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var TrovieHelper = /*#__PURE__*/function () {
  function TrovieHelper() {
    _classCallCheck(this, TrovieHelper);
  }

  _createClass(TrovieHelper, null, [{
    key: "_datatableGetLang",
    value: function _datatableGetLang() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vi';

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
        };
      }
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
      var letter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
      var __arrayStr = [];
      var x = str + '';
      x = x.replace(/[^0-9]/g, '');
      var $j = 0;

      for (var $i = x.length - 1; $i >= 0; $i--) {
        if ($j === 3) {
          __arrayStr.push(letter);

          __arrayStr.push(x[$i]);

          $j = 0;
        } else {
          __arrayStr.push(x[$i]);
        }

        $j++;
      }

      var temp = '';

      for (var _$i = __arrayStr.length - 1; _$i >= 0; _$i--) {
        temp = temp + __arrayStr[_$i];
      }

      return temp;
    }
  }, {
    key: "parseCurrencyFormat",
    value: function parseCurrencyFormat(str) {
      return str.replace(/\./gi, '');
    }
  }, {
    key: "splitDate",
    value: function splitDate(dateString) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dmY';
      var result = null;

      if (format === 'dmY') {
        var d = dateString.split(/[-,\/]/);
        result = {
          date: d[0],
          month: d[1],
          year: d[2]
        };
      } else {
        var _d = new Date(dateString);

        result = {
          date: _d.getUTCDate(),
          month: _d.getUTCMonth() + 1,
          year: _d.getUTCFullYear()
        };
      }

      return result;
    }
  }]);

  return TrovieHelper;
}();



/***/ }),

/***/ "./resources/js/user/service/index.js":
/*!********************************************!*\
  !*** ./resources/js/user/service/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TrovieHelper */ "./resources/js/user/TrovieHelper.js");
/* harmony import */ var tata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tata-js */ "./node_modules/tata-js/src/tata.js");


var tableListService = null;
var processMode = document.querySelector('#process_mode');
var ServiceModal = document.querySelector('#service-modal');
var ServiceForm = document.querySelector('#service-modal__form');
$(document).ready(function ($) {
  initTableService();
  addServiceFormSubmitHandler();
  $(ServiceModal).on('hidden.bs.modal', function () {
    ServiceForm.querySelector('input[name=name]').value = '';
    ServiceForm.querySelector('input[name=name]').focus();
    ServiceForm.querySelector('input[name=cost]').value = '';
    ServiceForm.querySelector('select[name=unit_id]').selectedIndex = 0;
  });
  $('.service-add-btn').on('click', function () {
    processMode.value = 'create';
  });
});

function addServiceFormSubmitHandler() {
  ServiceForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(ServiceForm);
    formData.append('api_token', window.__apiToken);

    switch (processMode.value) {
      case "create":
        {
          createService(formData);
          break;
        }

      case "update":
        {
          updateService(formData);
        }
    }
  });
}

function renderRowData(data) {
  var tr = document.createElement('tr');
  var tdId = document.createElement('td');
  var tdName = document.createElement('td');
  var tdCost = document.createElement('td');
  var tdUnit = document.createElement('td');
  var tdUtils = document.createElement('td');
  tdId.innerText = data.id;
  tdName.innerText = data.name;
  tdCost.innerText = data.cost + ' VNĐ';
  tdUnit.innerText = data.unit.name;
  tdCost.setAttribute('data-order', _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__["TrovieHelper"].parseCurrencyFormat(data.cost));
  tr.append(tdId);
  tr.append(tdName);
  tr.append(tdCost);
  tr.append(tdUnit);
  tr.append(tdUtils);
  return tr;
}

function createService(formData) {
  var createUrl = ServiceForm.getAttribute('data-create-url');
  axios.post(createUrl, formData).then(function (response) {
    try {
      tata.success('Thành công', response.data.message);
      tableListService.rows.add($(renderRowData(response.data.data))).draw();
      $(ServiceModal).modal('hide');
    } catch (e) {
      console.log(e);
    }
  })["catch"](function (error) {
    tata.error('Lỗi', error.response.data.message);
  });
}

function initTableService() {
  var rowEditBtn = $('#table-list-service .table-list-service__edit-btn');
  var rowDeleteBtn = $('#table-list-service .table-list-service__delete-btn');
  var options = {
    language: _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__["TrovieHelper"]._datatableGetLang(),
    columnDefs: [{
      targets: 3,
      orderable: true,
      searchable: false
    }, {
      targets: 4,
      orderable: false,
      searchable: false
    }]
  };
  tableListService = $('#table-list-service').DataTable(options);

  if (rowEditBtn.length > 0) {
    rowEditBtn.each(function (ind, el) {
      $(el).on('click', function () {
        var rowParent = $(el).parents('tr')[0];
        editRowBtnHandler(rowParent.getAttribute('data-id'));
      });
    });
  }

  if (rowDeleteBtn.length > 0) {
    rowDeleteBtn.each(function (ind, el) {
      $(el).on('click', function () {
        if (confirm('LƯU Ý! Dịch vụ này cũng sẽ bị xóa trong các nhà trọ đang liên kết với nó! Bạn chắc chứ?')) {
          var rowParent = $(el).parents('tr')[0];
          deleteRowBtnHandler(rowParent.getAttribute('data-id'));
        }
      });
    });
  }
}

function editRowBtnHandler(serviceId) {
  var getDataUrl = ServiceForm.getAttribute('data-view-url') + '/' + serviceId;
  axios.get(getDataUrl, {
    params: {
      api_token: __apiToken
    }
  }).then(function (response) {
    try {
      var currentUnitIndex = ServiceForm.querySelector('#unit_id option[value="' + response.data.data.unit_id + '"]').index;
      ServiceForm.querySelector('#name').value = response.data.data.name;
      ServiceForm.querySelector('#cost').value = response.data.data.cost;
      ServiceForm.querySelector('#unit_id').selectedIndex = currentUnitIndex;
      document.querySelector('#service_id').value = serviceId;
      processMode.value = 'update';
      $(ServiceModal).modal('show');
    } catch (e) {
      console.log(e);
    }
  });
}

function deleteRowBtnHandler(serviceId) {
  var actionUrl = ServiceForm.getAttribute('data-delete-url') + '/' + serviceId;
  axios["delete"](actionUrl, {
    params: {
      api_token: __apiToken
    }
  }).then(function (response) {
    try {
      var parent = document.querySelector('#table-list-service tr[data-id="' + serviceId + '"]');
      parent.parentNode.removeChild(parent);
      tata.success('Thành công', response.data.message);
    } catch (e) {
      console.log(e);
    }
  })["catch"](function (err) {
    console.log(err);
  });
}

function updateService(formData) {
  var updateURl = ServiceForm.getAttribute('data-update-url') + '/' + document.querySelector('#service_id').value;
  axios.post(updateURl, formData).then(function (response) {
    console.log(response);

    try {
      var targetRow = document.querySelector('#table-list-service tr[data-id="' + response.data.data.id + '"]');
      targetRow.children[1].innerText = response.data.data.name;

      if (response.data.data.cost > 0) {
        targetRow.children[2].innerText = response.data.data.cost + ' VNĐ';
      } else {
        targetRow.children[2].innerText = 'Miễn phí';
      }

      targetRow.children[2].setAttribute('data-order', _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__["TrovieHelper"].parseCurrencyFormat(response.data.data.cost));
      targetRow.children[3].innerText = response.data.data.unit.name;
      $(ServiceModal).modal('hide');
      tata.success('Thành công', response.data.message);
    } catch (e) {
      console.log(e);
    }
  })["catch"](function (err) {
    tata.error('Lỗi', err.response.data.message);
  });
}

/***/ }),

/***/ 4:
/*!**************************************************!*\
  !*** multi ./resources/js/user/service/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/trovie/resources/js/user/service/index.js */"./resources/js/user/service/index.js");


/***/ })

/******/ });