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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tata-js/src/tata.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/postcss-loader/src??ref--8-2!./node_modules/tata-js/src/tata.css ***!
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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
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


var content = __webpack_require__(/*! !../../css-loader??ref--8-1!../../postcss-loader/src??ref--8-2!./tata.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/tata-js/src/tata.css");

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
      return parseInt(str.replace(/\./gi, ''));
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

/***/ "./resources/js/user/contract/index.js":
/*!*********************************************!*\
  !*** ./resources/js/user/contract/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TrovieHelper */ "./resources/js/user/TrovieHelper.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var contractListHostSelect = document.querySelector('.form-contract-select-host select[name=host]');
var contractListRoomSelect = document.querySelector('.form-contract-select-host select[name=room]');
var tableContractList = document.querySelector('#table-contract-list');
var contractTemplate = document.querySelector('.template-contract');
var modalContract = document.querySelector('#contract-modal');
var collapseRenewContract = document.querySelector('#collapse_contract_renew');
var contractCreate__infoModal = document.querySelector('#contract-create__info-modal');
var contractCreate__roomModal = document.querySelector('#contract-create__room-modal');
var dataTableContractList = null;
var dataTableOptions = {
  responsive: false,
  autoWidth: false,
  language: _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__["TrovieHelper"]._datatableGetLang(),
  columns: [{
    data: 'id'
  }, // {data: 'avatar'},
  {
    data: 'created_date'
  }, {
    data: 'updated_date'
  }, {
    data: 'expired_date'
  }, {
    data: 'deposit'
  }, {
    data: 'b_full_name'
  }, {
    data: 'b_phone'
  }, {
    data: 'active'
  }, {
    data: 'options'
  }],
  order: [// [0, 'desc'],
  [7, 'asc'], [0, 'desc']],
  columnDefs: [{
    targets: 1,
    // your case first column
    className: 'text-center'
  }, {
    targets: 2,
    // your case first column
    className: 'text-center'
  }, {
    targets: 3,
    // your case first column
    className: 'text-center'
  }, {
    targets: 7,
    // your case first column
    className: 'text-center'
  }, {
    targets: 8,
    // your case first column
    className: 'text-center',
    order: false
  }]
};
document.addEventListener('DOMContentLoaded', function () {
  initTableContract();
  contractsListSelectHandler(contractListHostSelect, true);
  contractsListSelectHandler(contractListRoomSelect);
  initContractCreateModal();

  if (contractListHostSelect.querySelectorAll('option').length > 1) {
    contractListHostSelect.onchange();
  }

  window.onresize = function () {
    var w = window.innerWidth;
    dataTableContractList.column(1).visible(w > 768);
    dataTableContractList.column(2).visible(w > 425);
    dataTableContractList.column(4).visible(w > 768);
    dataTableContractList.column(6).visible(w > 425);
  };

  $(window).trigger('resize');
});

function initTableContract() {
  dataTableContractList = $(tableContractList).DataTable(dataTableOptions);

  modalContract.querySelector('.contract-modal__print').onclick = function () {
    _.debounce(window.print(), 500);
  };

  modalContract.querySelector('.contract-modal__cancel').onclick = function () {
    if (confirm('Bạn có chắc muốn kết thúc hợp đồng này?')) {
      var data = {
        _method: 'PATCH',
        api_token: __apiToken,
        id: modalContract.getAttribute('data-contract-id')
      };
      axios.post(tableContractList.getAttribute('data-cancel-url'), data).then(function (response) {
        modalContract.querySelector('.contract-modal__cancel').classList.add('d-none');
        modalContract.querySelector('.contract-modal__renew').classList.add('d-none');
        tata.success('Thành công', response.data.message);
        contractListRoomSelect.onchange();
      })["catch"](function (err) {
        tata.error('Lỗi', response.data.message);
      });
    }
  };

  collapseRenewContract.querySelector('form').onsubmit = function (e) {
    e.preventDefault();
    var expired_date = collapseRenewContract.querySelector('input').value;

    if (expired_date === '') {
      collapseRenewContract.querySelector('input').parentNode.classList.add('is-invalid');
      return false;
    } else {
      collapseRenewContract.querySelector('input').parentNode.classList.remove('is-invalid');
    }

    var url = tableContractList.getAttribute('data-renew-url') + '/' + modalContract.getAttribute('data-contract-id');
    var data = {
      _method: 'PATCH',
      api_token: __apiToken,
      expired_at: expired_date
    };
    axios.post(url, data).then(function (response) {
      hideBsModal(modalContract);
      contractListRoomSelect.onchange();
      tata.success('Thông Báo', response.data.message);
    })["catch"](function (err) {
      tata.error('Thông Báo', err.response.data.message);
    });
  };
}

function fillContractInformation(data) {
  var createdAt = _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__["TrovieHelper"].splitDate(data.created_at);
  var updatedAt = _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__["TrovieHelper"].splitDate(data.updated_at);
  var expiredAt = _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__["TrovieHelper"].splitDate(data.expired_at);
  modalContract.setAttribute('data-contract-id', data.id);
  collapseRenewContract.querySelector('input').value = data.expired_at;

  function fillItem(selector, data) {
    var item = contractTemplate.querySelector(selector);

    if (item !== null) {
      item.innerText = data;
    }
  }

  fillItem('.contract__content__address', data.address);

  for (var _key in createdAt) {
    fillItem('.contract__content__created_at-' + _key, updatedAt[_key]);
  }

  for (var _key2 in updatedAt) {
    fillItem('.contract__content__' + _key2, updatedAt[_key2]);
  }

  for (var _key3 in expiredAt) {
    fillItem('.contract__content__expired_at-' + _key3, expiredAt[_key3]);
  }

  for (var _key4 in data['parties']) {
    fillItem('.contract__content__' + _key4, data['parties'][_key4]);
  }

  fillItem('.contract__content__room-address', data.room_detail.address);
  fillItem('.contract__content__room-price', _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__["TrovieHelper"].formatCurrencyForm(data.room_detail.price));
  fillItem('.contract__content__room-cost_electric', _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__["TrovieHelper"].formatCurrencyForm(data.room_detail.cost_electric));
  fillItem('.contract__content__room-cost_water', _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__["TrovieHelper"].formatCurrencyForm(data.room_detail.cost_water));
  fillItem('.contract__content__room-deposit', data.deposit === '0' ? 'Không' : _TrovieHelper__WEBPACK_IMPORTED_MODULE_1__["TrovieHelper"].formatCurrencyForm(data.deposit) + ' đ');
}

function showContract(id) {
  axios.get(tableContractList.getAttribute('data-view-url') + '/' + id, {
    params: {
      api_token: __apiToken
    }
  }).then(function (response) {
    if (response.data.data.active === 0) {
      modalContract.querySelector('.contract-modal__cancel').classList.add('d-none');
      modalContract.querySelector('.contract-modal__renew').classList.add('d-none');
    } else {
      modalContract.querySelector('.contract-modal__cancel').classList.remove('d-none');
      modalContract.querySelector('.contract-modal__renew').classList.remove('d-none');
    }

    fillContractInformation(response.data.data);
  });
  hideBsCollapse(collapseRenewContract);
  showBsModal(modalContract);
}

function initEventViewContract() {
  var editBtns = document.querySelectorAll('.btn-edit');

  if (editBtns.length > 0) {
    var _iterator = _createForOfIteratorHelper(editBtns),
        _step;

    try {
      var _loop = function _loop() {
        var btn = _step.value;
        btn.addEventListener('click', function () {
          showContract(btn.getAttribute('data-id'));
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

function loadDataTableContent(data) {
  dataTableContractList.clear();
  dataTableContractList.rows.add(data);
  dataTableContractList.draw();
}

function renderRowOptionButtons(id) {
  return '<button class=" mx-auto btn d-flex btn-sm btn-base rounded btn-edit" data-id="' + id + '">' + '<i class="fa fa-eye" aria-hidden="true"></i>' + '</button>';
}

function renderRowAvatar(data) {
  return '<img src="' + data.avatar + '" alt="' + data.b_full_name + '">';
}

function updateRoomSelectByHostSelect(_hostSelect, _roomSelect) {
  var currentHostId = _hostSelect.value;

  var valueRoomSelect = _roomSelect.querySelectorAll('option:not([value="0"])');

  var _iterator2 = _createForOfIteratorHelper(valueRoomSelect),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var option = _step2.value;
      option.style.display = 'none';
      option.setAttribute('selected', false);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(_roomSelect.querySelectorAll("option[data-host-id=\"".concat(currentHostId, "\"]"))),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _option = _step3.value;
      _option.style.display = 'block';
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  _roomSelect.selectedIndex = 0;
}

function getContractListData(_x) {
  return _getContractListData.apply(this, arguments);
}

function _getContractListData() {
  _getContractListData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(select) {
    var url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = '';

            if (select.value === '0') {
              url = contractListHostSelect.getAttribute('data-get-contracts-url') + '/' + contractListHostSelect.value;
            } else {
              url = select.getAttribute('data-get-contracts-url') + '/' + select.value;
            }

            _context.next = 4;
            return axios.get(url, {
              params: {
                api_token: __apiToken
              }
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getContractListData.apply(this, arguments);
}

function renderRowRecords(_data, refreshRoomSelect) {
  var data = [];

  if (_data.length > 0) {
    var _iterator4 = _createForOfIteratorHelper(_data),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _contract = _step4.value;
        // let state = _contract.active === 0 ? 'Kết thúc' : (_contract.active === 1 && _contract.state === true ? 'Hiệu lực' : 'Quá hạn');
        var state = null;

        if (_contract.active === 0) {
          state = '<div class="contract-state"><i title="Kết thúc" class="fa fa-dot-circle-o text-secondary"></i><span class="text-secondary"> Kết thúc</span></div>';
        } else if (_contract.active === 1 && _contract.state === true) {
          state = '<div class="contract-state"><i title="Hiệu lực" class="fa fa-dot-circle-o text-success"></i><span class="text-success"> Hiệu lực</span></div>';
        } else {
          state = '<div class="contract-state""><i title="Quá hạn" class="fa fa-dot-circle-o text-danger"></i><span class="text-danger"> Quá hạn</span></div>';
        }

        data.push({
          id: _contract.id,
          // avatar:_contract.avatar,
          created_date: _contract.created_at,
          updated_date: _contract.updated_at,
          expired_date: _contract.expired_at,
          deposit: _contract.deposit === '0' ? 'Không' : _contract.deposit + ' đ',
          b_full_name: _contract.b_full_name,
          b_phone: _contract.b_phone,
          active: state,
          options: renderRowOptionButtons(_contract.id)
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  loadDataTableContent(data);
  initEventViewContract();

  if (refreshRoomSelect) {
    updateRoomSelectByHostSelect(contractListHostSelect, contractListRoomSelect);
  }
}

function contractsListSelectHandler(select) {
  var resetRoomSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  select.onchange = function () {
    getContractListData(select).then(function (response) {
      try {
        renderRowRecords(response.data.data, resetRoomSelect);
      } catch (e) {
        console.log(e);
      }
    })["catch"](function (err) {
      tata.warn('Trống', 'Chưa có hợp đồng nào!');
      renderRowRecords([], resetRoomSelect);
    });
  };
}

function initContractCreateModal() {
  var collapseUserSearch = contractCreate__infoModal.querySelector('#collapse-user-search');
  var formUserSearch = contractCreate__infoModal.querySelector('form');
  var collapseUserInfo = contractCreate__infoModal.querySelector('#collapse-user-info');
  var formUserInfo = collapseUserInfo.querySelector('form');
  var formRoomInfo = contractCreate__roomModal.querySelector('form');
  var roomModalHostSelect = contractCreate__roomModal.querySelector('select[name=host]');
  var roomModalRoomSelect = contractCreate__roomModal.querySelector('select[name=room]');
  var formRoomInfoServiceList = formRoomInfo.querySelector('.room-info__services');
  var expiredDatePicker = contractCreate__roomModal.querySelector('#expire_date_picker');
  var depositInput = contractCreate__roomModal.querySelector('#deposit_input');
  var exampleRoomInfoServiceItem = formRoomInfoServiceList.querySelector('.col--custom');
  formRoomInfoServiceList.innerHTML = '';

  document.querySelector('#btn-collapse-user-search').onclick = function () {};

  formUserInfo.querySelector('button[type=reset]').onclick = function () {
    enableFormUserInfo();
    formUserInfo.querySelector('input[name=user_type]').value = 2;

    var _iterator5 = _createForOfIteratorHelper(formUserInfo.querySelectorAll('.is-invalid')),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var input = _step5.value;
        input.classList.remove('is-invalid');
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    hideBsCollapse(collapseUserInfo);
    hideBsCollapse(collapseUserSearch);
  };

  document.querySelector('#show-contract-create-modal').onclick = function () {
    contractCreate__infoModal.querySelector('input[name=user_type]').value = 2;
    formUserInfo.querySelector('button[type=reset]').click(); // formRoomInfo.querySelector('select[name=room]').onchange();

    showBsModal(contractCreate__infoModal);
  };

  formUserSearch.onsubmit = function (e) {
    e.preventDefault();

    var _token = formUserSearch.querySelector('input').value.trim();

    axios.get(formUserSearch.action, {
      params: {
        token: _token,
        api_token: __apiToken
      }
    }).then(function (response) {
      try {
        fillFormUserInfoData(response.data.data);
        disableFormUserInfo();
        showBsCollapse(collapseUserInfo);
      } catch (e) {
        console.log(e);
      }
    })["catch"](function (err) {
      tata.error('Thông báo', err.response.data.message);
    });
  };

  formUserInfo.onsubmit = function (e) {
    e.preventDefault();

    if (validateFormUserInfo()) {
      hideBsModal(contractCreate__infoModal);
      showBsModal(contractCreate__roomModal);
    }
  };

  formRoomInfo.querySelector('.btn-back').onclick = function () {
    hideBsModal(contractCreate__roomModal);
    showBsModal(contractCreate__infoModal);
  };

  roomModalHostSelect.onchange = function () {
    updateRoomSelectByHostSelect(roomModalHostSelect, roomModalRoomSelect);
  };

  roomModalHostSelect.onchange();

  roomModalRoomSelect.onchange = function () {
    formRoomInfo.querySelector('input[name=room_id]').value = roomModalRoomSelect.value;

    if (roomModalHostSelect.value !== '' && roomModalHostSelect.value !== '0') {
      formRoomInfo.querySelector('input[name=host_id]').value = roomModalHostSelect.value;
    }

    if (roomModalRoomSelect.value !== '0') {
      var url = roomModalRoomSelect.querySelector('option[value="' + roomModalRoomSelect.value + '"]').getAttribute('data-get-url');
      axios.get(url, {
        params: {
          api_token: __apiToken
        }
      }).then(function (response) {
        fillFormRoomInfoData(response.data.data);
      });
    }
  };

  expiredDatePicker.oninput = function () {
    formRoomInfo.querySelector('input[name=expired_at]').value = expiredDatePicker.value;
  };

  depositInput.oninput = function () {
    formRoomInfo.querySelector('input[name=deposit]').value = depositInput.value;
  };

  formRoomInfo.onsubmit = function (e) {
    e.preventDefault();

    if (validateFOrmRoomInfo()) {
      var data;
      data = new FormData(formUserInfo);
      data.append('host_id', formRoomInfo.querySelector('input[name=host_id]').value);
      data.append('room_id', formRoomInfo.querySelector('input[name=room_id]').value);
      data.append('expired_at', formRoomInfo.querySelector('input[name=expired_at]').value);
      data.append('deposit', formRoomInfo.querySelector('input[name=deposit]').value);
      data.append('api_token', __apiToken);
      axios.post(formRoomInfo.getAttribute('action'), data).then(function (response) {
        try {
          contractListRoomSelect.onchange();
          hideBsModal(contractCreate__roomModal);
          tata.success('Thông báo', response.data.message);
          contractListHostSelect.selectedIndex = contractListHostSelect.querySelector('option[value="' + response.data.data.host_id + '"]').index;
          contractListHostSelect.onchange();

          _.delay(function () {
            // contractListRoomSelect.selectedIndex = contractListRoomSelect.querySelector('option[value="' + response.data.data.room_id + '"]').index;
            // contractListRoomSelect.onchange();
            showContract(response.data.data.id);
          }, 300);
        } catch (e) {
          console.log(e);
        }
      })["catch"](function (err) {
        tata.error('Thông báo', err.response.data.message);
      });
    }

    return false;
  };

  function fillFormUserInfoData(data) {
    formUserInfo.querySelector('input[name=user_type]').value = 1;
    formUserInfo.querySelector('input[name=customer_user_id]').value = data.id;
    formUserInfo.querySelector('select[name=b_gender]').selectedIndex = formUserInfo.querySelector('select[name=b_gender] option[value="' + data.gender + '"]').index;

    for (var key in data) {
      if (key !== 'gender' && key !== 'id') {
        if (key === 'birthday' || key === 'id_card_date') {
          formUserInfo.querySelector('input[name=b_' + key + ']').parentNode.querySelector('.flatpickr-input').value = data['key'];
        }

        formUserInfo.querySelector('input[name=b_' + key + ']').value = data[key];
      }
    }
  }

  function validateFormUserInfo() {
    var idCardInput = formUserInfo.querySelector('input[name=b_id_card]');
    var dateInputs = formUserInfo.querySelectorAll('.form-group--unit--date .trovie-input');

    if (idCardInput.value.trim().length !== 12) {
      idCardInput.parentNode.classList.add('is-invalid', 'mb-0');
      return false;
    } else {
      idCardInput.parentNode.classList.remove('is-invalid', 'mb-0');
    }

    var _iterator6 = _createForOfIteratorHelper(dateInputs),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var input = _step6.value;

        if (input.value.trim() === '') {
          input.parentNode.classList.add('is-invalid', 'mb-0');
          return false;
        } else {
          input.parentNode.classList.remove('is-invalid', 'mb-0');
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    return true;
  }

  function changeStateFormUserInfoInput() {
    var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'readOnly';
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _iterator7 = _createForOfIteratorHelper(formUserInfo.querySelectorAll('input,textarea')),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var input = _step7.value;

        if (!input.classList.contains('form-group--unit--date')) {
          input[prop] = value;
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  function disableFormUserInfo() {
    changeStateFormUserInfoInput('readOnly', true);

    var _iterator8 = _createForOfIteratorHelper(collapseUserInfo.querySelectorAll('fieldset > .row')),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var row = _step8.value;
        row.classList.add('disabled');
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    var _iterator9 = _createForOfIteratorHelper(formUserInfo.querySelectorAll('input.form-group--unit--date')),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var input = _step9.value;
        input.disabled = true;
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  }

  function enableFormUserInfo() {
    changeStateFormUserInfoInput('readOnly', false);

    var _iterator10 = _createForOfIteratorHelper(collapseUserInfo.querySelectorAll('fieldset > .row')),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var row = _step10.value;
        row.classList.remove('disabled');
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }

    var _iterator11 = _createForOfIteratorHelper(formUserInfo.querySelectorAll('input.form-group--unit--date')),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var input = _step11.value;
        input.disabled = false;
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }

  function fillFormRoomInfoData(data) {
    formRoomInfo.querySelector('input[name=price]').value = data.price;
    formRoomInfo.querySelector('input[name=cost_electric]').value = data.host.cost_electric;
    formRoomInfo.querySelector('input[name=cost_water]').value = data.host.cost_water;
    formRoomInfo.querySelector('input[name=date_payment]').value = data.host.date_payment;
    formRoomInfo.querySelector('input[name=date_note_electric]').value = data.host.date_note_electric;
    formRoomInfo.querySelector('input[name=date_note_water]').value = data.host.date_note_water;
    formRoomInfo.querySelector('input[name=current_members]').value = data.total_users + ' / ' + data.members;

    if (data.services.length > 0) {
      formRoomInfoServiceList.innerHTML = '';

      var _iterator12 = _createForOfIteratorHelper(data.services),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var service = _step12.value;
          var newItem = exampleRoomInfoServiceItem.cloneNode(true);
          newItem.querySelector('span.service-name').innerText = service.name;
          newItem.querySelector('span.service-price').innerText = service.cost <= 0 ? 'Miễn phí' : service.cost + 'đ / ' + service.unit.name;
          formRoomInfoServiceList.append(newItem);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  }

  function validateFOrmRoomInfo() {
    if (formRoomInfo.querySelector('input[name=room_id]').value === '0' || formRoomInfo.querySelector('input[name=room_id]').value === '') {
      roomModalRoomSelect.parentNode.classList.add('is-invalid', 'mb-0');
      return false;
    }

    if (formRoomInfo.querySelector('input[name=expired_at]').value.trim() === '') {
      expiredDatePicker.parentNode.classList.add('is-invalid', 'mb-0');
      return false;
    }

    expiredDatePicker.parentNode.classList.remove('is-invalid', 'mb-0');
    roomModalRoomSelect.parentNode.classList.remove('is-invalid', 'mb-0');
    return true;
  }
}

/***/ }),

/***/ 5:
/*!***************************************************!*\
  !*** multi ./resources/js/user/contract/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/trovie/resources/js/user/contract/index.js */"./resources/js/user/contract/index.js");


/***/ })

/******/ });