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

/***/ "./node_modules/@goongmaps/goong-geocoder/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-geocoder/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Typeahead = __webpack_require__(/*! suggestions */ "./node_modules/suggestions/index.js");

var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");

var extend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var GoongClient = __webpack_require__(/*! @goongmaps/goong-sdk */ "./node_modules/@goongmaps/goong-sdk/index.js");

var goongAutocomplete = __webpack_require__(/*! @goongmaps/goong-sdk/services/autocomplete */ "./node_modules/@goongmaps/goong-sdk/services/autocomplete.js");

/**
 * A geocoder component using the [Goong Geocoding API](https://docs.goong.io/rest/guide#place)
 * @class GoongGeocoder
 * @param {Object} options
 * @param {String} options.accessToken Required. An API Key created at https://account.goong.io
 * @param {String} [options.origin=https://rsapi.goong.io] Use to set a custom API origin.
 * @param {Object} [options.goongjs] A [goongjs](https://docs.goong.io/js/guide) instance to use when creating [Markers](https://docs.goong.io/js/guide#add-custom-icons-with-markers). Required if `options.marker` is `true`.
 * @param {Number} [options.zoom=16] On geocoded result what zoom level should the map animate to.
 * @param {Boolean|Object} [options.flyTo=true] If `false`, animating the map to a selected result is disabled. If `true`, animating the map will use the default animation parameters.
 * @param {String} [options.placeholder=Search] Override the default placeholder attribute value.
 * @param {Object} [options.proximity] a proximity argument: this is
 * a geographical point given as an object with `latitude` and `longitude`
 * properties. Search results closer to this point will be given
 * higher priority.
 * @param {Boolean} [options.trackProximity=true] If `true`, the geocoder proximity will automatically update based on the map view.
 * @param {Boolean} [options.collapsed=false] If `true`, the geocoder control will collapse until hovered or in focus.
 * @param {Boolean} [options.clearAndBlurOnEsc=false] If `true`, the geocoder control will clear it's contents and blur when user presses the escape key.
 * @param {Boolean} [options.clearOnBlur=false] If `true`, the geocoder control will clear its value when the input blurs.
 * @param {Number} [options.minLength=2] Minimum number of characters to enter before results are shown.
 * @param {Number} [options.limit=5] Maximum number of results to show.
 * @param {Number} [options.radius=3000] Distance by kilometers around search location
 * @param {Boolean|Object} [options.marker=true]  If `true`, a [Marker](https://docs.goong.io/js/guide#add-custom-icons-with-markers) will be added to the map at the location of the user-selected result using a default set of Marker options.  If the value is an object, the marker will be constructed using these options. If `false`, no marker will be added to the map. Requires that `options.goongjs` also be set.
 * @param {Function} [options.render] A function that specifies how the results should be rendered in the dropdown menu. This function should accepts a single [Predictions](https://docs.goong.io/rest/guide#place) object as input and return a string. Any HTML in the returned string will be rendered.
 * @param {Function} [options.getItemValue] A function that specifies how the selected result should be rendered in the search bar. This function should accept a single [Place Detail](https://docs.goong.io/rest/guide#get-point-detail-by-id) object as input and return a string. HTML tags in the output string will not be rendered. Defaults to `(item) => item.formatted_address`.

 * @example
 * var geocoder = new GoongGeocoder({ accessToken: goongjs.accessToken });
 * map.addControl(geocoder);
 * @return {GoongGeocoder} `this`
 *
 */


function GoongGeocoder(options) {
    this._eventEmitter = new EventEmitter();
    this.options = extend({}, this.options, options);
    this.inputString = '';
    this.fresh = true;
    this.lastSelected = null;
}

GoongGeocoder.prototype = {
    options: {
        zoom: 16,
        flyTo: true,
        trackProximity: true,
        minLength: 2,
        limit: 5,
        radius: 3000,
        origin: 'https://rsapi.goong.io',
        marker: true,
        goongjs: null,
        collapsed: false,
        clearAndBlurOnEsc: false,
        clearOnBlur: false,
        getItemValue: function getItemValue(item) {
            return item.description;
        },
        render: function render(item) {
            var placeName = item.structured_formatting;
            return '<div class="goongjs-ctrl-geocoder--suggestion"><div class="goongjs-ctrl-geocoder--suggestion-title">' + placeName.main_text + '</div><div class="goongjs-ctrl-geocoder--suggestion-address">' + placeName.secondary_text + '</div></div>';
        }
    },
    request: null,
    /**
     * Add the geocoder to a container. The container can be either a `goongjs.Map` or a reference to an HTML `class` or `id`.
     *
     * If the container is a `goongjs.Map`, this function will behave identically to `Map.addControl(geocoder)`.
     * If the container is an HTML `id` or `class`, the geocoder will be appended to that element.
     *
     * This function will throw an error if the container is not either a map or a `class`/`id` reference.
     * It will also throw an error if the referenced HTML element cannot be found in the `document.body`.
     *
     * For example, if the HTML body contains the element `<div id='geocoder-container'></div>`, the following script will append the geocoder to `#geocoder-container`:
     *
     * ```javascript
     * var geocoder = new GoongGeocoder({ accessToken: goongjs.accessToken });
     * geocoder.addTo('#geocoder-container');
     * ```
     * @param {String|goongjs.Map} container A reference to the container to which to add the geocoder
     */
    addTo: function (container) {
        // if the container is a map, add the control like normal
        if (container._controlContainer) {
            //  it's a goongjs map, add like normal
            container.addControl(this);
        } // if the container is not a map, but an html element, then add the control to that element
        else if (typeof container == 'string' && (container.startsWith('#') || container.startsWith('.'))) {
            var parent = document.querySelectorAll(container);

            if (parent.length == 0) {
                throw new Error("Element ", container, "not found.");
            }

            if (parent.length > 1) {
                throw new Error("Geocoder can only be added to a single html element");
            }

            parent.forEach(function (parentEl) {
                var el = this.onAdd(); //returns the input elements, which are then added to the requested html container

                parentEl.appendChild(el);
            }.bind(this));
        } else {
            throw new Error("Error: addTo Container must be a goong-js map or a html element reference");
        }
    },
    onAdd: function (map) {
        if (map && typeof map != 'string') {
            this._map = map;
        }
        this.autoCompleteService = goongAutocomplete(
            GoongClient({
                accessToken: this.options.accessToken,
                origin: this.options.origin
            })
        );

        this._onChange = this._onChange.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onPaste = this._onPaste.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._showButton = this._showButton.bind(this);
        this._hideButton = this._hideButton.bind(this);
        this._onQueryResult = this._onQueryResult.bind(this);
        this.clear = this.clear.bind(this);
        this._updateProximity = this._updateProximity.bind(this);
        this._collapse = this._collapse.bind(this);
        this._unCollapse = this._unCollapse.bind(this);
        this._clear = this._clear.bind(this);
        this._clearOnBlur = this._clearOnBlur.bind(this);
        var el = this.container = document.createElement('div');
        el.className = 'goongjs-ctrl-geocoder goongjs-ctrl';
        // var searchIcon = this.createIcon('search', '<path d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"/>');
        this._inputEl = document.createElement('input');
        this._inputEl.type = 'text';
        this._inputEl.className = 'goongjs-ctrl-geocoder--input';
        if (this.options.searchInput != null) {
            this._inputEl = this.options.searchInput;
        }
        this.setPlaceholder();

        if (this.options.collapsed) {
            this._collapse();

            this.container.addEventListener('mouseenter', this._unCollapse);
            this.container.addEventListener('mouseleave', this._collapse);

            this._inputEl.addEventListener('focus', this._unCollapse);
        }

        if (this.options.collapsed || this.options.clearOnBlur) {
            this._inputEl.addEventListener('blur', this._onBlur);
        }

        this._inputEl.addEventListener('keydown', debounce(this._onKeyDown, 200));

        this._inputEl.addEventListener('paste', this._onPaste);

        this._inputEl.addEventListener('change', this._onChange);

        this.container.addEventListener('mouseenter', this._showButton);
        this.container.addEventListener('mouseleave', this._hideButton);

        this._inputEl.addEventListener('keyup', function () {
        }.bind(this));

        var actions = document.createElement('div');
        actions.classList.add('goongjs-ctrl-geocoder--pin-right');
        this._clearEl = document.createElement('button');

        this._clearEl.setAttribute('aria-label', 'Clear');

        this._clearEl.addEventListener('click', this.clear);

        this._clearEl.className = 'goongjs-ctrl-geocoder--button';
        // var buttonIcon = this.createIcon('close', '<path d="M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"/>');

        // this._clearEl.appendChild(buttonIcon);

        this._loadingEl = this.createIcon('loading', '<path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"/><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"/>');
        actions.appendChild(this._clearEl);
        actions.appendChild(this._loadingEl);
        // el.appendChild(searchIcon);
        if (this.options.searchInput == null) {
            console.log(null)
            el.appendChild(this._inputEl);
        }
        el.appendChild(actions);
        this._typeahead = new Typeahead(this._inputEl, [], {
            filter: false,
            minLength: this.options.minLength,
            limit: this.options.limit
        });
        this.setRenderFunction(this.options.render);
        this._typeahead.getItemValue = this.options.getItemValue;
        this.mapMarker = null;
        this._handleMarker = this._handleMarker.bind(this);

        if (this._map) {
            if (this.options.trackProximity) {
                this._updateProximity();

                this._map.on('moveend', this._updateProximity);
            }

            this._goongjs = this.options.goongjs;

            if (!this._goongjs && this.options.marker) {
                // eslint-disable-next-line no-console
                console.error("No goongjs detected in options. Map markers are disabled. Please set options.goongjs.");
                this.options.marker = false;
            }
        }

        return el;
    },
    createIcon: function (name, path) {
        var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('class', 'goongjs-ctrl-geocoder--icon goongjs-ctrl-geocoder--icon-' + name);
        icon.setAttribute('viewBox', '0 0 18 18');
        icon.setAttribute('xml:space', 'preserve');
        icon.setAttribute('width', 18);
        icon.setAttribute('height', 18);
        icon.innerHTML = path;
        return icon;
    },
    onRemove: function () {
        this.container.parentNode.removeChild(this.container);

        if (this.options.trackProximity && this._map) {
            this._map.off('moveend', this._updateProximity);
        }

        this._removeMarker();

        this._map = null;
        return this;
    },
    _onPaste: function (e) {
        var value = (e.clipboardData || window.clipboardData).getData('text');

        if (value.length >= this.options.minLength) {
            this._geocode(value);
        }
    },
    _onKeyDown: function (e) {
        var ESC_KEY_CODE = 27,
            TAB_KEY_CODE = 9;

        if (e.keyCode === ESC_KEY_CODE && this.options.clearAndBlurOnEsc) {
            this._clear(e);

            return this._inputEl.blur();
        } // if target has shadowRoot, then get the actual active element inside the shadowRoot


        var target = e.target && e.target.shadowRoot ? e.target.shadowRoot.activeElement : e.target;
        var value = target ? target.value : '';

        if (!value) {
            this.fresh = true; // the user has removed all the text

            if (e.keyCode !== TAB_KEY_CODE) this.clear(e);
            return this._clearEl.style.display = 'none';
        } // TAB, ESC, LEFT, RIGHT, ENTER, UP, DOWN


        if (e.metaKey || [TAB_KEY_CODE, ESC_KEY_CODE, 37, 39, 13, 38, 40].indexOf(e.keyCode) !== -1) return;

        if (target.value.length >= this.options.minLength) {
            this._geocode(target.value);
        }
    },
    _showButton: function () {
        if (this._typeahead.selected) this._clearEl.style.display = 'block';
    },
    _hideButton: function () {
        if (this._typeahead.selected) this._clearEl.style.display = 'none';
    },
    _onBlur: function (e) {
        if (this.options.clearOnBlur) {
            this._clearOnBlur(e);
        }

        if (this.options.collapsed) {
            this._collapse();
        }
    },
    _onChange: function () {
        var selected = this._typeahead.selected;

        if (selected && JSON.stringify(selected) !== this.lastSelected) {
            if (!this.options.flyTo) {
                return;
            }
            var request = this.autoCompleteService.placeDetail({placeid: selected.place_id}).send();
            request.then(
                function (response) {
                    this._clearEl.style.display = 'none';
                    var detail = response.body;
                    var flyOptions;
                    var defaultFlyOptions = {
                        zoom: this.options.zoom
                    };
                    flyOptions = extend({}, defaultFlyOptions, this.options.flyTo); //  ensure that center is not overriden by custom options
                    var lat = detail.result.geometry.location.lat
                    var lng = detail.result.geometry.location.lng
                    flyOptions.center = [lng, lat];

                    if (this._map) {
                        this._map.flyTo(flyOptions);
                    }
                    if (this.options.marker && this._goongjs) {
                        this._handleMarker(detail);
                    }

                    // After selecting a result, re-focus the textarea and set
                    // cursor at start.

                    this._inputEl.focus();

                    this._inputEl.scrollLeft = 0;

                    this._inputEl.setSelectionRange(0, 0);

                    this.lastSelected = JSON.stringify(selected);

                    this._eventEmitter.emit('result', {
                        result: detail
                    });
                }.bind(this));

            request.catch(
                function (error) {
                    this._eventEmitter.emit('error', {error: error});
                }.bind(this));

            return request;
        }
    },

    _geocode: function (searchInput) {
        this._loadingEl.style.display = 'block';
        this._eventEmitter.emit('loading', {
            query: searchInput
        });

        this.inputString = searchInput;

        var request;
        var config = {
            input: searchInput,
            radius: this.options.radius
        };
        if (this.options.trackProximity && this._map && this.options.proximity && this.options.proximity.latitude && this.options.proximity.longitude) {
            config = extend(config, {location: this.options.proximity.latitude + "," + this.options.proximity.longitude})
        }
        request = this.autoCompleteService.search(config).send();
        request.then(
            function (response) {
                var res = response.body;

                this._loadingEl.style.display = 'none';
                if (this.fresh) {
                    this.fresh = false;
                }
                if (res.predictions.length) {
                    this._clearEl.style.display = 'block';
                    this._eventEmitter.emit('results', res);
                    this._typeahead.update(res.predictions);
                } else {
                    this._clearEl.style.display = 'none';
                    this._typeahead.selected = null;
                    this._renderNoResults();
                    this._eventEmitter.emit('results', res);
                }
            }.bind(this));
        request.catch(
            function (error) {
                if (error && error.status === 0) return;
                this._loadingEl.style.display = 'none';
                this._clearEl.style.display = 'none';
                this._typeahead.selected = null;
                this._renderError();
                this._eventEmitter.emit('results', {predictions: []});
                this._eventEmitter.emit('error', {error: error});
            }.bind(this)
        );

        return request;
    },

    /**
     * Shared logic for clearing input
     * @param {Event} [ev] the event that triggered the clear, if available
     * @private
     *
     */
    _clear: function (ev) {
        if (ev) ev.preventDefault();
        this._inputEl.value = '';
        this._typeahead.selected = null;

        this._typeahead.clear();

        this._onChange();

        this._clearEl.style.display = 'none';

        this._removeMarker();

        this.lastSelected = null;

        this._eventEmitter.emit('clear');

        this.fresh = true;
    },

    /**
     * Clear and then focus the input.
     * @param {Event} [ev] the event that triggered the clear, if available
     *
     */
    clear: function (ev) {
        this._clear(ev);

        this._inputEl.focus();
    },

    /**
     * Clear the input, without refocusing it. Used to implement clearOnBlur
     * constructor option.
     * @param {Event} [ev] the blur event
     * @private
     */
    _clearOnBlur: function (ev) {
        var ctx = this;
        /*
         * If relatedTarget is not found, assume user targeted the suggestions list.
         * In that case, do not clear on blur. There are other edge cases where
         * ev.relatedTarget could be null. Clicking on list always results in null
         * relatedtarget because of upstream behavior in `suggestions`.
         */
        if (ev.relatedTarget) {
            ctx._clear(ev);
        }
    },
    _onQueryResult: function (response) {
        var results = response.result;
        this._typeahead.selected = results;
        this._inputEl.value = results.geometry.name;
    },
    _updateProximity: function () {
        // proximity is designed for local scale, if the user is looking at the whole world,
        // it doesn't make sense to factor in the arbitrary centre of the map
        if (!this._map) {
            return;
        }

        if (this._map.getZoom() > 9) {
            var center = this._map.getCenter().wrap();

            this.setProximity({
                longitude: center.lng,
                latitude: center.lat
            });
        } else {
            this.setProximity(null);
        }
    },
    _collapse: function () {
        // do not collapse if input is in focus
        if (!this._inputEl.value && this._inputEl !== document.activeElement) this.container.classList.add('goongjs-ctrl-geocoder--collapsed');
    },
    _unCollapse: function () {
        this.container.classList.remove('goongjs-ctrl-geocoder--collapsed');
    },

    /**
     * Set & query the input
     * @param {string} searchInput location name or other search input
     * @returns {GoongGeocoder} this
     */
    query: function (searchInput) {
        this._geocode(searchInput).then(this._onQueryResult);

        return this;
    },
    _renderError: function () {
        var errorMessage = "<div class='goong-js-geocoder--error'>There was an error reaching the server</div>";

        this._renderMessage(errorMessage);
    },
    _renderNoResults: function () {
        var errorMessage = "<div class='goong-js-geocoder--error goongjs-gl-geocoder--no-results'>No results found</div>";

        this._renderMessage(errorMessage);
    },
    _renderMessage: function (msg) {
        this._typeahead.update([]);

        this._typeahead.selected = null;

        this._typeahead.clear();

        this._typeahead.renderError(msg);
    },

    /**
     * Get the text to use as the search bar placeholder
     *
     * If placeholder is provided in options, then use options.placeholder
     * Otherwise use the default
     *
     * @returns {String} the value to use as the search bar placeholder
     * @private
     */
    _getPlaceholderText: function () {
        if (this.options.placeholder) return this.options.placeholder;
        return 'Search';
    },

    /**
     * Set input
     * @param {string} searchInput location name or other search input
     * @returns {GoongGeocoder} this
     */
    setInput: function (searchInput) {
        // Set input value to passed value and clear everything else.
        this._inputEl.value = searchInput;
        this._typeahead.selected = null;

        this._typeahead.clear();

        this._onChange();

        return this;
    },

    /**
     * Set proximity
     * @param {Object} proximity The new `options.proximity` value. This is a geographical point given as an object with `latitude` and `longitude` properties.
     * @returns {GoongGeocoder} this
     */
    setProximity: function (proximity) {
        this.options.proximity = proximity;
        return this;
    },

    /**
     * Get proximity
     * @returns {Object} The geocoder proximity
     */
    getProximity: function () {
        return this.options.proximity;
    },

    /**
     * Set the render function used in the results dropdown
     * @param {Function} fn The function to use as a render function. This function accepts a single [Predictions](https://docs.goong.io/rest/guide#get-points-by-keyword) object as input and returns a string.
     * @returns {GoongGeocoder} this
     */
    setRenderFunction: function (fn) {
        if (fn && typeof fn == "function") {
            this._typeahead.render = fn;
        }

        return this;
    },

    /**
     * Get the function used to render the results dropdown
     *
     * @returns {Function} the render function
     */
    getRenderFunction: function () {
        return this._typeahead.render;
    },

    /**
     * Get the zoom level the map will move to
     * @returns {Number} the map zoom
     */
    getZoom: function () {
        return this.options.zoom;
    },

    /**
     * Set the zoom level
     * @param {Number} zoom The zoom level that the map should animate to
     * @returns {GoongGeocoder} this
     */
    setZoom: function (zoom) {
        this.options.zoom = zoom;
        return this;
    },

    /**
     * Get the parameters used to fly to the selected response, if any
     * @returns {Boolean|Object} The `flyTo` option
     */
    getFlyTo: function () {
        return this.options.flyTo;
    },

    /**
     * Set the flyTo options
     * @param {Boolean|Object} flyTo If false, animating the map to a selected result is disabled. If true, animating the map will use the default animation parameters
     */
    setFlyTo: function (flyTo) {
        this.options.flyTo = flyTo;
        return this;
    },

    /**
     * Get the value of the placeholder string
     * @returns {String} The input element's placeholder value
     */
    getPlaceholder: function () {
        return this.options.placeholder;
    },

    /**
     * Set the value of the input element's placeholder
     * @param {String} placeholder the text to use as the input element's placeholder
     * @returns {GoongGeocoder} this
     */
    setPlaceholder: function (placeholder) {
        this.placeholder = placeholder ? placeholder : this._getPlaceholderText();
        this._inputEl.placeholder = this.placeholder;

        this._inputEl.setAttribute('aria-label', this.placeholder);

        return this;
    },


    /**
     * Get the minimum number of characters typed to trigger results used in the plugin
     * @returns {Number} The minimum length in characters before a search is triggered
     */
    getMinLength: function () {
        return this.options.minLength;
    },

    /**
     * Set the minimum number of characters typed to trigger results used by the plugin
     * @param {Number} minLength the minimum length in characters
     * @returns {GoongGeocoder} this
     */
    setMinLength: function (minLength) {
        this.options.minLength = minLength;
        if (this._typeahead) this._typeahead.minLength = minLength;
        return this;
    },

    /**
     * Get the limit value for the number of results to display used by the plugin
     * @returns {Number} The limit value for the number of results to display used by the plugin
     */
    getLimit: function () {
        return this.options.limit;
    },

    /**
     * Set the limit value for the number of results to display used by the plugin
     * @param {Number} limit the number of search results to return
     * @returns {GoongGeocoder}
     */
    setLimit: function (limit) {
        this.options.limit = limit;
        if (this._typeahead) this._typeahead.options.limit = limit;
        return this;
    },

    /**
     * Get the radius value for the number of results to display used by the plugin
     * @returns {Number} The limit value for the number of results to display used by the plugin
     */
    getRadius: function () {
        return this.options.radius;
    },

    /**
     * Set the limit value for the number of results to display used by the plugin
     * @param {Number} radius the number of search results to return
     * @returns {GoongGeocoder}
     */
    setRadius: function (radius) {
        this.options.radius = radius;
        if (this._typeahead) this._typeahead.options.radius = radius;
        return this;
    },

    /**
     * Set the geocoding endpoint used by the plugin.
     * @param {Function} origin A function which accepts an HTTPS URL to specify the endpoint to query results from.
     * @returns {GoongGeocoder} this
     */
    setOrigin: function (origin) {
        this.options.origin = origin;
        this.autoCompleteService = goongAutocomplete(
            GoongClient({
                accessToken: this.options.accessToken,
                origin: this.options.origin
            })
        );
        return this;
    },

    /**
     * Get the geocoding endpoint the plugin is currently set to
     * @returns {Function} the endpoint URL
     */
    getOrigin: function () {
        return this.options.origin;
    },

    /**
     * Handle the placement of a result marking the response result
     * @private
     * @param {Object} response the selected geojson feature
     * @returns {GoongGeocoder} this
     */
    _handleMarker: function (response) {
        // clean up any old marker that might be present
        if (!this._map) {
            return;
        }

        this._removeMarker();

        var defaultMarkerOptions = {
            color: '#469af7'
        };
        var markerOptions = extend({}, defaultMarkerOptions, this.options.marker);
        this.mapMarker = new this._goongjs.Marker(markerOptions);
        this.mapMarker.setLngLat([response.result.geometry.location.lng, response.result.geometry.location.lat]).addTo(this._map);
        return this;
    },

    /**
     * Handle the removal of a result marker
     * @private
     */
    _removeMarker: function () {
        if (this.mapMarker) {
            this.mapMarker.remove();
            this.mapMarker = null;
        }
    },

    /**
     * Subscribe to events that happen within the plugin.
     * @param {String} type name of event. Available events and the data passed into their respective event objects are:
     *
     * - __clear__ `Emitted when the input is cleared`
     * - __loading__ `{ query } Emitted when the geocoder is looking up a query`
     * - __results__ `{ results } Fired when the geocoder returns a response`
     * - __result__ `{ result } Fired when input is set`
     * - __error__ `{ error } Error as string`
     * @param {Function} fn function that's called when the event is emitted.
     * @returns {GoongGeocoder} this;
     */
    on: function (type, fn) {
        this._eventEmitter.on(type, fn);

        return this;
    },

    /**
     * Remove an event
     * @returns {GoongGeocoder} this
     * @param {String} type Event name.
     * @param {Function} fn Function that should unsubscribe to the event emitted.
     */
    off: function (type, fn) {
        this._eventEmitter.removeListener(type, fn);

        // this.eventManager.remove();
        return this;
    }
};
module.exports = GoongGeocoder;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-js/dist/goong-js.js":
/*!***********************************************************!*\
  !*** ./node_modules/@goongmaps/goong-js/dist/goong-js.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Goong JS is licensed under the 3-Clause BSD License */
(function (global, factory) {
 true ? module.exports = factory() :
undefined;
}(this, (function () { 'use strict';

/* eslint-disable */

var shared, worker, goongjs;
// define gets called three times: one for each chunk. we rely on the order
// they're imported to know which is which
function define(_, chunk) {
if (!shared) {
    shared = chunk;
} else if (!worker) {
    worker = chunk;
} else {
    var workerBundleString = 'var sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);'

    var sharedChunk = {};
    shared(sharedChunk);
    goongjs = chunk(sharedChunk);
    goongjs.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
}
}


define(["exports"],(function(t){"use strict";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=n;function n(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=n,this.p2x=r,this.p2y=n;}n.prototype.sampleCurveX=function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},n.prototype.sampleCurveY=function(t){return ((this.ay*t+this.by)*t+this.cy)*t},n.prototype.sampleCurveDerivativeX=function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},n.prototype.solveCurveX=function(t,e){var r,n,i,a,o;for(void 0===e&&(e=1e-6),i=t,o=0;o<8;o++){if(a=this.sampleCurveX(i)-t,Math.abs(a)<e)return i;var s=this.sampleCurveDerivativeX(i);if(Math.abs(s)<1e-6)break;i-=a/s;}if((i=t)<(r=0))return r;if(i>(n=1))return n;for(;r<n;){if(a=this.sampleCurveX(i),Math.abs(a-t)<e)return i;t>a?r=i:n=i,i=.5*(n-r)+r;}return i},n.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))};var i=a;function a(t,e){this.x=t,this.y=e;}function o(t,e,n,i){var a=new r(t,e,n,i);return function(t){return a.solve(t)}}a.prototype={clone:function(){return new a(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,r=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=r,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=e*this.x-r*this.y,i=r*this.x+e*this.y;return this.x=n,this.y=i,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.x+r*(this.x-e.x)-n*(this.y-e.y),a=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=i,this.y=a,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},a.convert=function(t){return t instanceof a?t:Array.isArray(t)?new a(t[0],t[1]):t};var s=o(.25,.1,.25,1);function u(t,e,r){return Math.min(r,Math.max(e,t))}function l(t,e,r){var n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i}function p(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var a=i[n];for(var o in a)t[o]=a[o];}return t}var c=1;function h(){return c++}function f(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}function y(t){return !!t&&/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}function d(t,e){t.forEach((function(t){e[t]&&(e[t]=e[t].bind(e));}));}function m(t,e){return -1!==t.indexOf(e,t.length-e.length)}function v(t,e,r){var n={};for(var i in t)n[i]=e.call(r||this,t[i],i,t);return n}function g(t,e,r){var n={};for(var i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function x(t){return Array.isArray(t)?t.map(x):"object"==typeof t&&t?v(t,x):t}var b={};function _(t){b[t]||("undefined"!=typeof console&&console.warn(t),b[t]=!0);}function w(t,e,r){return (r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function A(t){for(var e=0,r=0,n=t.length,i=n-1,a=void 0,o=void 0;r<n;i=r++)a=t[r],e+=((o=t[i]).x-a.x)*(a.y+o.y);return e}function S(){return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function k(t){var e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,(function(t,r,n,i){var a=n||i;return e[r]=!a||a.toLowerCase(),""})),e["max-age"]){var r=parseInt(e["max-age"],10);isNaN(r)?delete e["max-age"]:e["max-age"]=r;}return e}var I=null;function z(t){if(null==I){var e=t.navigator?t.navigator.userAgent:null;I=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")));}return I}function C(t){try{var e=self[t];return e.setItem("_mapbox_test_",1),e.removeItem("_mapbox_test_"),!0}catch(t){return !1}}var B,P,T,E,M=self.performance&&self.performance.now?self.performance.now.bind(self.performance):Date.now.bind(Date),V=self.requestAnimationFrame||self.mozRequestAnimationFrame||self.webkitRequestAnimationFrame||self.msRequestAnimationFrame,F=self.cancelAnimationFrame||self.mozCancelAnimationFrame||self.webkitCancelAnimationFrame||self.msCancelAnimationFrame,L={now:M,frame:function(t){var e=V(t);return {cancel:function(){return F(e)}}},getImageData:function(t,e){void 0===e&&(e=0);var r=self.document.createElement("canvas"),n=r.getContext("2d");if(!n)throw new Error("failed to create canvas 2d context");return r.width=t.width,r.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(-e,-e,t.width+2*e,t.height+2*e)},resolveURL:function(t){return B||(B=self.document.createElement("a")),B.href=t,B.href},hardwareConcurrency:self.navigator.hardwareConcurrency||4,get devicePixelRatio(){return self.devicePixelRatio},get prefersReducedMotion(){return !!self.matchMedia&&(null==P&&(P=self.matchMedia("(prefers-reduced-motion: reduce)")),P.matches)}},O={API_URL:"https://rsapi.goong.io",get EVENTS_URL(){return "https://rsapi.goong.io"},FEEDBACK_URL:"https://account.goong.io",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null,MAX_PARALLEL_IMAGE_REQUESTS:16},D={supported:!1,testSupport:function(t){if(R||!E)return;U?j(t):T=t;}},R=!1,U=!1;function j(t){var e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e);try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,E),t.isContextLost())return;D.supported=!0;}catch(t){}t.deleteTexture(e),R=!0;}self.document&&((E=self.document.createElement("img")).onload=function(){T&&j(T),T=null,U=!0;},E.onerror=function(){R=!0,T=null;},E.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=");var q="01";var N=function(t,e){this._transformRequestFn=t,this._customAccessToken=e,this._createSkuToken();};function K(t){return !1}N.prototype._createSkuToken=function(){var t=function(){for(var t="",e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return {token:["1",q,t].join(""),tokenExpiresAt:Date.now()+432e5}}();this._skuToken=t.token,this._skuTokenExpiresAt=t.tokenExpiresAt;},N.prototype._isSkuTokenExpired=function(){return Date.now()>this._skuTokenExpiresAt},N.prototype.transformRequest=function(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}},N.prototype.normalizeStyleURL=function(t,e){return t+"?api_key="+(e=this._customAccessToken||e||O.ACCESS_TOKEN)},N.prototype.normalizeGlyphsURL=function(t,e){return t},N.prototype.normalizeSourceURL=function(t,e){return t},N.prototype.normalizeSpriteURL=function(t,e,r,n){var i=J(t);return i.path+=""+e+r,H(i)},N.prototype.normalizeTileURL=function(t,e,r){return this._isSkuTokenExpired()&&this._createSkuToken(),t},N.prototype.canonicalizeTileURL=function(t){var e=J(t);if(!e.path.match(/(^\/v4\/)/)||!e.path.match(/\.[\w]+$/))return t;var r="mapbox://tiles/";r+=e.path.replace("/v4/","");var n=e.params.filter((function(t){return !t.match(/^api_key=/)}));return n.length&&(r+="?"+n.join("&")),r},N.prototype.canonicalizeTileset=function(t,e){return t.tiles||[]},N.prototype._makeAPIURL=function(t,e){var r=J(O.API_URL);if(t.protocol=r.protocol,t.authority=r.authority,"/"!==r.path&&(t.path=""+r.path+t.path),!O.REQUIRE_ACCESS_TOKEN)return H(t);if(!(e=e||O.ACCESS_TOKEN))throw new Error("An API access token is required to use Goong JS. See https://docs.goong.io");return t.params=t.params.filter((function(t){return -1===t.indexOf("api_key")})),t.params.push("api_key="+e),H(t)};var X=/^((https?:)?\/\/)?([^\/]+\.)?goong\.io(\/|\?|$)/i;function Z(t){return X.test(t)}var G=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;function J(t){var e=t.match(G);if(!e)throw new Error("Unable to parse URL object");return {protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function H(t){var e=t.params.length?"?"+t.params.join("&"):"";return t.protocol+"://"+t.authority+t.path+e}function Y(t){if(!t)return null;var e,r=t.split(".");if(!r||3!==r.length)return null;try{return JSON.parse((e=r[1],decodeURIComponent(self.atob(e).split("").map((function(t){return "%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""))))}catch(t){return null}}var $=function(t){this.type=t,this.anonId=null,this.eventData={},this.queue=[],this.pendingRequest=null;};$.prototype.getStorageKey=function(t){var e,r=Y(O.ACCESS_TOKEN),n="";return r&&r.u?(e=r.u,n=self.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode(Number("0x"+e))})))):n=O.ACCESS_TOKEN||"",t?"goong.eventData."+t+":"+n:"goong.eventData:"+n},$.prototype.fetchEventData=function(){var t=C("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{var n=self.localStorage.getItem(e);n&&(this.eventData=JSON.parse(n));var i=self.localStorage.getItem(r);i&&(this.anonId=i);}catch(t){_("Unable to read from LocalStorage");}},$.prototype.saveEventData=function(){var t=C("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{self.localStorage.setItem(r,this.anonId),Object.keys(this.eventData).length>=1&&self.localStorage.setItem(e,JSON.stringify(this.eventData));}catch(t){_("Unable to write to LocalStorage");}},$.prototype.processRequests=function(t){},$.prototype.postEvent=function(t,e,r,n){},$.prototype.queueRequest=function(t,e){this.queue.push(t),this.processRequests(e);};var W,Q,tt=function(t){function e(){t.call(this,"map.load"),this.success={},this.skuToken="";}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.postMapLoadEvent=function(t,e,r,n){this.skuToken=r,(O.EVENTS_URL&&n||O.ACCESS_TOKEN&&Array.isArray(t)&&t.some((function(t){return Z(t)})))&&this.queueRequest({id:e,timestamp:Date.now()},n);},e.prototype.processRequests=function(t){var e=this;if(!this.pendingRequest&&0!==this.queue.length){var r=this.queue.shift(),n=r.id,i=r.timestamp;n&&this.success[n]||(this.anonId||this.fetchEventData(),y(this.anonId)||(this.anonId=f()),this.postEvent(i,{skuToken:this.skuToken},(function(t){t||n&&(e.success[n]=!0);}),t));}},e}($),et=new(function(t){function e(e){t.call(this,"appUserTurnstile"),this._customAccessToken=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.postTurnstileEvent=function(t,e){O.EVENTS_URL&&O.ACCESS_TOKEN&&Array.isArray(t)&&t.some((function(t){return Z(t)}))&&this.queueRequest(Date.now(),e);},e.prototype.processRequests=function(t){var e=this;if(!this.pendingRequest&&0!==this.queue.length){this.anonId&&this.eventData.lastSuccess&&this.eventData.tokenU||this.fetchEventData();var r=Y(O.ACCESS_TOKEN),n=r?r.u:O.ACCESS_TOKEN,i=n!==this.eventData.tokenU;y(this.anonId)||(this.anonId=f(),i=!0);var a=this.queue.shift();if(this.eventData.lastSuccess){var o=new Date(this.eventData.lastSuccess),s=new Date(a),u=(a-this.eventData.lastSuccess)/864e5;i=i||u>=1||u<-1||o.getDate()!==s.getDate();}else i=!0;if(!i)return this.processRequests();this.postEvent(a,{"enabled.telemetry":!1},(function(t){t||(e.eventData.lastSuccess=a,e.eventData.tokenU=n);}),t);}},e}($)),rt=et.postTurnstileEvent.bind(et),nt=new tt,it=nt.postMapLoadEvent.bind(nt),at="mapbox-tiles",ot=500,st=50,ut=42e4;function lt(){self.caches&&!W&&(W=self.caches.open(at));}function pt(t,e,r){if(lt(),W){var n={status:e.status,statusText:e.statusText,headers:new self.Headers};e.headers.forEach((function(t,e){return n.headers.set(e,t)}));var i=k(e.headers.get("Cache-Control")||"");if(!i["no-store"])i["max-age"]&&n.headers.set("Expires",new Date(r+1e3*i["max-age"]).toUTCString()),new Date(n.headers.get("Expires")).getTime()-r<ut||function(t,e){if(void 0===Q)try{new Response(new ReadableStream),Q=!0;}catch(t){Q=!1;}Q?e(t.body):t.blob().then(e);}(e,(function(e){var r=new self.Response(e,n);lt(),W&&W.then((function(e){return e.put(ct(t.url),r)})).catch((function(t){return _(t.message)}));}));}}function ct(t){var e=t.indexOf("?");return e<0?t:t.slice(0,e)}function ht(t,e){if(lt(),!W)return e(null);var r=ct(t.url);W.then((function(t){t.match(r).then((function(n){var i=function(t){if(!t)return !1;var e=new Date(t.headers.get("Expires")||0),r=k(t.headers.get("Cache-Control")||"");return e>Date.now()&&!r["no-cache"]}(n);t.delete(r),i&&t.put(r,n.clone()),e(null,n,i);})).catch(e);})).catch(e);}var ft,yt=1/0;function dt(){return null==ft&&(ft=self.OffscreenCanvas&&new self.OffscreenCanvas(1,1).getContext("2d")&&"function"==typeof self.createImageBitmap),ft}var mt={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};"function"==typeof Object.freeze&&Object.freeze(mt);var vt=function(t){function e(e,r,n){401===r&&Z(n)&&(e+=": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes"),t.call(this,e),this.status=r,this.url=n,this.name=this.constructor.name,this.message=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+" ("+this.status+"): "+this.url},e}(Error),gt=S()?function(){return self.worker&&self.worker.referrer}:function(){return ("blob:"===self.location.protocol?self.parent:self).location.href};function xt(t,e){var r,n=new self.AbortController,i=new self.Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:gt(),signal:n.signal}),a=!1,o=!1,s=(r=i.url).indexOf("sku=")>0&&Z(r);"json"===t.type&&i.headers.set("Accept","application/json");var u=function(r,n,a){if(!o){if(r&&"SecurityError"!==r.message&&_(r),n&&a)return l(n);var u=Date.now();self.fetch(i).then((function(r){if(r.ok){var n=s?r.clone():null;return l(r,n,u)}return e(new vt(r.statusText,r.status,t.url))})).catch((function(t){20!==t.code&&e(new Error(t.message));}));}},l=function(r,n,s){("arrayBuffer"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then((function(t){o||(n&&s&&pt(i,n,s),a=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")));})).catch((function(t){o||e(new Error(t.message));}));};return s?ht(i,u):u(null,null),{cancel:function(){o=!0,a||n.abort();}}}var bt=function(t,e){if(r=t.url,!(/^file:/.test(r)||/^file:/.test(gt())&&!/^\w+:/.test(r))){if(self.fetch&&self.Request&&self.AbortController&&self.Request.prototype.hasOwnProperty("signal"))return xt(t,e);if(S()&&self.worker&&self.worker.actor){return self.worker.actor.send("getResource",t,e,void 0,!0)}}var r;return function(t,e){var r=new self.XMLHttpRequest;for(var n in r.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(r.responseType="arraybuffer"),t.headers)r.setRequestHeader(n,t.headers[n]);return "json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=function(){e(new Error(r.statusText));},r.onload=function(){if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){var n=r.response;if("json"===t.type)try{n=JSON.parse(r.response);}catch(t){return e(t)}e(null,n,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"));}else e(new vt(r.statusText,r.status,t.url));},r.send(t.body),{cancel:function(){return r.abort()}}}(t,e)},_t=function(t,e){return bt(p(t,{type:"arrayBuffer"}),e)};var wt,At,St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";wt=[],At=0;var kt=function(t,e){if(D.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*"),At>=O.MAX_PARALLEL_IMAGE_REQUESTS){var r={requestParameters:t,callback:e,cancelled:!1,cancel:function(){this.cancelled=!0;}};return wt.push(r),r}At++;var n=!1,i=function(){if(!n)for(n=!0,At--;wt.length&&At<O.MAX_PARALLEL_IMAGE_REQUESTS;){var t=wt.shift(),e=t.requestParameters,r=t.callback;t.cancelled||(t.cancel=kt(e,r).cancel);}},a=_t(t,(function(t,r,n,a){i(),t?e(t):r&&(dt()?function(t,e){var r=new self.Blob([new Uint8Array(t)],{type:"image/png"});self.createImageBitmap(r).then((function(t){e(null,t);})).catch((function(){e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."));}));}(r,e):function(t,e,r,n){var i=new self.Image,a=self.URL;i.onload=function(){e(null,i),a.revokeObjectURL(i.src);},i.onerror=function(){return e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))};var o=new self.Blob([new Uint8Array(t)],{type:"image/png"});i.cacheControl=r,i.expires=n,i.src=t.byteLength?a.createObjectURL(o):St;}(r,e,n,a));}));return {cancel:function(){a.cancel(),i();}}};function It(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e));}function zt(t,e,r){if(r&&r[t]){var n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}var Ct=function(t,e){void 0===e&&(e={}),p(this,e),this.type=t;},Bt=function(t){function e(e,r){void 0===r&&(r={}),t.call(this,"error",p({error:e},r));}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Ct),Pt=function(){};Pt.prototype.on=function(t,e){return this._listeners=this._listeners||{},It(t,e,this._listeners),this},Pt.prototype.off=function(t,e){return zt(t,e,this._listeners),zt(t,e,this._oneTimeListeners),this},Pt.prototype.once=function(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},It(t,e,this._oneTimeListeners),this},Pt.prototype.fire=function(t,e){"string"==typeof t&&(t=new Ct(t,e||{}));var r=t.type;if(this.listens(r)){t.target=this;for(var n=0,i=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];n<i.length;n+=1){i[n].call(this,t);}for(var a=0,o=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];a<o.length;a+=1){var s=o[a];zt(r,s,this._oneTimeListeners),s.call(this,t);}var u=this._eventedParent;u&&(p(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),u.fire(t));}else t instanceof Bt&&console.error(t.error);return this},Pt.prototype.listens=function(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)},Pt.prototype.setEventedParent=function(t,e){return this._eventedParent=t,this._eventedParentData=e,this};var Tt={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},promoteId:{type:"promoteId"},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1},promoteId:{type:"promoteId"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},expression_name:{type:"enum",values:{let:{group:"Variable binding"},var:{group:"Variable binding"},literal:{group:"Types"},array:{group:"Types"},at:{group:"Lookup"},in:{group:"Lookup"},case:{group:"Decision"},match:{group:"Decision"},coalesce:{group:"Decision"},step:{group:"Ramps, scales, curves"},interpolate:{group:"Ramps, scales, curves"},"interpolate-hcl":{group:"Ramps, scales, curves"},"interpolate-lab":{group:"Ramps, scales, curves"},ln2:{group:"Math"},pi:{group:"Math"},e:{group:"Math"},typeof:{group:"Types"},string:{group:"Types"},number:{group:"Types"},boolean:{group:"Types"},object:{group:"Types"},collator:{group:"Types"},format:{group:"Types"},image:{group:"Types"},"number-format":{group:"Types"},"to-string":{group:"Types"},"to-number":{group:"Types"},"to-boolean":{group:"Types"},"to-rgba":{group:"Color"},"to-color":{group:"Types"},rgb:{group:"Color"},rgba:{group:"Color"},get:{group:"Lookup"},has:{group:"Lookup"},length:{group:"Lookup"},properties:{group:"Feature data"},"feature-state":{group:"Feature data"},"geometry-type":{group:"Feature data"},id:{group:"Feature data"},zoom:{group:"Zoom"},"heatmap-density":{group:"Heatmap"},"line-progress":{group:"Feature data"},accumulated:{group:"Feature data"},"+":{group:"Math"},"*":{group:"Math"},"-":{group:"Math"},"/":{group:"Math"},"%":{group:"Math"},"^":{group:"Math"},sqrt:{group:"Math"},log10:{group:"Math"},ln:{group:"Math"},log2:{group:"Math"},sin:{group:"Math"},cos:{group:"Math"},tan:{group:"Math"},asin:{group:"Math"},acos:{group:"Math"},atan:{group:"Math"},min:{group:"Math"},max:{group:"Math"},round:{group:"Math"},abs:{group:"Math"},ceil:{group:"Math"},floor:{group:"Math"},"==":{group:"Decision"},"!=":{group:"Decision"},">":{group:"Decision"},"<":{group:"Decision"},">=":{group:"Decision"},"<=":{group:"Decision"},all:{group:"Decision"},any:{group:"Decision"},"!":{group:"Decision"},"is-supported-script":{group:"String"},upcase:{group:"String"},downcase:{group:"String"},concat:{group:"String"},"resolved-locale":{group:"String"}}},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}}},Et=function(t,e,r,n){this.message=(t?t+": ":"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);};function Mt(t){var e=t.key,r=t.value;return r?[new Et(e,r,"constants have been deprecated as of v8")]:[]}function Vt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];for(var n=0,i=e;n<i.length;n+=1){var a=i[n];for(var o in a)t[o]=a[o];}return t}function Ft(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function Lt(t){if(Array.isArray(t))return t.map(Lt);if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){var e={};for(var r in t)e[r]=Lt(t[r]);return e}return Ft(t)}var Ot=function(t){function e(e,r){t.call(this,r),this.message=r,this.key=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),Dt=function(t,e){void 0===e&&(e=[]),this.parent=t,this.bindings={};for(var r=0,n=e;r<n.length;r+=1){var i=n[r],a=i[0],o=i[1];this.bindings[a]=o;}};Dt.prototype.concat=function(t){return new Dt(this,t)},Dt.prototype.get=function(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(t+" not found in scope.")},Dt.prototype.has=function(t){return !!this.bindings[t]||!!this.parent&&this.parent.has(t)};var Rt={kind:"null"},Ut={kind:"number"},jt={kind:"string"},qt={kind:"boolean"},Nt={kind:"color"},Kt={kind:"object"},Xt={kind:"value"},Zt={kind:"collator"},Gt={kind:"formatted"},Jt={kind:"resolvedImage"};function Ht(t,e){return {kind:"array",itemType:t,N:e}}function Yt(t){if("array"===t.kind){var e=Yt(t.itemType);return "number"==typeof t.N?"array<"+e+", "+t.N+">":"value"===t.itemType.kind?"array":"array<"+e+">"}return t.kind}var $t=[Rt,Ut,jt,qt,Nt,Gt,Kt,Ht(Xt),Jt];function Wt(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!Wt(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else{if(t.kind===e.kind)return null;if("value"===t.kind)for(var r=0,n=$t;r<n.length;r+=1){if(!Wt(n[r],e))return null}}return "Expected "+Yt(t)+" but found "+Yt(e)+" instead."}var Qt=e((function(t,e){var r={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function n(t){return (t=Math.round(t))<0?0:t>255?255:t}function i(t){return t<0?0:t>1?1:t}function a(t){return "%"===t[t.length-1]?n(parseFloat(t)/100*255):n(parseInt(t))}function o(t){return "%"===t[t.length-1]?i(parseFloat(t)/100):i(parseFloat(t))}function s(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{e.parseCSSColor=function(t){var e,i=t.replace(/ /g,"").toLowerCase();if(i in r)return r[i].slice();if("#"===i[0])return 4===i.length?(e=parseInt(i.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===i.length&&(e=parseInt(i.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null;var u=i.indexOf("("),l=i.indexOf(")");if(-1!==u&&l+1===i.length){var p=i.substr(0,u),c=i.substr(u+1,l-(u+1)).split(","),h=1;switch(p){case"rgba":if(4!==c.length)return null;h=o(c.pop());case"rgb":return 3!==c.length?null:[a(c[0]),a(c[1]),a(c[2]),h];case"hsla":if(4!==c.length)return null;h=o(c.pop());case"hsl":if(3!==c.length)return null;var f=(parseFloat(c[0])%360+360)%360/360,y=o(c[1]),d=o(c[2]),m=d<=.5?d*(y+1):d+y-d*y,v=2*d-m;return [n(255*s(v,m,f+1/3)),n(255*s(v,m,f)),n(255*s(v,m,f-1/3)),h];default:return null}}return null};}catch(t){}})).parseCSSColor,te=function(t,e,r,n){void 0===n&&(n=1),this.r=t,this.g=e,this.b=r,this.a=n;};te.parse=function(t){if(t){if(t instanceof te)return t;if("string"==typeof t){var e=Qt(t);if(e)return new te(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3])}}},te.prototype.toString=function(){var t=this.toArray(),e=t[0],r=t[1],n=t[2],i=t[3];return "rgba("+Math.round(e)+","+Math.round(r)+","+Math.round(n)+","+i+")"},te.prototype.toArray=function(){var t=this.r,e=this.g,r=this.b,n=this.a;return 0===n?[0,0,0,0]:[255*t/n,255*e/n,255*r/n,n]},te.black=new te(0,0,0,1),te.white=new te(1,1,1,1),te.transparent=new te(0,0,0,0),te.red=new te(1,0,0,1);var ee=function(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});};ee.prototype.compare=function(t,e){return this.collator.compare(t,e)},ee.prototype.resolvedLocale=function(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale};var re=function(t,e,r,n,i){this.text=t,this.image=e,this.scale=r,this.fontStack=n,this.textColor=i;},ne=function(t){this.sections=t;};ne.fromString=function(t){return new ne([new re(t,null,null,null,null)])},ne.prototype.isEmpty=function(){return 0===this.sections.length||!this.sections.some((function(t){return 0!==t.text.length||t.image&&0!==t.image.name.length}))},ne.factory=function(t){return t instanceof ne?t:ne.fromString(t)},ne.prototype.toString=function(){return 0===this.sections.length?"":this.sections.map((function(t){return t.text})).join("")},ne.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var n=r[e];if(n.image)t.push(["image",n.image.name]);else{t.push(n.text);var i={};n.fontStack&&(i["text-font"]=["literal",n.fontStack.split(",")]),n.scale&&(i["font-scale"]=n.scale),n.textColor&&(i["text-color"]=["rgba"].concat(n.textColor.toArray())),t.push(i);}}return t};var ie=function(t){this.name=t.name,this.available=t.available;};function ae(t,e,r,n){return "number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:"Invalid rgba value ["+[t,e,r,n].join(", ")+"]: 'a' must be between 0 and 1.":"Invalid rgba value ["+("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")+"]: 'r', 'g', and 'b' must be between 0 and 255."}function oe(t){if(null===t)return Rt;if("string"==typeof t)return jt;if("boolean"==typeof t)return qt;if("number"==typeof t)return Ut;if(t instanceof te)return Nt;if(t instanceof ee)return Zt;if(t instanceof ne)return Gt;if(t instanceof ie)return Jt;if(Array.isArray(t)){for(var e,r=t.length,n=0,i=t;n<i.length;n+=1){var a=oe(i[n]);if(e){if(e===a)continue;e=Xt;break}e=a;}return Ht(e||Xt,r)}return Kt}function se(t){var e=typeof t;return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof te||t instanceof ne||t instanceof ie?t.toString():JSON.stringify(t)}ie.prototype.toString=function(){return this.name},ie.fromString=function(t){return new ie({name:t,available:!1})},ie.prototype.serialize=function(){return ["image",this.name]};var ue=function(t,e){this.type=t,this.value=e;};ue.parse=function(t,e){if(2!==t.length)return e.error("'literal' expression requires exactly one argument, but found "+(t.length-1)+" instead.");if(!function t(e){if(null===e)return !0;if("string"==typeof e)return !0;if("boolean"==typeof e)return !0;if("number"==typeof e)return !0;if(e instanceof te)return !0;if(e instanceof ee)return !0;if(e instanceof ne)return !0;if(e instanceof ie)return !0;if(Array.isArray(e)){for(var r=0,n=e;r<n.length;r+=1){if(!t(n[r]))return !1}return !0}if("object"==typeof e){for(var i in e)if(!t(e[i]))return !1;return !0}return !1}(t[1]))return e.error("invalid value");var r=t[1],n=oe(r),i=e.expectedType;return "array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new ue(n,r)},ue.prototype.evaluate=function(){return this.value},ue.prototype.eachChild=function(){},ue.prototype.possibleOutputs=function(){return [this.value]},ue.prototype.serialize=function(){return "array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof te?["rgba"].concat(this.value.toArray()):this.value instanceof ne?this.value.serialize():this.value};var le=function(t){this.name="ExpressionEvaluationError",this.message=t;};le.prototype.toJSON=function(){return this.message};var pe={string:jt,number:Ut,boolean:qt,object:Kt},ce=function(t,e){this.type=t,this.args=e;};ce.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r,n=1,i=t[0];if("array"===i){var a,o;if(t.length>2){var s=t[1];if("string"!=typeof s||!(s in pe)||"object"===s)return e.error('The item type argument of "array" must be one of string, number, boolean',1);a=pe[s],n++;}else a=Xt;if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2);o=t[2],n++;}r=Ht(a,o);}else r=pe[i];for(var u=[];n<t.length;n++){var l=e.parse(t[n],n,Xt);if(!l)return null;u.push(l);}return new ce(r,u)},ce.prototype.evaluate=function(t){for(var e=0;e<this.args.length;e++){var r=this.args[e].evaluate(t);if(!Wt(this.type,oe(r)))return r;if(e===this.args.length-1)throw new le("Expected value to be of type "+Yt(this.type)+", but found "+Yt(oe(r))+" instead.")}return null},ce.prototype.eachChild=function(t){this.args.forEach(t);},ce.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map((function(t){return t.possibleOutputs()})))},ce.prototype.serialize=function(){var t=this.type,e=[t.kind];if("array"===t.kind){var r=t.itemType;if("string"===r.kind||"number"===r.kind||"boolean"===r.kind){e.push(r.kind);var n=t.N;("number"==typeof n||this.args.length>1)&&e.push(n);}}return e.concat(this.args.map((function(t){return t.serialize()})))};var he=function(t){this.type=Gt,this.sections=t;};he.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r=t[1];if(!Array.isArray(r)&&"object"==typeof r)return e.error("First argument must be an image or text section.");for(var n=[],i=!1,a=1;a<=t.length-1;++a){var o=t[a];if(i&&"object"==typeof o&&!Array.isArray(o)){i=!1;var s=null;if(o["font-scale"]&&!(s=e.parse(o["font-scale"],1,Ut)))return null;var u=null;if(o["text-font"]&&!(u=e.parse(o["text-font"],1,Ht(jt))))return null;var l=null;if(o["text-color"]&&!(l=e.parse(o["text-color"],1,Nt)))return null;var p=n[n.length-1];p.scale=s,p.font=u,p.textColor=l;}else{var c=e.parse(t[a],1,Xt);if(!c)return null;var h=c.type.kind;if("string"!==h&&"value"!==h&&"null"!==h&&"resolvedImage"!==h)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");i=!0,n.push({content:c,scale:null,font:null,textColor:null});}}return new he(n)},he.prototype.evaluate=function(t){return new ne(this.sections.map((function(e){var r=e.content.evaluate(t);return oe(r)===Jt?new re("",r,null,null,null):new re(se(r),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))},he.prototype.eachChild=function(t){for(var e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t(n.content),n.scale&&t(n.scale),n.font&&t(n.font),n.textColor&&t(n.textColor);}},he.prototype.possibleOutputs=function(){return [void 0]},he.prototype.serialize=function(){for(var t=["format"],e=0,r=this.sections;e<r.length;e+=1){var n=r[e];t.push(n.content.serialize());var i={};n.scale&&(i["font-scale"]=n.scale.serialize()),n.font&&(i["text-font"]=n.font.serialize()),n.textColor&&(i["text-color"]=n.textColor.serialize()),t.push(i);}return t};var fe=function(t){this.type=Jt,this.input=t;};fe.parse=function(t,e){if(2!==t.length)return e.error("Expected two arguments.");var r=e.parse(t[1],1,jt);return r?new fe(r):e.error("No image name provided.")},fe.prototype.evaluate=function(t){var e=this.input.evaluate(t),r=!1;return t.availableImages&&t.availableImages.indexOf(e)>-1&&(r=!0),new ie({name:e,available:r})},fe.prototype.eachChild=function(t){t(this.input);},fe.prototype.possibleOutputs=function(){return [void 0]},fe.prototype.serialize=function(){return ["image",this.input.serialize()]};var ye={"to-boolean":qt,"to-color":Nt,"to-number":Ut,"to-string":jt},de=function(t,e){this.type=t,this.args=e;};de.parse=function(t,e){if(t.length<2)return e.error("Expected at least one argument.");var r=t[0];if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.");for(var n=ye[r],i=[],a=1;a<t.length;a++){var o=e.parse(t[a],a,Xt);if(!o)return null;i.push(o);}return new de(n,i)},de.prototype.evaluate=function(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t));if("color"===this.type.kind){for(var e,r,n=0,i=this.args;n<i.length;n+=1){if(r=null,(e=i[n].evaluate(t))instanceof te)return e;if("string"==typeof e){var a=t.parseColor(e);if(a)return a}else if(Array.isArray(e)&&!(r=e.length<3||e.length>4?"Invalid rbga value "+JSON.stringify(e)+": expected an array containing either three or four numeric values.":ae(e[0],e[1],e[2],e[3])))return new te(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new le(r||"Could not parse color from value '"+("string"==typeof e?e:String(JSON.stringify(e)))+"'")}if("number"===this.type.kind){for(var o=null,s=0,u=this.args;s<u.length;s+=1){if(null===(o=u[s].evaluate(t)))return 0;var l=Number(o);if(!isNaN(l))return l}throw new le("Could not convert "+JSON.stringify(o)+" to number.")}return "formatted"===this.type.kind?ne.fromString(se(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?ie.fromString(se(this.args[0].evaluate(t))):se(this.args[0].evaluate(t))},de.prototype.eachChild=function(t){this.args.forEach(t);},de.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map((function(t){return t.possibleOutputs()})))},de.prototype.serialize=function(){if("formatted"===this.type.kind)return new he([{content:this.args[0],scale:null,font:null,textColor:null}]).serialize();if("resolvedImage"===this.type.kind)return new fe(this.args[0]).serialize();var t=["to-"+this.type.kind];return this.eachChild((function(e){t.push(e.serialize());})),t};var me=["Unknown","Point","LineString","Polygon"],ve=function(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null;};ve.prototype.id=function(){return this.feature&&"id"in this.feature?this.feature.id:null},ve.prototype.geometryType=function(){return this.feature?"number"==typeof this.feature.type?me[this.feature.type]:this.feature.type:null},ve.prototype.properties=function(){return this.feature&&this.feature.properties||{}},ve.prototype.parseColor=function(t){var e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=te.parse(t)),e};var ge=function(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;};ge.prototype.evaluate=function(t){return this._evaluate(t,this.args)},ge.prototype.eachChild=function(t){this.args.forEach(t);},ge.prototype.possibleOutputs=function(){return [void 0]},ge.prototype.serialize=function(){return [this.name].concat(this.args.map((function(t){return t.serialize()})))},ge.parse=function(t,e){var r,n=t[0],i=ge.definitions[n];if(!i)return e.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0);for(var a=Array.isArray(i)?i[0]:i.type,o=Array.isArray(i)?[[i[1],i[2]]]:i.overloads,s=o.filter((function(e){var r=e[0];return !Array.isArray(r)||r.length===t.length-1})),u=null,l=0,p=s;l<p.length;l+=1){var c=p[l],h=c[0],f=c[1];u=new Se(e.registry,e.path,null,e.scope);for(var y=[],d=!1,m=1;m<t.length;m++){var v=t[m],g=Array.isArray(h)?h[m-1]:h.type,x=u.parse(v,1+y.length,g);if(!x){d=!0;break}y.push(x);}if(!d)if(Array.isArray(h)&&h.length!==y.length)u.error("Expected "+h.length+" arguments, but found "+y.length+" instead.");else{for(var b=0;b<y.length;b++){var _=Array.isArray(h)?h[b]:h.type,w=y[b];u.concat(b+1).checkSubtype(_,w.type);}if(0===u.errors.length)return new ge(n,a,f,y)}}if(1===s.length)(r=e.errors).push.apply(r,u.errors);else{for(var A=(s.length?s:o).map((function(t){var e,r=t[0];return e=r,Array.isArray(e)?"("+e.map(Yt).join(", ")+")":"("+Yt(e.type)+"...)"})).join(" | "),S=[],k=1;k<t.length;k++){var I=e.parse(t[k],1+S.length);if(!I)return null;S.push(Yt(I.type));}e.error("Expected arguments of type "+A+", but found ("+S.join(", ")+") instead.");}return null},ge.register=function(t,e){for(var r in ge.definitions=e,e)t[r]=ge;};var xe=function(t,e,r){this.type=Zt,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;};function be(t){if(t instanceof ge){if("get"===t.name&&1===t.args.length)return !1;if("feature-state"===t.name)return !1;if("has"===t.name&&1===t.args.length)return !1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return !1;if(/^filter-/.test(t.name))return !1}var e=!0;return t.eachChild((function(t){e&&!be(t)&&(e=!1);})),e}function _e(t){if(t instanceof ge&&"feature-state"===t.name)return !1;var e=!0;return t.eachChild((function(t){e&&!_e(t)&&(e=!1);})),e}function we(t,e){if(t instanceof ge&&e.indexOf(t.name)>=0)return !1;var r=!0;return t.eachChild((function(t){r&&!we(t,e)&&(r=!1);})),r}xe.parse=function(t,e){if(2!==t.length)return e.error("Expected one argument.");var r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");var n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,qt);if(!n)return null;var i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,qt);if(!i)return null;var a=null;return r.locale&&!(a=e.parse(r.locale,1,jt))?null:new xe(n,i,a)},xe.prototype.evaluate=function(t){return new ee(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)},xe.prototype.eachChild=function(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);},xe.prototype.possibleOutputs=function(){return [void 0]},xe.prototype.serialize=function(){var t={};return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]};var Ae=function(t,e){this.type=e.type,this.name=t,this.boundExpression=e;};Ae.parse=function(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");var r=t[1];return e.scope.has(r)?new Ae(r,e.scope.get(r)):e.error('Unknown variable "'+r+'". Make sure "'+r+'" has been bound in an enclosing "let" expression before using it.',1)},Ae.prototype.evaluate=function(t){return this.boundExpression.evaluate(t)},Ae.prototype.eachChild=function(){},Ae.prototype.possibleOutputs=function(){return [void 0]},Ae.prototype.serialize=function(){return ["var",this.name]};var Se=function(t,e,r,n,i){void 0===e&&(e=[]),void 0===n&&(n=new Dt),void 0===i&&(i=[]),this.registry=t,this.path=e,this.key=e.map((function(t){return "["+t+"]"})).join(""),this.scope=n,this.errors=i,this.expectedType=r;};function ke(t,e){for(var r,n,i=t.length-1,a=0,o=i,s=0;a<=o;)if(r=t[s=Math.floor((a+o)/2)],n=t[s+1],r<=e){if(s===i||e<n)return s;a=s+1;}else{if(!(r>e))throw new le("Input is not a number.");o=s-1;}return 0}Se.prototype.parse=function(t,e,r,n,i){return void 0===i&&(i={}),e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)},Se.prototype._parse=function(t,e){function r(t,e,r){return "assert"===r?new ce(e,[t]):"coerce"===r?new de(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');var n=t[0];if("string"!=typeof n)return this.error("Expression name must be a string, but found "+typeof n+' instead. If you wanted a literal array, use ["literal", [...]].',0),null;var i=this.registry[n];if(i){var a=i.parse(t,this);if(!a)return null;if(this.expectedType){var o=this.expectedType,s=a.type;if("string"!==o.kind&&"number"!==o.kind&&"boolean"!==o.kind&&"object"!==o.kind&&"array"!==o.kind||"value"!==s.kind)if("color"!==o.kind&&"formatted"!==o.kind&&"resolvedImage"!==o.kind||"value"!==s.kind&&"string"!==s.kind){if(this.checkSubtype(o,s))return null}else a=r(a,o,e.typeAnnotation||"coerce");else a=r(a,o,e.typeAnnotation||"assert");}if(!(a instanceof ue)&&"resolvedImage"!==a.type.kind&&function t(e){if(e instanceof Ae)return t(e.boundExpression);if(e instanceof ge&&"error"===e.name)return !1;if(e instanceof xe)return !1;var r=e instanceof de||e instanceof ce,n=!0;if(e.eachChild((function(e){n=r?n&&t(e):n&&e instanceof ue;})),!n)return !1;return be(e)&&we(e,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}(a)){var u=new ve;try{a=new ue(a.type,a.evaluate(u));}catch(t){return this.error(t.message),null}}return a}return this.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0)}return void 0===t?this.error("'undefined' value invalid. Use null instead."):"object"==typeof t?this.error('Bare objects invalid. Use ["literal", {...}] instead.'):this.error("Expected an array, but found "+typeof t+" instead.")},Se.prototype.concat=function(t,e,r){var n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new Se(this.registry,n,e||null,i,this.errors)},Se.prototype.error=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var n=""+this.key+e.map((function(t){return "["+t+"]"})).join("");this.errors.push(new Ot(n,t));},Se.prototype.checkSubtype=function(t,e){var r=Wt(t,e);return r&&this.error(r),r};var Ie=function(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(var n=0,i=r;n<i.length;n+=1){var a=i[n],o=a[0],s=a[1];this.labels.push(o),this.outputs.push(s);}};function ze(t,e,r){return t*(1-r)+e*r}Ie.parse=function(t,e){if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");var r=e.parse(t[1],1,Ut);if(!r)return null;var n=[],i=null;e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType);for(var a=1;a<t.length;a+=2){var o=1===a?-1/0:t[a],s=t[a+1],u=a,l=a+1;if("number"!=typeof o)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',u);if(n.length&&n[n.length-1][0]>=o)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',u);var p=e.parse(s,l,i);if(!p)return null;i=i||p.type,n.push([o,p]);}return new Ie(i,r,n)},Ie.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[ke(e,n)].evaluate(t)},Ie.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1){t(r[e]);}},Ie.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map((function(t){return t.possibleOutputs()})))},Ie.prototype.serialize=function(){for(var t=["step",this.input.serialize()],e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize());return t};var Ce=Object.freeze({__proto__:null,number:ze,color:function(t,e,r){return new te(ze(t.r,e.r,r),ze(t.g,e.g,r),ze(t.b,e.b,r),ze(t.a,e.a,r))},array:function(t,e,r){return t.map((function(t,n){return ze(t,e[n],r)}))}}),Be=.95047,Pe=1,Te=1.08883,Ee=4/29,Me=6/29,Ve=3*Me*Me,Fe=Me*Me*Me,Le=Math.PI/180,Oe=180/Math.PI;function De(t){return t>Fe?Math.pow(t,1/3):t/Ve+Ee}function Re(t){return t>Me?t*t*t:Ve*(t-Ee)}function Ue(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function je(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function qe(t){var e=je(t.r),r=je(t.g),n=je(t.b),i=De((.4124564*e+.3575761*r+.1804375*n)/Be),a=De((.2126729*e+.7151522*r+.072175*n)/Pe);return {l:116*a-16,a:500*(i-a),b:200*(a-De((.0193339*e+.119192*r+.9503041*n)/Te)),alpha:t.a}}function Ne(t){var e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,n=isNaN(t.b)?e:e-t.b/200;return e=Pe*Re(e),r=Be*Re(r),n=Te*Re(n),new te(Ue(3.2404542*r-1.5371385*e-.4985314*n),Ue(-.969266*r+1.8760108*e+.041556*n),Ue(.0556434*r-.2040259*e+1.0572252*n),t.alpha)}function Ke(t,e,r){var n=e-t;return t+r*(n>180||n<-180?n-360*Math.round(n/360):n)}var Xe={forward:qe,reverse:Ne,interpolate:function(t,e,r){return {l:ze(t.l,e.l,r),a:ze(t.a,e.a,r),b:ze(t.b,e.b,r),alpha:ze(t.alpha,e.alpha,r)}}},Ze={forward:function(t){var e=qe(t),r=e.l,n=e.a,i=e.b,a=Math.atan2(i,n)*Oe;return {h:a<0?a+360:a,c:Math.sqrt(n*n+i*i),l:r,alpha:t.a}},reverse:function(t){var e=t.h*Le,r=t.c;return Ne({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return {h:Ke(t.h,e.h,r),c:ze(t.c,e.c,r),l:ze(t.l,e.l,r),alpha:ze(t.alpha,e.alpha,r)}}},Ge=Object.freeze({__proto__:null,lab:Xe,hcl:Ze}),Je=function(t,e,r,n,i){this.type=t,this.operator=e,this.interpolation=r,this.input=n,this.labels=[],this.outputs=[];for(var a=0,o=i;a<o.length;a+=1){var s=o[a],u=s[0],l=s[1];this.labels.push(u),this.outputs.push(l);}};function He(t,e,r,n){var i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}Je.interpolationFactor=function(t,e,n,i){var a=0;if("exponential"===t.name)a=He(e,t.base,n,i);else if("linear"===t.name)a=He(e,1,n,i);else if("cubic-bezier"===t.name){var o=t.controlPoints;a=new r(o[0],o[1],o[2],o[3]).solve(He(e,1,n,i));}return a},Je.parse=function(t,e){var r=t[0],n=t[1],i=t[2],a=t.slice(3);if(!Array.isArray(n)||0===n.length)return e.error("Expected an interpolation type expression.",1);if("linear"===n[0])n={name:"linear"};else if("exponential"===n[0]){var o=n[1];if("number"!=typeof o)return e.error("Exponential interpolation requires a numeric base.",1,1);n={name:"exponential",base:o};}else{if("cubic-bezier"!==n[0])return e.error("Unknown interpolation type "+String(n[0]),1,0);var s=n.slice(1);if(4!==s.length||s.some((function(t){return "number"!=typeof t||t<0||t>1})))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);n={name:"cubic-bezier",controlPoints:s};}if(t.length-1<4)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(!(i=e.parse(i,2,Ut)))return null;var u=[],l=null;"interpolate-hcl"===r||"interpolate-lab"===r?l=Nt:e.expectedType&&"value"!==e.expectedType.kind&&(l=e.expectedType);for(var p=0;p<a.length;p+=2){var c=a[p],h=a[p+1],f=p+3,y=p+4;if("number"!=typeof c)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',f);if(u.length&&u[u.length-1][0]>=c)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',f);var d=e.parse(h,y,l);if(!d)return null;l=l||d.type,u.push([c,d]);}return "number"===l.kind||"color"===l.kind||"array"===l.kind&&"number"===l.itemType.kind&&"number"==typeof l.N?new Je(l,r,n,i,u):e.error("Type "+Yt(l)+" is not interpolatable.")},Je.prototype.evaluate=function(t){var e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);var n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);var i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);var a=ke(e,n),o=e[a],s=e[a+1],u=Je.interpolationFactor(this.interpolation,n,o,s),l=r[a].evaluate(t),p=r[a+1].evaluate(t);return "interpolate"===this.operator?Ce[this.type.kind.toLowerCase()](l,p,u):"interpolate-hcl"===this.operator?Ze.reverse(Ze.interpolate(Ze.forward(l),Ze.forward(p),u)):Xe.reverse(Xe.interpolate(Xe.forward(l),Xe.forward(p),u))},Je.prototype.eachChild=function(t){t(this.input);for(var e=0,r=this.outputs;e<r.length;e+=1){t(r[e]);}},Je.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map((function(t){return t.possibleOutputs()})))},Je.prototype.serialize=function(){var t;t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints);for(var e=[this.operator,t,this.input.serialize()],r=0;r<this.labels.length;r++)e.push(this.labels[r],this.outputs[r].serialize());return e};var Ye=function(t,e){this.type=t,this.args=e;};Ye.parse=function(t,e){if(t.length<2)return e.error("Expectected at least one argument.");var r=null,n=e.expectedType;n&&"value"!==n.kind&&(r=n);for(var i=[],a=0,o=t.slice(1);a<o.length;a+=1){var s=o[a],u=e.parse(s,1+i.length,r,void 0,{typeAnnotation:"omit"});if(!u)return null;r=r||u.type,i.push(u);}var l=n&&i.some((function(t){return Wt(n,t.type)}));return new Ye(l?Xt:r,i)},Ye.prototype.evaluate=function(t){for(var e,r=null,n=0,i=0,a=this.args;i<a.length;i+=1){if(n++,(r=a[i].evaluate(t))&&r instanceof ie&&!r.available&&(e||(e=r.name),r=null,n===this.args.length&&(r=e)),null!==r)break}return r},Ye.prototype.eachChild=function(t){this.args.forEach(t);},Ye.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.args.map((function(t){return t.possibleOutputs()})))},Ye.prototype.serialize=function(){var t=["coalesce"];return this.eachChild((function(e){t.push(e.serialize());})),t};var $e=function(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;};$e.prototype.evaluate=function(t){return this.result.evaluate(t)},$e.prototype.eachChild=function(t){for(var e=0,r=this.bindings;e<r.length;e+=1){t(r[e][1]);}t(this.result);},$e.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found "+(t.length-1)+" instead.");for(var r=[],n=1;n<t.length-1;n+=2){var i=t[n];if("string"!=typeof i)return e.error("Expected string, but found "+typeof i+" instead.",n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);var a=e.parse(t[n+1],n+1);if(!a)return null;r.push([i,a]);}var o=e.parse(t[t.length-1],t.length-1,e.expectedType,r);return o?new $e(r,o):null},$e.prototype.possibleOutputs=function(){return this.result.possibleOutputs()},$e.prototype.serialize=function(){for(var t=["let"],e=0,r=this.bindings;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];t.push(i,a.serialize());}return t.push(this.result.serialize()),t};var We=function(t,e,r){this.type=t,this.index=e,this.input=r;};We.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1,Ut),n=e.parse(t[2],2,Ht(e.expectedType||Xt));if(!r||!n)return null;var i=n.type;return new We(i.itemType,r,n)},We.prototype.evaluate=function(t){var e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new le("Array index out of bounds: "+e+" < 0.");if(e>=r.length)throw new le("Array index out of bounds: "+e+" > "+(r.length-1)+".");if(e!==Math.floor(e))throw new le("Array index must be an integer, but found "+e+" instead.");return r[e]},We.prototype.eachChild=function(t){t(this.index),t(this.input);},We.prototype.possibleOutputs=function(){return [void 0]},We.prototype.serialize=function(){return ["at",this.index.serialize(),this.input.serialize()]};var Qe=function(t,e){this.type=qt,this.needle=t,this.haystack=e;};Qe.parse=function(t,e){if(3!==t.length)return e.error("Expected 2 arguments, but found "+(t.length-1)+" instead.");var r,n=e.parse(t[1],1,Xt),i=e.parse(t[2],2,Xt);return n&&i?"boolean"!==(r=n.type).kind&&"string"!==r.kind&&"number"!==r.kind&&"null"!==r.kind&&"value"!==r.kind?e.error("Expected first argument to be of type boolean, string, number or null, but found "+Yt(n.type)+" instead"):new Qe(n,i):null},Qe.prototype.evaluate=function(t){var e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!e||!r)return !1;if(!function(t){return "boolean"==typeof t||"string"==typeof t||"number"==typeof t}(e))throw new le("Expected first argument to be of type boolean, string or number, but found "+Yt(oe(e))+" instead.");if(!function(t){return Array.isArray(t)||"string"==typeof t}(r))throw new le("Expected second argument to be of type array or string, but found "+Yt(oe(r))+" instead.");return r.indexOf(e)>=0},Qe.prototype.eachChild=function(t){t(this.needle),t(this.haystack);},Qe.prototype.possibleOutputs=function(){return [!0,!1]},Qe.prototype.serialize=function(){return ["in",this.needle.serialize(),this.haystack.serialize()]};var tr=function(t,e,r,n,i,a){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=a;};tr.parse=function(t,e){if(t.length<5)return e.error("Expected at least 4 arguments, but found only "+(t.length-1)+".");if(t.length%2!=1)return e.error("Expected an even number of arguments.");var r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);for(var i={},a=[],o=2;o<t.length-1;o+=2){var s=t[o],u=t[o+1];Array.isArray(s)||(s=[s]);var l=e.concat(o);if(0===s.length)return l.error("Expected at least one branch label.");for(var p=0,c=s;p<c.length;p+=1){var h=c[p];if("number"!=typeof h&&"string"!=typeof h)return l.error("Branch labels must be numbers or strings.");if("number"==typeof h&&Math.abs(h)>Number.MAX_SAFE_INTEGER)return l.error("Branch labels must be integers no larger than "+Number.MAX_SAFE_INTEGER+".");if("number"==typeof h&&Math.floor(h)!==h)return l.error("Numeric branch labels must be integer values.");if(r){if(l.checkSubtype(r,oe(h)))return null}else r=oe(h);if(void 0!==i[String(h)])return l.error("Branch labels must be unique.");i[String(h)]=a.length;}var f=e.parse(u,o,n);if(!f)return null;n=n||f.type,a.push(f);}var y=e.parse(t[1],1,Xt);if(!y)return null;var d=e.parse(t[t.length-1],t.length-1,n);return d?"value"!==y.type.kind&&e.concat(1).checkSubtype(r,y.type)?null:new tr(r,n,y,i,a,d):null},tr.prototype.evaluate=function(t){var e=this.input.evaluate(t);return (oe(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)},tr.prototype.eachChild=function(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);},tr.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.outputs.map((function(t){return t.possibleOutputs()}))).concat(this.otherwise.possibleOutputs())},tr.prototype.serialize=function(){for(var t=this,e=["match",this.input.serialize()],r=[],n={},i=0,a=Object.keys(this.cases).sort();i<a.length;i+=1){var o=a[i];void 0===(c=n[this.cases[o]])?(n[this.cases[o]]=r.length,r.push([this.cases[o],[o]])):r[c][1].push(o);}for(var s=function(e){return "number"===t.inputType.kind?Number(e):e},u=0,l=r;u<l.length;u+=1){var p=l[u],c=p[0],h=p[1];1===h.length?e.push(s(h[0])):e.push(h.map(s)),e.push(this.outputs[outputIndex$1].serialize());}return e.push(this.otherwise.serialize()),e};var er=function(t,e,r){this.type=t,this.branches=e,this.otherwise=r;};function rr(t,e){return "=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function nr(t,e,r,n){return 0===n.compare(e,r)}function ir(t,e,r){var n="=="!==t&&"!="!==t;return function(){function i(t,e,r){this.type=qt,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind;}return i.parse=function(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");var r=t[0],a=e.parse(t[1],1,Xt);if(!a)return null;if(!rr(r,a.type))return e.concat(1).error('"'+r+"\" comparisons are not supported for type '"+Yt(a.type)+"'.");var o=e.parse(t[2],2,Xt);if(!o)return null;if(!rr(r,o.type))return e.concat(2).error('"'+r+"\" comparisons are not supported for type '"+Yt(o.type)+"'.");if(a.type.kind!==o.type.kind&&"value"!==a.type.kind&&"value"!==o.type.kind)return e.error("Cannot compare types '"+Yt(a.type)+"' and '"+Yt(o.type)+"'.");n&&("value"===a.type.kind&&"value"!==o.type.kind?a=new ce(o.type,[a]):"value"!==a.type.kind&&"value"===o.type.kind&&(o=new ce(a.type,[o])));var s=null;if(4===t.length){if("string"!==a.type.kind&&"string"!==o.type.kind&&"value"!==a.type.kind&&"value"!==o.type.kind)return e.error("Cannot use collator to compare non-string types.");if(!(s=e.parse(t[3],3,Zt)))return null}return new i(a,o,s)},i.prototype.evaluate=function(i){var a=this.lhs.evaluate(i),o=this.rhs.evaluate(i);if(n&&this.hasUntypedArgument){var s=oe(a),u=oe(o);if(s.kind!==u.kind||"string"!==s.kind&&"number"!==s.kind)throw new le('Expected arguments for "'+t+'" to be (string, string) or (number, number), but found ('+s.kind+", "+u.kind+") instead.")}if(this.collator&&!n&&this.hasUntypedArgument){var l=oe(a),p=oe(o);if("string"!==l.kind||"string"!==p.kind)return e(i,a,o)}return this.collator?r(i,a,o,this.collator.evaluate(i)):e(i,a,o)},i.prototype.eachChild=function(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);},i.prototype.possibleOutputs=function(){return [!0,!1]},i.prototype.serialize=function(){var e=[t];return this.eachChild((function(t){e.push(t.serialize());})),e},i}()}er.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found only "+(t.length-1)+".");if(t.length%2!=0)return e.error("Expected an odd number of arguments.");var r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);for(var n=[],i=1;i<t.length-1;i+=2){var a=e.parse(t[i],i,qt);if(!a)return null;var o=e.parse(t[i+1],i+1,r);if(!o)return null;n.push([a,o]),r=r||o.type;}var s=e.parse(t[t.length-1],t.length-1,r);return s?new er(r,n,s):null},er.prototype.evaluate=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];if(i.evaluate(t))return a.evaluate(t)}return this.otherwise.evaluate(t)},er.prototype.eachChild=function(t){for(var e=0,r=this.branches;e<r.length;e+=1){var n=r[e],i=n[0],a=n[1];t(i),t(a);}t(this.otherwise);},er.prototype.possibleOutputs=function(){var t;return (t=[]).concat.apply(t,this.branches.map((function(t){t[0];return t[1].possibleOutputs()}))).concat(this.otherwise.possibleOutputs())},er.prototype.serialize=function(){var t=["case"];return this.eachChild((function(e){t.push(e.serialize());})),t};var ar=ir("==",(function(t,e,r){return e===r}),nr),or=ir("!=",(function(t,e,r){return e!==r}),(function(t,e,r,n){return !nr(0,e,r,n)})),sr=ir("<",(function(t,e,r){return e<r}),(function(t,e,r,n){return n.compare(e,r)<0})),ur=ir(">",(function(t,e,r){return e>r}),(function(t,e,r,n){return n.compare(e,r)>0})),lr=ir("<=",(function(t,e,r){return e<=r}),(function(t,e,r,n){return n.compare(e,r)<=0})),pr=ir(">=",(function(t,e,r){return e>=r}),(function(t,e,r,n){return n.compare(e,r)>=0})),cr=function(t,e,r,n,i){this.type=jt,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=n,this.maxFractionDigits=i;};cr.parse=function(t,e){if(3!==t.length)return e.error("Expected two arguments.");var r=e.parse(t[1],1,Ut);if(!r)return null;var n=t[2];if("object"!=typeof n||Array.isArray(n))return e.error("NumberFormat options argument must be an object.");var i=null;if(n.locale&&!(i=e.parse(n.locale,1,jt)))return null;var a=null;if(n.currency&&!(a=e.parse(n.currency,1,jt)))return null;var o=null;if(n["min-fraction-digits"]&&!(o=e.parse(n["min-fraction-digits"],1,Ut)))return null;var s=null;return n["max-fraction-digits"]&&!(s=e.parse(n["max-fraction-digits"],1,Ut))?null:new cr(r,i,a,o,s)},cr.prototype.evaluate=function(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))},cr.prototype.eachChild=function(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits);},cr.prototype.possibleOutputs=function(){return [void 0]},cr.prototype.serialize=function(){var t={};return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]};var hr=function(t){this.type=Ut,this.input=t;};hr.parse=function(t,e){if(2!==t.length)return e.error("Expected 1 argument, but found "+(t.length-1)+" instead.");var r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error("Expected argument of type string or array, but found "+Yt(r.type)+" instead."):new hr(r):null},hr.prototype.evaluate=function(t){var e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new le("Expected value to be of type string or array, but found "+Yt(oe(e))+" instead.")},hr.prototype.eachChild=function(t){t(this.input);},hr.prototype.possibleOutputs=function(){return [void 0]},hr.prototype.serialize=function(){var t=["length"];return this.eachChild((function(e){t.push(e.serialize());})),t};var fr={"==":ar,"!=":or,">":ur,"<":sr,">=":pr,"<=":lr,array:ce,at:We,boolean:ce,case:er,coalesce:Ye,collator:xe,format:he,image:fe,in:Qe,interpolate:Je,"interpolate-hcl":Je,"interpolate-lab":Je,length:hr,let:$e,literal:ue,match:tr,number:ce,"number-format":cr,object:ce,step:Ie,string:ce,"to-boolean":de,"to-color":de,"to-number":de,"to-string":de,var:Ae};function yr(t,e){var r=e[0],n=e[1],i=e[2],a=e[3];r=r.evaluate(t),n=n.evaluate(t),i=i.evaluate(t);var o=a?a.evaluate(t):1,s=ae(r,n,i,o);if(s)throw new le(s);return new te(r/255*o,n/255*o,i/255*o,o)}function dr(t,e){return t in e}function mr(t,e){var r=e[t];return void 0===r?null:r}function vr(t){return {type:t}}function gr(t){return {result:"success",value:t}}function xr(t){return {result:"error",value:t}}function br(t){return "data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function _r(t){return !!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function wr(t){return !!t.expression&&t.expression.interpolated}function Ar(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function Sr(t){return "object"==typeof t&&null!==t&&!Array.isArray(t)}function kr(t){return t}function Ir(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function zr(t,e,r,n,i){return Ir(typeof r===i?n[r]:void 0,t.default,e.default)}function Cr(t,e,r){if("number"!==Ar(r))return Ir(t.default,e.default);var n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];var i=ke(t.stops.map((function(t){return t[0]})),r);return t.stops[i][1]}function Br(t,e,r){var n=void 0!==t.base?t.base:1;if("number"!==Ar(r))return Ir(t.default,e.default);var i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];var a=ke(t.stops.map((function(t){return t[0]})),r),o=function(t,e,r,n){var i=n-r,a=t-r;return 0===i?0:1===e?a/i:(Math.pow(e,a)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[a][0],t.stops[a+1][0]),s=t.stops[a][1],u=t.stops[a+1][1],l=Ce[e.type]||kr;if(t.colorSpace&&"rgb"!==t.colorSpace){var p=Ge[t.colorSpace];l=function(t,e){return p.reverse(p.interpolate(p.forward(t),p.forward(e),o))};}return "function"==typeof s.evaluate?{evaluate:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var r=s.evaluate.apply(void 0,t),n=u.evaluate.apply(void 0,t);if(void 0!==r&&void 0!==n)return l(r,n,o)}}:l(s,u,o)}function Pr(t,e,r){return "color"===e.type?r=te.parse(r):"formatted"===e.type?r=ne.fromString(r.toString()):"resolvedImage"===e.type?r=ie.fromString(r.toString()):Ar(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),Ir(r,t.default,e.default)}ge.register(fr,{error:[{kind:"error"},[jt],function(t,e){var r=e[0];throw new le(r.evaluate(t))}],typeof:[jt,[Xt],function(t,e){return Yt(oe(e[0].evaluate(t)))}],"to-rgba":[Ht(Ut,4),[Nt],function(t,e){return e[0].evaluate(t).toArray()}],rgb:[Nt,[Ut,Ut,Ut],yr],rgba:[Nt,[Ut,Ut,Ut,Ut],yr],has:{type:qt,overloads:[[[jt],function(t,e){return dr(e[0].evaluate(t),t.properties())}],[[jt,Kt],function(t,e){var r=e[0],n=e[1];return dr(r.evaluate(t),n.evaluate(t))}]]},get:{type:Xt,overloads:[[[jt],function(t,e){return mr(e[0].evaluate(t),t.properties())}],[[jt,Kt],function(t,e){var r=e[0],n=e[1];return mr(r.evaluate(t),n.evaluate(t))}]]},"feature-state":[Xt,[jt],function(t,e){return mr(e[0].evaluate(t),t.featureState||{})}],properties:[Kt,[],function(t){return t.properties()}],"geometry-type":[jt,[],function(t){return t.geometryType()}],id:[Xt,[],function(t){return t.id()}],zoom:[Ut,[],function(t){return t.globals.zoom}],"heatmap-density":[Ut,[],function(t){return t.globals.heatmapDensity||0}],"line-progress":[Ut,[],function(t){return t.globals.lineProgress||0}],accumulated:[Xt,[],function(t){return void 0===t.globals.accumulated?null:t.globals.accumulated}],"+":[Ut,vr(Ut),function(t,e){for(var r=0,n=0,i=e;n<i.length;n+=1){r+=i[n].evaluate(t);}return r}],"*":[Ut,vr(Ut),function(t,e){for(var r=1,n=0,i=e;n<i.length;n+=1){r*=i[n].evaluate(t);}return r}],"-":{type:Ut,overloads:[[[Ut,Ut],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)-n.evaluate(t)}],[[Ut],function(t,e){return -e[0].evaluate(t)}]]},"/":[Ut,[Ut,Ut],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)/n.evaluate(t)}],"%":[Ut,[Ut,Ut],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)%n.evaluate(t)}],ln2:[Ut,[],function(){return Math.LN2}],pi:[Ut,[],function(){return Math.PI}],e:[Ut,[],function(){return Math.E}],"^":[Ut,[Ut,Ut],function(t,e){var r=e[0],n=e[1];return Math.pow(r.evaluate(t),n.evaluate(t))}],sqrt:[Ut,[Ut],function(t,e){var r=e[0];return Math.sqrt(r.evaluate(t))}],log10:[Ut,[Ut],function(t,e){var r=e[0];return Math.log(r.evaluate(t))/Math.LN10}],ln:[Ut,[Ut],function(t,e){var r=e[0];return Math.log(r.evaluate(t))}],log2:[Ut,[Ut],function(t,e){var r=e[0];return Math.log(r.evaluate(t))/Math.LN2}],sin:[Ut,[Ut],function(t,e){var r=e[0];return Math.sin(r.evaluate(t))}],cos:[Ut,[Ut],function(t,e){var r=e[0];return Math.cos(r.evaluate(t))}],tan:[Ut,[Ut],function(t,e){var r=e[0];return Math.tan(r.evaluate(t))}],asin:[Ut,[Ut],function(t,e){var r=e[0];return Math.asin(r.evaluate(t))}],acos:[Ut,[Ut],function(t,e){var r=e[0];return Math.acos(r.evaluate(t))}],atan:[Ut,[Ut],function(t,e){var r=e[0];return Math.atan(r.evaluate(t))}],min:[Ut,vr(Ut),function(t,e){return Math.min.apply(Math,e.map((function(e){return e.evaluate(t)})))}],max:[Ut,vr(Ut),function(t,e){return Math.max.apply(Math,e.map((function(e){return e.evaluate(t)})))}],abs:[Ut,[Ut],function(t,e){var r=e[0];return Math.abs(r.evaluate(t))}],round:[Ut,[Ut],function(t,e){var r=e[0].evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[Ut,[Ut],function(t,e){var r=e[0];return Math.floor(r.evaluate(t))}],ceil:[Ut,[Ut],function(t,e){var r=e[0];return Math.ceil(r.evaluate(t))}],"filter-==":[qt,[jt,Xt],function(t,e){var r=e[0],n=e[1];return t.properties()[r.value]===n.value}],"filter-id-==":[qt,[Xt],function(t,e){var r=e[0];return t.id()===r.value}],"filter-type-==":[qt,[jt],function(t,e){var r=e[0];return t.geometryType()===r.value}],"filter-<":[qt,[jt,Xt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i<a}],"filter-id-<":[qt,[Xt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<i}],"filter->":[qt,[jt,Xt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i>a}],"filter-id->":[qt,[Xt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>i}],"filter-<=":[qt,[jt,Xt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i<=a}],"filter-id-<=":[qt,[Xt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n<=i}],"filter->=":[qt,[jt,Xt],function(t,e){var r=e[0],n=e[1],i=t.properties()[r.value],a=n.value;return typeof i==typeof a&&i>=a}],"filter-id->=":[qt,[Xt],function(t,e){var r=e[0],n=t.id(),i=r.value;return typeof n==typeof i&&n>=i}],"filter-has":[qt,[Xt],function(t,e){return e[0].value in t.properties()}],"filter-has-id":[qt,[],function(t){return null!==t.id()}],"filter-type-in":[qt,[Ht(jt)],function(t,e){return e[0].value.indexOf(t.geometryType())>=0}],"filter-id-in":[qt,[Ht(Xt)],function(t,e){return e[0].value.indexOf(t.id())>=0}],"filter-in-small":[qt,[jt,Ht(Xt)],function(t,e){var r=e[0];return e[1].value.indexOf(t.properties()[r.value])>=0}],"filter-in-large":[qt,[jt,Ht(Xt)],function(t,e){var r=e[0],n=e[1];return function(t,e,r,n){for(;r<=n;){var i=r+n>>1;if(e[i]===t)return !0;e[i]>t?n=i-1:r=i+1;}return !1}(t.properties()[r.value],n.value,0,n.value.length-1)}],all:{type:qt,overloads:[[[qt,qt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)&&n.evaluate(t)}],[vr(qt),function(t,e){for(var r=0,n=e;r<n.length;r+=1){if(!n[r].evaluate(t))return !1}return !0}]]},any:{type:qt,overloads:[[[qt,qt],function(t,e){var r=e[0],n=e[1];return r.evaluate(t)||n.evaluate(t)}],[vr(qt),function(t,e){for(var r=0,n=e;r<n.length;r+=1){if(n[r].evaluate(t))return !0}return !1}]]},"!":[qt,[qt],function(t,e){return !e[0].evaluate(t)}],"is-supported-script":[qt,[jt],function(t,e){var r=e[0],n=t.globals&&t.globals.isSupportedScript;return !n||n(r.evaluate(t))}],upcase:[jt,[jt],function(t,e){return e[0].evaluate(t).toUpperCase()}],downcase:[jt,[jt],function(t,e){return e[0].evaluate(t).toLowerCase()}],concat:[jt,vr(Xt),function(t,e){return e.map((function(e){return se(e.evaluate(t))})).join("")}],"resolved-locale":[jt,[Zt],function(t,e){return e[0].evaluate(t).resolvedLocale()}]});var Tr=function(t,e){this.expression=t,this._warningHistory={},this._evaluator=new ve,this._defaultValue=e?function(t){return "color"===t.type&&Sr(t.default)?new te(0,0,0,0):"color"===t.type?te.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null;};function Er(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in fr}function Mr(t,e){var r=new Se(fr,[],e?function(t){var e={color:Nt,string:jt,number:Ut,enum:jt,boolean:qt,formatted:Gt,resolvedImage:Jt};if("array"===t.type)return Ht(e[t.value]||Xt,t.length);return e[t.type]}(e):void 0),n=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0);return n?gr(new Tr(n,e)):xr(r.errors)}Tr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=i,this.expression.evaluate(this._evaluator)},Tr.prototype.evaluate=function(t,e,r,n,i){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=i||null;try{var a=this.expression.evaluate(this._evaluator);if(null==a||"number"==typeof a&&a!=a)return this._defaultValue;if(this._enumValues&&!(a in this._enumValues))throw new le("Expected value to be one of "+Object.keys(this._enumValues).map((function(t){return JSON.stringify(t)})).join(", ")+", but found "+JSON.stringify(a)+" instead.");return a}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}};var Vr=function(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!_e(e.expression);};Vr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i)},Vr.prototype.evaluate=function(t,e,r,n,i){return this._styleExpression.evaluate(t,e,r,n,i)};var Fr=function(t,e,r,n){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!_e(e.expression),this.interpolationType=n;};function Lr(t,e){if("error"===(t=Mr(t,e)).result)return t;var r=t.value.expression,n=be(r);if(!n&&!br(e))return xr([new Ot("","data expressions not supported")]);var i=we(r,["zoom"]);if(!i&&!_r(e))return xr([new Ot("","zoom expressions not supported")]);var a=function t(e){var r=null;if(e instanceof $e)r=t(e.result);else if(e instanceof Ye)for(var n=0,i=e.args;n<i.length;n+=1){var a=i[n];if(r=t(a))break}else(e instanceof Ie||e instanceof Je)&&e.input instanceof ge&&"zoom"===e.input.name&&(r=e);if(r instanceof Ot)return r;return e.eachChild((function(e){var n=t(e);n instanceof Ot?r=n:!r&&n?r=new Ot("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):r&&n&&r!==n&&(r=new Ot("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));})),r}(r);if(!a&&!i)return xr([new Ot("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);if(a instanceof Ot)return xr([a]);if(a instanceof Je&&!wr(e))return xr([new Ot("",'"interpolate" expressions cannot be used with this property')]);if(!a)return gr(new Vr(n?"constant":"source",t.value));var o=a instanceof Je?a.interpolation:void 0;return gr(new Fr(n?"camera":"composite",t.value,a.labels,o))}Fr.prototype.evaluateWithoutErrorHandling=function(t,e,r,n,i){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i)},Fr.prototype.evaluate=function(t,e,r,n,i){return this._styleExpression.evaluate(t,e,r,n,i)},Fr.prototype.interpolationFactor=function(t,e,r){return this.interpolationType?Je.interpolationFactor(this.interpolationType,t,e,r):0};var Or=function(t,e){this._parameters=t,this._specification=e,Vt(this,function t(e,r){var n,i,a,o="color"===r.type,s=e.stops&&"object"==typeof e.stops[0][0],u=s||void 0!==e.property,l=s||!u,p=e.type||(wr(r)?"exponential":"interval");if(o&&((e=Vt({},e)).stops&&(e.stops=e.stops.map((function(t){return [t[0],te.parse(t[1])]}))),e.default?e.default=te.parse(e.default):e.default=te.parse(r.default)),e.colorSpace&&"rgb"!==e.colorSpace&&!Ge[e.colorSpace])throw new Error("Unknown color space: "+e.colorSpace);if("exponential"===p)n=Br;else if("interval"===p)n=Cr;else if("categorical"===p){n=zr,i=Object.create(null);for(var c=0,h=e.stops;c<h.length;c+=1){var f=h[c];i[f[0]]=f[1];}a=typeof e.stops[0][0];}else{if("identity"!==p)throw new Error('Unknown function type "'+p+'"');n=Pr;}if(s){for(var y={},d=[],m=0;m<e.stops.length;m++){var v=e.stops[m],g=v[0].zoom;void 0===y[g]&&(y[g]={zoom:g,type:e.type,property:e.property,default:e.default,stops:[]},d.push(g)),y[g].stops.push([v[0].value,v[1]]);}for(var x=[],b=0,_=d;b<_.length;b+=1){var w=_[b];x.push([y[w].zoom,t(y[w],r)]);}var A={name:"linear"};return {kind:"composite",interpolationType:A,interpolationFactor:Je.interpolationFactor.bind(void 0,A),zoomStops:x.map((function(t){return t[0]})),evaluate:function(t,n){var i=t.zoom;return Br({stops:x,base:e.base},r,i).evaluate(i,n)}}}if(l){var S="exponential"===p?{name:"exponential",base:void 0!==e.base?e.base:1}:null;return {kind:"camera",interpolationType:S,interpolationFactor:Je.interpolationFactor.bind(void 0,S),zoomStops:e.stops.map((function(t){return t[0]})),evaluate:function(t){var o=t.zoom;return n(e,r,o,i,a)}}}return {kind:"source",evaluate:function(t,o){var s=o&&o.properties?o.properties[e.property]:void 0;return void 0===s?Ir(e.default,r.default):n(e,r,s,i,a)}}}(this._parameters,this._specification));};function Dr(t){var e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},a=t.style,o=t.styleSpec,s=[],u=Ar(r);if("object"!==u)return [new Et(e,r,"object expected, "+u+" found")];for(var l in r){var p=l.split(".")[0],c=n[p]||n["*"],h=void 0;if(i[p])h=i[p];else if(n[p])h=pn;else if(i["*"])h=i["*"];else{if(!n["*"]){s.push(new Et(e,r[l],'unknown property "'+l+'"'));continue}h=pn;}s=s.concat(h({key:(e?e+".":e)+l,value:r[l],valueSpec:c,style:a,styleSpec:o,object:r,objectKey:l},r));}for(var f in n)i[f]||n[f].required&&void 0===n[f].default&&void 0===r[f]&&s.push(new Et(e,r,'missing required property "'+f+'"'));return s}function Rr(t){var e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,a=t.key,o=t.arrayElementValidator||pn;if("array"!==Ar(e))return [new Et(a,e,"array expected, "+Ar(e)+" found")];if(r.length&&e.length!==r.length)return [new Et(a,e,"array length "+r.length+" expected, length "+e.length+" found")];if(r["min-length"]&&e.length<r["min-length"])return [new Et(a,e,"array length at least "+r["min-length"]+" expected, length "+e.length+" found")];var s={type:r.value,values:r.values};i.$version<7&&(s.function=r.function),"object"===Ar(r.value)&&(s=r.value);for(var u=[],l=0;l<e.length;l++)u=u.concat(o({array:e,arrayIndex:l,value:e[l],valueSpec:s,style:n,styleSpec:i,key:a+"["+l+"]"}));return u}function Ur(t){var e=t.key,r=t.value,n=t.valueSpec,i=Ar(r);return "number"===i&&r!=r&&(i="NaN"),"number"!==i?[new Et(e,r,"number expected, "+i+" found")]:"minimum"in n&&r<n.minimum?[new Et(e,r,r+" is less than the minimum value "+n.minimum)]:"maximum"in n&&r>n.maximum?[new Et(e,r,r+" is greater than the maximum value "+n.maximum)]:[]}function jr(t){var e,r,n,i=t.valueSpec,a=Ft(t.value.type),o={},s="categorical"!==a&&void 0===t.value.property,u=!s,l="array"===Ar(t.value.stops)&&"array"===Ar(t.value.stops[0])&&"object"===Ar(t.value.stops[0][0]),p=Dr({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===a)return [new Et(t.key,t.value,'identity function may not have a "stops" property')];var e=[],r=t.value;e=e.concat(Rr({key:t.key,value:r,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:c})),"array"===Ar(r)&&0===r.length&&e.push(new Et(t.key,r,"array must have at least one stop"));return e},default:function(t){return pn({key:t.key,value:t.value,valueSpec:i,style:t.style,styleSpec:t.styleSpec})}}});return "identity"===a&&s&&p.push(new Et(t.key,t.value,'missing required property "property"')),"identity"===a||t.value.stops||p.push(new Et(t.key,t.value,'missing required property "stops"')),"exponential"===a&&t.valueSpec.expression&&!wr(t.valueSpec)&&p.push(new Et(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(u&&!br(t.valueSpec)?p.push(new Et(t.key,t.value,"property functions not supported")):s&&!_r(t.valueSpec)&&p.push(new Et(t.key,t.value,"zoom functions not supported"))),"categorical"!==a&&!l||void 0!==t.value.property||p.push(new Et(t.key,t.value,'"property" property is required')),p;function c(t){var e=[],a=t.value,s=t.key;if("array"!==Ar(a))return [new Et(s,a,"array expected, "+Ar(a)+" found")];if(2!==a.length)return [new Et(s,a,"array length 2 expected, length "+a.length+" found")];if(l){if("object"!==Ar(a[0]))return [new Et(s,a,"object expected, "+Ar(a[0])+" found")];if(void 0===a[0].zoom)return [new Et(s,a,"object stop key must have zoom")];if(void 0===a[0].value)return [new Et(s,a,"object stop key must have value")];if(n&&n>Ft(a[0].zoom))return [new Et(s,a[0].zoom,"stop zoom values must appear in ascending order")];Ft(a[0].zoom)!==n&&(n=Ft(a[0].zoom),r=void 0,o={}),e=e.concat(Dr({key:s+"[0]",value:a[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:Ur,value:h}}));}else e=e.concat(h({key:s+"[0]",value:a[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},a));return Er(Lt(a[1]))?e.concat([new Et(s+"[1]",a[1],"expressions are not allowed in function stops.")]):e.concat(pn({key:s+"[1]",value:a[1],valueSpec:i,style:t.style,styleSpec:t.styleSpec}))}function h(t,n){var s=Ar(t.value),u=Ft(t.value),l=null!==t.value?t.value:n;if(e){if(s!==e)return [new Et(t.key,l,s+" stop domain type must match previous stop domain type "+e)]}else e=s;if("number"!==s&&"string"!==s&&"boolean"!==s)return [new Et(t.key,l,"stop domain value must be a number, string, or boolean")];if("number"!==s&&"categorical"!==a){var p="number expected, "+s+" found";return br(i)&&void 0===a&&(p+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new Et(t.key,l,p)]}return "categorical"!==a||"number"!==s||isFinite(u)&&Math.floor(u)===u?"categorical"!==a&&"number"===s&&void 0!==r&&u<r?[new Et(t.key,l,"stop domain values must appear in ascending order")]:(r=u,"categorical"===a&&u in o?[new Et(t.key,l,"stop domain values must be unique")]:(o[u]=!0,[])):[new Et(t.key,l,"integer expected, found "+u)]}}function qr(t){var e=("property"===t.expressionContext?Lr:Mr)(Lt(t.value),t.valueSpec);if("error"===e.result)return e.value.map((function(e){return new Et(""+t.key+e.key,t.value,e.message)}));var r=e.value.expression||e.value._styleExpression.expression;if("property"===t.expressionContext&&"text-font"===t.propertyKey&&-1!==r.possibleOutputs().indexOf(void 0))return [new Et(t.key,t.value,'Invalid data expression for "'+t.propertyKey+'". Output values must be contained as literals within the expression.')];if("property"===t.expressionContext&&"layout"===t.propertyType&&!_e(r))return [new Et(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')];if("filter"===t.expressionContext&&!_e(r))return [new Et(t.key,t.value,'"feature-state" data expressions are not supported with filters.')];if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!we(r,["zoom","feature-state"]))return [new Et(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')];if("cluster-initial"===t.expressionContext&&!be(r))return [new Et(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return []}function Nr(t){var e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(Ft(r))&&i.push(new Et(e,r,"expected one of ["+n.values.join(", ")+"], "+JSON.stringify(r)+" found")):-1===Object.keys(n.values).indexOf(Ft(r))&&i.push(new Et(e,r,"expected one of ["+Object.keys(n.values).join(", ")+"], "+JSON.stringify(r)+" found")),i}function Kr(t){if(!0===t||!1===t)return !0;if(!Array.isArray(t)||0===t.length)return !1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":return t.length>=3&&Array.isArray(t[2]);case"!in":case"!has":case"none":return !1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2]);case"any":case"all":for(var e=0,r=t.slice(1);e<r.length;e+=1){var n=r[e];if(!Kr(n)&&"boolean"!=typeof n)return !1}return !0;default:return !0}}Or.deserialize=function(t){return new Or(t._parameters,t._specification)},Or.serialize=function(t){return {_parameters:t._parameters,_specification:t._specification}};var Xr={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}};function Zr(t){if(null==t)return function(){return !0};Kr(t)||(t=Jr(t));var e=Mr(t,Xr);if("error"===e.result)throw new Error(e.value.map((function(t){return t.key+": "+t.message})).join(", "));return function(t,r){return e.value.evaluate(t,r)}}function Gr(t,e){return t<e?-1:t>e?1:0}function Jr(t){if(!t)return !0;var e,r=t[0];return t.length<=1?"any"!==r:"=="===r?Hr(t[1],t[2],"=="):"!="===r?Wr(Hr(t[1],t[2],"==")):"<"===r||">"===r||"<="===r||">="===r?Hr(t[1],t[2],r):"any"===r?(e=t.slice(1),["any"].concat(e.map(Jr))):"all"===r?["all"].concat(t.slice(1).map(Jr)):"none"===r?["all"].concat(t.slice(1).map(Jr).map(Wr)):"in"===r?Yr(t[1],t.slice(2)):"!in"===r?Wr(Yr(t[1],t.slice(2))):"has"===r?$r(t[1]):"!has"!==r||Wr($r(t[1]))}function Hr(t,e,r){switch(t){case"$type":return ["filter-type-"+r,e];case"$id":return ["filter-id-"+r,e];default:return ["filter-"+r,t,e]}}function Yr(t,e){if(0===e.length)return !1;switch(t){case"$type":return ["filter-type-in",["literal",e]];case"$id":return ["filter-id-in",["literal",e]];default:return e.length>200&&!e.some((function(t){return typeof t!=typeof e[0]}))?["filter-in-large",t,["literal",e.sort(Gr)]]:["filter-in-small",t,["literal",e]]}}function $r(t){switch(t){case"$type":return !0;case"$id":return ["filter-has-id"];default:return ["filter-has",t]}}function Wr(t){return ["!",t]}function Qr(t){return Kr(Lt(t.value))?qr(Vt({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):function t(e){var r=e.value,n=e.key;if("array"!==Ar(r))return [new Et(n,r,"array expected, "+Ar(r)+" found")];var i,a=e.styleSpec,o=[];if(r.length<1)return [new Et(n,r,"filter array must have at least 1 element")];switch(o=o.concat(Nr({key:n+"[0]",value:r[0],valueSpec:a.filter_operator,style:e.style,styleSpec:e.styleSpec})),Ft(r[0])){case"<":case"<=":case">":case">=":r.length>=2&&"$type"===Ft(r[1])&&o.push(new Et(n,r,'"$type" cannot be use with operator "'+r[0]+'"'));case"==":case"!=":3!==r.length&&o.push(new Et(n,r,'filter array for operator "'+r[0]+'" must have 3 elements'));case"in":case"!in":r.length>=2&&"string"!==(i=Ar(r[1]))&&o.push(new Et(n+"[1]",r[1],"string expected, "+i+" found"));for(var s=2;s<r.length;s++)i=Ar(r[s]),"$type"===Ft(r[1])?o=o.concat(Nr({key:n+"["+s+"]",value:r[s],valueSpec:a.geometry_type,style:e.style,styleSpec:e.styleSpec})):"string"!==i&&"number"!==i&&"boolean"!==i&&o.push(new Et(n+"["+s+"]",r[s],"string, number, or boolean expected, "+i+" found"));break;case"any":case"all":case"none":for(var u=1;u<r.length;u++)o=o.concat(t({key:n+"["+u+"]",value:r[u],style:e.style,styleSpec:e.styleSpec}));break;case"has":case"!has":i=Ar(r[1]),2!==r.length?o.push(new Et(n,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"string"!==i&&o.push(new Et(n+"[1]",r[1],"string expected, "+i+" found"));}return o}(t)}function tn(t,e){var r=t.key,n=t.style,i=t.styleSpec,a=t.value,o=t.objectKey,s=i[e+"_"+t.layerType];if(!s)return [];var u=o.match(/^(.*)-transition$/);if("paint"===e&&u&&s[u[1]]&&s[u[1]].transition)return pn({key:r,value:a,valueSpec:i.transition,style:n,styleSpec:i});var l,p=t.valueSpec||s[o];if(!p)return [new Et(r,a,'unknown property "'+o+'"')];if("string"===Ar(a)&&br(p)&&!p.tokens&&(l=/^{([^}]+)}$/.exec(a)))return [new Et(r,a,'"'+o+'" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": '+JSON.stringify(l[1])+" }`.")];var c=[];return "symbol"===t.layerType&&("text-field"===o&&n&&!n.glyphs&&c.push(new Et(r,a,'use of "text-field" requires a style "glyphs" property')),"text-font"===o&&Sr(Lt(a))&&"identity"===Ft(a.type)&&c.push(new Et(r,a,'"text-font" does not support identity functions'))),c.concat(pn({key:t.key,value:a,valueSpec:p,style:n,styleSpec:i,expressionContext:"property",propertyType:e,propertyKey:o}))}function en(t){return tn(t,"paint")}function rn(t){return tn(t,"layout")}function nn(t){var e=[],r=t.value,n=t.key,i=t.style,a=t.styleSpec;r.type||r.ref||e.push(new Et(n,r,'either "type" or "ref" is required'));var o,s=Ft(r.type),u=Ft(r.ref);if(r.id)for(var l=Ft(r.id),p=0;p<t.arrayIndex;p++){var c=i.layers[p];Ft(c.id)===l&&e.push(new Et(n,r.id,'duplicate layer id "'+r.id+'", previously used at line '+c.id.__line__));}if("ref"in r)["type","source","source-layer","filter","layout"].forEach((function(t){t in r&&e.push(new Et(n,r[t],'"'+t+'" is prohibited for ref layers'));})),i.layers.forEach((function(t){Ft(t.id)===u&&(o=t);})),o?o.ref?e.push(new Et(n,r.ref,"ref cannot reference another ref layer")):s=Ft(o.type):e.push(new Et(n,r.ref,'ref layer "'+u+'" not found'));else if("background"!==s)if(r.source){var h=i.sources&&i.sources[r.source],f=h&&Ft(h.type);h?"vector"===f&&"raster"===s?e.push(new Et(n,r.source,'layer "'+r.id+'" requires a raster source')):"raster"===f&&"raster"!==s?e.push(new Et(n,r.source,'layer "'+r.id+'" requires a vector source')):"vector"!==f||r["source-layer"]?"raster-dem"===f&&"hillshade"!==s?e.push(new Et(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==s||!r.paint||!r.paint["line-gradient"]||"geojson"===f&&h.lineMetrics||e.push(new Et(n,r,'layer "'+r.id+'" specifies a line-gradient, which requires a GeoJSON source with `lineMetrics` enabled.')):e.push(new Et(n,r,'layer "'+r.id+'" must specify a "source-layer"')):e.push(new Et(n,r.source,'source "'+r.source+'" not found'));}else e.push(new Et(n,r,'missing required property "source"'));return e=e.concat(Dr({key:n,value:r,valueSpec:a.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(){return []},type:function(){return pn({key:n+".type",value:r.type,valueSpec:a.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"})},filter:Qr,layout:function(t){return Dr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return rn(Vt({layerType:s},t))}}})},paint:function(t){return Dr({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":function(t){return en(Vt({layerType:s},t))}}})}}}))}function an(t){var e=t.value,r=t.key,n=Ar(e);return "string"!==n?[new Et(r,e,"string expected, "+n+" found")]:[]}var on={promoteId:function(t){var e=t.key,r=t.value;if("string"===Ar(r))return an({key:e,value:r});var n=[];for(var i in r)n.push.apply(n,an({key:e+"."+i,value:r[i]}));return n}};function sn(t){var e=t.value,r=t.key,n=t.styleSpec,i=t.style;if(!e.type)return [new Et(r,e,'"type" is required')];var a,o=Ft(e.type);switch(o){case"vector":case"raster":case"raster-dem":return a=Dr({key:r,value:e,valueSpec:n["source_"+o.replace("-","_")],style:t.style,styleSpec:n,objectElementValidators:on});case"geojson":if(a=Dr({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n,objectElementValidators:on}),e.cluster)for(var s in e.clusterProperties){var u=e.clusterProperties[s],l=u[0],p=u[1],c="string"==typeof l?[l,["accumulated"],["get",s]]:l;a.push.apply(a,qr({key:r+"."+s+".map",value:p,expressionContext:"cluster-map"})),a.push.apply(a,qr({key:r+"."+s+".reduce",value:c,expressionContext:"cluster-reduce"}));}return a;case"video":return Dr({key:r,value:e,valueSpec:n.source_video,style:i,styleSpec:n});case"image":return Dr({key:r,value:e,valueSpec:n.source_image,style:i,styleSpec:n});case"canvas":return [new Et(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")];default:return Nr({key:r+".type",value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:i,styleSpec:n})}}function un(t){var e=t.value,r=t.styleSpec,n=r.light,i=t.style,a=[],o=Ar(e);if(void 0===e)return a;if("object"!==o)return a=a.concat([new Et("light",e,"object expected, "+o+" found")]);for(var s in e){var u=s.match(/^(.*)-transition$/);a=u&&n[u[1]]&&n[u[1]].transition?a.concat(pn({key:s,value:e[s],valueSpec:r.transition,style:i,styleSpec:r})):n[s]?a.concat(pn({key:s,value:e[s],valueSpec:n[s],style:i,styleSpec:r})):a.concat([new Et(s,e[s],'unknown property "'+s+'"')]);}return a}var ln={"*":function(){return []},array:Rr,boolean:function(t){var e=t.value,r=t.key,n=Ar(e);return "boolean"!==n?[new Et(r,e,"boolean expected, "+n+" found")]:[]},number:Ur,color:function(t){var e=t.key,r=t.value,n=Ar(r);return "string"!==n?[new Et(e,r,"color expected, "+n+" found")]:null===Qt(r)?[new Et(e,r,'color expected, "'+r+'" found')]:[]},constants:Mt,enum:Nr,filter:Qr,function:jr,layer:nn,object:Dr,source:sn,light:un,string:an,formatted:function(t){return 0===an(t).length?[]:qr(t)},resolvedImage:function(t){return 0===an(t).length?[]:qr(t)}};function pn(t){var e=t.value,r=t.valueSpec,n=t.styleSpec;return r.expression&&Sr(Ft(e))?jr(t):r.expression&&Er(Lt(e))?qr(t):r.type&&ln[r.type]?ln[r.type](t):Dr(Vt({},t,{valueSpec:r.type?n[r.type]:r}))}function cn(t){var e=t.value,r=t.key,n=an(t);return n.length?n:(-1===e.indexOf("{fontstack}")&&n.push(new Et(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new Et(r,e,'"glyphs" url must include a "{range}" token')),n)}function hn(t,e){void 0===e&&(e=Tt);var r=[];return r=r.concat(pn({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:cn,"*":function(){return []}}})),t.constants&&(r=r.concat(Mt({key:"constants",value:t.constants,style:t,styleSpec:e}))),fn(r)}function fn(t){return [].concat(t).sort((function(t,e){return t.line-e.line}))}function yn(t){return function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return fn(t.apply(this,e))}}hn.source=yn(sn),hn.light=yn(un),hn.layer=yn(nn),hn.filter=yn(Qr),hn.paintProperty=yn(en),hn.layoutProperty=yn(rn);var dn=hn,mn=dn.light,vn=dn.paintProperty,gn=dn.layoutProperty;function xn(t,e){var r=!1;if(e&&e.length)for(var n=0,i=e;n<i.length;n+=1){var a=i[n];t.fire(new Bt(new Error(a.message))),r=!0;}return r}var bn=wn,_n=3;function wn(t,e,r){var n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],e=i[1],r=i[2],this.d=e+2*r;for(var a=0;a<this.d*this.d;a++){var o=i[_n+a],s=i[_n+a+1];n.push(o===s?null:i.subarray(o,s));}var u=i[_n+n.length],l=i[_n+n.length+1];this.keys=i.subarray(u,l),this.bboxes=i.subarray(l),this.insert=this._insertReadonly;}else{this.d=e+2*r;for(var p=0;p<this.d*this.d;p++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;var c=r/e*t;this.min=-c,this.max=t+c;}wn.prototype.insert=function(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);},wn.prototype._insertReadonly=function(){throw "Cannot insert into a GridIndex created from an ArrayBuffer."},wn.prototype._insertCell=function(t,e,r,n,i,a){this.cells[i].push(a);},wn.prototype.query=function(t,e,r,n,i){var a=this.min,o=this.max;if(t<=a&&e<=a&&o<=r&&o<=n&&!i)return Array.prototype.slice.call(this.keys);var s=[];return this._forEachCell(t,e,r,n,this._queryCell,s,{},i),s},wn.prototype._queryCell=function(t,e,r,n,i,a,o,s){var u=this.cells[i];if(null!==u)for(var l=this.keys,p=this.bboxes,c=0;c<u.length;c++){var h=u[c];if(void 0===o[h]){var f=4*h;(s?s(p[f+0],p[f+1],p[f+2],p[f+3]):t<=p[f+2]&&e<=p[f+3]&&r>=p[f+0]&&n>=p[f+1])?(o[h]=!0,a.push(l[h])):o[h]=!1;}}},wn.prototype._forEachCell=function(t,e,r,n,i,a,o,s){for(var u=this._convertToCellCoord(t),l=this._convertToCellCoord(e),p=this._convertToCellCoord(r),c=this._convertToCellCoord(n),h=u;h<=p;h++)for(var f=l;f<=c;f++){var y=this.d*f+h;if((!s||s(this._convertFromCellCoord(h),this._convertFromCellCoord(f),this._convertFromCellCoord(h+1),this._convertFromCellCoord(f+1)))&&i.call(this,t,e,r,n,y,a,o,s))return}},wn.prototype._convertFromCellCoord=function(t){return (t-this.padding)/this.scale},wn.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},wn.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,e=_n+this.cells.length+1+1,r=0,n=0;n<this.cells.length;n++)r+=this.cells[n].length;var i=new Int32Array(e+r+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var a=e,o=0;o<t.length;o++){var s=t[o];i[_n+o]=a,i.set(s,a),a+=s.length;}return i[_n+t.length]=a,i.set(this.keys,a),a+=this.keys.length,i[_n+t.length+1]=a,i.set(this.bboxes,a),a+=this.bboxes.length,i.buffer};var An=self.ImageData,Sn=self.ImageBitmap,kn={};function In(t,e,r){void 0===r&&(r={}),Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),kn[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]};}for(var zn in In("Object",Object),bn.serialize=function(t,e){var r=t.toArrayBuffer();return e&&e.push(r),{buffer:r}},bn.deserialize=function(t){return new bn(t.buffer)},In("Grid",bn),In("Color",te),In("Error",Error),In("ResolvedImage",ie),In("StylePropertyFunction",Or),In("StyleExpression",Tr,{omit:["_evaluator"]}),In("ZoomDependentExpression",Fr),In("ZoomConstantExpression",Vr),In("CompoundExpression",ge,{omit:["_evaluate"]}),fr)fr[zn]._classRegistryKey||In("Expression_"+zn,fr[zn]);function Cn(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function Bn(t){return Sn&&t instanceof Sn}function Pn(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t;if(Cn(t)||Bn(t))return e&&e.push(t),t;if(ArrayBuffer.isView(t)){var r=t;return e&&e.push(r.buffer),r}if(t instanceof An)return e&&e.push(t.data.buffer),t;if(Array.isArray(t)){for(var n=[],i=0,a=t;i<a.length;i+=1){var o=a[i];n.push(Pn(o,e));}return n}if("object"==typeof t){var s=t.constructor,u=s._classRegistryKey;if(!u)throw new Error("can't serialize object of unregistered class");var l=s.serialize?s.serialize(t,e):{};if(!s.serialize){for(var p in t)if(t.hasOwnProperty(p)&&!(kn[u].omit.indexOf(p)>=0)){var c=t[p];l[p]=kn[u].shallow.indexOf(p)>=0?c:Pn(c,e);}t instanceof Error&&(l.message=t.message);}if(l.$name)throw new Error("$name property is reserved for worker serialization logic.");return "Object"!==u&&(l.$name=u),l}throw new Error("can't serialize object of type "+typeof t)}function Tn(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||Cn(t)||Bn(t)||ArrayBuffer.isView(t)||t instanceof An)return t;if(Array.isArray(t))return t.map(Tn);if("object"==typeof t){var e=t.$name||"Object",r=kn[e].klass;if(!r)throw new Error("can't deserialize unregistered class "+e);if(r.deserialize)return r.deserialize(t);for(var n=Object.create(r.prototype),i=0,a=Object.keys(t);i<a.length;i+=1){var o=a[i];if("$name"!==o){var s=t[o];n[o]=kn[e].shallow.indexOf(o)>=0?s:Tn(s);}}return n}throw new Error("can't deserialize object of type "+typeof t)}var En=function(){this.first=!0;};En.prototype.update=function(t,e){var r=Math.floor(t);return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))};var Mn={"Latin-1 Supplement":function(t){return t>=128&&t<=255},Arabic:function(t){return t>=1536&&t<=1791},"Arabic Supplement":function(t){return t>=1872&&t<=1919},"Arabic Extended-A":function(t){return t>=2208&&t<=2303},"Hangul Jamo":function(t){return t>=4352&&t<=4607},"Unified Canadian Aboriginal Syllabics":function(t){return t>=5120&&t<=5759},Khmer:function(t){return t>=6016&&t<=6143},"Unified Canadian Aboriginal Syllabics Extended":function(t){return t>=6320&&t<=6399},"General Punctuation":function(t){return t>=8192&&t<=8303},"Letterlike Symbols":function(t){return t>=8448&&t<=8527},"Number Forms":function(t){return t>=8528&&t<=8591},"Miscellaneous Technical":function(t){return t>=8960&&t<=9215},"Control Pictures":function(t){return t>=9216&&t<=9279},"Optical Character Recognition":function(t){return t>=9280&&t<=9311},"Enclosed Alphanumerics":function(t){return t>=9312&&t<=9471},"Geometric Shapes":function(t){return t>=9632&&t<=9727},"Miscellaneous Symbols":function(t){return t>=9728&&t<=9983},"Miscellaneous Symbols and Arrows":function(t){return t>=11008&&t<=11263},"CJK Radicals Supplement":function(t){return t>=11904&&t<=12031},"Kangxi Radicals":function(t){return t>=12032&&t<=12255},"Ideographic Description Characters":function(t){return t>=12272&&t<=12287},"CJK Symbols and Punctuation":function(t){return t>=12288&&t<=12351},Hiragana:function(t){return t>=12352&&t<=12447},Katakana:function(t){return t>=12448&&t<=12543},Bopomofo:function(t){return t>=12544&&t<=12591},"Hangul Compatibility Jamo":function(t){return t>=12592&&t<=12687},Kanbun:function(t){return t>=12688&&t<=12703},"Bopomofo Extended":function(t){return t>=12704&&t<=12735},"CJK Strokes":function(t){return t>=12736&&t<=12783},"Katakana Phonetic Extensions":function(t){return t>=12784&&t<=12799},"Enclosed CJK Letters and Months":function(t){return t>=12800&&t<=13055},"CJK Compatibility":function(t){return t>=13056&&t<=13311},"CJK Unified Ideographs Extension A":function(t){return t>=13312&&t<=19903},"Yijing Hexagram Symbols":function(t){return t>=19904&&t<=19967},"CJK Unified Ideographs":function(t){return t>=19968&&t<=40959},"Yi Syllables":function(t){return t>=40960&&t<=42127},"Yi Radicals":function(t){return t>=42128&&t<=42191},"Hangul Jamo Extended-A":function(t){return t>=43360&&t<=43391},"Hangul Syllables":function(t){return t>=44032&&t<=55215},"Hangul Jamo Extended-B":function(t){return t>=55216&&t<=55295},"Private Use Area":function(t){return t>=57344&&t<=63743},"CJK Compatibility Ideographs":function(t){return t>=63744&&t<=64255},"Arabic Presentation Forms-A":function(t){return t>=64336&&t<=65023},"Vertical Forms":function(t){return t>=65040&&t<=65055},"CJK Compatibility Forms":function(t){return t>=65072&&t<=65103},"Small Form Variants":function(t){return t>=65104&&t<=65135},"Arabic Presentation Forms-B":function(t){return t>=65136&&t<=65279},"Halfwidth and Fullwidth Forms":function(t){return t>=65280&&t<=65519}};function Vn(t){for(var e=0,r=t;e<r.length;e+=1){if(Ln(r[e].charCodeAt(0)))return !0}return !1}function Fn(t){return !Mn.Arabic(t)&&(!Mn["Arabic Supplement"](t)&&(!Mn["Arabic Extended-A"](t)&&(!Mn["Arabic Presentation Forms-A"](t)&&!Mn["Arabic Presentation Forms-B"](t))))}function Ln(t){return 746===t||747===t||!(t<4352)&&(!!Mn["Bopomofo Extended"](t)||(!!Mn.Bopomofo(t)||(!(!Mn["CJK Compatibility Forms"](t)||t>=65097&&t<=65103)||(!!Mn["CJK Compatibility Ideographs"](t)||(!!Mn["CJK Compatibility"](t)||(!!Mn["CJK Radicals Supplement"](t)||(!!Mn["CJK Strokes"](t)||(!(!Mn["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||(!!Mn["CJK Unified Ideographs Extension A"](t)||(!!Mn["CJK Unified Ideographs"](t)||(!!Mn["Enclosed CJK Letters and Months"](t)||(!!Mn["Hangul Compatibility Jamo"](t)||(!!Mn["Hangul Jamo Extended-A"](t)||(!!Mn["Hangul Jamo Extended-B"](t)||(!!Mn["Hangul Jamo"](t)||(!!Mn["Hangul Syllables"](t)||(!!Mn.Hiragana(t)||(!!Mn["Ideographic Description Characters"](t)||(!!Mn.Kanbun(t)||(!!Mn["Kangxi Radicals"](t)||(!!Mn["Katakana Phonetic Extensions"](t)||(!(!Mn.Katakana(t)||12540===t)||(!(!Mn["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||(!(!Mn["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||(!!Mn["Unified Canadian Aboriginal Syllabics"](t)||(!!Mn["Unified Canadian Aboriginal Syllabics Extended"](t)||(!!Mn["Vertical Forms"](t)||(!!Mn["Yijing Hexagram Symbols"](t)||(!!Mn["Yi Syllables"](t)||!!Mn["Yi Radicals"](t))))))))))))))))))))))))))))))}function On(t){return !(Ln(t)||function(t){return !(!Mn["Latin-1 Supplement"](t)||167!==t&&169!==t&&174!==t&&177!==t&&188!==t&&189!==t&&190!==t&&215!==t&&247!==t)||(!(!Mn["General Punctuation"](t)||8214!==t&&8224!==t&&8225!==t&&8240!==t&&8241!==t&&8251!==t&&8252!==t&&8258!==t&&8263!==t&&8264!==t&&8265!==t&&8273!==t)||(!!Mn["Letterlike Symbols"](t)||(!!Mn["Number Forms"](t)||(!(!Mn["Miscellaneous Technical"](t)||!(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215))||(!(!Mn["Control Pictures"](t)||9251===t)||(!!Mn["Optical Character Recognition"](t)||(!!Mn["Enclosed Alphanumerics"](t)||(!!Mn["Geometric Shapes"](t)||(!(!Mn["Miscellaneous Symbols"](t)||t>=9754&&t<=9759)||(!(!Mn["Miscellaneous Symbols and Arrows"](t)||!(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243))||(!!Mn["CJK Symbols and Punctuation"](t)||(!!Mn.Katakana(t)||(!!Mn["Private Use Area"](t)||(!!Mn["CJK Compatibility Forms"](t)||(!!Mn["Small Form Variants"](t)||(!!Mn["Halfwidth and Fullwidth Forms"](t)||(8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)))))))))))))))))}(t))}function Dn(t){return t>=1424&&t<=2303||Mn["Arabic Presentation Forms-A"](t)||Mn["Arabic Presentation Forms-B"](t)}function Rn(t,e){return !(!e&&Dn(t))&&!(t>=2304&&t<=3583||t>=3840&&t<=4255||Mn.Khmer(t))}function Un(t){for(var e=0,r=t;e<r.length;e+=1){if(Dn(r[e].charCodeAt(0)))return !0}return !1}var jn="deferred",qn="loading",Nn="loaded",Kn=null,Xn="unavailable",Zn=null,Gn=function(t){Kn&&Kn(t);};function Jn(){Hn.fire(new Ct("pluginStateChange",{pluginStatus:Xn,pluginURL:Zn}));}var Hn=new Pt,Yn=function(){return Xn},$n=function(){if(Xn!==jn||!Zn)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified");Xn=qn,Jn(),Zn&&_t({url:Zn},(function(t){t?Gn(t):(Xn=Nn,Jn());}));},Wn={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:function(){return Xn===Nn||null!=Wn.applyArabicShaping},isLoading:function(){return Xn===qn},setState:function(t){Xn=t.pluginStatus,Zn=t.pluginURL;},isParsed:function(){return null!=Wn.applyArabicShaping&&null!=Wn.processBidirectionalText&&null!=Wn.processStyledBidirectionalText},getPluginURL:function(){return Zn}},Qn=function(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new En,this.transition={});};Qn.prototype.isSupportedScript=function(t){return function(t,e){for(var r=0,n=t;r<n.length;r+=1){if(!Rn(n[r].charCodeAt(0),e))return !1}return !0}(t,Wn.isLoaded())},Qn.prototype.crossFadingFactor=function(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)},Qn.prototype.getCrossfadeParameters=function(){var t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor();return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}};var ti=function(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(Sr(t))return new Or(t,e);if(Er(t)){var r=Lr(t,e);if("error"===r.result)throw new Error(r.value.map((function(t){return t.key+": "+t.message})).join(", "));return r.value}var n=t;return "string"==typeof t&&"color"===e.type&&(n=te.parse(t)),{kind:"constant",evaluate:function(){return n}}}(void 0===e?t.specification.default:e,t.specification);};ti.prototype.isDataDriven=function(){return "source"===this.expression.kind||"composite"===this.expression.kind},ti.prototype.possiblyEvaluate=function(t,e){return this.property.possiblyEvaluate(this,t,e)};var ei=function(t){this.property=t,this.value=new ti(t,void 0);};ei.prototype.transitioned=function(t,e){return new ni(this.property,this.value,e,p({},t.transition,this.transition),t.now)},ei.prototype.untransitioned=function(){return new ni(this.property,this.value,null,{},0)};var ri=function(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);};ri.prototype.getValue=function(t){return x(this._values[t].value.value)},ri.prototype.setValue=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new ei(this._values[t].property)),this._values[t].value=new ti(this._values[t].property,null===e?void 0:x(e));},ri.prototype.getTransition=function(t){return x(this._values[t].transition)},ri.prototype.setTransition=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new ei(this._values[t].property)),this._values[t].transition=x(e)||void 0;},ri.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);var a=this.getTransition(n);void 0!==a&&(t[n+"-transition"]=a);}return t},ri.prototype.transitioned=function(t,e){for(var r=new ii(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var a=i[n];r._values[a]=this._values[a].transitioned(t,e._values[a]);}return r},ri.prototype.untransitioned=function(){for(var t=new ii(this._properties),e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e];t._values[n]=this._values[n].untransitioned();}return t};var ni=function(t,e,r,n,i){this.property=t,this.value=e,this.begin=i+n.delay||0,this.end=this.begin+n.duration||0,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);};ni.prototype.possiblyEvaluate=function(t,e){var r=t.now||0,n=this.value.possiblyEvaluate(t,e),i=this.prior;if(i){if(r>this.end)return this.prior=null,n;if(this.value.isDataDriven())return this.prior=null,n;if(r<this.begin)return i.possiblyEvaluate(t,e);var a=(r-this.begin)/(this.end-this.begin);return this.property.interpolate(i.possiblyEvaluate(t,e),n,function(t){if(t<=0)return 0;if(t>=1)return 1;var e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}(a))}return n};var ii=function(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);};ii.prototype.possiblyEvaluate=function(t,e){for(var r=new si(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var a=i[n];r._values[a]=this._values[a].possiblyEvaluate(t,e);}return r},ii.prototype.hasTransition=function(){for(var t=0,e=Object.keys(this._values);t<e.length;t+=1){var r=e[t];if(this._values[r].prior)return !0}return !1};var ai=function(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);};ai.prototype.getValue=function(t){return x(this._values[t].value)},ai.prototype.setValue=function(t,e){this._values[t]=new ti(this._values[t].property,null===e?void 0:x(e));},ai.prototype.serialize=function(){for(var t={},e=0,r=Object.keys(this._values);e<r.length;e+=1){var n=r[e],i=this.getValue(n);void 0!==i&&(t[n]=i);}return t},ai.prototype.possiblyEvaluate=function(t,e){for(var r=new si(this._properties),n=0,i=Object.keys(this._values);n<i.length;n+=1){var a=i[n];r._values[a]=this._values[a].possiblyEvaluate(t,e);}return r};var oi=function(t,e,r){this.property=t,this.value=e,this.parameters=r;};oi.prototype.isConstant=function(){return "constant"===this.value.kind},oi.prototype.constantOr=function(t){return "constant"===this.value.kind?this.value.value:t},oi.prototype.evaluate=function(t,e,r){return this.property.evaluate(this.value,this.parameters,t,e,r)};var si=function(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);};si.prototype.get=function(t){return this._values[t]};var ui=function(t){this.specification=t;};ui.prototype.possiblyEvaluate=function(t,e){return t.expression.evaluate(e)},ui.prototype.interpolate=function(t,e,r){var n=Ce[this.specification.type];return n?n(t,e,r):t};var li=function(t,e){this.specification=t,this.overrides=e;};li.prototype.possiblyEvaluate=function(t,e,r){return "constant"===t.expression.kind||"camera"===t.expression.kind?new oi(this,{kind:"constant",value:t.expression.evaluate(e,null,{},r)},e):new oi(this,t.expression,e)},li.prototype.interpolate=function(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new oi(this,{kind:"constant",value:void 0},t.parameters);var n=Ce[this.specification.type];return n?new oi(this,{kind:"constant",value:n(t.value.value,e.value.value,r)},t.parameters):t},li.prototype.evaluate=function(t,e,r,n,i){return "constant"===t.kind?t.value:t.evaluate(e,r,n,i)};var pi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(t,e,r){if(void 0===t.value)return new oi(this,{kind:"constant",value:void 0},e);if("constant"===t.expression.kind){var n=t.expression.evaluate(e,null,{},r),i="resolvedImage"===t.property.specification.type&&"string"!=typeof n?n.name:n,a=this._calculate(i,i,i,e);return new oi(this,{kind:"constant",value:a},e)}if("camera"===t.expression.kind){var o=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e);return new oi(this,{kind:"constant",value:o},e)}return new oi(this,t.expression,e)},e.prototype.evaluate=function(t,e,r,n,i){if("source"===t.kind){var a=t.evaluate(e,r,n,i);return this._calculate(a,a,a,e)}return "composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,n),t.evaluate({zoom:Math.floor(e.zoom)},r,n),t.evaluate({zoom:Math.floor(e.zoom)+1},r,n),e):t.value},e.prototype._calculate=function(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},e.prototype.interpolate=function(t){return t},e}(li),ci=function(t){this.specification=t;};ci.prototype.possiblyEvaluate=function(t,e,r){if(void 0!==t.value){if("constant"===t.expression.kind){var n=t.expression.evaluate(e,null,{},r);return this._calculate(n,n,n,e)}return this._calculate(t.expression.evaluate(new Qn(Math.floor(e.zoom-1),e)),t.expression.evaluate(new Qn(Math.floor(e.zoom),e)),t.expression.evaluate(new Qn(Math.floor(e.zoom+1),e)),e)}},ci.prototype._calculate=function(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}},ci.prototype.interpolate=function(t){return t};var hi=function(t){this.specification=t;};hi.prototype.possiblyEvaluate=function(t,e,r){return !!t.expression.evaluate(e,null,{},r)},hi.prototype.interpolate=function(){return !1};var fi=function(t){for(var e in this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[],t){var r=t[e];r.specification.overridable&&this.overridableProperties.push(e);var n=this.defaultPropertyValues[e]=new ti(r,void 0),i=this.defaultTransitionablePropertyValues[e]=new ei(r);this.defaultTransitioningPropertyValues[e]=i.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=n.possiblyEvaluate({});}};In("DataDrivenProperty",li),In("DataConstantProperty",ui),In("CrossFadedDataDrivenProperty",pi),In("CrossFadedProperty",ci),In("ColorRampProperty",hi);var yi=function(t){function e(e,r){if(t.call(this),this.id=e.id,this.type=e.type,this._featureFilter=function(){return !0},"custom"!==e.type&&(e=e,this.metadata=e.metadata,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,"background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),r.layout&&(this._unevaluatedLayout=new ai(r.layout)),r.paint)){for(var n in this._transitionablePaint=new ri(r.paint),e.paint)this.setPaintProperty(n,e.paint[n],{validate:!1});for(var i in e.layout)this.setLayoutProperty(i,e.layout[i],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned();}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCrossfadeParameters=function(){return this._crossfadeParameters},e.prototype.getLayoutProperty=function(t){return "visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)},e.prototype.setLayoutProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e){var n="layers."+this.id+".layout."+t;if(this._validate(gn,n,t,e,r))return}"visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e;},e.prototype.getPaintProperty=function(t){return m(t,"-transition")?this._transitionablePaint.getTransition(t.slice(0,-"-transition".length)):this._transitionablePaint.getValue(t)},e.prototype.setPaintProperty=function(t,e,r){if(void 0===r&&(r={}),null!=e){var n="layers."+this.id+".paint."+t;if(this._validate(vn,n,t,e,r))return !1}if(m(t,"-transition"))return this._transitionablePaint.setTransition(t.slice(0,-"-transition".length),e||void 0),!1;var i=this._transitionablePaint._values[t],a="cross-faded-data-driven"===i.property.specification["property-type"],o=i.value.isDataDriven(),s=i.value;this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t);var u=this._transitionablePaint._values[t].value;return u.isDataDriven()||o||a||this._handleOverridablePaintPropertyUpdate(t,s,u)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){},e.prototype._handleOverridablePaintPropertyUpdate=function(t,e,r){return !1},e.prototype.isHidden=function(t){return !!(this.minzoom&&t<this.minzoom)||(!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility)},e.prototype.updateTransitions=function(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);},e.prototype.hasTransition=function(){return this._transitioningPaint.hasTransition()},e.prototype.recalculate=function(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,e);},e.prototype.serialize=function(){var t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),g(t,(function(t,e){return !(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)}))},e.prototype._validate=function(t,e,r,n,i){return void 0===i&&(i={}),(!i||!1!==i.validate)&&xn(this,t.call(dn,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:Tt,style:{glyphs:!0,sprite:!0}}))},e.prototype.is3D=function(){return !1},e.prototype.isTileClipped=function(){return !1},e.prototype.hasOffscreenPass=function(){return !1},e.prototype.resize=function(){},e.prototype.isStateDependent=function(){for(var t in this.paint._values){var e=this.paint.get(t);if(e instanceof oi&&br(e.property.specification)&&(("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent))return !0}return !1},e}(Pt),di={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},mi=function(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;},vi=function(){this.isTransferred=!1,this.capacity=-1,this.resize(0);};function gi(t,e){void 0===e&&(e=1);var r=0,n=0;return {members:t.map((function(t){var i,a=(i=t.type,di[i].BYTES_PER_ELEMENT),o=r=xi(r,Math.max(e,a)),s=t.components||1;return n=Math.max(n,a),r+=a*s,{name:t.name,type:t.type,components:s,offset:o}})),size:xi(r,Math.max(n,e)),alignment:e}}function xi(t,e){return Math.ceil(t/e)*e}vi.serialize=function(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}},vi.deserialize=function(t){var e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e},vi.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());},vi.prototype.clear=function(){this.length=0;},vi.prototype.resize=function(t){this.reserve(t),this.length=t;},vi.prototype.reserve=function(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);var e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}},vi.prototype._refreshViews=function(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")};var bi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.int16[n+0]=e,this.int16[n+1]=r,t},e}(vi);bi.prototype.bytesPerElement=4,In("StructArrayLayout2i4",bi);var _i=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=4*t;return this.int16[a+0]=e,this.int16[a+1]=r,this.int16[a+2]=n,this.int16[a+3]=i,t},e}(vi);_i.prototype.bytesPerElement=8,In("StructArrayLayout4i8",_i);var wi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=6*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,this.int16[s+4]=a,this.int16[s+5]=o,t},e}(vi);wi.prototype.bytesPerElement=12,In("StructArrayLayout2i4i12",wi);var Ai=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=4*t,u=8*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.uint8[u+4]=n,this.uint8[u+5]=i,this.uint8[u+6]=a,this.uint8[u+7]=o,t},e}(vi);Ai.prototype.bytesPerElement=8,In("StructArrayLayout2i4ub8",Ai);var Si=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s){var u=this.length;return this.resize(u+1),this.emplace(u,t,e,r,n,i,a,o,s)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u){var l=8*t;return this.uint16[l+0]=e,this.uint16[l+1]=r,this.uint16[l+2]=n,this.uint16[l+3]=i,this.uint16[l+4]=a,this.uint16[l+5]=o,this.uint16[l+6]=s,this.uint16[l+7]=u,t},e}(vi);Si.prototype.bytesPerElement=16,In("StructArrayLayout8ui16",Si);var ki=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c){var h=this.length;return this.resize(h+1),this.emplace(h,t,e,r,n,i,a,o,s,u,l,p,c)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h){var f=12*t;return this.int16[f+0]=e,this.int16[f+1]=r,this.int16[f+2]=n,this.int16[f+3]=i,this.uint16[f+4]=a,this.uint16[f+5]=o,this.uint16[f+6]=s,this.uint16[f+7]=u,this.int16[f+8]=l,this.int16[f+9]=p,this.int16[f+10]=c,this.int16[f+11]=h,t},e}(vi);ki.prototype.bytesPerElement=24,In("StructArrayLayout4i4ui4i24",ki);var Ii=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.float32[i+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t},e}(vi);Ii.prototype.bytesPerElement=12,In("StructArrayLayout3f12",Ii);var zi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.uint32[r+0]=e,t},e}(vi);zi.prototype.bytesPerElement=4,In("StructArrayLayout1ul4",zi);var Ci=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p){var c=this.length;return this.resize(c+1),this.emplace(c,t,e,r,n,i,a,o,s,u,l,p)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c){var h=12*t,f=6*t;return this.int16[h+0]=e,this.int16[h+1]=r,this.int16[h+2]=n,this.int16[h+3]=i,this.int16[h+4]=a,this.int16[h+5]=o,this.uint32[f+3]=s,this.uint16[h+8]=u,this.uint16[h+9]=l,this.int16[h+10]=p,this.int16[h+11]=c,t},e}(vi);Ci.prototype.bytesPerElement=24,In("StructArrayLayout6i1ul2ui2i24",Ci);var Bi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a){var o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,a)},e.prototype.emplace=function(t,e,r,n,i,a,o){var s=6*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,this.int16[s+4]=a,this.int16[s+5]=o,t},e}(vi);Bi.prototype.bytesPerElement=12,In("StructArrayLayout2i2i2i12",Bi);var Pi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=12*t,o=3*t;return this.uint8[a+0]=e,this.uint8[a+1]=r,this.float32[o+1]=n,this.float32[o+2]=i,t},e}(vi);Pi.prototype.bytesPerElement=12,In("StructArrayLayout2ub2f12",Pi);var Ti=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m){var v=this.length;return this.resize(v+1),this.emplace(v,t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v){var g=24*t,x=12*t,b=48*t;return this.int16[g+0]=e,this.int16[g+1]=r,this.uint16[g+2]=n,this.uint16[g+3]=i,this.uint32[x+2]=a,this.uint32[x+3]=o,this.uint32[x+4]=s,this.uint16[g+10]=u,this.uint16[g+11]=l,this.uint16[g+12]=p,this.float32[x+7]=c,this.float32[x+8]=h,this.uint8[b+36]=f,this.uint8[b+37]=y,this.uint8[b+38]=d,this.uint32[x+10]=m,this.int16[g+22]=v,t},e}(vi);Ti.prototype.bytesPerElement=48,In("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",Ti);var Ei=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,_,w,A,S,k){var I=this.length;return this.resize(I+1),this.emplace(I,t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,_,w,A,S,k)},e.prototype.emplace=function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,_,w,A,S,k,I){var z=30*t,C=15*t;return this.int16[z+0]=e,this.int16[z+1]=r,this.int16[z+2]=n,this.int16[z+3]=i,this.int16[z+4]=a,this.int16[z+5]=o,this.int16[z+6]=s,this.int16[z+7]=u,this.uint16[z+8]=l,this.uint16[z+9]=p,this.uint16[z+10]=c,this.uint16[z+11]=h,this.uint16[z+12]=f,this.uint16[z+13]=y,this.uint16[z+14]=d,this.uint16[z+15]=m,this.uint16[z+16]=v,this.uint16[z+17]=g,this.uint16[z+18]=x,this.uint16[z+19]=b,this.uint16[z+20]=_,this.uint16[z+21]=w,this.uint32[C+11]=A,this.float32[C+12]=S,this.float32[C+13]=k,this.float32[C+14]=I,t},e}(vi);Ei.prototype.bytesPerElement=60,In("StructArrayLayout8i14ui1ul3f60",Ei);var Mi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.float32[r+0]=e,t},e}(vi);Mi.prototype.bytesPerElement=4,In("StructArrayLayout1f4",Mi);var Vi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.int16[i+0]=e,this.int16[i+1]=r,this.int16[i+2]=n,t},e}(vi);Vi.prototype.bytesPerElement=6,In("StructArrayLayout3i6",Vi);var Fi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=2*t,a=4*t;return this.uint32[i+0]=e,this.uint16[a+2]=r,this.uint16[a+3]=n,t},e}(vi);Fi.prototype.bytesPerElement=8,In("StructArrayLayout1ul2ui8",Fi);var Li=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r){var n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)},e.prototype.emplace=function(t,e,r,n){var i=3*t;return this.uint16[i+0]=e,this.uint16[i+1]=r,this.uint16[i+2]=n,t},e}(vi);Li.prototype.bytesPerElement=6,In("StructArrayLayout3ui6",Li);var Oi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.uint16[n+0]=e,this.uint16[n+1]=r,t},e}(vi);Oi.prototype.bytesPerElement=4,In("StructArrayLayout2ui4",Oi);var Di=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t){var e=this.length;return this.resize(e+1),this.emplace(e,t)},e.prototype.emplace=function(t,e){var r=1*t;return this.uint16[r+0]=e,t},e}(vi);Di.prototype.bytesPerElement=2,In("StructArrayLayout1ui2",Di);var Ri=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e){var r=this.length;return this.resize(r+1),this.emplace(r,t,e)},e.prototype.emplace=function(t,e,r){var n=2*t;return this.float32[n+0]=e,this.float32[n+1]=r,t},e}(vi);Ri.prototype.bytesPerElement=8,In("StructArrayLayout2f8",Ri);var Ui=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);},e.prototype.emplaceBack=function(t,e,r,n){var i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)},e.prototype.emplace=function(t,e,r,n,i){var a=4*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.float32[a+3]=i,t},e}(vi);Ui.prototype.bytesPerElement=16,In("StructArrayLayout4f16",Ui);var ji=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorPointX:{configurable:!0},anchorPointY:{configurable:!0},x1:{configurable:!0},y1:{configurable:!0},x2:{configurable:!0},y2:{configurable:!0},featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0},radius:{configurable:!0},signedDistanceFromAnchor:{configurable:!0},anchorPoint:{configurable:!0}};return r.anchorPointX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorPointX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorPointY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorPointY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.x1.get=function(){return this._structArray.int16[this._pos2+2]},r.x1.set=function(t){this._structArray.int16[this._pos2+2]=t;},r.y1.get=function(){return this._structArray.int16[this._pos2+3]},r.y1.set=function(t){this._structArray.int16[this._pos2+3]=t;},r.x2.get=function(){return this._structArray.int16[this._pos2+4]},r.x2.set=function(t){this._structArray.int16[this._pos2+4]=t;},r.y2.get=function(){return this._structArray.int16[this._pos2+5]},r.y2.set=function(t){this._structArray.int16[this._pos2+5]=t;},r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t;},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+8]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+8]=t;},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t;},r.radius.get=function(){return this._structArray.int16[this._pos2+10]},r.radius.set=function(t){this._structArray.int16[this._pos2+10]=t;},r.signedDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+11]},r.signedDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+11]=t;},r.anchorPoint.get=function(){return new i(this.anchorPointX,this.anchorPointY)},Object.defineProperties(e.prototype,r),e}(mi);ji.prototype.size=24;var qi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new ji(this,t)},e}(Ci);In("CollisionBoxArray",qi);var Ni=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},glyphStartIndex:{configurable:!0},numGlyphs:{configurable:!0},vertexStartIndex:{configurable:!0},lineStartIndex:{configurable:!0},lineLength:{configurable:!0},segment:{configurable:!0},lowerSize:{configurable:!0},upperSize:{configurable:!0},lineOffsetX:{configurable:!0},lineOffsetY:{configurable:!0},writingMode:{configurable:!0},placedOrientation:{configurable:!0},hidden:{configurable:!0},crossTileID:{configurable:!0},associatedIconIndex:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.glyphStartIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.glyphStartIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t;},r.numGlyphs.get=function(){return this._structArray.uint16[this._pos2+3]},r.numGlyphs.set=function(t){this._structArray.uint16[this._pos2+3]=t;},r.vertexStartIndex.get=function(){return this._structArray.uint32[this._pos4+2]},r.vertexStartIndex.set=function(t){this._structArray.uint32[this._pos4+2]=t;},r.lineStartIndex.get=function(){return this._structArray.uint32[this._pos4+3]},r.lineStartIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t;},r.lineLength.get=function(){return this._structArray.uint32[this._pos4+4]},r.lineLength.set=function(t){this._structArray.uint32[this._pos4+4]=t;},r.segment.get=function(){return this._structArray.uint16[this._pos2+10]},r.segment.set=function(t){this._structArray.uint16[this._pos2+10]=t;},r.lowerSize.get=function(){return this._structArray.uint16[this._pos2+11]},r.lowerSize.set=function(t){this._structArray.uint16[this._pos2+11]=t;},r.upperSize.get=function(){return this._structArray.uint16[this._pos2+12]},r.upperSize.set=function(t){this._structArray.uint16[this._pos2+12]=t;},r.lineOffsetX.get=function(){return this._structArray.float32[this._pos4+7]},r.lineOffsetX.set=function(t){this._structArray.float32[this._pos4+7]=t;},r.lineOffsetY.get=function(){return this._structArray.float32[this._pos4+8]},r.lineOffsetY.set=function(t){this._structArray.float32[this._pos4+8]=t;},r.writingMode.get=function(){return this._structArray.uint8[this._pos1+36]},r.writingMode.set=function(t){this._structArray.uint8[this._pos1+36]=t;},r.placedOrientation.get=function(){return this._structArray.uint8[this._pos1+37]},r.placedOrientation.set=function(t){this._structArray.uint8[this._pos1+37]=t;},r.hidden.get=function(){return this._structArray.uint8[this._pos1+38]},r.hidden.set=function(t){this._structArray.uint8[this._pos1+38]=t;},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+10]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+10]=t;},r.associatedIconIndex.get=function(){return this._structArray.int16[this._pos2+22]},r.associatedIconIndex.set=function(t){this._structArray.int16[this._pos2+22]=t;},Object.defineProperties(e.prototype,r),e}(mi);Ni.prototype.size=48;var Ki=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Ni(this,t)},e}(Ti);In("PlacedSymbolArray",Ki);var Xi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={anchorX:{configurable:!0},anchorY:{configurable:!0},rightJustifiedTextSymbolIndex:{configurable:!0},centerJustifiedTextSymbolIndex:{configurable:!0},leftJustifiedTextSymbolIndex:{configurable:!0},verticalPlacedTextSymbolIndex:{configurable:!0},placedIconSymbolIndex:{configurable:!0},verticalPlacedIconSymbolIndex:{configurable:!0},key:{configurable:!0},textBoxStartIndex:{configurable:!0},textBoxEndIndex:{configurable:!0},verticalTextBoxStartIndex:{configurable:!0},verticalTextBoxEndIndex:{configurable:!0},iconBoxStartIndex:{configurable:!0},iconBoxEndIndex:{configurable:!0},verticalIconBoxStartIndex:{configurable:!0},verticalIconBoxEndIndex:{configurable:!0},featureIndex:{configurable:!0},numHorizontalGlyphVertices:{configurable:!0},numVerticalGlyphVertices:{configurable:!0},numIconVertices:{configurable:!0},numVerticalIconVertices:{configurable:!0},crossTileID:{configurable:!0},textBoxScale:{configurable:!0},textOffset0:{configurable:!0},textOffset1:{configurable:!0}};return r.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},r.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},r.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.rightJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+2]},r.rightJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+2]=t;},r.centerJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+3]},r.centerJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+3]=t;},r.leftJustifiedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+4]},r.leftJustifiedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+4]=t;},r.verticalPlacedTextSymbolIndex.get=function(){return this._structArray.int16[this._pos2+5]},r.verticalPlacedTextSymbolIndex.set=function(t){this._structArray.int16[this._pos2+5]=t;},r.placedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+6]},r.placedIconSymbolIndex.set=function(t){this._structArray.int16[this._pos2+6]=t;},r.verticalPlacedIconSymbolIndex.get=function(){return this._structArray.int16[this._pos2+7]},r.verticalPlacedIconSymbolIndex.set=function(t){this._structArray.int16[this._pos2+7]=t;},r.key.get=function(){return this._structArray.uint16[this._pos2+8]},r.key.set=function(t){this._structArray.uint16[this._pos2+8]=t;},r.textBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+9]},r.textBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t;},r.textBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+10]},r.textBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+10]=t;},r.verticalTextBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+11]},r.verticalTextBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+11]=t;},r.verticalTextBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+12]},r.verticalTextBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+12]=t;},r.iconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+13]},r.iconBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+13]=t;},r.iconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+14]},r.iconBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+14]=t;},r.verticalIconBoxStartIndex.get=function(){return this._structArray.uint16[this._pos2+15]},r.verticalIconBoxStartIndex.set=function(t){this._structArray.uint16[this._pos2+15]=t;},r.verticalIconBoxEndIndex.get=function(){return this._structArray.uint16[this._pos2+16]},r.verticalIconBoxEndIndex.set=function(t){this._structArray.uint16[this._pos2+16]=t;},r.featureIndex.get=function(){return this._structArray.uint16[this._pos2+17]},r.featureIndex.set=function(t){this._structArray.uint16[this._pos2+17]=t;},r.numHorizontalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+18]},r.numHorizontalGlyphVertices.set=function(t){this._structArray.uint16[this._pos2+18]=t;},r.numVerticalGlyphVertices.get=function(){return this._structArray.uint16[this._pos2+19]},r.numVerticalGlyphVertices.set=function(t){this._structArray.uint16[this._pos2+19]=t;},r.numIconVertices.get=function(){return this._structArray.uint16[this._pos2+20]},r.numIconVertices.set=function(t){this._structArray.uint16[this._pos2+20]=t;},r.numVerticalIconVertices.get=function(){return this._structArray.uint16[this._pos2+21]},r.numVerticalIconVertices.set=function(t){this._structArray.uint16[this._pos2+21]=t;},r.crossTileID.get=function(){return this._structArray.uint32[this._pos4+11]},r.crossTileID.set=function(t){this._structArray.uint32[this._pos4+11]=t;},r.textBoxScale.get=function(){return this._structArray.float32[this._pos4+12]},r.textBoxScale.set=function(t){this._structArray.float32[this._pos4+12]=t;},r.textOffset0.get=function(){return this._structArray.float32[this._pos4+13]},r.textOffset0.set=function(t){this._structArray.float32[this._pos4+13]=t;},r.textOffset1.get=function(){return this._structArray.float32[this._pos4+14]},r.textOffset1.set=function(t){this._structArray.float32[this._pos4+14]=t;},Object.defineProperties(e.prototype,r),e}(mi);Xi.prototype.size=60;var Zi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new Xi(this,t)},e}(Ei);In("SymbolInstanceArray",Zi);var Gi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={offsetX:{configurable:!0}};return r.offsetX.get=function(){return this._structArray.float32[this._pos4+0]},r.offsetX.set=function(t){this._structArray.float32[this._pos4+0]=t;},Object.defineProperties(e.prototype,r),e}(mi);Gi.prototype.size=4;var Ji=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getoffsetX=function(t){return this.float32[1*t+0]},e.prototype.get=function(t){return new Gi(this,t)},e}(Mi);In("GlyphOffsetArray",Ji);var Hi=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={x:{configurable:!0},y:{configurable:!0},tileUnitDistanceFromAnchor:{configurable:!0}};return r.x.get=function(){return this._structArray.int16[this._pos2+0]},r.x.set=function(t){this._structArray.int16[this._pos2+0]=t;},r.y.get=function(){return this._structArray.int16[this._pos2+1]},r.y.set=function(t){this._structArray.int16[this._pos2+1]=t;},r.tileUnitDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+2]},r.tileUnitDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+2]=t;},Object.defineProperties(e.prototype,r),e}(mi);Hi.prototype.size=6;var Yi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getx=function(t){return this.int16[3*t+0]},e.prototype.gety=function(t){return this.int16[3*t+1]},e.prototype.gettileUnitDistanceFromAnchor=function(t){return this.int16[3*t+2]},e.prototype.get=function(t){return new Hi(this,t)},e}(Vi);In("SymbolLineVertexArray",Yi);var $i=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={featureIndex:{configurable:!0},sourceLayerIndex:{configurable:!0},bucketIndex:{configurable:!0}};return r.featureIndex.get=function(){return this._structArray.uint32[this._pos4+0]},r.featureIndex.set=function(t){this._structArray.uint32[this._pos4+0]=t;},r.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+2]},r.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t;},r.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+3]},r.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+3]=t;},Object.defineProperties(e.prototype,r),e}(mi);$i.prototype.size=8;var Wi=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return new $i(this,t)},e}(Fi);In("FeatureIndexArray",Wi);var Qi=gi([{name:"a_pos",components:2,type:"Int16"}],4).members,ta=function(t){void 0===t&&(t=[]),this.segments=t;};function ea(t,e){return 256*(t=u(Math.floor(t),0,255))+(e=u(Math.floor(e),0,255))}ta.prototype.prepareSegment=function(t,e,r,n){var i=this.segments[this.segments.length-1];return t>ta.MAX_VERTEX_ARRAY_LENGTH&&_("Max vertices per segment is "+ta.MAX_VERTEX_ARRAY_LENGTH+": bucket requested "+t),(!i||i.vertexLength+t>ta.MAX_VERTEX_ARRAY_LENGTH||i.sortKey!==n)&&(i={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==n&&(i.sortKey=n),this.segments.push(i)),i},ta.prototype.get=function(){return this.segments},ta.prototype.destroy=function(){for(var t=0,e=this.segments;t<e.length;t+=1){var r=e[t];for(var n in r.vaos)r.vaos[n].destroy();}},ta.simpleSegment=function(t,e,r,n){return new ta([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:n,vaos:{},sortKey:0}])},ta.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,In("SegmentVector",ta);var ra=e((function(t){t.exports=function(t,e){var r,n,i,a,o,s,u,l;for(r=3&t.length,n=t.length-r,i=e,o=3432918353,s=461845907,l=0;l<n;)u=255&t.charCodeAt(l)|(255&t.charCodeAt(++l))<<8|(255&t.charCodeAt(++l))<<16|(255&t.charCodeAt(++l))<<24,++l,i=27492+(65535&(a=5*(65535&(i=(i^=u=(65535&(u=(u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(a>>>16)&65535)<<16);switch(u=0,r){case 3:u^=(255&t.charCodeAt(l+2))<<16;case 2:u^=(255&t.charCodeAt(l+1))<<8;case 1:i^=u=(65535&(u=(u=(65535&(u^=255&t.charCodeAt(l)))*o+(((u>>>16)*o&65535)<<16)&4294967295)<<15|u>>>17))*s+(((u>>>16)*s&65535)<<16)&4294967295;}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};})),na=e((function(t){t.exports=function(t,e){for(var r,n=t.length,i=e^n,a=0;n>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))+((1540483477*(r>>>16)&65535)<<16),i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),n-=4,++a;switch(n){case 3:i^=(255&t.charCodeAt(a+2))<<16;case 2:i^=(255&t.charCodeAt(a+1))<<8;case 1:i=1540483477*(65535&(i^=255&t.charCodeAt(a)))+((1540483477*(i>>>16)&65535)<<16);}return i=1540483477*(65535&(i^=i>>>13))+((1540483477*(i>>>16)&65535)<<16),(i^=i>>>15)>>>0};})),ia=ra,aa=ra,oa=na;ia.murmur3=aa,ia.murmur2=oa;var sa=function(){this.ids=[],this.positions=[],this.indexed=!1;};sa.prototype.add=function(t,e,r,n){this.ids.push(la(t)),this.positions.push(e,r,n);},sa.prototype.getPositions=function(t){for(var e=la(t),r=0,n=this.ids.length-1;r<n;){var i=r+n>>1;this.ids[i]>=e?n=i:r=i+1;}for(var a=[];this.ids[r]===e;){var o=this.positions[3*r],s=this.positions[3*r+1],u=this.positions[3*r+2];a.push({index:o,start:s,end:u}),r++;}return a},sa.serialize=function(t,e){var r=new Float64Array(t.ids),n=new Uint32Array(t.positions);return function t(e,r,n,i){if(n>=i)return;var a=e[n+i>>1],o=n-1,s=i+1;for(;;){do{o++;}while(e[o]<a);do{s--;}while(e[s]>a);if(o>=s)break;pa(e,o,s),pa(r,3*o,3*s),pa(r,3*o+1,3*s+1),pa(r,3*o+2,3*s+2);}t(e,r,n,s),t(e,r,s+1,i);}(r,n,0,r.length-1),e&&e.push(r.buffer,n.buffer),{ids:r,positions:n}},sa.deserialize=function(t){var e=new sa;return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e};var ua=Math.pow(2,53)-1;function la(t){var e=+t;return !isNaN(e)&&e<=ua?e:ia(String(t))}function pa(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}In("FeaturePositionMap",sa);var ca=function(t,e){this.gl=t.gl,this.location=e;},ha=function(t){function e(e,r){t.call(this,e,r),this.current=0;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t));},e}(ca),fa=function(t){function e(e,r){t.call(this,e,r),this.current=0;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t));},e}(ca),ya=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]));},e}(ca),da=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]));},e}(ca),ma=function(t){function e(e,r){t.call(this,e,r),this.current=[0,0,0,0];}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]));},e}(ca),va=function(t){function e(e,r){t.call(this,e,r),this.current=te.transparent;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a));},e}(ca),ga=new Float32Array(16),xa=function(t){function e(e,r){t.call(this,e,r),this.current=ga;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t);for(var e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t);break}},e}(ca);function ba(t){return [ea(255*t.r,255*t.g),ea(255*t.b,255*t.a)]}var _a=function(t,e,r){this.value=t,this.names=e,this.uniformNames=this.names.map((function(t){return "u_"+t})),this.type=r,this.maxValue=-1/0;};_a.prototype.defines=function(){return this.names.map((function(t){return "#define HAS_UNIFORM_u_"+t}))},_a.prototype.setConstantPatternPositions=function(){},_a.prototype.populatePaintArray=function(){},_a.prototype.updatePaintArray=function(){},_a.prototype.upload=function(){},_a.prototype.destroy=function(){},_a.prototype.setUniforms=function(t,e,r,n){e.set(n.constantOr(this.value));},_a.prototype.getBinding=function(t,e){return "color"===this.type?new va(t,e):new fa(t,e)},_a.serialize=function(t){var e=t.value,r=t.names,n=t.type;return {value:Pn(e),names:r,type:n}},_a.deserialize=function(t){var e=t.value,r=t.names,n=t.type;return new _a(Tn(e),r,n)};var wa=function(t,e,r){this.value=t,this.names=e,this.uniformNames=this.names.map((function(t){return "u_"+t})),this.type=r,this.maxValue=-1/0,this.patternPositions={patternTo:null,patternFrom:null};};wa.prototype.defines=function(){return this.names.map((function(t){return "#define HAS_UNIFORM_u_"+t}))},wa.prototype.populatePaintArray=function(){},wa.prototype.updatePaintArray=function(){},wa.prototype.upload=function(){},wa.prototype.destroy=function(){},wa.prototype.setConstantPatternPositions=function(t,e){this.patternPositions.patternTo=t.tlbr,this.patternPositions.patternFrom=e.tlbr;},wa.prototype.setUniforms=function(t,e,r,n,i){var a=this.patternPositions;"u_pattern_to"===i&&a.patternTo&&e.set(a.patternTo),"u_pattern_from"===i&&a.patternFrom&&e.set(a.patternFrom);},wa.prototype.getBinding=function(t,e){return new ma(t,e)};var Aa=function(t,e,r,n){this.expression=t,this.names=e,this.type=r,this.uniformNames=this.names.map((function(t){return "a_"+t})),this.maxValue=-1/0,this.paintVertexAttributes=e.map((function(t){return {name:"a_"+t,type:"Float32",components:"color"===r?2:1,offset:0}})),this.paintVertexArray=new n;};Aa.prototype.defines=function(){return []},Aa.prototype.setConstantPatternPositions=function(){},Aa.prototype.populatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=i.length;i.reserve(t);var o=this.expression.evaluate(new Qn(0),e,{},[],n);if("color"===this.type)for(var s=ba(o),u=a;u<t;u++)i.emplaceBack(s[0],s[1]);else{for(var l=a;l<t;l++)i.emplaceBack(o);this.maxValue=Math.max(this.maxValue,o);}},Aa.prototype.updatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=this.expression.evaluate({zoom:0},r,n);if("color"===this.type)for(var o=ba(a),s=t;s<e;s++)i.emplace(s,o[0],o[1]);else{for(var u=t;u<e;u++)i.emplace(u,a);this.maxValue=Math.max(this.maxValue,a);}},Aa.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},Aa.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},Aa.prototype.setUniforms=function(t,e){e.set(0);},Aa.prototype.getBinding=function(t,e){return new fa(t,e)};var Sa=function(t,e,r,n,i,a){this.expression=t,this.names=e,this.uniformNames=this.names.map((function(t){return "u_"+t+"_t"})),this.type=r,this.useIntegerZoom=n,this.zoom=i,this.maxValue=-1/0;var o=a;this.paintVertexAttributes=e.map((function(t){return {name:"a_"+t,type:"Float32",components:"color"===r?4:2,offset:0}})),this.paintVertexArray=new o;};Sa.prototype.defines=function(){return []},Sa.prototype.setConstantPatternPositions=function(){},Sa.prototype.populatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=i.length;i.reserve(t);var o=this.expression.evaluate(new Qn(this.zoom),e,{},[],n),s=this.expression.evaluate(new Qn(this.zoom+1),e,{},[],n);if("color"===this.type)for(var u=ba(o),l=ba(s),p=a;p<t;p++)i.emplaceBack(u[0],u[1],l[0],l[1]);else{for(var c=a;c<t;c++)i.emplaceBack(o,s);this.maxValue=Math.max(this.maxValue,o,s);}},Sa.prototype.updatePaintArray=function(t,e,r,n){var i=this.paintVertexArray,a=this.expression.evaluate({zoom:this.zoom},r,n),o=this.expression.evaluate({zoom:this.zoom+1},r,n);if("color"===this.type)for(var s=ba(a),u=ba(o),l=t;l<e;l++)i.emplace(l,s[0],s[1],u[0],u[1]);else{for(var p=t;p<e;p++)i.emplace(p,a,o);this.maxValue=Math.max(this.maxValue,a,o);}},Sa.prototype.upload=function(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},Sa.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();},Sa.prototype.interpolationFactor=function(t){return this.useIntegerZoom&&(t=Math.floor(t)),u(this.expression.interpolationFactor(t,this.zoom,this.zoom+1),0,1)},Sa.prototype.setUniforms=function(t,e,r){e.set(this.interpolationFactor(r.zoom));},Sa.prototype.getBinding=function(t,e){return new fa(t,e)};var ka=function(t,e,r,n,i,a,o){this.expression=t,this.names=e,this.type=r,this.uniformNames=this.names.map((function(t){return "u_"+t+"_t"})),this.useIntegerZoom=n,this.zoom=i,this.maxValue=-1/0,this.layerId=o,this.paintVertexAttributes=e.map((function(t){return {name:"a_"+t,type:"Uint16",components:4,offset:0}})),this.zoomInPaintVertexArray=new a,this.zoomOutPaintVertexArray=new a;};ka.prototype.defines=function(){return []},ka.prototype.setConstantPatternPositions=function(){},ka.prototype.populatePaintArray=function(t,e,r){var n=this.zoomInPaintVertexArray,i=this.zoomOutPaintVertexArray,a=this.layerId,o=n.length;if(n.reserve(t),i.reserve(t),r&&e.patterns&&e.patterns[a]){var s=e.patterns[a],u=s.min,l=s.mid,p=s.max,c=r[u],h=r[l],f=r[p];if(!c||!h||!f)return;for(var y=o;y<t;y++)n.emplaceBack(h.tl[0],h.tl[1],h.br[0],h.br[1],c.tl[0],c.tl[1],c.br[0],c.br[1]),i.emplaceBack(h.tl[0],h.tl[1],h.br[0],h.br[1],f.tl[0],f.tl[1],f.br[0],f.br[1]);}},ka.prototype.updatePaintArray=function(t,e,r,n,i){var a=this.zoomInPaintVertexArray,o=this.zoomOutPaintVertexArray,s=this.layerId;if(i&&r.patterns&&r.patterns[s]){var u=r.patterns[s],l=u.min,p=u.mid,c=u.max,h=i[l],f=i[p],y=i[c];if(!h||!f||!y)return;for(var d=t;d<e;d++)a.emplace(d,f.tl[0],f.tl[1],f.br[0],f.br[1],h.tl[0],h.tl[1],h.br[0],h.br[1]),o.emplace(d,f.tl[0],f.tl[1],f.br[0],f.br[1],y.tl[0],y.tl[1],y.br[0],y.br[1]);}},ka.prototype.upload=function(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));},ka.prototype.destroy=function(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy();},ka.prototype.setUniforms=function(t,e){e.set(0);},ka.prototype.getBinding=function(t,e){return new fa(t,e)};var Ia=function(){this.binders={},this.cacheKey="",this._buffers=[];};Ia.createDynamic=function(t,e,r){var n=new Ia,i=[];for(var a in t.paint._values)if(r(a)){var o=t.paint.get(a);if(o instanceof oi&&br(o.property.specification)){var s=Ca(a,t.type),u=o.property.specification.type,l=o.property.useIntegerZoom;if("cross-faded"===o.property.specification["property-type"]||"cross-faded-data-driven"===o.property.specification["property-type"])if("constant"===o.value.kind)n.binders[a]=new wa(o.value.value,s,u),i.push("/u_"+a);else{var p=Ba(a,u,"source");n.binders[a]=new ka(o.value,s,u,l,e,p,t.id),i.push("/a_"+a);}else if("constant"===o.value.kind)n.binders[a]=new _a(o.value.value,s,u),i.push("/u_"+a);else if("source"===o.value.kind){var c=Ba(a,u,"source");n.binders[a]=new Aa(o.value,s,u,c),i.push("/a_"+a);}else{var h=Ba(a,u,"composite");n.binders[a]=new Sa(o.value,s,u,l,e,h),i.push("/z_"+a);}}}return n.cacheKey=i.sort().join(""),n},Ia.prototype.populatePaintArrays=function(t,e,r,n,i){for(var a in this.binders){this.binders[a].populatePaintArray(t,e,n,i);}},Ia.prototype.setConstantPatternPositions=function(t,e){for(var r in this.binders){this.binders[r].setConstantPatternPositions(t,e);}},Ia.prototype.updatePaintArrays=function(t,e,r,n,i){var a=!1;for(var o in t)for(var s=0,u=e.getPositions(o);s<u.length;s+=1){var l=u[s],p=r.feature(l.index);for(var c in this.binders){var h=this.binders[c];if(!(h instanceof _a||h instanceof wa)&&!0===h.expression.isStateDependent){var f=n.paint.get(c);h.expression=f.value,h.updatePaintArray(l.start,l.end,p,t[o],i),a=!0;}}}return a},Ia.prototype.defines=function(){var t=[];for(var e in this.binders)t.push.apply(t,this.binders[e].defines());return t},Ia.prototype.getPaintVertexBuffers=function(){return this._buffers},Ia.prototype.getUniforms=function(t,e){var r=[];for(var n in this.binders)for(var i=this.binders[n],a=0,o=i.uniformNames;a<o.length;a+=1){var s=o[a];if(e[s]){var u=i.getBinding(t,e[s]);r.push({name:s,property:n,binding:u});}}return r},Ia.prototype.setUniforms=function(t,e,r,n){for(var i=0,a=e;i<a.length;i+=1){var o=a[i],s=o.name,u=o.property,l=o.binding;this.binders[u].setUniforms(t,l,n,r.get(u),s);}},Ia.prototype.updatePatternPaintBuffers=function(t){var e=[];for(var r in this.binders){var n=this.binders[r];if(n instanceof ka){var i=2===t.fromScale?n.zoomInPaintVertexBuffer:n.zoomOutPaintVertexBuffer;i&&e.push(i);}else(n instanceof Aa||n instanceof Sa)&&n.paintVertexBuffer&&e.push(n.paintVertexBuffer);}this._buffers=e;},Ia.prototype.upload=function(t){for(var e in this.binders)this.binders[e].upload(t);var r=[];for(var n in this.binders){var i=this.binders[n];(i instanceof Aa||i instanceof Sa)&&i.paintVertexBuffer&&r.push(i.paintVertexBuffer);}this._buffers=r;},Ia.prototype.destroy=function(){for(var t in this.binders)this.binders[t].destroy();};var za=function(t,e,r,n){void 0===n&&(n=function(){return !0}),this.programConfigurations={};for(var i=0,a=e;i<a.length;i+=1){var o=a[i];this.programConfigurations[o.id]=Ia.createDynamic(o,r,n),this.programConfigurations[o.id].layoutAttributes=t;}this.needsUpload=!1,this._featureMap=new sa,this._bufferOffset=0;};function Ca(t,e){return {"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from"],"fill-pattern":["pattern_to","pattern_from"],"fill-extrusion-pattern":["pattern_to","pattern_from"]}[t]||[t.replace(e+"-","").replace(/-/g,"_")]}function Ba(t,e,r){var n={color:{source:Ri,composite:Ui},number:{source:Mi,composite:Ri}},i=function(t){return {"line-pattern":{source:Si,composite:Si},"fill-pattern":{source:Si,composite:Si},"fill-extrusion-pattern":{source:Si,composite:Si}}[t]}(t);return i&&i[r]||n[e][r]}za.prototype.populatePaintArrays=function(t,e,r,n,i){for(var a in this.programConfigurations)this.programConfigurations[a].populatePaintArrays(t,e,r,n,i);void 0!==e.id&&this._featureMap.add(e.id,r,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0;},za.prototype.updatePaintArrays=function(t,e,r,n){for(var i=0,a=r;i<a.length;i+=1){var o=a[i];this.needsUpload=this.programConfigurations[o.id].updatePaintArrays(t,this._featureMap,e,o,n)||this.needsUpload;}},za.prototype.get=function(t){return this.programConfigurations[t]},za.prototype.upload=function(t){if(this.needsUpload){for(var e in this.programConfigurations)this.programConfigurations[e].upload(t);this.needsUpload=!1;}},za.prototype.destroy=function(){for(var t in this.programConfigurations)this.programConfigurations[t].destroy();},In("ConstantBinder",_a),In("CrossFadedConstantBinder",wa),In("SourceExpressionBinder",Aa),In("CrossFadedCompositeBinder",ka),In("CompositeExpressionBinder",Sa),In("ProgramConfiguration",Ia,{omit:["_buffers"]}),In("ProgramConfigurationSet",za);var Pa=8192;var Ta,Ea=(Ta=15,{min:-1*Math.pow(2,Ta-1),max:Math.pow(2,Ta-1)-1});function Ma(t){for(var e=Pa/t.extent,r=t.loadGeometry(),n=0;n<r.length;n++)for(var i=r[n],a=0;a<i.length;a++){var o=i[a];o.x=Math.round(o.x*e),o.y=Math.round(o.y*e),(o.x<Ea.min||o.x>Ea.max||o.y<Ea.min||o.y>Ea.max)&&(_("Geometry exceeds allowed extent, reduce your vector tile buffer size"),o.x=u(o.x,Ea.min,Ea.max),o.y=u(o.y,Ea.min,Ea.max));}return r}function Va(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}var Fa=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new bi,this.indexArray=new Li,this.segments=new ta,this.programConfigurations=new za(Qi,t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};function La(t,e){for(var r=0;r<t.length;r++)if(Xa(e,t[r]))return !0;for(var n=0;n<e.length;n++)if(Xa(t,e[n]))return !0;return !!Ua(t,e)}function Oa(t,e,r){return !!Xa(t,e)||!!qa(e,t,r)}function Da(t,e){if(1===t.length)return Ka(e,t[0]);for(var r=0;r<e.length;r++)for(var n=e[r],i=0;i<n.length;i++)if(Xa(t,n[i]))return !0;for(var a=0;a<t.length;a++)if(Ka(e,t[a]))return !0;for(var o=0;o<e.length;o++)if(Ua(t,e[o]))return !0;return !1}function Ra(t,e,r){if(t.length>1){if(Ua(t,e))return !0;for(var n=0;n<e.length;n++)if(qa(e[n],t,r))return !0}for(var i=0;i<t.length;i++)if(qa(t[i],e,r))return !0;return !1}function Ua(t,e){if(0===t.length||0===e.length)return !1;for(var r=0;r<t.length-1;r++)for(var n=t[r],i=t[r+1],a=0;a<e.length-1;a++){if(ja(n,i,e[a],e[a+1]))return !0}return !1}function ja(t,e,r,n){return w(t,r,n)!==w(e,r,n)&&w(t,e,r)!==w(t,e,n)}function qa(t,e,r){var n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(var i=1;i<e.length;i++){if(Na(t,e[i-1],e[i])<n)return !0}return !1}function Na(t,e,r){var n=e.distSqr(r);if(0===n)return t.distSqr(e);var i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return i<0?t.distSqr(e):i>1?t.distSqr(r):t.distSqr(r.sub(e)._mult(i)._add(e))}function Ka(t,e){for(var r,n,i,a=!1,o=0;o<t.length;o++)for(var s=0,u=(r=t[o]).length-1;s<r.length;u=s++)n=r[s],i=r[u],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(a=!a);return a}function Xa(t,e){for(var r=!1,n=0,i=t.length-1;n<t.length;i=n++){var a=t[n],o=t[i];a.y>e.y!=o.y>e.y&&e.x<(o.x-a.x)*(e.y-a.y)/(o.y-a.y)+a.x&&(r=!r);}return r}function Za(t,e,r){var n=r[0],i=r[2];if(t.x<n.x&&e.x<n.x||t.x>i.x&&e.x>i.x||t.y<n.y&&e.y<n.y||t.y>i.y&&e.y>i.y)return !1;var a=w(t,e,r[0]);return a!==w(t,e,r[1])||a!==w(t,e,r[2])||a!==w(t,e,r[3])}function Ga(t,e,r){var n=e.paint.get(t).value;return "constant"===n.kind?n.value:r.programConfigurations.get(e.id).binders[t].maxValue}function Ja(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function Ha(t,e,r,n,a){if(!e[0]&&!e[1])return t;var o=i.convert(e)._mult(a);"viewport"===r&&o._rotate(-n);for(var s=[],u=0;u<t.length;u++){var l=t[u];s.push(l.sub(o));}return s}Fa.prototype.populate=function(t,e){var r=this.layers[0],n=[],i=null;"circle"===r.type&&(i=r.layout.get("circle-sort-key"));for(var a=0,o=t;a<o.length;a+=1){var s=o[a],u=s.feature,l=s.id,p=s.index,c=s.sourceLayerIndex;if(this.layers[0]._featureFilter(new Qn(this.zoom),u)){var h=Ma(u),f=i?i.evaluate(u,{}):void 0,y={id:l,properties:u.properties,type:u.type,sourceLayerIndex:c,index:p,geometry:h,patterns:{},sortKey:f};n.push(y);}}i&&n.sort((function(t,e){return t.sortKey-e.sortKey}));for(var d=0,m=n;d<m.length;d+=1){var v=m[d],g=v,x=g.geometry,b=g.index,_=g.sourceLayerIndex,w=t[b].feature;this.addFeature(v,x,b),e.featureIndex.insert(w,x,b,_,this.index);}},Fa.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},Fa.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Fa.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},Fa.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Qi),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},Fa.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},Fa.prototype.addFeature=function(t,e,r){for(var n=0,i=e;n<i.length;n+=1)for(var a=0,o=i[n];a<o.length;a+=1){var s=o[a],u=s.x,l=s.y;if(!(u<0||u>=Pa||l<0||l>=Pa)){var p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),c=p.vertexLength;Va(this.layoutVertexArray,u,l,-1,-1),Va(this.layoutVertexArray,u,l,1,-1),Va(this.layoutVertexArray,u,l,1,1),Va(this.layoutVertexArray,u,l,-1,1),this.indexArray.emplaceBack(c,c+1,c+2),this.indexArray.emplaceBack(c,c+3,c+2),p.vertexLength+=4,p.primitiveLength+=2;}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{});},In("CircleBucket",Fa,{omit:["layers"]});var Ya=new fi({"circle-sort-key":new li(Tt.layout_circle["circle-sort-key"])}),$a={paint:new fi({"circle-radius":new li(Tt.paint_circle["circle-radius"]),"circle-color":new li(Tt.paint_circle["circle-color"]),"circle-blur":new li(Tt.paint_circle["circle-blur"]),"circle-opacity":new li(Tt.paint_circle["circle-opacity"]),"circle-translate":new ui(Tt.paint_circle["circle-translate"]),"circle-translate-anchor":new ui(Tt.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new ui(Tt.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new ui(Tt.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new li(Tt.paint_circle["circle-stroke-width"]),"circle-stroke-color":new li(Tt.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new li(Tt.paint_circle["circle-stroke-opacity"])}),layout:Ya},Wa="undefined"!=typeof Float32Array?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var t=arguments,e=0,r=arguments.length;r--;)e+=t[r]*t[r];return Math.sqrt(e)});var Qa,to;Qa=new Wa(3),Wa!=Float32Array&&(Qa[0]=0,Qa[1]=0,Qa[2]=0),to=Qa;function eo(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,t[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,t[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,t[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,t}!function(){var t=function(){var t=new Wa(4);return Wa!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}();}();var ro=function(t){function e(e){t.call(this,e,$a);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new Fa(t)},e.prototype.queryRadius=function(t){var e=t;return Ga("circle-radius",this,e)+Ga("circle-stroke-width",this,e)+Ja(this.paint.get("circle-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,a,o,s){for(var u=Ha(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),a.angle,o),l=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),p="map"===this.paint.get("circle-pitch-alignment"),c=p?u:function(t,e){return t.map((function(t){return no(t,e)}))}(u,s),h=p?l*o:l,f=0,y=n;f<y.length;f+=1)for(var d=0,m=y[f];d<m.length;d+=1){var v=m[d],g=p?v:no(v,s),x=h,b=eo([],[v.x,v.y,0,1],s);if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?x*=b[3]/a.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(x*=a.cameraToCenterDistance/b[3]),Oa(c,g,x))return !0}return !1},e}(yi);function no(t,e){var r=eo([],[t.x,t.y,0,1],e);return new i(r[0]/r[3],r[1]/r[3])}var io=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Fa);function ao(t,e,r,n){var i=e.width,a=e.height;if(n){if(n instanceof Uint8ClampedArray)n=new Uint8Array(n.buffer);else if(n.length!==i*a*r)throw new RangeError("mismatched image size")}else n=new Uint8Array(i*a*r);return t.width=i,t.height=a,t.data=n,t}function oo(t,e,r){var n=e.width,i=e.height;if(n!==t.width||i!==t.height){var a=ao({},{width:n,height:i},r);so(t,a,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,n),height:Math.min(t.height,i)},r),t.width=n,t.height=i,t.data=a.data;}}function so(t,e,r,n,i,a){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");for(var o=t.data,s=e.data,u=0;u<i.height;u++)for(var l=((r.y+u)*t.width+r.x)*a,p=((n.y+u)*e.width+n.x)*a,c=0;c<i.width*a;c++)s[p+c]=o[l+c];return e}In("HeatmapBucket",io,{omit:["layers"]});var uo=function(t,e){ao(this,t,1,e);};uo.prototype.resize=function(t){oo(this,t,1);},uo.prototype.clone=function(){return new uo({width:this.width,height:this.height},new Uint8Array(this.data))},uo.copy=function(t,e,r,n,i){so(t,e,r,n,i,1);};var lo=function(t,e){ao(this,t,4,e);};lo.prototype.resize=function(t){oo(this,t,4);},lo.prototype.replace=function(t,e){e?this.data.set(t):t instanceof Uint8ClampedArray?this.data=new Uint8Array(t.buffer):this.data=t;},lo.prototype.clone=function(){return new lo({width:this.width,height:this.height},new Uint8Array(this.data))},lo.copy=function(t,e,r,n,i){so(t,e,r,n,i,4);},In("AlphaImage",uo),In("RGBAImage",lo);var po={paint:new fi({"heatmap-radius":new li(Tt.paint_heatmap["heatmap-radius"]),"heatmap-weight":new li(Tt.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new ui(Tt.paint_heatmap["heatmap-intensity"]),"heatmap-color":new hi(Tt.paint_heatmap["heatmap-color"]),"heatmap-opacity":new ui(Tt.paint_heatmap["heatmap-opacity"])})};function co(t,e){for(var r=new Uint8Array(1024),n={},i=0,a=0;i<256;i++,a+=4){n[e]=i/255;var o=t.evaluate(n);r[a+0]=Math.floor(255*o.r/o.a),r[a+1]=Math.floor(255*o.g/o.a),r[a+2]=Math.floor(255*o.b/o.a),r[a+3]=Math.floor(255*o.a);}return new lo({width:256,height:1},r)}var ho=function(t){function e(e){t.call(this,e,po),this._updateColorRamp();}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new io(t)},e.prototype._handleSpecialPaintPropertyUpdate=function(t){"heatmap-color"===t&&this._updateColorRamp();},e.prototype._updateColorRamp=function(){var t=this._transitionablePaint._values["heatmap-color"].value.expression;this.colorRamp=co(t,"heatmapDensity"),this.colorRampTexture=null;},e.prototype.resize=function(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return !1},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility},e}(yi),fo={paint:new fi({"hillshade-illumination-direction":new ui(Tt.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new ui(Tt.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new ui(Tt.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new ui(Tt.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new ui(Tt.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new ui(Tt.paint_hillshade["hillshade-accent-color"])})},yo=function(t){function e(e){t.call(this,e,fo);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility},e}(yi),mo=gi([{name:"a_pos",components:2,type:"Int16"}],4).members,vo=xo,go=xo;function xo(t,e,r){r=r||2;var n,i,a,o,s,u,l,p=e&&e.length,c=p?e[0]*r:t.length,h=bo(t,0,c,r,!0),f=[];if(!h||h.next===h.prev)return f;if(p&&(h=function(t,e,r,n){var i,a,o,s,u,l=[];for(i=0,a=e.length;i<a;i++)o=e[i]*n,s=i<a-1?e[i+1]*n:t.length,(u=bo(t,o,s,n,!1))===u.next&&(u.steiner=!0),l.push(To(u));for(l.sort(zo),i=0;i<l.length;i++)Co(l[i],r),r=_o(r,r.next);return r}(t,e,h,r)),t.length>80*r){n=a=t[0],i=o=t[1];for(var y=r;y<c;y+=r)(s=t[y])<n&&(n=s),(u=t[y+1])<i&&(i=u),s>a&&(a=s),u>o&&(o=u);l=0!==(l=Math.max(a-n,o-i))?1/l:0;}return wo(h,f,r,n,i,l),f}function bo(t,e,r,n,i){var a,o;if(i===Ko(t,e,r,n)>0)for(a=e;a<r;a+=n)o=jo(a,t[a],t[a+1],o);else for(a=r-n;a>=e;a-=n)o=jo(a,t[a],t[a+1],o);return o&&Fo(o,o.next)&&(qo(o),o=o.next),o}function _o(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!Fo(n,n.next)&&0!==Vo(n.prev,n,n.next))n=n.next;else{if(qo(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function wo(t,e,r,n,i,a,o){if(t){!o&&a&&function(t,e,r,n){var i=t;do{null===i.z&&(i.z=Po(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,a,o,s,u,l=1;do{for(r=t,t=null,a=null,o=0;r;){for(o++,n=r,s=0,e=0;e<l&&(s++,n=n.nextZ);e++);for(u=l;s>0||u>0&&n;)0!==s&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,u--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;r=n;}a.nextZ=null,l*=2;}while(o>1)}(i);}(t,n,i,a);for(var s,u,l=t;t.prev!==t.next;)if(s=t.prev,u=t.next,a?So(t,n,i,a):Ao(t))e.push(s.i/r),e.push(t.i/r),e.push(u.i/r),qo(t),t=u.next,l=u.next;else if((t=u)===l){o?1===o?wo(t=ko(_o(t),e,r),e,r,n,i,a,2):2===o&&Io(t,e,r,n,i,a):wo(_o(t),e,r,n,i,a,1);break}}}function Ao(t){var e=t.prev,r=t,n=t.next;if(Vo(e,r,n)>=0)return !1;for(var i=t.next.next;i!==t.prev;){if(Eo(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&Vo(i.prev,i,i.next)>=0)return !1;i=i.next;}return !0}function So(t,e,r,n){var i=t.prev,a=t,o=t.next;if(Vo(i,a,o)>=0)return !1;for(var s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,u=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,l=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,p=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,c=Po(s,u,e,r,n),h=Po(l,p,e,r,n),f=t.prevZ,y=t.nextZ;f&&f.z>=c&&y&&y.z<=h;){if(f!==t.prev&&f!==t.next&&Eo(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Vo(f.prev,f,f.next)>=0)return !1;if(f=f.prevZ,y!==t.prev&&y!==t.next&&Eo(i.x,i.y,a.x,a.y,o.x,o.y,y.x,y.y)&&Vo(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}for(;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&Eo(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Vo(f.prev,f,f.next)>=0)return !1;f=f.prevZ;}for(;y&&y.z<=h;){if(y!==t.prev&&y!==t.next&&Eo(i.x,i.y,a.x,a.y,o.x,o.y,y.x,y.y)&&Vo(y.prev,y,y.next)>=0)return !1;y=y.nextZ;}return !0}function ko(t,e,r){var n=t;do{var i=n.prev,a=n.next.next;!Fo(i,a)&&Lo(i,n,n.next,a)&&Ro(i,a)&&Ro(a,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(a.i/r),qo(n),qo(n.next),n=t=a),n=n.next;}while(n!==t);return _o(n)}function Io(t,e,r,n,i,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Mo(o,s)){var u=Uo(o,s);return o=_o(o,o.next),u=_o(u,u.next),wo(o,e,r,n,i,a),void wo(u,e,r,n,i,a)}s=s.next;}o=o.next;}while(o!==t)}function zo(t,e){return t.x-e.x}function Co(t,e){if(e=function(t,e){var r,n=e,i=t.x,a=t.y,o=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var s=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=i&&s>o){if(o=s,s===i){if(a===n.y)return n;if(a===n.next.y)return n.next}r=n.x<n.next.x?n:n.next;}}n=n.next;}while(n!==e);if(!r)return null;if(i===o)return r;var u,l=r,p=r.x,c=r.y,h=1/0;n=r;do{i>=n.x&&n.x>=p&&i!==n.x&&Eo(a<c?i:o,a,p,c,a<c?o:i,a,n.x,n.y)&&(u=Math.abs(a-n.y)/(i-n.x),Ro(n,t)&&(u<h||u===h&&(n.x>r.x||n.x===r.x&&Bo(r,n)))&&(r=n,h=u)),n=n.next;}while(n!==l);return r}(t,e)){var r=Uo(e,t);_o(r,r.next);}}function Bo(t,e){return Vo(t.prev,t,e.prev)<0&&Vo(e.next,t,t.next)<0}function Po(t,e,r,n,i){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function To(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;}while(e!==t);return r}function Eo(t,e,r,n,i,a,o,s){return (i-o)*(e-s)-(t-o)*(a-s)>=0&&(t-o)*(n-s)-(r-o)*(e-s)>=0&&(r-o)*(a-s)-(i-o)*(n-s)>=0}function Mo(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&Lo(r,r.next,t,e))return !0;r=r.next;}while(r!==t);return !1}(t,e)&&(Ro(t,e)&&Ro(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,a=(t.y+e.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)&&(Vo(t.prev,t,e.prev)||Vo(t,e.prev,e))||Fo(t,e)&&Vo(t.prev,t,t.next)>0&&Vo(e.prev,e,e.next)>0)}function Vo(t,e,r){return (e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function Fo(t,e){return t.x===e.x&&t.y===e.y}function Lo(t,e,r,n){var i=Do(Vo(t,e,r)),a=Do(Vo(t,e,n)),o=Do(Vo(r,n,t)),s=Do(Vo(r,n,e));return i!==a&&o!==s||(!(0!==i||!Oo(t,r,e))||(!(0!==a||!Oo(t,n,e))||(!(0!==o||!Oo(r,t,n))||!(0!==s||!Oo(r,e,n)))))}function Oo(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function Do(t){return t>0?1:t<0?-1:0}function Ro(t,e){return Vo(t.prev,t,t.next)<0?Vo(t,e,t.next)>=0&&Vo(t,t.prev,e)>=0:Vo(t,e,t.prev)<0||Vo(t,t.next,e)<0}function Uo(t,e){var r=new No(t.i,t.x,t.y),n=new No(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function jo(t,e,r,n){var i=new No(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function No(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function Ko(t,e,r,n){for(var i=0,a=e,o=r-n;a<r;a+=n)i+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return i}function Xo(t,e,r,n,i){!function t(e,r,n,i,a){for(;i>n;){if(i-n>600){var o=i-n+1,s=r-n+1,u=Math.log(o),l=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*l*(o-l)/o)*(s-o/2<0?-1:1),c=Math.max(n,Math.floor(r-s*l/o+p)),h=Math.min(i,Math.floor(r+(o-s)*l/o+p));t(e,r,c,h,a);}var f=e[r],y=n,d=i;for(Zo(e,n,r),a(e[i],f)>0&&Zo(e,n,i);y<d;){for(Zo(e,y,d),y++,d--;a(e[y],f)<0;)y++;for(;a(e[d],f)>0;)d--;}0===a(e[n],f)?Zo(e,n,d):(d++,Zo(e,d,i)),d<=r&&(n=d+1),r<=d&&(i=d-1);}}(t,e,r||0,n||t.length-1,i||Go);}function Zo(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function Go(t,e){return t<e?-1:t>e?1:0}function Jo(t,e){var r=t.length;if(r<=1)return [t];for(var n,i,a=[],o=0;o<r;o++){var s=A(t[o]);0!==s&&(t[o].area=Math.abs(s),void 0===i&&(i=s<0),i===s<0?(n&&a.push(n),n=[t[o]]):n.push(t[o]));}if(n&&a.push(n),e>1)for(var u=0;u<a.length;u++)a[u].length<=e||(Xo(a[u],e,1,a[u].length-1,Ho),a[u]=a[u].slice(0,e));return a}function Ho(t,e){return e.area-t.area}function Yo(t,e,r){for(var n=r.patternDependencies,i=!1,a=0,o=e;a<o.length;a+=1){var s=o[a].paint.get(t+"-pattern");s.isConstant()||(i=!0);var u=s.constantOr(null);u&&(i=!0,n[u.to]=!0,n[u.from]=!0);}return i}function $o(t,e,r,n,i){for(var a=i.patternDependencies,o=0,s=e;o<s.length;o+=1){var u=s[o],l=u.paint.get(t+"-pattern").value;if("constant"!==l.kind){var p=l.evaluate({zoom:n-1},r,{},i.availableImages),c=l.evaluate({zoom:n},r,{},i.availableImages),h=l.evaluate({zoom:n+1},r,{},i.availableImages);p=p&&p.name?p.name:p,c=c&&c.name?c.name:c,h=h&&h.name?h.name:h,a[p]=!0,a[c]=!0,a[h]=!0,r.patterns[u.id]={min:p,mid:c,max:h};}}return r}xo.deviation=function(t,e,r,n){var i=e&&e.length,a=i?e[0]*r:t.length,o=Math.abs(Ko(t,0,a,r));if(i)for(var s=0,u=e.length;s<u;s++){var l=e[s]*r,p=s<u-1?e[s+1]*r:t.length;o-=Math.abs(Ko(t,l,p,r));}var c=0;for(s=0;s<n.length;s+=3){var h=n[s]*r,f=n[s+1]*r,y=n[s+2]*r;c+=Math.abs((t[h]-t[y])*(t[f+1]-t[h+1])-(t[h]-t[f])*(t[y+1]-t[h+1]));}return 0===o&&0===c?0:Math.abs((c-o)/o)},xo.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var a=0;a<t[i].length;a++)for(var o=0;o<e;o++)r.vertices.push(t[i][a][o]);i>0&&(n+=t[i-1].length,r.holes.push(n));}return r},vo.default=go;var Wo=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new bi,this.indexArray=new Li,this.indexArray2=new Oi,this.programConfigurations=new za(mo,t.layers,t.zoom),this.segments=new ta,this.segments2=new ta,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};Wo.prototype.populate=function(t,e){this.hasPattern=Yo("fill",this.layers,e);for(var r=this.layers[0].layout.get("fill-sort-key"),n=[],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o.feature,u=o.id,l=o.index,p=o.sourceLayerIndex;if(this.layers[0]._featureFilter(new Qn(this.zoom),s)){var c=Ma(s),h=r?r.evaluate(s,{},e.availableImages):void 0,f={id:u,properties:s.properties,type:s.type,sourceLayerIndex:p,index:l,geometry:c,patterns:{},sortKey:h};n.push(f);}}r&&n.sort((function(t,e){return t.sortKey-e.sortKey}));for(var y=0,d=n;y<d.length;y+=1){var m=d[y],v=m,g=v.geometry,x=v.index,b=v.sourceLayerIndex;if(this.hasPattern){var _=$o("fill",this.layers,m,this.zoom,e);this.patternFeatures.push(_);}else this.addFeature(m,g,x,{});var w=t[x].feature;e.featureIndex.insert(w,g,x,b,this.index);}},Wo.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},Wo.prototype.addFeatures=function(t,e){for(var r=0,n=this.patternFeatures;r<n.length;r+=1){var i=n[r];this.addFeature(i,i.geometry,i.index,e);}},Wo.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Wo.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},Wo.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,mo),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0;},Wo.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());},Wo.prototype.addFeature=function(t,e,r,n){for(var i=0,a=Jo(e,500);i<a.length;i+=1){for(var o=a[i],s=0,u=0,l=o;u<l.length;u+=1){s+=l[u].length;}for(var p=this.segments.prepareSegment(s,this.layoutVertexArray,this.indexArray),c=p.vertexLength,h=[],f=[],y=0,d=o;y<d.length;y+=1){var m=d[y];if(0!==m.length){m!==o[0]&&f.push(h.length/2);var v=this.segments2.prepareSegment(m.length,this.layoutVertexArray,this.indexArray2),g=v.vertexLength;this.layoutVertexArray.emplaceBack(m[0].x,m[0].y),this.indexArray2.emplaceBack(g+m.length-1,g),h.push(m[0].x),h.push(m[0].y);for(var x=1;x<m.length;x++)this.layoutVertexArray.emplaceBack(m[x].x,m[x].y),this.indexArray2.emplaceBack(g+x-1,g+x),h.push(m[x].x),h.push(m[x].y);v.vertexLength+=m.length,v.primitiveLength+=m.length;}}for(var b=vo(h,f),_=0;_<b.length;_+=3)this.indexArray.emplaceBack(c+b[_],c+b[_+1],c+b[_+2]);p.vertexLength+=s,p.primitiveLength+=b.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n);},In("FillBucket",Wo,{omit:["layers","patternFeatures"]});var Qo=new fi({"fill-sort-key":new li(Tt.layout_fill["fill-sort-key"])}),ts={paint:new fi({"fill-antialias":new ui(Tt.paint_fill["fill-antialias"]),"fill-opacity":new li(Tt.paint_fill["fill-opacity"]),"fill-color":new li(Tt.paint_fill["fill-color"]),"fill-outline-color":new li(Tt.paint_fill["fill-outline-color"]),"fill-translate":new ui(Tt.paint_fill["fill-translate"]),"fill-translate-anchor":new ui(Tt.paint_fill["fill-translate-anchor"]),"fill-pattern":new pi(Tt.paint_fill["fill-pattern"])}),layout:Qo},es=function(t){function e(e){t.call(this,e,ts);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r);var n=this.paint._values["fill-outline-color"];"constant"===n.value.kind&&void 0===n.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);},e.prototype.createBucket=function(t){return new Wo(t)},e.prototype.queryRadius=function(){return Ja(this.paint.get("fill-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,i,a,o){return Da(Ha(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),a.angle,o),n)},e.prototype.isTileClipped=function(){return !0},e}(yi),rs=gi([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4).members,ns=is;function is(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(as,this,e);}function as(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){var r=t.readVarint()+t.pos;for(;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function os(t){for(var e,r,n=0,i=0,a=t.length,o=a-1;i<a;o=i++)e=t[i],n+=((r=t[o]).x-e.x)*(e.y+r.y);return n}is.types=["Unknown","Point","LineString","Polygon"],is.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,a=0,o=0,s=0,u=[];t.pos<r;){if(a<=0){var l=t.readVarint();n=7&l,a=l>>3;}if(a--,1===n||2===n)o+=t.readSVarint(),s+=t.readSVarint(),1===n&&(e&&u.push(e),e=[]),e.push(new i(o,s));else{if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&u.push(e),u},is.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,a=0,o=1/0,s=-1/0,u=1/0,l=-1/0;t.pos<e;){if(n<=0){var p=t.readVarint();r=7&p,n=p>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<o&&(o=i),i>s&&(s=i),(a+=t.readSVarint())<u&&(u=a),a>l&&(l=a);else if(7!==r)throw new Error("unknown command "+r)}return [o,u,s,l]},is.prototype.toGeoJSON=function(t,e,r){var n,i,a=this.extent*Math.pow(2,r),o=this.extent*t,s=this.extent*e,u=this.loadGeometry(),l=is.types[this.type];function p(t){for(var e=0;e<t.length;e++){var r=t[e],n=180-360*(r.y+s)/a;t[e]=[360*(r.x+o)/a-180,360/Math.PI*Math.atan(Math.exp(n*Math.PI/180))-90];}}switch(this.type){case 1:var c=[];for(n=0;n<u.length;n++)c[n]=u[n][0];p(u=c);break;case 2:for(n=0;n<u.length;n++)p(u[n]);break;case 3:for(u=function(t){var e=t.length;if(e<=1)return [t];for(var r,n,i=[],a=0;a<e;a++){var o=os(t[a]);0!==o&&(void 0===n&&(n=o<0),n===o<0?(r&&i.push(r),r=[t[a]]):r.push(t[a]));}r&&i.push(r);return i}(u),n=0;n<u.length;n++)for(i=0;i<u[n].length;i++)p(u[n][i]);}1===u.length?u=u[0]:l="Multi"+l;var h={type:"Feature",geometry:{type:l,coordinates:u},properties:this.properties};return "id"in this&&(h.id=this.id),h};var ss=us;function us(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(ls,this,e),this.length=this._features.length;}function ls(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){var e=null,r=t.readVarint()+t.pos;for(;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}function ps(t,e,r){if(3===t){var n=new ss(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}us.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new ns(this._pbf,e,this.extent,this._keys,this._values)};var cs={VectorTile:function(t,e){this.layers=t.readFields(ps,{},e);},VectorTileFeature:ns,VectorTileLayer:ss},hs=cs.VectorTileFeature.types,fs=Math.pow(2,13);function ys(t,e,r,n,i,a,o,s){t.emplaceBack(e,r,2*Math.floor(n*fs)+o,i*fs*2,a*fs*2,Math.round(s));}var ds=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new wi,this.indexArray=new Li,this.programConfigurations=new za(rs,t.layers,t.zoom),this.segments=new ta,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};function ms(t,e){return t.x===e.x&&(t.x<0||t.x>Pa)||t.y===e.y&&(t.y<0||t.y>Pa)}function vs(t){return t.every((function(t){return t.x<0}))||t.every((function(t){return t.x>Pa}))||t.every((function(t){return t.y<0}))||t.every((function(t){return t.y>Pa}))}ds.prototype.populate=function(t,e){this.features=[],this.hasPattern=Yo("fill-extrusion",this.layers,e);for(var r=0,n=t;r<n.length;r+=1){var i=n[r],a=i.feature,o=i.id,s=i.index,u=i.sourceLayerIndex;if(this.layers[0]._featureFilter(new Qn(this.zoom),a)){var l=Ma(a),p={id:o,sourceLayerIndex:u,index:s,geometry:l,properties:a.properties,type:a.type,patterns:{}};void 0!==a.id&&(p.id=a.id),this.hasPattern?this.features.push($o("fill-extrusion",this.layers,p,this.zoom,e)):this.addFeature(p,l,s,{}),e.featureIndex.insert(a,l,s,u,this.index,!0);}}},ds.prototype.addFeatures=function(t,e){for(var r=0,n=this.features;r<n.length;r+=1){var i=n[r],a=i.geometry;this.addFeature(i,a,i.index,e);}},ds.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},ds.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},ds.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},ds.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,rs),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},ds.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},ds.prototype.addFeature=function(t,e,r,n){for(var i=0,a=Jo(e,500);i<a.length;i+=1){for(var o=a[i],s=0,u=0,l=o;u<l.length;u+=1){s+=l[u].length;}for(var p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray),c=0,h=o;c<h.length;c+=1){var f=h[c];if(0!==f.length&&!vs(f))for(var y=0,d=0;d<f.length;d++){var m=f[d];if(d>=1){var v=f[d-1];if(!ms(m,v)){p.vertexLength+4>ta.MAX_VERTEX_ARRAY_LENGTH&&(p=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray));var g=m.sub(v)._perp()._unit(),x=v.dist(m);y+x>32768&&(y=0),ys(this.layoutVertexArray,m.x,m.y,g.x,g.y,0,0,y),ys(this.layoutVertexArray,m.x,m.y,g.x,g.y,0,1,y),y+=x,ys(this.layoutVertexArray,v.x,v.y,g.x,g.y,0,0,y),ys(this.layoutVertexArray,v.x,v.y,g.x,g.y,0,1,y);var b=p.vertexLength;this.indexArray.emplaceBack(b,b+2,b+1),this.indexArray.emplaceBack(b+1,b+2,b+3),p.vertexLength+=4,p.primitiveLength+=2;}}}}if(p.vertexLength+s>ta.MAX_VERTEX_ARRAY_LENGTH&&(p=this.segments.prepareSegment(s,this.layoutVertexArray,this.indexArray)),"Polygon"===hs[t.type]){for(var _=[],w=[],A=p.vertexLength,S=0,k=o;S<k.length;S+=1){var I=k[S];if(0!==I.length){I!==o[0]&&w.push(_.length/2);for(var z=0;z<I.length;z++){var C=I[z];ys(this.layoutVertexArray,C.x,C.y,0,0,1,1,0),_.push(C.x),_.push(C.y);}}}for(var B=vo(_,w),P=0;P<B.length;P+=3)this.indexArray.emplaceBack(A+B[P],A+B[P+2],A+B[P+1]);p.primitiveLength+=B.length/3,p.vertexLength+=s;}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,n);},In("FillExtrusionBucket",ds,{omit:["layers","features"]});var gs={paint:new fi({"fill-extrusion-opacity":new ui(Tt["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new li(Tt["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new ui(Tt["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new ui(Tt["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new pi(Tt["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new li(Tt["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new li(Tt["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new ui(Tt["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})},xs=function(t){function e(e){t.call(this,e,gs);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new ds(t)},e.prototype.queryRadius=function(){return Ja(this.paint.get("fill-extrusion-translate"))},e.prototype.is3D=function(){return !0},e.prototype.queryIntersectsFeature=function(t,e,r,n,a,o,s,u){var l=Ha(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),o.angle,s),p=this.paint.get("fill-extrusion-height").evaluate(e,r),c=this.paint.get("fill-extrusion-base").evaluate(e,r),h=function(t,e,r,n){for(var a=[],o=0,s=t;o<s.length;o+=1){var u=s[o],l=[u.x,u.y,n,1];eo(l,l,e),a.push(new i(l[0]/l[3],l[1]/l[3]));}return a}(l,u,0,0),f=function(t,e,r,n){for(var a=[],o=[],s=n[8]*e,u=n[9]*e,l=n[10]*e,p=n[11]*e,c=n[8]*r,h=n[9]*r,f=n[10]*r,y=n[11]*r,d=0,m=t;d<m.length;d+=1){for(var v=m[d],g=[],x=[],b=0,_=v;b<_.length;b+=1){var w=_[b],A=w.x,S=w.y,k=n[0]*A+n[4]*S+n[12],I=n[1]*A+n[5]*S+n[13],z=n[2]*A+n[6]*S+n[14],C=n[3]*A+n[7]*S+n[15],B=z+l,P=C+p,T=k+c,E=I+h,M=z+f,V=C+y,F=new i((k+s)/P,(I+u)/P);F.z=B/P,g.push(F);var L=new i(T/V,E/V);L.z=M/V,x.push(L);}a.push(g),o.push(x);}return [a,o]}(n,c,p,u);return function(t,e,r){var n=1/0;Da(r,e)&&(n=_s(r,e[0]));for(var i=0;i<e.length;i++)for(var a=e[i],o=t[i],s=0;s<a.length-1;s++){var u=a[s],l=a[s+1],p=o[s],c=o[s+1],h=[u,l,c,p,u];La(r,h)&&(n=Math.min(n,_s(r,h)));}return n!==1/0&&n}(f[0],f[1],h)},e}(yi);function bs(t,e){return t.x*e.x+t.y*e.y}function _s(t,e){if(1===t.length){var r=e[0],n=e[1],i=e[3],a=t[0],o=n.sub(r),s=i.sub(r),u=a.sub(r),l=bs(o,o),p=bs(o,s),c=bs(s,s),h=bs(u,o),f=bs(u,s),y=l*c-p*p,d=(c*h-p*f)/y,m=(l*f-p*h)/y,v=1-d-m;return r.z*v+n.z*d+i.z*m}for(var g=1/0,x=0,b=e;x<b.length;x+=1){var _=b[x];g=Math.min(g,_.z);}return g}var ws=gi([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4).members,As=cs.VectorTileFeature.types,Ss=Math.cos(Math.PI/180*37.5),ks=Math.pow(2,14)/.5,Is=function(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new Ai,this.indexArray=new Li,this.programConfigurations=new za(ws,t.layers,t.zoom),this.segments=new ta,this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id}));};Is.prototype.populate=function(t,e){this.hasPattern=Yo("line",this.layers,e);for(var r=this.layers[0].layout.get("line-sort-key"),n=[],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o.feature,u=o.index,l=o.sourceLayerIndex;if(this.layers[0]._featureFilter(new Qn(this.zoom),s)){var p=Ma(s),c=r?r.evaluate(s,{}):void 0,h={id:s.id,properties:s.properties,type:s.type,sourceLayerIndex:l,index:u,geometry:p,patterns:{},sortKey:c};n.push(h);}}r&&n.sort((function(t,e){return t.sortKey-e.sortKey}));for(var f=0,y=n;f<y.length;f+=1){var d=y[f],m=d,v=m.geometry,g=m.index,x=m.sourceLayerIndex;if(this.hasPattern){var b=$o("line",this.layers,d,this.zoom,e);this.patternFeatures.push(b);}else this.addFeature(d,v,g,{});var _=t[g].feature;e.featureIndex.insert(_,v,g,x,this.index);}},Is.prototype.update=function(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);},Is.prototype.addFeatures=function(t,e){for(var r=0,n=this.patternFeatures;r<n.length;r+=1){var i=n[r];this.addFeature(i,i.geometry,i.index,e);}},Is.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},Is.prototype.uploadPending=function(){return !this.uploaded||this.programConfigurations.needsUpload},Is.prototype.upload=function(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,ws),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;},Is.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());},Is.prototype.addFeature=function(t,e,r,n){for(var i=this.layers[0].layout,a=i.get("line-join").evaluate(t,{}),o=i.get("line-cap"),s=i.get("line-miter-limit"),u=i.get("line-round-limit"),l=0,p=e;l<p.length;l+=1){var c=p[l];this.addLine(c,t,a,o,s,u,r,n);}},Is.prototype.addLine=function(t,e,r,n,i,a,o,s){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,e.properties&&e.properties.hasOwnProperty("mapbox_clip_start")&&e.properties.hasOwnProperty("mapbox_clip_end")){this.clipStart=+e.properties.mapbox_clip_start,this.clipEnd=+e.properties.mapbox_clip_end;for(var u=0;u<t.length-1;u++)this.totalDistance+=t[u].dist(t[u+1]);}for(var l="Polygon"===As[e.type],p=t.length;p>=2&&t[p-1].equals(t[p-2]);)p--;for(var c=0;c<p-1&&t[c].equals(t[c+1]);)c++;if(!(p<(l?3:2))){"bevel"===r&&(i=1.05);var h,f=this.overscaling<=16?15*Pa/(512*this.overscaling):0,y=this.segments.prepareSegment(10*p,this.layoutVertexArray,this.indexArray),d=void 0,m=void 0,v=void 0,g=void 0;this.e1=this.e2=-1,l&&(h=t[p-2],g=t[c].sub(h)._unit()._perp());for(var x=c;x<p;x++)if(!(m=l&&x===p-1?t[c+1]:t[x+1])||!t[x].equals(m)){g&&(v=g),h&&(d=h),h=t[x],g=m?m.sub(h)._unit()._perp():v;var b=(v=v||g).add(g);0===b.x&&0===b.y||b._unit();var _=v.x*g.x+v.y*g.y,w=b.x*g.x+b.y*g.y,A=0!==w?1/w:1/0,S=2*Math.sqrt(2-2*w),k=w<Ss&&d&&m,I=v.x*g.y-v.y*g.x>0;if(k&&x>c){var z=h.dist(d);if(z>2*f){var C=h.sub(h.sub(d)._mult(f/z)._round());this.updateDistance(d,C),this.addCurrentVertex(C,v,0,0,y),d=C;}}var B=d&&m,P=B?r:l?"butt":n;if(B&&"round"===P&&(A<a?P="miter":A<=2&&(P="fakeround")),"miter"===P&&A>i&&(P="bevel"),"bevel"===P&&(A>2&&(P="flipbevel"),A<i&&(P="miter")),d&&this.updateDistance(d,h),"miter"===P)b._mult(A),this.addCurrentVertex(h,b,0,0,y);else if("flipbevel"===P){if(A>100)b=g.mult(-1);else{var T=A*v.add(g).mag()/v.sub(g).mag();b._perp()._mult(T*(I?-1:1));}this.addCurrentVertex(h,b,0,0,y),this.addCurrentVertex(h,b.mult(-1),0,0,y);}else if("bevel"===P||"fakeround"===P){var E=-Math.sqrt(A*A-1),M=I?E:0,V=I?0:E;if(d&&this.addCurrentVertex(h,v,M,V,y),"fakeround"===P)for(var F=Math.round(180*S/Math.PI/20),L=1;L<F;L++){var O=L/F;if(.5!==O){var D=O-.5;O+=O*D*(O-1)*((1.0904+_*(_*(3.55645-1.43519*_)-3.2452))*D*D+(.848013+_*(.215638*_-1.06021)));}var R=g.sub(v)._mult(O)._add(v)._unit()._mult(I?-1:1);this.addHalfVertex(h,R.x,R.y,!1,I,0,y);}m&&this.addCurrentVertex(h,g,-M,-V,y);}else if("butt"===P)this.addCurrentVertex(h,b,0,0,y);else if("square"===P){var U=d?1:-1;this.addCurrentVertex(h,b,U,U,y);}else"round"===P&&(d&&(this.addCurrentVertex(h,v,0,0,y),this.addCurrentVertex(h,v,1,1,y,!0)),m&&(this.addCurrentVertex(h,g,-1,-1,y,!0),this.addCurrentVertex(h,g,0,0,y)));if(k&&x<p-1){var j=h.dist(m);if(j>2*f){var q=h.add(m.sub(h)._mult(f/j)._round());this.updateDistance(h,q),this.addCurrentVertex(q,g,0,0,y),h=q;}}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,e,o,s);}},Is.prototype.addCurrentVertex=function(t,e,r,n,i,a){void 0===a&&(a=!1);var o=e.x+e.y*r,s=e.y-e.x*r,u=-e.x+e.y*n,l=-e.y-e.x*n;this.addHalfVertex(t,o,s,a,!1,r,i),this.addHalfVertex(t,u,l,a,!0,-n,i),this.distance>ks/2&&0===this.totalDistance&&(this.distance=0,this.addCurrentVertex(t,e,r,n,i,a));},Is.prototype.addHalfVertex=function(t,e,r,n,i,a,o){var s=t.x,u=t.y,l=.5*this.scaledDistance;this.layoutVertexArray.emplaceBack((s<<1)+(n?1:0),(u<<1)+(i?1:0),Math.round(63*e)+128,Math.round(63*r)+128,1+(0===a?0:a<0?-1:1)|(63&l)<<2,l>>6);var p=o.vertexLength++;this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,p),o.primitiveLength++),i?this.e2=p:this.e1=p;},Is.prototype.updateDistance=function(t,e){this.distance+=t.dist(e),this.scaledDistance=this.totalDistance>0?(this.clipStart+(this.clipEnd-this.clipStart)*this.distance/this.totalDistance)*(ks-1):this.distance;},In("LineBucket",Is,{omit:["layers","patternFeatures"]});var zs=new fi({"line-cap":new ui(Tt.layout_line["line-cap"]),"line-join":new li(Tt.layout_line["line-join"]),"line-miter-limit":new ui(Tt.layout_line["line-miter-limit"]),"line-round-limit":new ui(Tt.layout_line["line-round-limit"]),"line-sort-key":new li(Tt.layout_line["line-sort-key"])}),Cs={paint:new fi({"line-opacity":new li(Tt.paint_line["line-opacity"]),"line-color":new li(Tt.paint_line["line-color"]),"line-translate":new ui(Tt.paint_line["line-translate"]),"line-translate-anchor":new ui(Tt.paint_line["line-translate-anchor"]),"line-width":new li(Tt.paint_line["line-width"]),"line-gap-width":new li(Tt.paint_line["line-gap-width"]),"line-offset":new li(Tt.paint_line["line-offset"]),"line-blur":new li(Tt.paint_line["line-blur"]),"line-dasharray":new ci(Tt.paint_line["line-dasharray"]),"line-pattern":new pi(Tt.paint_line["line-pattern"]),"line-gradient":new hi(Tt.paint_line["line-gradient"])}),layout:zs},Bs=new(function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(e,r){return r=new Qn(Math.floor(r.zoom),{now:r.now,fadeDuration:r.fadeDuration,zoomHistory:r.zoomHistory,transition:r.transition}),t.prototype.possiblyEvaluate.call(this,e,r)},e.prototype.evaluate=function(e,r,n,i){return r=p({},r,{zoom:Math.floor(r.zoom)}),t.prototype.evaluate.call(this,e,r,n,i)},e}(li))(Cs.paint.properties["line-width"].specification);Bs.useIntegerZoom=!0;var Ps=function(t){function e(e){t.call(this,e,Cs);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._handleSpecialPaintPropertyUpdate=function(t){"line-gradient"===t&&this._updateGradient();},e.prototype._updateGradient=function(){var t=this._transitionablePaint._values["line-gradient"].value.expression;this.gradient=co(t,"lineProgress"),this.gradientTexture=null;},e.prototype.recalculate=function(e,r){t.prototype.recalculate.call(this,e,r),this.paint._values["line-floorwidth"]=Bs.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,e);},e.prototype.createBucket=function(t){return new Is(t)},e.prototype.queryRadius=function(t){var e=t,r=Ts(Ga("line-width",this,e),Ga("line-gap-width",this,e)),n=Ga("line-offset",this,e);return r/2+Math.abs(n)+Ja(this.paint.get("line-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,n,a,o,s){var u=Ha(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),o.angle,s),l=s/2*Ts(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),p=this.paint.get("line-offset").evaluate(e,r);return p&&(n=function(t,e){for(var r=[],n=new i(0,0),a=0;a<t.length;a++){for(var o=t[a],s=[],u=0;u<o.length;u++){var l=o[u-1],p=o[u],c=o[u+1],h=0===u?n:p.sub(l)._unit()._perp(),f=u===o.length-1?n:c.sub(p)._unit()._perp(),y=h._add(f)._unit(),d=y.x*f.x+y.y*f.y;y._mult(1/d),s.push(y._mult(e)._add(p));}r.push(s);}return r}(n,p*s)),function(t,e,r){for(var n=0;n<e.length;n++){var i=e[n];if(t.length>=3)for(var a=0;a<i.length;a++)if(Xa(t,i[a]))return !0;if(Ra(t,i,r))return !0}return !1}(u,n,l)},e.prototype.isTileClipped=function(){return !0},e}(yi);function Ts(t,e){return e>0?e+2*t:t}var Es=gi([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),Ms=gi([{name:"a_projected_pos",components:3,type:"Float32"}],4),Vs=(gi([{name:"a_fade_opacity",components:1,type:"Uint32"}],4),gi([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}])),Fs=(gi([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"},{type:"Int16",name:"radius"},{type:"Int16",name:"signedDistanceFromAnchor"}]),gi([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4)),Ls=gi([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4);gi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),gi([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",components:2,name:"textOffset"}]),gi([{type:"Float32",name:"offsetX"}]),gi([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}]);function Os(t,e,r){return t.sections.forEach((function(t){t.text=function(t,e,r){var n=e.layout.get("text-transform").evaluate(r,{});return "uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),Wn.applyArabicShaping&&(t=Wn.applyArabicShaping(t)),t}(t.text,e,r);})),t}var Ds={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};var Rs=24,Us=function(t,e,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,l=u>>1,p=-7,c=r?i-1:0,h=r?-1:1,f=t[e+c];for(c+=h,a=f&(1<<-p)-1,f>>=-p,p+=s;p>0;a=256*a+t[e+c],c+=h,p-=8);for(o=a&(1<<-p)-1,a>>=-p,p+=n;p>0;o=256*o+t[e+c],c+=h,p-=8);if(0===a)a=1-l;else{if(a===u)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),a-=l;}return (f?-1:1)*o*Math.pow(2,a-n)},js=function(t,e,r,n,i,a){var o,s,u,l=8*a-i-1,p=(1<<l)-1,c=p>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:a-1,y=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,o=p):(o=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),(e+=o+c>=1?h/u:h*Math.pow(2,1-c))*u>=2&&(o++,u/=2),o+c>=p?(s=0,o=p):o+c>=1?(s=(e*u-1)*Math.pow(2,i),o+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;t[r+f]=255&s,f+=y,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;t[r+f]=255&o,f+=y,o/=256,l-=8);t[r+f-y]|=128*d;},qs=Ns;function Ns(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}Ns.Varint=0,Ns.Fixed64=1,Ns.Bytes=2,Ns.Fixed32=5;var Ks="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function Xs(t){return t.type===Ns.Bytes?t.readVarint()+t.pos:t.pos+1}function Zs(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function Gs(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function Js(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function Hs(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function Ys(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function $s(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function Ws(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function Qs(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function tu(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function eu(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function ru(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function nu(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function iu(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function au(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}Ns.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,a=this.pos;this.type=7&n,t(i,e,this),this.pos===a&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=nu(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=au(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=nu(this.buf,this.pos)+4294967296*nu(this.buf,this.pos+4);return this.pos+=8,t},readSFixed64:function(){var t=nu(this.buf,this.pos)+4294967296*au(this.buf,this.pos+4);return this.pos+=8,t},readFloat:function(){var t=Us(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=Us(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,a=r.buf;if(i=a[r.pos++],n=(112&i)>>4,i<128)return Zs(t,n,e);if(i=a[r.pos++],n|=(127&i)<<3,i<128)return Zs(t,n,e);if(i=a[r.pos++],n|=(127&i)<<10,i<128)return Zs(t,n,e);if(i=a[r.pos++],n|=(127&i)<<17,i<128)return Zs(t,n,e);if(i=a[r.pos++],n|=(127&i)<<24,i<128)return Zs(t,n,e);if(i=a[r.pos++],n|=(1&i)<<31,i<128)return Zs(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&Ks?function(t,e,r){return Ks.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){var n="",i=e;for(;i<r;){var a,o,s,u=t[i],l=null,p=u>239?4:u>223?3:u>191?2:1;if(i+p>r)break;1===p?u<128&&(l=u):2===p?128==(192&(a=t[i+1]))&&(l=(31&u)<<6|63&a)<=127&&(l=null):3===p?(a=t[i+1],o=t[i+2],128==(192&a)&&128==(192&o)&&((l=(15&u)<<12|(63&a)<<6|63&o)<=2047||l>=55296&&l<=57343)&&(l=null)):4===p&&(a=t[i+1],o=t[i+2],s=t[i+3],128==(192&a)&&128==(192&o)&&128==(192&s)&&((l=(15&u)<<18|(63&a)<<12|(63&o)<<6|63&s)<=65535||l>=1114112)&&(l=null)),null===l?(l=65533,p=1):l>65535&&(l-=65536,n+=String.fromCharCode(l>>>10&1023|55296),l=56320|1023&l),n+=String.fromCharCode(l),i+=p;}return n}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Ns.Bytes)return t.push(this.readVarint(e));var r=Xs(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==Ns.Bytes)return t.push(this.readSVarint());var e=Xs(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==Ns.Bytes)return t.push(this.readBoolean());var e=Xs(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==Ns.Bytes)return t.push(this.readFloat());var e=Xs(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==Ns.Bytes)return t.push(this.readDouble());var e=Xs(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==Ns.Bytes)return t.push(this.readFixed32());var e=Xs(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==Ns.Bytes)return t.push(this.readSFixed32());var e=Xs(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==Ns.Bytes)return t.push(this.readFixed64());var e=Xs(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==Ns.Bytes)return t.push(this.readSFixed64());var e=Xs(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===Ns.Varint)for(;this.buf[this.pos++]>127;);else if(e===Ns.Bytes)this.pos=this.readVarint()+this.pos;else if(e===Ns.Fixed32)this.pos+=4;else{if(e!==Ns.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),iu(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),iu(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),iu(this.buf,-1&t,this.pos),iu(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),iu(this.buf,-1&t,this.pos),iu(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos]=127&t;}(r,0,e),function(t,e){var r=(7&t)<<4;if(e.buf[e.pos++]|=r|((t>>>=3)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),!t)return;e.buf[e.pos++]=127&t;}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,a=0;a<e.length;a++){if((n=e.charCodeAt(a))>55295&&n<57344){if(!i){n>56319||a+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&Gs(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),js(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),js(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&Gs(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,Ns.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,Js,e);},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,Hs,e);},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,Ws,e);},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,Ys,e);},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,$s,e);},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,Qs,e);},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,tu,e);},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,eu,e);},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,ru,e);},writeBytesField:function(t,e){this.writeTag(t,Ns.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,Ns.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,Ns.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,Ns.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,Ns.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,Ns.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,Ns.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,Ns.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,Ns.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,Ns.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};var ou=3;function su(t,e,r){1===t&&r.readMessage(uu,e);}function uu(t,e,r){if(3===t){var n=r.readMessage(lu,{}),i=n.id,a=n.bitmap,o=n.width,s=n.height,u=n.left,l=n.top,p=n.advance;e.push({id:i,bitmap:new uo({width:o+2*ou,height:s+2*ou},a),metrics:{width:o,height:s,left:u,top:l,advance:p}});}}function lu(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}var pu=ou;function cu(t){for(var e=0,r=0,n=0,i=t;n<i.length;n+=1){var a=i[n];e+=a.w*a.h,r=Math.max(r,a.w);}t.sort((function(t,e){return e.h-t.h}));for(var o=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}],s=0,u=0,l=0,p=t;l<p.length;l+=1)for(var c=p[l],h=o.length-1;h>=0;h--){var f=o[h];if(!(c.w>f.w||c.h>f.h)){if(c.x=f.x,c.y=f.y,u=Math.max(u,c.y+c.h),s=Math.max(s,c.x+c.w),c.w===f.w&&c.h===f.h){var y=o.pop();h<o.length&&(o[h]=y);}else c.h===f.h?(f.x+=c.w,f.w-=c.w):c.w===f.w?(f.y+=c.h,f.h-=c.h):(o.push({x:f.x+c.w,y:f.y,w:f.w-c.w,h:c.h}),f.y+=c.h,f.h-=c.h);break}}return {w:s,h:u,fill:e/(s*u)||0}}var hu=1,fu=function(t,e){var r=e.pixelRatio,n=e.version,i=e.stretchX,a=e.stretchY,o=e.content;this.paddedRect=t,this.pixelRatio=r,this.stretchX=i,this.stretchY=a,this.content=o,this.version=n;},yu={tl:{configurable:!0},br:{configurable:!0},tlbr:{configurable:!0},displaySize:{configurable:!0}};yu.tl.get=function(){return [this.paddedRect.x+hu,this.paddedRect.y+hu]},yu.br.get=function(){return [this.paddedRect.x+this.paddedRect.w-hu,this.paddedRect.y+this.paddedRect.h-hu]},yu.tlbr.get=function(){return this.tl.concat(this.br)},yu.displaySize.get=function(){return [(this.paddedRect.w-2*hu)/this.pixelRatio,(this.paddedRect.h-2*hu)/this.pixelRatio]},Object.defineProperties(fu.prototype,yu);var du=function(t,e){var r={},n={};this.haveRenderCallbacks=[];var i=[];this.addImages(t,r,i),this.addImages(e,n,i);var a=cu(i),o=a.w,s=a.h,u=new lo({width:o||1,height:s||1});for(var l in t){var p=t[l],c=r[l].paddedRect;lo.copy(p.data,u,{x:0,y:0},{x:c.x+hu,y:c.y+hu},p.data);}for(var h in e){var f=e[h],y=n[h].paddedRect,d=y.x+hu,m=y.y+hu,v=f.data.width,g=f.data.height;lo.copy(f.data,u,{x:0,y:0},{x:d,y:m},f.data),lo.copy(f.data,u,{x:0,y:g-1},{x:d,y:m-1},{width:v,height:1}),lo.copy(f.data,u,{x:0,y:0},{x:d,y:m+g},{width:v,height:1}),lo.copy(f.data,u,{x:v-1,y:0},{x:d-1,y:m},{width:1,height:g}),lo.copy(f.data,u,{x:0,y:0},{x:d+v,y:m},{width:1,height:g});}this.image=u,this.iconPositions=r,this.patternPositions=n;};du.prototype.addImages=function(t,e,r){for(var n in t){var i=t[n],a={x:0,y:0,w:i.data.width+2*hu,h:i.data.height+2*hu};r.push(a),e[n]=new fu(a,i),i.hasRenderCallback&&this.haveRenderCallbacks.push(n);}},du.prototype.patchUpdatedImages=function(t,e){for(var r in t.dispatchRenderCallbacks(this.haveRenderCallbacks),t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e);},du.prototype.patchUpdatedImage=function(t,e,r){if(t&&e&&t.version!==e.version){t.version=e.version;var n=t.tl,i=n[0],a=n[1];r.update(e.data,void 0,{x:i,y:a});}},In("ImagePosition",fu),In("ImageAtlas",du);var mu={horizontal:1,vertical:2,horizontalOnly:3},vu=-17;var gu=function(){this.scale=1,this.fontStack="",this.imageName=null;};gu.forText=function(t,e){var r=new gu;return r.scale=t||1,r.fontStack=e,r},gu.forImage=function(t){var e=new gu;return e.imageName=t,e};var xu=function(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null;};function bu(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d){var m,v=xu.fromFeature(t,i);c===mu.vertical&&v.verticalizePunctuation();var g=Wn.processBidirectionalText,x=Wn.processStyledBidirectionalText;if(g&&1===v.sections.length){m=[];for(var b=0,_=g(v.toString(),zu(v,l,a,e,n,f,y));b<_.length;b+=1){var w=_[b],A=new xu;A.text=w,A.sections=v.sections;for(var S=0;S<w.length;S++)A.sectionIndex.push(0);m.push(A);}}else if(x){m=[];for(var k=0,I=x(v.text,v.sectionIndex,zu(v,l,a,e,n,f,y));k<I.length;k+=1){var z=I[k],C=new xu;C.text=z[0],C.sectionIndex=z[1],C.sections=v.sections,m.push(C);}}else m=function(t,e){for(var r=[],n=t.text,i=0,a=0,o=e;a<o.length;a+=1){var s=o[a];r.push(t.substring(i,s)),i=s;}return i<n.length&&r.push(t.substring(i,n.length)),r}(v,zu(v,l,a,e,n,f,y));var B=[],P={positionedLines:B,text:v.toString(),top:p[1],bottom:p[1],left:p[0],right:p[0],writingMode:c,iconsInText:!1,verticalizable:!1};return function(t,e,r,n,i,a,o,s,u,l,p,c){for(var h=0,f=vu,y=0,d=0,m="right"===s?1:"left"===s?0:.5,v=0,g=0,x=i;g<x.length;g+=1){var b=x[g];b.trim();var _=b.getMaxScale(),w=(_-1)*Rs,A={positionedGlyphs:[],lineOffset:0};t.positionedLines[v]=A;var S=A.positionedGlyphs,k=0;if(b.length()){for(var I=0;I<b.length();I++){var z=b.getSection(I),C=b.getSectionIndex(I),B=b.getCharCode(I),P=0,T=null,E=null,M=null,V=Rs,F=!(u===mu.horizontal||!p&&!Ln(B)||p&&(_u[B]||(Z=B,Mn.Arabic(Z)||Mn["Arabic Supplement"](Z)||Mn["Arabic Extended-A"](Z)||Mn["Arabic Presentation Forms-A"](Z)||Mn["Arabic Presentation Forms-B"](Z))));if(z.imageName){var L=n[z.imageName];if(!L)continue;M=z.imageName,t.iconsInText=t.iconsInText||!0,E=L.paddedRect;var O=L.displaySize;z.scale=z.scale*Rs/c,T={width:O[0],height:O[1],left:hu,top:-pu,advance:F?O[1]:O[0]};var D=Rs-O[1]*z.scale;P=w+D,V=T.advance;var R=F?O[0]*z.scale-Rs*_:O[1]*z.scale-Rs*_;R>0&&R>k&&(k=R);}else{var U=r[z.fontStack],j=U&&U[B];if(j&&j.rect)E=j.rect,T=j.metrics;else{var q=e[z.fontStack],N=q&&q[B];if(!N)continue;T=N.metrics;}P=(_-z.scale)*Rs;}F?(t.verticalizable=!0,S.push({glyph:B,imageName:M,x:h,y:f+P,vertical:F,scale:z.scale,fontStack:z.fontStack,sectionIndex:C,metrics:T,rect:E}),h+=V*z.scale+l):(S.push({glyph:B,imageName:M,x:h,y:f+P,vertical:F,scale:z.scale,fontStack:z.fontStack,sectionIndex:C,metrics:T,rect:E}),h+=T.advance*z.scale+l);}if(0!==S.length){var K=h-l;y=Math.max(K,y),Bu(S,0,S.length-1,m,k);}h=0;var X=a*_+k;A.lineOffset=Math.max(k,w),f+=X,d=Math.max(X,d),++v;}else f+=a,++v;}var Z;var G=f-vu,J=Cu(o),H=J.horizontalAlign,Y=J.verticalAlign;(function(t,e,r,n,i,a,o,s,u){var l=(e-r)*i,p=0;p=a!==o?-s*n-vu:(-n*u+.5)*o;for(var c=0,h=t;c<h.length;c+=1)for(var f=h[c],y=0,d=f.positionedGlyphs;y<d.length;y+=1){var m=d[y];m.x+=l,m.y+=p;}})(t.positionedLines,m,H,Y,y,d,a,G,i.length),t.top+=-Y*G,t.bottom=t.top+G,t.left+=-H*y,t.right=t.left+y;}(P,e,r,n,m,o,s,u,c,l,h,d),!function(t){for(var e=0,r=t;e<r.length;e+=1){if(0!==r[e].positionedGlyphs.length)return !1}return !0}(B)&&P}xu.fromFeature=function(t,e){for(var r=new xu,n=0;n<t.sections.length;n++){var i=t.sections[n];i.image?r.addImageSection(i):r.addTextSection(i,e);}return r},xu.prototype.length=function(){return this.text.length},xu.prototype.getSection=function(t){return this.sections[this.sectionIndex[t]]},xu.prototype.getSectionIndex=function(t){return this.sectionIndex[t]},xu.prototype.getCharCode=function(t){return this.text.charCodeAt(t)},xu.prototype.verticalizePunctuation=function(){this.text=function(t){for(var e="",r=0;r<t.length;r++){var n=t.charCodeAt(r+1)||null,i=t.charCodeAt(r-1)||null;(!n||!On(n)||Ds[t[r+1]])&&(!i||!On(i)||Ds[t[r-1]])&&Ds[t[r]]?e+=Ds[t[r]]:e+=t[r];}return e}(this.text);},xu.prototype.trim=function(){for(var t=0,e=0;e<this.text.length&&_u[this.text.charCodeAt(e)];e++)t++;for(var r=this.text.length,n=this.text.length-1;n>=0&&n>=t&&_u[this.text.charCodeAt(n)];n--)r--;this.text=this.text.substring(t,r),this.sectionIndex=this.sectionIndex.slice(t,r);},xu.prototype.substring=function(t,e){var r=new xu;return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r},xu.prototype.toString=function(){return this.text},xu.prototype.getMaxScale=function(){var t=this;return this.sectionIndex.reduce((function(e,r){return Math.max(e,t.sections[r].scale)}),0)},xu.prototype.addTextSection=function(t,e){this.text+=t.text,this.sections.push(gu.forText(t.scale,t.fontStack||e));for(var r=this.sections.length-1,n=0;n<t.text.length;++n)this.sectionIndex.push(r);},xu.prototype.addImageSection=function(t){var e=t.image?t.image.name:"";if(0!==e.length){var r=this.getNextImageSectionCharCode();r?(this.text+=String.fromCharCode(r),this.sections.push(gu.forImage(e)),this.sectionIndex.push(this.sections.length-1)):_("Reached maximum number of images 6401");}else _("Can't add FormattedSection with an empty image.");},xu.prototype.getNextImageSectionCharCode=function(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)};var _u={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},wu={};function Au(t,e,r,n,i,a){if(e.imageName){var o=n[e.imageName];return o?o.displaySize[0]*e.scale*Rs/a+i:0}var s=r[e.fontStack],u=s&&s[t];return u?u.metrics.advance*e.scale+i:0}function Su(t,e,r,n){var i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function ku(t,e,r){var n=0;return 10===t&&(n-=1e4),r&&(n+=150),40!==t&&65288!==t||(n+=50),41!==e&&65289!==e||(n+=50),n}function Iu(t,e,r,n,i,a){for(var o=null,s=Su(e,r,i,a),u=0,l=n;u<l.length;u+=1){var p=l[u],c=Su(e-p.x,r,i,a)+p.badness;c<=s&&(o=p,s=c);}return {index:t,x:e,priorBreak:o,badness:s}}function zu(t,e,r,n,i,a,o){if("point"!==a)return [];if(!t)return [];for(var s,u=[],l=function(t,e,r,n,i,a){for(var o=0,s=0;s<t.length();s++){var u=t.getSection(s);o+=Au(t.getCharCode(s),u,n,i,e,a);}return o/Math.max(1,Math.ceil(o/r))}(t,e,r,n,i,o),p=t.text.indexOf("​")>=0,c=0,h=0;h<t.length();h++){var f=t.getSection(h),y=t.getCharCode(h);if(_u[y]||(c+=Au(y,f,n,i,e,o)),h<t.length()-1){var d=!!(!((s=y)<11904)&&(Mn["Bopomofo Extended"](s)||Mn.Bopomofo(s)||Mn["CJK Compatibility Forms"](s)||Mn["CJK Compatibility Ideographs"](s)||Mn["CJK Compatibility"](s)||Mn["CJK Radicals Supplement"](s)||Mn["CJK Strokes"](s)||Mn["CJK Symbols and Punctuation"](s)||Mn["CJK Unified Ideographs Extension A"](s)||Mn["CJK Unified Ideographs"](s)||Mn["Enclosed CJK Letters and Months"](s)||Mn["Halfwidth and Fullwidth Forms"](s)||Mn.Hiragana(s)||Mn["Ideographic Description Characters"](s)||Mn["Kangxi Radicals"](s)||Mn["Katakana Phonetic Extensions"](s)||Mn.Katakana(s)||Mn["Vertical Forms"](s)||Mn["Yi Radicals"](s)||Mn["Yi Syllables"](s)));(wu[y]||d||f.imageName)&&u.push(Iu(h+1,c,l,u,ku(y,t.getCharCode(h+1),d&&p),!1));}}return function t(e){return e?t(e.priorBreak).concat(e.index):[]}(Iu(t.length(),c,l,u,0,!0))}function Cu(t){var e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return {horizontalAlign:e,verticalAlign:r}}function Bu(t,e,r,n,i){if(n||i)for(var a=t[r],o=a.metrics.advance*a.scale,s=(t[r].x+o)*n,u=e;u<=r;u++)t[u].x-=s,t[u].y+=i;}function Pu(t,e,r,n,i,a){var o,s=t.image;if(s.content){var u=s.content,l=s.pixelRatio||1;o=[u[0]/l,u[1]/l,s.displaySize[0]-u[2]/l,s.displaySize[1]-u[3]/l];}var p,c,h,f,y=e.left*a,d=e.right*a;"width"===r||"both"===r?(f=i[0]+y-n[3],c=i[0]+d+n[1]):c=(f=i[0]+(y+d-s.displaySize[0])/2)+s.displaySize[0];var m=e.top*a,v=e.bottom*a;return "height"===r||"both"===r?(p=i[1]+m-n[0],h=i[1]+v+n[2]):h=(p=i[1]+(m+v-s.displaySize[1])/2)+s.displaySize[1],{image:s,top:p,right:c,bottom:h,left:f,collisionPadding:o}}wu[10]=!0,wu[32]=!0,wu[38]=!0,wu[40]=!0,wu[41]=!0,wu[43]=!0,wu[45]=!0,wu[47]=!0,wu[173]=!0,wu[183]=!0,wu[8203]=!0,wu[8208]=!0,wu[8211]=!0,wu[8231]=!0;var Tu=function(t){function e(e,r,n,i){t.call(this,e,r),this.angle=n,void 0!==i&&(this.segment=i);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(i);In("Anchor",Tu);var Eu=128;function Mu(t,e){var r=e.expression;if("constant"===r.kind)return {kind:"constant",layoutSize:r.evaluate(new Qn(t+1))};if("source"===r.kind)return {kind:"source"};for(var n=r.zoomStops,i=r.interpolationType,a=0;a<n.length&&n[a]<=t;)a++;for(var o=a=Math.max(0,a-1);o<n.length&&n[o]<t+1;)o++;o=Math.min(n.length-1,o);var s=n[a],u=n[o];return "composite"===r.kind?{kind:"composite",minZoom:s,maxZoom:u,interpolationType:i}:{kind:"camera",minZoom:s,maxZoom:u,minSize:r.evaluate(new Qn(s)),maxSize:r.evaluate(new Qn(u)),interpolationType:i}}function Vu(t,e,r){var n=e.uSize,i=e.uSizeT,a=r.lowerSize,o=r.upperSize;return "source"===t.kind?a/Eu:"composite"===t.kind?ze(a/Eu,o/Eu,i):n}function Fu(t,e){var r=0,n=0;if("constant"===t.kind)n=t.layoutSize;else if("source"!==t.kind){var i=t.interpolationType,a=t.minZoom,o=t.maxZoom,s=i?u(Je.interpolationFactor(i,e,a,o),0,1):0;"camera"===t.kind?n=ze(t.minSize,t.maxSize,s):r=s;}return {uSizeT:r,uSize:n}}var Lu=Object.freeze({__proto__:null,getSizeData:Mu,evaluateSizeForFeature:Vu,evaluateSizeForZoom:Fu,SIZE_PACK_FACTOR:Eu});function Ou(t,e,r,n,i){if(void 0===e.segment)return !0;for(var a=e,o=e.segment+1,s=0;s>-r/2;){if(--o<0)return !1;s-=t[o].dist(a),a=t[o];}s+=t[o].dist(t[o+1]),o++;for(var u=[],l=0;s<r/2;){var p=t[o-1],c=t[o],h=t[o+1];if(!h)return !1;var f=p.angleTo(c)-c.angleTo(h);for(f=Math.abs((f+3*Math.PI)%(2*Math.PI)-Math.PI),u.push({distance:s,angleDelta:f}),l+=f;s-u[0].distance>n;)l-=u.shift().angleDelta;if(l>i)return !1;o++,s+=c.dist(h);}return !0}function Du(t){for(var e=0,r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1]);return e}function Ru(t,e,r){return t?.6*e*r:0}function Uu(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function ju(t,e,r,n,i,a){for(var o=Ru(r,i,a),s=Uu(r,n)*a,u=0,l=Du(t)/2,p=0;p<t.length-1;p++){var c=t[p],h=t[p+1],f=c.dist(h);if(u+f>l){var y=(l-u)/f,d=ze(c.x,h.x,y),m=ze(c.y,h.y,y),v=new Tu(d,m,h.angleTo(c),p);return v._round(),!o||Ou(t,v,s,o,e)?v:void 0}u+=f;}}function qu(t,e,r,n,i,a,o,s,u){var l=Ru(n,a,o),p=Uu(n,i),c=p*o,h=0===t[0].x||t[0].x===u||0===t[0].y||t[0].y===u;return e-c<e/4&&(e=c+e/4),function t(e,r,n,i,a,o,s,u,l){for(var p=o/2,c=Du(e),h=0,f=r-n,y=[],d=0;d<e.length-1;d++){for(var m=e[d],v=e[d+1],g=m.dist(v),x=v.angleTo(m);f+n<h+g;){var b=((f+=n)-h)/g,_=ze(m.x,v.x,b),w=ze(m.y,v.y,b);if(_>=0&&_<l&&w>=0&&w<l&&f-p>=0&&f+p<=c){var A=new Tu(_,w,x,d);A._round(),i&&!Ou(e,A,o,i,a)||y.push(A);}}h+=g;}u||y.length||s||(y=t(e,h/2,n,i,a,o,s,!0,l));return y}(t,h?e/2*s%e:(p/2+2*a)*o*s%e,e,l,r,c,h,!1,u)}var Nu=hu;function Ku(t,e,r,n){var a=[],o=t.image,s=o.pixelRatio,u=o.paddedRect.w-2*Nu,l=o.paddedRect.h-2*Nu,p=t.right-t.left,c=t.bottom-t.top,h=o.stretchX||[[0,u]],f=o.stretchY||[[0,l]],y=function(t,e){return t+e[1]-e[0]},d=h.reduce(y,0),m=f.reduce(y,0),v=u-d,g=l-m,x=0,b=d,_=0,w=m,A=0,S=v,k=0,I=g;if(o.content&&n){var z=o.content;x=Xu(h,0,z[0]),_=Xu(f,0,z[1]),b=Xu(h,z[0],z[2]),w=Xu(f,z[1],z[3]),A=z[0]-x,k=z[1]-_,S=z[2]-z[0]-b,I=z[3]-z[1]-w;}var C=function(n,a,u,l){var h=Gu(n.stretch-x,b,p,t.left),f=Ju(n.fixed-A,S,n.stretch,d),y=Gu(a.stretch-_,w,c,t.top),v=Ju(a.fixed-k,I,a.stretch,m),g=Gu(u.stretch-x,b,p,t.left),z=Ju(u.fixed-A,S,u.stretch,d),C=Gu(l.stretch-_,w,c,t.top),B=Ju(l.fixed-k,I,l.stretch,m),P=new i(h,y),T=new i(g,y),E=new i(g,C),M=new i(h,C),V=new i(f/s,v/s),F=new i(z/s,B/s),L=e*Math.PI/180;if(L){var O=Math.sin(L),D=Math.cos(L),R=[D,-O,O,D];P._matMult(R),T._matMult(R),M._matMult(R),E._matMult(R);}var U=n.stretch+n.fixed,j=u.stretch+u.fixed,q=a.stretch+a.fixed,N=l.stretch+l.fixed;return {tl:P,tr:T,bl:M,br:E,tex:{x:o.paddedRect.x+Nu+U,y:o.paddedRect.y+Nu+q,w:j-U,h:N-q},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:V,pixelOffsetBR:F,minFontScaleX:S/s/p,minFontScaleY:I/s/c,isSDF:r}};if(n&&(o.stretchX||o.stretchY))for(var B=Zu(h,v,d),P=Zu(f,g,m),T=0;T<B.length-1;T++)for(var E=B[T],M=B[T+1],V=0;V<P.length-1;V++){var F=P[V],L=P[V+1];a.push(C(E,F,M,L));}else a.push(C({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:u+1},{fixed:0,stretch:l+1}));return a}function Xu(t,e,r){for(var n=0,i=0,a=t;i<a.length;i+=1){var o=a[i];n+=Math.max(e,Math.min(r,o[1]))-Math.max(e,Math.min(r,o[0]));}return n}function Zu(t,e,r){for(var n=[{fixed:-Nu,stretch:0}],i=0,a=t;i<a.length;i+=1){var o=a[i],s=o[0],u=o[1],l=n[n.length-1];n.push({fixed:s-l.stretch,stretch:l.stretch}),n.push({fixed:s-l.stretch,stretch:l.stretch+(u-s)});}return n.push({fixed:e+Nu,stretch:r}),n}function Gu(t,e,r,n){return t/e*r+n}function Ju(t,e,r,n){return t-e*r/n}var Hu=function(t,e,r,n,a,o,s,u,l,p,c,h){var f=s.top*u-l,y=s.bottom*u+l,d=s.left*u-l,m=s.right*u+l,v=s.collisionPadding;if(v&&(d-=v[0]*u,f-=v[1]*u,m+=v[2]*u,y+=v[3]*u),this.boxStartIndex=t.length,p){var g=y-f,x=m-d;g>0&&(g=Math.max(10*u,g),this._addLineCollisionCircles(t,e,r,r.segment,x,g,n,a,o,c));}else{if(h){var b=new i(d,f),_=new i(m,f),w=new i(d,y),A=new i(m,y),S=h*Math.PI/180;b._rotate(S),_._rotate(S),w._rotate(S),A._rotate(S),d=Math.min(b.x,_.x,w.x,A.x),m=Math.max(b.x,_.x,w.x,A.x),f=Math.min(b.y,_.y,w.y,A.y),y=Math.max(b.y,_.y,w.y,A.y);}t.emplaceBack(r.x,r.y,d,f,m,y,n,a,o,0,0);}this.boxEndIndex=t.length;};Hu.prototype._addLineCollisionCircles=function(t,e,r,n,i,a,o,s,u,l){var p=a/2,c=Math.floor(i/p)||1,h=1+.4*Math.log(l)/Math.LN2,f=Math.floor(c*h/2),y=-a/2,d=r,m=n+1,v=y,g=-i/2,x=g-i/4;do{if(--m<0){if(v>g)return;m=0;break}v-=e[m].dist(d),d=e[m];}while(v>x);for(var b=e[m].dist(e[m+1]),_=-f;_<c+f;_++){var w=_*p,A=g+w;if(w<0&&(A+=w),w>i&&(A+=w-i),!(A<v)){for(;v+b<A;){if(v+=b,++m+1>=e.length)return;b=e[m].dist(e[m+1]);}var S=A-v,k=e[m],I=e[m+1].sub(k)._unit()._mult(S)._add(k)._round(),z=Math.abs(A-y)<p?0:.8*(A-y);t.emplaceBack(I.x,I.y,-a/2,-a/2,a/2,a/2,o,s,u,a/2,z);}}};var Yu=function(t,e){if(void 0===t&&(t=[]),void 0===e&&(e=$u),this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(var r=(this.length>>1)-1;r>=0;r--)this._down(r);};function $u(t,e){return t<e?-1:t>e?1:0}function Wu(t,e,r){void 0===e&&(e=1),void 0===r&&(r=!1);for(var n=1/0,a=1/0,o=-1/0,s=-1/0,u=t[0],l=0;l<u.length;l++){var p=u[l];(!l||p.x<n)&&(n=p.x),(!l||p.y<a)&&(a=p.y),(!l||p.x>o)&&(o=p.x),(!l||p.y>s)&&(s=p.y);}var c=o-n,h=s-a,f=Math.min(c,h),y=f/2,d=new Yu([],Qu);if(0===f)return new i(n,a);for(var m=n;m<o;m+=f)for(var v=a;v<s;v+=f)d.push(new tl(m+y,v+y,y,t));for(var g=function(t){for(var e=0,r=0,n=0,i=t[0],a=0,o=i.length,s=o-1;a<o;s=a++){var u=i[a],l=i[s],p=u.x*l.y-l.x*u.y;r+=(u.x+l.x)*p,n+=(u.y+l.y)*p,e+=3*p;}return new tl(r/e,n/e,0,t)}(t),x=d.length;d.length;){var b=d.pop();(b.d>g.d||!g.d)&&(g=b,r&&console.log("found best %d after %d probes",Math.round(1e4*b.d)/1e4,x)),b.max-g.d<=e||(y=b.h/2,d.push(new tl(b.p.x-y,b.p.y-y,y,t)),d.push(new tl(b.p.x+y,b.p.y-y,y,t)),d.push(new tl(b.p.x-y,b.p.y+y,y,t)),d.push(new tl(b.p.x+y,b.p.y+y,y,t)),x+=4);}return r&&(console.log("num probes: "+x),console.log("best distance: "+g.d)),g.p}function Qu(t,e){return e.max-t.max}function tl(t,e,r,n){this.p=new i(t,e),this.h=r,this.d=function(t,e){for(var r=!1,n=1/0,i=0;i<e.length;i++)for(var a=e[i],o=0,s=a.length,u=s-1;o<s;u=o++){var l=a[o],p=a[u];l.y>t.y!=p.y>t.y&&t.x<(p.x-l.x)*(t.y-l.y)/(p.y-l.y)+l.x&&(r=!r),n=Math.min(n,Na(t,l,p));}return (r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}Yu.prototype.push=function(t){this.data.push(t),this.length++,this._up(this.length-1);},Yu.prototype.pop=function(){if(0!==this.length){var t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}},Yu.prototype.peek=function(){return this.data[0]},Yu.prototype._up=function(t){for(var e=this.data,r=this.compare,n=e[t];t>0;){var i=t-1>>1,a=e[i];if(r(n,a)>=0)break;e[t]=a,t=i;}e[t]=n;},Yu.prototype._down=function(t){for(var e=this.data,r=this.compare,n=this.length>>1,i=e[t];t<n;){var a=1+(t<<1),o=e[a],s=a+1;if(s<this.length&&r(e[s],o)<0&&(a=s,o=e[s]),r(o,i)>=0)break;e[t]=o,t=a;}e[t]=i;};var el=7,rl=Number.POSITIVE_INFINITY;function nl(t,e){return e[1]!==rl?function(t,e,r){var n=0,i=0;switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":i=r-el;break;case"bottom-right":case"bottom-left":case"bottom":i=-r+el;}switch(t){case"top-right":case"bottom-right":case"right":n=-e;break;case"top-left":case"bottom-left":case"left":n=e;}return [n,i]}(t,e[0],e[1]):function(t,e){var r=0,n=0;e<0&&(e=0);var i=e/Math.sqrt(2);switch(t){case"top-right":case"top-left":n=i-el;break;case"bottom-right":case"bottom-left":n=-i+el;break;case"bottom":n=-e+el;break;case"top":n=e-el;}switch(t){case"top-right":case"bottom-right":r=-i;break;case"top-left":case"bottom-left":r=i;break;case"left":r=e;break;case"right":r=-e;}return [r,n]}(t,e[0])}function il(t){switch(t){case"right":case"top-right":case"bottom-right":return "right";case"left":case"top-left":case"bottom-left":return "left"}return "center"}var al=255,ol=al*Eu;function sl(t,e,r,n,a,o,s,u,l,p,c,h,f,y){var d=function(t,e,r,n,a,o,s,u){for(var l=n.layout.get("text-rotate").evaluate(o,{})*Math.PI/180,p=[],c=0,h=e.positionedLines;c<h.length;c+=1)for(var f=h[c],y=0,d=f.positionedGlyphs;y<d.length;y+=1){var m=d[y];if(m.rect){var v=m.rect||{},g=pu+1,x=!0,b=1,_=0,w=(a||u)&&m.vertical,A=m.metrics.advance*m.scale/2;if(u&&e.verticalizable){var S=(m.scale-1)*Rs,k=(Rs-m.metrics.width*m.scale)/2;_=f.lineOffset/2-(m.imageName?-k:S);}if(m.imageName){var I=s[m.imageName];x=I.sdf,b=I.pixelRatio,g=hu/b;}var z=a?[m.x+A,m.y]:[0,0],C=a?[0,0]:[m.x+A+r[0],m.y+r[1]-_],B=[0,0];w&&(B=C,C=[0,0]);var P=(m.metrics.left-g)*m.scale-A+C[0],T=(-m.metrics.top-g)*m.scale+C[1],E=P+v.w*m.scale/b,M=T+v.h*m.scale/b,V=new i(P,T),F=new i(E,T),L=new i(P,M),O=new i(E,M);if(w){var D=new i(-A,A-vu),R=-Math.PI/2,U=Rs/2-A,j=m.imageName?U:0,q=new i(5-vu-U,-j),N=new(Function.prototype.bind.apply(i,[null].concat(B)));V._rotateAround(R,D)._add(q)._add(N),F._rotateAround(R,D)._add(q)._add(N),L._rotateAround(R,D)._add(q)._add(N),O._rotateAround(R,D)._add(q)._add(N);}if(l){var K=Math.sin(l),X=Math.cos(l),Z=[X,-K,K,X];V._matMult(Z),F._matMult(Z),L._matMult(Z),O._matMult(Z);}var G=new i(0,0),J=new i(0,0);p.push({tl:V,tr:F,bl:L,br:O,tex:v,writingMode:e.writingMode,glyphOffset:z,sectionIndex:m.sectionIndex,isSDF:x,pixelOffsetTL:G,pixelOffsetBR:J,minFontScaleX:0,minFontScaleY:0});}}return p}(0,r,u,a,o,s,n,t.allowVerticalPlacement),m=t.textSizeData,v=null;"source"===m.kind?(v=[Eu*a.layout.get("text-size").evaluate(s,{})])[0]>ol&&_(t.layerIds[0]+': Value for "text-size" is >= '+al+'. Reduce your "text-size".'):"composite"===m.kind&&((v=[Eu*y.compositeTextSizes[0].evaluate(s,{}),Eu*y.compositeTextSizes[1].evaluate(s,{})])[0]>ol||v[1]>ol)&&_(t.layerIds[0]+': Value for "text-size" is >= '+al+'. Reduce your "text-size".'),t.addSymbols(t.text,d,v,u,o,s,p,e,l.lineStartIndex,l.lineLength,f);for(var g=0,x=c;g<x.length;g+=1){h[x[g]]=t.text.placedSymbolArray.length-1;}return 4*d.length}function ul(t){for(var e in t)return t[e];return null}function ll(t,e,r,n){var i=t.compareText;if(e in i){for(var a=i[e],o=a.length-1;o>=0;o--)if(n.dist(a[o])<r)return !0}else i[e]=[];return i[e].push(n),!1}var pl=cs.VectorTileFeature.types,cl=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function hl(t,e,r,n,i,a,o,s,u,l,p,c,h){var f=s?Math.min(ol,Math.round(s[0])):0,y=s?Math.min(ol,Math.round(s[1])):0;t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),a,o,(f<<1)+(u?1:0),y,16*l,16*p,256*c,256*h);}function fl(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r);}function yl(t){for(var e=0,r=t.sections;e<r.length;e+=1){if(Un(r[e].text))return !0}return !1}var dl=function(t){this.layoutVertexArray=new ki,this.indexArray=new Li,this.programConfigurations=t,this.segments=new ta,this.dynamicLayoutVertexArray=new Ii,this.opacityVertexArray=new zi,this.placedSymbolArray=new Ki;};dl.prototype.upload=function(t,e,r,n){r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Es.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,Ms.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,cl,!0),this.opacityVertexBuffer.itemSize=1),(r||n)&&this.programConfigurations.upload(t);},dl.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy());},In("SymbolBuffers",dl);var ml=function(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new ta,this.collisionVertexArray=new Pi;};ml.prototype.upload=function(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,Vs.members,!0);},ml.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy());},In("CollisionBuffers",ml);var vl=function(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((function(t){return t.id})),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex,this.hasPattern=!1,this.hasPaintOverrides=!1,this.hasRTLText=!1;var e=this.layers[0]._unevaluatedLayout._values;this.textSizeData=Mu(this.zoom,e["text-size"]),this.iconSizeData=Mu(this.zoom,e["icon-size"]);var r=this.layers[0].layout,n=r.get("symbol-sort-key"),i=r.get("symbol-z-order");this.sortFeaturesByKey="viewport-y"!==i&&void 0!==n.constantOr(1);var a="viewport-y"===i||"auto"===i&&!this.sortFeaturesByKey;this.sortFeaturesByY=a&&(r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement")),"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map((function(t){return mu[t]}))),this.stateDependentLayerIds=this.layers.filter((function(t){return t.isStateDependent()})).map((function(t){return t.id})),this.sourceID=t.sourceID;};vl.prototype.createArrays=function(){var t=this.layers[0].layout;this.hasPaintOverrides=_l.hasPaintOverrides(t),this.text=new dl(new za(Es.members,this.layers,this.zoom,(function(t){return /^text/.test(t)}))),this.icon=new dl(new za(Es.members,this.layers,this.zoom,(function(t){return /^icon/.test(t)}))),this.textCollisionBox=new ml(Bi,Fs.members,Oi),this.iconCollisionBox=new ml(Bi,Fs.members,Oi),this.textCollisionCircle=new ml(Bi,Ls.members,Li),this.iconCollisionCircle=new ml(Bi,Ls.members,Li),this.glyphOffsetArray=new Ji,this.lineVertexArray=new Yi,this.symbolInstances=new Zi;},vl.prototype.calculateGlyphDependencies=function(t,e,r,n,i){for(var a=0;a<t.length;a++)if(e[t.charCodeAt(a)]=!0,(r||n)&&i){var o=Ds[t.charAt(a)];o&&(e[o.charCodeAt(0)]=!0);}},vl.prototype.populate=function(t,e){var r=this.layers[0],n=r.layout,i=n.get("text-font"),a=n.get("text-field"),o=n.get("icon-image"),s=("constant"!==a.value.kind||a.value.value instanceof ne&&!a.value.value.isEmpty()||a.value.value.toString().length>0)&&("constant"!==i.value.kind||i.value.value.length>0),u=("constant"!==o.value.kind||!!o.value.value)&&Object.keys(o.parameters).length>0,l=n.get("symbol-sort-key");if(this.features=[],s||u){for(var p=e.iconDependencies,c=e.glyphDependencies,h=e.availableImages,f=new Qn(this.zoom),y=0,d=t;y<d.length;y+=1){var m=d[y],v=m.feature,g=m.id,x=m.index,b=m.sourceLayerIndex;if(r._featureFilter(f,v)){var _=void 0;if(s){var w=r.getValueAndResolveTokens("text-field",v,h),A=ne.factory(w);yl(A)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===Yn()||this.hasRTLText&&Wn.isParsed())&&(_=Os(A,r,v));}var S=void 0;if(u){var k=r.getValueAndResolveTokens("icon-image",v,h);S=k instanceof ie?k:ie.fromString(k);}if(_||S){var I=this.sortFeaturesByKey?l.evaluate(v,{}):void 0,z={id:g,text:_,icon:S,index:x,sourceLayerIndex:b,geometry:Ma(v),properties:v.properties,type:pl[v.type],sortKey:I};if(this.features.push(z),S&&(p[S.name]=!0),_){var C=i.evaluate(v,{}).join(","),B="map"===n.get("text-rotation-alignment")&&"point"!==n.get("symbol-placement");this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(mu.vertical)>=0;for(var P=0,T=_.sections;P<T.length;P+=1){var E=T[P];if(E.image)p[E.image.name]=!0;else{var M=Vn(_.toString()),V=E.fontStack||C,F=c[V]=c[V]||{};this.calculateGlyphDependencies(E.text,F,B,this.allowVerticalPlacement,M);}}}}}}"line"===n.get("symbol-placement")&&(this.features=function(t){var e={},r={},n=[],i=0;function a(e){n.push(t[e]),i++;}function o(t,e,i){var a=r[t];return delete r[t],r[e]=a,n[a].geometry[0].pop(),n[a].geometry[0]=n[a].geometry[0].concat(i[0]),a}function s(t,r,i){var a=e[r];return delete e[r],e[t]=a,n[a].geometry[0].shift(),n[a].geometry[0]=i[0].concat(n[a].geometry[0]),a}function u(t,e,r){var n=r?e[0][e[0].length-1]:e[0][0];return t+":"+n.x+":"+n.y}for(var l=0;l<t.length;l++){var p=t[l],c=p.geometry,h=p.text?p.text.toString():null;if(h){var f=u(h,c),y=u(h,c,!0);if(f in r&&y in e&&r[f]!==e[y]){var d=s(f,y,c),m=o(f,y,n[d].geometry);delete e[f],delete r[y],r[u(h,n[m].geometry,!0)]=m,n[d].geometry=null;}else f in r?o(f,y,c):y in e?s(f,y,c):(a(l),e[f]=i-1,r[y]=i-1);}else a(l);}return n.filter((function(t){return t.geometry}))}(this.features)),this.sortFeaturesByKey&&this.features.sort((function(t,e){return t.sortKey-e.sortKey}));}},vl.prototype.update=function(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r));},vl.prototype.isEmpty=function(){return 0===this.symbolInstances.length&&!this.hasRTLText},vl.prototype.uploadPending=function(){return !this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload},vl.prototype.upload=function(t){this.uploaded||(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t),this.textCollisionCircle.upload(t),this.iconCollisionCircle.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0;},vl.prototype.destroy=function(){this.text.destroy(),this.icon.destroy(),this.textCollisionBox.destroy(),this.iconCollisionBox.destroy(),this.textCollisionCircle.destroy(),this.iconCollisionCircle.destroy();},vl.prototype.addToLineVertexArray=function(t,e){var r=this.lineVertexArray.length;if(void 0!==t.segment){for(var n=t.dist(e[t.segment+1]),i=t.dist(e[t.segment]),a={},o=t.segment+1;o<e.length;o++)a[o]={x:e[o].x,y:e[o].y,tileUnitDistanceFromAnchor:n},o<e.length-1&&(n+=e[o+1].dist(e[o]));for(var s=t.segment||0;s>=0;s--)a[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:i},s>0&&(i+=e[s-1].dist(e[s]));for(var u=0;u<e.length;u++){var l=a[u];this.lineVertexArray.emplaceBack(l.x,l.y,l.tileUnitDistanceFromAnchor);}}return {lineStartIndex:r,lineLength:this.lineVertexArray.length-r}},vl.prototype.addSymbols=function(t,e,r,n,i,a,o,s,u,l,p){var c=this,h=t.indexArray,f=t.layoutVertexArray,y=t.dynamicLayoutVertexArray,d=t.segments.prepareSegment(4*e.length,t.layoutVertexArray,t.indexArray,a.sortKey),m=this.glyphOffsetArray.length,v=d.vertexLength,g=this.allowVerticalPlacement&&o===mu.vertical?Math.PI/2:0,x=function(t){var e=t.tl,n=t.tr,i=t.bl,a=t.br,o=t.tex,u=t.pixelOffsetTL,l=t.pixelOffsetBR,p=t.minFontScaleX,m=t.minFontScaleY,v=d.vertexLength,x=t.glyphOffset[1];hl(f,s.x,s.y,e.x,x+e.y,o.x,o.y,r,t.isSDF,u.x,u.y,p,m),hl(f,s.x,s.y,n.x,x+n.y,o.x+o.w,o.y,r,t.isSDF,l.x,u.y,p,m),hl(f,s.x,s.y,i.x,x+i.y,o.x,o.y+o.h,r,t.isSDF,u.x,l.y,p,m),hl(f,s.x,s.y,a.x,x+a.y,o.x+o.w,o.y+o.h,r,t.isSDF,l.x,l.y,p,m),fl(y,s,g),h.emplaceBack(v,v+1,v+2),h.emplaceBack(v+1,v+2,v+3),d.vertexLength+=4,d.primitiveLength+=2,c.glyphOffsetArray.emplaceBack(t.glyphOffset[0]);};if(a.text&&a.text.sections){var b=a.text.sections;if(this.hasPaintOverrides){for(var _,w=function(e,r){void 0===_||_===e&&!r||t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{},b[_]),_=e;},A=0,S=e;A<S.length;A+=1){var k=S[A];w(k.sectionIndex,!1),x(k);}w(_,!0);}else{for(var I=0,z=e;I<z.length;I+=1){x(z[I]);}t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{},b[0]);}}else{for(var C=0,B=e;C<B.length;C+=1){x(B[C]);}t.programConfigurations.populatePaintArrays(t.layoutVertexArray.length,a,a.index,{});}t.placedSymbolArray.emplaceBack(s.x,s.y,m,this.glyphOffsetArray.length-m,v,u,l,s.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],o,0,!1,0,p);},vl.prototype._addCollisionDebugVertex=function(t,e,r,n,i,a){return e.emplaceBack(0,0),t.emplaceBack(r.x,r.y,n,i,Math.round(a.x),Math.round(a.y))},vl.prototype.addCollisionDebugVertices=function(t,e,r,n,a,o,s,u){var l=a.segments.prepareSegment(4,a.layoutVertexArray,a.indexArray),p=l.vertexLength,c=a.layoutVertexArray,h=a.collisionVertexArray,f=s.anchorX,y=s.anchorY;if(this._addCollisionDebugVertex(c,h,o,f,y,new i(t,e)),this._addCollisionDebugVertex(c,h,o,f,y,new i(r,e)),this._addCollisionDebugVertex(c,h,o,f,y,new i(r,n)),this._addCollisionDebugVertex(c,h,o,f,y,new i(t,n)),l.vertexLength+=4,u){var d=a.indexArray;d.emplaceBack(p,p+1,p+2),d.emplaceBack(p,p+2,p+3),l.primitiveLength+=2;}else{var m=a.indexArray;m.emplaceBack(p,p+1),m.emplaceBack(p+1,p+2),m.emplaceBack(p+2,p+3),m.emplaceBack(p+3,p),l.primitiveLength+=4;}},vl.prototype.addDebugCollisionBoxes=function(t,e,r,n){for(var i=t;i<e;i++){var a=this.collisionBoxArray.get(i),o=a.x1,s=a.y1,u=a.x2,l=a.y2,p=a.radius>0;this.addCollisionDebugVertices(o,s,u,l,p?n?this.textCollisionCircle:this.iconCollisionCircle:n?this.textCollisionBox:this.iconCollisionBox,a.anchorPoint,r,p);}},vl.prototype.generateCollisionDebugBuffers=function(){for(var t=0;t<this.symbolInstances.length;t++){var e=this.symbolInstances.get(t);this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1),this.addDebugCollisionBoxes(e.verticalIconBoxStartIndex,e.verticalIconBoxEndIndex,e,!1);}},vl.prototype._deserializeCollisionBoxesForSymbol=function(t,e,r,n,i,a,o,s,u){for(var l={},p=e;p<r;p++){var c=t.get(p);if(0===c.radius){l.textBox={x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2,anchorPointX:c.anchorPointX,anchorPointY:c.anchorPointY},l.textFeatureIndex=c.featureIndex;break}l.textCircles||(l.textCircles=[],l.textFeatureIndex=c.featureIndex);l.textCircles.push(c.anchorPointX,c.anchorPointY,c.radius,c.signedDistanceFromAnchor,1);}for(var h=n;h<i;h++){var f=t.get(h);if(0===f.radius){l.verticalTextBox={x1:f.x1,y1:f.y1,x2:f.x2,y2:f.y2,anchorPointX:f.anchorPointX,anchorPointY:f.anchorPointY},l.verticalTextFeatureIndex=f.featureIndex;break}}for(var y=a;y<o;y++){var d=t.get(y);if(0===d.radius){l.iconBox={x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2,anchorPointX:d.anchorPointX,anchorPointY:d.anchorPointY},l.iconFeatureIndex=d.featureIndex;break}}for(var m=s;m<u;m++){var v=t.get(m);if(0===v.radius){l.verticalIconBox={x1:v.x1,y1:v.y1,x2:v.x2,y2:v.y2,anchorPointX:v.anchorPointX,anchorPointY:v.anchorPointY},l.verticalIconFeatureIndex=v.featureIndex;break}}return l},vl.prototype.deserializeCollisionBoxes=function(t){this.collisionArrays=[];for(var e=0;e<this.symbolInstances.length;e++){var r=this.symbolInstances.get(e);this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex,r.verticalIconBoxStartIndex,r.verticalIconBoxEndIndex));}},vl.prototype.hasTextData=function(){return this.text.segments.get().length>0},vl.prototype.hasIconData=function(){return this.icon.segments.get().length>0},vl.prototype.hasTextCollisionBoxData=function(){return this.textCollisionBox.segments.get().length>0},vl.prototype.hasIconCollisionBoxData=function(){return this.iconCollisionBox.segments.get().length>0},vl.prototype.hasTextCollisionCircleData=function(){return this.textCollisionCircle.segments.get().length>0},vl.prototype.hasIconCollisionCircleData=function(){return this.iconCollisionCircle.segments.get().length>0},vl.prototype.addIndicesForPlacedSymbol=function(t,e){for(var r=t.placedSymbolArray.get(e),n=r.vertexStartIndex+4*r.numGlyphs,i=r.vertexStartIndex;i<n;i+=4)t.indexArray.emplaceBack(i,i+1,i+2),t.indexArray.emplaceBack(i+1,i+2,i+3);},vl.prototype.getSortedSymbolIndexes=function(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes;for(var e=Math.sin(t),r=Math.cos(t),n=[],i=[],a=[],o=0;o<this.symbolInstances.length;++o){a.push(o);var s=this.symbolInstances.get(o);n.push(0|Math.round(e*s.anchorX+r*s.anchorY)),i.push(s.featureIndex);}return a.sort((function(t,e){return n[t]-n[e]||i[e]-i[t]})),a},vl.prototype.sortFeatures=function(t){var e=this;if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(var r=0,n=this.symbolInstanceIndexes;r<n.length;r+=1){var i=n[r],a=this.symbolInstances.get(i);this.featureSortOrder.push(a.featureIndex),[a.rightJustifiedTextSymbolIndex,a.centerJustifiedTextSymbolIndex,a.leftJustifiedTextSymbolIndex].forEach((function(t,r,n){t>=0&&n.indexOf(t)===r&&e.addIndicesForPlacedSymbol(e.text,t);})),a.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,a.verticalPlacedTextSymbolIndex),a.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,a.placedIconSymbolIndex),a.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,a.verticalPlacedIconSymbolIndex);}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}},In("SymbolBucket",vl,{omit:["layers","collisionBoxArray","features","compareText"]}),vl.MAX_GLYPHS=65535,vl.addDynamicAttributes=fl;var gl=new fi({"symbol-placement":new ui(Tt.layout_symbol["symbol-placement"]),"symbol-spacing":new ui(Tt.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new ui(Tt.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new li(Tt.layout_symbol["symbol-sort-key"]),"symbol-z-order":new ui(Tt.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new ui(Tt.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new ui(Tt.layout_symbol["icon-ignore-placement"]),"icon-optional":new ui(Tt.layout_symbol["icon-optional"]),"icon-rotation-alignment":new ui(Tt.layout_symbol["icon-rotation-alignment"]),"icon-size":new li(Tt.layout_symbol["icon-size"]),"icon-text-fit":new ui(Tt.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new ui(Tt.layout_symbol["icon-text-fit-padding"]),"icon-image":new li(Tt.layout_symbol["icon-image"]),"icon-rotate":new li(Tt.layout_symbol["icon-rotate"]),"icon-padding":new ui(Tt.layout_symbol["icon-padding"]),"icon-keep-upright":new ui(Tt.layout_symbol["icon-keep-upright"]),"icon-offset":new li(Tt.layout_symbol["icon-offset"]),"icon-anchor":new li(Tt.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new ui(Tt.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new ui(Tt.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new ui(Tt.layout_symbol["text-rotation-alignment"]),"text-field":new li(Tt.layout_symbol["text-field"]),"text-font":new li(Tt.layout_symbol["text-font"]),"text-size":new li(Tt.layout_symbol["text-size"]),"text-max-width":new li(Tt.layout_symbol["text-max-width"]),"text-line-height":new ui(Tt.layout_symbol["text-line-height"]),"text-letter-spacing":new li(Tt.layout_symbol["text-letter-spacing"]),"text-justify":new li(Tt.layout_symbol["text-justify"]),"text-radial-offset":new li(Tt.layout_symbol["text-radial-offset"]),"text-variable-anchor":new ui(Tt.layout_symbol["text-variable-anchor"]),"text-anchor":new li(Tt.layout_symbol["text-anchor"]),"text-max-angle":new ui(Tt.layout_symbol["text-max-angle"]),"text-writing-mode":new ui(Tt.layout_symbol["text-writing-mode"]),"text-rotate":new li(Tt.layout_symbol["text-rotate"]),"text-padding":new ui(Tt.layout_symbol["text-padding"]),"text-keep-upright":new ui(Tt.layout_symbol["text-keep-upright"]),"text-transform":new li(Tt.layout_symbol["text-transform"]),"text-offset":new li(Tt.layout_symbol["text-offset"]),"text-allow-overlap":new ui(Tt.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new ui(Tt.layout_symbol["text-ignore-placement"]),"text-optional":new ui(Tt.layout_symbol["text-optional"])}),xl={paint:new fi({"icon-opacity":new li(Tt.paint_symbol["icon-opacity"]),"icon-color":new li(Tt.paint_symbol["icon-color"]),"icon-halo-color":new li(Tt.paint_symbol["icon-halo-color"]),"icon-halo-width":new li(Tt.paint_symbol["icon-halo-width"]),"icon-halo-blur":new li(Tt.paint_symbol["icon-halo-blur"]),"icon-translate":new ui(Tt.paint_symbol["icon-translate"]),"icon-translate-anchor":new ui(Tt.paint_symbol["icon-translate-anchor"]),"text-opacity":new li(Tt.paint_symbol["text-opacity"]),"text-color":new li(Tt.paint_symbol["text-color"],{runtimeType:Nt,getOverride:function(t){return t.textColor},hasOverride:function(t){return !!t.textColor}}),"text-halo-color":new li(Tt.paint_symbol["text-halo-color"]),"text-halo-width":new li(Tt.paint_symbol["text-halo-width"]),"text-halo-blur":new li(Tt.paint_symbol["text-halo-blur"]),"text-translate":new ui(Tt.paint_symbol["text-translate"]),"text-translate-anchor":new ui(Tt.paint_symbol["text-translate-anchor"])}),layout:gl},bl=function(t){this.type=t.property.overrides?t.property.overrides.runtimeType:Rt,this.defaultValue=t;};bl.prototype.evaluate=function(t){if(t.formattedSection){var e=this.defaultValue.property.overrides;if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default},bl.prototype.eachChild=function(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression);},bl.prototype.possibleOutputs=function(){return [void 0]},bl.prototype.serialize=function(){return null},In("FormatSectionOverride",bl,{omit:["defaultValue"]});var _l=function(t){function e(e){t.call(this,e,xl);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e,r){if(t.prototype.recalculate.call(this,e,r),"auto"===this.layout.get("icon-rotation-alignment")&&("point"!==this.layout.get("symbol-placement")?this.layout._values["icon-rotation-alignment"]="map":this.layout._values["icon-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-rotation-alignment")&&("point"!==this.layout.get("symbol-placement")?this.layout._values["text-rotation-alignment"]="map":this.layout._values["text-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){var n=this.layout.get("text-writing-mode");if(n){for(var i=[],a=0,o=n;a<o.length;a+=1){var s=o[a];i.indexOf(s)<0&&i.push(s);}this.layout._values["text-writing-mode"]=i;}else this.layout._values["text-writing-mode"]=["horizontal"];}this._setPaintOverrides();},e.prototype.getValueAndResolveTokens=function(t,e,r){var n=this.layout.get(t).evaluate(e,{},r),i=this._unevaluatedLayout._values[t];return i.isDataDriven()||Er(i.value)||!n?n:function(t,e){return e.replace(/{([^{}]+)}/g,(function(e,r){return r in t?String(t[r]):""}))}(e.properties,n)},e.prototype.createBucket=function(t){return new vl(t)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return !1},e.prototype._setPaintOverrides=function(){for(var t=0,r=xl.paint.overridableProperties;t<r.length;t+=1){var n=r[t];if(e.hasPaintOverride(this.layout,n)){var i=this.paint.get(n),a=new bl(i),o=new Tr(a,i.property.specification),s=null;s="constant"===i.value.kind||"source"===i.value.kind?new Vr("source",o):new Fr("composite",o,i.value.zoomStops,i.value._interpolationType),this.paint._values[n]=new oi(i.property,s,i.parameters);}}},e.prototype._handleOverridablePaintPropertyUpdate=function(t,r,n){return !(!this.layout||r.isDataDriven()||n.isDataDriven())&&e.hasPaintOverride(this.layout,t)},e.hasPaintOverride=function(t,e){var r=t.get("text-field"),n=xl.paint.properties[e],i=!1,a=function(t){for(var e=0,r=t;e<r.length;e+=1){var a=r[e];if(n.overrides&&n.overrides.hasOverride(a))return void(i=!0)}};if("constant"===r.value.kind&&r.value.value instanceof ne)a(r.value.value.sections);else if("source"===r.value.kind){var o=function(t){if(!i)if(t instanceof ue&&oe(t.value)===Gt){var e=t.value;a(e.sections);}else t instanceof he?a(t.sections):t.eachChild(o);},s=r.value;s._styleExpression&&o(s._styleExpression.expression);}return i},e.hasPaintOverrides=function(t){for(var r=0,n=xl.paint.overridableProperties;r<n.length;r+=1){var i=n[r];if(e.hasPaintOverride(t,i))return !0}return !1},e}(yi),wl={paint:new fi({"background-color":new ui(Tt.paint_background["background-color"]),"background-pattern":new ci(Tt.paint_background["background-pattern"]),"background-opacity":new ui(Tt.paint_background["background-opacity"])})},Al=function(t){function e(e){t.call(this,e,wl);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(yi),Sl={paint:new fi({"raster-opacity":new ui(Tt.paint_raster["raster-opacity"]),"raster-hue-rotate":new ui(Tt.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new ui(Tt.paint_raster["raster-brightness-min"]),"raster-brightness-max":new ui(Tt.paint_raster["raster-brightness-max"]),"raster-saturation":new ui(Tt.paint_raster["raster-saturation"]),"raster-contrast":new ui(Tt.paint_raster["raster-contrast"]),"raster-resampling":new ui(Tt.paint_raster["raster-resampling"]),"raster-fade-duration":new ui(Tt.paint_raster["raster-fade-duration"])})},kl=function(t){function e(e){t.call(this,e,Sl);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(yi);var Il=function(t){function e(e){t.call(this,e,{}),this.implementation=e;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.is3D=function(){return "3d"===this.implementation.renderingMode},e.prototype.hasOffscreenPass=function(){return void 0!==this.implementation.prerender},e.prototype.recalculate=function(){},e.prototype.updateTransitions=function(){},e.prototype.hasTransition=function(){},e.prototype.serialize=function(){},e.prototype.onAdd=function(t){this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl);},e.prototype.onRemove=function(t){this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl);},e}(yi),zl={circle:ro,heatmap:ho,hillshade:yo,fill:es,"fill-extrusion":xs,line:Ps,symbol:_l,background:Al,raster:kl};var Cl=self.HTMLImageElement,Bl=self.HTMLCanvasElement,Pl=self.HTMLVideoElement,Tl=self.ImageData,El=self.ImageBitmap,Ml=function(t,e,r,n){this.context=t,this.format=r,this.texture=t.gl.createTexture(),this.update(e,n);};Ml.prototype.update=function(t,e,r){var n=t.width,i=t.height,a=!(this.size&&this.size[0]===n&&this.size[1]===i||r),o=this.context,s=o.gl;if(this.useMipmap=Boolean(e&&e.useMipmap),s.bindTexture(s.TEXTURE_2D,this.texture),o.pixelStoreUnpackFlipY.set(!1),o.pixelStoreUnpack.set(1),o.pixelStoreUnpackPremultiplyAlpha.set(this.format===s.RGBA&&(!e||!1!==e.premultiply)),a)this.size=[n,i],t instanceof Cl||t instanceof Bl||t instanceof Pl||t instanceof Tl||El&&t instanceof El?s.texImage2D(s.TEXTURE_2D,0,this.format,this.format,s.UNSIGNED_BYTE,t):s.texImage2D(s.TEXTURE_2D,0,this.format,n,i,0,this.format,s.UNSIGNED_BYTE,t.data);else{var u=r||{x:0,y:0},l=u.x,p=u.y;t instanceof Cl||t instanceof Bl||t instanceof Pl||t instanceof Tl||El&&t instanceof El?s.texSubImage2D(s.TEXTURE_2D,0,l,p,s.RGBA,s.UNSIGNED_BYTE,t):s.texSubImage2D(s.TEXTURE_2D,0,l,p,n,i,s.RGBA,s.UNSIGNED_BYTE,t.data);}this.useMipmap&&this.isSizePowerOfTwo()&&s.generateMipmap(s.TEXTURE_2D);},Ml.prototype.bind=function(t,e,r){var n=this.context.gl;n.bindTexture(n.TEXTURE_2D,this.texture),r!==n.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(r=n.LINEAR),t!==this.filter&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,r||t),this.filter=t),e!==this.wrap&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e),this.wrap=e);},Ml.prototype.isSizePowerOfTwo=function(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0},Ml.prototype.destroy=function(){this.context.gl.deleteTexture(this.texture),this.texture=null;};var Vl=function(t){var e=this;this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=function(){e._triggered=!1,e._callback();});};Vl.prototype.trigger=function(){var t=this;this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((function(){t._triggered=!1,t._callback();}),0));},Vl.prototype.remove=function(){delete this._channel,this._callback=function(){};};var Fl=function(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},d(["receive","process"],this),this.invoker=new Vl(this.process),this.target.addEventListener("message",this.receive,!1),this.globalScope=S()?t:self;};function Ll(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r);return [t*n-2*Math.PI*6378137/2,e*n-2*Math.PI*6378137/2]}Fl.prototype.send=function(t,e,r,n,i){var a=this;void 0===i&&(i=!1);var o=Math.round(1e18*Math.random()).toString(36).substring(0,10);r&&(this.callbacks[o]=r);var s=z(this.globalScope)?void 0:[];return this.target.postMessage({id:o,type:t,hasCallback:!!r,targetMapId:n,mustQueue:i,sourceMapId:this.mapId,data:Pn(e,s)},s),{cancel:function(){r&&delete a.callbacks[o],a.target.postMessage({id:o,type:"<cancel>",targetMapId:n,sourceMapId:a.mapId});}}},Fl.prototype.receive=function(t){var e=t.data,r=e.id;if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[r];var n=this.cancelCallbacks[r];delete this.cancelCallbacks[r],n&&n();}else S()||e.mustQueue?(this.tasks[r]=e,this.taskQueue.push(r),this.invoker.trigger()):this.processTask(r,e);},Fl.prototype.process=function(){if(this.taskQueue.length){var t=this.taskQueue.shift(),e=this.tasks[t];delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),e&&this.processTask(t,e);}},Fl.prototype.processTask=function(t,e){var r=this;if("<response>"===e.type){var n=this.callbacks[t];delete this.callbacks[t],n&&(e.error?n(Tn(e.error)):n(null,Tn(e.data)));}else{var i=!1,a=z(this.globalScope)?void 0:[],o=e.hasCallback?function(e,n){i=!0,delete r.cancelCallbacks[t],r.target.postMessage({id:t,type:"<response>",sourceMapId:r.mapId,error:e?Pn(e):null,data:Pn(n,a)},a);}:function(t){i=!0;},s=null,u=Tn(e.data);if(this.parent[e.type])s=this.parent[e.type](e.sourceMapId,u,o);else if(this.parent.getWorkerSource){var l=e.type.split(".");s=this.parent.getWorkerSource(e.sourceMapId,l[0],u.source)[l[1]](u,o);}else o(new Error("Could not find function "+e.type));!i&&s&&s.cancel&&(this.cancelCallbacks[t]=s.cancel);}},Fl.prototype.remove=function(){this.invoker.remove(),this.target.removeEventListener("message",this.receive,!1);};var Ol=function(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]));};Ol.prototype.setNorthEast=function(t){return this._ne=t instanceof Dl?new Dl(t.lng,t.lat):Dl.convert(t),this},Ol.prototype.setSouthWest=function(t){return this._sw=t instanceof Dl?new Dl(t.lng,t.lat):Dl.convert(t),this},Ol.prototype.extend=function(t){var e,r,n=this._sw,i=this._ne;if(t instanceof Dl)e=t,r=t;else{if(!(t instanceof Ol))return Array.isArray(t)?t.every(Array.isArray)?this.extend(Ol.convert(t)):this.extend(Dl.convert(t)):this;if(e=t._sw,r=t._ne,!e||!r)return this}return n||i?(n.lng=Math.min(e.lng,n.lng),n.lat=Math.min(e.lat,n.lat),i.lng=Math.max(r.lng,i.lng),i.lat=Math.max(r.lat,i.lat)):(this._sw=new Dl(e.lng,e.lat),this._ne=new Dl(r.lng,r.lat)),this},Ol.prototype.getCenter=function(){return new Dl((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},Ol.prototype.getSouthWest=function(){return this._sw},Ol.prototype.getNorthEast=function(){return this._ne},Ol.prototype.getNorthWest=function(){return new Dl(this.getWest(),this.getNorth())},Ol.prototype.getSouthEast=function(){return new Dl(this.getEast(),this.getSouth())},Ol.prototype.getWest=function(){return this._sw.lng},Ol.prototype.getSouth=function(){return this._sw.lat},Ol.prototype.getEast=function(){return this._ne.lng},Ol.prototype.getNorth=function(){return this._ne.lat},Ol.prototype.toArray=function(){return [this._sw.toArray(),this._ne.toArray()]},Ol.prototype.toString=function(){return "LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},Ol.prototype.isEmpty=function(){return !(this._sw&&this._ne)},Ol.prototype.contains=function(t){var e=Dl.convert(t),r=e.lng,n=e.lat,i=this._sw.lat<=n&&n<=this._ne.lat,a=this._sw.lng<=r&&r<=this._ne.lng;return this._sw.lng>this._ne.lng&&(a=this._sw.lng>=r&&r>=this._ne.lng),i&&a},Ol.convert=function(t){return !t||t instanceof Ol?t:new Ol(t)};var Dl=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid LngLat object: ("+t+", "+e+")");if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")};Dl.prototype.wrap=function(){return new Dl(l(this.lng,-180,180),this.lat)},Dl.prototype.toArray=function(){return [this.lng,this.lat]},Dl.prototype.toString=function(){return "LngLat("+this.lng+", "+this.lat+")"},Dl.prototype.toBounds=function(t){void 0===t&&(t=0);var e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat);return new Ol(new Dl(this.lng-r,this.lat-e),new Dl(this.lng+r,this.lat+e))},Dl.convert=function(t){if(t instanceof Dl)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new Dl(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Dl(Number("lng"in t?t.lng:t.lon),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")};var Rl=2*Math.PI*6378137;function Ul(t){return Rl*Math.cos(t*Math.PI/180)}function jl(t){return (180+t)/360}function ql(t){return (180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Nl(t,e){return t/Ul(e)}function Kl(t){var e=180-360*t;return 360/Math.PI*Math.atan(Math.exp(e*Math.PI/180))-90}var Xl=function(t,e,r){void 0===r&&(r=0),this.x=+t,this.y=+e,this.z=+r;};Xl.fromLngLat=function(t,e){void 0===e&&(e=0);var r=Dl.convert(t);return new Xl(jl(r.lng),ql(r.lat),Nl(e,r.lat))},Xl.prototype.toLngLat=function(){return new Dl(360*this.x-180,Kl(this.y))},Xl.prototype.toAltitude=function(){return t=this.z,e=this.y,t*Ul(Kl(e));var t,e;},Xl.prototype.meterInMercatorCoordinateUnits=function(){return 1/Rl*(t=Kl(this.y),1/Math.cos(t*Math.PI/180));var t;};var Zl=function(t,e,r){this.z=t,this.x=e,this.y=r,this.key=Hl(0,t,t,e,r);};Zl.prototype.equals=function(t){return this.z===t.z&&this.x===t.x&&this.y===t.y},Zl.prototype.url=function(t,e){var r,n,i,a,o,s=(r=this.x,n=this.y,i=this.z,a=Ll(256*r,256*(n=Math.pow(2,i)-n-1),i),o=Ll(256*(r+1),256*(n+1),i),a[0]+","+a[1]+","+o[0]+","+o[1]),u=function(t,e,r){for(var n,i="",a=t;a>0;a--)i+=(e&(n=1<<a-1)?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",u).replace("{bbox-epsg-3857}",s)},Zl.prototype.getTilePoint=function(t){var e=Math.pow(2,this.z);return new i((t.x*e-this.x)*Pa,(t.y*e-this.y)*Pa)},Zl.prototype.toString=function(){return this.z+"/"+this.x+"/"+this.y};var Gl=function(t,e){this.wrap=t,this.canonical=e,this.key=Hl(t,e.z,e.z,e.x,e.y);},Jl=function(t,e,r,n,i){this.overscaledZ=t,this.wrap=e,this.canonical=new Zl(r,+n,+i),this.key=Hl(e,t,r,n,i);};function Hl(t,e,r,n,i){(t*=2)<0&&(t=-1*t-1);var a=1<<r;return (a*a*t+a*i+n).toString(36)+r.toString(36)+e.toString(36)}Jl.prototype.equals=function(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)},Jl.prototype.scaledTo=function(t){var e=this.canonical.z-t;return t>this.canonical.z?new Jl(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new Jl(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)},Jl.prototype.calculateScaledKey=function(t,e){var r=this.canonical.z-t;return t>this.canonical.z?Hl(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y):Hl(this.wrap*+e,t,t,this.canonical.x>>r,this.canonical.y>>r)},Jl.prototype.isChildOf=function(t){if(t.wrap!==this.wrap)return !1;var e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e},Jl.prototype.children=function(t){if(this.overscaledZ>=t)return [new Jl(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];var e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return [new Jl(e,this.wrap,e,r,n),new Jl(e,this.wrap,e,r+1,n),new Jl(e,this.wrap,e,r,n+1),new Jl(e,this.wrap,e,r+1,n+1)]},Jl.prototype.isLessThan=function(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))},Jl.prototype.wrapped=function(){return new Jl(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)},Jl.prototype.unwrapTo=function(t){return new Jl(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)},Jl.prototype.overscaleFactor=function(){return Math.pow(2,this.overscaledZ-this.canonical.z)},Jl.prototype.toUnwrapped=function(){return new Gl(this.wrap,this.canonical)},Jl.prototype.toString=function(){return this.overscaledZ+"/"+this.canonical.x+"/"+this.canonical.y},Jl.prototype.getTilePoint=function(t){return this.canonical.getTilePoint(new Xl(t.x-this.wrap,t.y))},In("CanonicalTileID",Zl),In("OverscaledTileID",Jl,{omit:["posMatrix"]});var Yl=function(t,e,r){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square");if(r&&"mapbox"!==r&&"terrarium"!==r)return _('"'+r+'" is not a valid encoding type. Valid types include "mapbox" and "terrarium".');this.stride=e.height;var n=this.dim=e.height-2;this.data=new Uint32Array(e.data.buffer),this.encoding=r||"mapbox";for(var i=0;i<n;i++)this.data[this._idx(-1,i)]=this.data[this._idx(0,i)],this.data[this._idx(n,i)]=this.data[this._idx(n-1,i)],this.data[this._idx(i,-1)]=this.data[this._idx(i,0)],this.data[this._idx(i,n)]=this.data[this._idx(i,n-1)];this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(n,-1)]=this.data[this._idx(n-1,0)],this.data[this._idx(-1,n)]=this.data[this._idx(0,n-1)],this.data[this._idx(n,n)]=this.data[this._idx(n-1,n-1)];};Yl.prototype.get=function(t,e){var r=new Uint8Array(this.data.buffer),n=4*this._idx(t,e);return ("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(r[n],r[n+1],r[n+2])},Yl.prototype.getUnpackVector=function(){return "terrarium"===this.encoding?[256,1,1/256,32768]:[6553.6,25.6,.1,1e4]},Yl.prototype._idx=function(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data");return (e+1)*this.stride+(t+1)},Yl.prototype._unpackMapbox=function(t,e,r){return (256*t*256+256*e+r)/10-1e4},Yl.prototype._unpackTerrarium=function(t,e,r){return 256*t+e+r/256-32768},Yl.prototype.getPixels=function(){return new lo({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))},Yl.prototype.backfillBorder=function(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch");var n=e*this.dim,i=e*this.dim+this.dim,a=r*this.dim,o=r*this.dim+this.dim;switch(e){case-1:n=i-1;break;case 1:i=n+1;}switch(r){case-1:a=o-1;break;case 1:o=a+1;}for(var s=-e*this.dim,u=-r*this.dim,l=a;l<o;l++)for(var p=n;p<i;p++)this.data[this._idx(p,l)]=t.data[this._idx(p+s,l+u)];},In("DEMData",Yl);var $l=function(t){this._stringToNumber={},this._numberToString=[];for(var e=0;e<t.length;e++){var r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}};$l.prototype.encode=function(t){return this._stringToNumber[t]},$l.prototype.decode=function(t){return this._numberToString[t]};var Wl=function(t,e,r,n,i){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=n,this.properties=t.properties,this.id=i;},Ql={geometry:{configurable:!0}};Ql.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},Ql.geometry.set=function(t){this._geometry=t;},Wl.prototype.toJSON=function(){var t={geometry:this.geometry};for(var e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e]);return t},Object.defineProperties(Wl.prototype,Ql);var tp=function(){this.state={},this.stateChanges={},this.deletedStates={};};tp.prototype.updateState=function(t,e,r){var n=String(e);if(this.stateChanges[t]=this.stateChanges[t]||{},this.stateChanges[t][n]=this.stateChanges[t][n]||{},p(this.stateChanges[t][n],r),null===this.deletedStates[t])for(var i in this.deletedStates[t]={},this.state[t])i!==n&&(this.deletedStates[t][i]=null);else if(this.deletedStates[t]&&null===this.deletedStates[t][n])for(var a in this.deletedStates[t][n]={},this.state[t][n])r[a]||(this.deletedStates[t][n][a]=null);else for(var o in r){this.deletedStates[t]&&this.deletedStates[t][n]&&null===this.deletedStates[t][n][o]&&delete this.deletedStates[t][n][o];}},tp.prototype.removeFeatureState=function(t,e,r){if(!(null===this.deletedStates[t])){var n=String(e);if(this.deletedStates[t]=this.deletedStates[t]||{},r&&void 0!==e)null!==this.deletedStates[t][n]&&(this.deletedStates[t][n]=this.deletedStates[t][n]||{},this.deletedStates[t][n][r]=null);else if(void 0!==e){if(this.stateChanges[t]&&this.stateChanges[t][n])for(r in this.deletedStates[t][n]={},this.stateChanges[t][n])this.deletedStates[t][n][r]=null;else this.deletedStates[t][n]=null;}else this.deletedStates[t]=null;}},tp.prototype.getState=function(t,e){var r=String(e),n=this.state[t]||{},i=this.stateChanges[t]||{},a=p({},n[r],i[r]);if(null===this.deletedStates[t])return {};if(this.deletedStates[t]){var o=this.deletedStates[t][e];if(null===o)return {};for(var s in o)delete a[s];}return a},tp.prototype.initializeTileState=function(t,e){t.setFeatureState(this.state,e);},tp.prototype.coalesceChanges=function(t,e){var r={};for(var n in this.stateChanges){this.state[n]=this.state[n]||{};var i={};for(var a in this.stateChanges[n])this.state[n][a]||(this.state[n][a]={}),p(this.state[n][a],this.stateChanges[n][a]),i[a]=this.state[n][a];r[n]=i;}for(var o in this.deletedStates){this.state[o]=this.state[o]||{};var s={};if(null===this.deletedStates[o])for(var u in this.state[o])s[u]={},this.state[o][u]={};else for(var l in this.deletedStates[o]){if(null===this.deletedStates[o][l])this.state[o][l]={};else for(var c=0,h=Object.keys(this.deletedStates[o][l]);c<h.length;c+=1){var f=h[c];delete this.state[o][l][f];}s[l]=this.state[o][l];}r[o]=r[o]||{},p(r[o],s);}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(var y in t){t[y].setFeatureState(r,e);}};var ep=function(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new bn(Pa,16,0),this.grid3D=new bn(Pa,16,0),this.featureIndexArray=new Wi,this.promoteId=e;};function rp(t){for(var e=1/0,r=1/0,n=-1/0,i=-1/0,a=0,o=t;a<o.length;a+=1){var s=o[a];e=Math.min(e,s.x),r=Math.min(r,s.y),n=Math.max(n,s.x),i=Math.max(i,s.y);}return {minX:e,minY:r,maxX:n,maxY:i}}function np(t,e){return e-t}ep.prototype.insert=function(t,e,r,n,i,a){var o=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i);for(var s=a?this.grid3D:this.grid,u=0;u<e.length;u++){for(var l=e[u],p=[1/0,1/0,-1/0,-1/0],c=0;c<l.length;c++){var h=l[c];p[0]=Math.min(p[0],h.x),p[1]=Math.min(p[1],h.y),p[2]=Math.max(p[2],h.x),p[3]=Math.max(p[3],h.y);}p[0]<Pa&&p[1]<Pa&&p[2]>=0&&p[3]>=0&&s.insert(o,p[0],p[1],p[2],p[3]);}},ep.prototype.loadVTLayers=function(){return this.vtLayers||(this.vtLayers=new cs.VectorTile(new qs(this.rawTileData)).layers,this.sourceLayerCoder=new $l(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers},ep.prototype.query=function(t,e,r){var n=this;this.loadVTLayers();for(var a=t.params||{},o=Pa/t.tileSize/t.scale,s=Zr(a.filter),u=t.queryGeometry,l=t.queryPadding*o,p=rp(u),c=this.grid.query(p.minX-l,p.minY-l,p.maxX+l,p.maxY+l),h=rp(t.cameraQueryGeometry),f=this.grid3D.query(h.minX-l,h.minY-l,h.maxX+l,h.maxY+l,(function(e,r,n,a){return function(t,e,r,n,a){for(var o=0,s=t;o<s.length;o+=1){var u=s[o];if(e<=u.x&&r<=u.y&&n>=u.x&&a>=u.y)return !0}var l=[new i(e,r),new i(e,a),new i(n,a),new i(n,r)];if(t.length>2)for(var p=0,c=l;p<c.length;p+=1){if(Xa(t,c[p]))return !0}for(var h=0;h<t.length-1;h++){if(Za(t[h],t[h+1],l))return !0}return !1}(t.cameraQueryGeometry,e-l,r-l,n+l,a+l)})),y=0,d=f;y<d.length;y+=1){var m=d[y];c.push(m);}c.sort(np);for(var v,g={},x=function(i){var l=c[i];if(l!==v){v=l;var p=n.featureIndexArray.get(l),h=null;n.loadMatchingFeature(g,p.bucketIndex,p.sourceLayerIndex,p.featureIndex,s,a.layers,e,(function(e,i,a){h||(h=Ma(e));var s={};return void 0!==a&&(s=r.getState(i.sourceLayer||"_geojsonTileLayer",a)),i.queryIntersectsFeature(u,e,s,h,n.z,t.transform,o,t.pixelPosMatrix)}));}},b=0;b<c.length;b++)x(b);return g},ep.prototype.loadMatchingFeature=function(t,e,r,n,i,a,o,s){var u=this.bucketLayerIDs[e];if(!a||function(t,e){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return !0;return !1}(a,u)){var l=this.sourceLayerCoder.decode(r),p=this.vtLayers[l].feature(n);if(i(new Qn(this.tileID.overscaledZ),p))for(var c=this.getId(p,l),h=0;h<u.length;h++){var f=u[h];if(!(a&&a.indexOf(f)<0)){var y=o[f];if(y){var d=!s||s(p,y,c);if(d){var m=new Wl(p,this.z,this.x,this.y,c);m.layer=y.serialize();var v=t[f];void 0===v&&(v=t[f]=[]),v.push({featureIndex:n,feature:m,intersectionZ:d});}}}}}},ep.prototype.lookupSymbolFeatures=function(t,e,r,n,i,a){var o={};this.loadVTLayers();for(var s=Zr(n),u=0,l=t;u<l.length;u+=1){var p=l[u];this.loadMatchingFeature(o,e,r,p,s,i,a);}return o},ep.prototype.hasLayer=function(t){for(var e=0,r=this.bucketLayerIDs;e<r.length;e+=1)for(var n=0,i=r[e];n<i.length;n+=1){if(t===i[n])return !0}return !1},ep.prototype.getId=function(t,e){var r=t.id;if(this.promoteId){var n="string"==typeof this.promoteId?this.promoteId:this.promoteId[e];"boolean"==typeof(r=t.properties[n])&&(r=Number(r));}return r},In("FeatureIndex",ep,{omit:["rawTileData","sourceLayerCoder"]});var ip=function(t,e){this.tileID=t,this.uid=h(),this.uses=0,this.tileSize=e,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.expiredRequestCount=0,this.state="loading";};ip.prototype.registerFadeDuration=function(t){var e=t+this.timeAdded;e<L.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e);},ip.prototype.wasRequested=function(){return "errored"===this.state||"loaded"===this.state||"reloading"===this.state},ip.prototype.loadVectorData=function(t,e,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",t){for(var n in t.featureIndex&&(this.latestFeatureIndex=t.featureIndex,t.rawTileData?(this.latestRawTileData=t.rawTileData,this.latestFeatureIndex.rawTileData=t.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=t.collisionBoxArray,this.buckets=function(t,e){var r={};if(!e)return r;for(var n=function(){var t=a[i],n=t.layerIds.map((function(t){return e.getLayer(t)})).filter(Boolean);if(0!==n.length){t.layers=n,t.stateDependentLayerIds&&(t.stateDependentLayers=t.stateDependentLayerIds.map((function(t){return n.filter((function(e){return e.id===t}))[0]})));for(var o=0,s=n;o<s.length;o+=1){var u=s[o];r[u.id]=t;}}},i=0,a=t;i<a.length;i+=1)n();return r}(t.buckets,e.style),this.hasSymbolBuckets=!1,this.buckets){var i=this.buckets[n];if(i instanceof vl){if(this.hasSymbolBuckets=!0,!r)break;i.justReloaded=!0;}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(var a in this.buckets){var o=this.buckets[a];if(o instanceof vl&&o.hasRTLText){this.hasRTLText=!0,Wn.isLoading()||Wn.isLoaded()||"deferred"!==Yn()||$n();break}}for(var s in this.queryPadding=0,this.buckets){var u=this.buckets[s];this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(s).queryRadius(u));}t.imageAtlas&&(this.imageAtlas=t.imageAtlas),t.glyphAtlasImage&&(this.glyphAtlasImage=t.glyphAtlasImage);}else this.collisionBoxArray=new qi;},ip.prototype.unloadVectorData=function(){for(var t in this.buckets)this.buckets[t].destroy();this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded";},ip.prototype.getBucket=function(t){return this.buckets[t.id]},ip.prototype.upload=function(t){for(var e in this.buckets){var r=this.buckets[e];r.uploadPending()&&r.upload(t);}var n=t.gl;this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new Ml(t,this.imageAtlas.image,n.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new Ml(t,this.glyphAtlasImage,n.ALPHA),this.glyphAtlasImage=null);},ip.prototype.prepare=function(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture);},ip.prototype.queryRenderedFeatures=function(t,e,r,n,i,a,o,s,u){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:r,cameraQueryGeometry:n,scale:i,tileSize:this.tileSize,pixelPosMatrix:u,transform:o,params:a,queryPadding:this.queryPadding*s},t,e):{}},ip.prototype.querySourceFeatures=function(t,e){var r=this.latestFeatureIndex;if(r&&r.rawTileData){var n=r.loadVTLayers(),i=e?e.sourceLayer:"",a=n._geojsonTileLayer||n[i];if(a)for(var o=Zr(e&&e.filter),s=this.tileID.canonical,u=s.z,l=s.x,p=s.y,c={z:u,x:l,y:p},h=0;h<a.length;h++){var f=a.feature(h);if(o(new Qn(this.tileID.overscaledZ),f)){var y=r.getId(f,i),d=new Wl(f,u,l,p,y);d.tile=c,t.push(d);}}}},ip.prototype.hasData=function(){return "loaded"===this.state||"reloading"===this.state||"expired"===this.state},ip.prototype.patternsLoaded=function(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length},ip.prototype.setExpiryData=function(t){var e=this.expirationTime;if(t.cacheControl){var r=k(t.cacheControl);r["max-age"]&&(this.expirationTime=Date.now()+1e3*r["max-age"]);}else t.expires&&(this.expirationTime=new Date(t.expires).getTime());if(this.expirationTime){var n=Date.now(),i=!1;if(this.expirationTime>n)i=!1;else if(e)if(this.expirationTime<e)i=!0;else{var a=this.expirationTime-e;a?this.expirationTime=n+Math.max(a,3e4):i=!0;}else i=!0;i?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}},ip.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)},ip.prototype.setFeatureState=function(t,e){if(this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData&&0!==Object.keys(t).length){var r=this.latestFeatureIndex.loadVTLayers();for(var n in this.buckets){var i=this.buckets[n],a=i.layers[0].sourceLayer||"_geojsonTileLayer",o=r[a],s=t[a];o&&s&&0!==Object.keys(s).length&&(i.update(s,o,this.imageAtlas&&this.imageAtlas.patternPositions||{}),e&&e.style&&(this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(n).queryRadius(i))));}}},ip.prototype.holdingForFade=function(){return void 0!==this.symbolFadeHoldUntil},ip.prototype.symbolFadeFinished=function(){return !this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<L.now()},ip.prototype.clearFadeHold=function(){this.symbolFadeHoldUntil=void 0;},ip.prototype.setHoldDuration=function(t){this.symbolFadeHoldUntil=L.now()+t;},ip.prototype.setDependencies=function(t,e){for(var r={},n=0,i=e;n<i.length;n+=1){r[i[n]]=!0;}this.dependencies[t]=r;},ip.prototype.hasDependency=function(t,e){for(var r=0,n=t;r<n.length;r+=1){var i=n[r],a=this.dependencies[i];if(a)for(var o=0,s=e;o<s.length;o+=1){if(a[s[o]])return !0}}return !1};var ap=self.performance,op=function(t){this._marks={start:[t.url,"start"].join("#"),end:[t.url,"end"].join("#"),measure:t.url.toString()},ap.mark(this._marks.start);};op.prototype.finish=function(){ap.mark(this._marks.end);var t=ap.getEntriesByName(this._marks.measure);return 0===t.length&&(ap.measure(this._marks.measure,this._marks.start,this._marks.end),t=ap.getEntriesByName(this._marks.measure),ap.clearMarks(this._marks.start),ap.clearMarks(this._marks.end),ap.clearMeasures(this._marks.measure)),t},t.Actor=Fl,t.AlphaImage=uo,t.CanonicalTileID=Zl,t.CollisionBoxArray=qi,t.Color=te,t.DEMData=Yl,t.DataConstantProperty=ui,t.DictionaryCoder=$l,t.EXTENT=Pa,t.ErrorEvent=Bt,t.EvaluationParameters=Qn,t.Event=Ct,t.Evented=Pt,t.FeatureIndex=ep,t.FillBucket=Wo,t.FillExtrusionBucket=ds,t.ImageAtlas=du,t.ImagePosition=fu,t.LineBucket=Is,t.LngLat=Dl,t.LngLatBounds=Ol,t.MercatorCoordinate=Xl,t.ONE_EM=Rs,t.OverscaledTileID=Jl,t.Point=i,t.Point$1=i,t.ProgramConfiguration=Ia,t.Properties=fi,t.Protobuf=qs,t.RGBAImage=lo,t.RequestManager=N,t.RequestPerformance=op,t.ResourceType=mt,t.SegmentVector=ta,t.SourceFeatureState=tp,t.StructArrayLayout1ui2=Di,t.StructArrayLayout2i4=bi,t.StructArrayLayout2ui4=Oi,t.StructArrayLayout3ui6=Li,t.StructArrayLayout4i8=_i,t.SymbolBucket=vl,t.Texture=Ml,t.Tile=ip,t.Transitionable=ri,t.Uniform1f=fa,t.Uniform1i=ha,t.Uniform2f=ya,t.Uniform3f=da,t.Uniform4f=ma,t.UniformColor=va,t.UniformMatrix4f=xa,t.UnwrappedTileID=Gl,t.ValidationError=Et,t.WritingMode=mu,t.ZoomHistory=En,t.addDynamicAttributes=fl,t.asyncAll=function(t,e,r){if(!t.length)return r(null,[]);var n=t.length,i=new Array(t.length),a=null;t.forEach((function(t,o){e(t,(function(t,e){t&&(a=t),i[o]=e,0==--n&&r(a,i);}));}));},t.bezier=o,t.bindAll=d,t.browser=L,t.cacheEntryPossiblyAdded=function(t){++yt>st&&(t.getActor().send("enforceCacheSizeLimit",ot),yt=0);},t.clamp=u,t.clearTileCache=function(t){var e=self.caches.delete(at);t&&e.catch(t).then((function(){return t()}));},t.clone=function(t){var e=new Wa(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=x,t.config=O,t.create=function(){var t=new Wa(16);return Wa!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$1=function(){var t=new Wa(9);return Wa!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t},t.create$2=function(){var t=new Wa(4);return Wa!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t},t.createCommonjsModule=e,t.createExpression=Mr,t.createLayout=gi,t.createStyleLayer=function(t){return "custom"===t.type?new Il(t):new zl[t.type](t)},t.deepEqual=function t(e,r){if(Array.isArray(e)){if(!Array.isArray(r)||e.length!==r.length)return !1;for(var n=0;n<e.length;n++)if(!t(e[n],r[n]))return !1;return !0}if("object"==typeof e&&null!==e&&null!==r){if("object"!=typeof r)return !1;if(Object.keys(e).length!==Object.keys(r).length)return !1;for(var i in e)if(!t(e[i],r[i]))return !1;return !0}return e===r},t.ease=s,t.emitValidationErrors=xn,t.endsWith=m,t.enforceCacheSizeLimit=function(t){lt(),W&&W.then((function(e){e.keys().then((function(r){for(var n=0;n<r.length-t;n++)e.delete(r[n]);}));}));},t.evaluateSizeForFeature=Vu,t.evaluateSizeForZoom=Fu,t.evaluateVariableOffset=nl,t.evented=Hn,t.extend=p,t.featureFilter=Zr,t.filterObject=g,t.fromRotation=function(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.getAnchorAlignment=Cu,t.getAnchorJustification=il,t.getArrayBuffer=_t,t.getImage=kt,t.getJSON=function(t,e){return bt(p(t,{type:"json"}),e)},t.getRTLTextPluginStatus=Yn,t.getReferrer=gt,t.getVideo=function(t,e){var r,n,i=self.document.createElement("video");i.muted=!0,i.onloadstart=function(){e(null,i);};for(var a=0;a<t.length;a++){var o=self.document.createElement("source");r=t[a],n=void 0,(n=self.document.createElement("a")).href=r,(n.protocol!==self.document.location.protocol||n.host!==self.document.location.host)&&(i.crossOrigin="Anonymous"),o.src=t[a],i.appendChild(o);}return {cancel:function(){}}},t.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.invert=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],l=e[7],p=e[8],c=e[9],h=e[10],f=e[11],y=e[12],d=e[13],m=e[14],v=e[15],g=r*s-n*o,x=r*u-i*o,b=r*l-a*o,_=n*u-i*s,w=n*l-a*s,A=i*l-a*u,S=p*d-c*y,k=p*m-h*y,I=p*v-f*y,z=c*m-h*d,C=c*v-f*d,B=h*v-f*m,P=g*B-x*C+b*z+_*I-w*k+A*S;return P?(P=1/P,t[0]=(s*B-u*C+l*z)*P,t[1]=(i*C-n*B-a*z)*P,t[2]=(d*A-m*w+v*_)*P,t[3]=(h*w-c*A-f*_)*P,t[4]=(u*I-o*B-l*k)*P,t[5]=(r*B-i*I+a*k)*P,t[6]=(m*b-y*A-v*x)*P,t[7]=(p*A-h*b+f*x)*P,t[8]=(o*C-s*I+l*S)*P,t[9]=(n*I-r*C-a*S)*P,t[10]=(y*w-d*b+v*g)*P,t[11]=(c*b-p*w-f*g)*P,t[12]=(s*k-o*z-u*S)*P,t[13]=(r*z-n*k+i*S)*P,t[14]=(d*x-y*_-m*g)*P,t[15]=(p*_-c*x+h*g)*P,t):null},t.isChar=Mn,t.isGoongURL=K,t.keysDifference=function(t,e){var r=[];for(var n in t)n in e||r.push(n);return r},t.makeRequest=bt,t.mapObject=v,t.mercatorXfromLng=jl,t.mercatorYfromLat=ql,t.mercatorZfromAltitude=Nl,t.multiply=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],d=e[12],m=e[13],v=e[14],g=e[15],x=r[0],b=r[1],_=r[2],w=r[3];return t[0]=x*n+b*s+_*c+w*d,t[1]=x*i+b*u+_*h+w*m,t[2]=x*a+b*l+_*f+w*v,t[3]=x*o+b*p+_*y+w*g,x=r[4],b=r[5],_=r[6],w=r[7],t[4]=x*n+b*s+_*c+w*d,t[5]=x*i+b*u+_*h+w*m,t[6]=x*a+b*l+_*f+w*v,t[7]=x*o+b*p+_*y+w*g,x=r[8],b=r[9],_=r[10],w=r[11],t[8]=x*n+b*s+_*c+w*d,t[9]=x*i+b*u+_*h+w*m,t[10]=x*a+b*l+_*f+w*v,t[11]=x*o+b*p+_*y+w*g,x=r[12],b=r[13],_=r[14],w=r[15],t[12]=x*n+b*s+_*c+w*d,t[13]=x*i+b*u+_*h+w*m,t[14]=x*a+b*l+_*f+w*v,t[15]=x*o+b*p+_*y+w*g,t},t.mvt=cs,t.number=ze,t.offscreenCanvasSupported=dt,t.ortho=function(t,e,r,n,i,a,o){var s=1/(e-r),u=1/(n-i),l=1/(a-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(e+r)*s,t[13]=(i+n)*u,t[14]=(o+a)*l,t[15]=1,t},t.parseGlyphPBF=function(t){return new qs(t).readFields(su,[])},t.pbf=qs,t.performSymbolLayout=function(t,e,r,n,a,o){t.createArrays();var s=512*t.overscaling;t.tilePixelRatio=Pa/s,t.compareText={},t.iconsNeedLinear=!1;var u=t.layers[0].layout,l=t.layers[0]._unevaluatedLayout._values,p={};if("composite"===t.textSizeData.kind){var c=t.textSizeData,h=c.minZoom,f=c.maxZoom;p.compositeTextSizes=[l["text-size"].possiblyEvaluate(new Qn(h)),l["text-size"].possiblyEvaluate(new Qn(f))];}if("composite"===t.iconSizeData.kind){var y=t.iconSizeData,d=y.minZoom,m=y.maxZoom;p.compositeIconSizes=[l["icon-size"].possiblyEvaluate(new Qn(d)),l["icon-size"].possiblyEvaluate(new Qn(m))];}p.layoutTextSize=l["text-size"].possiblyEvaluate(new Qn(t.zoom+1)),p.layoutIconSize=l["icon-size"].possiblyEvaluate(new Qn(t.zoom+1)),p.textMaxSize=l["text-size"].possiblyEvaluate(new Qn(18));for(var v=u.get("text-line-height")*Rs,g="map"===u.get("text-rotation-alignment")&&"point"!==u.get("symbol-placement"),x=u.get("text-keep-upright"),b=u.get("text-size"),w=function(){var o=S[A],s=u.get("text-font").evaluate(o,{}).join(","),l=b.evaluate(o,{}),c=p.layoutTextSize.evaluate(o,{}),h=p.layoutIconSize.evaluate(o,{}),f={horizontal:{},vertical:void 0},y=o.text,d=[0,0];if(y){var m=y.toString(),w=u.get("text-letter-spacing").evaluate(o,{})*Rs,k=function(t){for(var e=0,r=t;e<r.length;e+=1){if(!Fn(r[e].charCodeAt(0)))return !1}return !0}(m)?w:0,I=u.get("text-anchor").evaluate(o,{}),z=u.get("text-variable-anchor");if(!z){var C=u.get("text-radial-offset").evaluate(o,{});d=C?nl(I,[C*Rs,rl]):u.get("text-offset").evaluate(o,{}).map((function(t){return t*Rs}));}var B=g?"center":u.get("text-justify").evaluate(o,{}),P=u.get("symbol-placement"),T="point"===P?u.get("text-max-width").evaluate(o,{})*Rs:0,E=function(){t.allowVerticalPlacement&&Vn(m)&&(f.vertical=bu(y,e,r,a,s,T,v,I,"left",k,d,mu.vertical,!0,P,c,l));};if(!g&&z){for(var M="auto"===B?z.map((function(t){return il(t)})):[B],V=!1,F=0;F<M.length;F++){var L=M[F];if(!f.horizontal[L])if(V)f.horizontal[L]=f.horizontal[0];else{var O=bu(y,e,r,a,s,T,v,"center",L,k,d,mu.horizontal,!1,P,c,l);O&&(f.horizontal[L]=O,V=1===O.positionedLines.length);}}E();}else{"auto"===B&&(B=il(I));var D=bu(y,e,r,a,s,T,v,I,B,k,d,mu.horizontal,!1,P,c,l);D&&(f.horizontal[B]=D),E(),Vn(m)&&g&&x&&(f.vertical=bu(y,e,r,a,s,T,v,I,B,k,d,mu.vertical,!1,P,c,l));}}var R=void 0,U=!1;if(o.icon&&o.icon.name){var j=n[o.icon.name];j&&(R=function(t,e,r){var n=Cu(r),i=n.horizontalAlign,a=n.verticalAlign,o=e[0],s=e[1],u=o-t.displaySize[0]*i,l=u+t.displaySize[0],p=s-t.displaySize[1]*a;return {image:t,top:p,bottom:p+t.displaySize[1],left:u,right:l}}(a[o.icon.name],u.get("icon-offset").evaluate(o,{}),u.get("icon-anchor").evaluate(o,{})),U=j.sdf,void 0===t.sdfIcons?t.sdfIcons=j.sdf:t.sdfIcons!==j.sdf&&_("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),j.pixelRatio!==t.pixelRatio?t.iconsNeedLinear=!0:0!==u.get("icon-rotate").constantOr(1)&&(t.iconsNeedLinear=!0));}var q=ul(f.horizontal)||f.vertical;t.iconsInText=!!q&&q.iconsInText,(q||R)&&function(t,e,r,n,a,o,s,u,l,p){var c=o.textMaxSize.evaluate(e,{});void 0===c&&(c=s);var h,f=t.layers[0].layout,y=f.get("icon-offset").evaluate(e,{}),d=ul(r.horizontal),m=s/24,v=t.tilePixelRatio*m,g=t.tilePixelRatio*c/24,x=t.tilePixelRatio*u,b=t.tilePixelRatio*f.get("symbol-spacing"),w=f.get("text-padding")*t.tilePixelRatio,A=f.get("icon-padding")*t.tilePixelRatio,S=f.get("text-max-angle")/180*Math.PI,k="map"===f.get("text-rotation-alignment")&&"point"!==f.get("symbol-placement"),I="map"===f.get("icon-rotation-alignment")&&"point"!==f.get("symbol-placement"),z=f.get("symbol-placement"),C=b/2,B=f.get("icon-text-fit");n&&"none"!==B&&(t.allowVerticalPlacement&&r.vertical&&(h=Pu(n,r.vertical,B,f.get("icon-text-fit-padding"),y,m)),d&&(n=Pu(n,d,B,f.get("icon-text-fit-padding"),y,m)));var P=function(i,s){s.x<0||s.x>=Pa||s.y<0||s.y>=Pa||function(t,e,r,n,i,a,o,s,u,l,p,c,h,f,y,d,m,v,g,x,b,w,A){var S,k,I,z,C,B=t.addToLineVertexArray(e,r),P=0,T=0,E=0,M=0,V=-1,F=-1,L={},O=ia(""),D=0,R=0;void 0===s._unevaluatedLayout.getValue("text-radial-offset")?(S=s.layout.get("text-offset").evaluate(b,{}).map((function(t){return t*Rs})),D=S[0],R=S[1]):(D=s.layout.get("text-radial-offset").evaluate(b,{})*Rs,R=rl);if(t.allowVerticalPlacement&&n.vertical){var U=s.layout.get("text-rotate").evaluate(b,{})+90,j=n.vertical;z=new Hu(u,r,e,l,p,c,j,h,f,y,t.overscaling,U),o&&(C=new Hu(u,r,e,l,p,c,o,m,v,y,t.overscaling,U));}if(i){var q=s.layout.get("icon-rotate").evaluate(b,{}),N="none"!==s.layout.get("icon-text-fit"),K=Ku(i,q,A,N),X=o?Ku(o,q,A,N):void 0;I=new Hu(u,r,e,l,p,c,i,m,v,!1,t.overscaling,q),P=4*K.length;var Z=t.iconSizeData,G=null;"source"===Z.kind?(G=[Eu*s.layout.get("icon-size").evaluate(b,{})])[0]>ol&&_(t.layerIds[0]+': Value for "icon-size" is >= '+al+'. Reduce your "icon-size".'):"composite"===Z.kind&&((G=[Eu*w.compositeIconSizes[0].evaluate(b,{}),Eu*w.compositeIconSizes[1].evaluate(b,{})])[0]>ol||G[1]>ol)&&_(t.layerIds[0]+': Value for "icon-size" is >= '+al+'. Reduce your "icon-size".'),t.addSymbols(t.icon,K,G,x,g,b,!1,e,B.lineStartIndex,B.lineLength,-1),V=t.icon.placedSymbolArray.length-1,X&&(T=4*X.length,t.addSymbols(t.icon,X,G,x,g,b,mu.vertical,e,B.lineStartIndex,B.lineLength,-1),F=t.icon.placedSymbolArray.length-1);}for(var J in n.horizontal){var H=n.horizontal[J];if(!k){O=ia(H.text);var Y=s.layout.get("text-rotate").evaluate(b,{});k=new Hu(u,r,e,l,p,c,H,h,f,y,t.overscaling,Y);}var $=1===H.positionedLines.length;if(E+=sl(t,e,H,a,s,y,b,d,B,n.vertical?mu.horizontal:mu.horizontalOnly,$?Object.keys(n.horizontal):[J],L,V,w),$)break}n.vertical&&(M+=sl(t,e,n.vertical,a,s,y,b,d,B,mu.vertical,["vertical"],L,F,w));var W=k?k.boxStartIndex:t.collisionBoxArray.length,Q=k?k.boxEndIndex:t.collisionBoxArray.length,tt=z?z.boxStartIndex:t.collisionBoxArray.length,et=z?z.boxEndIndex:t.collisionBoxArray.length,rt=I?I.boxStartIndex:t.collisionBoxArray.length,nt=I?I.boxEndIndex:t.collisionBoxArray.length,it=C?C.boxStartIndex:t.collisionBoxArray.length,at=C?C.boxEndIndex:t.collisionBoxArray.length;t.glyphOffsetArray.length>=vl.MAX_GLYPHS&&_("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907");t.symbolInstances.emplaceBack(e.x,e.y,L.right>=0?L.right:-1,L.center>=0?L.center:-1,L.left>=0?L.left:-1,L.vertical||-1,V,F,O,W,Q,tt,et,rt,nt,it,at,l,E,M,P,T,0,h,D,R);}(t,s,i,r,n,a,h,t.layers[0],t.collisionBoxArray,e.index,e.sourceLayerIndex,t.index,v,w,k,l,x,A,I,y,e,o,p);};if("line"===z)for(var T=0,E=function(t,e,r,n,a){for(var o=[],s=0;s<t.length;s++)for(var u=t[s],l=void 0,p=0;p<u.length-1;p++){var c=u[p],h=u[p+1];c.x<e&&h.x<e||(c.x<e?c=new i(e,c.y+(h.y-c.y)*((e-c.x)/(h.x-c.x)))._round():h.x<e&&(h=new i(e,c.y+(h.y-c.y)*((e-c.x)/(h.x-c.x)))._round()),c.y<r&&h.y<r||(c.y<r?c=new i(c.x+(h.x-c.x)*((r-c.y)/(h.y-c.y)),r)._round():h.y<r&&(h=new i(c.x+(h.x-c.x)*((r-c.y)/(h.y-c.y)),r)._round()),c.x>=n&&h.x>=n||(c.x>=n?c=new i(n,c.y+(h.y-c.y)*((n-c.x)/(h.x-c.x)))._round():h.x>=n&&(h=new i(n,c.y+(h.y-c.y)*((n-c.x)/(h.x-c.x)))._round()),c.y>=a&&h.y>=a||(c.y>=a?c=new i(c.x+(h.x-c.x)*((a-c.y)/(h.y-c.y)),a)._round():h.y>=a&&(h=new i(c.x+(h.x-c.x)*((a-c.y)/(h.y-c.y)),a)._round()),l&&c.equals(l[l.length-1])||(l=[c],o.push(l)),l.push(h)))));}return o}(e.geometry,0,0,Pa,Pa);T<E.length;T+=1)for(var M=E[T],V=qu(M,b,S,r.vertical||d,n,24,g,t.overscaling,Pa),F=0,L=V;F<L.length;F+=1){var O=L[F],D=d;D&&ll(t,D.text,C,O)||P(M,O);}else if("line-center"===z)for(var R=0,U=e.geometry;R<U.length;R+=1){var j=U[R];if(j.length>1){var q=ju(j,S,r.vertical||d,n,24,g);q&&P(j,q);}}else if("Polygon"===e.type)for(var N=0,K=Jo(e.geometry,0);N<K.length;N+=1){var X=K[N],Z=Wu(X,16);P(X[0],new Tu(Z.x,Z.y,0));}else if("LineString"===e.type)for(var G=0,J=e.geometry;G<J.length;G+=1){var H=J[G];P(H,new Tu(H[0].x,H[0].y,0));}else if("Point"===e.type)for(var Y=0,$=e.geometry;Y<$.length;Y+=1)for(var W=$[Y],Q=0,tt=W;Q<tt.length;Q+=1){var et=tt[Q];P([et],new Tu(et.x,et.y,0));}}(t,o,f,R,n,p,c,h,d,U);},A=0,S=t.features;A<S.length;A+=1)w();o&&t.generateCollisionDebugBuffers();},t.perspective=function(t,e,r,n,i){var a,o=1/Math.tan(e/2);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(a=1/(n-i),t[10]=(i+n)*a,t[14]=2*i*n*a):(t[10]=-1,t[14]=-2*n),t},t.pick=function(t,e){for(var r={},n=0;n<e.length;n++){var i=e[n];i in t&&(r[i]=t[i]);}return r},t.plugin=Wn,t.polygonIntersectsPolygon=La,t.postMapLoadEvent=it,t.postTurnstileEvent=rt,t.potpack=cu,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.register=In,t.registerForPluginStateChange=function(t){return t({pluginStatus:Xn,pluginURL:Zn}),Hn.on("pluginStateChange",t),t},t.rotate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=Math.sin(r),u=Math.cos(r);return t[0]=n*u+a*s,t[1]=i*u+o*s,t[2]=n*-s+a*u,t[3]=i*-s+o*u,t},t.rotateX=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[4],o=e[5],s=e[6],u=e[7],l=e[8],p=e[9],c=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*i+l*n,t[5]=o*i+p*n,t[6]=s*i+c*n,t[7]=u*i+h*n,t[8]=l*i-a*n,t[9]=p*i-o*n,t[10]=c*i-s*n,t[11]=h*i-u*n,t},t.rotateZ=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],o=e[1],s=e[2],u=e[3],l=e[4],p=e[5],c=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i+l*n,t[1]=o*i+p*n,t[2]=s*i+c*n,t[3]=u*i+h*n,t[4]=l*i-a*n,t[5]=p*i-o*n,t[6]=c*i-s*n,t[7]=h*i-u*n,t},t.scale=function(t,e,r){var n=r[0],i=r[1],a=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.setCacheLimits=function(t,e){ot=t,st=e;},t.setRTLTextPlugin=function(t,e,r){if(void 0===r&&(r=!1),Xn===jn||Xn===qn||Xn===Nn)throw new Error("setRTLTextPlugin cannot be called multiple times.");Zn=L.resolveURL(t),Xn=jn,Kn=e,Jn(),r||$n();},t.sphericalToCartesian=function(t){var e=t[0],r=t[1],n=t[2];return r+=90,r*=Math.PI/180,n*=Math.PI/180,{x:e*Math.cos(r)*Math.sin(n),y:e*Math.sin(r)*Math.sin(n),z:e*Math.cos(n)}},t.styleSpec=Tt,t.symbolSize=Lu,t.transformMat3=function(t,e,r){var n=e[0],i=e[1],a=e[2];return t[0]=n*r[0]+i*r[3]+a*r[6],t[1]=n*r[1]+i*r[4]+a*r[7],t[2]=n*r[2]+i*r[5]+a*r[8],t},t.transformMat4=eo,t.translate=function(t,e,r){var n,i,a,o,s,u,l,p,c,h,f,y,d=r[0],m=r[1],v=r[2];return e===t?(t[12]=e[0]*d+e[4]*m+e[8]*v+e[12],t[13]=e[1]*d+e[5]*m+e[9]*v+e[13],t[14]=e[2]*d+e[6]*m+e[10]*v+e[14],t[15]=e[3]*d+e[7]*m+e[11]*v+e[15]):(n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],l=e[6],p=e[7],c=e[8],h=e[9],f=e[10],y=e[11],t[0]=n,t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=u,t[6]=l,t[7]=p,t[8]=c,t[9]=h,t[10]=f,t[11]=y,t[12]=n*d+s*m+c*v+e[12],t[13]=i*d+u*m+h*v+e[13],t[14]=a*d+l*m+f*v+e[14],t[15]=o*d+p*m+y*v+e[15]),t},t.triggerPluginCompletionEvent=Gn,t.uniqueId=h,t.validateCustomStyleLayer=function(t){var e=[],r=t.id;return void 0===r&&e.push({message:"layers."+r+': missing required property "id"'}),void 0===t.render&&e.push({message:"layers."+r+': missing required method "render"'}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:"layers."+r+': property "renderingMode" must be either "2d" or "3d"'}),e},t.validateLight=mn,t.validateStyle=dn,t.values=function(t){var e=[];for(var r in t)e.push(t[r]);return e},t.vectorTile=cs,t.version="1.0.2",t.warnOnce=_,t.webpSupported=D,t.window=self,t.wrap=l;}));

define(["./shared"],(function(e){"use strict";function t(e){var r=typeof e;if("number"===r||"boolean"===r||"string"===r||null==e)return JSON.stringify(e);if(Array.isArray(e)){for(var i="[",o=0,n=e;o<n.length;o+=1){i+=t(n[o])+",";}return i+"]"}for(var a=Object.keys(e).sort(),s="{",l=0;l<a.length;l++)s+=JSON.stringify(a[l])+":"+t(e[a[l]])+",";return s+"}"}function r(r){for(var i="",o=0,n=e.refProperties;o<n.length;o+=1){i+="/"+t(r[n[o]]);}return i}var i=function(e){this.keyCache={},e&&this.replace(e);};i.prototype.replace=function(e){this._layerConfigs={},this._layers={},this.update(e,[]);},i.prototype.update=function(t,i){for(var o=this,n=0,a=t;n<a.length;n+=1){var s=a[n];this._layerConfigs[s.id]=s;var l=this._layers[s.id]=e.createStyleLayer(s);l._featureFilter=e.featureFilter(l.filter),this.keyCache[s.id]&&delete this.keyCache[s.id];}for(var u=0,h=i;u<h.length;u+=1){var c=h[u];delete this.keyCache[c],delete this._layerConfigs[c],delete this._layers[c];}this.familiesBySource={};for(var p=0,f=function(e,t){for(var i={},o=0;o<e.length;o++){var n=t&&t[e[o].id]||r(e[o]);t&&(t[e[o].id]=n);var a=i[n];a||(a=i[n]=[]),a.push(e[o]);}var s=[];for(var l in i)s.push(i[l]);return s}(e.values(this._layerConfigs),this.keyCache);p<f.length;p+=1){var d=f[p].map((function(e){return o._layers[e.id]})),g=d[0];if("none"!==g.visibility){var m=g.source||"",v=this.familiesBySource[m];v||(v=this.familiesBySource[m]={});var y=g.sourceLayer||"_geojsonTileLayer",x=v[y];x||(x=v[y]=[]),x.push(d);}}};var o=function(t){var r={},i=[];for(var o in t){var n=t[o],a=r[o]={};for(var s in n){var l=n[+s];if(l&&0!==l.bitmap.width&&0!==l.bitmap.height){var u={x:0,y:0,w:l.bitmap.width+2,h:l.bitmap.height+2};i.push(u),a[s]={rect:u,metrics:l.metrics};}}}var h=e.potpack(i),c=h.w,p=h.h,f=new e.AlphaImage({width:c||1,height:p||1});for(var d in t){var g=t[d];for(var m in g){var v=g[+m];if(v&&0!==v.bitmap.width&&0!==v.bitmap.height){var y=r[d][m].rect;e.AlphaImage.copy(v.bitmap,f,{x:0,y:0},{x:y.x+1,y:y.y+1},v.bitmap);}}}this.image=f,this.positions=r;};e.register("GlyphAtlas",o);var n=function(t){this.tileID=new e.OverscaledTileID(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.uid=t.uid,this.zoom=t.zoom,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming,this.returnDependencies=!!t.returnDependencies,this.promoteId=t.promoteId;};function a(t,r,i){for(var o=new e.EvaluationParameters(r),n=0,a=t;n<a.length;n+=1){a[n].recalculate(o,i);}}function s(t,r){var i=e.getArrayBuffer(t.request,(function(t,i,o,n){t?r(t):i&&r(null,{vectorTile:new e.vectorTile.VectorTile(new e.pbf(i)),rawData:i,cacheControl:o,expires:n});}));return function(){i.cancel(),r();}}n.prototype.parse=function(t,r,i,n,s){var l=this;this.status="parsing",this.data=t,this.collisionBoxArray=new e.CollisionBoxArray;var u=new e.DictionaryCoder(Object.keys(t.layers).sort()),h=new e.FeatureIndex(this.tileID,this.promoteId);h.bucketLayerIDs=[];var c,p,f,d,g={},m={featureIndex:h,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:i},v=r.familiesBySource[this.source];for(var y in v){var x=t.layers[y];if(x){1===x.version&&e.warnOnce('Vector tile source "'+this.source+'" layer "'+y+'" does not use vector tile spec v2 and therefore may have some rendering errors.');for(var w=u.encode(y),S=[],M=0;M<x.length;M++){var I=x.feature(M),b=h.getId(I,y);S.push({feature:I,id:b,index:M,sourceLayerIndex:w});}for(var P=0,_=v[y];P<_.length;P+=1){var k=_[P],T=k[0];if(!(T.minzoom&&this.zoom<Math.floor(T.minzoom)))if(!(T.maxzoom&&this.zoom>=T.maxzoom))if("none"!==T.visibility)a(k,this.zoom,i),(g[T.id]=T.createBucket({index:h.bucketLayerIDs.length,layers:k,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:w,sourceID:this.source})).populate(S,m),h.bucketLayerIDs.push(k.map((function(e){return e.id})));}}}var C=e.mapObject(m.glyphDependencies,(function(e){return Object.keys(e).map(Number)}));Object.keys(C).length?n.send("getGlyphs",{uid:this.uid,stacks:C},(function(e,t){c||(c=e,p=t,O.call(l));})):p={};var D=Object.keys(m.iconDependencies);D.length?n.send("getImages",{icons:D,source:this.source,tileID:this.tileID,type:"icons"},(function(e,t){c||(c=e,f=t,O.call(l));})):f={};var L=Object.keys(m.patternDependencies);function O(){if(c)return s(c);if(p&&f&&d){var t=new o(p),r=new e.ImageAtlas(f,d);for(var n in g){var l=g[n];l instanceof e.SymbolBucket?(a(l.layers,this.zoom,i),e.performSymbolLayout(l,p,t.positions,f,r.iconPositions,this.showCollisionBoxes)):l.hasPattern&&(l instanceof e.LineBucket||l instanceof e.FillBucket||l instanceof e.FillExtrusionBucket)&&(a(l.layers,this.zoom,i),l.addFeatures(m,r.patternPositions));}this.status="done",s(null,{buckets:e.values(g).filter((function(e){return !e.isEmpty()})),featureIndex:h,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,imageAtlas:r,glyphMap:this.returnDependencies?p:null,iconMap:this.returnDependencies?f:null,glyphPositions:this.returnDependencies?t.positions:null});}}L.length?n.send("getImages",{icons:L,source:this.source,tileID:this.tileID,type:"patterns"},(function(e,t){c||(c=e,d=t,O.call(l));})):d={},O.call(this);};var l=function(e,t,r,i){this.actor=e,this.layerIndex=t,this.availableImages=r,this.loadVectorData=i||s,this.loading={},this.loaded={};};l.prototype.loadTile=function(t,r){var i=this,o=t.uid;this.loading||(this.loading={});var a=!!(t&&t.request&&t.request.collectResourceTiming)&&new e.RequestPerformance(t.request),s=this.loading[o]=new n(t);s.abort=this.loadVectorData(t,(function(t,n){if(delete i.loading[o],t||!n)return s.status="done",i.loaded[o]=s,r(t);var l=n.rawData,u={};n.expires&&(u.expires=n.expires),n.cacheControl&&(u.cacheControl=n.cacheControl);var h={};if(a){var c=a.finish();c&&(h.resourceTiming=JSON.parse(JSON.stringify(c)));}s.vectorTile=n.vectorTile,s.parse(n.vectorTile,i.layerIndex,i.availableImages,i.actor,(function(t,i){if(t||!i)return r(t);r(null,e.extend({rawTileData:l.slice(0)},i,u,h));})),i.loaded=i.loaded||{},i.loaded[o]=s;}));},l.prototype.reloadTile=function(e,t){var r=this,i=this.loaded,o=e.uid,n=this;if(i&&i[o]){var a=i[o];a.showCollisionBoxes=e.showCollisionBoxes;var s=function(e,i){var o=a.reloadCallback;o&&(delete a.reloadCallback,a.parse(a.vectorTile,n.layerIndex,r.availableImages,n.actor,o)),t(e,i);};"parsing"===a.status?a.reloadCallback=s:"done"===a.status&&(a.vectorTile?a.parse(a.vectorTile,this.layerIndex,this.availableImages,this.actor,s):s());}},l.prototype.abortTile=function(e,t){var r=this.loading,i=e.uid;r&&r[i]&&r[i].abort&&(r[i].abort(),delete r[i]),t();},l.prototype.removeTile=function(e,t){var r=this.loaded,i=e.uid;r&&r[i]&&delete r[i],t();};var u=e.window.ImageBitmap,h=function(){this.loaded={};};h.prototype.loadTile=function(t,r){var i=t.uid,o=t.encoding,n=t.rawImageData,a=u&&n instanceof u?this.getImageData(n):n,s=new e.DEMData(i,a,o);this.loaded=this.loaded||{},this.loaded[i]=s,r(null,s);},h.prototype.getImageData=function(t){this.offscreenCanvas&&this.offscreenCanvasContext||(this.offscreenCanvas=new OffscreenCanvas(t.width,t.height),this.offscreenCanvasContext=this.offscreenCanvas.getContext("2d")),this.offscreenCanvas.width=t.width,this.offscreenCanvas.height=t.height,this.offscreenCanvasContext.drawImage(t,0,0,t.width,t.height);var r=this.offscreenCanvasContext.getImageData(-1,-1,t.width+2,t.height+2);return this.offscreenCanvasContext.clearRect(0,0,this.offscreenCanvas.width,this.offscreenCanvas.height),new e.RGBAImage({width:r.width,height:r.height},r.data)},h.prototype.removeTile=function(e){var t=this.loaded,r=e.uid;t&&t[r]&&delete t[r];};var c={RADIUS:6378137,FLATTENING:1/298.257223563,POLAR_RADIUS:6356752.3142};function p(e){var t=0;if(e&&e.length>0){t+=Math.abs(f(e[0]));for(var r=1;r<e.length;r++)t-=Math.abs(f(e[r]));}return t}function f(e){var t,r,i,o,n,a,s=0,l=e.length;if(l>2){for(a=0;a<l;a++)a===l-2?(i=l-2,o=l-1,n=0):a===l-1?(i=l-1,o=0,n=1):(i=a,o=a+1,n=a+2),t=e[i],r=e[o],s+=(d(e[n][0])-d(t[0]))*Math.sin(d(r[1]));s=s*c.RADIUS*c.RADIUS/2;}return s}function d(e){return e*Math.PI/180}var g={geometry:function e(t){var r,i=0;switch(t.type){case"Polygon":return p(t.coordinates);case"MultiPolygon":for(r=0;r<t.coordinates.length;r++)i+=p(t.coordinates[r]);return i;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0;case"GeometryCollection":for(r=0;r<t.geometries.length;r++)i+=e(t.geometries[r]);return i}},ring:f},m=function e(t,r){switch(t&&t.type||null){case"FeatureCollection":return t.features=t.features.map(v(e,r)),t;case"GeometryCollection":return t.geometries=t.geometries.map(v(e,r)),t;case"Feature":return t.geometry=e(t.geometry,r),t;case"Polygon":case"MultiPolygon":return function(e,t){"Polygon"===e.type?e.coordinates=y(e.coordinates,t):"MultiPolygon"===e.type&&(e.coordinates=e.coordinates.map(v(y,t)));return e}(t,r);default:return t}};function v(e,t){return function(r){return e(r,t)}}function y(e,t){t=!!t,e[0]=x(e[0],t);for(var r=1;r<e.length;r++)e[r]=x(e[r],!t);return e}function x(e,t){return function(e){return g.ring(e)>=0}(e)===t?e:e.reverse()}var w=e.vectorTile.VectorTileFeature.prototype.toGeoJSON,S=function(t){this._feature=t,this.extent=e.EXTENT,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));};S.prototype.loadGeometry=function(){if(1===this._feature.type){for(var t=[],r=0,i=this._feature.geometry;r<i.length;r+=1){var o=i[r];t.push([new e.Point$1(o[0],o[1])]);}return t}for(var n=[],a=0,s=this._feature.geometry;a<s.length;a+=1){for(var l=[],u=0,h=s[a];u<h.length;u+=1){var c=h[u];l.push(new e.Point$1(c[0],c[1]));}n.push(l);}return n},S.prototype.toGeoJSON=function(e,t,r){return w.call(this,e,t,r)};var M=function(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.EXTENT,this.length=t.length,this._features=t;};M.prototype.feature=function(e){return new S(this._features[e])};var I=e.vectorTile.VectorTileFeature,b=P;function P(e,t){this.options=t||{},this.features=e,this.length=e.length;}function _(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}P.prototype.feature=function(e){return new _(this.features[e],this.options.extent)},_.prototype.loadGeometry=function(){var t=this.rawGeometry;this.geometry=[];for(var r=0;r<t.length;r++){for(var i=t[r],o=[],n=0;n<i.length;n++)o.push(new e.Point$1(i[n][0],i[n][1]));this.geometry.push(o);}return this.geometry},_.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-1/0,i=1/0,o=-1/0,n=0;n<e.length;n++)for(var a=e[n],s=0;s<a.length;s++){var l=a[s];t=Math.min(t,l.x),r=Math.max(r,l.x),i=Math.min(i,l.y),o=Math.max(o,l.y);}return [t,i,r,o]},_.prototype.toGeoJSON=I.prototype.toGeoJSON;var k=L,T=L,C=function(e,t){t=t||{};var r={};for(var i in e)r[i]=new b(e[i].features,t),r[i].name=i,r[i].version=t.version,r[i].extent=t.extent;return L({layers:r})},D=b;function L(t){var r=new e.pbf;return function(e,t){for(var r in e.layers)t.writeMessage(3,O,e.layers[r]);}(t,r),r.finish()}function O(e,t){var r;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var i={keys:[],values:[],keycache:{},valuecache:{}};for(r=0;r<e.length;r++)i.feature=e.feature(r),t.writeMessage(2,z,i);var o=i.keys;for(r=0;r<o.length;r++)t.writeStringField(3,o[r]);var n=i.values;for(r=0;r<n.length;r++)t.writeMessage(4,J,n[r]);}function z(e,t){var r=e.feature;void 0!==r.id&&t.writeVarintField(1,r.id),t.writeMessage(2,E,e),t.writeVarintField(3,r.type),t.writeMessage(4,A,r);}function E(e,t){var r=e.feature,i=e.keys,o=e.values,n=e.keycache,a=e.valuecache;for(var s in r.properties){var l=n[s];void 0===l&&(i.push(s),l=i.length-1,n[s]=l),t.writeVarint(l);var u=r.properties[s],h=typeof u;"string"!==h&&"boolean"!==h&&"number"!==h&&(u=JSON.stringify(u));var c=h+":"+u,p=a[c];void 0===p&&(o.push(u),p=o.length-1,a[c]=p),t.writeVarint(p);}}function N(e,t){return (t<<3)+(7&e)}function F(e){return e<<1^e>>31}function A(e,t){for(var r=e.loadGeometry(),i=e.type,o=0,n=0,a=r.length,s=0;s<a;s++){var l=r[s],u=1;1===i&&(u=l.length),t.writeVarint(N(1,u));for(var h=3===i?l.length-1:l.length,c=0;c<h;c++){1===c&&1!==i&&t.writeVarint(N(2,h-1));var p=l[c].x-o,f=l[c].y-n;t.writeVarint(F(p)),t.writeVarint(F(f)),o+=p,n+=f;}3===i&&t.writeVarint(N(7,1));}}function J(e,t){var r=typeof e;"string"===r?t.writeStringField(1,e):"boolean"===r?t.writeBooleanField(7,e):"number"===r&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}function Z(e,t,r,i,o,n){if(!(o-i<=r)){var a=i+o>>1;!function e(t,r,i,o,n,a){for(;n>o;){if(n-o>600){var s=n-o+1,l=i-o+1,u=Math.log(s),h=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*h*(s-h)/s)*(l-s/2<0?-1:1),p=Math.max(o,Math.floor(i-l*h/s+c)),f=Math.min(n,Math.floor(i+(s-l)*h/s+c));e(t,r,i,p,f,a);}var d=r[2*i+a],g=o,m=n;for(B(t,r,o,i),r[2*n+a]>d&&B(t,r,o,n);g<m;){for(B(t,r,g,m),g++,m--;r[2*g+a]<d;)g++;for(;r[2*m+a]>d;)m--;}r[2*o+a]===d?B(t,r,o,m):(m++,B(t,r,m,n)),m<=i&&(o=m+1),i<=m&&(n=m-1);}}(e,t,a,i,o,n%2),Z(e,t,r,i,a-1,n+1),Z(e,t,r,a+1,o,n+1);}}function B(e,t,r,i){G(e,r,i),G(t,2*r,2*i),G(t,2*r+1,2*i+1);}function G(e,t,r){var i=e[t];e[t]=e[r],e[r]=i;}function Y(e,t,r,i){var o=e-r,n=t-i;return o*o+n*n}k.fromVectorTileJs=T,k.fromGeojsonVt=C,k.GeoJSONWrapper=D;var R=function(e){return e[0]},j=function(e){return e[1]},V=function(e,t,r,i,o){void 0===t&&(t=R),void 0===r&&(r=j),void 0===i&&(i=64),void 0===o&&(o=Float64Array),this.nodeSize=i,this.points=e;for(var n=e.length<65536?Uint16Array:Uint32Array,a=this.ids=new n(e.length),s=this.coords=new o(2*e.length),l=0;l<e.length;l++)a[l]=l,s[2*l]=t(e[l]),s[2*l+1]=r(e[l]);Z(a,s,i,0,a.length-1,0);};V.prototype.range=function(e,t,r,i){return function(e,t,r,i,o,n,a){for(var s,l,u=[0,e.length-1,0],h=[];u.length;){var c=u.pop(),p=u.pop(),f=u.pop();if(p-f<=a)for(var d=f;d<=p;d++)s=t[2*d],l=t[2*d+1],s>=r&&s<=o&&l>=i&&l<=n&&h.push(e[d]);else{var g=Math.floor((f+p)/2);s=t[2*g],l=t[2*g+1],s>=r&&s<=o&&l>=i&&l<=n&&h.push(e[g]);var m=(c+1)%2;(0===c?r<=s:i<=l)&&(u.push(f),u.push(g-1),u.push(m)),(0===c?o>=s:n>=l)&&(u.push(g+1),u.push(p),u.push(m));}}return h}(this.ids,this.coords,e,t,r,i,this.nodeSize)},V.prototype.within=function(e,t,r){return function(e,t,r,i,o,n){for(var a=[0,e.length-1,0],s=[],l=o*o;a.length;){var u=a.pop(),h=a.pop(),c=a.pop();if(h-c<=n)for(var p=c;p<=h;p++)Y(t[2*p],t[2*p+1],r,i)<=l&&s.push(e[p]);else{var f=Math.floor((c+h)/2),d=t[2*f],g=t[2*f+1];Y(d,g,r,i)<=l&&s.push(e[f]);var m=(u+1)%2;(0===u?r-o<=d:i-o<=g)&&(a.push(c),a.push(f-1),a.push(m)),(0===u?r+o>=d:i+o>=g)&&(a.push(f+1),a.push(h),a.push(m));}}return s}(this.ids,this.coords,e,t,r,this.nodeSize)};var X={minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:function(e){return e}},W=function(e){this.options=ee(Object.create(X),e),this.trees=new Array(this.options.maxZoom+1);};function q(e,t,r,i,o){return {x:e,y:t,zoom:1/0,id:r,parentId:-1,numPoints:i,properties:o}}function U(e,t){var r=e.geometry.coordinates,i=r[0],o=r[1];return {x:K(i),y:Q(o),zoom:1/0,index:t,parentId:-1}}function $(e){return {type:"Feature",id:e.id,properties:H(e),geometry:{type:"Point",coordinates:[(i=e.x,360*(i-.5)),(t=e.y,r=(180-360*t)*Math.PI/180,360*Math.atan(Math.exp(r))/Math.PI-90)]}};var t,r,i;}function H(e){var t=e.numPoints,r=t>=1e4?Math.round(t/1e3)+"k":t>=1e3?Math.round(t/100)/10+"k":t;return ee(ee({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:r})}function K(e){return e/360+.5}function Q(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function ee(e,t){for(var r in t)e[r]=t[r];return e}function te(e){return e.x}function re(e){return e.y}function ie(e,t,r,i,o,n){var a=o-r,s=n-i;if(0!==a||0!==s){var l=((e-r)*a+(t-i)*s)/(a*a+s*s);l>1?(r=o,i=n):l>0&&(r+=a*l,i+=s*l);}return (a=e-r)*a+(s=t-i)*s}function oe(e,t,r,i){var o={id:void 0===e?null:e,type:t,geometry:r,tags:i,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,r=e.type;if("Point"===r||"MultiPoint"===r||"LineString"===r)ne(e,t);else if("Polygon"===r||"MultiLineString"===r)for(var i=0;i<t.length;i++)ne(e,t[i]);else if("MultiPolygon"===r)for(i=0;i<t.length;i++)for(var o=0;o<t[i].length;o++)ne(e,t[i][o]);}(o),o}function ne(e,t){for(var r=0;r<t.length;r+=3)e.minX=Math.min(e.minX,t[r]),e.minY=Math.min(e.minY,t[r+1]),e.maxX=Math.max(e.maxX,t[r]),e.maxY=Math.max(e.maxY,t[r+1]);}function ae(e,t,r,i){if(t.geometry){var o=t.geometry.coordinates,n=t.geometry.type,a=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),s=[],l=t.id;if(r.promoteId?l=t.properties[r.promoteId]:r.generateId&&(l=i||0),"Point"===n)se(o,s);else if("MultiPoint"===n)for(var u=0;u<o.length;u++)se(o[u],s);else if("LineString"===n)le(o,s,a,!1);else if("MultiLineString"===n){if(r.lineMetrics){for(u=0;u<o.length;u++)s=[],le(o[u],s,a,!1),e.push(oe(l,"LineString",s,t.properties));return}ue(o,s,a,!1);}else if("Polygon"===n)ue(o,s,a,!0);else{if("MultiPolygon"!==n){if("GeometryCollection"===n){for(u=0;u<t.geometry.geometries.length;u++)ae(e,{id:l,geometry:t.geometry.geometries[u],properties:t.properties},r,i);return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<o.length;u++){var h=[];ue(o[u],h,a,!0),s.push(h);}}e.push(oe(l,n,s,t.properties));}}function se(e,t){t.push(he(e[0])),t.push(ce(e[1])),t.push(0);}function le(e,t,r,i){for(var o,n,a=0,s=0;s<e.length;s++){var l=he(e[s][0]),u=ce(e[s][1]);t.push(l),t.push(u),t.push(0),s>0&&(a+=i?(o*u-l*n)/2:Math.sqrt(Math.pow(l-o,2)+Math.pow(u-n,2))),o=l,n=u;}var h=t.length-3;t[2]=1,function e(t,r,i,o){for(var n,a=o,s=i-r>>1,l=i-r,u=t[r],h=t[r+1],c=t[i],p=t[i+1],f=r+3;f<i;f+=3){var d=ie(t[f],t[f+1],u,h,c,p);if(d>a)n=f,a=d;else if(d===a){var g=Math.abs(f-s);g<l&&(n=f,l=g);}}a>o&&(n-r>3&&e(t,r,n,o),t[n+2]=a,i-n>3&&e(t,n,i,o));}(t,0,h,r),t[h+2]=1,t.size=Math.abs(a),t.start=0,t.end=t.size;}function ue(e,t,r,i){for(var o=0;o<e.length;o++){var n=[];le(e[o],n,r,i),t.push(n);}}function he(e){return e/360+.5}function ce(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function pe(e,t,r,i,o,n,a,s){if(i/=t,n>=(r/=t)&&a<i)return e;if(a<r||n>=i)return null;for(var l=[],u=0;u<e.length;u++){var h=e[u],c=h.geometry,p=h.type,f=0===o?h.minX:h.minY,d=0===o?h.maxX:h.maxY;if(f>=r&&d<i)l.push(h);else if(!(d<r||f>=i)){var g=[];if("Point"===p||"MultiPoint"===p)fe(c,g,r,i,o);else if("LineString"===p)de(c,g,r,i,o,!1,s.lineMetrics);else if("MultiLineString"===p)me(c,g,r,i,o,!1);else if("Polygon"===p)me(c,g,r,i,o,!0);else if("MultiPolygon"===p)for(var m=0;m<c.length;m++){var v=[];me(c[m],v,r,i,o,!0),v.length&&g.push(v);}if(g.length){if(s.lineMetrics&&"LineString"===p){for(m=0;m<g.length;m++)l.push(oe(h.id,p,g[m],h.tags));continue}"LineString"!==p&&"MultiLineString"!==p||(1===g.length?(p="LineString",g=g[0]):p="MultiLineString"),"Point"!==p&&"MultiPoint"!==p||(p=3===g.length?"Point":"MultiPoint"),l.push(oe(h.id,p,g,h.tags));}}}return l.length?l:null}function fe(e,t,r,i,o){for(var n=0;n<e.length;n+=3){var a=e[n+o];a>=r&&a<=i&&(t.push(e[n]),t.push(e[n+1]),t.push(e[n+2]));}}function de(e,t,r,i,o,n,a){for(var s,l,u=ge(e),h=0===o?ye:xe,c=e.start,p=0;p<e.length-3;p+=3){var f=e[p],d=e[p+1],g=e[p+2],m=e[p+3],v=e[p+4],y=0===o?f:d,x=0===o?m:v,w=!1;a&&(s=Math.sqrt(Math.pow(f-m,2)+Math.pow(d-v,2))),y<r?x>r&&(l=h(u,f,d,m,v,r),a&&(u.start=c+s*l)):y>i?x<i&&(l=h(u,f,d,m,v,i),a&&(u.start=c+s*l)):ve(u,f,d,g),x<r&&y>=r&&(l=h(u,f,d,m,v,r),w=!0),x>i&&y<=i&&(l=h(u,f,d,m,v,i),w=!0),!n&&w&&(a&&(u.end=c+s*l),t.push(u),u=ge(e)),a&&(c+=s);}var S=e.length-3;f=e[S],d=e[S+1],g=e[S+2],(y=0===o?f:d)>=r&&y<=i&&ve(u,f,d,g),S=u.length-3,n&&S>=3&&(u[S]!==u[0]||u[S+1]!==u[1])&&ve(u,u[0],u[1],u[2]),u.length&&t.push(u);}function ge(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function me(e,t,r,i,o,n){for(var a=0;a<e.length;a++)de(e[a],t,r,i,o,n,!1);}function ve(e,t,r,i){e.push(t),e.push(r),e.push(i);}function ye(e,t,r,i,o,n){var a=(n-t)/(i-t);return e.push(n),e.push(r+(o-r)*a),e.push(1),a}function xe(e,t,r,i,o,n){var a=(n-r)/(o-r);return e.push(t+(i-t)*a),e.push(n),e.push(1),a}function we(e,t){for(var r=[],i=0;i<e.length;i++){var o,n=e[i],a=n.type;if("Point"===a||"MultiPoint"===a||"LineString"===a)o=Se(n.geometry,t);else if("MultiLineString"===a||"Polygon"===a){o=[];for(var s=0;s<n.geometry.length;s++)o.push(Se(n.geometry[s],t));}else if("MultiPolygon"===a)for(o=[],s=0;s<n.geometry.length;s++){for(var l=[],u=0;u<n.geometry[s].length;u++)l.push(Se(n.geometry[s][u],t));o.push(l);}r.push(oe(n.id,a,o,n.tags));}return r}function Se(e,t){var r=[];r.size=e.size,void 0!==e.start&&(r.start=e.start,r.end=e.end);for(var i=0;i<e.length;i+=3)r.push(e[i]+t,e[i+1],e[i+2]);return r}function Me(e,t){if(e.transformed)return e;var r,i,o,n=1<<e.z,a=e.x,s=e.y;for(r=0;r<e.features.length;r++){var l=e.features[r],u=l.geometry,h=l.type;if(l.geometry=[],1===h)for(i=0;i<u.length;i+=2)l.geometry.push(Ie(u[i],u[i+1],t,n,a,s));else for(i=0;i<u.length;i++){var c=[];for(o=0;o<u[i].length;o+=2)c.push(Ie(u[i][o],u[i][o+1],t,n,a,s));l.geometry.push(c);}}return e.transformed=!0,e}function Ie(e,t,r,i,o,n){return [Math.round(r*(e*i-o)),Math.round(r*(t*i-n))]}function be(e,t,r,i,o){for(var n=t===o.maxZoom?0:o.tolerance/((1<<t)*o.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:i,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<e.length;s++){a.numFeatures++,Pe(a,e[s],n,o);var l=e[s].minX,u=e[s].minY,h=e[s].maxX,c=e[s].maxY;l<a.minX&&(a.minX=l),u<a.minY&&(a.minY=u),h>a.maxX&&(a.maxX=h),c>a.maxY&&(a.maxY=c);}return a}function Pe(e,t,r,i){var o=t.geometry,n=t.type,a=[];if("Point"===n||"MultiPoint"===n)for(var s=0;s<o.length;s+=3)a.push(o[s]),a.push(o[s+1]),e.numPoints++,e.numSimplified++;else if("LineString"===n)_e(a,o,e,r,!1,!1);else if("MultiLineString"===n||"Polygon"===n)for(s=0;s<o.length;s++)_e(a,o[s],e,r,"Polygon"===n,0===s);else if("MultiPolygon"===n)for(var l=0;l<o.length;l++){var u=o[l];for(s=0;s<u.length;s++)_e(a,u[s],e,r,!0,0===s);}if(a.length){var h=t.tags||null;if("LineString"===n&&i.lineMetrics){for(var c in h={},t.tags)h[c]=t.tags[c];h.mapbox_clip_start=o.start/o.size,h.mapbox_clip_end=o.end/o.size;}var p={geometry:a,type:"Polygon"===n||"MultiPolygon"===n?3:"LineString"===n||"MultiLineString"===n?2:1,tags:h};null!==t.id&&(p.id=t.id),e.features.push(p);}}function _e(e,t,r,i,o,n){var a=i*i;if(i>0&&t.size<(o?a:i))r.numPoints+=t.length/3;else{for(var s=[],l=0;l<t.length;l+=3)(0===i||t[l+2]>a)&&(r.numSimplified++,s.push(t[l]),s.push(t[l+1])),r.numPoints++;o&&function(e,t){for(var r=0,i=0,o=e.length,n=o-2;i<o;n=i,i+=2)r+=(e[i]-e[n])*(e[i+1]+e[n+1]);if(r>0===t)for(i=0,o=e.length;i<o/2;i+=2){var a=e[i],s=e[i+1];e[i]=e[o-2-i],e[i+1]=e[o-1-i],e[o-2-i]=a,e[o-1-i]=s;}}(s,n),e.push(s);}}function ke(e,t){var r=(t=this.options=function(e,t){for(var r in t)e[r]=t[r];return e}(Object.create(this.options),t)).debug;if(r&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var i=function(e,t){var r=[];if("FeatureCollection"===e.type)for(var i=0;i<e.features.length;i++)ae(r,e.features[i],t,i);else"Feature"===e.type?ae(r,e,t):ae(r,{geometry:e},t);return r}(e,t);this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(i=function(e,t){var r=t.buffer/t.extent,i=e,o=pe(e,1,-1-r,r,0,-1,2,t),n=pe(e,1,1-r,2+r,0,-1,2,t);return (o||n)&&(i=pe(e,1,-r,1+r,0,-1,2,t)||[],o&&(i=we(o,1).concat(i)),n&&(i=i.concat(we(n,-1)))),i}(i,t)).length&&this.splitTile(i,0,0,0),r&&(i.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function Te(e,t,r){return 32*((1<<e)*r+t)+e}function Ce(e,t){var r=e.tileID.canonical;if(!this._geoJSONIndex)return t(null,null);var i=this._geoJSONIndex.getTile(r.z,r.x,r.y);if(!i)return t(null,null);var o=new M(i.features),n=k(o);0===n.byteOffset&&n.byteLength===n.buffer.byteLength||(n=new Uint8Array(n)),t(null,{vectorTile:o,rawData:n.buffer});}W.prototype.load=function(e){var t=this.options,r=t.log,i=t.minZoom,o=t.maxZoom,n=t.nodeSize;r&&console.time("total time");var a="prepare "+e.length+" points";r&&console.time(a),this.points=e;for(var s=[],l=0;l<e.length;l++)e[l].geometry&&s.push(U(e[l],l));this.trees[o+1]=new V(s,te,re,n,Float32Array),r&&console.timeEnd(a);for(var u=o;u>=i;u--){var h=+Date.now();s=this._cluster(s,u),this.trees[u]=new V(s,te,re,n,Float32Array),r&&console.log("z%d: %d clusters in %dms",u,s.length,+Date.now()-h);}return r&&console.timeEnd("total time"),this},W.prototype.getClusters=function(e,t){var r=((e[0]+180)%360+360)%360-180,i=Math.max(-90,Math.min(90,e[1])),o=180===e[2]?180:((e[2]+180)%360+360)%360-180,n=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)r=-180,o=180;else if(r>o){var a=this.getClusters([r,i,180,n],t),s=this.getClusters([-180,i,o,n],t);return a.concat(s)}for(var l=this.trees[this._limitZoom(t)],u=[],h=0,c=l.range(K(r),Q(n),K(o),Q(i));h<c.length;h+=1){var p=c[h],f=l.points[p];u.push(f.numPoints?$(f):this.points[f.index]);}return u},W.prototype.getChildren=function(e){var t=this._getOriginId(e),r=this._getOriginZoom(e),i="No cluster with the specified id.",o=this.trees[r];if(!o)throw new Error(i);var n=o.points[t];if(!n)throw new Error(i);for(var a=this.options.radius/(this.options.extent*Math.pow(2,r-1)),s=[],l=0,u=o.within(n.x,n.y,a);l<u.length;l+=1){var h=u[l],c=o.points[h];c.parentId===e&&s.push(c.numPoints?$(c):this.points[c.index]);}if(0===s.length)throw new Error(i);return s},W.prototype.getLeaves=function(e,t,r){t=t||10,r=r||0;var i=[];return this._appendLeaves(i,e,t,r,0),i},W.prototype.getTile=function(e,t,r){var i=this.trees[this._limitZoom(e)],o=Math.pow(2,e),n=this.options,a=n.extent,s=n.radius/a,l=(r-s)/o,u=(r+1+s)/o,h={features:[]};return this._addTileFeatures(i.range((t-s)/o,l,(t+1+s)/o,u),i.points,t,r,o,h),0===t&&this._addTileFeatures(i.range(1-s/o,l,1,u),i.points,o,r,o,h),t===o-1&&this._addTileFeatures(i.range(0,l,s/o,u),i.points,-1,r,o,h),h.features.length?h:null},W.prototype.getClusterExpansionZoom=function(e){for(var t=this._getOriginZoom(e)-1;t<=this.options.maxZoom;){var r=this.getChildren(e);if(t++,1!==r.length)break;e=r[0].properties.cluster_id;}return t},W.prototype._appendLeaves=function(e,t,r,i,o){for(var n=0,a=this.getChildren(t);n<a.length;n+=1){var s=a[n],l=s.properties;if(l&&l.cluster?o+l.point_count<=i?o+=l.point_count:o=this._appendLeaves(e,l.cluster_id,r,i,o):o<i?o++:e.push(s),e.length===r)break}return o},W.prototype._addTileFeatures=function(e,t,r,i,o,n){for(var a=0,s=e;a<s.length;a+=1){var l=t[s[a]],u=l.numPoints,h={type:1,geometry:[[Math.round(this.options.extent*(l.x*o-r)),Math.round(this.options.extent*(l.y*o-i))]],tags:u?H(l):this.points[l.index].properties},c=void 0;u?c=l.id:this.options.generateId?c=l.index:this.points[l.index].id&&(c=this.points[l.index].id),void 0!==c&&(h.id=c),n.features.push(h);}},W.prototype._limitZoom=function(e){return Math.max(this.options.minZoom,Math.min(e,this.options.maxZoom+1))},W.prototype._cluster=function(e,t){for(var r=[],i=this.options,o=i.radius,n=i.extent,a=i.reduce,s=o/(n*Math.pow(2,t)),l=0;l<e.length;l++){var u=e[l];if(!(u.zoom<=t)){u.zoom=t;for(var h=this.trees[t+1],c=h.within(u.x,u.y,s),p=u.numPoints||1,f=u.x*p,d=u.y*p,g=a&&p>1?this._map(u,!0):null,m=(l<<5)+(t+1)+this.points.length,v=0,y=c;v<y.length;v+=1){var x=y[v],w=h.points[x];if(!(w.zoom<=t)){w.zoom=t;var S=w.numPoints||1;f+=w.x*S,d+=w.y*S,p+=S,w.parentId=m,a&&(g||(g=this._map(u,!0)),a(g,this._map(w)));}}1===p?r.push(u):(u.parentId=m,r.push(q(f/p,d/p,m,p,g)));}}return r},W.prototype._getOriginId=function(e){return e-this.points.length>>5},W.prototype._getOriginZoom=function(e){return (e-this.points.length)%32},W.prototype._map=function(e,t){if(e.numPoints)return t?ee({},e.properties):e.properties;var r=this.points[e.index].properties,i=this.options.map(r);return t&&i===r?ee({},i):i},ke.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},ke.prototype.splitTile=function(e,t,r,i,o,n,a){for(var s=[e,t,r,i],l=this.options,u=l.debug;s.length;){i=s.pop(),r=s.pop(),t=s.pop(),e=s.pop();var h=1<<t,c=Te(t,r,i),p=this.tiles[c];if(!p&&(u>1&&console.time("creation"),p=this.tiles[c]=be(e,t,r,i,l),this.tileCoords.push({z:t,x:r,y:i}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,r,i,p.numFeatures,p.numPoints,p.numSimplified),console.timeEnd("creation"));var f="z"+t;this.stats[f]=(this.stats[f]||0)+1,this.total++;}if(p.source=e,o){if(t===l.maxZoom||t===o)continue;var d=1<<o-t;if(r!==Math.floor(n/d)||i!==Math.floor(a/d))continue}else if(t===l.indexMaxZoom||p.numPoints<=l.indexMaxPoints)continue;if(p.source=null,0!==e.length){u>1&&console.time("clipping");var g,m,v,y,x,w,S=.5*l.buffer/l.extent,M=.5-S,I=.5+S,b=1+S;g=m=v=y=null,x=pe(e,h,r-S,r+I,0,p.minX,p.maxX,l),w=pe(e,h,r+M,r+b,0,p.minX,p.maxX,l),e=null,x&&(g=pe(x,h,i-S,i+I,1,p.minY,p.maxY,l),m=pe(x,h,i+M,i+b,1,p.minY,p.maxY,l),x=null),w&&(v=pe(w,h,i-S,i+I,1,p.minY,p.maxY,l),y=pe(w,h,i+M,i+b,1,p.minY,p.maxY,l),w=null),u>1&&console.timeEnd("clipping"),s.push(g||[],t+1,2*r,2*i),s.push(m||[],t+1,2*r,2*i+1),s.push(v||[],t+1,2*r+1,2*i),s.push(y||[],t+1,2*r+1,2*i+1);}}},ke.prototype.getTile=function(e,t,r){var i=this.options,o=i.extent,n=i.debug;if(e<0||e>24)return null;var a=1<<e,s=Te(e,t=(t%a+a)%a,r);if(this.tiles[s])return Me(this.tiles[s],o);n>1&&console.log("drilling down to z%d-%d-%d",e,t,r);for(var l,u=e,h=t,c=r;!l&&u>0;)u--,h=Math.floor(h/2),c=Math.floor(c/2),l=this.tiles[Te(u,h,c)];return l&&l.source?(n>1&&console.log("found parent tile z%d-%d-%d",u,h,c),n>1&&console.time("drilling down"),this.splitTile(l.source,u,h,c,e,t,r),n>1&&console.timeEnd("drilling down"),this.tiles[s]?Me(this.tiles[s],o):null):null};var De=function(t){function r(e,r,i,o){t.call(this,e,r,i,Ce),o&&(this.loadGeoJSON=o);}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.loadData=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),this._pendingCallback=t,this._pendingLoadDataParams=e,this._state&&"Idle"!==this._state?this._state="NeedsLoadData":(this._state="Coalescing",this._loadData());},r.prototype._loadData=function(){var t=this;if(this._pendingCallback&&this._pendingLoadDataParams){var r=this._pendingCallback,i=this._pendingLoadDataParams;delete this._pendingCallback,delete this._pendingLoadDataParams;var o=!!(i&&i.request&&i.request.collectResourceTiming)&&new e.RequestPerformance(i.request);this.loadGeoJSON(i,(function(n,a){if(n||!a)return r(n);if("object"!=typeof a)return r(new Error("Input data given to '"+i.source+"' is not a valid GeoJSON object."));m(a,!0);try{t._geoJSONIndex=i.cluster?new W(function(t){var r=t.superclusterOptions,i=t.clusterProperties;if(!i||!r)return r;for(var o={},n={},a={accumulated:null,zoom:0},s={properties:null},l=Object.keys(i),u=0,h=l;u<h.length;u+=1){var c=h[u],p=i[c],f=p[0],d=p[1],g=e.createExpression(d),m=e.createExpression("string"==typeof f?[f,["accumulated"],["get",c]]:f);o[c]=g.value,n[c]=m.value;}return r.map=function(e){s.properties=e;for(var t={},r=0,i=l;r<i.length;r+=1){var n=i[r];t[n]=o[n].evaluate(a,s);}return t},r.reduce=function(e,t){s.properties=t;for(var r=0,i=l;r<i.length;r+=1){var o=i[r];a.accumulated=e[o],e[o]=n[o].evaluate(a,s);}},r}(i)).load(a.features):function(e,t){return new ke(e,t)}(a,i.geojsonVtOptions);}catch(n){return r(n)}t.loaded={};var s={};if(o){var l=o.finish();l&&(s.resourceTiming={},s.resourceTiming[i.source]=JSON.parse(JSON.stringify(l)));}r(null,s);}));}},r.prototype.coalesce=function(){"Coalescing"===this._state?this._state="Idle":"NeedsLoadData"===this._state&&(this._state="Coalescing",this._loadData());},r.prototype.reloadTile=function(e,r){var i=this.loaded,o=e.uid;return i&&i[o]?t.prototype.reloadTile.call(this,e,r):this.loadTile(e,r)},r.prototype.loadGeoJSON=function(t,r){if(t.request)e.getJSON(t.request,r);else{if("string"!=typeof t.data)return r(new Error("Input data given to '"+t.source+"' is not a valid GeoJSON object."));try{return r(null,JSON.parse(t.data))}catch(e){return r(new Error("Input data given to '"+t.source+"' is not a valid GeoJSON object."))}}},r.prototype.removeSource=function(e,t){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),t();},r.prototype.getClusterExpansionZoom=function(e,t){t(null,this._geoJSONIndex.getClusterExpansionZoom(e.clusterId));},r.prototype.getClusterChildren=function(e,t){t(null,this._geoJSONIndex.getChildren(e.clusterId));},r.prototype.getClusterLeaves=function(e,t){t(null,this._geoJSONIndex.getLeaves(e.clusterId,e.limit,e.offset));},r}(l);var Le=function(t){var r=this;this.self=t,this.actor=new e.Actor(t,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:l,geojson:De},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=function(e,t){if(r.workerSourceTypes[e])throw new Error('Worker source with name "'+e+'" already registered.');r.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=function(t){if(e.plugin.isParsed())throw new Error("RTL text plugin already registered.");e.plugin.applyArabicShaping=t.applyArabicShaping,e.plugin.processBidirectionalText=t.processBidirectionalText,e.plugin.processStyledBidirectionalText=t.processStyledBidirectionalText;};};return Le.prototype.setReferrer=function(e,t){this.referrer=t;},Le.prototype.setImages=function(e,t,r){this.availableImages[e]=t,r();},Le.prototype.setLayers=function(e,t,r){this.getLayerIndex(e).replace(t),r();},Le.prototype.updateLayers=function(e,t,r){this.getLayerIndex(e).update(t.layers,t.removedIds),r();},Le.prototype.loadTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).loadTile(t,r);},Le.prototype.loadDEMTile=function(e,t,r){this.getDEMWorkerSource(e,t.source).loadTile(t,r);},Le.prototype.reloadTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).reloadTile(t,r);},Le.prototype.abortTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).abortTile(t,r);},Le.prototype.removeTile=function(e,t,r){this.getWorkerSource(e,t.type,t.source).removeTile(t,r);},Le.prototype.removeDEMTile=function(e,t){this.getDEMWorkerSource(e,t.source).removeTile(t);},Le.prototype.removeSource=function(e,t,r){if(this.workerSources[e]&&this.workerSources[e][t.type]&&this.workerSources[e][t.type][t.source]){var i=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==i.removeSource?i.removeSource(t,r):r();}},Le.prototype.loadWorkerSource=function(e,t,r){try{this.self.importScripts(t.url),r();}catch(e){r(e.toString());}},Le.prototype.syncRTLPluginState=function(t,r,i){try{e.plugin.setState(r);var o=e.plugin.getPluginURL();if(e.plugin.isLoaded()&&!e.plugin.isParsed()&&null!=o){this.self.importScripts(o);var n=e.plugin.isParsed();i(n?void 0:new Error("RTL Text Plugin failed to import scripts from "+o),n);}}catch(e){i(e.toString());}},Le.prototype.getAvailableImages=function(e){var t=this.availableImages[e];return t||(t=[]),t},Le.prototype.getLayerIndex=function(e){var t=this.layerIndexes[e];return t||(t=this.layerIndexes[e]=new i),t},Le.prototype.getWorkerSource=function(e,t,r){var i=this;if(this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),!this.workerSources[e][t][r]){var o={send:function(t,r,o){i.actor.send(t,r,o,e);}};this.workerSources[e][t][r]=new this.workerSourceTypes[t](o,this.getLayerIndex(e),this.getAvailableImages(e));}return this.workerSources[e][t][r]},Le.prototype.getDEMWorkerSource=function(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new h),this.demWorkerSources[e][t]},Le.prototype.enforceCacheSizeLimit=function(t,r){e.enforceCacheSizeLimit(r);},"undefined"!=typeof WorkerGlobalScope&&void 0!==e.window&&e.window instanceof WorkerGlobalScope&&(e.window.worker=new Le(e.window)),Le}));

define(["./shared"],(function(t){"use strict";var e=t.createCommonjsModule((function(t){function e(t){return !!("undefined"!=typeof window&&"undefined"!=typeof document&&Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray&&Function.prototype&&Function.prototype.bind&&Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions&&"JSON"in window&&"parse"in JSON&&"stringify"in JSON&&function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return !1;var t,e,i=new Blob([""],{type:"text/javascript"}),o=URL.createObjectURL(i);try{e=new Worker(o),t=!0;}catch(e){t=!1;}e&&e.terminate();return URL.revokeObjectURL(o),t}()&&"Uint8ClampedArray"in window&&ArrayBuffer.isView&&function(t){void 0===i[t]&&(i[t]=function(t){var i=document.createElement("canvas"),o=Object.create(e.webGLContextAttributes);return o.failIfMajorPerformanceCaveat=t,i.probablySupportsContext?i.probablySupportsContext("webgl",o)||i.probablySupportsContext("experimental-webgl",o):i.supportsContext?i.supportsContext("webgl",o)||i.supportsContext("experimental-webgl",o):i.getContext("webgl",o)||i.getContext("experimental-webgl",o)}(t));return i[t]}(t&&t.failIfMajorPerformanceCaveat))}t.exports?t.exports=e:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=e);var i={};e.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0};})),i={create:function(e,i,o){var r=t.window.document.createElement(e);return void 0!==i&&(r.className=i),o&&o.appendChild(r),r},createNS:function(e,i){return t.window.document.createElementNS(e,i)}},o=t.window.document.documentElement.style;function r(t){if(!o)return t[0];for(var e=0;e<t.length;e++)if(t[e]in o)return t[e];return t[0]}var a,n=r(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]);i.disableDrag=function(){o&&n&&(a=o[n],o[n]="none");},i.enableDrag=function(){o&&n&&(o[n]=a);};var s=r(["transform","WebkitTransform"]);i.setTransform=function(t,e){t.style[s]=e;};var l=!1;try{var c=Object.defineProperty({},"passive",{get:function(){l=!0;}});t.window.addEventListener("test",c,c),t.window.removeEventListener("test",c,c);}catch(t){l=!1;}i.addEventListener=function(t,e,i,o){void 0===o&&(o={}),"passive"in o&&l?t.addEventListener(e,i,o):t.addEventListener(e,i,o.capture);},i.removeEventListener=function(t,e,i,o){void 0===o&&(o={}),"passive"in o&&l?t.removeEventListener(e,i,o):t.removeEventListener(e,i,o.capture);};var u=function(e){e.preventDefault(),e.stopPropagation(),t.window.removeEventListener("click",u,!0);};function h(t){var e=t.userImage;if(e&&e.render&&e.render())return t.data.replace(new Uint8Array(e.data.buffer)),!0;return !1}i.suppressClick=function(){t.window.addEventListener("click",u,!0),t.window.setTimeout((function(){t.window.removeEventListener("click",u,!0);}),0);},i.mousePos=function(e,i){var o=e.getBoundingClientRect(),r=t.window.TouchEvent&&i instanceof t.window.TouchEvent?i.touches[0]:i;return new t.Point(r.clientX-o.left-e.clientLeft,r.clientY-o.top-e.clientTop)},i.touchPos=function(e,i){for(var o=e.getBoundingClientRect(),r=[],a="touchend"===i.type?i.changedTouches:i.touches,n=0;n<a.length;n++)r.push(new t.Point(a[n].clientX-o.left-e.clientLeft,a[n].clientY-o.top-e.clientTop));return r},i.mouseButton=function(e){return void 0!==t.window.InstallTrigger&&2===e.button&&e.ctrlKey&&t.window.navigator.platform.toUpperCase().indexOf("MAC")>=0?0:e.button},i.remove=function(t){t.parentNode&&t.parentNode.removeChild(t);};var p=function(e){function i(){e.call(this),this.images={},this.updatedImages={},this.callbackDispatchedThisFrame={},this.loaded=!1,this.requestors=[],this.patterns={},this.atlasImage=new t.RGBAImage({width:1,height:1}),this.dirty=!0;}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.isLoaded=function(){return this.loaded},i.prototype.setLoaded=function(t){if(this.loaded!==t&&(this.loaded=t,t)){for(var e=0,i=this.requestors;e<i.length;e+=1){var o=i[e],r=o.ids,a=o.callback;this._notify(r,a);}this.requestors=[];}},i.prototype.getImage=function(t){return this.images[t]},i.prototype.addImage=function(t,e){this._validate(t,e)&&(this.images[t]=e);},i.prototype._validate=function(e,i){var o=!0;return this._validateStretch(i.stretchX,i.data&&i.data.width)||(this.fire(new t.ErrorEvent(new Error('Image "'+e+'" has invalid "stretchX" value'))),o=!1),this._validateStretch(i.stretchY,i.data&&i.data.height)||(this.fire(new t.ErrorEvent(new Error('Image "'+e+'" has invalid "stretchY" value'))),o=!1),this._validateContent(i.content,i)||(this.fire(new t.ErrorEvent(new Error('Image "'+e+'" has invalid "content" value'))),o=!1),o},i.prototype._validateStretch=function(t,e){if(!t)return !0;for(var i=0,o=0,r=t;o<r.length;o+=1){var a=r[o];if(a[0]<i||a[1]<a[0]||e<a[1])return !1;i=a[1];}return !0},i.prototype._validateContent=function(t,e){return !t||4===t.length&&(!(t[0]<0||e.data.width<t[0])&&(!(t[1]<0||e.data.height<t[1])&&(!(t[2]<0||e.data.width<t[2])&&(!(t[3]<0||e.data.height<t[3])&&(!(t[2]<t[0])&&!(t[3]<t[1]))))))},i.prototype.updateImage=function(t,e){var i=this.images[t];e.version=i.version+1,this.images[t]=e,this.updatedImages[t]=!0;},i.prototype.removeImage=function(t){var e=this.images[t];delete this.images[t],delete this.patterns[t],e.userImage&&e.userImage.onRemove&&e.userImage.onRemove();},i.prototype.listImages=function(){return Object.keys(this.images)},i.prototype.getImages=function(t,e){var i=!0;if(!this.isLoaded())for(var o=0,r=t;o<r.length;o+=1){var a=r[o];this.images[a]||(i=!1);}this.isLoaded()||i?this._notify(t,e):this.requestors.push({ids:t,callback:e});},i.prototype._notify=function(e,i){for(var o={},r=0,a=e;r<a.length;r+=1){var n=a[r];this.images[n]||this.fire(new t.Event("styleimagemissing",{id:n}));var s=this.images[n];s?o[n]={data:s.data.clone(),pixelRatio:s.pixelRatio,sdf:s.sdf,version:s.version,stretchX:s.stretchX,stretchY:s.stretchY,content:s.content,hasRenderCallback:Boolean(s.userImage&&s.userImage.render)}:t.warnOnce('Image "'+n+'" could not be loaded. Please make sure you have added the image with map.addImage() or a "sprite" property in your style. You can provide missing images by listening for the "styleimagemissing" map event.');}i(null,o);},i.prototype.getPixelSize=function(){var t=this.atlasImage;return {width:t.width,height:t.height}},i.prototype.getPattern=function(e){var i=this.patterns[e],o=this.getImage(e);if(!o)return null;if(i&&i.position.version===o.version)return i.position;if(i)i.position.version=o.version;else{var r={w:o.data.width+2,h:o.data.height+2,x:0,y:0},a=new t.ImagePosition(r,o);this.patterns[e]={bin:r,position:a};}return this._updatePatternAtlas(),this.patterns[e].position},i.prototype.bind=function(e){var i=e.gl;this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new t.Texture(e,this.atlasImage,i.RGBA),this.atlasTexture.bind(i.LINEAR,i.CLAMP_TO_EDGE);},i.prototype._updatePatternAtlas=function(){var e=[];for(var i in this.patterns)e.push(this.patterns[i].bin);var o=t.potpack(e),r=o.w,a=o.h,n=this.atlasImage;for(var s in n.resize({width:r||1,height:a||1}),this.patterns){var l=this.patterns[s].bin,c=l.x+1,u=l.y+1,h=this.images[s].data,p=h.width,d=h.height;t.RGBAImage.copy(h,n,{x:0,y:0},{x:c,y:u},{width:p,height:d}),t.RGBAImage.copy(h,n,{x:0,y:d-1},{x:c,y:u-1},{width:p,height:1}),t.RGBAImage.copy(h,n,{x:0,y:0},{x:c,y:u+d},{width:p,height:1}),t.RGBAImage.copy(h,n,{x:p-1,y:0},{x:c-1,y:u},{width:1,height:d}),t.RGBAImage.copy(h,n,{x:0,y:0},{x:c+p,y:u},{width:1,height:d});}this.dirty=!0;},i.prototype.beginFrame=function(){this.callbackDispatchedThisFrame={};},i.prototype.dispatchRenderCallbacks=function(t){for(var e=0,i=t;e<i.length;e+=1){var o=i[e];if(!this.callbackDispatchedThisFrame[o]){this.callbackDispatchedThisFrame[o]=!0;var r=this.images[o];h(r)&&this.updateImage(o,r);}}},i}(t.Evented);var d=m,_=m,f=1e20;function m(t,e,i,o,r,a){this.fontSize=t||24,this.buffer=void 0===e?3:e,this.cutoff=o||.25,this.fontFamily=r||"sans-serif",this.fontWeight=a||"normal",this.radius=i||8;var n=this.size=this.fontSize+2*this.buffer;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=n,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textBaseline="middle",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(n*n),this.gridInner=new Float64Array(n*n),this.f=new Float64Array(n),this.d=new Float64Array(n),this.z=new Float64Array(n+1),this.v=new Int16Array(n),this.middle=Math.round(n/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1));}function g(t,e,i,o,r,a,n){for(var s=0;s<e;s++){for(var l=0;l<i;l++)o[l]=t[l*e+s];for(v(o,r,a,n,i),l=0;l<i;l++)t[l*e+s]=r[l];}for(l=0;l<i;l++){for(s=0;s<e;s++)o[s]=t[l*e+s];for(v(o,r,a,n,e),s=0;s<e;s++)t[l*e+s]=Math.sqrt(r[s]);}}function v(t,e,i,o,r){i[0]=0,o[0]=-f,o[1]=+f;for(var a=1,n=0;a<r;a++){for(var s=(t[a]+a*a-(t[i[n]]+i[n]*i[n]))/(2*a-2*i[n]);s<=o[n];)n--,s=(t[a]+a*a-(t[i[n]]+i[n]*i[n]))/(2*a-2*i[n]);i[++n]=a,o[n]=s,o[n+1]=+f;}for(a=0,n=0;a<r;a++){for(;o[n+1]<a;)n++;e[a]=(a-i[n])*(a-i[n])+t[i[n]];}}m.prototype.draw=function(t){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillText(t,this.buffer,this.middle);for(var e=this.ctx.getImageData(0,0,this.size,this.size),i=new Uint8ClampedArray(this.size*this.size),o=0;o<this.size*this.size;o++){var r=e.data[4*o+3]/255;this.gridOuter[o]=1===r?0:0===r?f:Math.pow(Math.max(0,.5-r),2),this.gridInner[o]=1===r?f:0===r?0:Math.pow(Math.max(0,r-.5),2);}for(g(this.gridOuter,this.size,this.size,this.f,this.d,this.v,this.z),g(this.gridInner,this.size,this.size,this.f,this.d,this.v,this.z),o=0;o<this.size*this.size;o++){var a=this.gridOuter[o]-this.gridInner[o];i[o]=Math.max(0,Math.min(255,Math.round(255-255*(a/this.radius+this.cutoff))));}return i},d.default=_;var y=function(t,e){this.requestManager=t,this.localIdeographFontFamily=e,this.entries={};};y.prototype.setURL=function(t){this.url=t;},y.prototype.getGlyphs=function(e,i){var o=this,r=[];for(var a in e)for(var n=0,s=e[a];n<s.length;n+=1){var l=s[n];r.push({stack:a,id:l});}t.asyncAll(r,(function(t,e){var i=t.stack,r=t.id,a=o.entries[i];a||(a=o.entries[i]={glyphs:{},requests:{}});var n=a.glyphs[r];if(void 0===n){if(n=o._tinySDF(a,i,r))return a.glyphs[r]=n,void e(null,{stack:i,id:r,glyph:n});var s=Math.floor(r/256);if(256*s>65535)e(new Error("glyphs > 65535 not supported"));else{var l=a.requests[s];l||(l=a.requests[s]=[],y.loadGlyphRange(i,s,o.url,o.requestManager,(function(t,e){if(e)for(var i in e)o._doesCharSupportLocalGlyph(+i)||(a.glyphs[+i]=e[+i]);for(var r=0,n=l;r<n.length;r+=1){(0,n[r])(t,e);}delete a.requests[s];}))),l.push((function(t,o){t?e(t):o&&e(null,{stack:i,id:r,glyph:o[r]||null});}));}}else e(null,{stack:i,id:r,glyph:n});}),(function(t,e){if(t)i(t);else if(e){for(var o={},r=0,a=e;r<a.length;r+=1){var n=a[r],s=n.stack,l=n.id,c=n.glyph;(o[s]||(o[s]={}))[l]=c&&{id:c.id,bitmap:c.bitmap.clone(),metrics:c.metrics};}i(null,o);}}));},y.prototype._doesCharSupportLocalGlyph=function(e){return !!this.localIdeographFontFamily&&(t.isChar["CJK Unified Ideographs"](e)||t.isChar["Hangul Syllables"](e)||t.isChar.Hiragana(e)||t.isChar.Katakana(e))},y.prototype._tinySDF=function(e,i,o){var r=this.localIdeographFontFamily;if(r&&this._doesCharSupportLocalGlyph(o)){var a=e.tinySDF;if(!a){var n="400";/bold/i.test(i)?n="900":/medium/i.test(i)?n="500":/light/i.test(i)&&(n="200"),a=e.tinySDF=new y.TinySDF(24,3,8,.25,r,n);}return {id:o,bitmap:new t.AlphaImage({width:30,height:30},a.draw(String.fromCharCode(o))),metrics:{width:24,height:24,left:0,top:-8,advance:24}}}},y.loadGlyphRange=function(e,i,o,r,a){var n=256*i,s=n+255,l=r.transformRequest(r.normalizeGlyphsURL(o).replace("{fontstack}",e).replace("{range}",n+"-"+s),t.ResourceType.Glyphs);t.getArrayBuffer(l,(function(e,i){if(e)a(e);else if(i){for(var o={},r=0,n=t.parseGlyphPBF(i);r<n.length;r+=1){var s=n[r];o[s.id]=s;}a(null,o);}}));},y.TinySDF=d;var x=function(){this.specification=t.styleSpec.light.position;};x.prototype.possiblyEvaluate=function(e,i){return t.sphericalToCartesian(e.expression.evaluate(i))},x.prototype.interpolate=function(e,i,o){return {x:t.number(e.x,i.x,o),y:t.number(e.y,i.y,o),z:t.number(e.z,i.z,o)}};var b=new t.Properties({anchor:new t.DataConstantProperty(t.styleSpec.light.anchor),position:new x,color:new t.DataConstantProperty(t.styleSpec.light.color),intensity:new t.DataConstantProperty(t.styleSpec.light.intensity)}),w=function(e){function i(i){e.call(this),this._transitionable=new t.Transitionable(b),this.setLight(i),this._transitioning=this._transitionable.untransitioned();}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.getLight=function(){return this._transitionable.serialize()},i.prototype.setLight=function(e,i){if(void 0===i&&(i={}),!this._validate(t.validateLight,e,i))for(var o in e){var r=e[o];t.endsWith(o,"-transition")?this._transitionable.setTransition(o.slice(0,-"-transition".length),r):this._transitionable.setValue(o,r);}},i.prototype.updateTransitions=function(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning);},i.prototype.hasTransition=function(){return this._transitioning.hasTransition()},i.prototype.recalculate=function(t){this.properties=this._transitioning.possiblyEvaluate(t);},i.prototype._validate=function(e,i,o){return (!o||!1!==o.validate)&&t.emitValidationErrors(this,e.call(t.validateStyle,t.extend({value:i,style:{glyphs:!0,sprite:!0},styleSpec:t.styleSpec})))},i}(t.Evented),E=function(t,e){this.width=t,this.height=e,this.nextRow=0,this.bytes=4,this.data=new Uint8Array(this.width*this.height*this.bytes),this.positions={};};E.prototype.getDash=function(t,e){var i=t.join(",")+String(e);return this.positions[i]||(this.positions[i]=this.addDash(t,e)),this.positions[i]},E.prototype.addDash=function(e,i){var o=i?7:0,r=2*o+1;if(this.nextRow+r>this.height)return t.warnOnce("LineAtlas out of space"),null;for(var a=0,n=0;n<e.length;n++)a+=e[n];for(var s=this.width/a,l=s/2,c=e.length%2==1,u=-o;u<=o;u++)for(var h=this.nextRow+o+u,p=this.width*h,d=c?-e[e.length-1]:0,_=e[0],f=1,m=0;m<this.width;m++){for(;_<m/s;)d=_,_+=e[f],c&&f===e.length-1&&(_+=e[0]),f++;var g=Math.abs(m-d*s),v=Math.abs(m-_*s),y=Math.min(g,v),x=f%2==1,b=void 0;if(i){var w=o?u/o*(l+1):0;if(x){var E=l-Math.abs(w);b=Math.sqrt(y*y+E*E);}else b=l-Math.sqrt(y*y+w*w);}else b=(x?1:-1)*y;this.data[3+4*(p+m)]=Math.max(0,Math.min(255,b+128));}var T={y:(this.nextRow+o+.5)/this.height,height:2*o/this.height,width:a};return this.nextRow+=r,this.dirty=!0,T},E.prototype.bind=function(t){var e=t.gl;this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.width,this.height,e.RGBA,e.UNSIGNED_BYTE,this.data))):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.width,this.height,0,e.RGBA,e.UNSIGNED_BYTE,this.data));};var T=function e(i,o){this.workerPool=i,this.actors=[],this.currentActor=0,this.id=t.uniqueId();for(var r=this.workerPool.acquire(this.id),a=0;a<r.length;a++){var n=r[a],s=new e.Actor(n,o,this.id);s.name="Worker "+a,this.actors.push(s);}};function I(e,i,o){var r=function(r,a){if(r)return o(r);if(a){var n=t.pick(t.extend(a,e),["tiles","minzoom","maxzoom","attribution","mapbox_logo","bounds","scheme","tileSize","encoding"]);a.vector_layers&&(n.vectorLayers=a.vector_layers,n.vectorLayerIds=n.vectorLayers.map((function(t){return t.id}))),e.url&&(n.tiles=i.canonicalizeTileset(n,e.url)),o(null,n);}};return e.url?t.getJSON(i.transformRequest(i.normalizeSourceURL(e.url),t.ResourceType.Source),r):t.browser.frame((function(){return r(null,e)}))}T.prototype.broadcast=function(e,i,o){o=o||function(){},t.asyncAll(this.actors,(function(t,o){t.send(e,i,o);}),o);},T.prototype.getActor=function(){return this.currentActor=(this.currentActor+1)%this.actors.length,this.actors[this.currentActor]},T.prototype.remove=function(){this.actors.forEach((function(t){t.remove();})),this.actors=[],this.workerPool.release(this.id);},T.Actor=t.Actor;var C=function(e,i,o){this.bounds=t.LngLatBounds.convert(this.validateBounds(e)),this.minzoom=i||0,this.maxzoom=o||24;};C.prototype.validateBounds=function(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]},C.prototype.contains=function(e){var i=Math.pow(2,e.z),o=Math.floor(t.mercatorXfromLng(this.bounds.getWest())*i),r=Math.floor(t.mercatorYfromLat(this.bounds.getNorth())*i),a=Math.ceil(t.mercatorXfromLng(this.bounds.getEast())*i),n=Math.ceil(t.mercatorYfromLat(this.bounds.getSouth())*i);return e.x>=o&&e.x<a&&e.y>=r&&e.y<n};var S=function(e){function i(i,o,r,a){if(e.call(this),this.id=i,this.dispatcher=r,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,this._loaded=!1,t.extend(this,t.pick(o,["url","scheme","tileSize","promoteId"])),this._options=t.extend({type:"vector"},o),this._collectResourceTiming=o.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512");this.setEventedParent(a);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this;this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=I(this._options,this.map._requestManager,(function(i,o){e._tileJSONRequest=null,e._loaded=!0,i?e.fire(new t.ErrorEvent(i)):o&&(t.extend(e,o),o.bounds&&(e.tileBounds=new C(o.bounds,e.minzoom,e.maxzoom)),t.postTurnstileEvent(o.tiles,e.map._requestManager._customAccessToken),t.postMapLoadEvent(o.tiles,e.map._getMapId(),e.map._requestManager._skuToken,e.map._requestManager._customAccessToken),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})));}));},i.prototype.loaded=function(){return this._loaded},i.prototype.hasTile=function(t){return !this.tileBounds||this.tileBounds.contains(t.canonical)},i.prototype.onAdd=function(t){this.map=t,this.load();},i.prototype.onRemove=function(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null);},i.prototype.serialize=function(){return t.extend({},this._options)},i.prototype.loadTile=function(e,i){var o=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url,null),r={request:this.map._requestManager.transformRequest(o,t.ResourceType.Tile),uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:this.type,source:this.id,pixelRatio:t.browser.devicePixelRatio,showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId};function a(o,r){return delete e.request,e.aborted?i(null):o&&404!==o.status?i(o):(r&&r.resourceTiming&&(e.resourceTiming=r.resourceTiming),this.map._refreshExpiredTiles&&r&&e.setExpiryData(r),e.loadVectorData(r,this.map.painter),t.cacheEntryPossiblyAdded(this.dispatcher),i(null),void(e.reloadCallback&&(this.loadTile(e,e.reloadCallback),e.reloadCallback=null)))}r.request.collectResourceTiming=this._collectResourceTiming,e.actor&&"expired"!==e.state?"loading"===e.state?e.reloadCallback=i:e.request=e.actor.send("reloadTile",r,a.bind(this)):(e.actor=this.dispatcher.getActor(),e.request=e.actor.send("loadTile",r,a.bind(this)));},i.prototype.abortTile=function(t){t.request&&(t.request.cancel(),delete t.request),t.actor&&t.actor.send("abortTile",{uid:t.uid,type:this.type,source:this.id},void 0);},i.prototype.unloadTile=function(t){t.unloadVectorData(),t.actor&&t.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id},void 0);},i.prototype.hasTransition=function(){return !1},i}(t.Evented),P=function(e){function i(i,o,r,a){e.call(this),this.id=i,this.dispatcher=r,this.setEventedParent(a),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=t.extend({type:"raster"},o),t.extend(this,t.pick(o,["url","scheme","tileSize"]));}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this;this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=I(this._options,this.map._requestManager,(function(i,o){e._tileJSONRequest=null,e._loaded=!0,i?e.fire(new t.ErrorEvent(i)):o&&(t.extend(e,o),o.bounds&&(e.tileBounds=new C(o.bounds,e.minzoom,e.maxzoom)),t.postTurnstileEvent(o.tiles),t.postMapLoadEvent(o.tiles,e.map._getMapId(),e.map._requestManager._skuToken),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),e.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})));}));},i.prototype.loaded=function(){return this._loaded},i.prototype.onAdd=function(t){this.map=t,this.load();},i.prototype.onRemove=function(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null);},i.prototype.serialize=function(){return t.extend({},this._options)},i.prototype.hasTile=function(t){return !this.tileBounds||this.tileBounds.contains(t.canonical)},i.prototype.loadTile=function(e,i){var o=this,r=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url,this.tileSize);e.request=t.getImage(this.map._requestManager.transformRequest(r,t.ResourceType.Tile),(function(r,a){if(delete e.request,e.aborted)e.state="unloaded",i(null);else if(r)e.state="errored",i(r);else if(a){o.map._refreshExpiredTiles&&e.setExpiryData(a),delete a.cacheControl,delete a.expires;var n=o.map.painter.context,s=n.gl;e.texture=o.map.painter.getTileTexture(a.width),e.texture?e.texture.update(a,{useMipmap:!0}):(e.texture=new t.Texture(n,a,s.RGBA,{useMipmap:!0}),e.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),n.extTextureFilterAnisotropic&&s.texParameterf(s.TEXTURE_2D,n.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,n.extTextureFilterAnisotropicMax)),e.state="loaded",t.cacheEntryPossiblyAdded(o.dispatcher),i(null);}}));},i.prototype.abortTile=function(t,e){t.request&&(t.request.cancel(),delete t.request),e();},i.prototype.unloadTile=function(t,e){t.texture&&this.map.painter.saveTileTexture(t.texture),e();},i.prototype.hasTransition=function(){return !1},i}(t.Evented),z=function(e){function i(i,o,r,a){e.call(this,i,o,r,a),this.type="raster-dem",this.maxzoom=22,this._options=t.extend({type:"raster-dem"},o),this.encoding=o.encoding||"mapbox";}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.serialize=function(){return {type:"raster-dem",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds,encoding:this.encoding}},i.prototype.loadTile=function(e,i){var o=this.map._requestManager.normalizeTileURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url,this.tileSize);function r(t,o){t&&(e.state="errored",i(t)),o&&(e.dem=o,e.needsHillshadePrepare=!0,e.state="loaded",i(null));}e.request=t.getImage(this.map._requestManager.transformRequest(o,t.ResourceType.Tile),function(o,a){if(delete e.request,e.aborted)e.state="unloaded",i(null);else if(o)e.state="errored",i(o);else if(a){this.map._refreshExpiredTiles&&e.setExpiryData(a),delete a.cacheControl,delete a.expires;var n=t.window.ImageBitmap&&a instanceof t.window.ImageBitmap&&t.offscreenCanvasSupported()?a:t.browser.getImageData(a,1),s={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:n,encoding:this.encoding};e.actor&&"expired"!==e.state||(e.actor=this.dispatcher.getActor(),e.actor.send("loadDEMTile",s,r.bind(this)));}}.bind(this)),e.neighboringTiles=this._getNeighboringTiles(e.tileID);},i.prototype._getNeighboringTiles=function(e){var i=e.canonical,o=Math.pow(2,i.z),r=(i.x-1+o)%o,a=0===i.x?e.wrap-1:e.wrap,n=(i.x+1+o)%o,s=i.x+1===o?e.wrap+1:e.wrap,l={};return l[new t.OverscaledTileID(e.overscaledZ,a,i.z,r,i.y).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y).key]={backfilled:!1},i.y>0&&(l[new t.OverscaledTileID(e.overscaledZ,a,i.z,r,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y-1).key]={backfilled:!1}),i.y+1<o&&(l[new t.OverscaledTileID(e.overscaledZ,a,i.z,r,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y+1).key]={backfilled:!1}),l},i.prototype.unloadTile=function(t){t.demTexture&&this.map.painter.saveTileTexture(t.demTexture),t.fbo&&(t.fbo.destroy(),delete t.fbo),t.dem&&delete t.dem,delete t.neighboringTiles,t.state="unloaded",t.actor&&t.actor.send("removeDEMTile",{uid:t.uid,source:this.id});},i}(P),L=function(e){function i(i,o,r,a){e.call(this),this.id=i,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this._removed=!1,this._loaded=!1,this.actor=r.getActor(),this.setEventedParent(a),this._data=o.data,this._options=t.extend({},o),this._collectResourceTiming=o.collectResourceTiming,this._resourceTiming=[],void 0!==o.maxzoom&&(this.maxzoom=o.maxzoom),o.type&&(this.type=o.type),o.attribution&&(this.attribution=o.attribution),this.promoteId=o.promoteId;var n=t.EXTENT/this.tileSize;this.workerOptions=t.extend({source:this.id,cluster:o.cluster||!1,geojsonVtOptions:{buffer:(void 0!==o.buffer?o.buffer:128)*n,tolerance:(void 0!==o.tolerance?o.tolerance:.375)*n,extent:t.EXTENT,maxZoom:this.maxzoom,lineMetrics:o.lineMetrics||!1,generateId:o.generateId||!1},superclusterOptions:{maxZoom:void 0!==o.clusterMaxZoom?Math.min(o.clusterMaxZoom,this.maxzoom-1):this.maxzoom-1,extent:t.EXTENT,radius:(o.clusterRadius||50)*n,log:!1,generateId:o.generateId||!1},clusterProperties:o.clusterProperties},o.workerOptions);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this;this.fire(new t.Event("dataloading",{dataType:"source"})),this._updateWorkerData((function(i){if(i)e.fire(new t.ErrorEvent(i));else{var o={dataType:"source",sourceDataType:"metadata"};e._collectResourceTiming&&e._resourceTiming&&e._resourceTiming.length>0&&(o.resourceTiming=e._resourceTiming,e._resourceTiming=[]),e.fire(new t.Event("data",o));}}));},i.prototype.onAdd=function(t){this.map=t,this.load();},i.prototype.setData=function(e){var i=this;return this._data=e,this.fire(new t.Event("dataloading",{dataType:"source"})),this._updateWorkerData((function(e){if(e)i.fire(new t.ErrorEvent(e));else{var o={dataType:"source",sourceDataType:"content"};i._collectResourceTiming&&i._resourceTiming&&i._resourceTiming.length>0&&(o.resourceTiming=i._resourceTiming,i._resourceTiming=[]),i.fire(new t.Event("data",o));}})),this},i.prototype.getClusterExpansionZoom=function(t,e){return this.actor.send("geojson.getClusterExpansionZoom",{clusterId:t,source:this.id},e),this},i.prototype.getClusterChildren=function(t,e){return this.actor.send("geojson.getClusterChildren",{clusterId:t,source:this.id},e),this},i.prototype.getClusterLeaves=function(t,e,i,o){return this.actor.send("geojson.getClusterLeaves",{source:this.id,clusterId:t,limit:e,offset:i},o),this},i.prototype._updateWorkerData=function(e){var i=this;this._loaded=!1;var o=t.extend({},this.workerOptions),r=this._data;"string"==typeof r?(o.request=this.map._requestManager.transformRequest(t.browser.resolveURL(r),t.ResourceType.Source),o.request.collectResourceTiming=this._collectResourceTiming):o.data=JSON.stringify(r),this.actor.send(this.type+".loadData",o,(function(t,r){i._removed||r&&r.abandoned||(i._loaded=!0,r&&r.resourceTiming&&r.resourceTiming[i.id]&&(i._resourceTiming=r.resourceTiming[i.id].slice(0)),i.actor.send(i.type+".coalesce",{source:o.source},null),e(t));}));},i.prototype.loaded=function(){return this._loaded},i.prototype.loadTile=function(e,i){var o=this,r=e.actor?"reloadTile":"loadTile";e.actor=this.actor;var a={type:this.type,uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:t.browser.devicePixelRatio,showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId};e.request=this.actor.send(r,a,(function(t,a){return delete e.request,e.unloadVectorData(),e.aborted?i(null):t?i(t):(e.loadVectorData(a,o.map.painter,"reloadTile"===r),i(null))}));},i.prototype.abortTile=function(t){t.request&&(t.request.cancel(),delete t.request),t.aborted=!0;},i.prototype.unloadTile=function(t){t.unloadVectorData(),this.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id});},i.prototype.onRemove=function(){this._removed=!0,this.actor.send("removeSource",{type:this.type,source:this.id});},i.prototype.serialize=function(){return t.extend({},this._options,{type:this.type,data:this._data})},i.prototype.hasTransition=function(){return !1},i}(t.Evented),M=t.createLayout([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]),D=function(e){function i(t,i,o,r){e.call(this),this.id=t,this.dispatcher=o,this.coordinates=i.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this._loaded=!1,this.setEventedParent(r),this.options=i;}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(e,i){var o=this;this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this.url=this.options.url,t.getImage(this.map._requestManager.transformRequest(this.url,t.ResourceType.Image),(function(r,a){o._loaded=!0,r?o.fire(new t.ErrorEvent(r)):a&&(o.image=a,e&&(o.coordinates=e),i&&i(),o._finishLoading());}));},i.prototype.loaded=function(){return this._loaded},i.prototype.updateImage=function(t){var e=this;return this.image&&t.url?(this.options.url=t.url,this.load(t.coordinates,(function(){e.texture=null;})),this):this},i.prototype._finishLoading=function(){this.map&&(this.setCoordinates(this.coordinates),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})));},i.prototype.onAdd=function(t){this.map=t,this.load();},i.prototype.setCoordinates=function(e){var i=this;this.coordinates=e;var o=e.map(t.MercatorCoordinate.fromLngLat);this.tileID=function(e){for(var i=1/0,o=1/0,r=-1/0,a=-1/0,n=0,s=e;n<s.length;n+=1){var l=s[n];i=Math.min(i,l.x),o=Math.min(o,l.y),r=Math.max(r,l.x),a=Math.max(a,l.y);}var c=r-i,u=a-o,h=Math.max(c,u),p=Math.max(0,Math.floor(-Math.log(h)/Math.LN2)),d=Math.pow(2,p);return new t.CanonicalTileID(p,Math.floor((i+r)/2*d),Math.floor((o+a)/2*d))}(o),this.minzoom=this.maxzoom=this.tileID.z;var r=o.map((function(t){return i.tileID.getTilePoint(t)._round()}));return this._boundsArray=new t.StructArrayLayout4i8,this._boundsArray.emplaceBack(r[0].x,r[0].y,0,0),this._boundsArray.emplaceBack(r[1].x,r[1].y,t.EXTENT,0),this._boundsArray.emplaceBack(r[3].x,r[3].y,0,t.EXTENT),this._boundsArray.emplaceBack(r[2].x,r[2].y,t.EXTENT,t.EXTENT),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})),this},i.prototype.prepare=function(){if(0!==Object.keys(this.tiles).length&&this.image){var e=this.map.painter.context,i=e.gl;for(var o in this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,M.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture||(this.texture=new t.Texture(e,this.image,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE)),this.tiles){var r=this.tiles[o];"loaded"!==r.state&&(r.state="loaded",r.texture=this.texture);}}},i.prototype.loadTile=function(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null));},i.prototype.serialize=function(){return {type:"image",url:this.options.url,coordinates:this.coordinates}},i.prototype.hasTransition=function(){return !1},i}(t.Evented);var A=function(e){function i(t,i,o,r){e.call(this,t,i,o,r),this.roundZoom=!0,this.type="video",this.options=i;}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){var e=this;this._loaded=!1;var i=this.options;this.urls=[];for(var o=0,r=i.urls;o<r.length;o+=1){var a=r[o];this.urls.push(this.map._requestManager.transformRequest(a,t.ResourceType.Source).url);}t.getVideo(this.urls,(function(i,o){e._loaded=!0,i?e.fire(new t.ErrorEvent(i)):o&&(e.video=o,e.video.loop=!0,e.video.addEventListener("playing",(function(){e.map.triggerRepaint();})),e.map&&e.video.play(),e._finishLoading());}));},i.prototype.pause=function(){this.video&&this.video.pause();},i.prototype.play=function(){this.video&&this.video.play();},i.prototype.seek=function(e){if(this.video){var i=this.video.seekable;e<i.start(0)||e>i.end(0)?this.fire(new t.ErrorEvent(new t.ValidationError("sources."+this.id,null,"Playback for this video can be set only between the "+i.start(0)+" and "+i.end(0)+"-second mark."))):this.video.currentTime=e;}},i.prototype.getVideo=function(){return this.video},i.prototype.onAdd=function(t){this.map||(this.map=t,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)));},i.prototype.prepare=function(){if(!(0===Object.keys(this.tiles).length||this.video.readyState<2)){var e=this.map.painter.context,i=e.gl;for(var o in this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,M.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?this.video.paused||(this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE),i.texSubImage2D(i.TEXTURE_2D,0,0,0,i.RGBA,i.UNSIGNED_BYTE,this.video)):(this.texture=new t.Texture(e,this.video,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE)),this.tiles){var r=this.tiles[o];"loaded"!==r.state&&(r.state="loaded",r.texture=this.texture);}}},i.prototype.serialize=function(){return {type:"video",urls:this.urls,coordinates:this.coordinates}},i.prototype.hasTransition=function(){return this.video&&!this.video.paused},i}(D),R=function(e){function i(i,o,r,a){e.call(this,i,o,r,a),o.coordinates?Array.isArray(o.coordinates)&&4===o.coordinates.length&&!o.coordinates.some((function(t){return !Array.isArray(t)||2!==t.length||t.some((function(t){return "number"!=typeof t}))}))||this.fire(new t.ErrorEvent(new t.ValidationError("sources."+i,null,'"coordinates" property must be an array of 4 longitude/latitude array pairs'))):this.fire(new t.ErrorEvent(new t.ValidationError("sources."+i,null,'missing required property "coordinates"'))),o.animate&&"boolean"!=typeof o.animate&&this.fire(new t.ErrorEvent(new t.ValidationError("sources."+i,null,'optional "animate" property must be a boolean value'))),o.canvas?"string"==typeof o.canvas||o.canvas instanceof t.window.HTMLCanvasElement||this.fire(new t.ErrorEvent(new t.ValidationError("sources."+i,null,'"canvas" must be either a string representing the ID of the canvas element from which to read, or an HTMLCanvasElement instance'))):this.fire(new t.ErrorEvent(new t.ValidationError("sources."+i,null,'missing required property "canvas"'))),this.options=o,this.animate=void 0===o.animate||o.animate;}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.load=function(){this._loaded=!0,this.canvas||(this.canvas=this.options.canvas instanceof t.window.HTMLCanvasElement?this.options.canvas:t.window.document.getElementById(this.options.canvas)),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions()?this.fire(new t.ErrorEvent(new Error("Canvas dimensions cannot be less than or equal to zero."))):(this.play=function(){this._playing=!0,this.map.triggerRepaint();},this.pause=function(){this._playing&&(this.prepare(),this._playing=!1);},this._finishLoading());},i.prototype.getCanvas=function(){return this.canvas},i.prototype.onAdd=function(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play();},i.prototype.onRemove=function(){this.pause();},i.prototype.prepare=function(){var e=!1;if(this.canvas.width!==this.width&&(this.width=this.canvas.width,e=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,e=!0),!this._hasInvalidDimensions()&&0!==Object.keys(this.tiles).length){var i=this.map.painter.context,o=i.gl;for(var r in this.boundsBuffer||(this.boundsBuffer=i.createVertexBuffer(this._boundsArray,M.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?(e||this._playing)&&this.texture.update(this.canvas,{premultiply:!0}):this.texture=new t.Texture(i,this.canvas,o.RGBA,{premultiply:!0}),this.tiles){var a=this.tiles[r];"loaded"!==a.state&&(a.state="loaded",a.texture=this.texture);}}},i.prototype.serialize=function(){return {type:"canvas",coordinates:this.coordinates}},i.prototype.hasTransition=function(){return this._playing},i.prototype._hasInvalidDimensions=function(){for(var t=0,e=[this.canvas.width,this.canvas.height];t<e.length;t+=1){var i=e[t];if(isNaN(i)||i<=0)return !0}return !1},i}(D),k={vector:S,raster:P,"raster-dem":z,geojson:L,video:A,image:D,canvas:R},B=function(e,i,o,r){var a=new k[i.type](e,i,o,r);if(a.id!==e)throw new Error("Expected Source id to be "+e+" instead of "+a.id);return t.bindAll(["load","abort","unload","serialize","prepare"],a),a};function O(e,i){var o=t.identity([]);return t.translate(o,o,[1,1,0]),t.scale(o,o,[.5*e.width,.5*e.height,1]),t.multiply(o,o,e.calculatePosMatrix(i.toUnwrapped()))}function F(t,e,i,o,r){var a=function(t,e,i){if(t)for(var o=0,r=t;o<r.length;o+=1){var a=e[r[o]];if(a&&a.source===i&&"fill-extrusion"===a.type)return !0}else for(var n in e){var s=e[n];if(s.source===i&&"fill-extrusion"===s.type)return !0}return !1}(o&&o.layers,e,t.id),n=r.maxPitchScaleFactor(),s=t.tilesIn(i,n,a);s.sort(U);for(var l=[],c=0,u=s;c<u.length;c+=1){var h=u[c];l.push({wrappedTileID:h.tileID.wrapped().key,queryResults:h.tile.queryRenderedFeatures(e,t._state,h.queryGeometry,h.cameraQueryGeometry,h.scale,o,r,n,O(t.transform,h.tileID))});}var p=function(t){for(var e={},i={},o=0,r=t;o<r.length;o+=1){var a=r[o],n=a.queryResults,s=a.wrappedTileID,l=i[s]=i[s]||{};for(var c in n)for(var u=n[c],h=l[c]=l[c]||{},p=e[c]=e[c]||[],d=0,_=u;d<_.length;d+=1){var f=_[d];h[f.featureIndex]||(h[f.featureIndex]=!0,p.push(f));}}return e}(l);for(var d in p)p[d].forEach((function(e){var i=e.feature,o=t.getFeatureState(i.layer["source-layer"],i.id);i.source=i.layer.source,i.layer["source-layer"]&&(i.sourceLayer=i.layer["source-layer"]),i.state=o;}));return p}function U(t,e){var i=t.tileID,o=e.tileID;return i.overscaledZ-o.overscaledZ||i.canonical.y-o.canonical.y||i.wrap-o.wrap||i.canonical.x-o.canonical.x}var N=function(t,e){this.max=t,this.onRemove=e,this.reset();};N.prototype.reset=function(){for(var t in this.data)for(var e=0,i=this.data[t];e<i.length;e+=1){var o=i[e];o.timeout&&clearTimeout(o.timeout),this.onRemove(o.value);}return this.data={},this.order=[],this},N.prototype.add=function(t,e,i){var o=this,r=t.wrapped().key;void 0===this.data[r]&&(this.data[r]=[]);var a={value:e,timeout:void 0};if(void 0!==i&&(a.timeout=setTimeout((function(){o.remove(t,a);}),i)),this.data[r].push(a),this.order.push(r),this.order.length>this.max){var n=this._getAndRemoveByKey(this.order[0]);n&&this.onRemove(n);}return this},N.prototype.has=function(t){return t.wrapped().key in this.data},N.prototype.getAndRemove=function(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null},N.prototype._getAndRemoveByKey=function(t){var e=this.data[t].shift();return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value},N.prototype.getByKey=function(t){var e=this.data[t];return e?e[0].value:null},N.prototype.get=function(t){return this.has(t)?this.data[t.wrapped().key][0].value:null},N.prototype.remove=function(t,e){if(!this.has(t))return this;var i=t.wrapped().key,o=void 0===e?0:this.data[i].indexOf(e),r=this.data[i][o];return this.data[i].splice(o,1),r.timeout&&clearTimeout(r.timeout),0===this.data[i].length&&delete this.data[i],this.onRemove(r.value),this.order.splice(this.order.indexOf(i),1),this},N.prototype.setMaxSize=function(t){for(this.max=t;this.order.length>this.max;){var e=this._getAndRemoveByKey(this.order[0]);e&&this.onRemove(e);}return this},N.prototype.filter=function(t){var e=[];for(var i in this.data)for(var o=0,r=this.data[i];o<r.length;o+=1){var a=r[o];t(a.value)||e.push(a);}for(var n=0,s=e;n<s.length;n+=1){var l=s[n];this.remove(l.value.tileID,l);}};var j=function(t,e,i){this.context=t;var o=t.gl;this.buffer=o.createBuffer(),this.dynamicDraw=Boolean(i),this.context.unbindVAO(),t.bindElementBuffer.set(this.buffer),o.bufferData(o.ELEMENT_ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?o.DYNAMIC_DRAW:o.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer;};j.prototype.bind=function(){this.context.bindElementBuffer.set(this.buffer);},j.prototype.updateData=function(t){var e=this.context.gl;this.context.unbindVAO(),this.bind(),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,t.arrayBuffer);},j.prototype.destroy=function(){var t=this.context.gl;this.buffer&&(t.deleteBuffer(this.buffer),delete this.buffer);};var Z={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"},q=function(t,e,i,o){this.length=e.length,this.attributes=i,this.itemSize=e.bytesPerElement,this.dynamicDraw=o,this.context=t;var r=t.gl;this.buffer=r.createBuffer(),t.bindVertexBuffer.set(this.buffer),r.bufferData(r.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?r.DYNAMIC_DRAW:r.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer;};q.prototype.bind=function(){this.context.bindVertexBuffer.set(this.buffer);},q.prototype.updateData=function(t){var e=this.context.gl;this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer);},q.prototype.enableAttributes=function(t,e){for(var i=0;i<this.attributes.length;i++){var o=this.attributes[i],r=e.attributes[o.name];void 0!==r&&t.enableVertexAttribArray(r);}},q.prototype.setVertexAttribPointers=function(t,e,i){for(var o=0;o<this.attributes.length;o++){var r=this.attributes[o],a=e.attributes[r.name];void 0!==a&&t.vertexAttribPointer(a,r.components,t[Z[r.type]],!1,this.itemSize,r.offset+this.itemSize*(i||0));}},q.prototype.destroy=function(){var t=this.context.gl;this.buffer&&(t.deleteBuffer(this.buffer),delete this.buffer);};var V=function(t){this.gl=t.gl,this.default=this.getDefault(),this.current=this.default,this.dirty=!1;};V.prototype.get=function(){return this.current},V.prototype.set=function(t){},V.prototype.getDefault=function(){return this.default},V.prototype.setDefault=function(){this.set(this.default);};var G=function(e){function i(){e.apply(this,arguments);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.getDefault=function(){return t.Color.transparent},i.prototype.set=function(t){var e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1);},i}(V),W=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return 1},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.clearDepth(t),this.current=t,this.dirty=!1);},e}(V),X=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return 0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.clearStencil(t),this.current=t,this.dirty=!1);},e}(V),H=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return [!0,!0,!0,!0]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1);},e}(V),K=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return !0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.depthMask(t),this.current=t,this.dirty=!1);},e}(V),Y=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return 255},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.stencilMask(t),this.current=t,this.dirty=!1);},e}(V),J=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return {func:this.gl.ALWAYS,ref:0,mask:255}},e.prototype.set=function(t){var e=this.current;(t.func!==e.func||t.ref!==e.ref||t.mask!==e.mask||this.dirty)&&(this.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t,this.dirty=!1);},e}(V),Q=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){var t=this.gl;return [t.KEEP,t.KEEP,t.KEEP]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||this.dirty)&&(this.gl.stencilOp(t[0],t[1],t[2]),this.current=t,this.dirty=!1);},e}(V),$=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return !1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t,this.dirty=!1;}},e}(V),tt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return [0,1]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.depthRange(t[0],t[1]),this.current=t,this.dirty=!1);},e}(V),et=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return !1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t,this.dirty=!1;}},e}(V),it=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.LESS},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.depthFunc(t),this.current=t,this.dirty=!1);},e}(V),ot=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return !1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t,this.dirty=!1;}},e}(V),rt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){var t=this.gl;return [t.ONE,t.ZERO]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.blendFunc(t[0],t[1]),this.current=t,this.dirty=!1);},e}(V),at=function(e){function i(){e.apply(this,arguments);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.getDefault=function(){return t.Color.transparent},i.prototype.set=function(t){var e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1);},i}(V),nt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.FUNC_ADD},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.blendEquation(t),this.current=t,this.dirty=!1);},e}(V),st=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return !1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),this.current=t,this.dirty=!1;}},e}(V),lt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.BACK},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.cullFace(t),this.current=t,this.dirty=!1);},e}(V),ct=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.CCW},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.frontFace(t),this.current=t,this.dirty=!1);},e}(V),ut=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.useProgram(t),this.current=t,this.dirty=!1);},e}(V),ht=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return this.gl.TEXTURE0},e.prototype.set=function(t){(t!==this.current||this.dirty)&&(this.gl.activeTexture(t),this.current=t,this.dirty=!1);},e}(V),pt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){var t=this.gl;return [0,0,t.drawingBufferWidth,t.drawingBufferHeight]},e.prototype.set=function(t){var e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1);},e}(V),dt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t,this.dirty=!1;}},e}(V),_t=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t,this.dirty=!1;}},e}(V),ft=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;e.bindTexture(e.TEXTURE_2D,t),this.current=t,this.dirty=!1;}},e}(V),mt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t,this.dirty=!1;}},e}(V),gt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){var e=this.gl;e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t,this.dirty=!1;},e}(V),vt=function(t){function e(e){t.call(this,e),this.vao=e.extVertexArrayObject;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e.prototype.set=function(t){this.vao&&(t!==this.current||this.dirty)&&(this.vao.bindVertexArrayOES(t),this.current=t,this.dirty=!1);},e}(V),yt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return 4},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t,this.dirty=!1;}},e}(V),xt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return !1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t,this.dirty=!1;}},e}(V),bt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return !1},e.prototype.set=function(t){if(t!==this.current||this.dirty){var e=this.gl;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t),this.current=t,this.dirty=!1;}},e}(V),wt=function(t){function e(e,i){t.call(this,e),this.context=e,this.parent=i;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDefault=function(){return null},e}(V),Et=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setDirty=function(){this.dirty=!0;},e.prototype.set=function(t){if(t!==this.current||this.dirty){this.context.bindFramebuffer.set(this.parent);var e=this.gl;e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1;}},e}(wt),Tt=function(t){function e(){t.apply(this,arguments);}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(t!==this.current||this.dirty){this.context.bindFramebuffer.set(this.parent);var e=this.gl;e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1;}},e}(wt),It=function(t,e,i){this.context=t,this.width=e,this.height=i;var o=t.gl,r=this.framebuffer=o.createFramebuffer();this.colorAttachment=new Et(t,r),this.depthAttachment=new Tt(t,r);};It.prototype.destroy=function(){var t=this.context.gl,e=this.colorAttachment.get();e&&t.deleteTexture(e);var i=this.depthAttachment.get();i&&t.deleteRenderbuffer(i),t.deleteFramebuffer(this.framebuffer);};var Ct=function(t,e,i){this.func=t,this.mask=e,this.range=i;};Ct.ReadOnly=!1,Ct.ReadWrite=!0,Ct.disabled=new Ct(519,Ct.ReadOnly,[0,1]);var St=function(t,e,i,o,r,a){this.test=t,this.ref=e,this.mask=i,this.fail=o,this.depthFail=r,this.pass=a;};St.disabled=new St({func:519,mask:0},0,0,7680,7680,7680);var Pt=function(t,e,i){this.blendFunction=t,this.blendColor=e,this.mask=i;};Pt.Replace=[1,0],Pt.disabled=new Pt(Pt.Replace,t.Color.transparent,[!1,!1,!1,!1]),Pt.unblended=new Pt(Pt.Replace,t.Color.transparent,[!0,!0,!0,!0]),Pt.alphaBlended=new Pt([1,771],t.Color.transparent,[!0,!0,!0,!0]);var zt=function(t,e,i){this.enable=t,this.mode=e,this.frontFace=i;};zt.disabled=new zt(!1,1029,2305),zt.backCCW=new zt(!0,1029,2305);var Lt=function(t){this.gl=t,this.extVertexArrayObject=this.gl.getExtension("OES_vertex_array_object"),this.clearColor=new G(this),this.clearDepth=new W(this),this.clearStencil=new X(this),this.colorMask=new H(this),this.depthMask=new K(this),this.stencilMask=new Y(this),this.stencilFunc=new J(this),this.stencilOp=new Q(this),this.stencilTest=new $(this),this.depthRange=new tt(this),this.depthTest=new et(this),this.depthFunc=new it(this),this.blend=new ot(this),this.blendFunc=new rt(this),this.blendColor=new at(this),this.blendEquation=new nt(this),this.cullFace=new st(this),this.cullFaceSide=new lt(this),this.frontFace=new ct(this),this.program=new ut(this),this.activeTexture=new ht(this),this.viewport=new pt(this),this.bindFramebuffer=new dt(this),this.bindRenderbuffer=new _t(this),this.bindTexture=new ft(this),this.bindVertexBuffer=new mt(this),this.bindElementBuffer=new gt(this),this.bindVertexArrayOES=this.extVertexArrayObject&&new vt(this),this.pixelStoreUnpack=new yt(this),this.pixelStoreUnpackPremultiplyAlpha=new xt(this),this.pixelStoreUnpackFlipY=new bt(this),this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.extTextureHalfFloat=t.getExtension("OES_texture_half_float"),this.extTextureHalfFloat&&t.getExtension("OES_texture_half_float_linear"),this.extTimerQuery=t.getExtension("EXT_disjoint_timer_query");};Lt.prototype.setDefault=function(){this.unbindVAO(),this.clearColor.setDefault(),this.clearDepth.setDefault(),this.clearStencil.setDefault(),this.colorMask.setDefault(),this.depthMask.setDefault(),this.stencilMask.setDefault(),this.stencilFunc.setDefault(),this.stencilOp.setDefault(),this.stencilTest.setDefault(),this.depthRange.setDefault(),this.depthTest.setDefault(),this.depthFunc.setDefault(),this.blend.setDefault(),this.blendFunc.setDefault(),this.blendColor.setDefault(),this.blendEquation.setDefault(),this.cullFace.setDefault(),this.cullFaceSide.setDefault(),this.frontFace.setDefault(),this.program.setDefault(),this.activeTexture.setDefault(),this.bindFramebuffer.setDefault(),this.pixelStoreUnpack.setDefault(),this.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.pixelStoreUnpackFlipY.setDefault();},Lt.prototype.setDirty=function(){this.clearColor.dirty=!0,this.clearDepth.dirty=!0,this.clearStencil.dirty=!0,this.colorMask.dirty=!0,this.depthMask.dirty=!0,this.stencilMask.dirty=!0,this.stencilFunc.dirty=!0,this.stencilOp.dirty=!0,this.stencilTest.dirty=!0,this.depthRange.dirty=!0,this.depthTest.dirty=!0,this.depthFunc.dirty=!0,this.blend.dirty=!0,this.blendFunc.dirty=!0,this.blendColor.dirty=!0,this.blendEquation.dirty=!0,this.cullFace.dirty=!0,this.cullFaceSide.dirty=!0,this.frontFace.dirty=!0,this.program.dirty=!0,this.activeTexture.dirty=!0,this.viewport.dirty=!0,this.bindFramebuffer.dirty=!0,this.bindRenderbuffer.dirty=!0,this.bindTexture.dirty=!0,this.bindVertexBuffer.dirty=!0,this.bindElementBuffer.dirty=!0,this.extVertexArrayObject&&(this.bindVertexArrayOES.dirty=!0),this.pixelStoreUnpack.dirty=!0,this.pixelStoreUnpackPremultiplyAlpha.dirty=!0,this.pixelStoreUnpackFlipY.dirty=!0;},Lt.prototype.createIndexBuffer=function(t,e){return new j(this,t,e)},Lt.prototype.createVertexBuffer=function(t,e,i){return new q(this,t,e,i)},Lt.prototype.createRenderbuffer=function(t,e,i){var o=this.gl,r=o.createRenderbuffer();return this.bindRenderbuffer.set(r),o.renderbufferStorage(o.RENDERBUFFER,t,e,i),this.bindRenderbuffer.set(null),r},Lt.prototype.createFramebuffer=function(t,e){return new It(this,t,e)},Lt.prototype.clear=function(t){var e=t.color,i=t.depth,o=this.gl,r=0;e&&(r|=o.COLOR_BUFFER_BIT,this.clearColor.set(e),this.colorMask.set([!0,!0,!0,!0])),void 0!==i&&(r|=o.DEPTH_BUFFER_BIT,this.depthRange.set([0,1]),this.clearDepth.set(i),this.depthMask.set(!0)),o.clear(r);},Lt.prototype.setCullFace=function(t){!1===t.enable?this.cullFace.set(!1):(this.cullFace.set(!0),this.cullFaceSide.set(t.mode),this.frontFace.set(t.frontFace));},Lt.prototype.setDepthMode=function(t){t.func!==this.gl.ALWAYS||t.mask?(this.depthTest.set(!0),this.depthFunc.set(t.func),this.depthMask.set(t.mask),this.depthRange.set(t.range)):this.depthTest.set(!1);},Lt.prototype.setStencilMode=function(t){t.test.func!==this.gl.ALWAYS||t.mask?(this.stencilTest.set(!0),this.stencilMask.set(t.mask),this.stencilOp.set([t.fail,t.depthFail,t.pass]),this.stencilFunc.set({func:t.test.func,ref:t.ref,mask:t.test.mask})):this.stencilTest.set(!1);},Lt.prototype.setColorMode=function(e){t.deepEqual(e.blendFunction,Pt.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(e.blendFunction),this.blendColor.set(e.blendColor)),this.colorMask.set(e.mask);},Lt.prototype.unbindVAO=function(){this.extVertexArrayObject&&this.bindVertexArrayOES.set(null);};var Mt=function(e){function i(i,o,r){var a=this;e.call(this),this.id=i,this.dispatcher=r,this.on("data",(function(t){"source"===t.dataType&&"metadata"===t.sourceDataType&&(a._sourceLoaded=!0),a._sourceLoaded&&!a._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(a.reload(),a.transform&&a.update(a.transform));})),this.on("error",(function(){a._sourceErrored=!0;})),this._source=B(i,o,r,this),this._tiles={},this._cache=new N(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._loadedParentTiles={},this._coveredTiles={},this._state=new t.SourceFeatureState;}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.onAdd=function(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(t);},i.prototype.onRemove=function(t){this._source&&this._source.onRemove&&this._source.onRemove(t);},i.prototype.loaded=function(){if(this._sourceErrored)return !0;if(!this._sourceLoaded)return !1;if(!this._source.loaded())return !1;for(var t in this._tiles){var e=this._tiles[t];if("loaded"!==e.state&&"errored"!==e.state)return !1}return !0},i.prototype.getSource=function(){return this._source},i.prototype.pause=function(){this._paused=!0;},i.prototype.resume=function(){if(this._paused){var t=this._shouldReloadOnResume;this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform);}},i.prototype._loadTile=function(t,e){return this._source.loadTile(t,e)},i.prototype._unloadTile=function(t){if(this._source.unloadTile)return this._source.unloadTile(t,(function(){}))},i.prototype._abortTile=function(t){if(this._source.abortTile)return this._source.abortTile(t,(function(){}))},i.prototype.serialize=function(){return this._source.serialize()},i.prototype.prepare=function(t){for(var e in this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null),this._tiles){var i=this._tiles[e];i.upload(t),i.prepare(this.map.style.imageManager);}},i.prototype.getIds=function(){return Object.values(this._tiles).map((function(t){return t.tileID})).sort(Dt).map((function(t){return t.key}))},i.prototype.getRenderableIds=function(e){var i=this,o=[];for(var r in this._tiles)this._isIdRenderable(r,e)&&o.push(this._tiles[r]);return e?o.sort((function(e,o){var r=e.tileID,a=o.tileID,n=new t.Point(r.canonical.x,r.canonical.y)._rotate(i.transform.angle),s=new t.Point(a.canonical.x,a.canonical.y)._rotate(i.transform.angle);return r.overscaledZ-a.overscaledZ||s.y-n.y||s.x-n.x})).map((function(t){return t.tileID.key})):o.map((function(t){return t.tileID})).sort(Dt).map((function(t){return t.key}))},i.prototype.hasRenderableParent=function(t){var e=this.findLoadedParent(t,0);return !!e&&this._isIdRenderable(e.tileID.key)},i.prototype._isIdRenderable=function(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())},i.prototype.reload=function(){if(this._paused)this._shouldReloadOnResume=!0;else for(var t in this._cache.reset(),this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(t,"reloading");},i.prototype._reloadTile=function(t,e){var i=this._tiles[t];i&&("loading"!==i.state&&(i.state=e),this._loadTile(i,this._tileLoaded.bind(this,i,t,e)));},i.prototype._tileLoaded=function(e,i,o,r){if(r)return e.state="errored",void(404!==r.status?this._source.fire(new t.ErrorEvent(r,{tile:e})):this.update(this.transform));e.timeAdded=t.browser.now(),"expired"===o&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(i,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._state.initializeTileState(e,this.map?this.map.painter:null),this._source.fire(new t.Event("data",{dataType:"source",tile:e,coord:e.tileID}));},i.prototype._backfillDEM=function(t){for(var e=this.getRenderableIds(),i=0;i<e.length;i++){var o=e[i];if(t.neighboringTiles&&t.neighboringTiles[o]){var r=this.getTileByID(o);a(t,r),a(r,t);}}function a(t,e){t.needsHillshadePrepare=!0;var i=e.tileID.canonical.x-t.tileID.canonical.x,o=e.tileID.canonical.y-t.tileID.canonical.y,r=Math.pow(2,t.tileID.canonical.z),a=e.tileID.key;0===i&&0===o||Math.abs(o)>1||(Math.abs(i)>1&&(1===Math.abs(i+r)?i+=r:1===Math.abs(i-r)&&(i-=r)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,i,o),t.neighboringTiles&&t.neighboringTiles[a]&&(t.neighboringTiles[a].backfilled=!0)));}},i.prototype.getTile=function(t){return this.getTileByID(t.key)},i.prototype.getTileByID=function(t){return this._tiles[t]},i.prototype._retainLoadedChildren=function(t,e,i,o){for(var r in this._tiles){var a=this._tiles[r];if(!(o[r]||!a.hasData()||a.tileID.overscaledZ<=e||a.tileID.overscaledZ>i)){for(var n=a.tileID;a&&a.tileID.overscaledZ>e+1;){var s=a.tileID.scaledTo(a.tileID.overscaledZ-1);(a=this._tiles[s.key])&&a.hasData()&&(n=s);}for(var l=n;l.overscaledZ>e;)if(t[(l=l.scaledTo(l.overscaledZ-1)).key]){o[n.key]=n;break}}}},i.prototype.findLoadedParent=function(t,e){if(t.key in this._loadedParentTiles){var i=this._loadedParentTiles[t.key];return i&&i.tileID.overscaledZ>=e?i:null}for(var o=t.overscaledZ-1;o>=e;o--){var r=t.scaledTo(o),a=this._getLoadedTile(r);if(a)return a}},i.prototype._getLoadedTile=function(t){var e=this._tiles[t.key];return e&&e.hasData()?e:this._cache.getByKey(t.wrapped().key)},i.prototype.updateCacheSize=function(t){var e=(Math.ceil(t.width/this._source.tileSize)+1)*(Math.ceil(t.height/this._source.tileSize)+1),i=Math.floor(5*e),o="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,i):i;this._cache.setMaxSize(o);},i.prototype.handleWrapJump=function(t){var e=(t-(void 0===this._prevLng?t:this._prevLng))/360,i=Math.round(e);if(this._prevLng=t,i){var o={};for(var r in this._tiles){var a=this._tiles[r];a.tileID=a.tileID.unwrapTo(a.tileID.wrap+i),o[a.tileID.key]=a;}for(var n in this._tiles=o,this._timers)clearTimeout(this._timers[n]),delete this._timers[n];for(var s in this._tiles){var l=this._tiles[s];this._setTileReloadTimer(s,l);}}},i.prototype.update=function(e){var o=this;if(this.transform=e,this._sourceLoaded&&!this._paused){var r;this.updateCacheSize(e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used?this._source.tileID?r=e.getVisibleUnwrappedCoordinates(this._source.tileID).map((function(e){return new t.OverscaledTileID(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y)})):(r=e.coveringTiles({tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled}),this._source.hasTile&&(r=r.filter((function(t){return o._source.hasTile(t)})))):r=[];var a=e.coveringZoomLevel(this._source),n=Math.max(a-i.maxOverzooming,this._source.minzoom),s=Math.max(a+i.maxUnderzooming,this._source.minzoom),l=this._updateRetainedTiles(r,a);if(At(this._source.type)){for(var c={},u={},h=0,p=Object.keys(l);h<p.length;h+=1){var d=p[h],_=l[d],f=this._tiles[d];if(f&&!(f.fadeEndTime&&f.fadeEndTime<=t.browser.now())){var m=this.findLoadedParent(_,n);m&&(this._addTile(m.tileID),c[m.tileID.key]=m.tileID),u[d]=_;}}for(var g in this._retainLoadedChildren(u,a,s,l),c)l[g]||(this._coveredTiles[g]=!0,l[g]=c[g]);}for(var v in l)this._tiles[v].clearFadeHold();for(var y=0,x=t.keysDifference(this._tiles,l);y<x.length;y+=1){var b=x[y],w=this._tiles[b];w.hasSymbolBuckets&&!w.holdingForFade()?w.setHoldDuration(this.map._fadeDuration):w.hasSymbolBuckets&&!w.symbolFadeFinished()||this._removeTile(b);}this._updateLoadedParentTileCache();}},i.prototype.releaseSymbolFadeTiles=function(){for(var t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(t);},i.prototype._updateRetainedTiles=function(t,e){for(var o={},r={},a=Math.max(e-i.maxOverzooming,this._source.minzoom),n=Math.max(e+i.maxUnderzooming,this._source.minzoom),s={},l=0,c=t;l<c.length;l+=1){var u=c[l],h=this._addTile(u);o[u.key]=u,h.hasData()||e<this._source.maxzoom&&(s[u.key]=u);}this._retainLoadedChildren(s,e,n,o);for(var p=0,d=t;p<d.length;p+=1){var _=d[p],f=this._tiles[_.key];if(!f.hasData()){if(e+1>this._source.maxzoom){var m=_.children(this._source.maxzoom)[0],g=this.getTile(m);if(g&&g.hasData()){o[m.key]=m;continue}}else{var v=_.children(this._source.maxzoom);if(o[v[0].key]&&o[v[1].key]&&o[v[2].key]&&o[v[3].key])continue}for(var y=f.wasRequested(),x=_.overscaledZ-1;x>=a;--x){var b=_.scaledTo(x);if(r[b.key])break;if(r[b.key]=!0,!(f=this.getTile(b))&&y&&(f=this._addTile(b)),f&&(o[b.key]=b,y=f.wasRequested(),f.hasData()))break}}}return o},i.prototype._updateLoadedParentTileCache=function(){for(var t in this._loadedParentTiles={},this._tiles){for(var e=[],i=void 0,o=this._tiles[t].tileID;o.overscaledZ>0;){if(o.key in this._loadedParentTiles){i=this._loadedParentTiles[o.key];break}e.push(o.key);var r=o.scaledTo(o.overscaledZ-1);if(i=this._getLoadedTile(r))break;o=r;}for(var a=0,n=e;a<n.length;a+=1){var s=n[a];this._loadedParentTiles[s]=i;}}},i.prototype._addTile=function(e){var i=this._tiles[e.key];if(i)return i;(i=this._cache.getAndRemove(e))&&(this._setTileReloadTimer(e.key,i),i.tileID=e,this._state.initializeTileState(i,this.map?this.map.painter:null),this._cacheTimers[e.key]&&(clearTimeout(this._cacheTimers[e.key]),delete this._cacheTimers[e.key],this._setTileReloadTimer(e.key,i)));var o=Boolean(i);return o||(i=new t.Tile(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(i,this._tileLoaded.bind(this,i,e.key,i.state))),i?(i.uses++,this._tiles[e.key]=i,o||this._source.fire(new t.Event("dataloading",{tile:i,coord:i.tileID,dataType:"source"})),i):null},i.prototype._setTileReloadTimer=function(t,e){var i=this;t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t]);var o=e.getExpiryTimeout();o&&(this._timers[t]=setTimeout((function(){i._reloadTile(t,"expired"),delete i._timers[t];}),o));},i.prototype._removeTile=function(t){var e=this._tiles[t];e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))));},i.prototype.clearTiles=function(){for(var t in this._shouldReloadOnResume=!1,this._paused=!1,this._tiles)this._removeTile(t);this._cache.reset();},i.prototype.tilesIn=function(e,i,o){var r=this,a=[],n=this.transform;if(!n)return a;for(var s=o?n.getCameraQueryGeometry(e):e,l=e.map((function(t){return n.pointCoordinate(t)})),c=s.map((function(t){return n.pointCoordinate(t)})),u=this.getIds(),h=1/0,p=1/0,d=-1/0,_=-1/0,f=0,m=c;f<m.length;f+=1){var g=m[f];h=Math.min(h,g.x),p=Math.min(p,g.y),d=Math.max(d,g.x),_=Math.max(_,g.y);}for(var v=function(e){var o=r._tiles[u[e]];if(!o.holdingForFade()){var s=o.tileID,f=Math.pow(2,n.zoom-o.tileID.overscaledZ),m=i*o.queryPadding*t.EXTENT/o.tileSize/f,g=[s.getTilePoint(new t.MercatorCoordinate(h,p)),s.getTilePoint(new t.MercatorCoordinate(d,_))];if(g[0].x-m<t.EXTENT&&g[0].y-m<t.EXTENT&&g[1].x+m>=0&&g[1].y+m>=0){var v=l.map((function(t){return s.getTilePoint(t)})),y=c.map((function(t){return s.getTilePoint(t)}));a.push({tile:o,tileID:s,queryGeometry:v,cameraQueryGeometry:y,scale:f});}}},y=0;y<u.length;y++)v(y);return a},i.prototype.getVisibleCoordinates=function(t){for(var e=this,i=this.getRenderableIds(t).map((function(t){return e._tiles[t].tileID})),o=0,r=i;o<r.length;o+=1){var a=r[o];a.posMatrix=this.transform.calculatePosMatrix(a.toUnwrapped());}return i},i.prototype.hasTransition=function(){if(this._source.hasTransition())return !0;if(At(this._source.type))for(var e in this._tiles){var i=this._tiles[e];if(void 0!==i.fadeEndTime&&i.fadeEndTime>=t.browser.now())return !0}return !1},i.prototype.setFeatureState=function(t,e,i){t=t||"_geojsonTileLayer",this._state.updateState(t,e,i);},i.prototype.removeFeatureState=function(t,e,i){t=t||"_geojsonTileLayer",this._state.removeFeatureState(t,e,i);},i.prototype.getFeatureState=function(t,e){return t=t||"_geojsonTileLayer",this._state.getState(t,e)},i.prototype.setDependencies=function(t,e,i){var o=this._tiles[t];o&&o.setDependencies(e,i);},i.prototype.reloadTilesForDependencies=function(t,e){for(var i in this._tiles){this._tiles[i].hasDependency(t,e)&&this._reloadTile(i,"reloading");}this._cache.filter((function(i){return !i.hasDependency(t,e)}));},i}(t.Evented);function Dt(t,e){var i=Math.abs(2*t.wrap)-+(t.wrap<0),o=Math.abs(2*e.wrap)-+(e.wrap<0);return t.overscaledZ-e.overscaledZ||o-i||e.canonical.y-t.canonical.y||e.canonical.x-t.canonical.x}function At(t){return "raster"===t||"image"===t||"video"===t}function Rt(){return new t.window.Worker(cr.workerUrl)}Mt.maxOverzooming=10,Mt.maxUnderzooming=3;var kt=function(){this.active={};};kt.prototype.acquire=function(t){if(!this.workers)for(this.workers=[];this.workers.length<kt.workerCount;)this.workers.push(new Rt);return this.active[t]=!0,this.workers.slice()},kt.prototype.release=function(t){delete this.active[t],0===Object.keys(this.active).length&&(this.workers.forEach((function(t){t.terminate();})),this.workers=null);};var Bt,Ot=Math.floor(t.browser.hardwareConcurrency/2);function Ft(e,i){var o={};for(var r in e)"ref"!==r&&(o[r]=e[r]);return t.refProperties.forEach((function(t){t in i&&(o[t]=i[t]);})),o}function Ut(t){t=t.slice();for(var e=Object.create(null),i=0;i<t.length;i++)e[t[i].id]=t[i];for(var o=0;o<t.length;o++)"ref"in t[o]&&(t[o]=Ft(t[o],e[t[o].ref]));return t}kt.workerCount=Math.max(Math.min(Ot,6),1);var Nt={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"};function jt(t,e,i){i.push({command:Nt.addSource,args:[t,e[t]]});}function Zt(t,e,i){e.push({command:Nt.removeSource,args:[t]}),i[t]=!0;}function qt(t,e,i,o){Zt(t,i,o),jt(t,e,i);}function Vt(e,i,o){var r;for(r in e[o])if(e[o].hasOwnProperty(r)&&"data"!==r&&!t.deepEqual(e[o][r],i[o][r]))return !1;for(r in i[o])if(i[o].hasOwnProperty(r)&&"data"!==r&&!t.deepEqual(e[o][r],i[o][r]))return !1;return !0}function Gt(e,i,o,r,a,n){var s;for(s in i=i||{},e=e||{})e.hasOwnProperty(s)&&(t.deepEqual(e[s],i[s])||o.push({command:n,args:[r,s,i[s],a]}));for(s in i)i.hasOwnProperty(s)&&!e.hasOwnProperty(s)&&(t.deepEqual(e[s],i[s])||o.push({command:n,args:[r,s,i[s],a]}));}function Wt(t){return t.id}function Xt(t,e){return t[e.id]=e,t}function Ht(e,i){if(!e)return [{command:Nt.setStyle,args:[i]}];var o=[];try{if(!t.deepEqual(e.version,i.version))return [{command:Nt.setStyle,args:[i]}];t.deepEqual(e.center,i.center)||o.push({command:Nt.setCenter,args:[i.center]}),t.deepEqual(e.zoom,i.zoom)||o.push({command:Nt.setZoom,args:[i.zoom]}),t.deepEqual(e.bearing,i.bearing)||o.push({command:Nt.setBearing,args:[i.bearing]}),t.deepEqual(e.pitch,i.pitch)||o.push({command:Nt.setPitch,args:[i.pitch]}),t.deepEqual(e.sprite,i.sprite)||o.push({command:Nt.setSprite,args:[i.sprite]}),t.deepEqual(e.glyphs,i.glyphs)||o.push({command:Nt.setGlyphs,args:[i.glyphs]}),t.deepEqual(e.transition,i.transition)||o.push({command:Nt.setTransition,args:[i.transition]}),t.deepEqual(e.light,i.light)||o.push({command:Nt.setLight,args:[i.light]});var r={},a=[];!function(e,i,o,r){var a;for(a in i=i||{},e=e||{})e.hasOwnProperty(a)&&(i.hasOwnProperty(a)||Zt(a,o,r));for(a in i)i.hasOwnProperty(a)&&(e.hasOwnProperty(a)?t.deepEqual(e[a],i[a])||("geojson"===e[a].type&&"geojson"===i[a].type&&Vt(e,i,a)?o.push({command:Nt.setGeoJSONSourceData,args:[a,i[a].data]}):qt(a,i,o,r)):jt(a,i,o));}(e.sources,i.sources,a,r);var n=[];e.layers&&e.layers.forEach((function(t){r[t.source]?o.push({command:Nt.removeLayer,args:[t.id]}):n.push(t);})),o=o.concat(a),function(e,i,o){i=i||[];var r,a,n,s,l,c,u,h=(e=e||[]).map(Wt),p=i.map(Wt),d=e.reduce(Xt,{}),_=i.reduce(Xt,{}),f=h.slice(),m=Object.create(null);for(r=0,a=0;r<h.length;r++)n=h[r],_.hasOwnProperty(n)?a++:(o.push({command:Nt.removeLayer,args:[n]}),f.splice(f.indexOf(n,a),1));for(r=0,a=0;r<p.length;r++)n=p[p.length-1-r],f[f.length-1-r]!==n&&(d.hasOwnProperty(n)?(o.push({command:Nt.removeLayer,args:[n]}),f.splice(f.lastIndexOf(n,f.length-a),1)):a++,c=f[f.length-r],o.push({command:Nt.addLayer,args:[_[n],c]}),f.splice(f.length-r,0,n),m[n]=!0);for(r=0;r<p.length;r++)if(s=d[n=p[r]],l=_[n],!m[n]&&!t.deepEqual(s,l))if(t.deepEqual(s.source,l.source)&&t.deepEqual(s["source-layer"],l["source-layer"])&&t.deepEqual(s.type,l.type)){for(u in Gt(s.layout,l.layout,o,n,null,Nt.setLayoutProperty),Gt(s.paint,l.paint,o,n,null,Nt.setPaintProperty),t.deepEqual(s.filter,l.filter)||o.push({command:Nt.setFilter,args:[n,l.filter]}),t.deepEqual(s.minzoom,l.minzoom)&&t.deepEqual(s.maxzoom,l.maxzoom)||o.push({command:Nt.setLayerZoomRange,args:[n,l.minzoom,l.maxzoom]}),s)s.hasOwnProperty(u)&&"layout"!==u&&"paint"!==u&&"filter"!==u&&"metadata"!==u&&"minzoom"!==u&&"maxzoom"!==u&&(0===u.indexOf("paint.")?Gt(s[u],l[u],o,n,u.slice(6),Nt.setPaintProperty):t.deepEqual(s[u],l[u])||o.push({command:Nt.setLayerProperty,args:[n,u,l[u]]}));for(u in l)l.hasOwnProperty(u)&&!s.hasOwnProperty(u)&&"layout"!==u&&"paint"!==u&&"filter"!==u&&"metadata"!==u&&"minzoom"!==u&&"maxzoom"!==u&&(0===u.indexOf("paint.")?Gt(s[u],l[u],o,n,u.slice(6),Nt.setPaintProperty):t.deepEqual(s[u],l[u])||o.push({command:Nt.setLayerProperty,args:[n,u,l[u]]}));}else o.push({command:Nt.removeLayer,args:[n]}),c=f[f.lastIndexOf(n)+1],o.push({command:Nt.addLayer,args:[l,c]});}(n,i.layers,o);}catch(t){console.warn("Unable to compute style diff:",t),o=[{command:Nt.setStyle,args:[i]}];}return o}var Kt=function(t,e,i){var o=this.boxCells=[],r=this.circleCells=[];this.xCellCount=Math.ceil(t/i),this.yCellCount=Math.ceil(e/i);for(var a=0;a<this.xCellCount*this.yCellCount;a++)o.push([]),r.push([]);this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=t,this.height=e,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/e,this.boxUid=0,this.circleUid=0;};function Yt(e,i,o,r,a){var n=t.create();return i?(t.scale(n,n,[1/a,1/a,1]),o||t.rotateZ(n,n,r.angle)):t.multiply(n,r.labelPlaneMatrix,e),n}function Jt(e,i,o,r,a){if(i){var n=t.clone(e);return t.scale(n,n,[a,a,1]),o||t.rotateZ(n,n,-r.angle),n}return r.glCoordMatrix}function Qt(e,i){var o=[e.x,e.y,0,1];le(o,o,i);var r=o[3];return {point:new t.Point(o[0]/r,o[1]/r),signedDistanceFromCamera:r}}function $t(t,e){var i=t[0]/t[3],o=t[1]/t[3];return i>=-e[0]&&i<=e[0]&&o>=-e[1]&&o<=e[1]}function te(e,i,o,r,a,n,s,l){var c=r?e.textSizeData:e.iconSizeData,u=t.evaluateSizeForZoom(c,o.transform.zoom),h=[256/o.width*2+1,256/o.height*2+1],p=r?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray;p.clear();for(var d=e.lineVertexArray,_=r?e.text.placedSymbolArray:e.icon.placedSymbolArray,f=o.transform.width/o.transform.height,m=!1,g=0;g<_.length;g++){var v=_.get(g);if(v.hidden||v.writingMode===t.WritingMode.vertical&&!m)se(v.numGlyphs,p);else{m=!1;var y=[v.anchorX,v.anchorY,0,1];if(t.transformMat4(y,y,i),$t(y,h)){var x=.5+y[3]/o.transform.cameraToCenterDistance*.5,b=t.evaluateSizeForFeature(c,u,v),w=s?b*x:b/x,E=new t.Point(v.anchorX,v.anchorY),T=Qt(E,a).point,I={},C=oe(v,w,!1,l,i,a,n,e.glyphOffsetArray,d,p,T,E,I,f);m=C.useVertical,(C.notEnoughRoom||m||C.needsFlipping&&oe(v,w,!0,l,i,a,n,e.glyphOffsetArray,d,p,T,E,I,f).notEnoughRoom)&&se(v.numGlyphs,p);}else se(v.numGlyphs,p);}}r?e.text.dynamicLayoutVertexBuffer.updateData(p):e.icon.dynamicLayoutVertexBuffer.updateData(p);}function ee(t,e,i,o,r,a,n,s,l,c,u,h){var p=s.glyphStartIndex+s.numGlyphs,d=s.lineStartIndex,_=s.lineStartIndex+s.lineLength,f=e.getoffsetX(s.glyphStartIndex),m=e.getoffsetX(p-1),g=ae(t*f,i,o,r,a,n,s.segment,d,_,l,c,u,h);if(!g)return null;var v=ae(t*m,i,o,r,a,n,s.segment,d,_,l,c,u,h);return v?{first:g,last:v}:null}function ie(e,i,o,r){if(e===t.WritingMode.horizontal&&Math.abs(o.y-i.y)>Math.abs(o.x-i.x)*r)return {useVertical:!0};return (e===t.WritingMode.vertical?i.y<o.y:i.x>o.x)?{needsFlipping:!0}:null}function oe(e,i,o,r,a,n,s,l,c,u,h,p,d,_){var f,m=i/24,g=e.lineOffsetX*m,v=e.lineOffsetY*m;if(e.numGlyphs>1){var y=e.glyphStartIndex+e.numGlyphs,x=e.lineStartIndex,b=e.lineStartIndex+e.lineLength,w=ee(m,l,g,v,o,h,p,e,c,n,d,!1);if(!w)return {notEnoughRoom:!0};var E=Qt(w.first.point,s).point,T=Qt(w.last.point,s).point;if(r&&!o){var I=ie(e.writingMode,E,T,_);if(I)return I}f=[w.first];for(var C=e.glyphStartIndex+1;C<y-1;C++)f.push(ae(m*l.getoffsetX(C),g,v,o,h,p,e.segment,x,b,c,n,d,!1));f.push(w.last);}else{if(r&&!o){var S=Qt(p,a).point,P=e.lineStartIndex+e.segment+1,z=new t.Point(c.getx(P),c.gety(P)),L=Qt(z,a),M=L.signedDistanceFromCamera>0?L.point:re(p,z,S,1,a),D=ie(e.writingMode,S,M,_);if(D)return D}var A=ae(m*l.getoffsetX(e.glyphStartIndex),g,v,o,h,p,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,c,n,d,!1);if(!A)return {notEnoughRoom:!0};f=[A];}for(var R=0,k=f;R<k.length;R+=1){var B=k[R];t.addDynamicAttributes(u,B.point,B.angle);}return {}}function re(t,e,i,o,r){var a=Qt(t.add(t.sub(e)._unit()),r).point,n=i.sub(a);return i.add(n._mult(o/n.mag()))}function ae(e,i,o,r,a,n,s,l,c,u,h,p,d){var _=r?e-i:e+i,f=_>0?1:-1,m=0;r&&(f*=-1,m=Math.PI),f<0&&(m+=Math.PI);for(var g=f>0?l+s:l+s+1,v=g,y=a,x=a,b=0,w=0,E=Math.abs(_);b+w<=E;){if((g+=f)<l||g>=c)return null;if(x=y,void 0===(y=p[g])){var T=new t.Point(u.getx(g),u.gety(g)),I=Qt(T,h);if(I.signedDistanceFromCamera>0)y=p[g]=I.point;else{var C=g-f;y=re(0===b?n:new t.Point(u.getx(C),u.gety(C)),T,x,E-b+1,h);}}b+=w,w=x.dist(y);}var S=(E-b)/w,P=y.sub(x),z=P.mult(S)._add(x);return z._add(P._unit()._perp()._mult(o*f)),{point:z,angle:m+Math.atan2(y.y-x.y,y.x-x.x),tileDistance:d?{prevTileDistance:g-f===v?0:u.gettileUnitDistanceFromAnchor(g-f),lastSegmentViewportDistance:E-b}:null}}Kt.prototype.keysLength=function(){return this.boxKeys.length+this.circleKeys.length},Kt.prototype.insert=function(t,e,i,o,r){this._forEachCell(e,i,o,r,this._insertBoxCell,this.boxUid++),this.boxKeys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(o),this.bboxes.push(r);},Kt.prototype.insertCircle=function(t,e,i,o){this._forEachCell(e-o,i-o,e+o,i+o,this._insertCircleCell,this.circleUid++),this.circleKeys.push(t),this.circles.push(e),this.circles.push(i),this.circles.push(o);},Kt.prototype._insertBoxCell=function(t,e,i,o,r,a){this.boxCells[r].push(a);},Kt.prototype._insertCircleCell=function(t,e,i,o,r,a){this.circleCells[r].push(a);},Kt.prototype._query=function(t,e,i,o,r,a){if(i<0||t>this.width||o<0||e>this.height)return !r&&[];var n=[];if(t<=0&&e<=0&&this.width<=i&&this.height<=o){if(r)return !0;for(var s=0;s<this.boxKeys.length;s++)n.push({key:this.boxKeys[s],x1:this.bboxes[4*s],y1:this.bboxes[4*s+1],x2:this.bboxes[4*s+2],y2:this.bboxes[4*s+3]});for(var l=0;l<this.circleKeys.length;l++){var c=this.circles[3*l],u=this.circles[3*l+1],h=this.circles[3*l+2];n.push({key:this.circleKeys[l],x1:c-h,y1:u-h,x2:c+h,y2:u+h});}return a?n.filter(a):n}var p={hitTest:r,seenUids:{box:{},circle:{}}};return this._forEachCell(t,e,i,o,this._queryCell,n,p,a),r?n.length>0:n},Kt.prototype._queryCircle=function(t,e,i,o,r){var a=t-i,n=t+i,s=e-i,l=e+i;if(n<0||a>this.width||l<0||s>this.height)return !o&&[];var c=[],u={hitTest:o,circle:{x:t,y:e,radius:i},seenUids:{box:{},circle:{}}};return this._forEachCell(a,s,n,l,this._queryCellCircle,c,u,r),o?c.length>0:c},Kt.prototype.query=function(t,e,i,o,r){return this._query(t,e,i,o,!1,r)},Kt.prototype.hitTest=function(t,e,i,o,r){return this._query(t,e,i,o,!0,r)},Kt.prototype.hitTestCircle=function(t,e,i,o){return this._queryCircle(t,e,i,!0,o)},Kt.prototype._queryCell=function(t,e,i,o,r,a,n,s){var l=n.seenUids,c=this.boxCells[r];if(null!==c)for(var u=this.bboxes,h=0,p=c;h<p.length;h+=1){var d=p[h];if(!l.box[d]){l.box[d]=!0;var _=4*d;if(t<=u[_+2]&&e<=u[_+3]&&i>=u[_+0]&&o>=u[_+1]&&(!s||s(this.boxKeys[d]))){if(n.hitTest)return a.push(!0),!0;a.push({key:this.boxKeys[d],x1:u[_],y1:u[_+1],x2:u[_+2],y2:u[_+3]});}}}var f=this.circleCells[r];if(null!==f)for(var m=this.circles,g=0,v=f;g<v.length;g+=1){var y=v[g];if(!l.circle[y]){l.circle[y]=!0;var x=3*y;if(this._circleAndRectCollide(m[x],m[x+1],m[x+2],t,e,i,o)&&(!s||s(this.circleKeys[y]))){if(n.hitTest)return a.push(!0),!0;var b=m[x],w=m[x+1],E=m[x+2];a.push({key:this.circleKeys[y],x1:b-E,y1:w-E,x2:b+E,y2:w+E});}}}},Kt.prototype._queryCellCircle=function(t,e,i,o,r,a,n,s){var l=n.circle,c=n.seenUids,u=this.boxCells[r];if(null!==u)for(var h=this.bboxes,p=0,d=u;p<d.length;p+=1){var _=d[p];if(!c.box[_]){c.box[_]=!0;var f=4*_;if(this._circleAndRectCollide(l.x,l.y,l.radius,h[f+0],h[f+1],h[f+2],h[f+3])&&(!s||s(this.boxKeys[_])))return a.push(!0),!0}}var m=this.circleCells[r];if(null!==m)for(var g=this.circles,v=0,y=m;v<y.length;v+=1){var x=y[v];if(!c.circle[x]){c.circle[x]=!0;var b=3*x;if(this._circlesCollide(g[b],g[b+1],g[b+2],l.x,l.y,l.radius)&&(!s||s(this.circleKeys[x])))return a.push(!0),!0}}},Kt.prototype._forEachCell=function(t,e,i,o,r,a,n,s){for(var l=this._convertToXCellCoord(t),c=this._convertToYCellCoord(e),u=this._convertToXCellCoord(i),h=this._convertToYCellCoord(o),p=l;p<=u;p++)for(var d=c;d<=h;d++){var _=this.xCellCount*d+p;if(r.call(this,t,e,i,o,_,a,n,s))return}},Kt.prototype._convertToXCellCoord=function(t){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(t*this.xScale)))},Kt.prototype._convertToYCellCoord=function(t){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(t*this.yScale)))},Kt.prototype._circlesCollide=function(t,e,i,o,r,a){var n=o-t,s=r-e,l=i+a;return l*l>n*n+s*s},Kt.prototype._circleAndRectCollide=function(t,e,i,o,r,a,n){var s=(a-o)/2,l=Math.abs(t-(o+s));if(l>s+i)return !1;var c=(n-r)/2,u=Math.abs(e-(r+c));if(u>c+i)return !1;if(l<=s||u<=c)return !0;var h=l-s,p=u-c;return h*h+p*p<=i*i};var ne=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0]);function se(t,e){for(var i=0;i<t;i++){var o=e.length;e.resize(o+4),e.float32.set(ne,3*o);}}function le(t,e,i){var o=e[0],r=e[1];return t[0]=i[0]*o+i[4]*r+i[12],t[1]=i[1]*o+i[5]*r+i[13],t[3]=i[3]*o+i[7]*r+i[15],t}var ce=function(t,e,i){void 0===e&&(e=new Kt(t.width+200,t.height+200,25)),void 0===i&&(i=new Kt(t.width+200,t.height+200,25)),this.transform=t,this.grid=e,this.ignoredGrid=i,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+100,this.screenBottomBoundary=t.height+100,this.gridRightBoundary=t.width+200,this.gridBottomBoundary=t.height+200;};function ue(t,e,i){t[e+4]=i?1:0;}function he(e,i,o){return i*(t.EXTENT/(e.tileSize*Math.pow(2,o-e.tileID.overscaledZ)))}ce.prototype.placeCollisionBox=function(t,e,i,o,r){var a=this.projectAndGetPerspectiveRatio(o,t.anchorPointX,t.anchorPointY),n=i*a.perspectiveRatio,s=t.x1*n+a.point.x,l=t.y1*n+a.point.y,c=t.x2*n+a.point.x,u=t.y2*n+a.point.y;return !this.isInsideGrid(s,l,c,u)||!e&&this.grid.hitTest(s,l,c,u,r)?{box:[],offscreen:!1}:{box:[s,l,c,u],offscreen:this.isOffscreen(s,l,c,u)}},ce.prototype.approximateTileDistance=function(t,e,i,o,r){var a=r?1:o/this.pitchfactor,n=t.lastSegmentViewportDistance*i;return t.prevTileDistance+n+(a-1)*n*Math.abs(Math.sin(e))},ce.prototype.placeCollisionCircles=function(e,i,o,r,a,n,s,l,c,u,h,p,d){var _=[],f=this.projectAnchor(c,a.anchorX,a.anchorY),m=l/24,g=a.lineOffsetX*l,v=a.lineOffsetY*l,y=new t.Point(a.anchorX,a.anchorY),x=ee(m,s,g,v,!1,Qt(y,u).point,y,a,n,u,{},!0),b=!1,w=!1,E=!0,T=f.perspectiveRatio*r,I=1/(r*o),C=0,S=0;x&&(C=this.approximateTileDistance(x.first.tileDistance,x.first.angle,I,f.cameraDistance,p),S=this.approximateTileDistance(x.last.tileDistance,x.last.angle,I,f.cameraDistance,p));for(var P=0;P<e.length;P+=5){var z=e[P],L=e[P+1],M=e[P+2],D=e[P+3];if(!x||D<-C||D>S)ue(e,P,!1);else{var A=this.projectPoint(c,z,L),R=M*T;if(_.length>0){var k=A.x-_[_.length-4],B=A.y-_[_.length-3];if(R*R*2>k*k+B*B)if(P+8<e.length){var O=e[P+8];if(O>-C&&O<S){ue(e,P,!1);continue}}}var F=P/5;_.push(A.x,A.y,R,F),ue(e,P,!0);var U=A.x-R,N=A.y-R,j=A.x+R,Z=A.y+R;if(E=E&&this.isOffscreen(U,N,j,Z),w=w||this.isInsideGrid(U,N,j,Z),!i&&this.grid.hitTestCircle(A.x,A.y,R,d)){if(!h)return {circles:[],offscreen:!1};b=!0;}}}return {circles:b||!w?[]:_,offscreen:E}},ce.prototype.queryRenderedSymbols=function(e){if(0===e.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return {};for(var i=[],o=1/0,r=1/0,a=-1/0,n=-1/0,s=0,l=e;s<l.length;s+=1){var c=l[s],u=new t.Point(c.x+100,c.y+100);o=Math.min(o,u.x),r=Math.min(r,u.y),a=Math.max(a,u.x),n=Math.max(n,u.y),i.push(u);}for(var h={},p={},d=0,_=this.grid.query(o,r,a,n).concat(this.ignoredGrid.query(o,r,a,n));d<_.length;d+=1){var f=_[d],m=f.key;if(void 0===h[m.bucketInstanceId]&&(h[m.bucketInstanceId]={}),!h[m.bucketInstanceId][m.featureIndex]){var g=[new t.Point(f.x1,f.y1),new t.Point(f.x2,f.y1),new t.Point(f.x2,f.y2),new t.Point(f.x1,f.y2)];t.polygonIntersectsPolygon(i,g)&&(h[m.bucketInstanceId][m.featureIndex]=!0,void 0===p[m.bucketInstanceId]&&(p[m.bucketInstanceId]=[]),p[m.bucketInstanceId].push(m.featureIndex));}}return p},ce.prototype.insertCollisionBox=function(t,e,i,o,r){var a={bucketInstanceId:i,featureIndex:o,collisionGroupID:r};(e?this.ignoredGrid:this.grid).insert(a,t[0],t[1],t[2],t[3]);},ce.prototype.insertCollisionCircles=function(t,e,i,o,r){for(var a=e?this.ignoredGrid:this.grid,n={bucketInstanceId:i,featureIndex:o,collisionGroupID:r},s=0;s<t.length;s+=4)a.insertCircle(n,t[s],t[s+1],t[s+2]);},ce.prototype.projectAnchor=function(t,e,i){var o=[e,i,0,1];return le(o,o,t),{perspectiveRatio:.5+this.transform.cameraToCenterDistance/o[3]*.5,cameraDistance:o[3]}},ce.prototype.projectPoint=function(e,i,o){var r=[i,o,0,1];return le(r,r,e),new t.Point((r[0]/r[3]+1)/2*this.transform.width+100,(-r[1]/r[3]+1)/2*this.transform.height+100)},ce.prototype.projectAndGetPerspectiveRatio=function(e,i,o){var r=[i,o,0,1];return le(r,r,e),{point:new t.Point((r[0]/r[3]+1)/2*this.transform.width+100,(-r[1]/r[3]+1)/2*this.transform.height+100),perspectiveRatio:.5+this.transform.cameraToCenterDistance/r[3]*.5}},ce.prototype.isOffscreen=function(t,e,i,o){return i<100||t>=this.screenRightBoundary||o<100||e>this.screenBottomBoundary},ce.prototype.isInsideGrid=function(t,e,i,o){return i>=0&&t<this.gridRightBoundary&&o>=0&&e<this.gridBottomBoundary};var pe=function(t,e,i,o){this.opacity=t?Math.max(0,Math.min(1,t.opacity+(t.placed?e:-e))):o&&i?1:0,this.placed=i;};pe.prototype.isHidden=function(){return 0===this.opacity&&!this.placed};var de=function(t,e,i,o,r){this.text=new pe(t?t.text:null,e,i,r),this.icon=new pe(t?t.icon:null,e,o,r);};de.prototype.isHidden=function(){return this.text.isHidden()&&this.icon.isHidden()};var _e=function(t,e,i){this.text=t,this.icon=e,this.skipFade=i;},fe=function(t,e,i,o,r){this.bucketInstanceId=t,this.featureIndex=e,this.sourceLayerIndex=i,this.bucketIndex=o,this.tileID=r;},me=function(t){this.crossSourceCollisions=t,this.maxGroupID=0,this.collisionGroups={};};function ge(e,i,o,r,a){var n=t.getAnchorAlignment(e),s=-(n.horizontalAlign-.5)*i,l=-(n.verticalAlign-.5)*o,c=t.evaluateVariableOffset(e,r);return new t.Point(s+c[0]*a,l+c[1]*a)}function ve(e,i,o,r,a,n){var s=e.x1,l=e.x2,c=e.y1,u=e.y2,h=e.anchorPointX,p=e.anchorPointY,d=new t.Point(i,o);return r&&d._rotate(a?n:-n),{x1:s+d.x,y1:c+d.y,x2:l+d.x,y2:u+d.y,anchorPointX:h,anchorPointY:p}}me.prototype.get=function(t){if(this.crossSourceCollisions)return {ID:0,predicate:null};if(!this.collisionGroups[t]){var e=++this.maxGroupID;this.collisionGroups[t]={ID:e,predicate:function(t){return t.collisionGroupID===e}};}return this.collisionGroups[t]};var ye=function(t,e,i,o){this.transform=t.clone(),this.collisionIndex=new ce(this.transform),this.placements={},this.opacities={},this.variableOffsets={},this.stale=!1,this.commitTime=0,this.fadeDuration=e,this.retainedQueryData={},this.collisionGroups=new me(i),this.prevPlacement=o,o&&(o.prevPlacement=void 0),this.placedOrientations={};};function xe(t,e,i,o,r){t.emplaceBack(e?1:0,i?1:0,o||0,r||0),t.emplaceBack(e?1:0,i?1:0,o||0,r||0),t.emplaceBack(e?1:0,i?1:0,o||0,r||0),t.emplaceBack(e?1:0,i?1:0,o||0,r||0);}ye.prototype.placeLayerTile=function(e,i,o,r){var a=i.getBucket(e),n=i.latestFeatureIndex;if(a&&n&&e.id===a.layerIds[0]){var s=i.collisionBoxArray,l=a.layers[0].layout,c=Math.pow(2,this.transform.zoom-i.tileID.overscaledZ),u=i.tileSize/t.EXTENT,h=this.transform.calculatePosMatrix(i.tileID.toUnwrapped()),p=Yt(h,"map"===l.get("text-pitch-alignment"),"map"===l.get("text-rotation-alignment"),this.transform,he(i,1,this.transform.zoom)),d=Yt(h,"map"===l.get("icon-pitch-alignment"),"map"===l.get("icon-rotation-alignment"),this.transform,he(i,1,this.transform.zoom));this.retainedQueryData[a.bucketInstanceId]=new fe(a.bucketInstanceId,n,a.sourceLayerIndex,a.index,i.tileID),this.placeLayerBucket(a,h,p,d,c,u,o,i.holdingForFade(),r,s);}},ye.prototype.attemptAnchorPlacement=function(t,e,i,o,r,a,n,s,l,c,u,h,p,d,_){var f,m=[h.textOffset0,h.textOffset1],g=ge(t,i,o,m,r),v=this.collisionIndex.placeCollisionBox(ve(e,g.x,g.y,a,n,this.transform.angle),u,s,l,c.predicate);if(_&&0===this.collisionIndex.placeCollisionBox(ve(_,g.x,g.y,a,n,this.transform.angle),u,s,l,c.predicate).box.length)return;if(v.box.length>0)return this.prevPlacement&&this.prevPlacement.variableOffsets[h.crossTileID]&&this.prevPlacement.placements[h.crossTileID]&&this.prevPlacement.placements[h.crossTileID].text&&(f=this.prevPlacement.variableOffsets[h.crossTileID].anchor),this.variableOffsets[h.crossTileID]={textOffset:m,width:i,height:o,anchor:t,textBoxScale:r,prevAnchor:f},this.markUsedJustification(p,t,h,d),p.allowVerticalPlacement&&(this.markUsedOrientation(p,d,h),this.placedOrientations[h.crossTileID]=d),{shift:g,placedGlyphBoxes:v}},ye.prototype.placeLayerBucket=function(e,i,o,r,a,n,s,l,c,u){var h=this,p=e.layers[0].layout,d=t.evaluateSizeForZoom(e.textSizeData,this.transform.zoom),_=p.get("text-optional"),f=p.get("icon-optional"),m=p.get("text-allow-overlap"),g=p.get("icon-allow-overlap"),v=m&&(g||!e.hasIconData()||f),y=g&&(m||!e.hasTextData()||_),x=this.collisionGroups.get(e.sourceID),b="map"===p.get("text-rotation-alignment"),w="map"===p.get("text-pitch-alignment"),E="none"!==p.get("icon-text-fit"),T="viewport-y"===p.get("symbol-z-order");!e.collisionArrays&&u&&e.deserializeCollisionBoxes(u);var I=function(r,u){if(!c[r.crossTileID])if(l)h.placements[r.crossTileID]=new _e(!1,!1,!1);else{var T,I=!1,C=!1,S=!0,P=null,z={box:null,offscreen:null},L={box:null,offscreen:null},M=null,D=null,A=0,R=0,k=0;u.textFeatureIndex&&(A=u.textFeatureIndex),u.verticalTextFeatureIndex&&(R=u.verticalTextFeatureIndex);var B=u.textBox;if(B){var O=function(i){var o=t.WritingMode.horizontal;if(e.allowVerticalPlacement&&!i&&h.prevPlacement){var a=h.prevPlacement.placedOrientations[r.crossTileID];a&&(h.placedOrientations[r.crossTileID]=a,o=a,h.markUsedOrientation(e,o,r));}return o},F=function(i,o){if(e.allowVerticalPlacement&&r.numVerticalGlyphVertices>0&&u.verticalTextBox)for(var a=0,n=e.writingModes;a<n.length;a+=1){if(n[a]===t.WritingMode.vertical?(z=o(),L=z):z=i(),z&&z.box&&z.box.length)break}else z=i();};if(p.get("text-variable-anchor")){var U=p.get("text-variable-anchor");if(h.prevPlacement&&h.prevPlacement.variableOffsets[r.crossTileID]){var N=h.prevPlacement.variableOffsets[r.crossTileID];U.indexOf(N.anchor)>0&&(U=U.filter((function(t){return t!==N.anchor}))).unshift(N.anchor);}var j=function(t,o,a){for(var s=t.x2-t.x1,l=t.y2-t.y1,c=r.textBoxScale,u=E&&!g?o:null,p={box:[],offscreen:!1},d=m?2*U.length:U.length,_=0;_<d;++_){var f=U[_%U.length],v=_>=U.length,y=h.attemptAnchorPlacement(f,t,s,l,c,b,w,n,i,x,v,r,e,a,u);if(y&&(p=y.placedGlyphBoxes)&&p.box&&p.box.length){I=!0,P=y.shift;break}}return p};F((function(){return j(B,u.iconBox,t.WritingMode.horizontal)}),(function(){var i=u.verticalTextBox,o=z&&z.box&&z.box.length;return e.allowVerticalPlacement&&!o&&r.numVerticalGlyphVertices>0&&i?j(i,u.verticalIconBox,t.WritingMode.vertical):{box:null,offscreen:null}})),z&&(I=z.box,S=z.offscreen);var Z=O(z&&z.box);if(!I&&h.prevPlacement){var q=h.prevPlacement.variableOffsets[r.crossTileID];q&&(h.variableOffsets[r.crossTileID]=q,h.markUsedJustification(e,q.anchor,r,Z));}}else{var V=function(t,o){var a=h.collisionIndex.placeCollisionBox(t,p.get("text-allow-overlap"),n,i,x.predicate);return a&&a.box&&a.box.length&&(h.markUsedOrientation(e,o,r),h.placedOrientations[r.crossTileID]=o),a};F((function(){return V(B,t.WritingMode.horizontal)}),(function(){var i=u.verticalTextBox;return e.allowVerticalPlacement&&r.numVerticalGlyphVertices>0&&i?V(i,t.WritingMode.vertical):{box:null,offscreen:null}})),O(z&&z.box&&z.box.length);}}I=(T=z)&&T.box&&T.box.length>0,S=T&&T.offscreen;var G=u.textCircles;if(G){var W=e.text.placedSymbolArray.get(r.centerJustifiedTextSymbolIndex),X=t.evaluateSizeForFeature(e.textSizeData,d,W);M=h.collisionIndex.placeCollisionCircles(G,p.get("text-allow-overlap"),a,n,W,e.lineVertexArray,e.glyphOffsetArray,X,i,o,s,w,x.predicate),I=p.get("text-allow-overlap")||M.circles.length>0,S=S&&M.offscreen;}if(u.iconFeatureIndex&&(k=u.iconFeatureIndex),u.iconBox){var H=function(t){var e=E&&P?ve(t,P.x,P.y,b,w,h.transform.angle):t;return h.collisionIndex.placeCollisionBox(e,p.get("icon-allow-overlap"),n,i,x.predicate)};C=L&&L.box&&L.box.length&&u.verticalIconBox?(D=H(u.verticalIconBox)).box.length>0:(D=H(u.iconBox)).box.length>0,S=S&&D.offscreen;}var K=_||0===r.numHorizontalGlyphVertices&&0===r.numVerticalGlyphVertices,Y=f||0===r.numIconVertices;K||Y?Y?K||(C=C&&I):I=C&&I:C=I=C&&I,I&&T&&T.box&&(L&&L.box&&R?h.collisionIndex.insertCollisionBox(T.box,p.get("text-ignore-placement"),e.bucketInstanceId,R,x.ID):h.collisionIndex.insertCollisionBox(T.box,p.get("text-ignore-placement"),e.bucketInstanceId,A,x.ID)),C&&D&&h.collisionIndex.insertCollisionBox(D.box,p.get("icon-ignore-placement"),e.bucketInstanceId,k,x.ID),I&&M&&h.collisionIndex.insertCollisionCircles(M.circles,p.get("text-ignore-placement"),e.bucketInstanceId,A,x.ID),h.placements[r.crossTileID]=new _e(I||v,C||y,S||e.justReloaded),c[r.crossTileID]=!0;}};if(T)for(var C=e.getSortedSymbolIndexes(this.transform.angle),S=C.length-1;S>=0;--S){var P=C[S];I(e.symbolInstances.get(P),e.collisionArrays[P]);}else for(var z=0;z<e.symbolInstances.length;++z)I(e.symbolInstances.get(z),e.collisionArrays[z]);e.justReloaded=!1;},ye.prototype.markUsedJustification=function(e,i,o,r){var a,n={left:o.leftJustifiedTextSymbolIndex,center:o.centerJustifiedTextSymbolIndex,right:o.rightJustifiedTextSymbolIndex};a=r===t.WritingMode.vertical?o.verticalPlacedTextSymbolIndex:n[t.getAnchorJustification(i)];for(var s=0,l=[o.leftJustifiedTextSymbolIndex,o.centerJustifiedTextSymbolIndex,o.rightJustifiedTextSymbolIndex,o.verticalPlacedTextSymbolIndex];s<l.length;s+=1){var c=l[s];c>=0&&(e.text.placedSymbolArray.get(c).crossTileID=a>=0&&c!==a?0:o.crossTileID);}},ye.prototype.markUsedOrientation=function(e,i,o){for(var r=i===t.WritingMode.horizontal||i===t.WritingMode.horizontalOnly?i:0,a=i===t.WritingMode.vertical?i:0,n=0,s=[o.leftJustifiedTextSymbolIndex,o.centerJustifiedTextSymbolIndex,o.rightJustifiedTextSymbolIndex];n<s.length;n+=1){var l=s[n];e.text.placedSymbolArray.get(l).placedOrientation=r;}o.verticalPlacedTextSymbolIndex&&(e.text.placedSymbolArray.get(o.verticalPlacedTextSymbolIndex).placedOrientation=a);},ye.prototype.commit=function(t){this.commitTime=t,this.zoomAtLastRecencyCheck=this.transform.zoom;var e=this.prevPlacement,i=!1;this.prevZoomAdjustment=e?e.zoomAdjustment(this.transform.zoom):0;var o=e?e.symbolFadeChange(t):1,r=e?e.opacities:{},a=e?e.variableOffsets:{},n=e?e.placedOrientations:{};for(var s in this.placements){var l=this.placements[s],c=r[s];c?(this.opacities[s]=new de(c,o,l.text,l.icon),i=i||l.text!==c.text.placed||l.icon!==c.icon.placed):(this.opacities[s]=new de(null,o,l.text,l.icon,l.skipFade),i=i||l.text||l.icon);}for(var u in r){var h=r[u];if(!this.opacities[u]){var p=new de(h,o,!1,!1);p.isHidden()||(this.opacities[u]=p,i=i||h.text.placed||h.icon.placed);}}for(var d in a)this.variableOffsets[d]||!this.opacities[d]||this.opacities[d].isHidden()||(this.variableOffsets[d]=a[d]);for(var _ in n)this.placedOrientations[_]||!this.opacities[_]||this.opacities[_].isHidden()||(this.placedOrientations[_]=n[_]);i?this.lastPlacementChangeTime=t:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=e?e.lastPlacementChangeTime:t);},ye.prototype.updateLayerOpacities=function(t,e){for(var i={},o=0,r=e;o<r.length;o+=1){var a=r[o],n=a.getBucket(t);n&&a.latestFeatureIndex&&t.id===n.layerIds[0]&&this.updateBucketOpacities(n,i,a.collisionBoxArray);}},ye.prototype.updateBucketOpacities=function(e,i,o){var r=this;e.hasTextData()&&e.text.opacityVertexArray.clear(),e.hasIconData()&&e.icon.opacityVertexArray.clear(),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexArray.clear(),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexArray.clear(),e.hasIconCollisionCircleData()&&e.iconCollisionCircle.collisionVertexArray.clear(),e.hasTextCollisionCircleData()&&e.textCollisionCircle.collisionVertexArray.clear();var a=e.layers[0].layout,n=new de(null,0,!1,!1,!0),s=a.get("text-allow-overlap"),l=a.get("icon-allow-overlap"),c=a.get("text-variable-anchor"),u="map"===a.get("text-rotation-alignment"),h="map"===a.get("text-pitch-alignment"),p="none"!==a.get("icon-text-fit"),d=new de(null,0,s&&(l||!e.hasIconData()||a.get("icon-optional")),l&&(s||!e.hasTextData()||a.get("text-optional")),!0);!e.collisionArrays&&o&&(e.hasIconCollisionBoxData()||e.hasIconCollisionCircleData()||e.hasTextCollisionBoxData()||e.hasTextCollisionCircleData())&&e.deserializeCollisionBoxes(o);for(var _=function(t,e,i){for(var o=0;o<e/4;o++)t.opacityVertexArray.emplaceBack(i);},f=function(o){var a=e.symbolInstances.get(o),s=a.numHorizontalGlyphVertices,l=a.numVerticalGlyphVertices,f=a.crossTileID,m=i[f],g=r.opacities[f];m?g=n:g||(g=d,r.opacities[f]=g),i[f]=!0;var v=s>0||l>0,y=a.numIconVertices>0,x=r.placedOrientations[a.crossTileID],b=x===t.WritingMode.vertical,w=x===t.WritingMode.horizontal||x===t.WritingMode.horizontalOnly;if(v){var E=Pe(g.text),T=b?ze:E;_(e.text,s,T);var I=w?ze:E;_(e.text,l,I);var C=g.text.isHidden();[a.rightJustifiedTextSymbolIndex,a.centerJustifiedTextSymbolIndex,a.leftJustifiedTextSymbolIndex].forEach((function(t){t>=0&&(e.text.placedSymbolArray.get(t).hidden=C||b?1:0);})),a.verticalPlacedTextSymbolIndex>=0&&(e.text.placedSymbolArray.get(a.verticalPlacedTextSymbolIndex).hidden=C||w?1:0);var S=r.variableOffsets[a.crossTileID];S&&r.markUsedJustification(e,S.anchor,a,x);var P=r.placedOrientations[a.crossTileID];P&&(r.markUsedJustification(e,"left",a,P),r.markUsedOrientation(e,P,a));}if(y){var z=Pe(g.icon),L=!(p&&a.verticalPlacedIconSymbolIndex&&b);if(a.placedIconSymbolIndex>=0){var M=L?z:ze;_(e.icon,a.numIconVertices,M),e.icon.placedSymbolArray.get(a.placedIconSymbolIndex).hidden=g.icon.isHidden();}if(a.verticalPlacedIconSymbolIndex>=0){var D=L?ze:z;_(e.icon,a.numVerticalIconVertices,D),e.icon.placedSymbolArray.get(a.verticalPlacedIconSymbolIndex).hidden=g.icon.isHidden();}}if(e.hasIconCollisionBoxData()||e.hasIconCollisionCircleData()||e.hasTextCollisionBoxData()||e.hasTextCollisionCircleData()){var A=e.collisionArrays[o];if(A){var R=new t.Point(0,0);if(A.textBox||A.verticalTextBox){var k=!0;if(c){var B=r.variableOffsets[f];B?(R=ge(B.anchor,B.width,B.height,B.textOffset,B.textBoxScale),u&&R._rotate(h?r.transform.angle:-r.transform.angle)):k=!1;}A.textBox&&xe(e.textCollisionBox.collisionVertexArray,g.text.placed,!k||b,R.x,R.y),A.verticalTextBox&&xe(e.textCollisionBox.collisionVertexArray,g.text.placed,!k||w,R.x,R.y);}var O=Boolean(!w&&A.verticalIconBox);A.iconBox&&xe(e.iconCollisionBox.collisionVertexArray,g.icon.placed,O,p?R.x:0,p?R.y:0),A.verticalIconBox&&xe(e.iconCollisionBox.collisionVertexArray,g.icon.placed,!O,p?R.x:0,p?R.y:0);var F=A.textCircles;if(F&&e.hasTextCollisionCircleData())for(var U=0;U<F.length;U+=5){var N=m||0===F[U+4];xe(e.textCollisionCircle.collisionVertexArray,g.text.placed,N);}}}},m=0;m<e.symbolInstances.length;m++)f(m);e.sortFeatures(this.transform.angle),this.retainedQueryData[e.bucketInstanceId]&&(this.retainedQueryData[e.bucketInstanceId].featureSortOrder=e.featureSortOrder),e.hasTextData()&&e.text.opacityVertexBuffer&&e.text.opacityVertexBuffer.updateData(e.text.opacityVertexArray),e.hasIconData()&&e.icon.opacityVertexBuffer&&e.icon.opacityVertexBuffer.updateData(e.icon.opacityVertexArray),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexBuffer&&e.iconCollisionBox.collisionVertexBuffer.updateData(e.iconCollisionBox.collisionVertexArray),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexBuffer&&e.textCollisionBox.collisionVertexBuffer.updateData(e.textCollisionBox.collisionVertexArray),e.hasIconCollisionCircleData()&&e.iconCollisionCircle.collisionVertexBuffer&&e.iconCollisionCircle.collisionVertexBuffer.updateData(e.iconCollisionCircle.collisionVertexArray),e.hasTextCollisionCircleData()&&e.textCollisionCircle.collisionVertexBuffer&&e.textCollisionCircle.collisionVertexBuffer.updateData(e.textCollisionCircle.collisionVertexArray);},ye.prototype.symbolFadeChange=function(t){return 0===this.fadeDuration?1:(t-this.commitTime)/this.fadeDuration+this.prevZoomAdjustment},ye.prototype.zoomAdjustment=function(t){return Math.max(0,(this.transform.zoom-t)/1.5)},ye.prototype.hasTransitions=function(t){return this.stale||t-this.lastPlacementChangeTime<this.fadeDuration},ye.prototype.stillRecent=function(t,e){var i=this.zoomAtLastRecencyCheck===e?1-this.zoomAdjustment(e):1;return this.zoomAtLastRecencyCheck=e,this.commitTime+this.fadeDuration*i>t},ye.prototype.setStale=function(){this.stale=!0;};var be=Math.pow(2,25),we=Math.pow(2,24),Ee=Math.pow(2,17),Te=Math.pow(2,16),Ie=Math.pow(2,9),Ce=Math.pow(2,8),Se=Math.pow(2,1);function Pe(t){if(0===t.opacity&&!t.placed)return 0;if(1===t.opacity&&t.placed)return 4294967295;var e=t.placed?1:0,i=Math.floor(127*t.opacity);return i*be+e*we+i*Ee+e*Te+i*Ie+e*Ce+i*Se+e}var ze=0,Le=function(){this._currentTileIndex=0,this._seenCrossTileIDs={};};Le.prototype.continuePlacement=function(t,e,i,o,r){for(;this._currentTileIndex<t.length;){var a=t[this._currentTileIndex];if(e.placeLayerTile(o,a,i,this._seenCrossTileIDs),this._currentTileIndex++,r())return !0}};var Me=function(t,e,i,o,r,a,n){this.placement=new ye(t,r,a,n),this._currentPlacementIndex=e.length-1,this._forceFullPlacement=i,this._showCollisionBoxes=o,this._done=!1;};Me.prototype.isDone=function(){return this._done},Me.prototype.continuePlacement=function(e,i,o){for(var r=this,a=t.browser.now(),n=function(){var e=t.browser.now()-a;return !r._forceFullPlacement&&e>2};this._currentPlacementIndex>=0;){var s=i[e[this._currentPlacementIndex]],l=this.placement.collisionIndex.transform.zoom;if("symbol"===s.type&&(!s.minzoom||s.minzoom<=l)&&(!s.maxzoom||s.maxzoom>l)){if(this._inProgressLayer||(this._inProgressLayer=new Le),this._inProgressLayer.continuePlacement(o[s.source],this.placement,this._showCollisionBoxes,s,n))return;delete this._inProgressLayer;}this._currentPlacementIndex--;}this._done=!0;},Me.prototype.commit=function(t){return this.placement.commit(t),this.placement};var De=512/t.EXTENT/2,Ae=function(t,e,i){this.tileID=t,this.indexedSymbolInstances={},this.bucketInstanceId=i;for(var o=0;o<e.length;o++){var r=e.get(o),a=r.key;this.indexedSymbolInstances[a]||(this.indexedSymbolInstances[a]=[]),this.indexedSymbolInstances[a].push({crossTileID:r.crossTileID,coord:this.getScaledCoordinates(r,t)});}};Ae.prototype.getScaledCoordinates=function(e,i){var o=i.canonical.z-this.tileID.canonical.z,r=De/Math.pow(2,o);return {x:Math.floor((i.canonical.x*t.EXTENT+e.anchorX)*r),y:Math.floor((i.canonical.y*t.EXTENT+e.anchorY)*r)}},Ae.prototype.findMatches=function(t,e,i){for(var o=this.tileID.canonical.z<e.canonical.z?1:Math.pow(2,this.tileID.canonical.z-e.canonical.z),r=0;r<t.length;r++){var a=t.get(r);if(!a.crossTileID){var n=this.indexedSymbolInstances[a.key];if(n)for(var s=this.getScaledCoordinates(a,e),l=0,c=n;l<c.length;l+=1){var u=c[l];if(Math.abs(u.coord.x-s.x)<=o&&Math.abs(u.coord.y-s.y)<=o&&!i[u.crossTileID]){i[u.crossTileID]=!0,a.crossTileID=u.crossTileID;break}}}}};var Re=function(){this.maxCrossTileID=0;};Re.prototype.generate=function(){return ++this.maxCrossTileID};var ke=function(){this.indexes={},this.usedCrossTileIDs={},this.lng=0;};ke.prototype.handleWrapJump=function(t){var e=Math.round((t-this.lng)/360);if(0!==e)for(var i in this.indexes){var o=this.indexes[i],r={};for(var a in o){var n=o[a];n.tileID=n.tileID.unwrapTo(n.tileID.wrap+e),r[n.tileID.key]=n;}this.indexes[i]=r;}this.lng=t;},ke.prototype.addBucket=function(t,e,i){if(this.indexes[t.overscaledZ]&&this.indexes[t.overscaledZ][t.key]){if(this.indexes[t.overscaledZ][t.key].bucketInstanceId===e.bucketInstanceId)return !1;this.removeBucketCrossTileIDs(t.overscaledZ,this.indexes[t.overscaledZ][t.key]);}for(var o=0;o<e.symbolInstances.length;o++){e.symbolInstances.get(o).crossTileID=0;}this.usedCrossTileIDs[t.overscaledZ]||(this.usedCrossTileIDs[t.overscaledZ]={});var r=this.usedCrossTileIDs[t.overscaledZ];for(var a in this.indexes){var n=this.indexes[a];if(Number(a)>t.overscaledZ)for(var s in n){var l=n[s];l.tileID.isChildOf(t)&&l.findMatches(e.symbolInstances,t,r);}else{var c=n[t.scaledTo(Number(a)).key];c&&c.findMatches(e.symbolInstances,t,r);}}for(var u=0;u<e.symbolInstances.length;u++){var h=e.symbolInstances.get(u);h.crossTileID||(h.crossTileID=i.generate(),r[h.crossTileID]=!0);}return void 0===this.indexes[t.overscaledZ]&&(this.indexes[t.overscaledZ]={}),this.indexes[t.overscaledZ][t.key]=new Ae(t,e.symbolInstances,e.bucketInstanceId),!0},ke.prototype.removeBucketCrossTileIDs=function(t,e){for(var i in e.indexedSymbolInstances)for(var o=0,r=e.indexedSymbolInstances[i];o<r.length;o+=1){var a=r[o];delete this.usedCrossTileIDs[t][a.crossTileID];}},ke.prototype.removeStaleBuckets=function(t){var e=!1;for(var i in this.indexes){var o=this.indexes[i];for(var r in o)t[o[r].bucketInstanceId]||(this.removeBucketCrossTileIDs(i,o[r]),delete o[r],e=!0);}return e};var Be=function(){this.layerIndexes={},this.crossTileIDs=new Re,this.maxBucketInstanceId=0,this.bucketsInCurrentPlacement={};};Be.prototype.addLayer=function(t,e,i){var o=this.layerIndexes[t.id];void 0===o&&(o=this.layerIndexes[t.id]=new ke);var r=!1,a={};o.handleWrapJump(i);for(var n=0,s=e;n<s.length;n+=1){var l=s[n],c=l.getBucket(t);c&&t.id===c.layerIds[0]&&(c.bucketInstanceId||(c.bucketInstanceId=++this.maxBucketInstanceId),o.addBucket(l.tileID,c,this.crossTileIDs)&&(r=!0),a[c.bucketInstanceId]=!0);}return o.removeStaleBuckets(a)&&(r=!0),r},Be.prototype.pruneUnusedLayers=function(t){var e={};for(var i in t.forEach((function(t){e[t]=!0;})),this.layerIndexes)e[i]||delete this.layerIndexes[i];};var Oe=function(e,i){return t.emitValidationErrors(e,i&&i.filter((function(t){return "source.canvas"!==t.identifier})))},Fe=t.pick(Nt,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData"]),Ue=t.pick(Nt,["setCenter","setZoom","setBearing","setPitch"]),Ne=function(){var e={},i=t.styleSpec.$version;for(var o in t.styleSpec.$root){var r=t.styleSpec.$root[o];if(r.required){var a=null;null!=(a="version"===o?i:"array"===r.type?[]:{})&&(e[o]=a);}}return e}(),je=function(e){function i(o,r){var a=this;void 0===r&&(r={}),e.call(this),this.map=o,this.dispatcher=new T((Bt||(Bt=new kt),Bt),this),this.imageManager=new p,this.imageManager.setEventedParent(this),this.glyphManager=new y(o._requestManager,r.localIdeographFontFamily),this.lineAtlas=new E(256,512),this.crossTileSymbolIndex=new Be,this._layers={},this._order=[],this.sourceCaches={},this.zoomHistory=new t.ZoomHistory,this._loaded=!1,this._resetUpdates(),this.dispatcher.broadcast("setReferrer",t.getReferrer());var n=this;this._rtlTextPluginCallback=i.registerForPluginStateChange((function(e){var i={pluginStatus:e.pluginStatus,pluginURL:e.pluginURL};n.dispatcher.broadcast("syncRTLPluginState",i,(function(e,i){if((t.triggerPluginCompletionEvent(e),i)&&i.every((function(t){return t})))for(var o in n.sourceCaches)n.sourceCaches[o].reload();}));})),this.on("data",(function(t){if("source"===t.dataType&&"metadata"===t.sourceDataType){var e=a.sourceCaches[t.sourceId];if(e){var i=e.getSource();if(i&&i.vectorLayerIds)for(var o in a._layers){var r=a._layers[o];r.source===i.id&&a._validateLayer(r);}}}}));}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.loadURL=function(e,i){var o=this;void 0===i&&(i={}),this.fire(new t.Event("dataloading",{dataType:"style"}));var r="boolean"==typeof i.validate?i.validate:!t.isGoongURL();e=this.map._requestManager.normalizeStyleURL(e,i.accessToken);var a=this.map._requestManager.transformRequest(e,t.ResourceType.Style);this._request=t.getJSON(a,(function(e,i){o._request=null,e?o.fire(new t.ErrorEvent(e)):i&&o._load(i,r);}));},i.prototype.loadJSON=function(e,i){var o=this;void 0===i&&(i={}),this.fire(new t.Event("dataloading",{dataType:"style"})),this._request=t.browser.frame((function(){o._request=null,o._load(e,!1!==i.validate);}));},i.prototype.loadEmpty=function(){this.fire(new t.Event("dataloading",{dataType:"style"})),this._load(Ne,!1);},i.prototype._load=function(e,i){var o=this;if(!i||!Oe(this,t.validateStyle(e))){for(var r in this._loaded=!0,this.stylesheet=e,e.sources)this.addSource(r,e.sources[r],{validate:!1});e.sprite?this._spriteRequest=function(e,i,o){var r,a,n,s=t.browser.devicePixelRatio>1?"@2x":"",l=t.getJSON(i.transformRequest(i.normalizeSpriteURL(e,s,".json"),t.ResourceType.SpriteJSON),(function(t,e){l=null,n||(n=t,r=e,u());})),c=t.getImage(i.transformRequest(i.normalizeSpriteURL(e,s,".png"),t.ResourceType.SpriteImage),(function(t,e){c=null,n||(n=t,a=e,u());}));function u(){if(n)o(n);else if(r&&a){var e=t.browser.getImageData(a),i={};for(var s in r){var l=r[s],c=l.width,u=l.height,h=l.x,p=l.y,d=l.sdf,_=l.pixelRatio,f=l.stretchX,m=l.stretchY,g=l.content,v=new t.RGBAImage({width:c,height:u});t.RGBAImage.copy(e,v,{x:h,y:p},{x:0,y:0},{width:c,height:u}),i[s]={data:v,pixelRatio:_,sdf:d,stretchX:f,stretchY:m,content:g};}o(null,i);}}return {cancel:function(){l&&(l.cancel(),l=null),c&&(c.cancel(),c=null);}}}(e.sprite,this.map._requestManager,(function(e,i){if(o._spriteRequest=null,e)o.fire(new t.ErrorEvent(e));else if(i)for(var r in i)o.imageManager.addImage(r,i[r]);o.imageManager.setLoaded(!0),o.dispatcher.broadcast("setImages",o.imageManager.listImages()),o.fire(new t.Event("data",{dataType:"style"}));})):this.imageManager.setLoaded(!0),this.glyphManager.setURL(e.glyphs);var a=Ut(this.stylesheet.layers);this._order=a.map((function(t){return t.id})),this._layers={};for(var n=0,s=a;n<s.length;n+=1){var l=s[n];(l=t.createStyleLayer(l)).setEventedParent(this,{layer:{id:l.id}}),this._layers[l.id]=l;}this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new w(this.stylesheet.light),this.fire(new t.Event("data",{dataType:"style"})),this.fire(new t.Event("style.load"));}},i.prototype._validateLayer=function(e){var i=this.sourceCaches[e.source];if(i){var o=e.sourceLayer;if(o){var r=i.getSource();("geojson"===r.type||r.vectorLayerIds&&-1===r.vectorLayerIds.indexOf(o))&&this.fire(new t.ErrorEvent(new Error('Source layer "'+o+'" does not exist on source "'+r.id+'" as specified by style layer "'+e.id+'"')));}}},i.prototype.loaded=function(){if(!this._loaded)return !1;if(Object.keys(this._updatedSources).length)return !1;for(var t in this.sourceCaches)if(!this.sourceCaches[t].loaded())return !1;return !!this.imageManager.isLoaded()},i.prototype._serializeLayers=function(t){for(var e=[],i=0,o=t;i<o.length;i+=1){var r=o[i],a=this._layers[r];"custom"!==a.type&&e.push(a.serialize());}return e},i.prototype.hasTransitions=function(){if(this.light&&this.light.hasTransition())return !0;for(var t in this.sourceCaches)if(this.sourceCaches[t].hasTransition())return !0;for(var e in this._layers)if(this._layers[e].hasTransition())return !0;return !1},i.prototype._checkLoaded=function(){if(!this._loaded)throw new Error("Style is not done loading")},i.prototype.update=function(e){if(this._loaded){var i=this._changed;if(this._changed){var o=Object.keys(this._updatedLayers),r=Object.keys(this._removedLayers);for(var a in (o.length||r.length)&&this._updateWorkerLayers(o,r),this._updatedSources){var n=this._updatedSources[a];"reload"===n?this._reloadSource(a):"clear"===n&&this._clearSource(a);}for(var s in this._updateTilesForChangedImages(),this._updatedPaintProps)this._layers[s].updateTransitions(e);this.light.updateTransitions(e),this._resetUpdates();}for(var l in this.sourceCaches)this.sourceCaches[l].used=!1;for(var c=0,u=this._order;c<u.length;c+=1){var h=u[c],p=this._layers[h];p.recalculate(e,this.imageManager.listImages()),!p.isHidden(e.zoom)&&p.source&&(this.sourceCaches[p.source].used=!0);}this.light.recalculate(e),this.z=e.zoom,i&&this.fire(new t.Event("data",{dataType:"style"}));}},i.prototype._updateTilesForChangedImages=function(){var t=Object.keys(this._changedImages);if(t.length){for(var e in this.sourceCaches)this.sourceCaches[e].reloadTilesForDependencies(["icons","patterns"],t);this._changedImages={};}},i.prototype._updateWorkerLayers=function(t,e){this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(t),removedIds:e});},i.prototype._resetUpdates=function(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={},this._changedImages={};},i.prototype.setState=function(e){var i=this;if(this._checkLoaded(),Oe(this,t.validateStyle(e)))return !1;(e=t.clone$1(e)).layers=Ut(e.layers);var o=Ht(this.serialize(),e).filter((function(t){return !(t.command in Ue)}));if(0===o.length)return !1;var r=o.filter((function(t){return !(t.command in Fe)}));if(r.length>0)throw new Error("Unimplemented: "+r.map((function(t){return t.command})).join(", ")+".");return o.forEach((function(t){"setTransition"!==t.command&&i[t.command].apply(i,t.args);})),this.stylesheet=e,!0},i.prototype.addImage=function(e,i){if(this.getImage(e))return this.fire(new t.ErrorEvent(new Error("An image with this name already exists.")));this.imageManager.addImage(e,i),this._changedImages[e]=!0,this._changed=!0,this.fire(new t.Event("data",{dataType:"style"}));},i.prototype.updateImage=function(t,e){this.imageManager.updateImage(t,e);},i.prototype.getImage=function(t){return this.imageManager.getImage(t)},i.prototype.removeImage=function(e){if(!this.getImage(e))return this.fire(new t.ErrorEvent(new Error("No image with this name exists.")));this.imageManager.removeImage(e),this._changedImages[e]=!0,this._changed=!0,this.fire(new t.Event("data",{dataType:"style"}));},i.prototype.listImages=function(){return this._checkLoaded(),this.imageManager.listImages()},i.prototype.addSource=function(e,i,o){var r=this;if(void 0===o&&(o={}),this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error("There is already a source with this ID");if(!i.type)throw new Error("The type property must be defined, but the only the following properties were given: "+Object.keys(i).join(", ")+".");if(!(["vector","raster","geojson","video","image"].indexOf(i.type)>=0)||!this._validate(t.validateStyle.source,"sources."+e,i,null,o)){this.map&&this.map._collectResourceTiming&&(i.collectResourceTiming=!0);var a=this.sourceCaches[e]=new Mt(e,i,this.dispatcher);a.style=this,a.setEventedParent(this,(function(){return {isSourceLoaded:r.loaded(),source:a.serialize(),sourceId:e}})),a.onAdd(this.map),this._changed=!0;}},i.prototype.removeSource=function(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID");for(var i in this._layers)if(this._layers[i].source===e)return this.fire(new t.ErrorEvent(new Error('Source "'+e+'" cannot be removed while layer "'+i+'" is using it.')));var o=this.sourceCaches[e];delete this.sourceCaches[e],delete this._updatedSources[e],o.fire(new t.Event("data",{sourceDataType:"metadata",dataType:"source",sourceId:e})),o.setEventedParent(null),o.clearTiles(),o.onRemove&&o.onRemove(this.map),this._changed=!0;},i.prototype.setGeoJSONSourceData=function(t,e){this._checkLoaded(),this.sourceCaches[t].getSource().setData(e),this._changed=!0;},i.prototype.getSource=function(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()},i.prototype.addLayer=function(e,i,o){void 0===o&&(o={}),this._checkLoaded();var r=e.id;if(this.getLayer(r))this.fire(new t.ErrorEvent(new Error('Layer with id "'+r+'" already exists on this map')));else{var a;if("custom"===e.type){if(Oe(this,t.validateCustomStyleLayer(e)))return;a=t.createStyleLayer(e);}else{if("object"==typeof e.source&&(this.addSource(r,e.source),e=t.clone$1(e),e=t.extend(e,{source:r})),this._validate(t.validateStyle.layer,"layers."+r,e,{arrayIndex:-1},o))return;a=t.createStyleLayer(e),this._validateLayer(a),a.setEventedParent(this,{layer:{id:r}});}var n=i?this._order.indexOf(i):this._order.length;if(i&&-1===n)this.fire(new t.ErrorEvent(new Error('Layer with id "'+i+'" does not exist on this map.')));else{if(this._order.splice(n,0,r),this._layerOrderChanged=!0,this._layers[r]=a,this._removedLayers[r]&&a.source&&"custom"!==a.type){var s=this._removedLayers[r];delete this._removedLayers[r],s.type!==a.type?this._updatedSources[a.source]="clear":(this._updatedSources[a.source]="reload",this.sourceCaches[a.source].pause());}this._updateLayer(a),a.onAdd&&a.onAdd(this.map);}}},i.prototype.moveLayer=function(e,i){if(this._checkLoaded(),this._changed=!0,this._layers[e]){if(e!==i){var o=this._order.indexOf(e);this._order.splice(o,1);var r=i?this._order.indexOf(i):this._order.length;i&&-1===r?this.fire(new t.ErrorEvent(new Error('Layer with id "'+i+'" does not exist on this map.'))):(this._order.splice(r,0,e),this._layerOrderChanged=!0);}}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be moved.")));},i.prototype.removeLayer=function(e){this._checkLoaded();var i=this._layers[e];if(i){i.setEventedParent(null);var o=this._order.indexOf(e);this._order.splice(o,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=i,delete this._layers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e],i.onRemove&&i.onRemove(this.map);}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be removed.")));},i.prototype.getLayer=function(t){return this._layers[t]},i.prototype.setLayerZoomRange=function(e,i,o){this._checkLoaded();var r=this.getLayer(e);r?r.minzoom===i&&r.maxzoom===o||(null!=i&&(r.minzoom=i),null!=o&&(r.maxzoom=o),this._updateLayer(r)):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot have zoom extent.")));},i.prototype.setFilter=function(e,i,o){void 0===o&&(o={}),this._checkLoaded();var r=this.getLayer(e);if(r){if(!t.deepEqual(r.filter,i))return null==i?(r.filter=void 0,void this._updateLayer(r)):void(this._validate(t.validateStyle.filter,"layers."+r.id+".filter",i,null,o)||(r.filter=t.clone$1(i),this._updateLayer(r)))}else this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be filtered.")));},i.prototype.getFilter=function(e){return t.clone$1(this.getLayer(e).filter)},i.prototype.setLayoutProperty=function(e,i,o,r){void 0===r&&(r={}),this._checkLoaded();var a=this.getLayer(e);a?t.deepEqual(a.getLayoutProperty(i),o)||(a.setLayoutProperty(i,o,r),this._updateLayer(a)):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")));},i.prototype.getLayoutProperty=function(e,i){var o=this.getLayer(e);if(o)return o.getLayoutProperty(i);this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style.")));},i.prototype.setPaintProperty=function(e,i,o,r){void 0===r&&(r={}),this._checkLoaded();var a=this.getLayer(e);a?t.deepEqual(a.getPaintProperty(i),o)||(a.setPaintProperty(i,o,r)&&this._updateLayer(a),this._changed=!0,this._updatedPaintProps[e]=!0):this.fire(new t.ErrorEvent(new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")));},i.prototype.getPaintProperty=function(t,e){return this.getLayer(t).getPaintProperty(e)},i.prototype.setFeatureState=function(e,i){this._checkLoaded();var o=e.source,r=e.sourceLayer,a=this.sourceCaches[o];if(void 0!==a){var n=a.getSource().type;"geojson"===n&&r?this.fire(new t.ErrorEvent(new Error("GeoJSON sources cannot have a sourceLayer parameter."))):"vector"!==n||r?(void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),a.setFeatureState(r,e.id,i)):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")));}else this.fire(new t.ErrorEvent(new Error("The source '"+o+"' does not exist in the map's style.")));},i.prototype.removeFeatureState=function(e,i){this._checkLoaded();var o=e.source,r=this.sourceCaches[o];if(void 0!==r){var a=r.getSource().type,n="vector"===a?e.sourceLayer:void 0;"vector"!==a||n?i&&"string"!=typeof e.id&&"number"!=typeof e.id?this.fire(new t.ErrorEvent(new Error("A feature id is requred to remove its specific state property."))):r.removeFeatureState(n,e.id,i):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")));}else this.fire(new t.ErrorEvent(new Error("The source '"+o+"' does not exist in the map's style.")));},i.prototype.getFeatureState=function(e){this._checkLoaded();var i=e.source,o=e.sourceLayer,r=this.sourceCaches[i];if(void 0!==r){if("vector"!==r.getSource().type||o)return void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),r.getFeatureState(o,e.id);this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")));}else this.fire(new t.ErrorEvent(new Error("The source '"+i+"' does not exist in the map's style.")));},i.prototype.getTransition=function(){return t.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)},i.prototype.serialize=function(){return t.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:t.mapObject(this.sourceCaches,(function(t){return t.serialize()})),layers:this._serializeLayers(this._order)},(function(t){return void 0!==t}))},i.prototype._updateLayer=function(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&"raster"!==this.sourceCaches[t.source].getSource().type&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._changed=!0;},i.prototype._flattenAndSortRenderedFeatures=function(t){for(var e=this,i=function(t){return "fill-extrusion"===e._layers[t].type},o={},r=[],a=this._order.length-1;a>=0;a--){var n=this._order[a];if(i(n)){o[n]=a;for(var s=0,l=t;s<l.length;s+=1){var c=l[s][n];if(c)for(var u=0,h=c;u<h.length;u+=1){var p=h[u];r.push(p);}}}}r.sort((function(t,e){return e.intersectionZ-t.intersectionZ}));for(var d=[],_=this._order.length-1;_>=0;_--){var f=this._order[_];if(i(f))for(var m=r.length-1;m>=0;m--){var g=r[m].feature;if(o[g.layer.id]<_)break;d.push(g),r.pop();}else for(var v=0,y=t;v<y.length;v+=1){var x=y[v][f];if(x)for(var b=0,w=x;b<w.length;b+=1){var E=w[b];d.push(E.feature);}}}return d},i.prototype.queryRenderedFeatures=function(e,i,o){i&&i.filter&&this._validate(t.validateStyle.filter,"queryRenderedFeatures.filter",i.filter,null,i);var r={};if(i&&i.layers){if(!Array.isArray(i.layers))return this.fire(new t.ErrorEvent(new Error("parameters.layers must be an Array."))),[];for(var a=0,n=i.layers;a<n.length;a+=1){var s=n[a],l=this._layers[s];if(!l)return this.fire(new t.ErrorEvent(new Error("The layer '"+s+"' does not exist in the map's style and cannot be queried for features."))),[];r[l.source]=!0;}}var c=[];for(var u in this.sourceCaches)i.layers&&!r[u]||c.push(F(this.sourceCaches[u],this._layers,e,i,o));return this.placement&&c.push(function(t,e,i,o,r,a){for(var n={},s=r.queryRenderedSymbols(i),l=[],c=0,u=Object.keys(s).map(Number);c<u.length;c+=1){var h=u[c];l.push(a[h]);}l.sort(U);for(var p=function(){var e=_[d],i=e.featureIndex.lookupSymbolFeatures(s[e.bucketInstanceId],e.bucketIndex,e.sourceLayerIndex,o.filter,o.layers,t);for(var r in i){var a=n[r]=n[r]||[],l=i[r];l.sort((function(t,i){var o=e.featureSortOrder;if(o){var r=o.indexOf(t.featureIndex);return o.indexOf(i.featureIndex)-r}return i.featureIndex-t.featureIndex}));for(var c=0,u=l;c<u.length;c+=1){var h=u[c];a.push(h);}}},d=0,_=l;d<_.length;d+=1)p();var f=function(i){n[i].forEach((function(o){var r=o.feature,a=t[i],n=e[a.source].getFeatureState(r.layer["source-layer"],r.id);r.source=r.layer.source,r.layer["source-layer"]&&(r.sourceLayer=r.layer["source-layer"]),r.state=n;}));};for(var m in n)f(m);return n}(this._layers,this.sourceCaches,e,i,this.placement.collisionIndex,this.placement.retainedQueryData)),this._flattenAndSortRenderedFeatures(c)},i.prototype.querySourceFeatures=function(e,i){i&&i.filter&&this._validate(t.validateStyle.filter,"querySourceFeatures.filter",i.filter,null,i);var o=this.sourceCaches[e];return o?function(t,e){for(var i=t.getRenderableIds().map((function(e){return t.getTileByID(e)})),o=[],r={},a=0;a<i.length;a++){var n=i[a],s=n.tileID.canonical.key;r[s]||(r[s]=!0,n.querySourceFeatures(o,e));}return o}(o,i):[]},i.prototype.addSourceType=function(t,e,o){return i.getSourceType(t)?o(new Error('A source type called "'+t+'" already exists.')):(i.setSourceType(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},o):o(null,null))},i.prototype.getLight=function(){return this.light.getLight()},i.prototype.setLight=function(e,i){void 0===i&&(i={}),this._checkLoaded();var o=this.light.getLight(),r=!1;for(var a in e)if(!t.deepEqual(e[a],o[a])){r=!0;break}if(r){var n={now:t.browser.now(),transition:t.extend({duration:300,delay:0},this.stylesheet.transition)};this.light.setLight(e,i),this.light.updateTransitions(n);}},i.prototype._validate=function(e,i,o,r,a){return void 0===a&&(a={}),(!a||!1!==a.validate)&&Oe(this,e.call(t.validateStyle,t.extend({key:i,style:this.serialize(),value:o,styleSpec:t.styleSpec},r)))},i.prototype._remove=function(){for(var e in this._request&&(this._request.cancel(),this._request=null),this._spriteRequest&&(this._spriteRequest.cancel(),this._spriteRequest=null),t.evented.off("pluginStateChange",this._rtlTextPluginCallback),this._layers){this._layers[e].setEventedParent(null);}for(var i in this.sourceCaches)this.sourceCaches[i].clearTiles(),this.sourceCaches[i].setEventedParent(null);this.imageManager.setEventedParent(null),this.setEventedParent(null),this.dispatcher.remove();},i.prototype._clearSource=function(t){this.sourceCaches[t].clearTiles();},i.prototype._reloadSource=function(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload();},i.prototype._updateSources=function(t){for(var e in this.sourceCaches)this.sourceCaches[e].update(t);},i.prototype._generateCollisionBoxes=function(){for(var t in this.sourceCaches)this._reloadSource(t);},i.prototype._updatePlacement=function(e,i,o,r,a){void 0===a&&(a=!1);for(var n=!1,s=!1,l={},c=0,u=this._order;c<u.length;c+=1){var h=u[c],p=this._layers[h];if("symbol"===p.type){if(!l[p.source]){var d=this.sourceCaches[p.source];l[p.source]=d.getRenderableIds(!0).map((function(t){return d.getTileByID(t)})).sort((function(t,e){return e.tileID.overscaledZ-t.tileID.overscaledZ||(t.tileID.isLessThan(e.tileID)?-1:1)}));}var _=this.crossTileSymbolIndex.addLayer(p,l[p.source],e.center.lng);n=n||_;}}if(this.crossTileSymbolIndex.pruneUnusedLayers(this._order),((a=a||this._layerOrderChanged||0===o)||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(t.browser.now(),e.zoom))&&(this.pauseablePlacement=new Me(e,this._order,a,i,o,r,this.placement),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,l),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(t.browser.now()),s=!0),n&&this.pauseablePlacement.placement.setStale()),s||n)for(var f=0,m=this._order;f<m.length;f+=1){var g=m[f],v=this._layers[g];"symbol"===v.type&&this.placement.updateLayerOpacities(v,l[v.source]);}return !this.pauseablePlacement.isDone()||this.placement.hasTransitions(t.browser.now())},i.prototype._releaseSymbolFadeTiles=function(){for(var t in this.sourceCaches)this.sourceCaches[t].releaseSymbolFadeTiles();},i.prototype.getImages=function(t,e,i){this.imageManager.getImages(e.icons,i),this._updateTilesForChangedImages();var o=this.sourceCaches[e.source];o&&o.setDependencies(e.tileID.key,e.type,e.icons);},i.prototype.getGlyphs=function(t,e,i){this.glyphManager.getGlyphs(e.stacks,i);},i.prototype.getResource=function(e,i,o){return t.makeRequest(i,o)},i}(t.Evented);je.getSourceType=function(t){return k[t]},je.setSourceType=function(t,e){k[t]=e;},je.registerForPluginStateChange=t.registerForPluginStateChange;var Ze=t.createLayout([{name:"a_pos",type:"Int16",components:2}]),qe=fi("#ifdef GL_ES\nprecision mediump float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif","#ifdef GL_ES\nprecision highp float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\nvec2 unpack_float(const float packedValue) {int packedIntValue=int(packedValue);int v0=packedIntValue/256;return vec2(v0,packedIntValue-v0*256);}vec2 unpack_opacity(const float packedOpacity) {int intOpacity=int(packedOpacity)/2;return vec2(float(intOpacity)/127.0,mod(packedOpacity,2.0));}vec4 decode_color(const vec2 encodedColor) {return vec4(unpack_float(encodedColor[0])/255.0,unpack_float(encodedColor[1])/255.0\n);}float unpack_mix_vec2(const vec2 packedValue,const float t) {return mix(packedValue[0],packedValue[1],t);}vec4 unpack_mix_color(const vec4 packedColors,const float t) {vec4 minColor=decode_color(vec2(packedColors[0],packedColors[1]));vec4 maxColor=decode_color(vec2(packedColors[2],packedColors[3]));return mix(minColor,maxColor,t);}vec2 get_pattern_pos(const vec2 pixel_coord_upper,const vec2 pixel_coord_lower,const vec2 pattern_size,const float tile_units_to_pixels,const vec2 pos) {vec2 offset=mod(mod(mod(pixel_coord_upper,pattern_size)*256.0,pattern_size)*256.0+pixel_coord_lower,pattern_size);return (tile_units_to_pixels*pos+offset)/pattern_size;}"),Ve=fi("uniform vec4 u_color;uniform float u_opacity;void main() {gl_FragColor=u_color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),Ge=fi("uniform vec2 u_pattern_tl_a;uniform vec2 u_pattern_br_a;uniform vec2 u_pattern_tl_b;uniform vec2 u_pattern_br_b;uniform vec2 u_texsize;uniform float u_mix;uniform float u_opacity;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(u_pattern_tl_a/u_texsize,u_pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(u_pattern_tl_b/u_texsize,u_pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_mix)*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pattern_size_a;uniform vec2 u_pattern_size_b;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_scale_a;uniform float u_scale_b;uniform float u_tile_units_to_pixels;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_a*u_pattern_size_a,u_tile_units_to_pixels,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_b*u_pattern_size_b,u_tile_units_to_pixels,a_pos);}"),We=fi("varying vec3 v_data;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=v_data.xy;float extrude_length=length(extrude);lowp float antialiasblur=v_data.z;float antialiased_blur=-max(blur,antialiasblur);float opacity_t=smoothstep(0.0,antialiased_blur,extrude_length-1.0);float color_t=stroke_width < 0.01 ? 0.0 : smoothstep(antialiased_blur,0.0,extrude_length-radius/(radius+stroke_width));gl_FragColor=opacity_t*mix(color*opacity,stroke_color*stroke_opacity,color_t);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform bool u_scale_with_map;uniform bool u_pitch_with_map;uniform vec2 u_extrude_scale;uniform lowp float u_device_pixel_ratio;uniform highp float u_camera_to_center_distance;attribute vec2 a_pos;varying vec3 v_data;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main(void) {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=vec2(mod(a_pos,2.0)*2.0-1.0);vec2 circle_center=floor(a_pos*0.5);if (u_pitch_with_map) {vec2 corner_position=circle_center;if (u_scale_with_map) {corner_position+=extrude*(radius+stroke_width)*u_extrude_scale;} else {vec4 projected_center=u_matrix*vec4(circle_center,0,1);corner_position+=extrude*(radius+stroke_width)*u_extrude_scale*(projected_center.w/u_camera_to_center_distance);}gl_Position=u_matrix*vec4(corner_position,0,1);} else {gl_Position=u_matrix*vec4(circle_center,0,1);if (u_scale_with_map) {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*u_camera_to_center_distance;} else {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*gl_Position.w;}}lowp float antialiasblur=1.0/u_device_pixel_ratio/(radius+stroke_width);v_data=vec3(extrude.x,extrude.y,antialiasblur);}"),Xe=fi("void main() {gl_FragColor=vec4(1.0);}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),He=fi("uniform highp float u_intensity;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n#pragma mapbox: initialize highp float weight\nfloat d=-0.5*3.0*3.0*dot(v_extrude,v_extrude);float val=weight*u_intensity*GAUSS_COEF*exp(d);gl_FragColor=vec4(val,1.0,1.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform float u_extrude_scale;uniform float u_opacity;uniform float u_intensity;attribute vec2 a_pos;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\nconst highp float ZERO=1.0/255.0/16.0;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n#pragma mapbox: initialize highp float weight\n#pragma mapbox: initialize mediump float radius\nvec2 unscaled_extrude=vec2(mod(a_pos,2.0)*2.0-1.0);float S=sqrt(-2.0*log(ZERO/weight/u_intensity/GAUSS_COEF))/3.0;v_extrude=S*unscaled_extrude;vec2 extrude=v_extrude*radius*u_extrude_scale;vec4 pos=vec4(floor(a_pos*0.5)+extrude,0,1);gl_Position=u_matrix*pos;}"),Ke=fi("uniform sampler2D u_image;uniform sampler2D u_color_ramp;uniform float u_opacity;varying vec2 v_pos;void main() {float t=texture2D(u_image,v_pos).r;vec4 color=texture2D(u_color_ramp,vec2(t,0.5));gl_FragColor=color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(0.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;attribute vec2 a_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos*u_world,0,1);v_pos.x=a_pos.x;v_pos.y=1.0-a_pos.y;}"),Ye=fi("varying float v_placed;varying float v_notUsed;void main() {float alpha=0.5;gl_FragColor=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {gl_FragColor=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {gl_FragColor*=.1;}}","attribute vec2 a_pos;attribute vec2 a_anchor_pos;attribute vec2 a_extrude;attribute vec2 a_placed;attribute vec2 a_shift;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;varying float v_placed;varying float v_notUsed;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,0.0,1.0);gl_Position.xy+=(a_extrude+a_shift)*u_extrude_scale*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;}"),Je=fi("uniform float u_overscale_factor;varying float v_placed;varying float v_notUsed;varying float v_radius;varying vec2 v_extrude;varying vec2 v_extrude_scale;void main() {float alpha=0.5;vec4 color=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {color=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {color*=.2;}float extrude_scale_length=length(v_extrude_scale);float extrude_length=length(v_extrude)*extrude_scale_length;float stroke_width=15.0*extrude_scale_length/u_overscale_factor;float radius=v_radius*extrude_scale_length;float distance_to_edge=abs(extrude_length-radius);float opacity_t=smoothstep(-stroke_width,0.0,-distance_to_edge);gl_FragColor=opacity_t*color;}","attribute vec2 a_pos;attribute vec2 a_anchor_pos;attribute vec2 a_extrude;attribute vec2 a_placed;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;varying float v_placed;varying float v_notUsed;varying float v_radius;varying vec2 v_extrude;varying vec2 v_extrude_scale;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,0.0,1.0);highp float padding_factor=1.2;gl_Position.xy+=a_extrude*u_extrude_scale*padding_factor*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;v_radius=abs(a_extrude.y);v_extrude=a_extrude*padding_factor;v_extrude_scale=u_extrude_scale*u_camera_to_center_distance*collision_perspective_ratio;}"),Qe=fi("uniform highp vec4 u_color;void main() {gl_FragColor=u_color;}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),$e=fi("#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_FragColor=color*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);}"),ti=fi("varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=outline_color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;uniform vec2 u_world;varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),ei=fi("uniform vec2 u_texsize;uniform sampler2D u_image;uniform float u_fade;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=mix(color1,color2,u_fade)*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec4 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float pixelRatio=u_scale.x;float tileRatio=u_scale.y;float fromScale=u_scale.z;float toScale=u_scale.w;gl_Position=u_matrix*vec4(a_pos,0,1);vec2 display_size_a=vec2((pattern_br_a.x-pattern_tl_a.x)/pixelRatio,(pattern_br_a.y-pattern_tl_a.y)/pixelRatio);vec2 display_size_b=vec2((pattern_br_b.x-pattern_tl_b.x)/pixelRatio,(pattern_br_b.y-pattern_tl_b.y)/pixelRatio);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),ii=fi("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_fade)*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec4 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float pixelRatio=u_scale.x;float tileZoomRatio=u_scale.y;float fromScale=u_scale.z;float toScale=u_scale.w;vec2 display_size_a=vec2((pattern_br_a.x-pattern_tl_a.x)/pixelRatio,(pattern_br_a.y-pattern_tl_a.y)/pixelRatio);vec2 display_size_b=vec2((pattern_br_b.x-pattern_tl_b.x)/pixelRatio,(pattern_br_b.y-pattern_tl_b.y)/pixelRatio);gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileZoomRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileZoomRatio,a_pos);}"),oi=fi("varying vec4 v_color;void main() {gl_FragColor=v_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;uniform float u_vertical_gradient;uniform lowp float u_opacity;attribute vec2 a_pos;attribute vec4 a_normal_ed;varying vec4 v_color;\n#pragma mapbox: define highp float base\n#pragma mapbox: define highp float height\n#pragma mapbox: define highp vec4 color\nvoid main() {\n#pragma mapbox: initialize highp float base\n#pragma mapbox: initialize highp float height\n#pragma mapbox: initialize highp vec4 color\nvec3 normal=a_normal_ed.xyz;base=max(0.0,base);height=max(0.0,height);float t=mod(normal.x,2.0);gl_Position=u_matrix*vec4(a_pos,t > 0.0 ? height : base,1);float colorvalue=color.r*0.2126+color.g*0.7152+color.b*0.0722;v_color=vec4(0.0,0.0,0.0,1.0);vec4 ambientlight=vec4(0.03,0.03,0.03,1.0);color+=ambientlight;float directional=clamp(dot(normal/16384.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((1.0-colorvalue+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_color.r+=clamp(color.r*directional*u_lightcolor.r,mix(0.0,0.3,1.0-u_lightcolor.r),1.0);v_color.g+=clamp(color.g*directional*u_lightcolor.g,mix(0.0,0.3,1.0-u_lightcolor.g),1.0);v_color.b+=clamp(color.b*directional*u_lightcolor.b,mix(0.0,0.3,1.0-u_lightcolor.b),1.0);v_color*=u_opacity;}"),ri=fi("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);vec4 mixedColor=mix(color1,color2,u_fade);gl_FragColor=mixedColor*v_lighting;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_height_factor;uniform vec4 u_scale;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;attribute vec2 a_pos;attribute vec4 a_normal_ed;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float pixelRatio=u_scale.x;float tileRatio=u_scale.y;float fromScale=u_scale.z;float toScale=u_scale.w;vec3 normal=a_normal_ed.xyz;float edgedistance=a_normal_ed.w;vec2 display_size_a=vec2((pattern_br_a.x-pattern_tl_a.x)/pixelRatio,(pattern_br_a.y-pattern_tl_a.y)/pixelRatio);vec2 display_size_b=vec2((pattern_br_b.x-pattern_tl_b.x)/pixelRatio,(pattern_br_b.y-pattern_tl_b.y)/pixelRatio);base=max(0.0,base);height=max(0.0,height);float t=mod(normal.x,2.0);float z=t > 0.0 ? height : base;gl_Position=u_matrix*vec4(a_pos,z,1);vec2 pos=normal.x==1.0 && normal.y==0.0 && normal.z==16384.0\n? a_pos\n: vec2(edgedistance,z*u_height_factor);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,pos);v_lighting=vec4(0.0,0.0,0.0,1.0);float directional=clamp(dot(normal/16383.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((0.5+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_lighting.rgb+=clamp(directional*u_lightcolor,mix(vec3(0.0),vec3(0.3),1.0-u_lightcolor),vec3(1.0));v_lighting*=u_opacity;}"),ai=fi("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_dimension;uniform float u_zoom;uniform float u_maxzoom;uniform vec4 u_unpack;float getElevation(vec2 coord,float bias) {vec4 data=texture2D(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack)/4.0;}void main() {vec2 epsilon=1.0/u_dimension;float a=getElevation(v_pos+vec2(-epsilon.x,-epsilon.y),0.0);float b=getElevation(v_pos+vec2(0,-epsilon.y),0.0);float c=getElevation(v_pos+vec2(epsilon.x,-epsilon.y),0.0);float d=getElevation(v_pos+vec2(-epsilon.x,0),0.0);float e=getElevation(v_pos,0.0);float f=getElevation(v_pos+vec2(epsilon.x,0),0.0);float g=getElevation(v_pos+vec2(-epsilon.x,epsilon.y),0.0);float h=getElevation(v_pos+vec2(0,epsilon.y),0.0);float i=getElevation(v_pos+vec2(epsilon.x,epsilon.y),0.0);float exaggeration=u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;vec2 deriv=vec2((c+f+f+i)-(a+d+d+g),(g+h+h+i)-(a+b+b+c))/ pow(2.0,(u_zoom-u_maxzoom)*exaggeration+19.2562-u_zoom);gl_FragColor=clamp(vec4(deriv.x/2.0+0.5,deriv.y/2.0+0.5,1.0,1.0),0.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_dimension;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_texture_pos/8192.0)*scale+epsilon;}"),ni=fi("uniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_latrange;uniform vec2 u_light;uniform vec4 u_shadow;uniform vec4 u_highlight;uniform vec4 u_accent;\n#define PI 3.141592653589793\nvoid main() {vec4 pixel=texture2D(u_image,v_pos);vec2 deriv=((pixel.rg*2.0)-1.0);float scaleFactor=cos(radians((u_latrange[0]-u_latrange[1])*(1.0-v_pos.y)+u_latrange[1]));float slope=atan(1.25*length(deriv)/scaleFactor);float aspect=deriv.x !=0.0 ? atan(deriv.y,-deriv.x) : PI/2.0*(deriv.y > 0.0 ? 1.0 :-1.0);float intensity=u_light.x;float azimuth=u_light.y+PI;float base=1.875-intensity*1.75;float maxValue=0.5*PI;float scaledSlope=intensity !=0.5 ? ((pow(base,slope)-1.0)/(pow(base,maxValue)-1.0))*maxValue : slope;float accent=cos(scaledSlope);vec4 accent_color=(1.0-accent)*u_accent*clamp(intensity*2.0,0.0,1.0);float shade=abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);vec4 shade_color=mix(u_shadow,u_highlight,shade)*sin(scaledSlope)*clamp(intensity*2.0,0.0,1.0);gl_FragColor=accent_color*(1.0-shade_color.a)+shade_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos=a_texture_pos/8192.0;}"),si=fi("uniform lowp float u_device_pixel_ratio;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform vec2 u_units_to_pixels;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_linesofar;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_width2=vec2(outset,inset);}"),li=fi("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;varying highp float v_lineprogress;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture2D(u_image,vec2(v_lineprogress,0.5));gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define MAX_LINE_DISTANCE 32767.0\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_lineprogress;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_lineprogress=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0/MAX_LINE_DISTANCE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_width2=vec2(outset,inset);}"),ci=fi("uniform lowp float u_device_pixel_ratio;uniform vec2 u_texsize;uniform float u_fade;uniform mediump vec4 u_scale;uniform sampler2D u_image;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float pixelRatio=u_scale.x;float tileZoomRatio=u_scale.y;float fromScale=u_scale.z;float toScale=u_scale.w;vec2 display_size_a=vec2((pattern_br_a.x-pattern_tl_a.x)/pixelRatio,(pattern_br_a.y-pattern_tl_a.y)/pixelRatio);vec2 display_size_b=vec2((pattern_br_b.x-pattern_tl_b.x)/pixelRatio,(pattern_br_b.y-pattern_tl_b.y)/pixelRatio);vec2 pattern_size_a=vec2(display_size_a.x*fromScale/tileZoomRatio,display_size_a.y);vec2 pattern_size_b=vec2(display_size_b.x*toScale/tileZoomRatio,display_size_b.y);float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float x_a=mod(v_linesofar/pattern_size_a.x,1.0);float x_b=mod(v_linesofar/pattern_size_b.x,1.0);float y_a=0.5+(v_normal.y*clamp(v_width2.s,0.0,(pattern_size_a.y+2.0)/2.0)/pattern_size_a.y);float y_b=0.5+(v_normal.y*clamp(v_width2.s,0.0,(pattern_size_b.y+2.0)/2.0)/pattern_size_b.y);vec2 pos_a=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,vec2(x_a,y_a));vec2 pos_b=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,vec2(x_b,y_b));vec4 color=mix(texture2D(u_image,pos_a),texture2D(u_image,pos_b),u_fade);gl_FragColor=color*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform vec2 u_units_to_pixels;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_linesofar=a_linesofar;v_width2=vec2(outset,inset);}"),ui=fi("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;uniform float u_sdfgamma;uniform float u_mix;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float sdfdist_a=texture2D(u_image,v_tex_a).a;float sdfdist_b=texture2D(u_image,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);alpha*=smoothstep(0.5-u_sdfgamma/floorwidth,0.5+u_sdfgamma/floorwidth,sdfdist);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_patternscale_a;uniform float u_tex_y_a;uniform vec2 u_patternscale_b;uniform float u_tex_y_b;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_tex_a=vec2(a_linesofar*u_patternscale_a.x/floorwidth,normal.y*u_patternscale_a.y+u_tex_y_a);v_tex_b=vec2(a_linesofar*u_patternscale_b.x/floorwidth,normal.y*u_patternscale_b.y+u_tex_y_b);v_width2=vec2(outset,inset);}"),hi=fi("uniform float u_fade_t;uniform float u_opacity;uniform sampler2D u_image0;uniform sampler2D u_image1;varying vec2 v_pos0;varying vec2 v_pos1;uniform float u_brightness_low;uniform float u_brightness_high;uniform float u_saturation_factor;uniform float u_contrast_factor;uniform vec3 u_spin_weights;void main() {vec4 color0=texture2D(u_image0,v_pos0);vec4 color1=texture2D(u_image1,v_pos1);if (color0.a > 0.0) {color0.rgb=color0.rgb/color0.a;}if (color1.a > 0.0) {color1.rgb=color1.rgb/color1.a;}vec4 color=mix(color0,color1,u_fade_t);color.a*=u_opacity;vec3 rgb=color.rgb;rgb=vec3(dot(rgb,u_spin_weights.xyz),dot(rgb,u_spin_weights.zxy),dot(rgb,u_spin_weights.yzx));float average=(color.r+color.g+color.b)/3.0;rgb+=(average-rgb)*u_saturation_factor;rgb=(rgb-0.5)*u_contrast_factor+0.5;vec3 u_high_vec=vec3(u_brightness_low,u_brightness_low,u_brightness_low);vec3 u_low_vec=vec3(u_brightness_high,u_brightness_high,u_brightness_high);gl_FragColor=vec4(mix(u_high_vec,u_low_vec,rgb)*color.a,color.a);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_tl_parent;uniform float u_scale_parent;uniform float u_buffer_scale;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos0;varying vec2 v_pos1;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos0=(((a_texture_pos/8192.0)-0.5)/u_buffer_scale )+0.5;v_pos1=(v_pos0*u_scale_parent)+u_tl_parent;}"),pi=fi("uniform sampler2D u_texture;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nlowp float alpha=opacity*v_fade_opacity;gl_FragColor=texture2D(u_texture,v_tex)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform highp float u_camera_to_center_distance;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform float u_fade_change;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform vec2 u_texsize;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;vec2 a_minFontScale=a_pixeloffset.zw/256.0;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*max(a_minFontScale,fontScale)+a_pxoffset/16.0),0.0,1.0);v_tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;v_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));}"),di=fi("#define SDF_PX 8.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;uniform bool u_is_text;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat EDGE_GAMMA=0.105/u_device_pixel_ratio;vec2 tex=v_data0.xy;float gamma_scale=v_data1.x;float size=v_data1.y;float fade_opacity=v_data1[2];float fontScale=u_is_text ? size/24.0 : size;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale+a_pxoffset),0.0,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));v_data0=a_tex/u_texsize;v_data1=vec3(gamma_scale,size,interpolated_fade_opacity);}"),_i=fi("#define SDF_PX 8.0\n#define SDF 1.0\n#define ICON 0.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform sampler2D u_texture_icon;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat fade_opacity=v_data1[2];if (v_data1.w==ICON) {vec2 tex_icon=v_data0.zw;lowp float alpha=opacity*fade_opacity;gl_FragColor=texture2D(u_texture_icon,tex_icon)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\nreturn;}vec2 tex=v_data0.xy;float EDGE_GAMMA=0.105/u_device_pixel_ratio;float gamma_scale=v_data1.x;float size=v_data1.y;float fontScale=size/24.0;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;uniform vec2 u_texsize_icon;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);float is_sdf=a_size[0]-2.0*a_size_min;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=size/24.0;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale),0.0,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));v_data0.xy=a_tex/u_texsize;v_data0.zw=a_tex/u_texsize_icon;v_data1=vec4(gamma_scale,size,interpolated_fade_opacity,is_sdf);}");function fi(t,e){var i=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,o={};return {fragmentSource:t=t.replace(i,(function(t,e,i,r,a){return o[a]=!0,"define"===e?"\n#ifndef HAS_UNIFORM_u_"+a+"\nvarying "+i+" "+r+" "+a+";\n#else\nuniform "+i+" "+r+" u_"+a+";\n#endif\n":"\n#ifdef HAS_UNIFORM_u_"+a+"\n    "+i+" "+r+" "+a+" = u_"+a+";\n#endif\n"})),vertexSource:e=e.replace(i,(function(t,e,i,r,a){var n="float"===r?"vec2":"vec4",s=a.match(/color/)?"color":n;return o[a]?"define"===e?"\n#ifndef HAS_UNIFORM_u_"+a+"\nuniform lowp float u_"+a+"_t;\nattribute "+i+" "+n+" a_"+a+";\nvarying "+i+" "+r+" "+a+";\n#else\nuniform "+i+" "+r+" u_"+a+";\n#endif\n":"vec4"===s?"\n#ifndef HAS_UNIFORM_u_"+a+"\n    "+a+" = a_"+a+";\n#else\n    "+i+" "+r+" "+a+" = u_"+a+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+a+"\n    "+a+" = unpack_mix_"+s+"(a_"+a+", u_"+a+"_t);\n#else\n    "+i+" "+r+" "+a+" = u_"+a+";\n#endif\n":"define"===e?"\n#ifndef HAS_UNIFORM_u_"+a+"\nuniform lowp float u_"+a+"_t;\nattribute "+i+" "+n+" a_"+a+";\n#else\nuniform "+i+" "+r+" u_"+a+";\n#endif\n":"vec4"===s?"\n#ifndef HAS_UNIFORM_u_"+a+"\n    "+i+" "+r+" "+a+" = a_"+a+";\n#else\n    "+i+" "+r+" "+a+" = u_"+a+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+a+"\n    "+i+" "+r+" "+a+" = unpack_mix_"+s+"(a_"+a+", u_"+a+"_t);\n#else\n    "+i+" "+r+" "+a+" = u_"+a+";\n#endif\n"}))}}var mi=Object.freeze({__proto__:null,prelude:qe,background:Ve,backgroundPattern:Ge,circle:We,clippingMask:Xe,heatmap:He,heatmapTexture:Ke,collisionBox:Ye,collisionCircle:Je,debug:Qe,fill:$e,fillOutline:ti,fillOutlinePattern:ei,fillPattern:ii,fillExtrusion:oi,fillExtrusionPattern:ri,hillshadePrepare:ai,hillshade:ni,line:si,lineGradient:li,linePattern:ci,lineSDF:ui,raster:hi,symbolIcon:pi,symbolSDF:di,symbolTextAndIcon:_i}),gi=function(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null;};gi.prototype.bind=function(t,e,i,o,r,a,n,s){this.context=t;for(var l=this.boundPaintVertexBuffers.length!==o.length,c=0;!l&&c<o.length;c++)this.boundPaintVertexBuffers[c]!==o[c]&&(l=!0);var u=!this.vao||this.boundProgram!==e||this.boundLayoutVertexBuffer!==i||l||this.boundIndexBuffer!==r||this.boundVertexOffset!==a||this.boundDynamicVertexBuffer!==n||this.boundDynamicVertexBuffer2!==s;!t.extVertexArrayObject||u?this.freshBind(e,i,o,r,a,n,s):(t.bindVertexArrayOES.set(this.vao),n&&n.bind(),r&&r.dynamicDraw&&r.bind(),s&&s.bind());},gi.prototype.freshBind=function(t,e,i,o,r,a,n){var s,l=t.numAttributes,c=this.context,u=c.gl;if(c.extVertexArrayObject)this.vao&&this.destroy(),this.vao=c.extVertexArrayObject.createVertexArrayOES(),c.bindVertexArrayOES.set(this.vao),s=0,this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=i,this.boundIndexBuffer=o,this.boundVertexOffset=r,this.boundDynamicVertexBuffer=a,this.boundDynamicVertexBuffer2=n;else{s=c.currentNumAttributes||0;for(var h=l;h<s;h++)u.disableVertexAttribArray(h);}e.enableAttributes(u,t);for(var p=0,d=i;p<d.length;p+=1){d[p].enableAttributes(u,t);}a&&a.enableAttributes(u,t),n&&n.enableAttributes(u,t),e.bind(),e.setVertexAttribPointers(u,t,r);for(var _=0,f=i;_<f.length;_+=1){var m=f[_];m.bind(),m.setVertexAttribPointers(u,t,r);}a&&(a.bind(),a.setVertexAttribPointers(u,t,r)),o&&o.bind(),n&&(n.bind(),n.setVertexAttribPointers(u,t,r)),c.currentNumAttributes=l;},gi.prototype.destroy=function(){this.vao&&(this.context.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null);};var vi=function(t,e,i,o,r){var a=t.gl;this.program=a.createProgram();var n=i.defines();r&&n.push("#define OVERDRAW_INSPECTOR;");var s=n.concat(qe.fragmentSource,e.fragmentSource).join("\n"),l=n.concat(qe.vertexSource,e.vertexSource).join("\n"),c=a.createShader(a.FRAGMENT_SHADER);if(a.isContextLost())this.failedToCreate=!0;else{a.shaderSource(c,s),a.compileShader(c),a.attachShader(this.program,c);var u=a.createShader(a.VERTEX_SHADER);if(a.isContextLost())this.failedToCreate=!0;else{a.shaderSource(u,l),a.compileShader(u),a.attachShader(this.program,u);for(var h=i.layoutAttributes||[],p=0;p<h.length;p++)a.bindAttribLocation(this.program,p,h[p].name);a.linkProgram(this.program),this.numAttributes=a.getProgramParameter(this.program,a.ACTIVE_ATTRIBUTES),this.attributes={};for(var d={},_=0;_<this.numAttributes;_++){var f=a.getActiveAttrib(this.program,_);f&&(this.attributes[f.name]=a.getAttribLocation(this.program,f.name));}for(var m=a.getProgramParameter(this.program,a.ACTIVE_UNIFORMS),g=0;g<m;g++){var v=a.getActiveUniform(this.program,g);v&&(d[v.name]=a.getUniformLocation(this.program,v.name));}this.fixedUniforms=o(t,d),this.binderUniforms=i.getUniforms(t,d);}}};function yi(e,i,o){var r=1/he(o,1,i.transform.tileZoom),a=Math.pow(2,o.tileID.overscaledZ),n=o.tileSize*Math.pow(2,i.transform.tileZoom)/a,s=n*(o.tileID.canonical.x+o.tileID.wrap*a),l=n*o.tileID.canonical.y;return {u_image:0,u_texsize:o.imageAtlasTexture.size,u_scale:[t.browser.devicePixelRatio,r,e.fromScale,e.toScale],u_fade:e.t,u_pixel_coord_upper:[s>>16,l>>16],u_pixel_coord_lower:[65535&s,65535&l]}}vi.prototype.draw=function(t,e,i,o,r,a,n,s,l,c,u,h,p,d,_,f){var m,g=t.gl;if(!this.failedToCreate){for(var v in t.program.set(this.program),t.setDepthMode(i),t.setStencilMode(o),t.setColorMode(r),t.setCullFace(a),this.fixedUniforms)this.fixedUniforms[v].set(n[v]);d&&d.setUniforms(t,this.binderUniforms,h,{zoom:p});for(var y=(m={},m[g.LINES]=2,m[g.TRIANGLES]=3,m[g.LINE_STRIP]=1,m)[e],x=0,b=u.get();x<b.length;x+=1){var w=b[x],E=w.vaos||(w.vaos={});(E[s]||(E[s]=new gi)).bind(t,this,l,d?d.getPaintVertexBuffers():[],c,w.vertexOffset,_,f),g.drawElements(e,w.primitiveLength*y,g.UNSIGNED_SHORT,w.primitiveOffset*y*2);}}};var xi=function(e,i,o,r){var a=i.style.light,n=a.properties.get("position"),s=[n.x,n.y,n.z],l=t.create$1();"viewport"===a.properties.get("anchor")&&t.fromRotation(l,-i.transform.angle),t.transformMat3(s,s,l);var c=a.properties.get("color");return {u_matrix:e,u_lightpos:s,u_lightintensity:a.properties.get("intensity"),u_lightcolor:[c.r,c.g,c.b],u_vertical_gradient:+o,u_opacity:r}},bi=function(e,i,o,r,a,n,s){return t.extend(xi(e,i,o,r),yi(n,i,s),{u_height_factor:-Math.pow(2,a.overscaledZ)/s.tileSize/8})},wi=function(t){return {u_matrix:t}},Ei=function(e,i,o,r){return t.extend(wi(e),yi(o,i,r))},Ti=function(t,e){return {u_matrix:t,u_world:e}},Ii=function(e,i,o,r,a){return t.extend(Ei(e,i,o,r),{u_world:a})},Ci=function(e,i,o,r){var a,n,s=e.transform;if("map"===r.paint.get("circle-pitch-alignment")){var l=he(o,1,s.zoom);a=!0,n=[l,l];}else a=!1,n=s.pixelsToGLUnits;return {u_camera_to_center_distance:s.cameraToCenterDistance,u_scale_with_map:+("map"===r.paint.get("circle-pitch-scale")),u_matrix:e.translatePosMatrix(i.posMatrix,o,r.paint.get("circle-translate"),r.paint.get("circle-translate-anchor")),u_pitch_with_map:+a,u_device_pixel_ratio:t.browser.devicePixelRatio,u_extrude_scale:n}},Si=function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pixels_to_tile_units:new t.Uniform1f(e,i.u_pixels_to_tile_units),u_extrude_scale:new t.Uniform2f(e,i.u_extrude_scale),u_overscale_factor:new t.Uniform1f(e,i.u_overscale_factor)}},Pi=function(t,e,i){var o=he(i,1,e.zoom),r=Math.pow(2,e.zoom-i.tileID.overscaledZ),a=i.tileID.overscaleFactor();return {u_matrix:t,u_camera_to_center_distance:e.cameraToCenterDistance,u_pixels_to_tile_units:o,u_extrude_scale:[e.pixelsToGLUnits[0]/(o*r),e.pixelsToGLUnits[1]/(o*r)],u_overscale_factor:a}},zi=function(t,e){return {u_matrix:t,u_color:e}},Li=function(t){return {u_matrix:t}},Mi=function(t,e,i,o){return {u_matrix:t,u_extrude_scale:he(e,1,i),u_intensity:o}},Di=function(e,i,o,r){var a=t.create();t.ortho(a,0,e.width,e.height,0,0,1);var n=e.context.gl;return {u_matrix:a,u_world:[n.drawingBufferWidth,n.drawingBufferHeight],u_image:o,u_color_ramp:r,u_opacity:i.paint.get("heatmap-opacity")}},Ai=function(t,e,i){var o=i.paint.get("hillshade-shadow-color"),r=i.paint.get("hillshade-highlight-color"),a=i.paint.get("hillshade-accent-color"),n=i.paint.get("hillshade-illumination-direction")*(Math.PI/180);"viewport"===i.paint.get("hillshade-illumination-anchor")&&(n-=t.transform.angle);var s=!t.options.moving;return {u_matrix:t.transform.calculatePosMatrix(e.tileID.toUnwrapped(),s),u_image:0,u_latrange:ki(t,e.tileID),u_light:[i.paint.get("hillshade-exaggeration"),n],u_shadow:o,u_highlight:r,u_accent:a}},Ri=function(e,i,o){var r=i.stride,a=t.create();return t.ortho(a,0,t.EXTENT,-t.EXTENT,0,0,1),t.translate(a,a,[0,-t.EXTENT,0]),{u_matrix:a,u_image:1,u_dimension:[r,r],u_zoom:e.overscaledZ,u_maxzoom:o,u_unpack:i.getUnpackVector()}};function ki(e,i){var o=Math.pow(2,i.canonical.z),r=i.canonical.y;return [new t.MercatorCoordinate(0,r/o).toLngLat().lat,new t.MercatorCoordinate(0,(r+1)/o).toLngLat().lat]}var Bi=function(e,i,o){var r=e.transform;return {u_matrix:ji(e,i,o),u_ratio:1/he(i,1,r.zoom),u_device_pixel_ratio:t.browser.devicePixelRatio,u_units_to_pixels:[1/r.pixelsToGLUnits[0],1/r.pixelsToGLUnits[1]]}},Oi=function(e,i,o){return t.extend(Bi(e,i,o),{u_image:0})},Fi=function(e,i,o,r){var a=e.transform,n=Ni(i,a);return {u_matrix:ji(e,i,o),u_texsize:i.imageAtlasTexture.size,u_ratio:1/he(i,1,a.zoom),u_device_pixel_ratio:t.browser.devicePixelRatio,u_image:0,u_scale:[t.browser.devicePixelRatio,n,r.fromScale,r.toScale],u_fade:r.t,u_units_to_pixels:[1/a.pixelsToGLUnits[0],1/a.pixelsToGLUnits[1]]}},Ui=function(e,i,o,r,a){var n=e.transform,s=e.lineAtlas,l=Ni(i,n),c="round"===o.layout.get("line-cap"),u=s.getDash(r.from,c),h=s.getDash(r.to,c),p=u.width*a.fromScale,d=h.width*a.toScale;return t.extend(Bi(e,i,o),{u_patternscale_a:[l/p,-u.height/2],u_patternscale_b:[l/d,-h.height/2],u_sdfgamma:s.width/(256*Math.min(p,d)*t.browser.devicePixelRatio)/2,u_image:0,u_tex_y_a:u.y,u_tex_y_b:h.y,u_mix:a.t})};function Ni(t,e){return 1/he(t,1,e.tileZoom)}function ji(t,e,i){return t.translatePosMatrix(e.tileID.posMatrix,e,i.paint.get("line-translate"),i.paint.get("line-translate-anchor"))}var Zi=function(t,e,i,o,r){return {u_matrix:t,u_tl_parent:e,u_scale_parent:i,u_buffer_scale:1,u_fade_t:o.mix,u_opacity:o.opacity*r.paint.get("raster-opacity"),u_image0:0,u_image1:1,u_brightness_low:r.paint.get("raster-brightness-min"),u_brightness_high:r.paint.get("raster-brightness-max"),u_saturation_factor:(n=r.paint.get("raster-saturation"),n>0?1-1/(1.001-n):-n),u_contrast_factor:(a=r.paint.get("raster-contrast"),a>0?1/(1-a):1+a),u_spin_weights:qi(r.paint.get("raster-hue-rotate"))};var a,n;};function qi(t){t*=Math.PI/180;var e=Math.sin(t),i=Math.cos(t);return [(2*i+1)/3,(-Math.sqrt(3)*e-i+1)/3,(Math.sqrt(3)*e-i+1)/3]}var Vi=function(t,e,i,o,r,a,n,s,l,c){var u=r.transform;return {u_is_size_zoom_constant:+("constant"===t||"source"===t),u_is_size_feature_constant:+("constant"===t||"camera"===t),u_size_t:e?e.uSizeT:0,u_size:e?e.uSize:0,u_camera_to_center_distance:u.cameraToCenterDistance,u_pitch:u.pitch/360*2*Math.PI,u_rotate_symbol:+i,u_aspect_ratio:u.width/u.height,u_fade_change:r.options.fadeDuration?r.symbolFadeChange:1,u_matrix:a,u_label_plane_matrix:n,u_coord_matrix:s,u_is_text:+l,u_pitch_with_map:+o,u_texsize:c,u_texture:0}},Gi=function(e,i,o,r,a,n,s,l,c,u,h){var p=a.transform;return t.extend(Vi(e,i,o,r,a,n,s,l,c,u),{u_gamma_scale:r?Math.cos(p._pitch)*p.cameraToCenterDistance:1,u_device_pixel_ratio:t.browser.devicePixelRatio,u_is_halo:+h})},Wi=function(e,i,o,r,a,n,s,l,c,u){return t.extend(Gi(e,i,o,r,a,n,s,l,!0,c,!0),{u_texsize_icon:u,u_texture_icon:1})},Xi=function(t,e,i){return {u_matrix:t,u_opacity:e,u_color:i}},Hi=function(e,i,o,r,a,n){return t.extend(function(t,e,i,o){var r=i.imageManager.getPattern(t.from.toString()),a=i.imageManager.getPattern(t.to.toString()),n=i.imageManager.getPixelSize(),s=n.width,l=n.height,c=Math.pow(2,o.tileID.overscaledZ),u=o.tileSize*Math.pow(2,i.transform.tileZoom)/c,h=u*(o.tileID.canonical.x+o.tileID.wrap*c),p=u*o.tileID.canonical.y;return {u_image:0,u_pattern_tl_a:r.tl,u_pattern_br_a:r.br,u_pattern_tl_b:a.tl,u_pattern_br_b:a.br,u_texsize:[s,l],u_mix:e.t,u_pattern_size_a:r.displaySize,u_pattern_size_b:a.displaySize,u_scale_a:e.fromScale,u_scale_b:e.toScale,u_tile_units_to_pixels:1/he(o,1,i.transform.tileZoom),u_pixel_coord_upper:[h>>16,p>>16],u_pixel_coord_lower:[65535&h,65535&p]}}(r,n,o,a),{u_matrix:e,u_opacity:i})},Ki={fillExtrusion:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_lightpos:new t.Uniform3f(e,i.u_lightpos),u_lightintensity:new t.Uniform1f(e,i.u_lightintensity),u_lightcolor:new t.Uniform3f(e,i.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,i.u_vertical_gradient),u_opacity:new t.Uniform1f(e,i.u_opacity)}},fillExtrusionPattern:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_lightpos:new t.Uniform3f(e,i.u_lightpos),u_lightintensity:new t.Uniform1f(e,i.u_lightintensity),u_lightcolor:new t.Uniform3f(e,i.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,i.u_vertical_gradient),u_height_factor:new t.Uniform1f(e,i.u_height_factor),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform4f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade),u_opacity:new t.Uniform1f(e,i.u_opacity)}},fill:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}},fillPattern:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform4f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}},fillOutline:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world)}},fillOutlinePattern:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform4f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}},circle:function(e,i){return {u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_scale_with_map:new t.Uniform1i(e,i.u_scale_with_map),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_extrude_scale:new t.Uniform2f(e,i.u_extrude_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}},collisionBox:Si,collisionCircle:Si,debug:function(e,i){return {u_color:new t.UniformColor(e,i.u_color),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}},clippingMask:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}},heatmap:function(e,i){return {u_extrude_scale:new t.Uniform1f(e,i.u_extrude_scale),u_intensity:new t.Uniform1f(e,i.u_intensity),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}},heatmapTexture:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world),u_image:new t.Uniform1i(e,i.u_image),u_color_ramp:new t.Uniform1i(e,i.u_color_ramp),u_opacity:new t.Uniform1f(e,i.u_opacity)}},hillshade:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_latrange:new t.Uniform2f(e,i.u_latrange),u_light:new t.Uniform2f(e,i.u_light),u_shadow:new t.UniformColor(e,i.u_shadow),u_highlight:new t.UniformColor(e,i.u_highlight),u_accent:new t.UniformColor(e,i.u_accent)}},hillshadePrepare:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_dimension:new t.Uniform2f(e,i.u_dimension),u_zoom:new t.Uniform1f(e,i.u_zoom),u_maxzoom:new t.Uniform1f(e,i.u_maxzoom),u_unpack:new t.Uniform4f(e,i.u_unpack)}},line:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels)}},lineGradient:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_image:new t.Uniform1i(e,i.u_image)}},linePattern:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_texsize:new t.Uniform2f(e,i.u_texsize),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_image:new t.Uniform1i(e,i.u_image),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_scale:new t.Uniform4f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}},lineSDF:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_patternscale_a:new t.Uniform2f(e,i.u_patternscale_a),u_patternscale_b:new t.Uniform2f(e,i.u_patternscale_b),u_sdfgamma:new t.Uniform1f(e,i.u_sdfgamma),u_image:new t.Uniform1i(e,i.u_image),u_tex_y_a:new t.Uniform1f(e,i.u_tex_y_a),u_tex_y_b:new t.Uniform1f(e,i.u_tex_y_b),u_mix:new t.Uniform1f(e,i.u_mix)}},raster:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_tl_parent:new t.Uniform2f(e,i.u_tl_parent),u_scale_parent:new t.Uniform1f(e,i.u_scale_parent),u_buffer_scale:new t.Uniform1f(e,i.u_buffer_scale),u_fade_t:new t.Uniform1f(e,i.u_fade_t),u_opacity:new t.Uniform1f(e,i.u_opacity),u_image0:new t.Uniform1i(e,i.u_image0),u_image1:new t.Uniform1i(e,i.u_image1),u_brightness_low:new t.Uniform1f(e,i.u_brightness_low),u_brightness_high:new t.Uniform1f(e,i.u_brightness_high),u_saturation_factor:new t.Uniform1f(e,i.u_saturation_factor),u_contrast_factor:new t.Uniform1f(e,i.u_contrast_factor),u_spin_weights:new t.Uniform3f(e,i.u_spin_weights)}},symbolIcon:function(e,i){return {u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1f(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texture:new t.Uniform1i(e,i.u_texture)}},symbolSDF:function(e,i){return {u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1f(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texture:new t.Uniform1i(e,i.u_texture),u_gamma_scale:new t.Uniform1f(e,i.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_is_halo:new t.Uniform1f(e,i.u_is_halo)}},symbolTextAndIcon:function(e,i){return {u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1f(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texsize_icon:new t.Uniform2f(e,i.u_texsize_icon),u_texture:new t.Uniform1i(e,i.u_texture),u_texture_icon:new t.Uniform1i(e,i.u_texture_icon),u_gamma_scale:new t.Uniform1f(e,i.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_is_halo:new t.Uniform1f(e,i.u_is_halo)}},background:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_opacity:new t.Uniform1f(e,i.u_opacity),u_color:new t.UniformColor(e,i.u_color)}},backgroundPattern:function(e,i){return {u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_opacity:new t.Uniform1f(e,i.u_opacity),u_image:new t.Uniform1i(e,i.u_image),u_pattern_tl_a:new t.Uniform2f(e,i.u_pattern_tl_a),u_pattern_br_a:new t.Uniform2f(e,i.u_pattern_br_a),u_pattern_tl_b:new t.Uniform2f(e,i.u_pattern_tl_b),u_pattern_br_b:new t.Uniform2f(e,i.u_pattern_br_b),u_texsize:new t.Uniform2f(e,i.u_texsize),u_mix:new t.Uniform1f(e,i.u_mix),u_pattern_size_a:new t.Uniform2f(e,i.u_pattern_size_a),u_pattern_size_b:new t.Uniform2f(e,i.u_pattern_size_b),u_scale_a:new t.Uniform1f(e,i.u_scale_a),u_scale_b:new t.Uniform1f(e,i.u_scale_b),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_tile_units_to_pixels:new t.Uniform1f(e,i.u_tile_units_to_pixels)}}};function Yi(t,e,i,o,r,a,n,s){for(var l=t.context,c=l.gl,u=r?t.useProgram("collisionCircle"):t.useProgram("collisionBox"),h=0;h<o.length;h++){var p=o[h],d=e.getTile(p),_=d.getBucket(i);if(_){var f=r?s?_.textCollisionCircle:_.iconCollisionCircle:s?_.textCollisionBox:_.iconCollisionBox;if(f){var m=p.posMatrix;0===a[0]&&0===a[1]||(m=t.translatePosMatrix(p.posMatrix,d,a,n)),u.draw(l,r?c.TRIANGLES:c.LINES,Ct.disabled,St.disabled,t.colorModeForRenderPass(),zt.disabled,Pi(m,t.transform,d),i.id,f.layoutVertexBuffer,f.indexBuffer,f.segments,null,t.transform.zoom,null,null,f.collisionVertexBuffer);}}}}function Ji(t,e,i,o,r,a,n){Yi(t,e,i,o,!1,r,a,n),Yi(t,e,i,o,!0,r,a,n);}var Qi=t.identity(new Float32Array(16));function $i(e,i,o,r,a,n){var s=t.getAnchorAlignment(e),l=-(s.horizontalAlign-.5)*i,c=-(s.verticalAlign-.5)*o,u=t.evaluateVariableOffset(e,r);return new t.Point((l/a+u[0])*n,(c/a+u[1])*n)}function to(e,i,o,r,a,n,s,l,c,u,h){var p=e.text.placedSymbolArray,d=e.text.dynamicLayoutVertexArray,_=e.icon.dynamicLayoutVertexArray,f={};d.clear();for(var m=0;m<p.length;m++){var g=p.get(m),v=e.allowVerticalPlacement&&!g.placedOrientation,y=g.hidden||!g.crossTileID||v?null:r[g.crossTileID];if(y){var x=new t.Point(g.anchorX,g.anchorY),b=Qt(x,o?l:s),w=.5+n.cameraToCenterDistance/b.signedDistanceFromCamera*.5,E=a.evaluateSizeForFeature(e.textSizeData,u,g)*w/t.ONE_EM;o&&(E*=e.tilePixelRatio/c);for(var T=y.width,I=y.height,C=$i(y.anchor,T,I,y.textOffset,y.textBoxScale,E),S=o?Qt(x.add(C),s).point:b.point.add(i?C.rotate(-n.angle):C),P=e.allowVerticalPlacement&&g.placedOrientation===t.WritingMode.vertical?Math.PI/2:0,z=0;z<g.numGlyphs;z++)t.addDynamicAttributes(d,S,P);h&&g.associatedIconIndex>=0&&(f[g.associatedIconIndex]={shiftedAnchor:S,angle:P});}else se(g.numGlyphs,d);}if(h){_.clear();for(var L=e.icon.placedSymbolArray,M=0;M<L.length;M++){var D=L.get(M);if(D.hidden)se(D.numGlyphs,_);else{var A=f[M];if(A)for(var R=0;R<D.numGlyphs;R++)t.addDynamicAttributes(_,A.shiftedAnchor,A.angle);else se(D.numGlyphs,_);}}e.icon.dynamicLayoutVertexBuffer.updateData(_);}e.text.dynamicLayoutVertexBuffer.updateData(d);}function eo(t,e,i){return i.iconsInText&&e?"symbolTextAndIcon":t?"symbolSDF":"symbolIcon"}function io(e,i,o,r,a,n,s,l,c,u,h,p){for(var d,_,f=e.context,m=f.gl,g=e.transform,v="map"===l,y="map"===c,x=v&&"point"!==o.layout.get("symbol-placement"),b=v&&!y&&!x,w=void 0!==o.layout.get("symbol-sort-key").constantOr(1),E=e.depthModeForSublayer(0,Ct.ReadOnly),T=o.layout.get("text-variable-anchor"),I=[],C=0,S=r;C<S.length;C+=1){var P=S[C],z=i.getTile(P),L=z.getBucket(o);if(L){var M=a?L.text:L.icon;if(M&&M.segments.get().length){var D=M.programConfigurations.get(o.id),A=a||L.sdfIcons,R=a?L.textSizeData:L.iconSizeData,k=y||0!==g.pitch;d||(d=e.useProgram(eo(A,a,L),D),_=t.evaluateSizeForZoom(R,g.zoom));var B=void 0,O=[0,0],F=void 0,U=void 0,N=null,j=void 0;if(a){if(F=z.glyphAtlasTexture,U=m.LINEAR,B=z.glyphAtlasTexture.size,L.iconsInText){O=z.imageAtlasTexture.size,N=z.imageAtlasTexture;var Z="composite"===R.kind||"camera"===R.kind;j=k||e.options.rotating||e.options.zooming||Z?m.LINEAR:m.NEAREST;}}else{var q=1!==o.layout.get("icon-size").constantOr(0)||L.iconsNeedLinear;F=z.imageAtlasTexture,U=A||e.options.rotating||e.options.zooming||q||k?m.LINEAR:m.NEAREST,B=z.imageAtlasTexture.size;}var V=he(z,1,e.transform.zoom),G=Yt(P.posMatrix,y,v,e.transform,V),W=Jt(P.posMatrix,y,v,e.transform,V),X=T&&L.hasTextData(),H="none"!==o.layout.get("icon-text-fit")&&X&&L.hasIconData();x&&te(L,P.posMatrix,e,a,G,W,y,u);var K=e.translatePosMatrix(P.posMatrix,z,n,s),Y=x||a&&T||H?Qi:G,J=e.translatePosMatrix(W,z,n,s,!0),Q=A&&0!==o.paint.get(a?"text-halo-width":"icon-halo-width").constantOr(1),$={program:d,buffers:M,uniformValues:A?L.iconsInText?Wi(R.kind,_,b,y,e,K,Y,J,B,O):Gi(R.kind,_,b,y,e,K,Y,J,a,B,!0):Vi(R.kind,_,b,y,e,K,Y,J,a,B),atlasTexture:F,atlasTextureIcon:N,atlasInterpolation:U,atlasInterpolationIcon:j,isSDF:A,hasHalo:Q};if(w)for(var tt=0,et=M.segments.get();tt<et.length;tt+=1){var it=et[tt];I.push({segments:new t.SegmentVector([it]),sortKey:it.sortKey,state:$});}else I.push({segments:M.segments,sortKey:0,state:$});}}}w&&I.sort((function(t,e){return t.sortKey-e.sortKey}));for(var ot=0,rt=I;ot<rt.length;ot+=1){var at=rt[ot],nt=at.state;if(f.activeTexture.set(m.TEXTURE0),nt.atlasTexture.bind(nt.atlasInterpolation,m.CLAMP_TO_EDGE),nt.atlasTextureIcon&&(f.activeTexture.set(m.TEXTURE1),nt.atlasTextureIcon&&nt.atlasTextureIcon.bind(nt.atlasInterpolationIcon,m.CLAMP_TO_EDGE)),nt.isSDF){var st=nt.uniformValues;nt.hasHalo&&(st.u_is_halo=1,oo(nt.buffers,at.segments,o,e,nt.program,E,h,p,st)),st.u_is_halo=0;}oo(nt.buffers,at.segments,o,e,nt.program,E,h,p,nt.uniformValues);}}function oo(t,e,i,o,r,a,n,s,l){var c=o.context,u=c.gl;r.draw(c,u.TRIANGLES,a,n,s,zt.disabled,l,i.id,t.layoutVertexBuffer,t.indexBuffer,e,i.paint,o.transform.zoom,t.programConfigurations.get(i.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer);}function ro(t,e,i,o,r,a,n){var s,l,c,u,h,p=t.context.gl,d=i.paint.get("fill-pattern"),_=d&&d.constantOr(1),f=i.getCrossfadeParameters();n?(l=_&&!i.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline",s=p.LINES):(l=_?"fillPattern":"fill",s=p.TRIANGLES);for(var m=0,g=o;m<g.length;m+=1){var v=g[m],y=e.getTile(v);if(!_||y.patternsLoaded()){var x=y.getBucket(i);if(x){var b=x.programConfigurations.get(i.id),w=t.useProgram(l,b);_&&(t.context.activeTexture.set(p.TEXTURE0),y.imageAtlasTexture.bind(p.LINEAR,p.CLAMP_TO_EDGE),b.updatePatternPaintBuffers(f));var E=d.constantOr(null);if(E&&y.imageAtlas){var T=y.imageAtlas,I=T.patternPositions[E.to.toString()],C=T.patternPositions[E.from.toString()];I&&C&&b.setConstantPatternPositions(I,C);}var S=t.translatePosMatrix(v.posMatrix,y,i.paint.get("fill-translate"),i.paint.get("fill-translate-anchor"));if(n){u=x.indexBuffer2,h=x.segments2;var P=[p.drawingBufferWidth,p.drawingBufferHeight];c="fillOutlinePattern"===l&&_?Ii(S,t,f,y,P):Ti(S,P);}else u=x.indexBuffer,h=x.segments,c=_?Ei(S,t,f,y):wi(S);w.draw(t.context,s,r,t.stencilModeForClipping(v),a,zt.disabled,c,i.id,x.layoutVertexBuffer,u,h,i.paint,t.transform.zoom,b);}}}}function ao(t,e,i,o,r,a,n){for(var s=t.context,l=s.gl,c=i.paint.get("fill-extrusion-pattern"),u=c.constantOr(1),h=i.getCrossfadeParameters(),p=i.paint.get("fill-extrusion-opacity"),d=0,_=o;d<_.length;d+=1){var f=_[d],m=e.getTile(f),g=m.getBucket(i);if(g){var v=g.programConfigurations.get(i.id),y=t.useProgram(u?"fillExtrusionPattern":"fillExtrusion",v);u&&(t.context.activeTexture.set(l.TEXTURE0),m.imageAtlasTexture.bind(l.LINEAR,l.CLAMP_TO_EDGE),v.updatePatternPaintBuffers(h));var x=c.constantOr(null);if(x&&m.imageAtlas){var b=m.imageAtlas,w=b.patternPositions[x.to.toString()],E=b.patternPositions[x.from.toString()];w&&E&&v.setConstantPatternPositions(w,E);}var T=t.translatePosMatrix(f.posMatrix,m,i.paint.get("fill-extrusion-translate"),i.paint.get("fill-extrusion-translate-anchor")),I=i.paint.get("fill-extrusion-vertical-gradient"),C=u?bi(T,t,I,p,f,h,m):xi(T,t,I,p);y.draw(s,s.gl.TRIANGLES,r,a,n,zt.backCCW,C,i.id,g.layoutVertexBuffer,g.indexBuffer,g.segments,i.paint,t.transform.zoom,v);}}}function no(t,e,i,o,r,a){var n=t.context,s=n.gl,l=e.fbo;if(l){var c=t.useProgram("hillshade");n.activeTexture.set(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,l.colorAttachment.get());var u=Ai(t,e,i);c.draw(n,s.TRIANGLES,o,r,a,zt.disabled,u,i.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments);}}function so(e,i,o,r,a,n,s){var l=e.context,c=l.gl,u=i.dem;if(u&&u.data){var h=u.dim,p=u.stride,d=u.getPixels();if(l.activeTexture.set(c.TEXTURE1),l.pixelStoreUnpackPremultiplyAlpha.set(!1),i.demTexture=i.demTexture||e.getTileTexture(p),i.demTexture){var _=i.demTexture;_.update(d,{premultiply:!1}),_.bind(c.NEAREST,c.CLAMP_TO_EDGE);}else i.demTexture=new t.Texture(l,d,c.RGBA,{premultiply:!1}),i.demTexture.bind(c.NEAREST,c.CLAMP_TO_EDGE);l.activeTexture.set(c.TEXTURE0);var f=i.fbo;if(!f){var m=new t.Texture(l,{width:h,height:h,data:null},c.RGBA);m.bind(c.LINEAR,c.CLAMP_TO_EDGE),(f=i.fbo=l.createFramebuffer(h,h)).colorAttachment.set(m.texture);}l.bindFramebuffer.set(f.framebuffer),l.viewport.set([0,0,h,h]),e.useProgram("hillshadePrepare").draw(l,c.TRIANGLES,a,n,s,zt.disabled,Ri(i.tileID,u,r),o.id,e.rasterBoundsBuffer,e.quadTriangleIndexBuffer,e.rasterBoundsSegments),i.needsHillshadePrepare=!1;}}function lo(e,i,o,r,a){var n=r.paint.get("raster-fade-duration");if(n>0){var s=t.browser.now(),l=(s-e.timeAdded)/n,c=i?(s-i.timeAdded)/n:-1,u=o.getSource(),h=a.coveringZoomLevel({tileSize:u.tileSize,roundZoom:u.roundZoom}),p=!i||Math.abs(i.tileID.overscaledZ-h)>Math.abs(e.tileID.overscaledZ-h),d=p&&e.refreshedUponExpiration?1:t.clamp(p?l:1-c,0,1);return e.refreshedUponExpiration&&l>=1&&(e.refreshedUponExpiration=!1),i?{opacity:1,mix:1-d}:{opacity:d,mix:0}}return {opacity:1,mix:0}}function co(e,i,o){var r=e.context,a=r.gl,n=o.posMatrix,s=e.useProgram("debug"),l=Ct.disabled,c=St.disabled,u=e.colorModeForRenderPass(),h="$debug";s.draw(r,a.LINE_STRIP,l,c,u,zt.disabled,zi(n,t.Color.red),h,e.debugBuffer,e.tileBorderIndexBuffer,e.debugSegments);var p=i.getTileByID(o.key).latestRawTileData,d=p&&p.byteLength||0,_=Math.floor(d/1024),f=i.getTile(o).tileSize,m=512/Math.min(f,512),g=o.canonical.toString();o.overscaledZ!==o.canonical.z&&(g+=" => "+o.overscaledZ);for(var v=function(t,e,i,o){o=o||1;var r,a,n,s,l,c,u,h,p=[];for(r=0,a=t.length;r<a;r++)if(l=uo[t[r]]){for(h=null,n=0,s=l[1].length;n<s;n+=2)-1===l[1][n]&&-1===l[1][n+1]?h=null:(c=e+l[1][n]*o,u=i-l[1][n+1]*o,h&&p.push(h.x,h.y,c,u),h={x:c,y:u});e+=l[0]*o;}return p}(g+" "+_+"kb",50,200*m,5*m),y=new t.StructArrayLayout2i4,x=new t.StructArrayLayout2ui4,b=0;b<v.length;b+=2)y.emplaceBack(v[b],v[b+1]),x.emplaceBack(b,b+1);for(var w=r.createVertexBuffer(y,Ze.members),E=r.createIndexBuffer(x),T=t.SegmentVector.simpleSegment(0,0,y.length/2,y.length/2),I=t.EXTENT/(Math.pow(2,e.transform.zoom-o.overscaledZ)*f*m),C=[],S=-1;S<=1;S++)for(var P=-1;P<=1&&(0!==S||0!==P);P++)C.push([S,P]);for(var z=0;z<C.length;z++){var L=C[z];s.draw(r,a.LINES,l,c,u,zt.disabled,zi(t.translate([],n,[I*L[0],I*L[1],0]),t.Color.white),h,w,E,T);}s.draw(r,a.LINES,l,c,u,zt.disabled,zi(n,t.Color.black),h,w,E,T),w.destroy(),E.destroy(),T.destroy();}var uo={" ":[16,[]],"!":[10,[5,21,5,7,-1,-1,5,2,4,1,5,0,6,1,5,2]],'"':[16,[4,21,4,14,-1,-1,12,21,12,14]],"#":[21,[11,25,4,-7,-1,-1,17,25,10,-7,-1,-1,4,12,18,12,-1,-1,3,6,17,6]],$:[20,[8,25,8,-4,-1,-1,12,25,12,-4,-1,-1,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],"%":[24,[21,21,3,0,-1,-1,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,-1,-1,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7]],"&":[26,[23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2]],"'":[10,[5,19,4,20,5,21,6,20,6,18,5,16,4,15]],"(":[14,[11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7]],")":[14,[3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7]],"*":[16,[8,21,8,9,-1,-1,3,18,13,12,-1,-1,13,18,3,12]],"+":[26,[13,18,13,0,-1,-1,4,9,22,9]],",":[10,[6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"-":[26,[4,9,22,9]],".":[10,[5,2,4,1,5,0,6,1,5,2]],"/":[22,[20,25,2,-7]],0:[20,[9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21]],1:[20,[6,17,8,18,11,21,11,0]],2:[20,[4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0]],3:[20,[5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],4:[20,[13,21,3,7,18,7,-1,-1,13,21,13,0]],5:[20,[15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],6:[20,[16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7]],7:[20,[17,21,7,0,-1,-1,3,21,17,21]],8:[20,[8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21]],9:[20,[16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3]],":":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,5,2,4,1,5,0,6,1,5,2]],";":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"<":[24,[20,18,4,9,20,0]],"=":[26,[4,12,22,12,-1,-1,4,6,22,6]],">":[24,[4,18,20,9,4,0]],"?":[18,[3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,-1,-1,9,2,8,1,9,0,10,1,9,2]],"@":[27,[18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,-1,-1,12,16,10,14,9,11,9,8,10,6,11,5,-1,-1,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,-1,-1,19,16,18,8,18,6,19,5]],A:[18,[9,21,1,0,-1,-1,9,21,17,0,-1,-1,4,7,14,7]],B:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,-1,-1,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0]],C:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5]],D:[21,[4,21,4,0,-1,-1,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0]],E:[19,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11,-1,-1,4,0,17,0]],F:[18,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11]],G:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,-1,-1,13,8,18,8]],H:[22,[4,21,4,0,-1,-1,18,21,18,0,-1,-1,4,11,18,11]],I:[8,[4,21,4,0]],J:[16,[12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7]],K:[21,[4,21,4,0,-1,-1,18,21,4,7,-1,-1,9,12,18,0]],L:[17,[4,21,4,0,-1,-1,4,0,16,0]],M:[24,[4,21,4,0,-1,-1,4,21,12,0,-1,-1,20,21,12,0,-1,-1,20,21,20,0]],N:[22,[4,21,4,0,-1,-1,4,21,18,0,-1,-1,18,21,18,0]],O:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21]],P:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10]],Q:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,-1,-1,12,4,18,-2]],R:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,-1,-1,11,11,18,0]],S:[20,[17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],T:[16,[8,21,8,0,-1,-1,1,21,15,21]],U:[22,[4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21]],V:[18,[1,21,9,0,-1,-1,17,21,9,0]],W:[24,[2,21,7,0,-1,-1,12,21,7,0,-1,-1,12,21,17,0,-1,-1,22,21,17,0]],X:[20,[3,21,17,0,-1,-1,17,21,3,0]],Y:[18,[1,21,9,11,9,0,-1,-1,17,21,9,11]],Z:[20,[17,21,3,0,-1,-1,3,21,17,21,-1,-1,3,0,17,0]],"[":[14,[4,25,4,-7,-1,-1,5,25,5,-7,-1,-1,4,25,11,25,-1,-1,4,-7,11,-7]],"\\":[14,[0,21,14,-3]],"]":[14,[9,25,9,-7,-1,-1,10,25,10,-7,-1,-1,3,25,10,25,-1,-1,3,-7,10,-7]],"^":[16,[6,15,8,18,10,15,-1,-1,3,12,8,17,13,12,-1,-1,8,17,8,0]],_:[16,[0,-2,16,-2]],"`":[10,[6,21,5,20,4,18,4,16,5,15,6,16,5,17]],a:[19,[15,14,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],b:[19,[4,21,4,0,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],c:[18,[15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],d:[19,[15,21,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],e:[18,[3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],f:[12,[10,21,8,21,6,20,5,17,5,0,-1,-1,2,14,9,14]],g:[19,[15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],h:[19,[4,21,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],i:[8,[3,21,4,20,5,21,4,22,3,21,-1,-1,4,14,4,0]],j:[10,[5,21,6,20,7,21,6,22,5,21,-1,-1,6,14,6,-3,5,-6,3,-7,1,-7]],k:[17,[4,21,4,0,-1,-1,14,14,4,4,-1,-1,8,8,15,0]],l:[8,[4,21,4,0]],m:[30,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0,-1,-1,15,10,18,13,20,14,23,14,25,13,26,10,26,0]],n:[19,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],o:[19,[8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14]],p:[19,[4,14,4,-7,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],q:[19,[15,14,15,-7,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],r:[13,[4,14,4,0,-1,-1,4,8,5,11,7,13,9,14,12,14]],s:[17,[14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3]],t:[12,[5,21,5,4,6,1,8,0,10,0,-1,-1,2,14,9,14]],u:[19,[4,14,4,4,5,1,7,0,10,0,12,1,15,4,-1,-1,15,14,15,0]],v:[16,[2,14,8,0,-1,-1,14,14,8,0]],w:[22,[3,14,7,0,-1,-1,11,14,7,0,-1,-1,11,14,15,0,-1,-1,19,14,15,0]],x:[17,[3,14,14,0,-1,-1,14,14,3,0]],y:[16,[2,14,8,0,-1,-1,14,14,8,0,6,-4,4,-6,2,-7,1,-7]],z:[17,[14,14,3,0,-1,-1,3,14,14,14,-1,-1,3,0,14,0]],"{":[14,[9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,-1,-1,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,-1,-1,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7]],"|":[8,[4,25,4,-7]],"}":[14,[5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,-1,-1,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,-1,-1,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7]],"~":[24,[3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,-1,-1,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]]};var ho={symbol:function(e,i,o,r,a){if("translucent"===e.renderPass){var n=St.disabled,s=e.colorModeForRenderPass();o.layout.get("text-variable-anchor")&&function(e,i,o,r,a,n,s){for(var l=i.transform,c="map"===a,u="map"===n,h=0,p=e;h<p.length;h+=1){var d=p[h],_=r.getTile(d),f=_.getBucket(o);if(f&&f.text&&f.text.segments.get().length){var m=f.textSizeData,g=t.evaluateSizeForZoom(m,l.zoom),v=he(_,1,i.transform.zoom),y=Yt(d.posMatrix,u,c,i.transform,v),x="none"!==o.layout.get("icon-text-fit")&&f.hasIconData();if(g){var b=Math.pow(2,l.zoom-_.tileID.overscaledZ);to(f,c,u,s,t.symbolSize,l,y,d.posMatrix,b,g,x);}}}}(r,e,o,i,o.layout.get("text-rotation-alignment"),o.layout.get("text-pitch-alignment"),a),0!==o.paint.get("icon-opacity").constantOr(1)&&io(e,i,o,r,!1,o.paint.get("icon-translate"),o.paint.get("icon-translate-anchor"),o.layout.get("icon-rotation-alignment"),o.layout.get("icon-pitch-alignment"),o.layout.get("icon-keep-upright"),n,s),0!==o.paint.get("text-opacity").constantOr(1)&&io(e,i,o,r,!0,o.paint.get("text-translate"),o.paint.get("text-translate-anchor"),o.layout.get("text-rotation-alignment"),o.layout.get("text-pitch-alignment"),o.layout.get("text-keep-upright"),n,s),i.map.showCollisionBoxes&&(Ji(e,i,o,r,o.paint.get("text-translate"),o.paint.get("text-translate-anchor"),!0),Ji(e,i,o,r,o.paint.get("icon-translate"),o.paint.get("icon-translate-anchor"),!1));}},circle:function(e,i,o,r){if("translucent"===e.renderPass){var a=o.paint.get("circle-opacity"),n=o.paint.get("circle-stroke-width"),s=o.paint.get("circle-stroke-opacity"),l=void 0!==o.layout.get("circle-sort-key").constantOr(1);if(0!==a.constantOr(1)||0!==n.constantOr(1)&&0!==s.constantOr(1)){for(var c=e.context,u=c.gl,h=e.depthModeForSublayer(0,Ct.ReadOnly),p=St.disabled,d=e.colorModeForRenderPass(),_=[],f=0;f<r.length;f++){var m=r[f],g=i.getTile(m),v=g.getBucket(o);if(v){var y=v.programConfigurations.get(o.id),x={programConfiguration:y,program:e.useProgram("circle",y),layoutVertexBuffer:v.layoutVertexBuffer,indexBuffer:v.indexBuffer,uniformValues:Ci(e,m,g,o)};if(l)for(var b=0,w=v.segments.get();b<w.length;b+=1){var E=w[b];_.push({segments:new t.SegmentVector([E]),sortKey:E.sortKey,state:x});}else _.push({segments:v.segments,sortKey:0,state:x});}}l&&_.sort((function(t,e){return t.sortKey-e.sortKey}));for(var T=0,I=_;T<I.length;T+=1){var C=I[T],S=C.state,P=S.programConfiguration,z=S.program,L=S.layoutVertexBuffer,M=S.indexBuffer,D=S.uniformValues,A=C.segments;z.draw(c,u.TRIANGLES,h,p,d,zt.disabled,D,o.id,L,M,A,o.paint,e.transform.zoom,P);}}}},heatmap:function(e,i,o,r){if(0!==o.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){var a=e.context,n=a.gl,s=e.depthModeForSublayer(0,Ct.ReadOnly),l=St.disabled,c=new Pt([n.ONE,n.ONE],t.Color.transparent,[!0,!0,!0,!0]);!function(t,e,i){var o=t.gl;t.activeTexture.set(o.TEXTURE1),t.viewport.set([0,0,e.width/4,e.height/4]);var r=i.heatmapFbo;if(r)o.bindTexture(o.TEXTURE_2D,r.colorAttachment.get()),t.bindFramebuffer.set(r.framebuffer);else{var a=o.createTexture();o.bindTexture(o.TEXTURE_2D,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),r=i.heatmapFbo=t.createFramebuffer(e.width/4,e.height/4),function t(e,i,o,r){var a=e.gl;a.texImage2D(a.TEXTURE_2D,0,a.RGBA,i.width/4,i.height/4,0,a.RGBA,e.extTextureHalfFloat?e.extTextureHalfFloat.HALF_FLOAT_OES:a.UNSIGNED_BYTE,null),r.colorAttachment.set(o),e.extTextureHalfFloat&&a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE&&(e.extTextureHalfFloat=null,r.colorAttachment.setDirty(),t(e,i,o,r));}(t,e,a,r);}}(a,e,o),a.clear({color:t.Color.transparent});for(var u=0;u<r.length;u++){var h=r[u];if(!i.hasRenderableParent(h)){var p=i.getTile(h),d=p.getBucket(o);if(d){var _=d.programConfigurations.get(o.id),f=e.useProgram("heatmap",_),m=e.transform.zoom;f.draw(a,n.TRIANGLES,s,l,c,zt.disabled,Mi(h.posMatrix,p,m,o.paint.get("heatmap-intensity")),o.id,d.layoutVertexBuffer,d.indexBuffer,d.segments,o.paint,e.transform.zoom,_);}}}a.viewport.set([0,0,e.width,e.height]);}else"translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),function(e,i){var o=e.context,r=o.gl,a=i.heatmapFbo;if(!a)return;o.activeTexture.set(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,a.colorAttachment.get()),o.activeTexture.set(r.TEXTURE1);var n=i.colorRampTexture;n||(n=i.colorRampTexture=new t.Texture(o,i.colorRamp,r.RGBA));n.bind(r.LINEAR,r.CLAMP_TO_EDGE),e.useProgram("heatmapTexture").draw(o,r.TRIANGLES,Ct.disabled,St.disabled,e.colorModeForRenderPass(),zt.disabled,Di(e,i,0,1),i.id,e.viewportBuffer,e.quadTriangleIndexBuffer,e.viewportSegments,i.paint,e.transform.zoom);}(e,o));},line:function(e,i,o,r){if("translucent"===e.renderPass){var a=o.paint.get("line-opacity"),n=o.paint.get("line-width");if(0!==a.constantOr(1)&&0!==n.constantOr(1)){var s=e.depthModeForSublayer(0,Ct.ReadOnly),l=e.colorModeForRenderPass(),c=o.paint.get("line-dasharray"),u=o.paint.get("line-pattern"),h=u.constantOr(1),p=o.paint.get("line-gradient"),d=o.getCrossfadeParameters(),_=c?"lineSDF":h?"linePattern":p?"lineGradient":"line",f=e.context,m=f.gl,g=!0;if(p){f.activeTexture.set(m.TEXTURE0);var v=o.gradientTexture;if(!o.gradient)return;v||(v=o.gradientTexture=new t.Texture(f,o.gradient,m.RGBA)),v.bind(m.LINEAR,m.CLAMP_TO_EDGE);}for(var y=0,x=r;y<x.length;y+=1){var b=x[y],w=i.getTile(b);if(!h||w.patternsLoaded()){var E=w.getBucket(o);if(E){var T=E.programConfigurations.get(o.id),I=e.context.program.get(),C=e.useProgram(_,T),S=g||C.program!==I,P=u.constantOr(null);if(P&&w.imageAtlas){var z=w.imageAtlas,L=z.patternPositions[P.to.toString()],M=z.patternPositions[P.from.toString()];L&&M&&T.setConstantPatternPositions(L,M);}var D=c?Ui(e,w,o,c,d):h?Fi(e,w,o,d):p?Oi(e,w,o):Bi(e,w,o);c&&(S||e.lineAtlas.dirty)?(f.activeTexture.set(m.TEXTURE0),e.lineAtlas.bind(f)):h&&(f.activeTexture.set(m.TEXTURE0),w.imageAtlasTexture.bind(m.LINEAR,m.CLAMP_TO_EDGE),T.updatePatternPaintBuffers(d)),C.draw(f,m.TRIANGLES,s,e.stencilModeForClipping(b),l,zt.disabled,D,o.id,E.layoutVertexBuffer,E.indexBuffer,E.segments,o.paint,e.transform.zoom,T),g=!1;}}}}}},fill:function(e,i,o,r){var a=o.paint.get("fill-color"),n=o.paint.get("fill-opacity");if(0!==n.constantOr(1)){var s=e.colorModeForRenderPass(),l=o.paint.get("fill-pattern"),c=e.opaquePassEnabledForLayer()&&!l.constantOr(1)&&1===a.constantOr(t.Color.transparent).a&&1===n.constantOr(0)?"opaque":"translucent";if(e.renderPass===c){var u=e.depthModeForSublayer(1,"opaque"===e.renderPass?Ct.ReadWrite:Ct.ReadOnly);ro(e,i,o,r,u,s,!1);}if("translucent"===e.renderPass&&o.paint.get("fill-antialias")){var h=e.depthModeForSublayer(o.getPaintProperty("fill-outline-color")?2:0,Ct.ReadOnly);ro(e,i,o,r,h,s,!0);}}},"fill-extrusion":function(t,e,i,o){var r=i.paint.get("fill-extrusion-opacity");if(0!==r&&"translucent"===t.renderPass){var a=new Ct(t.context.gl.LEQUAL,Ct.ReadWrite,t.depthRangeFor3D);if(1!==r||i.paint.get("fill-extrusion-pattern").constantOr(1))ao(t,e,i,o,a,St.disabled,Pt.disabled),ao(t,e,i,o,a,t.stencilModeFor3D(),t.colorModeForRenderPass());else{var n=t.colorModeForRenderPass();ao(t,e,i,o,a,St.disabled,n);}}},hillshade:function(t,e,i,o){if("offscreen"===t.renderPass||"translucent"===t.renderPass){for(var r=t.context,a=e.getSource().maxzoom,n=t.depthModeForSublayer(0,Ct.ReadOnly),s=t.colorModeForRenderPass(),l="translucent"===t.renderPass?t.stencilConfigForOverlap(o):[{},o],c=l[0],u=0,h=l[1];u<h.length;u+=1){var p=h[u],d=e.getTile(p);d.needsHillshadePrepare&&"offscreen"===t.renderPass?so(t,d,i,a,n,St.disabled,s):"translucent"===t.renderPass&&no(t,d,i,n,c[p.overscaledZ],s);}r.viewport.set([0,0,t.width,t.height]);}},raster:function(t,e,i,o){if("translucent"===t.renderPass&&0!==i.paint.get("raster-opacity")&&o.length)for(var r=t.context,a=r.gl,n=e.getSource(),s=t.useProgram("raster"),l=t.colorModeForRenderPass(),c=n instanceof D?[{},o]:t.stencilConfigForOverlap(o),u=c[0],h=c[1],p=h[h.length-1].overscaledZ,d=!t.options.moving,_=0,f=h;_<f.length;_+=1){var m=f[_],g=t.depthModeForSublayer(m.overscaledZ-p,1===i.paint.get("raster-opacity")?Ct.ReadWrite:Ct.ReadOnly,a.LESS),v=e.getTile(m),y=t.transform.calculatePosMatrix(m.toUnwrapped(),d);v.registerFadeDuration(i.paint.get("raster-fade-duration"));var x=e.findLoadedParent(m,0),b=lo(v,x,e,i,t.transform),w=void 0,E=void 0,T="nearest"===i.paint.get("raster-resampling")?a.NEAREST:a.LINEAR;r.activeTexture.set(a.TEXTURE0),v.texture.bind(T,a.CLAMP_TO_EDGE,a.LINEAR_MIPMAP_NEAREST),r.activeTexture.set(a.TEXTURE1),x?(x.texture.bind(T,a.CLAMP_TO_EDGE,a.LINEAR_MIPMAP_NEAREST),w=Math.pow(2,x.tileID.overscaledZ-v.tileID.overscaledZ),E=[v.tileID.canonical.x*w%1,v.tileID.canonical.y*w%1]):v.texture.bind(T,a.CLAMP_TO_EDGE,a.LINEAR_MIPMAP_NEAREST);var I=Zi(y,E||[0,0],w||1,b,i);n instanceof D?s.draw(r,a.TRIANGLES,g,St.disabled,l,zt.disabled,I,i.id,n.boundsBuffer,t.quadTriangleIndexBuffer,n.boundsSegments):s.draw(r,a.TRIANGLES,g,u[m.overscaledZ],l,zt.disabled,I,i.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments);}},background:function(t,e,i){var o=i.paint.get("background-color"),r=i.paint.get("background-opacity");if(0!==r){var a=t.context,n=a.gl,s=t.transform,l=s.tileSize,c=i.paint.get("background-pattern");if(!t.isPatternMissing(c)){var u=!c&&1===o.a&&1===r&&t.opaquePassEnabledForLayer()?"opaque":"translucent";if(t.renderPass===u){var h=St.disabled,p=t.depthModeForSublayer(0,"opaque"===u?Ct.ReadWrite:Ct.ReadOnly),d=t.colorModeForRenderPass(),_=t.useProgram(c?"backgroundPattern":"background"),f=s.coveringTiles({tileSize:l});c&&(a.activeTexture.set(n.TEXTURE0),t.imageManager.bind(t.context));for(var m=i.getCrossfadeParameters(),g=0,v=f;g<v.length;g+=1){var y=v[g],x=t.transform.calculatePosMatrix(y.toUnwrapped()),b=c?Hi(x,r,t,c,{tileID:y,tileSize:l},m):Xi(x,r,o);_.draw(a,n.TRIANGLES,p,h,d,zt.disabled,b,i.id,t.tileExtentBuffer,t.quadTriangleIndexBuffer,t.tileExtentSegments);}}}}},debug:function(t,e,i){for(var o=0;o<i.length;o++)co(t,e,i[o]);},custom:function(t,e,i){var o=t.context,r=i.implementation;if("offscreen"===t.renderPass){var a=r.prerender;a&&(t.setCustomLayerDefaults(),o.setColorMode(t.colorModeForRenderPass()),a.call(r,o.gl,t.transform.customLayerMatrix()),o.setDirty(),t.setBaseState());}else if("translucent"===t.renderPass){t.setCustomLayerDefaults(),o.setColorMode(t.colorModeForRenderPass()),o.setStencilMode(St.disabled);var n="3d"===r.renderingMode?new Ct(t.context.gl.LEQUAL,Ct.ReadWrite,t.depthRangeFor3D):t.depthModeForSublayer(0,Ct.ReadOnly);o.setDepthMode(n),r.render(o.gl,t.transform.customLayerMatrix()),o.setDirty(),t.setBaseState(),o.bindFramebuffer.set(null);}}},po=function(e,i){this.context=new Lt(e),this.transform=i,this._tileTextures={},this.setup(),this.numSublayers=Mt.maxUnderzooming+Mt.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.depthRboNeedsClear=!0,this.emptyProgramConfiguration=new t.ProgramConfiguration,this.crossTileSymbolIndex=new Be,this.gpuTimers={};};function _o(t,e){if(t.y>e.y){var i=t;t=e,e=i;}return {x0:t.x,y0:t.y,x1:e.x,y1:e.y,dx:e.x-t.x,dy:e.y-t.y}}function fo(t,e,i,o,r){var a=Math.max(i,Math.floor(e.y0)),n=Math.min(o,Math.ceil(e.y1));if(t.x0===e.x0&&t.y0===e.y0?t.x0+e.dy/t.dy*t.dx<e.x1:t.x1-e.dy/t.dy*t.dx<e.x0){var s=t;t=e,e=s;}for(var l=t.dx/t.dy,c=e.dx/e.dy,u=t.dx>0,h=e.dx<0,p=a;p<n;p++){var d=l*Math.max(0,Math.min(t.dy,p+u-t.y0))+t.x0,_=c*Math.max(0,Math.min(e.dy,p+h-e.y0))+e.x0;r(Math.floor(_),Math.ceil(d),p);}}function mo(t,e,i,o,r,a){var n,s=_o(t,e),l=_o(e,i),c=_o(i,t);s.dy>l.dy&&(n=s,s=l,l=n),s.dy>c.dy&&(n=s,s=c,c=n),l.dy>c.dy&&(n=l,l=c,c=n),s.dy&&fo(c,s,o,r,a),l.dy&&fo(c,l,o,r,a);}po.prototype.resize=function(e,i){var o=this.context.gl;if(this.width=e*t.browser.devicePixelRatio,this.height=i*t.browser.devicePixelRatio,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(var r=0,a=this.style._order;r<a.length;r+=1){var n=a[r];this.style._layers[n].resize();}this.depthRbo&&(o.deleteRenderbuffer(this.depthRbo),this.depthRbo=null);},po.prototype.setup=function(){var e=this.context,i=new t.StructArrayLayout2i4;i.emplaceBack(0,0),i.emplaceBack(t.EXTENT,0),i.emplaceBack(0,t.EXTENT),i.emplaceBack(t.EXTENT,t.EXTENT),this.tileExtentBuffer=e.createVertexBuffer(i,Ze.members),this.tileExtentSegments=t.SegmentVector.simpleSegment(0,0,4,2);var o=new t.StructArrayLayout2i4;o.emplaceBack(0,0),o.emplaceBack(t.EXTENT,0),o.emplaceBack(0,t.EXTENT),o.emplaceBack(t.EXTENT,t.EXTENT),this.debugBuffer=e.createVertexBuffer(o,Ze.members),this.debugSegments=t.SegmentVector.simpleSegment(0,0,4,5);var r=new t.StructArrayLayout4i8;r.emplaceBack(0,0,0,0),r.emplaceBack(t.EXTENT,0,t.EXTENT,0),r.emplaceBack(0,t.EXTENT,0,t.EXTENT),r.emplaceBack(t.EXTENT,t.EXTENT,t.EXTENT,t.EXTENT),this.rasterBoundsBuffer=e.createVertexBuffer(r,M.members),this.rasterBoundsSegments=t.SegmentVector.simpleSegment(0,0,4,2);var a=new t.StructArrayLayout2i4;a.emplaceBack(0,0),a.emplaceBack(1,0),a.emplaceBack(0,1),a.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(a,Ze.members),this.viewportSegments=t.SegmentVector.simpleSegment(0,0,4,2);var n=new t.StructArrayLayout1ui2;n.emplaceBack(0),n.emplaceBack(1),n.emplaceBack(3),n.emplaceBack(2),n.emplaceBack(0),this.tileBorderIndexBuffer=e.createIndexBuffer(n);var s=new t.StructArrayLayout3ui6;s.emplaceBack(0,1,2),s.emplaceBack(2,1,3),this.quadTriangleIndexBuffer=e.createIndexBuffer(s);var l=this.context.gl;this.stencilClearMode=new St({func:l.ALWAYS,mask:0},0,255,l.ZERO,l.ZERO,l.ZERO);},po.prototype.clearStencil=function(){var e=this.context,i=e.gl;this.nextStencilID=1,this.currentStencilSource=void 0;var o=t.create();t.ortho(o,0,this.width,this.height,0,0,1),t.scale(o,o,[i.drawingBufferWidth,i.drawingBufferHeight,0]),this.useProgram("clippingMask").draw(e,i.TRIANGLES,Ct.disabled,this.stencilClearMode,Pt.disabled,zt.disabled,Li(o),"$clipping",this.viewportBuffer,this.quadTriangleIndexBuffer,this.viewportSegments);},po.prototype._renderTileClippingMasks=function(t,e){if(this.currentStencilSource!==t.source&&t.isTileClipped()&&e&&e.length){this.currentStencilSource=t.source;var i=this.context,o=i.gl;this.nextStencilID+e.length>256&&this.clearStencil(),i.setColorMode(Pt.disabled),i.setDepthMode(Ct.disabled);var r=this.useProgram("clippingMask");this._tileClippingMaskIDs={};for(var a=0,n=e;a<n.length;a+=1){var s=n[a],l=this._tileClippingMaskIDs[s.key]=this.nextStencilID++;r.draw(i,o.TRIANGLES,Ct.disabled,new St({func:o.ALWAYS,mask:0},l,255,o.KEEP,o.KEEP,o.REPLACE),Pt.disabled,zt.disabled,Li(s.posMatrix),"$clipping",this.tileExtentBuffer,this.quadTriangleIndexBuffer,this.tileExtentSegments);}}},po.prototype.stencilModeFor3D=function(){this.currentStencilSource=void 0,this.nextStencilID+1>256&&this.clearStencil();var t=this.nextStencilID++,e=this.context.gl;return new St({func:e.NOTEQUAL,mask:255},t,255,e.KEEP,e.KEEP,e.REPLACE)},po.prototype.stencilModeForClipping=function(t){var e=this.context.gl;return new St({func:e.EQUAL,mask:255},this._tileClippingMaskIDs[t.key],0,e.KEEP,e.KEEP,e.REPLACE)},po.prototype.stencilConfigForOverlap=function(t){var e,i=this.context.gl,o=t.sort((function(t,e){return e.overscaledZ-t.overscaledZ})),r=o[o.length-1].overscaledZ,a=o[0].overscaledZ-r+1;if(a>1){this.currentStencilSource=void 0,this.nextStencilID+a>256&&this.clearStencil();for(var n={},s=0;s<a;s++)n[s+r]=new St({func:i.GEQUAL,mask:255},s+this.nextStencilID,255,i.KEEP,i.KEEP,i.REPLACE);return this.nextStencilID+=a,[n,o]}return [(e={},e[r]=St.disabled,e),o]},po.prototype.colorModeForRenderPass=function(){var e=this.context.gl;if(this._showOverdrawInspector){return new Pt([e.CONSTANT_COLOR,e.ONE],new t.Color(1/8,1/8,1/8,0),[!0,!0,!0,!0])}return "opaque"===this.renderPass?Pt.unblended:Pt.alphaBlended},po.prototype.depthModeForSublayer=function(t,e,i){if(!this.opaquePassEnabledForLayer())return Ct.disabled;var o=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon;return new Ct(i||this.context.gl.LEQUAL,e,[o,o])},po.prototype.opaquePassEnabledForLayer=function(){return this.currentLayer<this.opaquePassCutoff},po.prototype.render=function(e,i){var o=this;this.style=e,this.options=i,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(t.browser.now()),this.imageManager.beginFrame();var r=this.style._order,a=this.style.sourceCaches;for(var n in a){var s=a[n];s.used&&s.prepare(this.context);}var l,c,u={},h={},p={};for(var d in a){var _=a[d];u[d]=_.getVisibleCoordinates(),h[d]=u[d].slice().reverse(),p[d]=_.getVisibleCoordinates(!0).reverse();}this.opaquePassCutoff=1/0;for(var f=0;f<r.length;f++){var m=r[f];if(this.style._layers[m].is3D()){this.opaquePassCutoff=f;break}}this.renderPass="offscreen",this.depthRboNeedsClear=!0;for(var g=0,v=r;g<v.length;g+=1){var y=v[g],x=this.style._layers[y];if(x.hasOffscreenPass()&&!x.isHidden(this.transform.zoom)){var b=h[x.source];("custom"===x.type||b.length)&&this.renderLayer(this,a[x.source],x,b);}}for(this.context.bindFramebuffer.set(null),this.context.clear({color:i.showOverdrawInspector?t.Color.black:t.Color.transparent,depth:1}),this.clearStencil(),this._showOverdrawInspector=i.showOverdrawInspector,this.depthRangeFor3D=[0,1-(e._order.length+2)*this.numSublayers*this.depthEpsilon],this.renderPass="opaque",this.currentLayer=r.length-1;this.currentLayer>=0;this.currentLayer--){var w=this.style._layers[r[this.currentLayer]],E=a[w.source],T=u[w.source];this._renderTileClippingMasks(w,T),this.renderLayer(this,E,w,T);}for(this.renderPass="translucent",this.currentLayer=0;this.currentLayer<r.length;this.currentLayer++){var I=this.style._layers[r[this.currentLayer]],C=a[I.source],S=("symbol"===I.type?p:h)[I.source];this._renderTileClippingMasks(I,u[I.source]),this.renderLayer(this,C,I,S);}this.options.showTileBoundaries&&(t.values(this.style._layers).forEach((function(t){t.source&&!t.isHidden(o.transform.zoom)&&(t.source!==(c&&c.id)&&(c=o.style.sourceCaches[t.source]),(!l||l.getSource().maxzoom<c.getSource().maxzoom)&&(l=c));})),l&&ho.debug(this,l,l.getVisibleCoordinates()));this.context.setDefault();},po.prototype.setupOffscreenDepthRenderbuffer=function(){var t=this.context;this.depthRbo||(this.depthRbo=t.createRenderbuffer(t.gl.DEPTH_COMPONENT16,this.width,this.height));},po.prototype.renderLayer=function(t,e,i,o){i.isHidden(this.transform.zoom)||("background"===i.type||"custom"===i.type||o.length)&&(this.id=i.id,this.gpuTimingStart(i),ho[i.type](t,e,i,o,this.style.placement.variableOffsets),this.gpuTimingEnd());},po.prototype.gpuTimingStart=function(t){if(this.options.gpuTiming){var e=this.context.extTimerQuery,i=this.gpuTimers[t.id];i||(i=this.gpuTimers[t.id]={calls:0,cpuTime:0,query:e.createQueryEXT()}),i.calls++,e.beginQueryEXT(e.TIME_ELAPSED_EXT,i.query);}},po.prototype.gpuTimingEnd=function(){if(this.options.gpuTiming){var t=this.context.extTimerQuery;t.endQueryEXT(t.TIME_ELAPSED_EXT);}},po.prototype.collectGpuTimers=function(){var t=this.gpuTimers;return this.gpuTimers={},t},po.prototype.queryGpuTimers=function(t){var e={};for(var i in t){var o=t[i],r=this.context.extTimerQuery,a=r.getQueryObjectEXT(o.query,r.QUERY_RESULT_EXT)/1e6;r.deleteQueryEXT(o.query),e[i]=a;}return e},po.prototype.translatePosMatrix=function(e,i,o,r,a){if(!o[0]&&!o[1])return e;var n=a?"map"===r?this.transform.angle:0:"viewport"===r?-this.transform.angle:0;if(n){var s=Math.sin(n),l=Math.cos(n);o=[o[0]*l-o[1]*s,o[0]*s+o[1]*l];}var c=[a?o[0]:he(i,o[0],this.transform.zoom),a?o[1]:he(i,o[1],this.transform.zoom),0],u=new Float32Array(16);return t.translate(u,e,c),u},po.prototype.saveTileTexture=function(t){var e=this._tileTextures[t.size[0]];e?e.push(t):this._tileTextures[t.size[0]]=[t];},po.prototype.getTileTexture=function(t){var e=this._tileTextures[t];return e&&e.length>0?e.pop():null},po.prototype.isPatternMissing=function(t){if(!t)return !1;var e=this.imageManager.getPattern(t.from.toString()),i=this.imageManager.getPattern(t.to.toString());return !e||!i},po.prototype.useProgram=function(t,e){void 0===e&&(e=this.emptyProgramConfiguration),this.cache=this.cache||{};var i=""+t+(e.cacheKey||"")+(this._showOverdrawInspector?"/overdraw":"");return this.cache[i]||(this.cache[i]=new vi(this.context,mi[t],e,Ki[t],this._showOverdrawInspector)),this.cache[i]},po.prototype.setCustomLayerDefaults=function(){this.context.unbindVAO(),this.context.cullFace.setDefault(),this.context.activeTexture.setDefault(),this.context.pixelStoreUnpack.setDefault(),this.context.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.context.pixelStoreUnpackFlipY.setDefault();},po.prototype.setBaseState=function(){var t=this.context.gl;this.context.cullFace.set(!1),this.context.viewport.set([0,0,this.width,this.height]),this.context.blendEquation.set(t.FUNC_ADD);};var go=function(e,i,o,r,a){this.tileSize=512,this.maxValidLatitude=85.051129,this._renderWorldCopies=void 0===a||a,this._minZoom=e||0,this._maxZoom=i||22,this._minPitch=null==o?0:o,this._maxPitch=null==r?60:r,this.setMaxBounds(),this.width=0,this.height=0,this._center=new t.LngLat(0,0),this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._posMatrixCache={},this._alignedPosMatrixCache={};},vo={minZoom:{configurable:!0},maxZoom:{configurable:!0},minPitch:{configurable:!0},maxPitch:{configurable:!0},renderWorldCopies:{configurable:!0},worldSize:{configurable:!0},centerPoint:{configurable:!0},size:{configurable:!0},bearing:{configurable:!0},pitch:{configurable:!0},fov:{configurable:!0},zoom:{configurable:!0},center:{configurable:!0},unmodified:{configurable:!0},point:{configurable:!0}};go.prototype.clone=function(){var t=new go(this._minZoom,this._maxZoom,this._minPitch,this.maxPitch,this._renderWorldCopies);return t.tileSize=this.tileSize,t.latRange=this.latRange,t.width=this.width,t.height=this.height,t._center=this._center,t.zoom=this.zoom,t.angle=this.angle,t._fov=this._fov,t._pitch=this._pitch,t._unmodified=this._unmodified,t._calcMatrices(),t},vo.minZoom.get=function(){return this._minZoom},vo.minZoom.set=function(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t));},vo.maxZoom.get=function(){return this._maxZoom},vo.maxZoom.set=function(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t));},vo.minPitch.get=function(){return this._minPitch},vo.minPitch.set=function(t){this._minPitch!==t&&(this._minPitch=t,this.pitch=Math.max(this.pitch,t));},vo.maxPitch.get=function(){return this._maxPitch},vo.maxPitch.set=function(t){this._maxPitch!==t&&(this._maxPitch=t,this.pitch=Math.min(this.pitch,t));},vo.renderWorldCopies.get=function(){return this._renderWorldCopies},vo.renderWorldCopies.set=function(t){void 0===t?t=!0:null===t&&(t=!1),this._renderWorldCopies=t;},vo.worldSize.get=function(){return this.tileSize*this.scale},vo.centerPoint.get=function(){return this.size._div(2)},vo.size.get=function(){return new t.Point(this.width,this.height)},vo.bearing.get=function(){return -this.angle/Math.PI*180},vo.bearing.set=function(e){var i=-t.wrap(e,-180,180)*Math.PI/180;this.angle!==i&&(this._unmodified=!1,this.angle=i,this._calcMatrices(),this.rotationMatrix=t.create$2(),t.rotate(this.rotationMatrix,this.rotationMatrix,this.angle));},vo.pitch.get=function(){return this._pitch/Math.PI*180},vo.pitch.set=function(e){var i=t.clamp(e,this.minPitch,this.maxPitch)/180*Math.PI;this._pitch!==i&&(this._unmodified=!1,this._pitch=i,this._calcMatrices());},vo.fov.get=function(){return this._fov/Math.PI*180},vo.fov.set=function(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices());},vo.zoom.get=function(){return this._zoom},vo.zoom.set=function(t){var e=Math.min(Math.max(t,this.minZoom),this.maxZoom);this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.scale=this.zoomScale(e),this.tileZoom=Math.floor(e),this.zoomFraction=e-this.tileZoom,this._constrain(),this._calcMatrices());},vo.center.get=function(){return this._center},vo.center.set=function(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices());},go.prototype.coveringZoomLevel=function(t){var e=(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize));return Math.max(0,e)},go.prototype.getVisibleUnwrappedCoordinates=function(e){var i=[new t.UnwrappedTileID(0,e)];if(this._renderWorldCopies)for(var o=this.pointCoordinate(new t.Point(0,0)),r=this.pointCoordinate(new t.Point(this.width,0)),a=this.pointCoordinate(new t.Point(this.width,this.height)),n=this.pointCoordinate(new t.Point(0,this.height)),s=Math.floor(Math.min(o.x,r.x,a.x,n.x)),l=Math.floor(Math.max(o.x,r.x,a.x,n.x)),c=s-1;c<=l+1;c++)0!==c&&i.push(new t.UnwrappedTileID(c,e));return i},go.prototype.coveringTiles=function(e){var i=this.coveringZoomLevel(e),o=i;if(void 0!==e.minzoom&&i<e.minzoom)return [];void 0!==e.maxzoom&&i>e.maxzoom&&(i=e.maxzoom);var r=t.MercatorCoordinate.fromLngLat(this.center),a=Math.pow(2,i),n=new t.Point(a*r.x-.5,a*r.y-.5);return function(e,i,o,r){void 0===r&&(r=!0);var a=1<<e,n={};function s(i,s,l){var c,u,h,p;if(l>=0&&l<=a)for(c=i;c<s;c++)u=Math.floor(c/a),h=(c%a+a)%a,0!==u&&!0!==r||(p=new t.OverscaledTileID(o,u,e,h,l),n[p.key]=p);}var l=i.map((function(e){return new t.Point(e.x,e.y)._mult(a)}));return mo(l[0],l[1],l[2],0,a,s),mo(l[2],l[3],l[0],0,a,s),Object.keys(n).map((function(t){return n[t]}))}(i,[this.pointCoordinate(new t.Point(0,0)),this.pointCoordinate(new t.Point(this.width,0)),this.pointCoordinate(new t.Point(this.width,this.height)),this.pointCoordinate(new t.Point(0,this.height))],e.reparseOverscaled?o:i,this._renderWorldCopies).sort((function(t,e){return n.dist(t.canonical)-n.dist(e.canonical)}))},go.prototype.resize=function(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices();},vo.unmodified.get=function(){return this._unmodified},go.prototype.zoomScale=function(t){return Math.pow(2,t)},go.prototype.scaleZoom=function(t){return Math.log(t)/Math.LN2},go.prototype.project=function(e){var i=t.clamp(e.lat,-this.maxValidLatitude,this.maxValidLatitude);return new t.Point(t.mercatorXfromLng(e.lng)*this.worldSize,t.mercatorYfromLat(i)*this.worldSize)},go.prototype.unproject=function(e){return new t.MercatorCoordinate(e.x/this.worldSize,e.y/this.worldSize).toLngLat()},vo.point.get=function(){return this.project(this.center)},go.prototype.setLocationAtPoint=function(e,i){var o=this.pointCoordinate(i),r=this.pointCoordinate(this.centerPoint),a=this.locationCoordinate(e),n=new t.MercatorCoordinate(a.x-(o.x-r.x),a.y-(o.y-r.y));this.center=this.coordinateLocation(n),this._renderWorldCopies&&(this.center=this.center.wrap());},go.prototype.locationPoint=function(t){return this.coordinatePoint(this.locationCoordinate(t))},go.prototype.pointLocation=function(t){return this.coordinateLocation(this.pointCoordinate(t))},go.prototype.locationCoordinate=function(e){return t.MercatorCoordinate.fromLngLat(e)},go.prototype.coordinateLocation=function(t){return t.toLngLat()},go.prototype.pointCoordinate=function(e){var i=[e.x,e.y,0,1],o=[e.x,e.y,1,1];t.transformMat4(i,i,this.pixelMatrixInverse),t.transformMat4(o,o,this.pixelMatrixInverse);var r=i[3],a=o[3],n=i[0]/r,s=o[0]/a,l=i[1]/r,c=o[1]/a,u=i[2]/r,h=o[2]/a,p=u===h?0:(0-u)/(h-u);return new t.MercatorCoordinate(t.number(n,s,p)/this.worldSize,t.number(l,c,p)/this.worldSize)},go.prototype.coordinatePoint=function(e){var i=[e.x*this.worldSize,e.y*this.worldSize,0,1];return t.transformMat4(i,i,this.pixelMatrix),new t.Point(i[0]/i[3],i[1]/i[3])},go.prototype.getBounds=function(){return (new t.LngLatBounds).extend(this.pointLocation(new t.Point(0,0))).extend(this.pointLocation(new t.Point(this.width,0))).extend(this.pointLocation(new t.Point(this.width,this.height))).extend(this.pointLocation(new t.Point(0,this.height)))},go.prototype.getMaxBounds=function(){return this.latRange&&2===this.latRange.length&&this.lngRange&&2===this.lngRange.length?new t.LngLatBounds([this.lngRange[0],this.latRange[0]],[this.lngRange[1],this.latRange[1]]):null},go.prototype.setMaxBounds=function(t){t?(this.lngRange=[t.getWest(),t.getEast()],this.latRange=[t.getSouth(),t.getNorth()],this._constrain()):(this.lngRange=null,this.latRange=[-this.maxValidLatitude,this.maxValidLatitude]);},go.prototype.calculatePosMatrix=function(e,i){void 0===i&&(i=!1);var o=e.key,r=i?this._alignedPosMatrixCache:this._posMatrixCache;if(r[o])return r[o];var a=e.canonical,n=this.worldSize/this.zoomScale(a.z),s=a.x+Math.pow(2,a.z)*e.wrap,l=t.identity(new Float64Array(16));return t.translate(l,l,[s*n,a.y*n,0]),t.scale(l,l,[n/t.EXTENT,n/t.EXTENT,1]),t.multiply(l,i?this.alignedProjMatrix:this.projMatrix,l),r[o]=new Float32Array(l),r[o]},go.prototype.customLayerMatrix=function(){return this.mercatorMatrix.slice()},go.prototype._constrain=function(){if(this.center&&this.width&&this.height&&!this._constraining){this._constraining=!0;var e,i,o,r,a=-90,n=90,s=-180,l=180,c=this.size,u=this._unmodified;if(this.latRange){var h=this.latRange;a=t.mercatorYfromLat(h[1])*this.worldSize,e=(n=t.mercatorYfromLat(h[0])*this.worldSize)-a<c.y?c.y/(n-a):0;}if(this.lngRange){var p=this.lngRange;s=t.mercatorXfromLng(p[0])*this.worldSize,i=(l=t.mercatorXfromLng(p[1])*this.worldSize)-s<c.x?c.x/(l-s):0;}var d=this.point,_=Math.max(i||0,e||0);if(_)return this.center=this.unproject(new t.Point(i?(l+s)/2:d.x,e?(n+a)/2:d.y)),this.zoom+=this.scaleZoom(_),this._unmodified=u,void(this._constraining=!1);if(this.latRange){var f=d.y,m=c.y/2;f-m<a&&(r=a+m),f+m>n&&(r=n-m);}if(this.lngRange){var g=d.x,v=c.x/2;g-v<s&&(o=s+v),g+v>l&&(o=l-v);}void 0===o&&void 0===r||(this.center=this.unproject(new t.Point(void 0!==o?o:d.x,void 0!==r?r:d.y))),this._unmodified=u,this._constraining=!1;}},go.prototype._calcMatrices=function(){if(this.height){this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height;var e=this._fov/2,i=Math.PI/2+this._pitch,o=Math.sin(e)*this.cameraToCenterDistance/Math.sin(Math.PI-i-e),r=this.point,a=r.x,n=r.y,s=1.01*(Math.cos(Math.PI/2-this._pitch)*o+this.cameraToCenterDistance),l=this.height/50,c=new Float64Array(16);t.perspective(c,this._fov,this.width/this.height,l,s),t.scale(c,c,[1,-1,1]),t.translate(c,c,[0,0,-this.cameraToCenterDistance]),t.rotateX(c,c,this._pitch),t.rotateZ(c,c,this.angle),t.translate(c,c,[-a,-n,0]),this.mercatorMatrix=t.scale([],c,[this.worldSize,this.worldSize,this.worldSize]),t.scale(c,c,[1,1,t.mercatorZfromAltitude(1,this.center.lat)*this.worldSize,1]),this.projMatrix=c;var u=this.width%2/2,h=this.height%2/2,p=Math.cos(this.angle),d=Math.sin(this.angle),_=a-Math.round(a)+p*u+d*h,f=n-Math.round(n)+p*h+d*u,m=new Float64Array(c);if(t.translate(m,m,[_>.5?_-1:_,f>.5?f-1:f,0]),this.alignedProjMatrix=m,c=t.create(),t.scale(c,c,[this.width/2,-this.height/2,1]),t.translate(c,c,[1,-1,0]),this.labelPlaneMatrix=c,c=t.create(),t.scale(c,c,[1,-1,1]),t.translate(c,c,[-1,-1,0]),t.scale(c,c,[2/this.width,2/this.height,1]),this.glCoordMatrix=c,this.pixelMatrix=t.multiply(new Float64Array(16),this.labelPlaneMatrix,this.projMatrix),!(c=t.invert(new Float64Array(16),this.pixelMatrix)))throw new Error("failed to invert matrix");this.pixelMatrixInverse=c,this._posMatrixCache={},this._alignedPosMatrixCache={};}},go.prototype.maxPitchScaleFactor=function(){if(!this.pixelMatrixInverse)return 1;var e=this.pointCoordinate(new t.Point(0,0)),i=[e.x*this.worldSize,e.y*this.worldSize,0,1];return t.transformMat4(i,i,this.pixelMatrix)[3]/this.cameraToCenterDistance},go.prototype.getCameraPoint=function(){var e=this._pitch,i=Math.tan(e)*(this.cameraToCenterDistance||1);return this.centerPoint.add(new t.Point(0,i))},go.prototype.getCameraQueryGeometry=function(e){var i=this.getCameraPoint();if(1===e.length)return [e[0],i];for(var o=i.x,r=i.y,a=i.x,n=i.y,s=0,l=e;s<l.length;s+=1){var c=l[s];o=Math.min(o,c.x),r=Math.min(r,c.y),a=Math.max(a,c.x),n=Math.max(n,c.y);}return [new t.Point(o,r),new t.Point(a,r),new t.Point(a,n),new t.Point(o,n),new t.Point(o,r)]},Object.defineProperties(go.prototype,vo);var yo=function(e){var i,o,r,a,n;this._hashName=e&&encodeURIComponent(e),t.bindAll(["_getCurrentHash","_onHashChange","_updateHash"],this),this._updateHash=(i=this._updateHashUnthrottled.bind(this),o=300,r=!1,a=null,n=function(){a=null,r&&(i(),a=setTimeout(n,o),r=!1);},function(){return r=!0,a||n(),a});};yo.prototype.addTo=function(e){return this._map=e,t.window.addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this},yo.prototype.remove=function(){return t.window.removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),clearTimeout(this._updateHash()),delete this._map,this},yo.prototype.getHashString=function(e){var i=this._map.getCenter(),o=Math.round(100*this._map.getZoom())/100,r=Math.ceil((o*Math.LN2+Math.log(512/360/.5))/Math.LN10),a=Math.pow(10,r),n=Math.round(i.lng*a)/a,s=Math.round(i.lat*a)/a,l=this._map.getBearing(),c=this._map.getPitch(),u="";if(u+=e?"/"+n+"/"+s+"/"+o:o+"/"+s+"/"+n,(l||c)&&(u+="/"+Math.round(10*l)/10),c&&(u+="/"+Math.round(c)),this._hashName){var h=this._hashName,p=!1,d=t.window.location.hash.slice(1).split("&").map((function(t){var e=t.split("=")[0];return e===h?(p=!0,e+"="+u):t})).filter((function(t){return t}));return p||d.push(h+"="+u),"#"+d.join("&")}return "#"+u},yo.prototype._getCurrentHash=function(){var e,i=this,o=t.window.location.hash.replace("#","");return this._hashName?(o.split("&").map((function(t){return t.split("=")})).forEach((function(t){t[0]===i._hashName&&(e=t);})),(e&&e[1]||"").split("/")):o.split("/")},yo.prototype._onHashChange=function(){var t=this._getCurrentHash();return t.length>=3&&!t.some((function(t){return isNaN(t)}))&&(this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:+(t[3]||0),pitch:+(t[4]||0)}),!0)},yo.prototype._updateHashUnthrottled=function(){var e=this.getHashString();try{t.window.history.replaceState(t.window.history.state,"",e);}catch(t){}};var xo=function(e){function o(o,r,a,n){void 0===n&&(n={});var s=i.mousePos(r.getCanvasContainer(),a),l=r.unproject(s);e.call(this,o,t.extend({point:s,lngLat:l,originalEvent:a},n)),this._defaultPrevented=!1,this.target=r;}e&&(o.__proto__=e),o.prototype=Object.create(e&&e.prototype),o.prototype.constructor=o;var r={defaultPrevented:{configurable:!0}};return o.prototype.preventDefault=function(){this._defaultPrevented=!0;},r.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(o.prototype,r),o}(t.Event),bo=function(e){function o(o,r,a){var n=i.touchPos(r.getCanvasContainer(),a),s=n.map((function(t){return r.unproject(t)})),l=n.reduce((function(t,e,i,o){return t.add(e.div(o.length))}),new t.Point(0,0)),c=r.unproject(l);e.call(this,o,{points:n,point:l,lngLats:s,lngLat:c,originalEvent:a}),this._defaultPrevented=!1;}e&&(o.__proto__=e),o.prototype=Object.create(e&&e.prototype),o.prototype.constructor=o;var r={defaultPrevented:{configurable:!0}};return o.prototype.preventDefault=function(){this._defaultPrevented=!0;},r.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(o.prototype,r),o}(t.Event),wo=function(t){function e(e,i,o){t.call(this,e,{originalEvent:o}),this._defaultPrevented=!1;}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var i={defaultPrevented:{configurable:!0}};return e.prototype.preventDefault=function(){this._defaultPrevented=!0;},i.defaultPrevented.get=function(){return this._defaultPrevented},Object.defineProperties(e.prototype,i),e}(t.Event),Eo=function(e){this._map=e,this._el=e.getCanvasContainer(),this._delta=0,this._defaultZoomRate=.01,this._wheelZoomRate=1/450,t.bindAll(["_onWheel","_onTimeout","_onScrollFrame","_onScrollFinished"],this);};Eo.prototype.setZoomRate=function(t){this._defaultZoomRate=t;},Eo.prototype.setWheelZoomRate=function(t){this._wheelZoomRate=t;},Eo.prototype.isEnabled=function(){return !!this._enabled},Eo.prototype.isActive=function(){return !!this._active},Eo.prototype.isZooming=function(){return !!this._zooming},Eo.prototype.enable=function(t){this.isEnabled()||(this._enabled=!0,this._aroundCenter=t&&"center"===t.around);},Eo.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1);},Eo.prototype.onWheel=function(e){if(this.isEnabled()){var i=e.deltaMode===t.window.WheelEvent.DOM_DELTA_LINE?40*e.deltaY:e.deltaY,o=t.browser.now(),r=o-(this._lastWheelEventTime||0);this._lastWheelEventTime=o,0!==i&&i%4.000244140625==0?this._type="wheel":0!==i&&Math.abs(i)<4?this._type="trackpad":r>400?(this._type=null,this._lastValue=i,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(r*i)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,i+=this._lastValue)),e.shiftKey&&i&&(i/=4),this._type&&(this._lastWheelEvent=e,this._delta-=i,this.isActive()||this._start(e)),e.preventDefault();}},Eo.prototype._onTimeout=function(t){this._type="wheel",this._delta-=this._lastValue,this.isActive()||this._start(t);},Eo.prototype._start=function(e){if(this._delta){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),this._active=!0,this.isZooming()||(this._zooming=!0,this._map.fire(new t.Event("movestart",{originalEvent:e})),this._map.fire(new t.Event("zoomstart",{originalEvent:e}))),this._finishTimeout&&clearTimeout(this._finishTimeout);var o=i.mousePos(this._el,e);this._around=t.LngLat.convert(this._aroundCenter?this._map.getCenter():this._map.unproject(o)),this._aroundPoint=this._map.transform.locationPoint(this._around),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onScrollFrame));}},Eo.prototype._onScrollFrame=function(){var e=this;if(this._frameId=null,this.isActive()){var i=this._map.transform;if(0!==this._delta){var o="wheel"===this._type&&Math.abs(this._delta)>4.000244140625?this._wheelZoomRate:this._defaultZoomRate,r=2/(1+Math.exp(-Math.abs(this._delta*o)));this._delta<0&&0!==r&&(r=1/r);var a="number"==typeof this._targetZoom?i.zoomScale(this._targetZoom):i.scale;this._targetZoom=Math.min(i.maxZoom,Math.max(i.minZoom,i.scaleZoom(a*r))),"wheel"===this._type&&(this._startZoom=i.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0;}var n="number"==typeof this._targetZoom?this._targetZoom:i.zoom,s=this._startZoom,l=this._easing,c=!1;if("wheel"===this._type&&s&&l){var u=Math.min((t.browser.now()-this._lastWheelEventTime)/200,1),h=l(u);i.zoom=t.number(s,n,h),u<1?this._frameId||(this._frameId=this._map._requestRenderFrame(this._onScrollFrame)):c=!0;}else i.zoom=n,c=!0;i.setLocationAtPoint(this._around,this._aroundPoint),this._map.fire(new t.Event("move",{originalEvent:this._lastWheelEvent})),this._map.fire(new t.Event("zoom",{originalEvent:this._lastWheelEvent})),c&&(this._active=!1,this._finishTimeout=setTimeout((function(){e._zooming=!1,e._map.fire(new t.Event("zoomend",{originalEvent:e._lastWheelEvent})),e._map.fire(new t.Event("moveend",{originalEvent:e._lastWheelEvent})),delete e._targetZoom;}),200));}},Eo.prototype._smoothOutEasing=function(e){var i=t.ease;if(this._prevEase){var o=this._prevEase,r=(t.browser.now()-o.start)/o.duration,a=o.easing(r+.01)-o.easing(r),n=.27/Math.sqrt(a*a+1e-4)*.01,s=Math.sqrt(.0729-n*n);i=t.bezier(n,s,.25,1);}return this._prevEase={start:t.browser.now(),duration:e,easing:i},i};var To=function(e,i){this._map=e,this._el=e.getCanvasContainer(),this._container=e.getContainer(),this._clickTolerance=i.clickTolerance||1,t.bindAll(["_onMouseMove","_onMouseUp","_onKeyDown"],this);};To.prototype.isEnabled=function(){return !!this._enabled},To.prototype.isActive=function(){return !!this._active},To.prototype.enable=function(){this.isEnabled()||(this._enabled=!0);},To.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1);},To.prototype.onMouseDown=function(e){this.isEnabled()&&e.shiftKey&&0===e.button&&(t.window.document.addEventListener("mousemove",this._onMouseMove,!1),t.window.document.addEventListener("keydown",this._onKeyDown,!1),t.window.document.addEventListener("mouseup",this._onMouseUp,!1),i.disableDrag(),this._startPos=this._lastPos=i.mousePos(this._el,e),this._active=!0);},To.prototype._onMouseMove=function(t){var e=i.mousePos(this._el,t);if(!(this._lastPos.equals(e)||!this._box&&e.dist(this._startPos)<this._clickTolerance)){var o=this._startPos;this._lastPos=e,this._box||(this._box=i.create("div","goongjs-boxzoom",this._container),this._container.classList.add("goongjs-crosshair"),this._fireEvent("boxzoomstart",t));var r=Math.min(o.x,e.x),a=Math.max(o.x,e.x),n=Math.min(o.y,e.y),s=Math.max(o.y,e.y);i.setTransform(this._box,"translate("+r+"px,"+n+"px)"),this._box.style.width=a-r+"px",this._box.style.height=s-n+"px";}},To.prototype._onMouseUp=function(e){if(0===e.button){var o=this._startPos,r=i.mousePos(this._el,e);this._finish(),i.suppressClick(),o.x===r.x&&o.y===r.y?this._fireEvent("boxzoomcancel",e):this._map.fitScreenCoordinates(o,r,this._map.getBearing(),{linear:!0}).fire(new t.Event("boxzoomend",{originalEvent:e}));}},To.prototype._onKeyDown=function(t){27===t.keyCode&&(this._finish(),this._fireEvent("boxzoomcancel",t));},To.prototype._finish=function(){this._active=!1,t.window.document.removeEventListener("mousemove",this._onMouseMove,!1),t.window.document.removeEventListener("keydown",this._onKeyDown,!1),t.window.document.removeEventListener("mouseup",this._onMouseUp,!1),this._container.classList.remove("goongjs-crosshair"),this._box&&(i.remove(this._box),this._box=null),i.enableDrag(),delete this._startPos,delete this._lastPos;},To.prototype._fireEvent=function(e,i){return this._map.fire(new t.Event(e,{originalEvent:i}))};var Io=t.bezier(0,0,.25,1),Co=function(e,i){this._map=e,this._el=i.element||e.getCanvasContainer(),this._state="disabled",this._button=i.button||"right",this._bearingSnap=i.bearingSnap||0,this._pitchWithRotate=!1!==i.pitchWithRotate,t.bindAll(["onMouseDown","_onMouseMove","_onMouseUp","_onBlur","_onDragFrame"],this);};Co.prototype.isEnabled=function(){return "disabled"!==this._state},Co.prototype.isActive=function(){return "active"===this._state},Co.prototype.enable=function(){this.isEnabled()||(this._state="enabled");},Co.prototype.disable=function(){if(this.isEnabled())switch(this._state){case"active":this._state="disabled",this._unbind(),this._deactivate(),this._fireEvent("rotateend"),this._pitchWithRotate&&this._fireEvent("pitchend"),this._fireEvent("moveend");break;case"pending":this._state="disabled",this._unbind();break;default:this._state="disabled";}},Co.prototype.onMouseDown=function(e){if("enabled"===this._state){var o="touchstart"===e.type;if(o)this._startTime=Date.now();else if("right"===this._button){if(this._eventButton=i.mouseButton(e),this._eventButton!==(e.ctrlKey?0:2))return}else{if(e.ctrlKey||0!==i.mouseButton(e))return;this._eventButton=0;}i.disableDrag(),o?(t.window.document.addEventListener("touchmove",this._onMouseMove,{capture:!0}),t.window.document.addEventListener("touchend",this._onMouseUp)):(t.window.document.addEventListener("mousemove",this._onMouseMove,{capture:!0}),t.window.document.addEventListener("mouseup",this._onMouseUp)),t.window.addEventListener("blur",this._onBlur),this._state="pending",this._inertia=[[t.browser.now(),this._map.getBearing()]],this._startPos=this._prevPos=this._lastPos=i.mousePos(this._el,e),this._center=this._map.transform.centerPoint,e.preventDefault();}},Co.prototype._onMouseMove=function(t){var e=i.mousePos(this._el,t);this._lastPos.equals(e)||(this._lastMoveEvent=t,this._lastPos=e,"pending"===this._state&&(this._state="active",this._fireEvent("rotatestart",t),this._fireEvent("movestart",t),this._pitchWithRotate&&this._fireEvent("pitchstart",t)),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onDragFrame)));},Co.prototype._onDragFrame=function(){this._frameId=null;var e=this._lastMoveEvent;if(e){var i=this._map.transform,o=this._prevPos,r=this._lastPos,a=.8*(o.x-r.x),n=-.5*(o.y-r.y),s=i.bearing-a,l=i.pitch-n,c=this._inertia,u=c[c.length-1];this._drainInertiaBuffer(),c.push([t.browser.now(),this._map._normalizeBearing(s,u[1])]);var h=i.bearing;if(i.bearing=s,this._pitchWithRotate){var p=i.pitch;i.pitch=l,i.pitch!==p&&this._fireEvent("pitch",e);}i.bearing!==h&&this._fireEvent("rotate",e),this._fireEvent("move",e),delete this._lastMoveEvent,this._prevPos=this._lastPos;}},Co.prototype._onMouseUp=function(t){var e="touchend"===t.type;if(e&&this._startPos===this._lastPos&&Date.now()-this._startTime<300&&this._el.click(),e||i.mouseButton(t)===this._eventButton)switch(this._state){case"active":this._state="enabled",i.suppressClick(),this._unbind(),this._deactivate(),this._inertialRotate(t);break;case"pending":this._state="enabled",this._unbind();}},Co.prototype._onBlur=function(t){switch(this._state){case"active":this._state="enabled",this._unbind(),this._deactivate(),this._fireEvent("rotateend",t),this._pitchWithRotate&&this._fireEvent("pitchend",t),this._fireEvent("moveend",t);break;case"pending":this._state="enabled",this._unbind();}},Co.prototype._unbind=function(){t.window.document.removeEventListener("mousemove",this._onMouseMove,{capture:!0}),t.window.document.removeEventListener("mouseup",this._onMouseUp),t.window.document.removeEventListener("touchmove",this._onMouseMove,{capture:!0}),t.window.document.removeEventListener("touchend",this._onMouseUp),t.window.removeEventListener("blur",this._onBlur),i.enableDrag();},Co.prototype._deactivate=function(){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._lastMoveEvent,delete this._startPos,delete this._prevPos,delete this._lastPos;},Co.prototype._inertialRotate=function(t){var e=this;this._fireEvent("rotateend",t),this._drainInertiaBuffer();var i=this._map,o=i.getBearing(),r=this._inertia,a=function(){Math.abs(o)<e._bearingSnap?i.resetNorth({noMoveStart:!0},{originalEvent:t}):e._fireEvent("moveend",t),e._pitchWithRotate&&e._fireEvent("pitchend",t);};if(r.length<2)a();else{var n=r[0],s=r[r.length-1],l=r[r.length-2],c=i._normalizeBearing(o,l[1]),u=s[1]-n[1],h=u<0?-1:1,p=(s[0]-n[0])/1e3;if(0!==u&&0!==p){var d=Math.abs(u*(.25/p));d>180&&(d=180);var _=d/180;c+=h*d*(_/2),Math.abs(i._normalizeBearing(c,0))<this._bearingSnap&&(c=i._normalizeBearing(0,c)),i.rotateTo(c,{duration:1e3*_,easing:Io,noMoveStart:!0},{originalEvent:t});}else a();}},Co.prototype._fireEvent=function(e,i){return this._map.fire(new t.Event(e,i?{originalEvent:i}:{}))},Co.prototype._drainInertiaBuffer=function(){for(var e=this._inertia,i=t.browser.now();e.length>0&&i-e[0][0]>160;)e.shift();};var So={linearity:.3,easing:t.bezier(0,0,.3,1),maxSpeed:1400,deceleration:2500},Po=function(e,i){this._map=e,this._el=e.getCanvasContainer(),this._state="disabled",this._clickTolerance=i.clickTolerance||1,this._inertiaOptions=So,t.bindAll(["_onMove","_onMouseUp","_onTouchEnd","_onBlur","_onDragFrame"],this);};Po.prototype.isEnabled=function(){return "disabled"!==this._state},Po.prototype.isActive=function(){return "active"===this._state},Po.prototype.enable=function(e){this.isEnabled()||(this._el.classList.add("goongjs-touch-drag-pan"),this._state="enabled",this._inertiaOptions=t.extend(So,e));},Po.prototype.disable=function(){if(this.isEnabled())switch(this._el.classList.remove("goongjs-touch-drag-pan"),this._state){case"active":this._state="disabled",this._unbind(),this._deactivate(),this._fireEvent("dragend"),this._fireEvent("moveend");break;case"pending":this._state="disabled",this._unbind();break;default:this._state="disabled";}},Po.prototype.onMouseDown=function(e){"enabled"===this._state&&(e.ctrlKey||0!==i.mouseButton(e)||(i.addEventListener(t.window.document,"mousemove",this._onMove,{capture:!0}),i.addEventListener(t.window.document,"mouseup",this._onMouseUp),this._start(e)));},Po.prototype.onTouchStart=function(e){this.isEnabled()&&(e.touches&&e.touches.length>1&&("pending"===this._state||"active"===this._state)||(i.addEventListener(t.window.document,"touchmove",this._onMove,{capture:!0,passive:!1}),i.addEventListener(t.window.document,"touchend",this._onTouchEnd),this._start(e)));},Po.prototype._start=function(e){t.window.addEventListener("blur",this._onBlur),this._state="pending",this._startPos=this._mouseDownPos=this._prevPos=this._lastPos=i.mousePos(this._el,e),this._startTouch=this._lastTouch=t.window.TouchEvent&&e instanceof t.window.TouchEvent?i.touchPos(this._el,e):null,this._inertia=[[t.browser.now(),this._startPos]];},Po.prototype._touchesMatch=function(t,e){return !(!t||!e||t.length!==e.length)&&t.every((function(t,i){return e[i]===t}))},Po.prototype._onMove=function(e){e.preventDefault();var o=t.window.TouchEvent&&e instanceof t.window.TouchEvent?i.touchPos(this._el,e):null,r=i.mousePos(this._el,e);(o?this._touchesMatch(this._lastTouch,o):this._lastPos.equals(r))||"pending"===this._state&&r.dist(this._mouseDownPos)<this._clickTolerance||(this._lastMoveEvent=e,this._lastPos=r,this._lastTouch=o,this._drainInertiaBuffer(),this._inertia.push([t.browser.now(),this._lastPos]),"pending"===this._state&&(this._state="active",this._shouldStart=!0),this._frameId||(this._frameId=this._map._requestRenderFrame(this._onDragFrame)));},Po.prototype._onDragFrame=function(){this._frameId=null;var t=this._lastMoveEvent;if(t)if(this._map.touchZoomRotate.isActive())this._abort(t);else if(this._shouldStart&&(this._fireEvent("dragstart",t),this._fireEvent("movestart",t),this._shouldStart=!1),this.isActive()){var e=this._map.transform;e.setLocationAtPoint(e.pointLocation(this._prevPos),this._lastPos),this._fireEvent("drag",t),this._fireEvent("move",t),this._prevPos=this._lastPos,delete this._lastMoveEvent;}},Po.prototype._onMouseUp=function(t){if(0===i.mouseButton(t))switch(this._state){case"active":this._state="enabled",i.suppressClick(),this._unbind(),this._deactivate(),this._inertialPan(t);break;case"pending":this._state="enabled",this._unbind();}},Po.prototype._onTouchEnd=function(t){if(t.touches&&0!==t.touches.length)switch(this._state){case"pending":case"active":break;case"enabled":this.onTouchStart(t);}else switch(this._state){case"active":this._state="enabled",this._unbind(),this._deactivate(),this._inertialPan(t);break;case"pending":this._state="enabled",this._unbind();break;case"enabled":this._unbind();}},Po.prototype._abort=function(e){switch(this._state){case"active":this._state="enabled",this._shouldStart||(this._fireEvent("dragend",e),this._fireEvent("moveend",e)),this._unbind(),this._deactivate(),t.window.TouchEvent&&e instanceof t.window.TouchEvent&&e.touches.length>1&&i.addEventListener(t.window.document,"touchend",this._onTouchEnd);break;case"pending":this._state="enabled",this._unbind();break;case"enabled":this._unbind();}},Po.prototype._onBlur=function(t){this._abort(t);},Po.prototype._unbind=function(){i.removeEventListener(t.window.document,"touchmove",this._onMove,{capture:!0,passive:!1}),i.removeEventListener(t.window.document,"touchend",this._onTouchEnd),i.removeEventListener(t.window.document,"mousemove",this._onMove,{capture:!0}),i.removeEventListener(t.window.document,"mouseup",this._onMouseUp),i.removeEventListener(t.window,"blur",this._onBlur);},Po.prototype._deactivate=function(){this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._lastMoveEvent,delete this._startPos,delete this._prevPos,delete this._mouseDownPos,delete this._lastPos,delete this._startTouch,delete this._lastTouch,delete this._shouldStart;},Po.prototype._inertialPan=function(t){this._fireEvent("dragend",t),this._drainInertiaBuffer();var e=this._inertia;if(e.length<2)this._fireEvent("moveend",t);else{var i=e[e.length-1],o=e[0],r=i[1].sub(o[1]),a=(i[0]-o[0])/1e3;if(0===a||i[1].equals(o[1]))this._fireEvent("moveend",t);else{var n=this._inertiaOptions,s=n.linearity,l=n.easing,c=n.maxSpeed,u=n.deceleration,h=r.mult(s/a),p=h.mag();p>c&&(p=c,h._unit()._mult(p));var d=p/(u*s),_=h.mult(-d/2);this._map.panBy(_,{duration:1e3*d,easing:l,noMoveStart:!0},{originalEvent:t});}}},Po.prototype._fireEvent=function(e,i){return this._map.fire(new t.Event(e,i?{originalEvent:i}:{}))},Po.prototype._drainInertiaBuffer=function(){for(var e=this._inertia,i=t.browser.now();e.length>0&&i-e[0][0]>160;)e.shift();};var zo=function(e){this._map=e,this._el=e.getCanvasContainer(),t.bindAll(["_onKeyDown"],this);};function Lo(t){return t*(2-t)}zo.prototype.isEnabled=function(){return !!this._enabled},zo.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("keydown",this._onKeyDown,!1),this._enabled=!0);},zo.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("keydown",this._onKeyDown),this._enabled=!1);},zo.prototype._onKeyDown=function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=0,i=0,o=0,r=0,a=0;switch(t.keyCode){case 61:case 107:case 171:case 187:e=1;break;case 189:case 109:case 173:e=-1;break;case 37:t.shiftKey?i=-1:(t.preventDefault(),r=-1);break;case 39:t.shiftKey?i=1:(t.preventDefault(),r=1);break;case 38:t.shiftKey?o=1:(t.preventDefault(),a=-1);break;case 40:t.shiftKey?o=-1:(a=1,t.preventDefault());break;default:return}var n=this._map,s=n.getZoom(),l={duration:300,delayEndEvents:500,easing:Lo,zoom:e?Math.round(s)+e*(t.shiftKey?2:1):s,bearing:n.getBearing()+15*i,pitch:n.getPitch()+10*o,offset:[100*-r,100*-a],center:n.getCenter()};n.easeTo(l,{originalEvent:t});}};var Mo=function(e){this._map=e,t.bindAll(["_onDblClick","_onZoomEnd"],this);};Mo.prototype.isEnabled=function(){return !!this._enabled},Mo.prototype.isActive=function(){return !!this._active},Mo.prototype.enable=function(){this.isEnabled()||(this._enabled=!0);},Mo.prototype.disable=function(){this.isEnabled()&&(this._enabled=!1);},Mo.prototype.onTouchStart=function(t){var e=this;if(this.isEnabled()&&!(t.points.length>1))if(this._tapped){var i=t.points[0],o=this._tappedPoint;if(o&&o.dist(i)<=30){t.originalEvent.preventDefault();var r=function(){e._tapped&&e._zoom(t),e._map.off("touchcancel",a),e._resetTapped();},a=function(){e._map.off("touchend",r),e._resetTapped();};this._map.once("touchend",r),this._map.once("touchcancel",a);}else this._resetTapped();}else this._tappedPoint=t.points[0],this._tapped=setTimeout((function(){e._tapped=null,e._tappedPoint=null;}),300);},Mo.prototype._resetTapped=function(){clearTimeout(this._tapped),this._tapped=null,this._tappedPoint=null;},Mo.prototype.onDblClick=function(t){this.isEnabled()&&(t.originalEvent.preventDefault(),this._zoom(t));},Mo.prototype._zoom=function(t){this._active=!0,this._map.on("zoomend",this._onZoomEnd),this._map.zoomTo(this._map.getZoom()+(t.originalEvent.shiftKey?-1:1),{around:t.lngLat},t);},Mo.prototype._onZoomEnd=function(){this._active=!1,this._map.off("zoomend",this._onZoomEnd);};var Do=t.bezier(0,0,.15,1),Ao=function(e){this._map=e,this._el=e.getCanvasContainer(),t.bindAll(["_onMove","_onEnd","_onTouchFrame"],this);};Ao.prototype.isEnabled=function(){return !!this._enabled},Ao.prototype.enable=function(t){this.isEnabled()||(this._el.classList.add("goongjs-touch-zoom-rotate"),this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around);},Ao.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("goongjs-touch-zoom-rotate"),this._enabled=!1);},Ao.prototype.disableRotation=function(){this._rotationDisabled=!0;},Ao.prototype.enableRotation=function(){this._rotationDisabled=!1;},Ao.prototype.isActive=function(){return this.isEnabled()&&!!this._gestureIntent},Ao.prototype.onStart=function(e){if(this.isEnabled()&&2===e.touches.length){var o=i.mousePos(this._el,e.touches[0]),r=i.mousePos(this._el,e.touches[1]),a=o.add(r).div(2);this._startVec=o.sub(r),this._startAround=this._map.transform.pointLocation(a),this._gestureIntent=void 0,this._inertia=[],i.addEventListener(t.window.document,"touchmove",this._onMove,{passive:!1}),i.addEventListener(t.window.document,"touchend",this._onEnd);}},Ao.prototype._getTouchEventData=function(t){var e=i.mousePos(this._el,t.touches[0]),o=i.mousePos(this._el,t.touches[1]),r=e.sub(o);return {vec:r,center:e.add(o).div(2),scale:r.mag()/this._startVec.mag(),bearing:this._rotationDisabled?0:180*r.angleWith(this._startVec)/Math.PI}},Ao.prototype._onMove=function(e){if(2===e.touches.length){var i=this._getTouchEventData(e),o=i.vec,r=i.scale,a=i.bearing;if(!this._gestureIntent){var n=this._rotationDisabled&&1!==r||Math.abs(1-r)>.15;Math.abs(a)>10?this._gestureIntent="rotate":n&&(this._gestureIntent="zoom"),this._gestureIntent&&(this._map.fire(new t.Event(this._gestureIntent+"start",{originalEvent:e})),this._map.fire(new t.Event("movestart",{originalEvent:e})),this._startVec=o);}this._lastTouchEvent=e,this._frameId||(this._frameId=this._map._requestRenderFrame(this._onTouchFrame)),e.preventDefault();}},Ao.prototype._onTouchFrame=function(){this._frameId=null;var e=this._gestureIntent;if(e){var i=this._map.transform;this._startScale||(this._startScale=i.scale,this._startBearing=i.bearing);var o=this._getTouchEventData(this._lastTouchEvent),r=o.center,a=o.bearing,n=o.scale,s=i.pointLocation(r),l=i.locationPoint(s);"rotate"===e&&(i.bearing=this._startBearing+a),i.zoom=i.scaleZoom(this._startScale*n),i.setLocationAtPoint(this._startAround,l),this._map.fire(new t.Event(e,{originalEvent:this._lastTouchEvent})),this._map.fire(new t.Event("move",{originalEvent:this._lastTouchEvent})),this._drainInertiaBuffer(),this._inertia.push([t.browser.now(),n,r]);}},Ao.prototype._onEnd=function(e){i.removeEventListener(t.window.document,"touchmove",this._onMove,{passive:!1}),i.removeEventListener(t.window.document,"touchend",this._onEnd);var o=this._gestureIntent,r=this._startScale;if(this._frameId&&(this._map._cancelRenderFrame(this._frameId),this._frameId=null),delete this._gestureIntent,delete this._startScale,delete this._startBearing,delete this._lastTouchEvent,o){this._map.fire(new t.Event(o+"end",{originalEvent:e})),this._drainInertiaBuffer();var a=this._inertia,n=this._map;if(a.length<2)n.snapToNorth({},{originalEvent:e});else{var s=a[a.length-1],l=a[0],c=n.transform.scaleZoom(r*s[1]),u=n.transform.scaleZoom(r*l[1]),h=c-u,p=(s[0]-l[0])/1e3,d=s[2];if(0!==p&&c!==u){var _=.15*h/p;Math.abs(_)>2.5&&(_=_>0?2.5:-2.5);var f=1e3*Math.abs(_/(12*.15)),m=c+_*f/2e3;n.easeTo({zoom:m,duration:f,easing:Do,around:this._aroundCenter?n.getCenter():n.unproject(d),noMoveStart:!0},{originalEvent:e});}else n.snapToNorth({},{originalEvent:e});}}},Ao.prototype._drainInertiaBuffer=function(){for(var e=this._inertia,i=t.browser.now();e.length>2&&i-e[0][0]>160;)e.shift();};var Ro={scrollZoom:Eo,boxZoom:To,dragRotate:Co,dragPan:Po,keyboard:zo,doubleClickZoom:Mo,touchZoomRotate:Ao};var ko=function(e){function i(i,o){e.call(this),this._moving=!1,this._zooming=!1,this.transform=i,this._bearingSnap=o.bearingSnap,t.bindAll(["_renderFrameCallback"],this);}return e&&(i.__proto__=e),i.prototype=Object.create(e&&e.prototype),i.prototype.constructor=i,i.prototype.getCenter=function(){return new t.LngLat(this.transform.center.lng,this.transform.center.lat)},i.prototype.setCenter=function(t,e){return this.jumpTo({center:t},e)},i.prototype.panBy=function(e,i,o){return e=t.Point.convert(e).mult(-1),this.panTo(this.transform.center,t.extend({offset:e},i),o)},i.prototype.panTo=function(e,i,o){return this.easeTo(t.extend({center:e},i),o)},i.prototype.getZoom=function(){return this.transform.zoom},i.prototype.setZoom=function(t,e){return this.jumpTo({zoom:t},e),this},i.prototype.zoomTo=function(e,i,o){return this.easeTo(t.extend({zoom:e},i),o)},i.prototype.zoomIn=function(t,e){return this.zoomTo(this.getZoom()+1,t,e),this},i.prototype.zoomOut=function(t,e){return this.zoomTo(this.getZoom()-1,t,e),this},i.prototype.getBearing=function(){return this.transform.bearing},i.prototype.setBearing=function(t,e){return this.jumpTo({bearing:t},e),this},i.prototype.rotateTo=function(e,i,o){return this.easeTo(t.extend({bearing:e},i),o)},i.prototype.resetNorth=function(e,i){return this.rotateTo(0,t.extend({duration:1e3},e),i),this},i.prototype.resetNorthPitch=function(e,i){return this.easeTo(t.extend({bearing:0,pitch:0,duration:1e3},e),i),this},i.prototype.snapToNorth=function(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this},i.prototype.getPitch=function(){return this.transform.pitch},i.prototype.setPitch=function(t,e){return this.jumpTo({pitch:t},e),this},i.prototype.cameraForBounds=function(e,i){return e=t.LngLatBounds.convert(e),this._cameraForBoxAndBearing(e.getNorthWest(),e.getSouthEast(),0,i)},i.prototype._cameraForBoxAndBearing=function(e,i,o,r){if("number"==typeof(r=t.extend({padding:{top:0,bottom:0,right:0,left:0},offset:[0,0],maxZoom:this.transform.maxZoom},r)).padding){var a=r.padding;r.padding={top:a,bottom:a,right:a,left:a};}if(t.deepEqual(Object.keys(r.padding).sort((function(t,e){return t<e?-1:t>e?1:0})),["bottom","left","right","top"])){var n=this.transform,s=n.project(t.LngLat.convert(e)),l=n.project(t.LngLat.convert(i)),c=s.rotate(-o*Math.PI/180),u=l.rotate(-o*Math.PI/180),h=new t.Point(Math.max(c.x,u.x),Math.max(c.y,u.y)),p=new t.Point(Math.min(c.x,u.x),Math.min(c.y,u.y)),d=h.sub(p),_=(n.width-r.padding.left-r.padding.right)/d.x,f=(n.height-r.padding.top-r.padding.bottom)/d.y;if(!(f<0||_<0)){var m=Math.min(n.scaleZoom(n.scale*Math.min(_,f)),r.maxZoom),g=t.Point.convert(r.offset),v=(r.padding.left-r.padding.right)/2,y=(r.padding.top-r.padding.bottom)/2,x=new t.Point(g.x+v,g.y+y).mult(n.scale/n.zoomScale(m));return {center:n.unproject(s.add(l).div(2).sub(x)),zoom:m,bearing:o}}t.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset.");}else t.warnOnce("options.padding must be a positive number, or an Object with keys 'bottom', 'left', 'right', 'top'");},i.prototype.fitBounds=function(t,e,i){return this._fitInternal(this.cameraForBounds(t,e),e,i)},i.prototype.fitScreenCoordinates=function(e,i,o,r,a){return this._fitInternal(this._cameraForBoxAndBearing(this.transform.pointLocation(t.Point.convert(e)),this.transform.pointLocation(t.Point.convert(i)),o,r),r,a)},i.prototype._fitInternal=function(e,i,o){return e?(i=t.extend(e,i)).linear?this.easeTo(i,o):this.flyTo(i,o):this},i.prototype.jumpTo=function(e,i){this.stop();var o=this.transform,r=!1,a=!1,n=!1;return "zoom"in e&&o.zoom!==+e.zoom&&(r=!0,o.zoom=+e.zoom),void 0!==e.center&&(o.center=t.LngLat.convert(e.center)),"bearing"in e&&o.bearing!==+e.bearing&&(a=!0,o.bearing=+e.bearing),"pitch"in e&&o.pitch!==+e.pitch&&(n=!0,o.pitch=+e.pitch),this.fire(new t.Event("movestart",i)).fire(new t.Event("move",i)),r&&this.fire(new t.Event("zoomstart",i)).fire(new t.Event("zoom",i)).fire(new t.Event("zoomend",i)),a&&this.fire(new t.Event("rotatestart",i)).fire(new t.Event("rotate",i)).fire(new t.Event("rotateend",i)),n&&this.fire(new t.Event("pitchstart",i)).fire(new t.Event("pitch",i)).fire(new t.Event("pitchend",i)),this.fire(new t.Event("moveend",i))},i.prototype.easeTo=function(e,i){var o=this;this.stop(),(!1===(e=t.extend({offset:[0,0],duration:500,easing:t.ease},e)).animate||!e.essential&&t.browser.prefersReducedMotion)&&(e.duration=0);var r=this.transform,a=this.getZoom(),n=this.getBearing(),s=this.getPitch(),l="zoom"in e?+e.zoom:a,c="bearing"in e?this._normalizeBearing(e.bearing,n):n,u="pitch"in e?+e.pitch:s,h=r.centerPoint.add(t.Point.convert(e.offset)),p=r.pointLocation(h),d=t.LngLat.convert(e.center||p);this._normalizeCenter(d);var _,f,m=r.project(p),g=r.project(d).sub(m),v=r.zoomScale(l-a);return e.around&&(_=t.LngLat.convert(e.around),f=r.locationPoint(_)),this._zooming=l!==a,this._rotating=n!==c,this._pitching=u!==s,this._prepareEase(i,e.noMoveStart),clearTimeout(this._easeEndTimeoutID),this._ease((function(e){if(o._zooming&&(r.zoom=t.number(a,l,e)),o._rotating&&(r.bearing=t.number(n,c,e)),o._pitching&&(r.pitch=t.number(s,u,e)),_)r.setLocationAtPoint(_,f);else{var p=r.zoomScale(r.zoom-a),d=l>a?Math.min(2,v):Math.max(.5,v),y=Math.pow(d,1-e),x=r.unproject(m.add(g.mult(e*y)).mult(p));r.setLocationAtPoint(r.renderWorldCopies?x.wrap():x,h);}o._fireMoveEvents(i);}),(function(){e.delayEndEvents?o._easeEndTimeoutID=setTimeout((function(){return o._afterEase(i)}),e.delayEndEvents):o._afterEase(i);}),e),this},i.prototype._prepareEase=function(e,i){this._moving=!0,i||this.fire(new t.Event("movestart",e)),this._zooming&&this.fire(new t.Event("zoomstart",e)),this._rotating&&this.fire(new t.Event("rotatestart",e)),this._pitching&&this.fire(new t.Event("pitchstart",e));},i.prototype._fireMoveEvents=function(e){this.fire(new t.Event("move",e)),this._zooming&&this.fire(new t.Event("zoom",e)),this._rotating&&this.fire(new t.Event("rotate",e)),this._pitching&&this.fire(new t.Event("pitch",e));},i.prototype._afterEase=function(e){var i=this._zooming,o=this._rotating,r=this._pitching;this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,i&&this.fire(new t.Event("zoomend",e)),o&&this.fire(new t.Event("rotateend",e)),r&&this.fire(new t.Event("pitchend",e)),this.fire(new t.Event("moveend",e));},i.prototype.flyTo=function(e,i){var o=this;if(!e.essential&&t.browser.prefersReducedMotion){var r=t.pick(e,["center","zoom","bearing","pitch","around"]);return this.jumpTo(r,i)}this.stop(),e=t.extend({offset:[0,0],speed:1.2,curve:1.42,easing:t.ease},e);var a=this.transform,n=this.getZoom(),s=this.getBearing(),l=this.getPitch(),c="zoom"in e?t.clamp(+e.zoom,a.minZoom,a.maxZoom):n,u="bearing"in e?this._normalizeBearing(e.bearing,s):s,h="pitch"in e?+e.pitch:l,p=a.zoomScale(c-n),d=a.centerPoint.add(t.Point.convert(e.offset)),_=a.pointLocation(d),f=t.LngLat.convert(e.center||_);this._normalizeCenter(f);var m=a.project(_),g=a.project(f).sub(m),v=e.curve,y=Math.max(a.width,a.height),x=y/p,b=g.mag();if("minZoom"in e){var w=t.clamp(Math.min(e.minZoom,n,c),a.minZoom,a.maxZoom),E=y/a.zoomScale(w-n);v=Math.sqrt(E/b*2);}var T=v*v;function I(t){var e=(x*x-y*y+(t?-1:1)*T*T*b*b)/(2*(t?x:y)*T*b);return Math.log(Math.sqrt(e*e+1)-e)}function C(t){return (Math.exp(t)-Math.exp(-t))/2}function S(t){return (Math.exp(t)+Math.exp(-t))/2}var P=I(0),z=function(t){return S(P)/S(P+v*t)},L=function(t){return y*((S(P)*(C(e=P+v*t)/S(e))-C(P))/T)/b;var e;},M=(I(1)-P)/v;if(Math.abs(b)<1e-6||!isFinite(M)){if(Math.abs(y-x)<1e-6)return this.easeTo(e,i);var D=x<y?-1:1;M=Math.abs(Math.log(x/y))/v,L=function(){return 0},z=function(t){return Math.exp(D*v*t)};}if("duration"in e)e.duration=+e.duration;else{var A="screenSpeed"in e?+e.screenSpeed/v:+e.speed;e.duration=1e3*M/A;}return e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=s!==u,this._pitching=h!==l,this._prepareEase(i,!1),this._ease((function(e){var r=e*M,p=1/z(r);a.zoom=1===e?c:n+a.scaleZoom(p),o._rotating&&(a.bearing=t.number(s,u,e)),o._pitching&&(a.pitch=t.number(l,h,e));var _=1===e?f:a.unproject(m.add(g.mult(L(r))).mult(p));a.setLocationAtPoint(a.renderWorldCopies?_.wrap():_,d),o._fireMoveEvents(i);}),(function(){return o._afterEase(i)}),e),this},i.prototype.isEasing=function(){return !!this._easeFrameId},i.prototype.stop=function(){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){var t=this._onEaseEnd;delete this._onEaseEnd,t.call(this);}return this},i.prototype._ease=function(e,i,o){!1===o.animate||0===o.duration?(e(1),i()):(this._easeStart=t.browser.now(),this._easeOptions=o,this._onEaseFrame=e,this._onEaseEnd=i,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback));},i.prototype._renderFrameCallback=function(){var e=Math.min((t.browser.now()-this._easeStart)/this._easeOptions.duration,1);this._onEaseFrame(this._easeOptions.easing(e)),e<1?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop();},i.prototype._normalizeBearing=function(e,i){e=t.wrap(e,-180,180);var o=Math.abs(e-i);return Math.abs(e-360-i)<o&&(e-=360),Math.abs(e+360-i)<o&&(e+=360),e},i.prototype._normalizeCenter=function(t){var e=this.transform;if(e.renderWorldCopies&&!e.lngRange){var i=t.lng-e.center.lng;t.lng+=i>180?-360:i<-180?360:0;}},i}(t.Evented),Bo=function(e){void 0===e&&(e={}),this.options=e,t.bindAll(["_updateEditLink","_updateData","_updateCompact"],this);};Bo.prototype.getDefaultPosition=function(){return "bottom-right"},Bo.prototype.onAdd=function(t){var e=this.options&&this.options.compact;return this._map=t,this._container=i.create("div","goongjs-ctrl goongjs-ctrl-attrib"),this._innerContainer=i.create("div","goongjs-ctrl-attrib-inner",this._container),e&&this._container.classList.add("goongjs-compact"),this._updateAttributions(),this._updateEditLink(),this._map.on("styledata",this._updateData),this._map.on("sourcedata",this._updateData),this._map.on("moveend",this._updateEditLink),void 0===e&&(this._map.on("resize",this._updateCompact),this._updateCompact()),this._container},Bo.prototype.onRemove=function(){i.remove(this._container),this._map.off("styledata",this._updateData),this._map.off("sourcedata",this._updateData),this._map.off("moveend",this._updateEditLink),this._map.off("resize",this._updateCompact),this._map=void 0,this._attribHTML=void 0;},Bo.prototype._updateEditLink=function(){var e=this._editLink;e||(e=this._editLink=this._container.querySelector(".mapbox-improve-map"));var i=[{key:"owner",value:this.styleOwner},{key:"id",value:this.styleId},{key:"access_token",value:this._map._requestManager._customAccessToken||t.config.ACCESS_TOKEN}];if(e){var o=i.reduce((function(t,e,o){return e.value&&(t+=e.key+"="+e.value+(o<i.length-1?"&":"")),t}),"?");e.href=t.config.FEEDBACK_URL+"/"+o+(this._map._hash?this._map._hash.getHashString(!0):""),e.rel="noopener nofollow";}},Bo.prototype._updateData=function(t){!t||"metadata"!==t.sourceDataType&&"style"!==t.dataType||(this._updateAttributions(),this._updateEditLink());},Bo.prototype._updateAttributions=function(){if(this._map.style){var t=[];if(this.options.customAttribution&&(Array.isArray(this.options.customAttribution)?t=t.concat(this.options.customAttribution.map((function(t){return "string"!=typeof t?"":t}))):"string"==typeof this.options.customAttribution&&t.push(this.options.customAttribution)),this._map.style.stylesheet){var e=this._map.style.stylesheet;this.styleOwner=e.owner,this.styleId=e.id;}var i=this._map.style.sourceCaches;for(var o in i){var r=i[o];if(r.used){var a=r.getSource();a.attribution&&t.indexOf(a.attribution)<0&&t.push(a.attribution);}}t.sort((function(t,e){return t.length-e.length}));var n=(t=t.filter((function(e,i){for(var o=i+1;o<t.length;o++)if(t[o].indexOf(e)>=0)return !1;return !0}))).join(" | ");n!==this._attribHTML&&(this._attribHTML=n,t.length?(this._innerContainer.innerHTML=n,this._container.classList.remove("goongjs-attrib-empty")):this._container.classList.add("goongjs-attrib-empty"),this._editLink=null);}},Bo.prototype._updateCompact=function(){this._map.getCanvasContainer().offsetWidth<=640?this._container.classList.add("goongjs-compact"):this._container.classList.remove("goongjs-compact");};var Oo=function(){t.bindAll(["_updateLogo"],this),t.bindAll(["_updateCompact"],this);};Oo.prototype.onAdd=function(t){this._map=t,this._container=i.create("div","goongjs-ctrl");var e=i.create("a","goongjs-ctrl-logo");return e.target="_blank",e.rel="noopener nofollow",e.href="https://goong.io/",e.setAttribute("aria-label",this._map._getUIString("LogoControl.Title")),e.setAttribute("rel","noopener nofollow"),this._container.appendChild(e),this._container.style.display="none",this._map.on("sourcedata",this._updateLogo),this._updateLogo(),this._map.on("resize",this._updateCompact),this._updateCompact(),this._container},Oo.prototype.onRemove=function(){i.remove(this._container),this._map.off("sourcedata",this._updateLogo),this._map.off("resize",this._updateCompact);},Oo.prototype.getDefaultPosition=function(){return "bottom-left"},Oo.prototype._updateLogo=function(t){t&&"metadata"!==t.sourceDataType||(this._container.style.display=this._logoRequired()?"block":"none");},Oo.prototype._logoRequired=function(){return !0},Oo.prototype._updateCompact=function(){var t=this._container.children;if(t.length){var e=t[0];this._map.getCanvasContainer().offsetWidth<250?e.classList.add("goongjs-compact"):e.classList.remove("goongjs-compact");}};var Fo=function(){this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1;};Fo.prototype.add=function(t){var e=++this._id;return this._queue.push({callback:t,id:e,cancelled:!1}),e},Fo.prototype.remove=function(t){for(var e=this._currentlyRunning,i=0,o=e?this._queue.concat(e):this._queue;i<o.length;i+=1){var r=o[i];if(r.id===t)return void(r.cancelled=!0)}},Fo.prototype.run=function(){var t=this._currentlyRunning=this._queue;this._queue=[];for(var e=0,i=t;e<i.length;e+=1){var o=i[e];if(!o.cancelled&&(o.callback(),this._cleared))break}this._cleared=!1,this._currentlyRunning=!1;},Fo.prototype.clear=function(){this._currentlyRunning&&(this._cleared=!0),this._queue=[];};var Uo={"FullscreenControl.Enter":"Enter fullscreen","FullscreenControl.Exit":"Exit fullscreen","GeolocateControl.FindMyLocation":"Find my location","GeolocateControl.LocationNotAvailable":"Location not available","LogoControl.Title":"Goong logo","NavigationControl.ResetBearing":"Reset bearing to north","NavigationControl.ZoomIn":"Zoom in","NavigationControl.ZoomOut":"Zoom out","ScaleControl.Feet":"ft","ScaleControl.Meters":"m","ScaleControl.Kilometers":"km","ScaleControl.Miles":"mi","ScaleControl.NauticalMiles":"nm"},No=t.window.HTMLImageElement,jo=t.window.HTMLElement,Zo=0,qo=60,Vo={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:-2,maxZoom:22,minPitch:Zo,maxPitch:qo,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,bearingSnap:7,clickTolerance:3,hash:!1,attributionControl:!0,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,localIdeographFontFamily:"sans-serif",transformRequest:null,accessToken:null,fadeDuration:300,crossSourceCollisions:!0},Go=function(o){function r(e){var r=this;if(null!=(e=t.extend({},Vo,e)).minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than or equal to minZoom");if(null!=e.minPitch&&null!=e.maxPitch&&e.minPitch>e.maxPitch)throw new Error("maxPitch must be greater than or equal to minPitch");if(null!=e.minPitch&&e.minPitch<Zo)throw new Error("minPitch must be greater than or equal to "+Zo);if(null!=e.maxPitch&&e.maxPitch>qo)throw new Error("maxPitch must be less than or equal to "+qo);var a=new go(e.minZoom,e.maxZoom,e.minPitch,e.maxPitch,e.renderWorldCopies);if(o.call(this,a,e),this._interactive=e.interactive,this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._antialias=e.antialias,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossSourceCollisions=e.crossSourceCollisions,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming,this._renderTaskQueue=new Fo,this._controls=[],this._mapId=t.uniqueId(),this._locale=t.extend({},Uo,e.locale),this._requestManager=new t.RequestManager(e.transformRequest,e.accessToken),"string"==typeof e.container){if(this._container=t.window.document.getElementById(e.container),!this._container)throw new Error("Container '"+e.container+"' not found.")}else{if(!(e.container instanceof jo))throw new Error("Invalid type: 'container' must be a String or HTMLElement.");this._container=e.container;}if(e.maxBounds&&this.setMaxBounds(e.maxBounds),t.bindAll(["_onWindowOnline","_onWindowResize","_contextLost","_contextRestored"],this),this._setupContainer(),this._setupPainter(),void 0===this.painter)throw new Error("Failed to initialize WebGL.");this.on("move",(function(){return r._update(!1)})),this.on("moveend",(function(){return r._update(!1)})),this.on("zoom",(function(){return r._update(!0)})),void 0!==t.window&&(t.window.addEventListener("online",this._onWindowOnline,!1),t.window.addEventListener("resize",this._onWindowResize,!1)),function(t,e){var o=t.getCanvasContainer(),r=null,a=!1,n=null;for(var s in Ro)t[s]=new Ro[s](t,e),e.interactive&&e[s]&&t[s].enable(e[s]);i.addEventListener(o,"mouseout",(function(e){t.fire(new xo("mouseout",t,e));})),i.addEventListener(o,"mousedown",(function(r){a=!0,n=i.mousePos(o,r);var s=new xo("mousedown",t,r);if(t.fire(s),s.defaultPrevented)return;e.interactive&&!t.doubleClickZoom.isActive()&&t.stop();t.boxZoom.onMouseDown(r),t.boxZoom.isActive()||t.dragPan.isActive()||t.dragRotate.onMouseDown(r);t.boxZoom.isActive()||t.dragRotate.isActive()||t.dragPan.onMouseDown(r);})),i.addEventListener(o,"mouseup",(function(e){var i=t.dragRotate.isActive();r&&!i&&t.fire(new xo("contextmenu",t,r));r=null,a=!1,t.fire(new xo("mouseup",t,e));})),i.addEventListener(o,"mousemove",(function(e){if(t.dragPan.isActive())return;if(t.dragRotate.isActive())return;var i=e.target;for(;i&&i!==o;)i=i.parentNode;if(i!==o)return;t.fire(new xo("mousemove",t,e));})),i.addEventListener(o,"mouseover",(function(e){var i=e.target;for(;i&&i!==o;)i=i.parentNode;if(i!==o)return;t.fire(new xo("mouseover",t,e));})),i.addEventListener(o,"touchstart",(function(i){var o=new bo("touchstart",t,i);if(t.fire(o),o.defaultPrevented)return;e.interactive&&t.stop();t.boxZoom.isActive()||t.dragRotate.isActive()||t.dragPan.onTouchStart(i);t.touchZoomRotate.onStart(i),t.doubleClickZoom.onTouchStart(o);}),{passive:!1}),i.addEventListener(o,"touchmove",(function(e){t.fire(new bo("touchmove",t,e));}),{passive:!1}),i.addEventListener(o,"touchend",(function(e){t.fire(new bo("touchend",t,e));})),i.addEventListener(o,"touchcancel",(function(e){t.fire(new bo("touchcancel",t,e));})),i.addEventListener(o,"click",(function(r){var a=i.mousePos(o,r);(!n||a.equals(n)||a.dist(n)<e.clickTolerance)&&t.fire(new xo("click",t,r));})),i.addEventListener(o,"dblclick",(function(e){var i=new xo("dblclick",t,e);if(t.fire(i),i.defaultPrevented)return;t.doubleClickZoom.onDblClick(i);})),i.addEventListener(o,"contextmenu",(function(e){var i=t.dragRotate.isActive();a||i?a&&(r=e):t.fire(new xo("contextmenu",t,e));(t.dragRotate.isEnabled()||t.listens("contextmenu"))&&e.preventDefault();})),i.addEventListener(o,"wheel",(function(i){e.interactive&&t.stop();var o=new wo("wheel",t,i);if(t.fire(o),o.defaultPrevented)return;t.scrollZoom.onWheel(i);}),{passive:!1});}(this,e);var n="string"==typeof e.hash&&e.hash||void 0;this._hash=e.hash&&new yo(n).addTo(this),this._hash&&this._hash._onHashChange()||(this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),e.bounds&&(this.resize(),this.fitBounds(e.bounds,t.extend({},e.fitBoundsOptions,{duration:0})))),this.resize(),this._localIdeographFontFamily=e.localIdeographFontFamily,e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new Bo({customAttribution:e.customAttribution})),this.addControl(new Oo,e.logoPosition),this.on("style.load",(function(){r.transform.unmodified&&r.jumpTo(r.style.stylesheet);})),this.on("data",(function(e){r._update("style"===e.dataType),r.fire(new t.Event(e.dataType+"data",e));})),this.on("dataloading",(function(e){r.fire(new t.Event(e.dataType+"dataloading",e));}));}o&&(r.__proto__=o),r.prototype=Object.create(o&&o.prototype),r.prototype.constructor=r;var a={showTileBoundaries:{configurable:!0},showCollisionBoxes:{configurable:!0},showOverdrawInspector:{configurable:!0},repaint:{configurable:!0},vertices:{configurable:!0},version:{configurable:!0}};return r.prototype._getMapId=function(){return this._mapId},r.prototype.addControl=function(e,i){if(void 0===i&&e.getDefaultPosition&&(i=e.getDefaultPosition()),void 0===i&&(i="top-right"),!e||!e.onAdd)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.addControl(). Argument must be a control with onAdd and onRemove methods.")));var o=e.onAdd(this);this._controls.push(e);var r=this._controlPositions[i];return -1!==i.indexOf("bottom")?r.insertBefore(o,r.firstChild):r.appendChild(o),this},r.prototype.removeControl=function(e){if(!e||!e.onRemove)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.removeControl(). Argument must be a control with onAdd and onRemove methods.")));var i=this._controls.indexOf(e);return i>-1&&this._controls.splice(i,1),e.onRemove(this),this},r.prototype.resize=function(e){var i=this._containerDimensions(),o=i[0],r=i[1];return this._resizeCanvas(o,r),this.transform.resize(o,r),this.painter.resize(o,r),this.fire(new t.Event("movestart",e)).fire(new t.Event("move",e)).fire(new t.Event("resize",e)).fire(new t.Event("moveend",e)),this},r.prototype.getBounds=function(){return this.transform.getBounds()},r.prototype.getMaxBounds=function(){return this.transform.getMaxBounds()},r.prototype.setMaxBounds=function(e){return this.transform.setMaxBounds(t.LngLatBounds.convert(e)),this._update()},r.prototype.setMinZoom=function(t){if((t=null==t?-2:t)>=-2&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this;throw new Error("minZoom must be between -2 and the current maxZoom, inclusive")},r.prototype.getMinZoom=function(){return this.transform.minZoom},r.prototype.setMaxZoom=function(t){if((t=null==t?22:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this;throw new Error("maxZoom must be greater than the current minZoom")},r.prototype.getMaxZoom=function(){return this.transform.maxZoom},r.prototype.setMinPitch=function(t){if((t=null==t?Zo:t)<Zo)throw new Error("minPitch must be greater than or equal to "+Zo);if(t>=Zo&&t<=this.transform.maxPitch)return this.transform.minPitch=t,this._update(),this.getPitch()<t&&this.setPitch(t),this;throw new Error("minPitch must be between "+Zo+" and the current maxPitch, inclusive")},r.prototype.getMinPitch=function(){return this.transform.minPitch},r.prototype.setMaxPitch=function(t){if((t=null==t?qo:t)>qo)throw new Error("maxPitch must be less than or equal to "+qo);if(t>=this.transform.minPitch)return this.transform.maxPitch=t,this._update(),this.getPitch()>t&&this.setPitch(t),this;throw new Error("maxPitch must be greater than the current minPitch")},r.prototype.getMaxPitch=function(){return this.transform.maxPitch},r.prototype.getRenderWorldCopies=function(){return this.transform.renderWorldCopies},r.prototype.setRenderWorldCopies=function(t){return this.transform.renderWorldCopies=t,this._update()},r.prototype.project=function(e){return this.transform.locationPoint(t.LngLat.convert(e))},r.prototype.unproject=function(e){return this.transform.pointLocation(t.Point.convert(e))},r.prototype.isMoving=function(){return this._moving||this.dragPan.isActive()||this.dragRotate.isActive()||this.scrollZoom.isActive()},r.prototype.isZooming=function(){return this._zooming||this.scrollZoom.isZooming()},r.prototype.isRotating=function(){return this._rotating||this.dragRotate.isActive()},r.prototype.on=function(t,e,i){var r=this;if(void 0===i)return o.prototype.on.call(this,t,e);var a=function(){var o;if("mouseenter"===t||"mouseover"===t){var a=!1;return {layer:e,listener:i,delegates:{mousemove:function(o){var n=r.getLayer(e)?r.queryRenderedFeatures(o.point,{layers:[e]}):[];n.length?a||(a=!0,i.call(r,new xo(t,r,o.originalEvent,{features:n}))):a=!1;},mouseout:function(){a=!1;}}}}if("mouseleave"===t||"mouseout"===t){var n=!1;return {layer:e,listener:i,delegates:{mousemove:function(o){(r.getLayer(e)?r.queryRenderedFeatures(o.point,{layers:[e]}):[]).length?n=!0:n&&(n=!1,i.call(r,new xo(t,r,o.originalEvent)));},mouseout:function(e){n&&(n=!1,i.call(r,new xo(t,r,e.originalEvent)));}}}}return {layer:e,listener:i,delegates:(o={},o[t]=function(t){var o=r.getLayer(e)?r.queryRenderedFeatures(t.point,{layers:[e]}):[];o.length&&(t.features=o,i.call(r,t),delete t.features);},o)}}();for(var n in this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[t]=this._delegatedListeners[t]||[],this._delegatedListeners[t].push(a),a.delegates)this.on(n,a.delegates[n]);return this},r.prototype.off=function(t,e,i){if(void 0===i)return o.prototype.off.call(this,t,e);if(this._delegatedListeners&&this._delegatedListeners[t])for(var r=this._delegatedListeners[t],a=0;a<r.length;a++){var n=r[a];if(n.layer===e&&n.listener===i){for(var s in n.delegates)this.off(s,n.delegates[s]);return r.splice(a,1),this}}return this},r.prototype.queryRenderedFeatures=function(e,i){if(!this.style)return [];var o;if(void 0!==i||void 0===e||e instanceof t.Point||Array.isArray(e)||(i=e,e=void 0),i=i||{},(e=e||[[0,0],[this.transform.width,this.transform.height]])instanceof t.Point||"number"==typeof e[0])o=[t.Point.convert(e)];else{var r=t.Point.convert(e[0]),a=t.Point.convert(e[1]);o=[r,new t.Point(a.x,r.y),a,new t.Point(r.x,a.y),r];}return this.style.queryRenderedFeatures(o,i,this.transform)},r.prototype.querySourceFeatures=function(t,e){return this.style.querySourceFeatures(t,e)},r.prototype.setStyle=function(e,i){return !1!==(i=t.extend({},{localIdeographFontFamily:this._localIdeographFontFamily},i)).diff&&i.localIdeographFontFamily===this._localIdeographFontFamily&&this.style&&e?(this._diffStyle(e,i),this):(this._localIdeographFontFamily=i.localIdeographFontFamily,this._updateStyle(e,i))},r.prototype._getUIString=function(t){var e=this._locale[t];if(null==e)throw new Error("Missing UI string '"+t+"'");return e},r.prototype._updateStyle=function(t,e){return this.style&&(this.style.setEventedParent(null),this.style._remove()),t?(this.style=new je(this,e||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof t?this.style.loadURL(t):this.style.loadJSON(t),this):(delete this.style,this)},r.prototype._lazyInitEmptyStyle=function(){this.style||(this.style=new je(this,{}),this.style.setEventedParent(this,{style:this.style}),this.style.loadEmpty());},r.prototype._diffStyle=function(e,i){var o=this;if("string"==typeof e){var r=this._requestManager.normalizeStyleURL(e),a=this._requestManager.transformRequest(r,t.ResourceType.Style);t.getJSON(a,(function(e,r){e?o.fire(new t.ErrorEvent(e)):r&&o._updateDiff(r,i);}));}else"object"==typeof e&&this._updateDiff(e,i);},r.prototype._updateDiff=function(e,i){try{this.style.setState(e)&&this._update(!0);}catch(o){t.warnOnce("Unable to perform style diff: "+(o.message||o.error||o)+".  Rebuilding the style from scratch."),this._updateStyle(e,i);}},r.prototype.getStyle=function(){if(this.style)return this.style.serialize()},r.prototype.isStyleLoaded=function(){return this.style?this.style.loaded():t.warnOnce("There is no style added to the map.")},r.prototype.addSource=function(t,e){return this._lazyInitEmptyStyle(),this.style.addSource(t,e),this._update(!0)},r.prototype.isSourceLoaded=function(e){var i=this.style&&this.style.sourceCaches[e];if(void 0!==i)return i.loaded();this.fire(new t.ErrorEvent(new Error("There is no source with ID '"+e+"'")));},r.prototype.areTilesLoaded=function(){var t=this.style&&this.style.sourceCaches;for(var e in t){var i=t[e]._tiles;for(var o in i){var r=i[o];if("loaded"!==r.state&&"errored"!==r.state)return !1}}return !0},r.prototype.addSourceType=function(t,e,i){return this._lazyInitEmptyStyle(),this.style.addSourceType(t,e,i)},r.prototype.removeSource=function(t){return this.style.removeSource(t),this._update(!0)},r.prototype.getSource=function(t){return this.style.getSource(t)},r.prototype.addImage=function(e,i,o){void 0===o&&(o={});var r=o.pixelRatio;void 0===r&&(r=1);var a=o.sdf;void 0===a&&(a=!1);var n=o.stretchX,s=o.stretchY,l=o.content;this._lazyInitEmptyStyle();if(i instanceof No){var c=t.browser.getImageData(i),u=c.width,h=c.height,p=c.data;this.style.addImage(e,{data:new t.RGBAImage({width:u,height:h},p),pixelRatio:r,stretchX:n,stretchY:s,content:l,sdf:a,version:0});}else{if(void 0===i.width||void 0===i.height)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")));var d=i.width,_=i.height,f=i.data,m=i;this.style.addImage(e,{data:new t.RGBAImage({width:d,height:_},new Uint8Array(f)),pixelRatio:r,stretchX:n,stretchY:s,content:l,sdf:a,version:0,userImage:m}),m.onAdd&&m.onAdd(this,e);}},r.prototype.updateImage=function(e,i){var o=this.style.getImage(e);if(!o)return this.fire(new t.ErrorEvent(new Error("The map has no image with that id. If you are adding a new image use `map.addImage(...)` instead.")));var r=i instanceof No?t.browser.getImageData(i):i,a=r.width,n=r.height,s=r.data;if(void 0===a||void 0===n)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.updateImage(). The second argument must be an `HTMLImageElement`, `ImageData`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")));if(a!==o.data.width||n!==o.data.height)return this.fire(new t.ErrorEvent(new Error("The width and height of the updated image must be that same as the previous version of the image")));var l=!(i instanceof No);o.data.replace(s,l),this.style.updateImage(e,o);},r.prototype.hasImage=function(e){return e?!!this.style.getImage(e):(this.fire(new t.ErrorEvent(new Error("Missing required image id"))),!1)},r.prototype.removeImage=function(t){this.style.removeImage(t);},r.prototype.loadImage=function(e,i){t.getImage(this._requestManager.transformRequest(e,t.ResourceType.Image),i);},r.prototype.listImages=function(){return this.style.listImages()},r.prototype.addLayer=function(t,e){return this._lazyInitEmptyStyle(),this.style.addLayer(t,e),this._update(!0)},r.prototype.moveLayer=function(t,e){return this.style.moveLayer(t,e),this._update(!0)},r.prototype.removeLayer=function(t){return this.style.removeLayer(t),this._update(!0)},r.prototype.getLayer=function(t){return this.style.getLayer(t)},r.prototype.setLayerZoomRange=function(t,e,i){return this.style.setLayerZoomRange(t,e,i),this._update(!0)},r.prototype.setFilter=function(t,e,i){return void 0===i&&(i={}),this.style.setFilter(t,e,i),this._update(!0)},r.prototype.getFilter=function(t){return this.style.getFilter(t)},r.prototype.setPaintProperty=function(t,e,i,o){return void 0===o&&(o={}),this.style.setPaintProperty(t,e,i,o),this._update(!0)},r.prototype.getPaintProperty=function(t,e){return this.style.getPaintProperty(t,e)},r.prototype.setLayoutProperty=function(t,e,i,o){return void 0===o&&(o={}),this.style.setLayoutProperty(t,e,i,o),this._update(!0)},r.prototype.getLayoutProperty=function(t,e){return this.style.getLayoutProperty(t,e)},r.prototype.setLight=function(t,e){return void 0===e&&(e={}),this._lazyInitEmptyStyle(),this.style.setLight(t,e),this._update(!0)},r.prototype.getLight=function(){return this.style.getLight()},r.prototype.setFeatureState=function(t,e){return this.style.setFeatureState(t,e),this._update()},r.prototype.removeFeatureState=function(t,e){return this.style.removeFeatureState(t,e),this._update()},r.prototype.getFeatureState=function(t){return this.style.getFeatureState(t)},r.prototype.getContainer=function(){return this._container},r.prototype.getCanvasContainer=function(){return this._canvasContainer},r.prototype.getCanvas=function(){return this._canvas},r.prototype._containerDimensions=function(){var t=0,e=0;return this._container&&(t=this._container.clientWidth||400,e=this._container.clientHeight||300),[t,e]},r.prototype._detectMissingCSS=function(){"rgb(250, 128, 114)"!==t.window.getComputedStyle(this._missingCSSCanary).getPropertyValue("background-color")&&t.warnOnce("This page appears to be missing CSS declarations for Mapbox GL JS, which may cause the map to display incorrectly. Please ensure your page includes mapbox-gl.css, as described in https://www.mapbox.com/mapbox-gl-js/api/.");},r.prototype._setupContainer=function(){var t=this._container;t.classList.add("goongjs-map"),(this._missingCSSCanary=i.create("div","goongjs-canary",t)).style.visibility="hidden",this._detectMissingCSS();var e=this._canvasContainer=i.create("div","goongjs-canvas-container",t);this._interactive&&e.classList.add("goongjs-interactive"),this._canvas=i.create("canvas","goongjs-canvas",e),this._canvas.style.position="absolute",this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map");var o=this._containerDimensions();this._resizeCanvas(o[0],o[1]);var r=this._controlContainer=i.create("div","goongjs-control-container",t),a=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach((function(t){a[t]=i.create("div","goongjs-ctrl-"+t,r);}));},r.prototype._resizeCanvas=function(e,i){var o=t.browser.devicePixelRatio||1;this._canvas.width=o*e,this._canvas.height=o*i,this._canvas.style.width=e+"px",this._canvas.style.height=i+"px";},r.prototype._setupPainter=function(){var i=t.extend({},e.webGLContextAttributes,{failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer,antialias:this._antialias||!1}),o=this._canvas.getContext("webgl",i)||this._canvas.getContext("experimental-webgl",i);o?(this.painter=new po(o,this.transform),t.webpSupported.testSupport(o)):this.fire(new t.ErrorEvent(new Error("Failed to initialize WebGL")));},r.prototype._contextLost=function(e){e.preventDefault(),this._frame&&(this._frame.cancel(),this._frame=null),this.fire(new t.Event("webglcontextlost",{originalEvent:e}));},r.prototype._contextRestored=function(e){this._setupPainter(),this.resize(),this._update(),this.fire(new t.Event("webglcontextrestored",{originalEvent:e}));},r.prototype.loaded=function(){return !this._styleDirty&&!this._sourcesDirty&&!!this.style&&this.style.loaded()},r.prototype._update=function(t){return this.style?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this.triggerRepaint(),this):this},r.prototype._requestRenderFrame=function(t){return this._update(),this._renderTaskQueue.add(t)},r.prototype._cancelRenderFrame=function(t){this._renderTaskQueue.remove(t);},r.prototype._render=function(){var e,i=this,o=0,r=this.painter.context.extTimerQuery;this.listens("gpu-timing-frame")&&(e=r.createQueryEXT(),r.beginQueryEXT(r.TIME_ELAPSED_EXT,e),o=t.browser.now()),this.painter.context.setDirty(),this.painter.setBaseState(),this._renderTaskQueue.run();var a=!1;if(this.style&&this._styleDirty){this._styleDirty=!1;var n=this.transform.zoom,s=t.browser.now();this.style.zoomHistory.update(n,s);var l=new t.EvaluationParameters(n,{now:s,fadeDuration:this._fadeDuration,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),c=l.crossFadingFactor();1===c&&c===this._crossFadingFactor||(a=!0,this._crossFadingFactor=c),this.style.update(l);}if(this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,this._fadeDuration,this._crossSourceCollisions),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.isRotating(),zooming:this.isZooming(),moving:this.isMoving(),gpuTiming:!!this.listens("gpu-timing-layer"),fadeDuration:this._fadeDuration}),this.fire(new t.Event("render")),this.loaded()&&!this._loaded&&(this._loaded=!0,this.fire(new t.Event("load"))),this.style&&(this.style.hasTransitions()||a)&&(this._styleDirty=!0),this.style&&!this._placementDirty&&this.style._releaseSymbolFadeTiles(),this.listens("gpu-timing-frame")){var u=t.browser.now()-o;r.endQueryEXT(r.TIME_ELAPSED_EXT,e),setTimeout((function(){var o=r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)/1e6;r.deleteQueryEXT(e),i.fire(new t.Event("gpu-timing-frame",{cpuTime:u,gpuTime:o}));}),50);}if(this.listens("gpu-timing-layer")){var h=this.painter.collectGpuTimers();setTimeout((function(){var e=i.painter.queryGpuTimers(h);i.fire(new t.Event("gpu-timing-layer",{layerTimes:e}));}),50);}return this._sourcesDirty||this._styleDirty||this._placementDirty||this._repaint?this.triggerRepaint():!this.isMoving()&&this.loaded()&&(this._fullyLoaded||(this._fullyLoaded=!0),this.fire(new t.Event("idle"))),this},r.prototype.remove=function(){this._hash&&this._hash.remove();for(var e=0,i=this._controls;e<i.length;e+=1){i[e].onRemove(this);}this._controls=[],this._frame&&(this._frame.cancel(),this._frame=null),this._renderTaskQueue.clear(),this.setStyle(null),void 0!==t.window&&(t.window.removeEventListener("resize",this._onWindowResize,!1),t.window.removeEventListener("online",this._onWindowOnline,!1));var o=this.painter.context.gl.getExtension("WEBGL_lose_context");o&&o.loseContext(),Wo(this._canvasContainer),Wo(this._controlContainer),Wo(this._missingCSSCanary),this._container.classList.remove("goongjs-map"),this.fire(new t.Event("remove"));},r.prototype.triggerRepaint=function(){var e=this;this.style&&!this._frame&&(this._frame=t.browser.frame((function(t){e._frame=null,e._render();})));},r.prototype._onWindowOnline=function(){this._update();},r.prototype._onWindowResize=function(t){this._trackResize&&this.resize({originalEvent:t})._update();},a.showTileBoundaries.get=function(){return !!this._showTileBoundaries},a.showTileBoundaries.set=function(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update());},a.showCollisionBoxes.get=function(){return !!this._showCollisionBoxes},a.showCollisionBoxes.set=function(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update());},a.showOverdrawInspector.get=function(){return !!this._showOverdrawInspector},a.showOverdrawInspector.set=function(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update());},a.repaint.get=function(){return !!this._repaint},a.repaint.set=function(t){this._repaint!==t&&(this._repaint=t,this.triggerRepaint());},a.vertices.get=function(){return !!this._vertices},a.vertices.set=function(t){this._vertices=t,this._update();},r.prototype._setCacheLimits=function(e,i){t.setCacheLimits(e,i);},a.version.get=function(){return t.version},Object.defineProperties(r.prototype,a),r}(ko);function Wo(t){t.parentNode&&t.parentNode.removeChild(t);}var Xo={showCompass:!0,showZoom:!0,visualizePitch:!1},Ho=function(e){var o=this;this.options=t.extend({},Xo,e),this._container=i.create("div","goongjs-ctrl goongjs-ctrl-group"),this._container.addEventListener("contextmenu",(function(t){return t.preventDefault()})),this.options.showZoom&&(t.bindAll(["_setButtonTitle","_updateZoomButtons"],this),this._zoomInButton=this._createButton("goongjs-ctrl-zoom-in",(function(t){return o._map.zoomIn({},{originalEvent:t})})),i.create("span","goongjs-ctrl-icon",this._zoomInButton).setAttribute("aria-hidden",!0),this._zoomOutButton=this._createButton("goongjs-ctrl-zoom-out",(function(t){return o._map.zoomOut({},{originalEvent:t})})),i.create("span","goongjs-ctrl-icon",this._zoomOutButton).setAttribute("aria-hidden",!0)),this.options.showCompass&&(t.bindAll(["_rotateCompassArrow"],this),this._compass=this._createButton("goongjs-ctrl-compass",(function(t){o.options.visualizePitch?o._map.resetNorthPitch({},{originalEvent:t}):o._map.resetNorth({},{originalEvent:t});})),this._compassIcon=i.create("span","goongjs-ctrl-icon",this._compass),this._compassIcon.setAttribute("aria-hidden",!0));};function Ko(e,i,o){if(e=new t.LngLat(e.lng,e.lat),i){var r=new t.LngLat(e.lng-360,e.lat),a=new t.LngLat(e.lng+360,e.lat),n=o.locationPoint(e).distSqr(i);o.locationPoint(r).distSqr(i)<n?e=r:o.locationPoint(a).distSqr(i)<n&&(e=a);}for(;Math.abs(e.lng-o.center.lng)>180;){var s=o.locationPoint(e);if(s.x>=0&&s.y>=0&&s.x<=o.width&&s.y<=o.height)break;e.lng>o.center.lng?e.lng-=360:e.lng+=360;}return e}Ho.prototype._updateZoomButtons=function(){var t=this._map.getZoom();this._zoomInButton.disabled=t===this._map.getMaxZoom(),this._zoomOutButton.disabled=t===this._map.getMinZoom();},Ho.prototype._rotateCompassArrow=function(){var t=this.options.visualizePitch?"scale("+1/Math.pow(Math.cos(this._map.transform.pitch*(Math.PI/180)),.5)+") rotateX("+this._map.transform.pitch+"deg) rotateZ("+this._map.transform.angle*(180/Math.PI)+"deg)":"rotate("+this._map.transform.angle*(180/Math.PI)+"deg)";this._compassIcon.style.transform=t;},Ho.prototype.onAdd=function(t){return this._map=t,this.options.showZoom&&(this._setButtonTitle(this._zoomInButton,"ZoomIn"),this._setButtonTitle(this._zoomOutButton,"ZoomOut"),this._map.on("zoom",this._updateZoomButtons),this._updateZoomButtons()),this.options.showCompass&&(this._setButtonTitle(this._compass,"ResetBearing"),this.options.visualizePitch&&this._map.on("pitch",this._rotateCompassArrow),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new Co(t,{button:"left",element:this._compass}),i.addEventListener(this._compass,"mousedown",this._handler.onMouseDown),i.addEventListener(this._compass,"touchstart",this._handler.onMouseDown,{passive:!1}),this._handler.enable()),this._container},Ho.prototype.onRemove=function(){i.remove(this._container),this.options.showZoom&&this._map.off("zoom",this._updateZoomButtons),this.options.showCompass&&(this.options.visualizePitch&&this._map.off("pitch",this._rotateCompassArrow),this._map.off("rotate",this._rotateCompassArrow),i.removeEventListener(this._compass,"mousedown",this._handler.onMouseDown),i.removeEventListener(this._compass,"touchstart",this._handler.onMouseDown,{passive:!1}),this._handler.disable(),delete this._handler),delete this._map;},Ho.prototype._createButton=function(t,e){var o=i.create("button",t,this._container);return o.type="button",o.addEventListener("click",e),o},Ho.prototype._setButtonTitle=function(t,e){var i=this._map._getUIString("NavigationControl."+e);t.title=i,t.setAttribute("aria-label",i);};var Yo={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"};function Jo(t,e,i){var o=t.classList;for(var r in Yo)o.remove("goongjs-"+i+"-anchor-"+r);o.add("goongjs-"+i+"-anchor-"+e);}var Qo,$o=function(e){function o(o,r){var a=this;if(e.call(this),(o instanceof t.window.HTMLElement||r)&&(o=t.extend({element:o},r)),t.bindAll(["_update","_onMove","_onUp","_addDragHandler","_onMapClick","_onKeyPress"],this),this._anchor=o&&o.anchor||"center",this._color=o&&o.color||"#3FB1CE",this._draggable=o&&o.draggable||!1,this._state="inactive",this._rotation=o&&o.rotation||0,this._rotationAlignment=o&&o.rotationAlignment||"auto",this._pitchAlignment=o&&o.pitchAlignment&&"auto"!==o.pitchAlignment?o.pitchAlignment:this._rotationAlignment,o&&o.element)this._element=o.element,this._offset=t.Point.convert(o&&o.offset||[0,0]);else{this._defaultMarker=!0,this._element=i.create("div"),this._element.setAttribute("aria-label","Map marker");var n=i.createNS("http://www.w3.org/2000/svg","svg");n.setAttributeNS(null,"display","block"),n.setAttributeNS(null,"height","41px"),n.setAttributeNS(null,"width","27px"),n.setAttributeNS(null,"viewBox","0 0 27 41");var s=i.createNS("http://www.w3.org/2000/svg","g");s.setAttributeNS(null,"stroke","none"),s.setAttributeNS(null,"stroke-width","1"),s.setAttributeNS(null,"fill","none"),s.setAttributeNS(null,"fill-rule","evenodd");var l=i.createNS("http://www.w3.org/2000/svg","g");l.setAttributeNS(null,"fill-rule","nonzero");var c=i.createNS("http://www.w3.org/2000/svg","g");c.setAttributeNS(null,"transform","translate(3.0, 29.0)"),c.setAttributeNS(null,"fill","#000000");for(var u=0,h=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}];u<h.length;u+=1){var p=h[u],d=i.createNS("http://www.w3.org/2000/svg","ellipse");d.setAttributeNS(null,"opacity","0.04"),d.setAttributeNS(null,"cx","10.5"),d.setAttributeNS(null,"cy","5.80029008"),d.setAttributeNS(null,"rx",p.rx),d.setAttributeNS(null,"ry",p.ry),c.appendChild(d);}var _=i.createNS("http://www.w3.org/2000/svg","g");_.setAttributeNS(null,"fill",this._color);var f=i.createNS("http://www.w3.org/2000/svg","path");f.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),_.appendChild(f);var m=i.createNS("http://www.w3.org/2000/svg","g");m.setAttributeNS(null,"opacity","0.25"),m.setAttributeNS(null,"fill","#000000");var g=i.createNS("http://www.w3.org/2000/svg","path");g.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),m.appendChild(g);var v=i.createNS("http://www.w3.org/2000/svg","g");v.setAttributeNS(null,"transform","translate(6.0, 7.0)"),v.setAttributeNS(null,"fill","#FFFFFF");var y=i.createNS("http://www.w3.org/2000/svg","g");y.setAttributeNS(null,"transform","translate(8.0, 8.0)");var x=i.createNS("http://www.w3.org/2000/svg","circle");x.setAttributeNS(null,"fill","#000000"),x.setAttributeNS(null,"opacity","0.25"),x.setAttributeNS(null,"cx","5.5"),x.setAttributeNS(null,"cy","5.5"),x.setAttributeNS(null,"r","5.4999962");var b=i.createNS("http://www.w3.org/2000/svg","circle");b.setAttributeNS(null,"fill","#FFFFFF"),b.setAttributeNS(null,"cx","5.5"),b.setAttributeNS(null,"cy","5.5"),b.setAttributeNS(null,"r","5.4999962"),y.appendChild(x),y.appendChild(b),l.appendChild(c),l.appendChild(_),l.appendChild(m),l.appendChild(v),l.appendChild(y),n.appendChild(l),this._element.appendChild(n),this._offset=t.Point.convert(o&&o.offset||[0,-14]);}this._element.classList.add("goongjs-marker"),this._element.addEventListener("dragstart",(function(t){t.preventDefault();})),this._element.addEventListener("mousedown",(function(t){t.preventDefault();})),this._element.addEventListener("focus",(function(){var t=a._map.getContainer();t.scrollTop=0,t.scrollLeft=0;})),Jo(this._element,this._anchor,"marker"),this._popup=null;}return e&&(o.__proto__=e),o.prototype=Object.create(e&&e.prototype),o.prototype.constructor=o,o.prototype.addTo=function(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this.setDraggable(this._draggable),this._update(),this._map.on("click",this._onMapClick),this},o.prototype.remove=function(){return this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler),this._map.off("mouseup",this._onUp),this._map.off("touchend",this._onUp),this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),delete this._map),i.remove(this._element),this._popup&&this._popup.remove(),this},o.prototype.getLngLat=function(){return this._lngLat},o.prototype.setLngLat=function(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this},o.prototype.getElement=function(){return this._element},o.prototype.setPopup=function(t){if(this._popup&&(this._popup.remove(),this._popup=null,this._element.removeEventListener("keypress",this._onKeyPress),this._originalTabIndex||this._element.removeAttribute("tabindex")),t){if(!("offset"in t.options)){var e=Math.sqrt(Math.pow(13.5,2)/2);t.options.offset=this._defaultMarker?{top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-38.1],"bottom-left":[e,-1*(24.6+e)],"bottom-right":[-e,-1*(24.6+e)],left:[13.5,-24.6],right:[-13.5,-24.6]}:this._offset;}this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat),this._originalTabIndex=this._element.getAttribute("tabindex"),this._originalTabIndex||this._element.setAttribute("tabindex","0"),this._element.addEventListener("keypress",this._onKeyPress);}return this},o.prototype._onKeyPress=function(t){var e=t.code,i=t.charCode||t.keyCode;"Space"!==e&&"Enter"!==e&&32!==i&&13!==i||this.togglePopup();},o.prototype._onMapClick=function(t){var e=t.originalEvent.target,i=this._element;this._popup&&(e===i||i.contains(e))&&this.togglePopup();},o.prototype.getPopup=function(){return this._popup},o.prototype.togglePopup=function(){var t=this._popup;return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this},o.prototype._update=function(t){if(this._map){this._map.transform.renderWorldCopies&&(this._lngLat=Ko(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset);var e="";"viewport"===this._rotationAlignment||"auto"===this._rotationAlignment?e="rotateZ("+this._rotation+"deg)":"map"===this._rotationAlignment&&(e="rotateZ("+(this._rotation-this._map.getBearing())+"deg)");var o="";"viewport"===this._pitchAlignment||"auto"===this._pitchAlignment?o="rotateX(0deg)":"map"===this._pitchAlignment&&(o="rotateX("+this._map.getPitch()+"deg)"),t&&"moveend"!==t.type||(this._pos=this._pos.round()),i.setTransform(this._element,Yo[this._anchor]+" translate("+this._pos.x+"px, "+this._pos.y+"px) "+o+" "+e);}},o.prototype.getOffset=function(){return this._offset},o.prototype.setOffset=function(e){return this._offset=t.Point.convert(e),this._update(),this},o.prototype._onMove=function(e){this._pos=e.point.sub(this._positionDelta),this._lngLat=this._map.unproject(this._pos),this.setLngLat(this._lngLat),this._element.style.pointerEvents="none","pending"===this._state&&(this._state="active",this.fire(new t.Event("dragstart"))),this.fire(new t.Event("drag"));},o.prototype._onUp=function(){this._element.style.pointerEvents="auto",this._positionDelta=null,this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),"active"===this._state&&this.fire(new t.Event("dragend")),this._state="inactive";},o.prototype._addDragHandler=function(t){this._element.contains(t.originalEvent.target)&&(t.preventDefault(),this._positionDelta=t.point.sub(this._pos).add(this._offset),this._state="pending",this._map.on("mousemove",this._onMove),this._map.on("touchmove",this._onMove),this._map.once("mouseup",this._onUp),this._map.once("touchend",this._onUp));},o.prototype.setDraggable=function(t){return this._draggable=!!t,this._map&&(t?(this._map.on("mousedown",this._addDragHandler),this._map.on("touchstart",this._addDragHandler)):(this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler))),this},o.prototype.isDraggable=function(){return this._draggable},o.prototype.setRotation=function(t){return this._rotation=t||0,this._update(),this},o.prototype.getRotation=function(){return this._rotation},o.prototype.setRotationAlignment=function(t){return this._rotationAlignment=t||"auto",this._update(),this},o.prototype.getRotationAlignment=function(){return this._rotationAlignment},o.prototype.setPitchAlignment=function(t){return this._pitchAlignment=t&&"auto"!==t?t:this._rotationAlignment,this._update(),this},o.prototype.getPitchAlignment=function(){return this._pitchAlignment},o}(t.Evented),tr={positionOptions:{enableHighAccuracy:!1,maximumAge:0,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showUserLocation:!0};var er=function(e){function o(i){e.call(this),this.options=t.extend({},tr,i),t.bindAll(["_onSuccess","_onError","_finish","_setupUI","_updateCamera","_updateMarker"],this);}return e&&(o.__proto__=e),o.prototype=Object.create(e&&e.prototype),o.prototype.constructor=o,o.prototype.onAdd=function(e){var o;return this._map=e,this._container=i.create("div","goongjs-ctrl goongjs-ctrl-group"),o=this._setupUI,void 0!==Qo?o(Qo):void 0!==t.window.navigator.permissions?t.window.navigator.permissions.query({name:"geolocation"}).then((function(t){Qo="denied"!==t.state,o(Qo);})):(Qo=!!t.window.navigator.geolocation,o(Qo)),this._container},o.prototype.onRemove=function(){void 0!==this._geolocationWatchID&&(t.window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker&&this._userLocationDotMarker.remove(),i.remove(this._container),this._map=void 0;},o.prototype._isOutOfMapMaxBounds=function(t){var e=this._map.getMaxBounds(),i=t.coords;return e&&(i.longitude<e.getWest()||i.longitude>e.getEast()||i.latitude<e.getSouth()||i.latitude>e.getNorth())},o.prototype._setErrorState=function(){switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-active"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-active-error");break;case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-active"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-waiting");break;case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-background"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-waiting");}},o.prototype._onSuccess=function(e){if(this._isOutOfMapMaxBounds(e))return this._setErrorState(),this.fire(new t.Event("outofmaxbounds",e)),this._updateMarker(),void this._finish();if(this.options.trackUserLocation)switch(this._lastKnownPosition=e,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-active");break;case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-background");}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(e),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(e),this.options.showUserLocation&&this._dotElement.classList.remove("goongjs-user-location-dot-stale"),this.fire(new t.Event("geolocate",e)),this._finish();},o.prototype._updateCamera=function(e){var i=new t.LngLat(e.coords.longitude,e.coords.latitude),o=e.coords.accuracy,r=this._map.getBearing(),a=t.extend({bearing:r},this.options.fitBoundsOptions);this._map.fitBounds(i.toBounds(o),a,{geolocateSource:!0});},o.prototype._updateMarker=function(t){t?this._userLocationDotMarker.setLngLat([t.coords.longitude,t.coords.latitude]).addTo(this._map):this._userLocationDotMarker.remove();},o.prototype._onError=function(e){if(this.options.trackUserLocation)if(1===e.code){this._watchState="OFF",this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-active"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-background"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-background-error"),this._geolocateButton.disabled=!0;var i=this._map._getUIString("GeolocateControl.LocationNotAvailable");this._geolocateButton.title=i,this._geolocateButton.setAttribute("aria-label",i),void 0!==this._geolocationWatchID&&this._clearWatch();}else this._setErrorState();"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("goongjs-user-location-dot-stale"),this.fire(new t.Event("error",e)),this._finish();},o.prototype._finish=function(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0;},o.prototype._setupUI=function(e){var o=this;if(this._container.addEventListener("contextmenu",(function(t){return t.preventDefault()})),this._geolocateButton=i.create("button","goongjs-ctrl-geolocate",this._container),i.create("span","goongjs-ctrl-icon",this._geolocateButton).setAttribute("aria-hidden",!0),this._geolocateButton.type="button",!1===e){t.warnOnce("Geolocation support is not available so the GeolocateControl will be disabled.");var r=this._map._getUIString("GeolocateControl.LocationNotAvailable");this._geolocateButton.disabled=!0,this._geolocateButton.title=r,this._geolocateButton.setAttribute("aria-label",r);}else{var a=this._map._getUIString("GeolocateControl.FindMyLocation");this._geolocateButton.title=a,this._geolocateButton.setAttribute("aria-label",a);}this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=i.create("div","goongjs-user-location-dot"),this._userLocationDotMarker=new $o(this._dotElement),this.options.trackUserLocation&&(this._watchState="OFF")),this._geolocateButton.addEventListener("click",this.trigger.bind(this)),this._setup=!0,this.options.trackUserLocation&&this._map.on("movestart",(function(e){var i=e.originalEvent&&"resize"===e.originalEvent.type;e.geolocateSource||"ACTIVE_LOCK"!==o._watchState||i||(o._watchState="BACKGROUND",o._geolocateButton.classList.add("goongjs-ctrl-geolocate-background"),o._geolocateButton.classList.remove("goongjs-ctrl-geolocate-active"),o.fire(new t.Event("trackuserlocationend")));}));},o.prototype.trigger=function(){if(!this._setup)return t.warnOnce("Geolocate control triggered before added to a map"),!1;if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire(new t.Event("trackuserlocationstart"));break;case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":this._watchState="OFF",this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-active"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-background"),this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-background-error"),this.fire(new t.Event("trackuserlocationend"));break;case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire(new t.Event("trackuserlocationstart"));}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-active");break;case"ACTIVE_LOCK":this._geolocateButton.classList.add("goongjs-ctrl-geolocate-active");break;case"ACTIVE_ERROR":this._geolocateButton.classList.add("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-active-error");break;case"BACKGROUND":this._geolocateButton.classList.add("goongjs-ctrl-geolocate-background");break;case"BACKGROUND_ERROR":this._geolocateButton.classList.add("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("goongjs-ctrl-geolocate-background-error");}"OFF"===this._watchState&&void 0!==this._geolocationWatchID?this._clearWatch():void 0===this._geolocationWatchID&&(this._geolocateButton.classList.add("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),this._geolocationWatchID=t.window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,this.options.positionOptions));}else t.window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4);return !0},o.prototype._clearWatch=function(){t.window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("goongjs-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null);},o}(t.Evented),ir={maxWidth:100,unit:"metric"},or=function(e){this.options=t.extend({},ir,e),t.bindAll(["_onMove","setUnit"],this);};function rr(t,e,i){var o,r,a,n,s,l,c=i&&i.maxWidth||100,u=t._container.clientHeight/2,h=(o=t.unproject([0,u]),r=t.unproject([c,u]),a=Math.PI/180,n=o.lat*a,s=r.lat*a,l=Math.sin(n)*Math.sin(s)+Math.cos(n)*Math.cos(s)*Math.cos((r.lng-o.lng)*a),6371e3*Math.acos(Math.min(l,1)));if(i&&"imperial"===i.unit){var p=3.2808*h;if(p>5280)ar(e,c,p/5280,t._getUIString("ScaleControl.Miles"));else ar(e,c,p,t._getUIString("ScaleControl.Feet"));}else if(i&&"nautical"===i.unit){ar(e,c,h/1852,t._getUIString("ScaleControl.NauticalMiles"));}else h>=1e3?ar(e,c,h/1e3,t._getUIString("ScaleControl.Kilometers")):ar(e,c,h,t._getUIString("ScaleControl.Meters"));}function ar(t,e,i,o){var r,a,n,s=(r=i,a=Math.pow(10,(""+Math.floor(r)).length-1),n=(n=r/a)>=10?10:n>=5?5:n>=3?3:n>=2?2:n>=1?1:function(t){var e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10));return Math.round(t*e)/e}(n),a*n),l=s/i;t.style.width=e*l+"px",t.innerHTML=s+o;}or.prototype.getDefaultPosition=function(){return "bottom-left"},or.prototype._onMove=function(){rr(this._map,this._container,this.options);},or.prototype.onAdd=function(t){return this._map=t,this._container=i.create("div","goongjs-ctrl goongjs-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container},or.prototype.onRemove=function(){i.remove(this._container),this._map.off("move",this._onMove),this._map=void 0;},or.prototype.setUnit=function(t){this.options.unit=t,rr(this._map,this._container,this.options);};var nr=function(e){this._fullscreen=!1,e&&e.container&&(e.container instanceof t.window.HTMLElement?this._container=e.container:t.warnOnce("Full screen control 'container' must be a DOM element.")),t.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in t.window.document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in t.window.document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in t.window.document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in t.window.document&&(this._fullscreenchange="MSFullscreenChange");};nr.prototype.onAdd=function(e){return this._map=e,this._container||(this._container=this._map.getContainer()),this._controlContainer=i.create("div","goongjs-ctrl goongjs-ctrl-group"),this._checkFullscreenSupport()?this._setupUI():(this._controlContainer.style.display="none",t.warnOnce("This device does not support fullscreen mode.")),this._controlContainer},nr.prototype.onRemove=function(){i.remove(this._controlContainer),this._map=null,t.window.document.removeEventListener(this._fullscreenchange,this._changeIcon);},nr.prototype._checkFullscreenSupport=function(){return !!(t.window.document.fullscreenEnabled||t.window.document.mozFullScreenEnabled||t.window.document.msFullscreenEnabled||t.window.document.webkitFullscreenEnabled)},nr.prototype._setupUI=function(){var e=this._fullscreenButton=i.create("button","goongjs-ctrl-fullscreen",this._controlContainer);i.create("span","goongjs-ctrl-icon",e).setAttribute("aria-hidden",!0),e.type="button",this._updateTitle(),this._fullscreenButton.addEventListener("click",this._onClickFullscreen),t.window.document.addEventListener(this._fullscreenchange,this._changeIcon);},nr.prototype._updateTitle=function(){var t=this._getTitle();this._fullscreenButton.setAttribute("aria-label",t),this._fullscreenButton.title=t;},nr.prototype._getTitle=function(){return this._map._getUIString(this._isFullscreen()?"FullscreenControl.Exit":"FullscreenControl.Enter")},nr.prototype._isFullscreen=function(){return this._fullscreen},nr.prototype._changeIcon=function(){(t.window.document.fullscreenElement||t.window.document.mozFullScreenElement||t.window.document.webkitFullscreenElement||t.window.document.msFullscreenElement)===this._container!==this._fullscreen&&(this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle("goongjs-ctrl-shrink"),this._fullscreenButton.classList.toggle("goongjs-ctrl-fullscreen"),this._updateTitle());},nr.prototype._onClickFullscreen=function(){this._isFullscreen()?t.window.document.exitFullscreen?t.window.document.exitFullscreen():t.window.document.mozCancelFullScreen?t.window.document.mozCancelFullScreen():t.window.document.msExitFullscreen?t.window.document.msExitFullscreen():t.window.document.webkitCancelFullScreen&&t.window.document.webkitCancelFullScreen():this._container.requestFullscreen?this._container.requestFullscreen():this._container.mozRequestFullScreen?this._container.mozRequestFullScreen():this._container.msRequestFullscreen?this._container.msRequestFullscreen():this._container.webkitRequestFullscreen&&this._container.webkitRequestFullscreen();};var sr={closeButton:!0,closeOnClick:!0,className:"",maxWidth:"240px"},lr=function(e){function o(i){e.call(this),this.options=t.extend(Object.create(sr),i),t.bindAll(["_update","_onClickClose","remove"],this);}return e&&(o.__proto__=e),o.prototype=Object.create(e&&e.prototype),o.prototype.constructor=o,o.prototype.addTo=function(e){var i=this;return this._map=e,this.options.closeOnClick&&this._map.on("click",this._onClickClose),this._map.on("remove",this.remove),this._update(),this._trackPointer?(this._map.on("mousemove",(function(t){i._update(t.point);})),this._map.on("mouseup",(function(t){i._update(t.point);})),this._container&&this._container.classList.add("goongjs-popup-track-pointer"),this._map._canvasContainer.classList.add("goongjs-track-pointer")):this._map.on("move",this._update),this.fire(new t.Event("open")),this},o.prototype.isOpen=function(){return !!this._map},o.prototype.remove=function(){return this._content&&i.remove(this._content),this._container&&(i.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("click",this._onClickClose),this._map.off("remove",this.remove),this._map.off("mousemove"),delete this._map),this.fire(new t.Event("close")),this},o.prototype.getLngLat=function(){return this._lngLat},o.prototype.setLngLat=function(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._trackPointer=!1,this._update(),this._map&&(this._map.on("move",this._update),this._map.off("mousemove"),this._container&&this._container.classList.remove("goongjs-popup-track-pointer"),this._map._canvasContainer.classList.remove("goongjs-track-pointer")),this},o.prototype.trackPointer=function(){var t=this;return this._trackPointer=!0,this._pos=null,this._update(),this._map&&(this._map.off("move",this._update),this._map.on("mousemove",(function(e){t._update(e.point);})),this._map.on("drag",(function(e){t._update(e.point);})),this._container&&this._container.classList.add("goongjs-popup-track-pointer"),this._map._canvasContainer.classList.add("goongjs-track-pointer")),this},o.prototype.getElement=function(){return this._container},o.prototype.setText=function(e){return this.setDOMContent(t.window.document.createTextNode(e))},o.prototype.setHTML=function(e){var i,o=t.window.document.createDocumentFragment(),r=t.window.document.createElement("body");for(r.innerHTML=e;i=r.firstChild;)o.appendChild(i);return this.setDOMContent(o)},o.prototype.getMaxWidth=function(){return this._container.style.maxWidth},o.prototype.setMaxWidth=function(t){return this.options.maxWidth=t,this._update(),this},o.prototype.setDOMContent=function(t){return this._createContent(),this._content.appendChild(t),this._update(),this},o.prototype.addClassName=function(t){this._container.classList.add(t);},o.prototype.removeClassName=function(t){this._container.classList.remove(t);},o.prototype.toggleClassName=function(t){return this._container.classList.toggle(t)},o.prototype._createContent=function(){this._content&&i.remove(this._content),this._content=i.create("div","goongjs-popup-content",this._container),this.options.closeButton&&(this._closeButton=i.create("button","goongjs-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClickClose));},o.prototype._update=function(e){var o=this,r=this._lngLat||this._trackPointer;if(this._map&&r&&this._content&&(this._container||(this._container=i.create("div","goongjs-popup",this._map.getContainer()),this._tip=i.create("div","goongjs-popup-tip",this._container),this._container.appendChild(this._content),this.options.className&&this.options.className.split(" ").forEach((function(t){return o._container.classList.add(t)})),this._trackPointer&&this._container.classList.add("goongjs-popup-track-pointer")),this.options.maxWidth&&this._container.style.maxWidth!==this.options.maxWidth&&(this._container.style.maxWidth=this.options.maxWidth),this._map.transform.renderWorldCopies&&!this._trackPointer&&(this._lngLat=Ko(this._lngLat,this._pos,this._map.transform)),!this._trackPointer||e)){var a=this._pos=this._trackPointer&&e?e:this._map.project(this._lngLat),n=this.options.anchor,s=function e(i){if(i){if("number"==typeof i){var o=Math.round(Math.sqrt(.5*Math.pow(i,2)));return {center:new t.Point(0,0),top:new t.Point(0,i),"top-left":new t.Point(o,o),"top-right":new t.Point(-o,o),bottom:new t.Point(0,-i),"bottom-left":new t.Point(o,-o),"bottom-right":new t.Point(-o,-o),left:new t.Point(i,0),right:new t.Point(-i,0)}}if(i instanceof t.Point||Array.isArray(i)){var r=t.Point.convert(i);return {center:r,top:r,"top-left":r,"top-right":r,bottom:r,"bottom-left":r,"bottom-right":r,left:r,right:r}}return {center:t.Point.convert(i.center||[0,0]),top:t.Point.convert(i.top||[0,0]),"top-left":t.Point.convert(i["top-left"]||[0,0]),"top-right":t.Point.convert(i["top-right"]||[0,0]),bottom:t.Point.convert(i.bottom||[0,0]),"bottom-left":t.Point.convert(i["bottom-left"]||[0,0]),"bottom-right":t.Point.convert(i["bottom-right"]||[0,0]),left:t.Point.convert(i.left||[0,0]),right:t.Point.convert(i.right||[0,0])}}return e(new t.Point(0,0))}(this.options.offset);if(!n){var l,c=this._container.offsetWidth,u=this._container.offsetHeight;l=a.y+s.bottom.y<u?["top"]:a.y>this._map.transform.height-u?["bottom"]:[],a.x<c/2?l.push("left"):a.x>this._map.transform.width-c/2&&l.push("right"),n=0===l.length?"bottom":l.join("-");}var h=a.add(s[n]).round();i.setTransform(this._container,Yo[n]+" translate("+h.x+"px,"+h.y+"px)"),Jo(this._container,n,"popup");}},o.prototype._onClickClose=function(){this.remove();},o}(t.Evented);var cr={version:t.version,supported:e,setRTLTextPlugin:t.setRTLTextPlugin,getRTLTextPluginStatus:t.getRTLTextPluginStatus,Map:Go,NavigationControl:Ho,GeolocateControl:er,AttributionControl:Bo,ScaleControl:or,FullscreenControl:nr,Popup:lr,Marker:$o,Style:je,LngLat:t.LngLat,LngLatBounds:t.LngLatBounds,Point:t.Point,MercatorCoordinate:t.MercatorCoordinate,Evented:t.Evented,config:t.config,get accessToken(){return t.config.ACCESS_TOKEN},set accessToken(e){t.config.ACCESS_TOKEN=e;},get baseApiUrl(){return t.config.API_URL},set baseApiUrl(e){t.config.API_URL=e;},get workerCount(){return kt.workerCount},set workerCount(t){kt.workerCount=t;},get maxParallelImageRequests(){return t.config.MAX_PARALLEL_IMAGE_REQUESTS},set maxParallelImageRequests(e){t.config.MAX_PARALLEL_IMAGE_REQUESTS=e;},clearStorage:function(e){t.clearTileCache(e);},workerUrl:""};return cr}));

//

return goongjs;

})));
//# sourceMappingURL=goong-js.js.map


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var client = __webpack_require__(/*! ./lib/client */ "./node_modules/@goongmaps/goong-sdk/lib/browser/browser-client.js");

module.exports = client;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/browser/browser-client.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/browser/browser-client.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var browser = __webpack_require__(/*! ./browser-layer */ "./node_modules/@goongmaps/goong-sdk/lib/browser/browser-layer.js");
var GAPIClient = __webpack_require__(/*! ../classes/gapi-client */ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-client.js");

function BrowserClient(options) {
  GAPIClient.call(this, options);
}
BrowserClient.prototype = Object.create(GAPIClient.prototype);
BrowserClient.prototype.constructor = BrowserClient;

BrowserClient.prototype.sendRequest = browser.browserSend;
BrowserClient.prototype.abortRequest = browser.browserAbort;

/**
 * Create a client for the browser.
 *
 * @param {Object} options
 * @param {string} options.accessToken
 * @param {string} [options.origin]
 * @returns {GAPIClient}
 */
function createBrowserClient(options) {
  return new BrowserClient(options);
}

module.exports = createBrowserClient;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/browser/browser-layer.js":
/*!************************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/browser/browser-layer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GAPIResponse = __webpack_require__(/*! ../classes/gapi-response */ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-response.js");
var GAPIError = __webpack_require__(/*! ../classes/gapi-error */ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-error.js");
var constants = __webpack_require__(/*! ../constants */ "./node_modules/@goongmaps/goong-sdk/lib/constants.js");
var parseHeaders = __webpack_require__(/*! ../helpers/parse-headers */ "./node_modules/@goongmaps/goong-sdk/lib/helpers/parse-headers.js");

// Keys are request IDs, values are XHRs.
var requestsUnderway = {};

function browserAbort(request) {
  var xhr = requestsUnderway[request.id];
  if (!xhr) return;
  xhr.abort();
  delete requestsUnderway[request.id];
}

function createResponse(request, xhr) {
  return new GAPIResponse(request, {
    body: xhr.response,
    headers: parseHeaders(xhr.getAllResponseHeaders()),
    statusCode: xhr.status
  });
}

function normalizeBrowserProgressEvent(event) {
  var total = event.total;
  var transferred = event.loaded;
  var percent = (100 * transferred) / total;
  return {
    total: total,
    transferred: transferred,
    percent: percent
  };
}

function sendRequestXhr(request, xhr) {
  return new Promise(function(resolve, reject) {
    xhr.onprogress = function(event) {
      request.emitter.emit(
        constants.EVENT_PROGRESS_DOWNLOAD,
        normalizeBrowserProgressEvent(event)
      );
    };

    var file = request.file;
    if (file) {
      xhr.upload.onprogress = function(event) {
        request.emitter.emit(
          constants.EVENT_PROGRESS_UPLOAD,
          normalizeBrowserProgressEvent(event)
        );
      };
    }

    xhr.onerror = function(error) {
      reject(error);
    };

    xhr.onabort = function() {
      var gAPIError = new GAPIError({
        request: request,
        type: constants.ERROR_REQUEST_ABORTED
      });
      reject(gAPIError);
    };

    xhr.onload = function() {
      delete requestsUnderway[request.id];
      if (xhr.status < 200 || xhr.status >= 400) {
        var gAPIError = new GAPIError({
          request: request,
          body: xhr.response,
          statusCode: xhr.status
        });
        reject(gAPIError);
        return;
      }
      resolve(xhr);
    };

    var body = request.body;

    // matching service needs to send a www-form-urlencoded request
    if (typeof body === 'string') {
      xhr.send(body);
    } else if (body) {
      xhr.send(JSON.stringify(body));
    } else if (file) {
      xhr.send(file);
    } else {
      xhr.send();
    }

    requestsUnderway[request.id] = xhr;
  }).then(function(xhr) {
    return createResponse(request, xhr);
  });
}

// The accessToken argument gives this function flexibility
// for Goong's internal client.
function createRequestXhr(request, accessToken) {
  var url = request.url(accessToken);
  var xhr = new window.XMLHttpRequest();
  xhr.open(request.method, url);
  Object.keys(request.headers).forEach(function(key) {
    xhr.setRequestHeader(key, request.headers[key]);
  });
  xhr.timeout = request.timeout;
  return xhr;
}

function browserSend(request) {
  return Promise.resolve().then(function() {
    var xhr = createRequestXhr(request, request.client.accessToken);
    return sendRequestXhr(request, xhr);
  });
}

module.exports = {
  browserAbort: browserAbort,
  sendRequestXhr: sendRequestXhr,
  browserSend: browserSend,
  createRequestXhr: createRequestXhr
};


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-client.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-client.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GAPIRequest = __webpack_require__(/*! ./gapi-request */ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-request.js");
var constants = __webpack_require__(/*! ../constants */ "./node_modules/@goongmaps/goong-sdk/lib/constants.js");

/**
 * A low-level Goong API client. Use it to create service clients
 * that share the same configuration.
 *
 * Services and `GAPIRequest`s use the underlying `GAPIClient` to
 * determine how to create, send, and abort requests in a way
 * that is appropriate to the configuration and environment
 * (Node or the browser).
 *
 * @class GAPIClient
 * @property {string} accessToken - The Goong access token / api key assigned
 *   to this client.
 * @property {string} [origin] - The origin
 *   to use for API requests. Defaults to https://rsapi.goong.io
 */

function GAPIClient(options) {
  if (!options || !options.accessToken) {
    throw new Error('Cannot create a client without an API key');
  }

  this.accessToken = options.accessToken;
  this.origin = options.origin || constants.API_ORIGIN;
}

GAPIClient.prototype.createRequest = function createRequest(requestOptions) {
  return new GAPIRequest(this, requestOptions);
};

module.exports = GAPIClient;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-error.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-error.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__(/*! ../constants */ "./node_modules/@goongmaps/goong-sdk/lib/constants.js");

/**
 * A Goong API error.
 *
 * If there's an error during the API transaction,
 * the Promise returned by `GAPIRequest`'s [`send`](#send)
 * method should reject with a `GAPIError`.
 *
 * @class GAPIError
 * @hideconstructor
 * @property {GAPIRequest} request - The errored request.
 * @property {string} type - The type of error. Usually this is `'HttpError'`.
 *   If the request was aborted, so the error was
 *   not sent from the server, the type will be
 *   `'RequestAbortedError'`.
 * @property {number} [statusCode] - The numeric status code of
 *   the HTTP response.
 * @property {Object | string} [body] - If the server sent a response body,
 *   this property exposes that response, parsed as JSON if possible.
 * @property {string} [message] - Whatever message could be derived from the
 *   call site and HTTP response.
 *
 * @param {GAPIRequest} options.request
 * @param {number} [options.statusCode]
 * @param {string} [options.body]
 * @param {string} [options.message]
 * @param {string} [options.type]
 */
function GAPIError(options) {
  var errorType = options.type || constants.ERROR_HTTP;

  var body;
  if (options.body) {
    try {
      body = JSON.parse(options.body);
    } catch (e) {
      body = options.body;
    }
  } else {
    body = null;
  }

  var message = options.message || null;
  if (!message) {
    if (typeof body === 'string') {
      message = body;
    } else if (body && typeof body.message === 'string') {
      message = body.message;
    } else if (errorType === constants.ERROR_REQUEST_ABORTED) {
      message = 'Request aborted';
    }
  }

  this.message = message;
  this.type = errorType;
  this.statusCode = options.statusCode || null;
  this.request = options.request;
  this.body = body;
}

module.exports = GAPIError;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-request.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-request.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var EventEmitter = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
var urlUtils = __webpack_require__(/*! ../helpers/url-utils */ "./node_modules/@goongmaps/goong-sdk/lib/helpers/url-utils.js");
var constants = __webpack_require__(/*! ../constants */ "./node_modules/@goongmaps/goong-sdk/lib/constants.js");

var requestId = 1;

/**
 * A Goong API request.
 *
 * Note that creating a `GAPIRequest` does *not* send the request automatically.
 * Use the request's `send` method to send it off and get a `Promise`.
 *
 * The `emitter` property is an `EventEmitter` that emits the following events:
 *
 * - `'response'` - Listeners will be called with a `GAPIResponse`.
 * - `'error'` - Listeners will be called with a `GAPIError`.
 * - `'downloadProgress'` - Listeners will be called with `ProgressEvents`.
 * - `'uploadProgress'` - Listeners will be called with `ProgressEvents`.
 *   Upload events are only available when the request includes a file.
 *
 * @class GAPIRequest
 * @property {EventEmitter} emitter - An event emitter. See above.
 * @property {GAPIClient} client - This request's `GAPIClient`.
 * @property {GAPIResponse|null} response - If this request has been sent and received
 *   a response, the response is available on this property.
 * @property {GAPIError|Error|null} error - If this request has been sent and
 *   received an error in response, the error is available on this property.
 * @property {boolean} aborted - If the request has been aborted
 *   (via [`abort`](#abort)), this property will be `true`.
 * @property {boolean} sent - If the request has been sent, this property will
 *   be `true`. You cannot send the same request twice, so if you need to create
 *   a new request that is the equivalent of an existing one, use
 *   [`clone`](#clone).
 * @property {string} path - The request's path, including colon-prefixed route
 *   parameters.
 * @property {string} origin - The request's origin.
 * @property {string} method - The request's HTTP method.
 * @property {Object} query - A query object, which will be transformed into
 *   a URL query string.
 * @property {Object} params - A route parameters object, whose values will
 *   be interpolated the path.
 * @property {Object} headers - The request's headers.
 * @property {number} timeout - The request's timeout.
 * @property {Object|string|null} body - Data to send with the request.
 *   If the request has a body, it will also be sent with the header
 *   `'Content-Type: application/json'`.
 * @property {Blob|ArrayBuffer|string|ReadStream} file - A file to
 *   send with the request. The browser client accepts Blobs and ArrayBuffers;
 *   the Node client accepts strings (filepaths) and ReadStreams.
 * @property {string} encoding - The encoding of the response.
 * @property {string} sendFileAs - The method to send the `file`. Options are
 *   `data` (x-www-form-urlencoded) or `form` (multipart/form-data).
 */

/**
 * @ignore
 * @param {GAPIClient} client
 * @param {Object} options
 * @param {string} options.method
 * @param {string} options.path
 * @param {Object} [options.query={}]
 * @param {Object} [options.params={}]
 * @param {string} [options.origin]
 * @param {Object} [options.headers]
 * @param {Object} [options.timeout=500]
 * @param {Object} [options.body=null]
 * @param {Blob|ArrayBuffer|string|ReadStream} [options.file=null]
 * @param {string} [options.encoding=utf8]
 */
function GAPIRequest(client, options) {
  if (!client) {
    throw new Error('GAPIRequest requires a client');
  }
  if (!options || !options.path || !options.method) {
    throw new Error(
      'GAPIRequest requires an options object with path and method properties'
    );
  }

  var defaultHeaders = {};
  if (options.body) {
    defaultHeaders['content-type'] = 'application/json';
  }

  var headersWithDefaults = xtend(defaultHeaders, options.headers);

  // Disallows duplicate header names of mixed case,
  // e.g. Content-Type and content-type.
  var headers = Object.keys(headersWithDefaults).reduce(function(memo, name) {
    memo[name.toLowerCase()] = headersWithDefaults[name];
    return memo;
  }, {});

  this.id = requestId++;
  this._options = options;

  this.emitter = new EventEmitter();
  this.client = client;
  this.response = null;
  this.error = null;
  this.sent = false;
  this.aborted = false;
  this.path = options.path;
  this.method = options.method;
  this.origin = options.origin || client.origin;
  this.query = options.query || {};
  this.params = options.params || {};
  this.body = options.body || null;
  this.file = options.file || null;
  this.encoding = options.encoding || 'utf8';
  this.sendFileAs = options.sendFileAs || null;
  this.headers = headers;
  this.timeout = options.timeout || 500;
}

/**
 * Get the URL of the request.
 *
 * @param {string} [accessToken] - By default, the access token of the request's
 *   client is used.
 * @return {string}
 */
GAPIRequest.prototype.url = function url(accessToken) {
  var url = urlUtils.prependOrigin(this.path, this.origin);
  url = urlUtils.appendQueryObject(url, this.query);
  var routeParams = this.params;
  var actualAccessToken =
    accessToken == null ? this.client.accessToken : accessToken;
  if (actualAccessToken) {
    url = urlUtils.appendQueryParam(url, 'api_key', actualAccessToken);
  }
  url = urlUtils.interpolateRouteParams(url, routeParams);
  return url;
};

/**
 * Send the request. Returns a Promise that resolves with a `GAPIResponse`.
 * You probably want to use `response.body`.
 *
 * `send` only retrieves the first page of paginated results. You can get
 * the next page by using the `GAPIResponse`'s [`nextPage`](#nextpage)
 * function, or iterate through all pages using [`eachPage`](#eachpage)
 * instead of `send`.
 *
 * @returns {Promise<GAPIResponse>}
 */
GAPIRequest.prototype.send = function send() {
  var self = this;

  if (self.sent) {
    throw new Error(
      'This request has already been sent. Check the response and error properties. Create a new request with clone().'
    );
  }
  self.sent = true;

  return self.client.sendRequest(self).then(
    function(response) {
      self.response = response;
      self.emitter.emit(constants.EVENT_RESPONSE, response);
      return response;
    },
    function(error) {
      self.error = error;
      self.emitter.emit(constants.EVENT_ERROR, error);
      throw error;
    }
  );
};

/**
 * Abort the request.
 *
 * Any pending `Promise` returned by [`send`](#send) will be rejected with
 * an error with `type: 'RequestAbortedError'`. If you've created a request
 * that might be aborted, you need to catch and handle such errors.
 *
 * This method will also abort any requests created while fetching subsequent
 * pages via [`eachPage`](#eachpage).
 *
 * If the request has not been sent or has already been aborted, nothing
 * will happen.
 */
GAPIRequest.prototype.abort = function abort() {
  if (this._nextPageRequest) {
    this._nextPageRequest.abort();
    delete this._nextPageRequest;
  }

  if (this.response || this.error || this.aborted) return;

  this.aborted = true;
  this.client.abortRequest(this);
};

/**
 * Invoke a callback for each page of a paginated API response.
 *
 * The callback should have the following signature:
 *
 * ```js
 * (
 *   error: GAPIError,
 *   response: GAPIResponse,
 *   next: () => void
 * ) => void
 * ```
 *
 * **The next page will not be fetched until you've invoked the
 * `next` callback**, indicating that you're ready for it.
 *
 * @param {Function} callback
 */
GAPIRequest.prototype.eachPage = function eachPage(callback) {
  var self = this;

  function handleResponse(response) {
    function getNextPage() {
      delete self._nextPageRequest;
      var nextPageRequest = response.nextPage();
      if (nextPageRequest) {
        self._nextPageRequest = nextPageRequest;
        getPage(nextPageRequest);
      }
    }
    callback(null, response, getNextPage);
  }

  function handleError(error) {
    callback(error, null, function() {});
  }

  function getPage(request) {
    request.send().then(handleResponse, handleError);
  }
  getPage(this);
};

/**
 * Clone this request.
 *
 * Each request can only be sent *once*. So if you'd like to send the
 * same request again, clone it and send away.
 *
 * @returns {GAPIRequest} - A new `GAPIRequest` configured just like this one.
 */
GAPIRequest.prototype.clone = function clone() {
  return this._extend();
};

/**
 * @ignore
 */
GAPIRequest.prototype._extend = function _extend(options) {
  var extendedOptions = xtend(this._options, options);
  return new GAPIRequest(this.client, extendedOptions);
};

module.exports = GAPIRequest;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-response.js":
/*!************************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-response.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseLinkHeader = __webpack_require__(/*! ../helpers/parse-link-header */ "./node_modules/@goongmaps/goong-sdk/lib/helpers/parse-link-header.js");

/**
 * A Goong API response.
 *
 * @class GAPIResponse
 * @property {Object} body - The response body, parsed as JSON.
 * @property {string} rawBody - The raw response body.
 * @property {number} statusCode - The response's status code.
 * @property {Object} headers - The parsed response headers.
 * @property {Object} links - The parsed response links.
 * @property {GAPIRequest} request - The response's originating `GAPIRequest`.
 */

/**
 * @ignore
 * @param {GAPIRequest} request
 * @param {Object} responseData
 * @param {Object} responseData.headers
 * @param {string} responseData.body
 * @param {number} responseData.statusCode
 */
function GAPIResponse(request, responseData) {
  this.request = request;
  this.headers = responseData.headers;
  this.rawBody = responseData.body;
  this.statusCode = responseData.statusCode;
  try {
    this.body = JSON.parse(responseData.body || '{}');
  } catch (parseError) {
    this.body = responseData.body;
  }
  this.links = parseLinkHeader(this.headers.link);
}

/**
 * Check if there is a next page that you can fetch.
 *
 * @returns {boolean}
 */
GAPIResponse.prototype.hasNextPage = function hasNextPage() {
  return !!this.links.next;
};

/**
 * Create a request for the next page, if there is one.
 * If there is no next page, returns `null`.
 *
 * @returns {GAPIRequest | null}
 */
GAPIResponse.prototype.nextPage = function nextPage() {
  if (!this.hasNextPage()) return null;
  return this.request._extend({
    path: this.links.next.url
  });
};

module.exports = GAPIResponse;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/constants.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  API_ORIGIN: 'https://rsapi.goong.io',
  EVENT_PROGRESS_DOWNLOAD: 'downloadProgress',
  EVENT_PROGRESS_UPLOAD: 'uploadProgress',
  EVENT_ERROR: 'error',
  EVENT_RESPONSE: 'response',
  ERROR_HTTP: 'HttpError',
  ERROR_REQUEST_ABORTED: 'RequestAbortedError'
};


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/helpers/parse-headers.js":
/*!************************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/helpers/parse-headers.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function parseSingleHeader(raw) {
  var boundary = raw.indexOf(':');
  var name = raw
    .substring(0, boundary)
    .trim()
    .toLowerCase();
  var value = raw.substring(boundary + 1).trim();
  return {
    name: name,
    value: value
  };
}

/**
 * Parse raw headers into an object with lowercase properties.
 * Does not fully parse headings into more complete data structure,
 * as larger libraries might do. Also does not deal with duplicate
 * headers because Node doesn't seem to deal with those well, so
 * we shouldn't let the browser either, for consistency.
 *
 * @param {string} raw
 * @returns {Object}
 */
function parseHeaders(raw) {
  var headers = {};
  if (!raw) {
    return headers;
  }

  raw
    .trim()
    .split(/[\r|\n]+/)
    .forEach(function(rawHeader) {
      var parsed = parseSingleHeader(rawHeader);
      headers[parsed.name] = parsed.value;
    });

  return headers;
}

module.exports = parseHeaders;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/helpers/parse-link-header.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/helpers/parse-link-header.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Like https://github.com/thlorenz/lib/parse-link-header but without any
// additional dependencies.

function parseParam(param) {
  var parts = param.match(/\s*(.+)\s*=\s*"?([^"]+)"?/);
  if (!parts) return null;

  return {
    key: parts[1],
    value: parts[2]
  };
}

function parseLink(link) {
  var parts = link.match(/<?([^>]*)>(.*)/);
  if (!parts) return null;

  var linkUrl = parts[1];
  var linkParams = parts[2].split(';');
  var rel = null;
  var parsedLinkParams = linkParams.reduce(function(result, param) {
    var parsed = parseParam(param);
    if (!parsed) return result;
    if (parsed.key === 'rel') {
      if (!rel) {
        rel = parsed.value;
      }
      return result;
    }
    result[parsed.key] = parsed.value;
    return result;
  }, {});
  if (!rel) return null;

  return {
    url: linkUrl,
    rel: rel,
    params: parsedLinkParams
  };
}

/**
 * Parse a Link header.
 *
 * @param {string} linkHeader
 * @returns {{
 *   [string]: {
 *     url: string,
 *     params: { [string]: string }
 *   }
 * }}
 */
function parseLinkHeader(linkHeader) {
  if (!linkHeader) return {};

  return linkHeader.split(/,\s*</).reduce(function(result, link) {
    var parsed = parseLink(link);
    if (!parsed) return result;
    // rel value can be multiple whitespace-separated rels.
    var splitRel = parsed.rel.split(/\s+/);
    splitRel.forEach(function(rel) {
      if (!result[rel]) {
        result[rel] = {
          url: parsed.url,
          params: parsed.params
        };
      }
    });
    return result;
  }, {});
}

module.exports = parseLinkHeader;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/lib/helpers/url-utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/lib/helpers/url-utils.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Encode each item of an array individually. The comma
// delimiters should not themselves be encoded.
function encodeArray(arrayValue) {
  return arrayValue.map(encodeURIComponent).join(',');
}

function encodeValue(value) {
  if (Array.isArray(value)) {
    return encodeArray(value);
  }
  return encodeURIComponent(String(value));
}

/**
 * Append a query parameter to a URL.
 *
 * @param {string} url
 * @param {string} key
 * @param {string|number|boolean|Array<*>>} [value] - Provide an array
 *   if the value is a list and commas between values need to be
 *   preserved, unencoded.
 * @returns {string} - Modified URL.
 */
function appendQueryParam(url, key, value) {
  if (value === false || value === null) {
    return url;
  }
  var punctuation = /\?/.test(url) ? '&' : '?';
  var query = encodeURIComponent(key);
  if (value !== undefined && value !== '' && value !== true) {
    query += '=' + encodeValue(value);
  }
  return '' + url + punctuation + query;
}

/**
 * Derive a query string from an object and append it
 * to a URL.
 *
 * @param {string} url
 * @param {Object} [queryObject] - Values should be primitives.
 * @returns {string} - Modified URL.
 */
function appendQueryObject(url, queryObject) {
  if (!queryObject) {
    return url;
  }

  var result = url;
  Object.keys(queryObject).forEach(function(key) {
    var value = queryObject[key];
    if (value === undefined) {
      return;
    }
    if (Array.isArray(value)) {
      value = value
        .filter(function(v) {
          return !!v;
        })
        .join(',');
    }
    result = appendQueryParam(result, key, value);
  });
  return result;
}

/**
 * Prepend an origin to a URL. If the URL already has an
 * origin, do nothing.
 *
 * @param {string} url
 * @param {string} origin
 * @returns {string} - Modified URL.
 */
function prependOrigin(url, origin) {
  if (!origin) {
    return url;
  }

  if (url.slice(0, 4) === 'http') {
    return url;
  }

  var delimiter = url[0] === '/' ? '' : '/';
  return '' + origin.replace(/\/$/, '') + delimiter + url;
}

/**
 * Interpolate values into a route with express-style,
 * colon-prefixed route parameters.
 *
 * @param {string} route
 * @param {Object} [params] - Values should be primitives
 *   or arrays of primitives. Provide an array if the value
 *   is a list and commas between values need to be
 *   preserved, unencoded.
 * @returns {string} - Modified URL.
 */
function interpolateRouteParams(route, params) {
  if (!params) {
    return route;
  }
  return route.replace(/\/:([a-zA-Z0-9]+)/g, function(_, paramId) {
    var value = params[paramId];
    if (value === undefined) {
      throw new Error('Unspecified route parameter ' + paramId);
    }
    var preppedValue = encodeValue(value);
    return '/' + preppedValue;
  });
}

module.exports = {
  appendQueryObject: appendQueryObject,
  appendQueryParam: appendQueryParam,
  prependOrigin: prependOrigin,
  interpolateRouteParams: interpolateRouteParams
};


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/services/autocomplete.js":
/*!********************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/services/autocomplete.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var v = __webpack_require__(/*! ./service-helpers/validator */ "./node_modules/@goongmaps/goong-sdk/services/service-helpers/validator.js");
var createServiceFactory = __webpack_require__(/*! ./service-helpers/create-service-factory */ "./node_modules/@goongmaps/goong-sdk/services/service-helpers/create-service-factory.js");

/**
 * Autocomplete API service.
 *
 * Learn more about this service and its responses in
 * [Goong REST API documentation](https://docs.goong.io/rest/guide#place).
 */
var Autocomplete = {};

/**
 * Autocomplete search
 *
 * See the [public documentation](https://docs.goong.io/rest/guide#get-points-by-keyword).
 *
 * @param {Object} config
 * @param {string} config.input - A place name.
 * @param {string} config.location -  A location to use as a hint when looking up the specified address - `latitude,longitude`
 * @param {number} config.radius -  Distance round from your location by kilometers
 * @param {number} [config.limit=10] - Limit the number of results returned.
 *  Options are [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag) comprised of a mandatory
 *  [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and optionally one or more IETF subtags for country or script.
 * @return {GAPIRequest}
 *
 * @example
 * autocompleteClient.search({
 *   input: 'san bay noi bai',
 *   limit: 5
 * })
 *   .send()
 *   .then(response => {
 *     const match = response.body;
 *   });
 *
 * @example
 * // autocomplete with location
 * autocompleteClient.search({
 *   input: 'san bay noi bai',
 *   location: '21.028531,105.854189',
 *   radius: 100
 * })
 *   .send()
 *   .then(response => {
 *     const match = response.body;
 *   });
 */
Autocomplete.search = function(config) {
  v.assertShape({
    input: v.required(v.string),
    location: v.string,
    radius: v.number,
    limit: v.number
  })(config);

  return this.client.createRequest({
    method: 'GET',
    path: '/Place/AutoComplete',
    query: config
  });
};

/**
 * Autocomplete get place detail
 *
 * See the [public documentation](https://docs.goong.io/rest/guide#get-point-detail-by-id).
 *
 * @param {Object} config
 * @param {string} config.placeID - Place id from `Autocomplete` or `Geocoding`.
 *  Options are [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag) comprised of a mandatory
 *  [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and optionally one or more IETF subtags for country or script.
 * @return {GAPIRequest}
 *
 * @example
 * autocompleteClient.placeDetail({
 *   placeid: '0WmA4vbeody2J9AEvVM9YE3ZN85z7Mrw',
 * })
 *   .send()
 *   .then(response => {
 *     const match = response.body;
 *   });
 */
Autocomplete.placeDetail = function(config) {
  v.assertShape({
    placeid: v.required(v.string)
  })(config);

  return this.client.createRequest({
    method: 'GET',
    path: '/Place/Detail',
    query: config
  });
};

module.exports = createServiceFactory(Autocomplete);


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/services/service-helpers/create-service-factory.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/services/service-helpers/create-service-factory.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GAPIClient = __webpack_require__(/*! ../../lib/classes/gapi-client */ "./node_modules/@goongmaps/goong-sdk/lib/classes/gapi-client.js");
// This will create the environment-appropriate client.
var createClient = __webpack_require__(/*! ../../lib/client */ "./node_modules/@goongmaps/goong-sdk/lib/browser/browser-client.js");

function createServiceFactory(ServicePrototype) {
  return function(clientOrConfig) {
    var client;
    if (GAPIClient.prototype.isPrototypeOf.call(clientOrConfig)) {
      client = clientOrConfig;
    } else {
      client = createClient(clientOrConfig);
    }
    var service = Object.create(ServicePrototype);
    service.client = client;
    return service;
  };
}

module.exports = createServiceFactory;


/***/ }),

/***/ "./node_modules/@goongmaps/goong-sdk/services/service-helpers/validator.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@goongmaps/goong-sdk/services/service-helpers/validator.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var v = __webpack_require__(/*! @mapbox/fusspot */ "./node_modules/@mapbox/fusspot/lib/index.js");

function file(value) {
  // If we're in a browser so Blob is available, the file must be that.
  // In Node, however, it could be a filepath or a pipeable (Readable) stream.
  if (typeof window !== 'undefined') {
    if (value instanceof global.Blob || value instanceof global.ArrayBuffer) {
      return;
    }
    return 'Blob or ArrayBuffer';
  }
  if (typeof value === 'string' || value.pipe !== undefined) {
    return;
  }
  return 'Filename or Readable stream';
}

function assertShape(validatorObj, apiName) {
  return v.assert(v.strictShape(validatorObj), apiName);
}

function date(value) {
  var msg = 'date';
  if (typeof value === 'boolean') {
    return msg;
  }
  try {
    var date = new Date(value);
    if (date.getTime && isNaN(date.getTime())) {
      return msg;
    }
  } catch (e) {
    return msg;
  }
}

function coordinates(value) {
  return v.tuple(v.number, v.number)(value);
}

module.exports = xtend(v, {
  file: file,
  date: date,
  coordinates: coordinates,
  assertShape: assertShape
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@mapbox/fusspot/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@mapbox/fusspot/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Validators are functions which assert certain type.
 * They can return a string which can then be used
 * to display a helpful error message.
 * They can also return a function for a custom error message.
 */
var isPlainObject = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js");
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var DEFAULT_ERROR_PATH = 'value';
var NEWLINE_INDENT = '\n  ';

var v = {};

/**
 * Runners
 *
 * Take root validators and run assertion
 */
v.assert = function(rootValidator, options) {
  options = options || {};
  return function(value) {
    var message = validate(rootValidator, value);
    // all good
    if (!message) {
      return;
    }

    var errorMessage = processMessage(message, options);

    if (options.apiName) {
      errorMessage = options.apiName + ': ' + errorMessage;
    }

    throw new Error(errorMessage);
  };
};

/**
 * Higher Order Validators
 *
 * validators which take other validators as input
 * and output a new validator
 */
v.shape = function shape(validatorObj) {
  var validators = objectEntries(validatorObj);
  return function shapeValidator(value) {
    var validationResult = validate(v.plainObject, value);

    if (validationResult) {
      return validationResult;
    }

    var key, validator;
    var errorMessages = [];

    for (var i = 0; i < validators.length; i++) {
      key = validators[i].key;
      validator = validators[i].value;
      validationResult = validate(validator, value[key]);

      if (validationResult) {
        // return [key].concat(validationResult);
        errorMessages.push([key].concat(validationResult));
      }
    }

    if (errorMessages.length < 2) {
      return errorMessages[0];
    }

    // enumerate all the error messages
    return function(options) {
      errorMessages = errorMessages.map(function(message) {
        var key = message[0];
        var renderedMessage = processMessage(message, options)
          .split('\n')
          .join(NEWLINE_INDENT); // indents any inner nesting
        return '- ' + key + ': ' + renderedMessage;
      });

      var objectId = options.path.join('.');
      var ofPhrase = objectId === DEFAULT_ERROR_PATH ? '' : ' of ' + objectId;

      return (
        'The following properties' +
        ofPhrase +
        ' have invalid values:' +
        NEWLINE_INDENT +
        errorMessages.join(NEWLINE_INDENT)
      );
    };
  };
};

v.strictShape = function strictShape(validatorObj) {
  var shapeValidator = v.shape(validatorObj);
  return function strictShapeValidator(value) {
    var shapeResult = shapeValidator(value);
    if (shapeResult) {
      return shapeResult;
    }

    var invalidKeys = Object.keys(value).reduce(function(memo, valueKey) {
      if (validatorObj[valueKey] === undefined) {
        memo.push(valueKey);
      }
      return memo;
    }, []);

    if (invalidKeys.length !== 0) {
      return function() {
        return 'The following keys are invalid: ' + invalidKeys.join(', ');
      };
    }
  };
};

v.arrayOf = function arrayOf(validator) {
  return createArrayValidator(validator);
};

v.tuple = function tuple() {
  var validators = Array.isArray(arguments[0])
    ? arguments[0]
    : Array.prototype.slice.call(arguments);
  return createArrayValidator(validators);
};

// Currently array validation fails when the first invalid item is found.
function createArrayValidator(validators) {
  var validatingTuple = Array.isArray(validators);
  var getValidator = function(index) {
    if (validatingTuple) {
      return validators[index];
    }
    return validators;
  };

  return function arrayValidator(value) {
    var validationResult = validate(v.plainArray, value);
    if (validationResult) {
      return validationResult;
    }

    if (validatingTuple && value.length !== validators.length) {
      return 'an array with ' + validators.length + ' items';
    }

    for (var i = 0; i < value.length; i++) {
      validationResult = validate(getValidator(i), value[i]);
      if (validationResult) {
        return [i].concat(validationResult);
      }
    }
  };
}

v.required = function required(validator) {
  function requiredValidator(value) {
    if (value == null) {
      return function(options) {
        return formatErrorMessage(
          options,
          isArrayCulprit(options.path)
            ? 'cannot be undefined/null.'
            : 'is required.'
        );
      };
    }
    return validator.apply(this, arguments);
  }
  requiredValidator.__required = true;

  return requiredValidator;
};

v.oneOfType = function oneOfType() {
  var validators = Array.isArray(arguments[0])
    ? arguments[0]
    : Array.prototype.slice.call(arguments);
  return function oneOfTypeValidator(value) {
    var messages = validators
      .map(function(validator) {
        return validate(validator, value);
      })
      .filter(Boolean);

    // If we don't have as many messages as no. of validators,
    // then at least one validator was ok with the value.
    if (messages.length !== validators.length) {
      return;
    }

    // check primitive type
    if (
      messages.every(function(message) {
        return message.length === 1 && typeof message[0] === 'string';
      })
    ) {
      return orList(
        messages.map(function(m) {
          return m[0];
        })
      );
    }

    // Complex oneOfTypes like
    // `v.oneOftypes(v.shape({name: v.string})`, `v.shape({name: v.number}))`
    // are complex ¯\_(ツ)_/¯. For the current scope only returning the longest message.
    return messages.reduce(function(max, arr) {
      return arr.length > max.length ? arr : max;
    });
  };
};

/**
 * Meta Validators
 * which take options as argument (not validators)
 * and return a new primitive validator
 */
v.equal = function equal(compareWith) {
  return function equalValidator(value) {
    if (value !== compareWith) {
      return JSON.stringify(compareWith);
    }
  };
};

v.oneOf = function oneOf() {
  var options = Array.isArray(arguments[0])
    ? arguments[0]
    : Array.prototype.slice.call(arguments);
  var validators = options.map(function(value) {
    return v.equal(value);
  });

  return v.oneOfType.apply(this, validators);
};

v.range = function range(compareWith) {
  var min = compareWith[0];
  var max = compareWith[1];
  return function rangeValidator(value) {
    var validationResult = validate(v.number, value);

    if (validationResult || value < min || value > max) {
      return 'number between ' + min + ' & ' + max + ' (inclusive)';
    }
  };
};

/**
 * Primitive validators
 *
 * simple validators which return a string or undefined
 */
v.any = function any() {
  return;
};

v.boolean = function boolean(value) {
  if (typeof value !== 'boolean') {
    return 'boolean';
  }
};

v.number = function number(value) {
  if (typeof value !== 'number') {
    return 'number';
  }
};

v.plainArray = function plainArray(value) {
  if (!Array.isArray(value)) {
    return 'array';
  }
};

v.plainObject = function plainObject(value) {
  if (!isPlainObject(value)) {
    return 'object';
  }
};

v.string = function string(value) {
  if (typeof value !== 'string') {
    return 'string';
  }
};

v.func = function func(value) {
  if (typeof value !== 'function') {
    return 'function';
  }
};

function validate(validator, value) {
  // assertions are optional by default unless wrapped in v.require
  if (value == null && !validator.hasOwnProperty('__required')) {
    return;
  }

  var result = validator(value);

  if (result) {
    return Array.isArray(result) ? result : [result];
  }
}

function processMessage(message, options) {
  // message array follows the convention
  // [...path, result]
  // path is an array of object keys / array indices
  // result is output of the validator
  var len = message.length;

  var result = message[len - 1];
  var path = message.slice(0, len - 1);

  if (path.length === 0) {
    path = [DEFAULT_ERROR_PATH];
  }
  options = xtend(options, { path: path });

  return typeof result === 'function'
    ? result(options) // allows customization of result
    : formatErrorMessage(options, prettifyResult(result));
}

function orList(list) {
  if (list.length < 2) {
    return list[0];
  }
  if (list.length === 2) {
    return list.join(' or ');
  }
  return list.slice(0, -1).join(', ') + ', or ' + list.slice(-1);
}

function prettifyResult(result) {
  return 'must be ' + addArticle(result) + '.';
}

function addArticle(nounPhrase) {
  if (/^an? /.test(nounPhrase)) {
    return nounPhrase;
  }
  if (/^[aeiou]/i.test(nounPhrase)) {
    return 'an ' + nounPhrase;
  }
  if (/^[a-z]/i.test(nounPhrase)) {
    return 'a ' + nounPhrase;
  }
  return nounPhrase;
}

function formatErrorMessage(options, prettyResult) {
  var arrayCulprit = isArrayCulprit(options.path);
  var output = options.path.join('.') + ' ' + prettyResult;
  var prepend = arrayCulprit ? 'Item at position ' : '';

  return prepend + output;
}

function isArrayCulprit(path) {
  return typeof path[path.length - 1] == 'number' || typeof path[0] == 'number';
}

function objectEntries(obj) {
  return Object.keys(obj || {}).map(function(key) {
    return { key: key, value: obj[key] };
  });
}

v.validate = validate;
v.processMessage = processMessage;

module.exports = v;


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.auto.js":
/*!***********************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.auto.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$2) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$2 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$2.prototype.then = then;
Promise$2.all = all;
Promise$2.race = race;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill;
Promise$2.Promise = Promise$2;

Promise$2.polyfill();

return Promise$2;

})));



//# sourceMappingURL=es6-promise.auto.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/fuzzy/lib/fuzzy.js":
/*!*****************************************!*\
  !*** ./node_modules/fuzzy/lib/fuzzy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Fuzzy
 * https://github.com/myork/fuzzy
 *
 * Copyright (c) 2012 Matt York
 * Licensed under the MIT license.
 */

(function() {

var root = this;

var fuzzy = {};

// Use in node or in browser
if (true) {
  module.exports = fuzzy;
} else {}

// Return all elements of `array` that have a fuzzy
// match against `pattern`.
fuzzy.simpleFilter = function(pattern, array) {
  return array.filter(function(str) {
    return fuzzy.test(pattern, str);
  });
};

// Does `pattern` fuzzy match `str`?
fuzzy.test = function(pattern, str) {
  return fuzzy.match(pattern, str) !== null;
};

// If `pattern` matches `str`, wrap each matching character
// in `opts.pre` and `opts.post`. If no match, return null
fuzzy.match = function(pattern, str, opts) {
  opts = opts || {};
  var patternIdx = 0
    , result = []
    , len = str.length
    , totalScore = 0
    , currScore = 0
    // prefix
    , pre = opts.pre || ''
    // suffix
    , post = opts.post || ''
    // String to compare against. This might be a lowercase version of the
    // raw string
    , compareString =  opts.caseSensitive && str || str.toLowerCase()
    , ch;

  pattern = opts.caseSensitive && pattern || pattern.toLowerCase();

  // For each character in the string, either add it to the result
  // or wrap in template if it's the next string in the pattern
  for(var idx = 0; idx < len; idx++) {
    ch = str[idx];
    if(compareString[idx] === pattern[patternIdx]) {
      ch = pre + ch + post;
      patternIdx += 1;

      // consecutive characters should increase the score more than linearly
      currScore += 1 + currScore;
    } else {
      currScore = 0;
    }
    totalScore += currScore;
    result[result.length] = ch;
  }

  // return rendered string if we have a match for every char
  if(patternIdx === pattern.length) {
    // if the string is an exact match with pattern, totalScore should be maxed
    totalScore = (compareString === pattern) ? Infinity : totalScore;
    return {rendered: result.join(''), score: totalScore};
  }

  return null;
};

// The normal entry point. Filters `arr` for matches against `pattern`.
// It returns an array with matching values of the type:
//
//     [{
//         string:   '<b>lah' // The rendered string
//       , index:    2        // The index of the element in `arr`
//       , original: 'blah'   // The original element in `arr`
//     }]
//
// `opts` is an optional argument bag. Details:
//
//    opts = {
//        // string to put before a matching character
//        pre:     '<b>'
//
//        // string to put after matching character
//      , post:    '</b>'
//
//        // Optional function. Input is an entry in the given arr`,
//        // output should be the string to test `pattern` against.
//        // In this example, if `arr = [{crying: 'koala'}]` we would return
//        // 'koala'.
//      , extract: function(arg) { return arg.crying; }
//    }
fuzzy.filter = function(pattern, arr, opts) {
  if(!arr || arr.length === 0) {
    return [];
  }
  if (typeof pattern !== 'string') {
    return arr;
  }
  opts = opts || {};
  return arr
    .reduce(function(prev, element, idx, arr) {
      var str = element;
      if(opts.extract) {
        str = opts.extract(element);
      }
      var rendered = fuzzy.match(pattern, str, opts);
      if(rendered != null) {
        prev[prev.length] = {
            string: rendered.rendered
          , score: rendered.score
          , index: idx
          , original: element
        };
      }
      return prev;
    }, [])

    // Sort by score. Browsers are inconsistent wrt stable/unstable
    // sorting, so force stable by using the index in the case of tie.
    // See http://ofb.net/~sethml/is-sort-stable.html
    .sort(function(a,b) {
      var compare = b.score - a.score;
      if(compare) return compare;
      return a.index - b.index;
    });
};


}());



/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/suggestions/index.js":
/*!*******************************************!*\
  !*** ./node_modules/suggestions/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A typeahead component for inputs
 * @class Suggestions
 *
 * @param {HTMLInputElement} el A valid HTML input element
 * @param {Array} data An array of data used for results
 * @param {Object} options
 * @param {Number} [options.limit=5] Max number of results to display in the auto suggest list.
 * @param {Number} [options.minLength=2] Number of characters typed into an input to trigger suggestions.
 * @param {Boolean} [options.hideOnBlur=true] If `true`, hides the suggestions when focus is lost.
 * @return {Suggestions} `this`
 * @example
 * // in the browser
 * var input = document.querySelector('input');
 * var data = [
 *   'Roy Eldridge',
 *   'Roy Hargrove',
 *   'Rex Stewart'
 * ];
 *
 * new Suggestions(input, data);
 *
 * // with options
 * var input = document.querySelector('input');
 * var data = [{
 *   name: 'Roy Eldridge',
 *   year: 1911
 * }, {
 *   name: 'Roy Hargrove',
 *   year: 1969
 * }, {
 *   name: 'Rex Stewart',
 *   year: 1907
 * }];
 *
 * var typeahead = new Suggestions(input, data, {
 *   filter: false, // Disable filtering
 *   minLength: 3, // Number of characters typed into an input to trigger suggestions.
 *   limit: 3, //  Max number of results to display.
 *   hideOnBlur: false // Don't hide results when input loses focus
 * });
 *
 * // As we're passing an object of an arrays as data, override
 * // `getItemValue` by specifying the specific property to search on.
 * typeahead.getItemValue = function(item) { return item.name };
 *
 * input.addEventListener('change', function() {
 *   console.log(typeahead.selected); // Current selected item.
 * });
 *
 * // With browserify
 * var Suggestions = require('suggestions');
 *
 * new Suggestions(input, data);
 */
var Suggestions = __webpack_require__(/*! ./src/suggestions */ "./node_modules/suggestions/src/suggestions.js");
window.Suggestions = module.exports = Suggestions;


/***/ }),

/***/ "./node_modules/suggestions/src/list.js":
/*!**********************************************!*\
  !*** ./node_modules/suggestions/src/list.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var List = function(component) {
  this.component = component;
  this.items = [];
  this.active = 0;
  this.wrapper = document.createElement('div');
  this.wrapper.className = 'suggestions-wrapper';
  this.element = document.createElement('ul');
  this.element.className = 'suggestions';
  this.wrapper.appendChild(this.element);

  // selectingListItem is set to true in the time between the mousedown and mouseup when clicking an item in the list
  // mousedown on a list item will cause the input to blur which normally hides the list, so this flag is used to keep
  // the list open until the mouseup
  this.selectingListItem = false;

  component.el.parentNode.insertBefore(this.wrapper, component.el.nextSibling);
  return this;
};

List.prototype.show = function() {
  this.element.style.display = 'block';
};

List.prototype.hide = function() {
  this.element.style.display = 'none';
};

List.prototype.add = function(item) {
  this.items.push(item);
};

List.prototype.clear = function() {
  this.items = [];
  this.active = 0;
};

List.prototype.isEmpty = function() {
  return !this.items.length;
};

List.prototype.isVisible = function() {
  return this.element.style.display === 'block';
};

List.prototype.draw = function() {
  this.element.innerHTML = '';

  if (this.items.length === 0) {
    this.hide();
    return;
  }

  for (var i = 0; i < this.items.length; i++) {
    this.drawItem(this.items[i], this.active === i);
  }

  this.show();
};

List.prototype.drawItem = function(item, active) {
  var li = document.createElement('li'),
    a = document.createElement('a');

  if (active) li.className += ' active';

  a.innerHTML = item.string;

  li.appendChild(a);
  this.element.appendChild(li);

  li.addEventListener('mousedown', function() {
    this.selectingListItem = true;
  }.bind(this));

  li.addEventListener('mouseup', function() {
    this.handleMouseUp.call(this, item);
  }.bind(this));
};

List.prototype.handleMouseUp = function(item) {
  this.selectingListItem = false;
  this.component.value(item.original);
  this.clear();
  this.draw();
};

List.prototype.move = function(index) {
  this.active = index;
  this.draw();
};

List.prototype.previous = function() {
  this.move(this.active === 0 ? this.items.length - 1 : this.active - 1);
};

List.prototype.next = function() {
  this.move(this.active === this.items.length - 1 ? 0 : this.active + 1);
};

List.prototype.drawError = function(msg){
  var li = document.createElement('li');

  li.innerHTML = msg;

  this.element.appendChild(li);
  this.show();
}

module.exports = List;


/***/ }),

/***/ "./node_modules/suggestions/src/suggestions.js":
/*!*****************************************************!*\
  !*** ./node_modules/suggestions/src/suggestions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var fuzzy = __webpack_require__(/*! fuzzy */ "./node_modules/fuzzy/lib/fuzzy.js");
var List = __webpack_require__(/*! ./list */ "./node_modules/suggestions/src/list.js");

var Suggestions = function(el, data, options) {
  options = options || {};

  this.options = extend({
    minLength: 2,
    limit: 5,
    filter: true,
    hideOnBlur: true
  }, options);

  this.el = el;
  this.data = data || [];
  this.list = new List(this);

  this.query = '';
  this.selected = null;

  this.list.draw();

  this.el.addEventListener('keyup', function(e) {
    this.handleKeyUp(e.keyCode);
  }.bind(this), false);

  this.el.addEventListener('keydown', function(e) {
    this.handleKeyDown(e);
  }.bind(this));

  this.el.addEventListener('focus', function() {
    this.handleFocus();
  }.bind(this));

  this.el.addEventListener('blur', function() {
    this.handleBlur();
  }.bind(this));

  this.el.addEventListener('paste', function(e) {
    this.handlePaste(e);
  }.bind(this));

  // use user-provided render function if given, otherwise just use the default
  this.render = (this.options.render) ? this.options.render.bind(this) : this.render.bind(this)

  this.getItemValue = (this.options.getItemValue) ? this.options.getItemValue.bind(this) : this.getItemValue.bind(this);

  return this;
};

Suggestions.prototype.handleKeyUp = function(keyCode) {
  // 40 - DOWN
  // 38 - UP
  // 27 - ESC
  // 13 - ENTER
  // 9 - TAB

  if (keyCode === 40 ||
      keyCode === 38 ||
      keyCode === 27 ||
      keyCode === 13 ||
      keyCode === 9) return;

  this.handleInputChange(this.el.value);
};

Suggestions.prototype.handleKeyDown = function(e) {
  switch (e.keyCode) {
    case 13: // ENTER
    case 9: // TAB
      if (!this.list.isEmpty()) {
        if (this.list.isVisible()) {
          e.preventDefault();
        }
        this.value(this.list.items[this.list.active].original);
        this.list.hide();
      }
    break;
    case 27: // ESC
      if (!this.list.isEmpty()) this.list.hide();
    break;
    case 38: // UP
      this.list.previous();
    break;
    case 40: // DOWN
      this.list.next();
    break;
  }
};

Suggestions.prototype.handleBlur = function() {
  if (!this.list.selectingListItem && this.options.hideOnBlur) {
    this.list.hide();
  }
};

Suggestions.prototype.handlePaste = function(e) {
  if (e.clipboardData) {
    this.handleInputChange(e.clipboardData.getData('Text'));
  } else {
    var self = this;
    setTimeout(function () {
      self.handleInputChange(e.target.value);
    }, 100);
  }
};

Suggestions.prototype.handleInputChange = function(query) {
  this.query = this.normalize(query);

  this.list.clear();

  if (this.query.length < this.options.minLength) {
    this.list.draw();
    return;
  }

  this.getCandidates(function(data) {
    for (var i = 0; i < data.length; i++) {
      this.list.add(data[i]);
      if (i === (this.options.limit - 1)) break;
    }
    this.list.draw();
  }.bind(this));
};

Suggestions.prototype.handleFocus = function() {
  if (!this.list.isEmpty()) this.list.show();
  this.list.selectingListItem = false;
};

/**
 * Update data previously passed
 *
 * @param {Array} revisedData
 */
Suggestions.prototype.update = function(revisedData) {
  this.data = revisedData;
  this.handleKeyUp();
};

/**
 * Clears data
 */
Suggestions.prototype.clear = function() {
  this.data = [];
  this.list.clear();
};

/**
 * Normalize the results list and input value for matching
 *
 * @param {String} value
 * @return {String}
 */
Suggestions.prototype.normalize = function(value) {
  value = value.toLowerCase();
  return value;
};

/**
 * Evaluates whether an array item qualifies as a match with the current query
 *
 * @param {String} candidate a possible item from the array passed
 * @param {String} query the current query
 * @return {Boolean}
 */
Suggestions.prototype.match = function(candidate, query) {
  return candidate.indexOf(query) > -1;
};

Suggestions.prototype.value = function(value) {
  this.selected = value;
  this.el.value = this.getItemValue(value);

  if (document.createEvent) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent('change', true, false);
    this.el.dispatchEvent(e);
  } else {
    this.el.fireEvent('onchange');
  }
};

Suggestions.prototype.getCandidates = function(callback) {
  var options = {
    pre: '<strong>',
    post: '</strong>',
    extract: function(d) { return this.getItemValue(d); }.bind(this)
  };
  var results;
  if(this.options.filter){
    results = fuzzy.filter(this.query, this.data, options);

    results = results.map(function(item){
      return {
        original: item.original,
        string: this.render(item.original, item.string)
      };
    }.bind(this))
  }else{
    results = this.data.map(function(d) {
      var renderedString = this.render(d);
      return {
        original: d,
        string: renderedString
      };
    }.bind(this));
  }
  callback(results);
};

/**
 * For a given item in the data array, return what should be used as the candidate string
 *
 * @param {Object|String} item an item from the data array
 * @return {String} item
 */
Suggestions.prototype.getItemValue = function(item) {
  return item;
};

/**
 * For a given item in the data array, return a string of html that should be rendered in the dropdown
 * @param {Object|String} item an item from the data array
 * @param {String} sourceFormatting a string that has pre-formatted html that should be passed directly through the render function 
 * @return {String} html
 */
Suggestions.prototype.render = function(item, sourceFormatting) {
  if (sourceFormatting){
    // use existing formatting on the source string
    return sourceFormatting;
  }
  var boldString = (item.original) ? this.getItemValue(item.original) : this.getItemValue(item);
  var indexString = this.normalize(boldString);
  var indexOfQuery = indexString.lastIndexOf(this.query);
  while (indexOfQuery > -1) {
    var endIndexOfQuery = indexOfQuery + this.query.length;
    boldString = boldString.slice(0, indexOfQuery) + '<strong>' + boldString.slice(indexOfQuery, endIndexOfQuery) + '</strong>' + boldString.slice(endIndexOfQuery);
    indexOfQuery = indexString.slice(0, indexOfQuery).lastIndexOf(this.query);
  }
  return boldString
}

/**
 * Render an custom error message in the suggestions list
 * @param {String} msg An html string to render as an error message
 */
Suggestions.prototype.renderError = function(msg){
  this.list.drawError(msg);
}

module.exports = Suggestions;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
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

/***/ "./resources/js/user/TrovieMap.js":
/*!****************************************!*\
  !*** ./resources/js/user/TrovieMap.js ***!
  \****************************************/
/*! exports provided: TrovieMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrovieMap", function() { return TrovieMap; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TrovieMap = /*#__PURE__*/function () {
  /**
   * Create Trovie class
   * @param options
   * {map} map element
   * {addressInput} address input element
   * [center] = [105.76519667323225, 10.043570904701184]
   * [draggableMarker]
   */
  function TrovieMap(options) {
    _classCallCheck(this, TrovieMap);

    this.options = options;
    this.options.draggaleMarkder = options.draggaleMarkder || false;
  }

  _createClass(TrovieMap, [{
    key: "initGoongMap",
    value: function initGoongMap() {
      var apiKey = document.querySelector('meta[name=goong-map-api-key]').getAttribute('content');
      goongjs.accessToken = document.querySelector('meta[name=goong-map-titles-key]').getAttribute('content');

      var _map = new goongjs.Map({
        container: this.options.map,
        style: 'https://tiles.goong.io/assets/goong_map_web.json',
        center: this.options.center,
        //[lng,lat]
        zoom: 10
      });

      var _marker = new goongjs.Marker({
        draggale: this.options.draggaleMarkder
      }).setLngLat(this.options.center).addTo(_map);

      _map.addControl(new goongjs.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));

      _map.addControl(new GoongGeocoder({
        accessToken: apiKey,
        goongjs: goongjs,
        searchInput: this.options.addressInput
      }));

      _map.addControl(new goongjs.FullscreenControl());

      _map.addControl(new goongjs.NavigationControl());

      return {
        map: _map,
        marker: _marker
      };
    }
  }]);

  return TrovieMap;
}();



/***/ }),

/***/ "./resources/js/user/host/index.js":
/*!*****************************************!*\
  !*** ./resources/js/user/host/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TrovieHelper */ "./resources/js/user/TrovieHelper.js");
/* harmony import */ var _TrovieMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TrovieMap */ "./resources/js/user/TrovieMap.js");


window.goongjs = __webpack_require__(/*! @goongmaps/goong-js */ "./node_modules/@goongmaps/goong-js/dist/goong-js.js");
window.GoongGeocoder = __webpack_require__(/*! @goongmaps/goong-geocoder */ "./node_modules/@goongmaps/goong-geocoder/lib/index.js");
document.addEventListener('DOMContentLoaded', function () {
  var _trovie = new _TrovieHelper__WEBPACK_IMPORTED_MODULE_0__["TrovieHelper"]();

  var createHostFormMap = document.querySelector('.create-host-modal__form #form__map');
  var addressInput = document.querySelector('.create-host-modal__form #address');
  var latitudeInput = document.querySelector('.create-host-modal__form #latitude');
  var longitudeInput = document.querySelector('.create-host-modal__form #longitude');
  var mapElement;

  if (createHostFormMap !== null) {
    var options = {
      map: createHostFormMap,
      addressInput: addressInput,
      center: [105, 20]
    };
    mapElement = new _TrovieMap__WEBPACK_IMPORTED_MODULE_1__["TrovieMap"](options).initGoongMap();
    console.log(mapElement);
  } // $('#testmap').on('click', function () {
  //     mapElement.map.flyTo({
  //         center: [
  //             105.1, 20.1
  //         ]
  //     });
  //     mapElement.marker.setLngLat([105.1, 20.1]);
  // })

});

/***/ }),

/***/ 2:
/*!**************************************************************************************************************************************************!*\
  !*** multi ./node_modules/es6-promise/dist/es6-promise.js ./node_modules/es6-promise/dist/es6-promise.auto.js ./resources/js/user/host/index.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/trovie/node_modules/es6-promise/dist/es6-promise.js */"./node_modules/es6-promise/dist/es6-promise.js");
__webpack_require__(/*! /var/www/html/trovie/node_modules/es6-promise/dist/es6-promise.auto.js */"./node_modules/es6-promise/dist/es6-promise.auto.js");
module.exports = __webpack_require__(/*! /var/www/html/trovie/resources/js/user/host/index.js */"./resources/js/user/host/index.js");


/***/ })

/******/ });