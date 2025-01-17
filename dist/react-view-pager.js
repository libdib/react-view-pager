/*!
 * React View Pager 0.6.0
 * https://github.com/souporserious/react-view-pager
 * Copyright (c) 2021 React View Pager Authors
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("resize-observer-polyfill"), require("get-prefix"), require("react-dom"), require("react-motion"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "resize-observer-polyfill", "get-prefix", "react-dom", "react-motion"], factory);
	else if(typeof exports === 'object')
		exports["ReactViewPager"] = factory(require("react"), require("resize-observer-polyfill"), require("get-prefix"), require("react-dom"), require("react-motion"));
	else
		root["ReactViewPager"] = factory(root["React"], root["ResizeObserver"], root["getPrefix"], root["ReactDOM"], root["ReactMotion"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.AnimatedView = exports.View = exports.Track = exports.Frame = exports.ViewPager = undefined;

	var _ViewPager2 = __webpack_require__(1);

	var _ViewPager3 = _interopRequireDefault(_ViewPager2);

	var _Frame2 = __webpack_require__(22);

	var _Frame3 = _interopRequireDefault(_Frame2);

	var _Track2 = __webpack_require__(28);

	var _Track3 = _interopRequireDefault(_Track2);

	var _View2 = __webpack_require__(30);

	var _View3 = _interopRequireDefault(_View2);

	var _AnimatedView2 = __webpack_require__(31);

	var _AnimatedView3 = _interopRequireDefault(_AnimatedView2);

	var _utils2 = __webpack_require__(20);

	var _utils3 = _interopRequireDefault(_utils2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ViewPager = _ViewPager3.default;
	exports.Frame = _Frame3.default;
	exports.Track = _Track3.default;
	exports.View = _View3.default;
	exports.AnimatedView = _AnimatedView3.default;
	exports.utils = _utils3.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Pager = __webpack_require__(12);

	var _Pager2 = _interopRequireDefault(_Pager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ViewPager = function (_Component) {
	  _inherits(ViewPager, _Component);

	  function ViewPager(props) {
	    _classCallCheck(this, ViewPager);

	    var _this = _possibleConstructorReturn(this, (ViewPager.__proto__ || Object.getPrototypeOf(ViewPager)).call(this, props));

	    var pager = new _Pager2.default();
	    var forceUpdate = function forceUpdate() {
	      return _this.forceUpdate();
	    };

	    // re-render the whole tree to update components on certain events
	    pager.on('viewChange', forceUpdate);
	    pager.on('hydrated', forceUpdate);

	    _this._pager = pager;
	    return _this;
	  }

	  _createClass(ViewPager, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        pager: this._pager
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      // run a hydration on the next animation frame to obtain proper targets and positioning
	      requestAnimationFrame(function () {
	        _this2._pager.hydrate();
	      });
	    }
	  }, {
	    key: 'getInstance',
	    value: function getInstance() {
	      return this._pager;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          tag = _props.tag,
	          restProps = _objectWithoutProperties(_props, ['tag']);

	      return (0, _react.createElement)(tag, restProps);
	    }
	  }]);

	  return ViewPager;
	}(_react.Component);

	ViewPager.childContextTypes = {
	  pager: _propTypes2.default.instanceOf(_Pager2.default)
	};
	ViewPager.propTypes = {
	  tag: _propTypes2.default.string
	};
	ViewPager.defaultProps = {
	  tag: 'div'
	};
	exports.default = ViewPager;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

	  var isValidElement = function isValidElement(object) {
	    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(5)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(11)();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

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
	function defaultClearTimeout() {
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
	})();
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
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
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
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
	    while (len) {
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

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(8);

	var ReactPropTypesSecret = __webpack_require__(9);
	var checkPropTypes = __webpack_require__(10);

	module.exports = function (isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (!manualPropTypeCallCache[cacheKey] &&
	          // Avoid spamming the console because they are often not actionable except for lib authors
	          manualPropTypeWarningCount < 3) {
	            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(7);
	  var warning = __webpack_require__(8);
	  var ReactPropTypesSecret = __webpack_require__(9);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);

	module.exports = function () {
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  function shim() {
	    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mitt = __webpack_require__(13);

	var _mitt2 = _interopRequireDefault(_mitt);

	var _tabbable = __webpack_require__(14);

	var _tabbable2 = _interopRequireDefault(_tabbable);

	var _animationBus = __webpack_require__(15);

	var _animationBus2 = _interopRequireDefault(_animationBus);

	var _resizeObserverPolyfill = __webpack_require__(18);

	var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

	var _PagerElement3 = __webpack_require__(19);

	var _PagerElement4 = _interopRequireDefault(_PagerElement3);

	var _utils = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TRANSFORM = __webpack_require__(21)('transform');
	var isWindowDefined = typeof window !== 'undefined';

	var Track = function (_PagerElement) {
	  _inherits(Track, _PagerElement);

	  function Track() {
	    _classCallCheck(this, Track);

	    return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
	  }

	  _createClass(Track, [{
	    key: 'getStyles',
	    value: function getStyles(trackPosition) {
	      var _pager$getPositionVal = this.pager.getPositionValue(trackPosition),
	          x = _pager$getPositionVal.x,
	          y = _pager$getPositionVal.y;

	      var trackSize = this.pager.getTrackSize();
	      var style = _defineProperty({}, TRANSFORM, 'translate3d(' + x + 'px, ' + y + 'px, 0)');

	      if (trackSize) {
	        var _pager$options = this.pager.options,
	            axis = _pager$options.axis,
	            viewsToShow = _pager$options.viewsToShow;

	        var dimension = axis === 'x' ? 'width' : 'height';

	        style[dimension] = viewsToShow === 'auto' ? trackSize : this.pager.views.length / viewsToShow * 100 + '%';
	      }

	      return style;
	    }
	  }]);

	  return Track;
	}(_PagerElement4.default);

	var View = function (_PagerElement2) {
	  _inherits(View, _PagerElement2);

	  function View(_ref) {
	    var index = _ref.index,
	        restOptions = _objectWithoutProperties(_ref, ['index']);

	    _classCallCheck(this, View);

	    var _this2 = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, restOptions));

	    _this2.index = index;
	    _this2.inBounds = true;
	    _this2.tabbableChildren = [];
	    _this2.setCurrent(false);
	    _this2.setVisible(false);
	    _this2.setTarget();
	    _this2.setOrigin();

	    // TODO: look into getting rid of setTimeout
	    // not sure the reason for needing setTimeout in order to get proper children,
	    // might be due to something in React that we're not doing at the right time
	    setTimeout(function () {
	      _this2.tabbableChildren = (0, _tabbable2.default)(_this2.node);
	      _this2.setTabbableChildren();
	    });
	    return _this2;
	  }

	  _createClass(View, [{
	    key: 'setCurrent',
	    value: function setCurrent(isCurrent) {
	      this.isCurrent = isCurrent;
	    }
	  }, {
	    key: 'setVisible',
	    value: function setVisible(isVisible) {
	      this.isVisible = isVisible;
	      this.setTabbableChildren();
	    }
	  }, {
	    key: 'setTabbableChildren',
	    value: function setTabbableChildren() {
	      // only allow tabbing in current slides
	      for (var i = 0; i < this.tabbableChildren.length; i++) {
	        this.tabbableChildren[i].tabIndex = this.isCurrent ? 0 : -1;
	      }
	    }
	  }, {
	    key: 'setTarget',
	    value: function setTarget() {
	      var _pager$options2 = this.pager.options,
	          align = _pager$options2.align,
	          viewsToShow = _pager$options2.viewsToShow;

	      var target = this.pager.getStartCoords(this.index);

	      if (align) {
	        target += this.pager.getAlignOffset(this);
	      }

	      this.target = target;
	    }
	  }, {
	    key: 'setOrigin',
	    value: function setOrigin() {
	      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pager.trackPosition;

	      this.origin = this.target - trackPosition;
	    }
	  }, {
	    key: 'getStyles',
	    value: function getStyles() {
	      var _pager$options3 = this.pager.options,
	          axis = _pager$options3.axis,
	          viewsToShow = _pager$options3.viewsToShow,
	          infinite = _pager$options3.infinite;

	      var style = {};

	      // we need to position views inline when using the x axis
	      if (axis === 'x') {
	        style.display = 'inline-block';
	        style.verticalAlign = 'top';
	      }

	      // set width or height on view when viewsToShow is not auto
	      if (viewsToShow !== 'auto') {
	        style[axis === 'x' ? 'width' : 'height'] = 100 / this.pager.views.length + '%';
	      }

	      // make sure view stays in frame when using infinite option
	      if (infinite && !this.inBounds) {
	        style.position = 'relative';
	        style[axis === 'y' ? 'top' : 'left'] = this.getPosition();
	      }

	      // finally, apply any animations
	      return _extends({}, style, this.pager.animationBus.getStyles(this));
	    }
	  }]);

	  return View;
	}(_PagerElement4.default);

	var defaultOptions = {
	  viewsToShow: 1,
	  viewsToMove: 1,
	  align: 0,
	  contain: false,
	  axis: 'x',
	  autoSize: false,
	  animations: [],
	  infinite: false,
	  instant: false,
	  swipe: true,
	  swipeThreshold: 0.5,
	  flickTimeout: 300,
	  accessibility: true
	};

	var Pager = function () {
	  function Pager() {
	    var _this3 = this;

	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Pager);

	    this.hydrate = function () {
	      _this3.frame.setSize();
	      _this3.track.setSize();
	      _this3.views.forEach(function (view) {
	        view.setSize();
	        view.setTarget();
	      });
	      _this3.setPositionValue();
	      _this3.setViewStyles();
	      _this3.emit('hydrated');
	    };

	    var emitter = (0, _mitt2.default)();

	    this.on = emitter.on;
	    this.emit = emitter.emit;
	    this.off = emitter.off;

	    this.views = [];
	    this.currentIndex = 0;
	    this.currentView = null;
	    this.currentTween = 0;
	    this.trackPosition = 0;
	    this.isSwiping = false;

	    this.options = _extends({}, defaultOptions, options);

	    this.animationBus = new _animationBus2.default({
	      animations: this.options.animations,
	      origin: function origin(view) {
	        return view.origin;
	      }
	    });

	    if (isWindowDefined) {
	      this.resizeObserver = new _resizeObserverPolyfill2.default(function () {
	        _this3.hydrate();
	      });
	    }
	  }

	  _createClass(Pager, [{
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var lastOptions = this.options;

	      // spread new options over the old ones
	      this.options = _extends({}, this.options, options);

	      // merge animations into animation bus
	      this.animationBus.animations = this.options.animations;

	      // fire a viewChange event with the new indicies if viewsToShow has changed
	      if (lastOptions.viewsToShow !== this.options.viewsToShow) {
	        this.emit('viewChange', this.getCurrentIndicies());
	      }
	    }
	  }, {
	    key: 'addFrame',
	    value: function addFrame(node) {
	      this.frame = new _PagerElement4.default({
	        node: node,
	        pager: this
	      });
	    }
	  }, {
	    key: 'addTrack',
	    value: function addTrack(node) {
	      this.track = new Track({
	        node: node,
	        pager: this
	      });
	    }
	  }, {
	    key: 'addView',
	    value: function addView(node) {
	      var index = this.views.length;
	      var view = new View({
	        node: node,
	        index: index,
	        pager: this
	      });

	      // add view to collection
	      this.views.push(view);

	      // set this as the first view if there isn't one yet
	      if (!this.currentView) {
	        this.setCurrentView({
	          index: index,
	          suppressEvent: true
	        });
	      }

	      // listen for width and height changes
	      if (isWindowDefined) {
	        this.resizeObserver.observe(node);
	      }

	      // fire an event
	      this.emit('viewAdded');

	      return view;
	    }
	  }, {
	    key: 'removeView',
	    value: function removeView(view) {
	      // filter out view
	      this.views = this.views.filter(function (_view) {
	        return view !== _view;
	      });

	      // stop observing node
	      if (isWindowDefined) {
	        this.resizeObserver.disconnect(view.node);
	      }

	      // fire an event
	      this.emit('viewRemoved');
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	      this.setCurrentView({ direction: -1 });
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      this.setCurrentView({ direction: 1 });
	    }
	  }, {
	    key: 'setCurrentView',
	    value: function setCurrentView(_ref2) {
	      var _ref2$direction = _ref2.direction,
	          direction = _ref2$direction === undefined ? 0 : _ref2$direction,
	          _ref2$index = _ref2.index,
	          index = _ref2$index === undefined ? this.currentIndex : _ref2$index,
	          _ref2$suppressEvent = _ref2.suppressEvent,
	          suppressEvent = _ref2$suppressEvent === undefined ? false : _ref2$suppressEvent;
	      var _options = this.options,
	          viewsToMove = _options.viewsToMove,
	          infinite = _options.infinite;

	      var newIndex = index + direction * viewsToMove;

	      var previousIndex = this.currentIndex;
	      var currentIndex = infinite ? newIndex : (0, _utils.clamp)(newIndex, 0, this.views.length - 1);

	      var previousView = this.getView(previousIndex);
	      var currentView = this.getView(currentIndex);

	      // set current index and view
	      this.currentIndex = currentIndex;
	      this.currentView = currentView;

	      // swap current view flags
	      previousView.setCurrent(false);
	      currentView.setCurrent(true);

	      var rangeStart = currentIndex;
	      var rangeEnd = currentIndex + viewsToMove - 1;
	      var viewRange = (0, _utils.range)(rangeStart, rangeEnd, this.views.length);

	      // set flags for which views are currently showing
	      this.views.forEach(function (view, index) {
	        view.setVisible(index === currentIndex);
	      });

	      // set the track position to the new view
	      this.setPositionValue();

	      if (!suppressEvent) {
	        this.emit('viewChange', this.getCurrentIndicies());
	      }
	    }
	  }, {
	    key: 'setPositionValue',
	    value: function setPositionValue() {
	      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentView ? this.currentView.target : 0;

	      if (!this.isSwiping) {
	        var _options2 = this.options,
	            viewsToShow = _options2.viewsToShow,
	            autoSize = _options2.autoSize,
	            infinite = _options2.infinite,
	            contain = _options2.contain;

	        var trackSize = this.getTrackSize();

	        if (infinite) {
	          // we offset by a track multiplier so infinite animation can take advantage of
	          // physics by animating to a large value, the final value provided in getTransformValue
	          // will return the proper wrapped value
	          trackPosition -= (Math.floor(this.currentIndex / this.views.length) || 0) * trackSize;
	        }

	        if (contain) {
	          var trackEndOffset = viewsToShow === 'auto' && autoSize || viewsToShow <= 1 ? 0 : this.getFrameSize({ autoSize: false });
	          trackPosition = (0, _utils.clamp)(trackPosition, trackEndOffset - trackSize, 0);
	        }
	      }

	      this.trackPosition = trackPosition;
	    }
	  }, {
	    key: 'setViewStyles',
	    value: function setViewStyles() {
	      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var _options3 = this.options,
	          infinite = _options3.infinite,
	          align = _options3.align;

	      var frameSize = this.getFrameSize();
	      var trackSize = this.getTrackSize();
	      var wrappedtrackPosition = (0, _utils.modulo)(trackPosition, -trackSize);

	      this.views.reduce(function (lastPosition, view, index) {
	        var viewSize = view.getSize();
	        var nextPosition = lastPosition + viewSize;
	        var position = lastPosition;

	        if (nextPosition + viewSize * align < Math.abs(wrappedtrackPosition)) {
	          // shift views around so they are always visible in frame
	          if (infinite) {
	            position += trackSize - lastPosition;
	          }
	          view.inBounds = false;
	        } else {
	          view.inBounds = true;
	        }

	        view.setPosition(position);
	        view.setOrigin(trackPosition);

	        return nextPosition;
	      }, 0);
	    }
	  }, {
	    key: 'getNumericViewsToShow',
	    value: function getNumericViewsToShow() {
	      return isNaN(this.options.viewsToShow) ? 1 : this.options.viewsToShow;
	    }
	  }, {
	    key: 'getMaxDimensions',
	    value: function getMaxDimensions(indices) {
	      var _this4 = this;

	      var axis = this.options.axis;

	      var widths = [];
	      var heights = [];

	      indices.forEach(function (index) {
	        var view = isNaN(index) ? index : _this4.getView(index);
	        widths.push(view.getSize('width'));
	        heights.push(view.getSize('height'));
	      });

	      return {
	        width: axis === 'x' ? (0, _utils.sum)(widths) : (0, _utils.max)(widths),
	        height: axis === 'y' ? (0, _utils.sum)(heights) : (0, _utils.max)(heights)
	      };
	    }
	  }, {
	    key: 'getCurrentIndicies',
	    value: function getCurrentIndicies() {
	      var _options4 = this.options,
	          infinite = _options4.infinite,
	          contain = _options4.contain;

	      var currentViews = [];
	      var viewsToShow = isNaN(this.options.viewsToShow) ? 1 : this.options.viewsToShow;
	      var minIndex = this.currentIndex;
	      var maxIndex = this.currentIndex + (viewsToShow - 1);

	      if (contain) {
	        // if containing, we need to clamp the start and end indexes so we only return what's in view
	        minIndex = (0, _utils.clamp)(minIndex, 0, this.views.length - viewsToShow);
	        maxIndex = (0, _utils.clamp)(maxIndex, 0, this.views.length - 1);
	        for (var i = minIndex; i <= maxIndex; i++) {
	          currentViews.push(i);
	        }
	      } else {
	        for (var _i = minIndex; _i <= maxIndex; _i++) {
	          currentViews.push(infinite ? (0, _utils.modulo)(_i, this.views.length) : (0, _utils.clamp)(_i, 0, this.views.length - 1));
	        }
	      }

	      return currentViews;
	    }
	  }, {
	    key: 'getFrameSize',
	    value: function getFrameSize() {
	      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref3$autoSize = _ref3.autoSize,
	          autoSize = _ref3$autoSize === undefined ? this.options.autoSize : _ref3$autoSize,
	          _ref3$fullSize = _ref3.fullSize,
	          fullSize = _ref3$fullSize === undefined ? false : _ref3$fullSize;

	      var dimensions = {
	        width: 0,
	        height: 0
	      };

	      if (this.views.length) {
	        if (autoSize) {
	          var currentViews = this.getCurrentIndicies();
	          dimensions = this.getMaxDimensions(currentViews);
	        } else if (this.frame) {
	          dimensions = {
	            width: this.frame.getSize('width'),
	            height: this.frame.getSize('height')
	          };
	        }
	      }

	      if (fullSize) {
	        return dimensions;
	      } else {
	        return dimensions[this.options.axis === 'x' ? 'width' : 'height'];
	      }
	    }
	  }, {
	    key: 'getTrackSize',
	    value: function getTrackSize() {
	      var includeLastSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      var lastIndex = includeLastSlide ? this.views.length : this.views.length - 1;
	      var size = 0;
	      this.views.slice(0, lastIndex).forEach(function (view) {
	        size += view.getSize();
	      });
	      return size;
	    }
	  }, {
	    key: 'getView',
	    value: function getView(index) {
	      return this.views[(0, _utils.modulo)(index, this.views.length)];
	    }

	    // where the view should start

	  }, {
	    key: 'getStartCoords',
	    value: function getStartCoords(index) {
	      var target = 0;
	      this.views.slice(0, index).forEach(function (view) {
	        target -= view.getSize();
	      });
	      return target;
	    }

	    // how much to offset the view defined by the align option

	  }, {
	    key: 'getAlignOffset',
	    value: function getAlignOffset(view) {
	      var frameSize = this.getFrameSize({ autoSize: false });
	      var viewSize = view.getSize();
	      return (frameSize - viewSize) * this.options.align;
	    }
	  }, {
	    key: 'getPositionValue',
	    value: function getPositionValue() {
	      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.trackPosition;
	      var _options5 = this.options,
	          infinite = _options5.infinite,
	          contain = _options5.contain;

	      var position = { x: 0, y: 0

	        // store the current animated value so we can reference it later
	      };this.currentTween = trackPosition;

	      // wrap the track position if this is an infinite track
	      if (infinite) {
	        var trackSize = this.getTrackSize();
	        trackPosition = (0, _utils.modulo)(trackPosition, -trackSize) || 0;
	      }

	      // emit a "scroll" event so we can do things based on the progress of the track
	      this.emit('scroll', {
	        progress: trackPosition / this.getTrackSize(false),
	        position: trackPosition
	      });

	      // set the proper transform axis based on our options
	      position[this.options.axis] = trackPosition;

	      return position;
	    }
	  }, {
	    key: 'resetViewIndex',
	    value: function resetViewIndex() {
	      // reset back to a normal index
	      this.setCurrentView({
	        index: (0, _utils.modulo)(this.currentIndex, this.views.length),
	        suppressEvent: true
	      });
	    }
	  }]);

	  return Pager;
	}();

	exports.default = Pager;
	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	function n(n) {
	  return n = n || Object.create(null), { on: function on(c, e) {
	      (n[c] || (n[c] = [])).push(e);
	    }, off: function off(c, e) {
	      n[c] && n[c].splice(n[c].indexOf(e) >>> 0, 1);
	    }, emit: function emit(c, e) {
	      (n[c] || []).slice().map(function (n) {
	        n(e);
	      }), (n["*"] || []).slice().map(function (n) {
	        n(c, e);
	      });
	    } };
	}module.exports = n;
	//# sourceMappingURL=mitt.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function (el, options) {
	  options = options || {};

	  var elementDocument = el.ownerDocument || el;
	  var basicTabbables = [];
	  var orderedTabbables = [];

	  // A node is "available" if
	  // - it's computed style
	  var isUnavailable = createIsUnavailable(elementDocument);

	  var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];

	  var candidates = el.querySelectorAll(candidateSelectors.join(','));

	  if (options.includeContainer) {
	    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

	    if (candidateSelectors.some(function (candidateSelector) {
	      return matches.call(el, candidateSelector);
	    })) {
	      candidates = Array.prototype.slice.apply(candidates);
	      candidates.unshift(el);
	    }
	  }

	  var candidate, candidateIndex;
	  for (var i = 0, l = candidates.length; i < l; i++) {
	    candidate = candidates[i];
	    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

	    if (candidateIndex < 0 || candidate.tagName === 'INPUT' && candidate.type === 'hidden' || candidate.disabled || isUnavailable(candidate, elementDocument)) {
	      continue;
	    }

	    if (candidateIndex === 0) {
	      basicTabbables.push(candidate);
	    } else {
	      orderedTabbables.push({
	        index: i,
	        tabIndex: candidateIndex,
	        node: candidate
	      });
	    }
	  }

	  var tabbableNodes = orderedTabbables.sort(function (a, b) {
	    return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
	  }).map(function (a) {
	    return a.node;
	  });

	  Array.prototype.push.apply(tabbableNodes, basicTabbables);

	  return tabbableNodes;
	};

	function createIsUnavailable(elementDocument) {
	  // Node cache must be refreshed on every check, in case
	  // the content of the element has changed
	  var isOffCache = [];

	  // "off" means `display: none;`, as opposed to "hidden",
	  // which means `visibility: hidden;`. getComputedStyle
	  // accurately reflects visiblity in context but not
	  // "off" state, so we need to recursively check parents.

	  function isOff(node, nodeComputedStyle) {
	    if (node === elementDocument.documentElement) return false;

	    // Find the cached node (Array.prototype.find not available in IE9)
	    for (var i = 0, length = isOffCache.length; i < length; i++) {
	      if (isOffCache[i][0] === node) return isOffCache[i][1];
	    }

	    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

	    var result = false;

	    if (nodeComputedStyle.display === 'none') {
	      result = true;
	    } else if (node.parentNode) {
	      result = isOff(node.parentNode);
	    }

	    isOffCache.push([node, result]);

	    return result;
	  }

	  return function isUnavailable(node) {
	    if (node === elementDocument.documentElement) return false;

	    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

	    if (isOff(node, computedStyle)) return true;

	    return computedStyle.visibility === 'hidden';
	  };
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _polylinearScale = __webpack_require__(16);

	var _polylinearScale2 = _interopRequireDefault(_polylinearScale);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var transformUnits = {
	  perspective: 'px',
	  rotate: 'deg',
	  rotateX: 'deg',
	  rotateY: 'deg',
	  rotateZ: 'deg',
	  scale: '',
	  scaleX: '',
	  scaleY: '',
	  scaleZ: '',
	  skew: 'deg',
	  skewX: 'deg',
	  skewY: 'deg',
	  translateX: 'px',
	  translateY: 'px',
	  translateZ: 'px'
	};
	var transformKeys = Object.keys(transformUnits);

	var AnimationBus = function () {
	  function AnimationBus(_ref) {
	    var animations = _ref.animations,
	        element = _ref.element,
	        origin = _ref.origin;

	    _classCallCheck(this, AnimationBus);

	    this.animations = animations;
	    this.element = element;
	    this.origin = origin;
	  }

	  _createClass(AnimationBus, [{
	    key: 'getStyles',
	    value: function getStyles() {
	      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

	      var origin = this.origin(element);
	      var transformValues = [];
	      var styles = {};

	      this.animations.forEach(function (animation) {
	        var prop = animation.prop;
	        var unit = animation.unit || transformUnits[prop] || '';
	        var value = (0, _polylinearScale2.default)(animation.stops)(origin);

	        if (transformKeys.indexOf(prop) > -1) {
	          transformValues.push(prop + '(' + value + unit + ')');
	        } else {
	          styles[prop] = '' + value + unit;
	        }
	      });

	      if (transformValues.length) {
	        styles.transform = transformValues.join(' ');
	      }

	      return styles;
	    }
	  }, {
	    key: 'applyStyles',
	    value: function applyStyles() {
	      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

	      var styles = this.getStyles(element);
	      Object.keys(styles).forEach(function (key) {
	        return element.style[key] = styles[key];
	      });
	    }
	  }]);

	  return AnimationBus;
	}();

	exports.default = AnimationBus;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	exports.default = polylinearScale;

	var _piecewise = __webpack_require__(17);

	var _piecewise2 = _interopRequireDefault(_piecewise);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function polylinearScale(stops) {
	  var xs = [];
	  var ys_r = [];
	  var ys_g = [];
	  var ys_b = [];

	  stops.forEach(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        domain = _ref2[0],
	        range = _ref2[1];

	    xs.push(domain);
	    if (isNaN(range)) {
	      ys_r.push(parseInt(range.substr(1, 2), 16));
	      ys_g.push(parseInt(range.substr(3, 2), 16));
	      ys_b.push(parseInt(range.substr(5, 2), 16));
	    } else {
	      ys_r.push(range);
	    }
	  });

	  var pw_r = (0, _piecewise2.default)(xs, ys_r);

	  if (ys_g.length && ys_b.length) {
	    var _ret = function () {
	      var pw_g = (0, _piecewise2.default)(xs, ys_g);
	      var pw_b = (0, _piecewise2.default)(xs, ys_b);
	      return {
	        v: function v(x) {
	          return 'rgb(' + Math.round(pw_r(x)) + ', ' + Math.round(pw_g(x)) + ', ' + Math.round(pw_b(x)) + ')';
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  } else {
	    return function (x) {
	      return pw_r(x);
	    };
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = piecewise;
	function piecewise(xs, ys) {
	  return function (x) {
	    // out of bounds
	    if (x <= xs[0]) {
	      return ys[0];
	    } else if (x >= xs[xs.length - 1]) {
	      return ys[xs.length - 1];
	    }

	    // bisect
	    var lo = 0;
	    var hi = xs.length - 1;

	    while (hi - lo > 1) {
	      var mid = lo + hi >> 1;
	      if (x < xs[mid]) {
	        hi = mid;
	      } else {
	        lo = mid;
	      }
	    }

	    // project
	    return ys[lo] + (ys[hi] - ys[lo]) / (xs[hi] - xs[lo]) * (x - xs[lo]);
	  };
	}
	module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PagerElement = function () {
	  function PagerElement(_ref) {
	    var node = _ref.node,
	        pager = _ref.pager,
	        width = _ref.width,
	        height = _ref.height;

	    _classCallCheck(this, PagerElement);

	    this.node = node;
	    this.pager = pager;
	    this.x = this.y = 0;
	    this.setSize(width, height);
	  }

	  _createClass(PagerElement, [{
	    key: 'setSize',
	    value: function setSize(width, height) {
	      this.width = width || this.node.offsetWidth;
	      this.height = height || this.node.offsetHeight;
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(position) {
	      this[this.pager.options.axis] = position;
	    }
	  }, {
	    key: 'getSize',
	    value: function getSize(dimension) {
	      if (dimension === 'width' || dimension === 'height') {
	        return this[dimension];
	      } else {
	        var axis = this.pager.options.axis;
	        return this[axis === 'x' ? 'width' : 'height'];
	      }
	    }
	  }, {
	    key: 'getPosition',
	    value: function getPosition() {
	      return this[this.pager.options.axis];
	    }
	  }]);

	  return PagerElement;
	}();

	exports.default = PagerElement;
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modulo = modulo;
	exports.clamp = clamp;
	exports.sum = sum;
	exports.max = max;
	exports.range = range;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function modulo(val, max) {
	  return (val % max + max) % max;
	}

	function clamp(val, min, max) {
	  return Math.min(Math.max(min, val), max);
	}

	function sum(arr) {
	  return arr.reduce(function (a, b) {
	    return a + b;
	  }, 0);
	}

	function max(arr) {
	  return Math.max.apply(null, arr);
	}

	function range(start, end, max) {
	  return [].concat(_toConsumableArray(Array(1 + end - start))).map(function (val) {
	    return max ? modulo(start + val, max) : start + val;
	  });
	}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(23);

	var _reactMotion = __webpack_require__(24);

	var _Pager = __webpack_require__(12);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _Swipe = __webpack_require__(25);

	var _Swipe2 = _interopRequireDefault(_Swipe);

	var _Keyboard = __webpack_require__(26);

	var _Keyboard2 = _interopRequireDefault(_Keyboard);

	var _specialAssign = __webpack_require__(27);

	var _specialAssign2 = _interopRequireDefault(_specialAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var checkedProps = {
	  tag: _propTypes2.default.any,
	  autoSize: _propTypes2.default.oneOf([true, false, 'width', 'height']),
	  accessibility: _propTypes2.default.bool,
	  springConfig: _propTypes2.default.objectOf(_propTypes2.default.number)
	};

	var Frame = function (_Component) {
	  _inherits(Frame, _Component);

	  function Frame(props) {
	    _classCallCheck(this, Frame);

	    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props));

	    _this._setFrameSize = function () {
	      var frameSize = _this.context.pager.getFrameSize({ fullSize: true });

	      if (frameSize.width && frameSize.height) {
	        _this.setState(frameSize, function () {
	          // we need to unset the instant flag now that React Motion has dimensions to animate to
	          if (_this.state.instant) {
	            _this.setState({ instant: false });
	          }
	        });
	      }
	    };

	    _this.state = {
	      width: 0,
	      height: 0,
	      instant: true
	    };
	    _this._hydrate = false;
	    return _this;
	  }

	  _createClass(Frame, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var pager = this.context.pager;
	      var _props = this.props,
	          autoSize = _props.autoSize,
	          accessibility = _props.accessibility;


	      pager.setOptions({ autoSize: autoSize, accessibility: accessibility });

	      this._swipe = new _Swipe2.default(pager);
	      this._keyboard = new _Keyboard2.default(pager);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var pager = this.context.pager;


	      pager.addFrame((0, _reactDom.findDOMNode)(this));

	      // set frame size initially and then based on certain pager events
	      this._setFrameSize();
	      pager.on('viewChange', this._setFrameSize);
	      pager.on('hydrated', this._setFrameSize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var autoSize = _ref.autoSize,
	          accessibility = _ref.accessibility;

	      // update any options that have changed
	      if (this.props.autoSize !== autoSize || this.props.accessibility !== accessibility) {
	        this.context.pager.setOptions({ autoSize: autoSize, accessibility: accessibility });
	        this._hydrate = true;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(nextProps) {
	      if (this._hydrate) {
	        this.context.pager.hydrate();
	        this._hydrate = false;
	      }
	    }
	  }, {
	    key: '_getFrameStyle',
	    value: function _getFrameStyle() {
	      var springConfig = this.props.springConfig;
	      var _state = this.state,
	          width = _state.width,
	          height = _state.height,
	          instant = _state.instant;

	      return {
	        maxWidth: instant ? width : (0, _reactMotion.spring)(width, springConfig),
	        height: instant ? height : (0, _reactMotion.spring)(height, springConfig)
	      };
	    }
	  }, {
	    key: '_renderFrame',
	    value: function _renderFrame(style) {
	      var pager = this.context.pager;
	      var _props2 = this.props,
	          tag = _props2.tag,
	          accessibility = _props2.accessibility;

	      var props = (0, _specialAssign2.default)(_extends({}, this._swipe.getEvents(), this._keyboard.getEvents(), {
	        tabIndex: accessibility ? 0 : null
	      }), this.props, checkedProps);

	      return (0, _react.createElement)(tag, _extends({}, props, {
	        style: _extends({}, style, props.style)
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var autoSize = this.props.autoSize;
	      var height = this.state.height;

	      var style = {
	        position: 'relative',
	        overflow: 'hidden'
	      };

	      if (autoSize) {
	        return _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: this._getFrameStyle() },
	          function (dimensions) {
	            if ((autoSize === true || autoSize === 'width') && dimensions.maxWidth) {
	              style.maxWidth = dimensions.maxWidth;
	            }
	            if ((autoSize === true || autoSize === 'height') && dimensions.height) {
	              style.height = dimensions.height;
	            }
	            return _this2._renderFrame(style);
	          }
	        );
	      } else {
	        return this._renderFrame(style);
	      }
	    }
	  }]);

	  return Frame;
	}(_react.Component);

	Frame.contextTypes = {
	  pager: _propTypes2.default.instanceOf(_Pager2.default)
	};
	Frame.propTypes = checkedProps;
	Frame.defaultProps = {
	  tag: 'div',
	  autoSize: false,
	  accessibility: true,
	  springConfig: _reactMotion.presets.noWobble
	};
	exports.default = Frame;
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function getTouchEvent(e) {
	  return e.touches && e.touches[0] || e;
	}

	var Swipe = function () {
	  function Swipe(pager) {
	    var _this = this;

	    _classCallCheck(this, Swipe);

	    this._onSwipeStart = function (e) {
	      var _getTouchEvent = getTouchEvent(e),
	          pageX = _getTouchEvent.pageX,
	          pageY = _getTouchEvent.pageY;

	      // we're now swiping


	      _this.pager.isSwiping = true;

	      // store the initial starting coordinates
	      _this._swipeStart = {
	        x: pageX,
	        y: pageY

	        // reset swipeDiff
	      };_this._swipeDiff = {
	        x: 0,
	        y: 0

	        // determine if a flick or not
	      };_this._isFlick = true;

	      setTimeout(function () {
	        _this._isFlick = false;
	      }, _this.pager.options.flickTimeout);

	      _this.pager.emit('swipeStart');
	    };

	    this._onSwipeMove = function (e) {
	      // bail if we aren't swiping
	      if (!_this.pager.isSwiping) return;

	      var _pager$options = _this.pager.options,
	          swipeThreshold = _pager$options.swipeThreshold,
	          axis = _pager$options.axis;

	      var _getTouchEvent2 = getTouchEvent(e),
	          pageX = _getTouchEvent2.pageX,
	          pageY = _getTouchEvent2.pageY;

	      // grab the current position of the track before


	      if (!_this._trackStart) {
	        _this._trackStart = _this.pager.currentTween;
	      }

	      // determine how much we have moved
	      _this._swipeDiff = {
	        x: _this._swipeStart.x - pageX,
	        y: _this._swipeStart.y - pageY
	      };

	      if (_this._isSwipe(swipeThreshold)) {
	        e.preventDefault();
	        e.stopPropagation();

	        var swipeDiff = _this._swipeDiff[axis];
	        var trackPosition = _this._trackStart - swipeDiff;

	        _this.pager.setPositionValue(trackPosition);

	        _this.pager.emit('swipeMove');
	      }
	    };

	    this._onSwipeEnd = function () {
	      var _pager$options2 = _this.pager.options,
	          swipeThreshold = _pager$options2.swipeThreshold,
	          viewsToMove = _pager$options2.viewsToMove,
	          axis = _pager$options2.axis,
	          infinite = _pager$options2.infinite;

	      var threshold = _this._isFlick ? swipeThreshold : _this.pager.currentView.getSize() * viewsToMove * swipeThreshold;

	      // we've stopped swiping
	      _this.pager.isSwiping = false;

	      // reset start track so we can grab it again on the next swipe
	      _this._trackStart = false;

	      // don't move anything if there hasn't been an attempted swipe
	      if (_this._swipeDiff.x || _this._swipeDiff.y) {
	        // determine if we've passed the defined threshold
	        if (_this._isSwipe(threshold)) {
	          if (_this._swipeDiff[axis] < 0) {
	            _this.pager.prev();
	          } else {
	            _this.pager.next();
	          }
	        }
	        // if we didn't, reset back to original view
	        else {
	            _this.pager.setPositionValue();
	          }
	      }

	      _this.pager.emit('swipeEnd');
	    };

	    this._onSwipePast = function () {
	      // perform a swipe end if we swiped past the component
	      if (_this.pager.isSwiping) {
	        _this._onSwipeEnd();
	      }
	    };

	    this.pager = pager;
	    this._trackStart = false;
	    this._swipeStart = this._swipeDiff = {
	      x: 0,
	      y: 0
	    };
	  }

	  _createClass(Swipe, [{
	    key: '_isSwipe',
	    value: function _isSwipe(threshold) {
	      var _swipeDiff = this._swipeDiff,
	          x = _swipeDiff.x,
	          y = _swipeDiff.y;

	      return this.pager.options.axis === 'x' ? Math.abs(x) > Math.max(threshold, Math.abs(y)) : Math.abs(x) < Math.max(threshold, Math.abs(y));
	    }
	  }, {
	    key: 'getEvents',
	    value: function getEvents() {
	      var swipe = this.pager.options.swipe;

	      var swipeEvents = {};

	      if (swipe === true || swipe === 'mouse') {
	        swipeEvents.onMouseDown = this._onSwipeStart;
	        swipeEvents.onMouseMove = this._onSwipeMove;
	        swipeEvents.onMouseUp = this._onSwipeEnd;
	        swipeEvents.onMouseLeave = this._onSwipePast;
	      }

	      if (swipe === true || swipe === 'touch') {
	        swipeEvents.onTouchStart = this._onSwipeStart;
	        swipeEvents.onTouchMove = this._onSwipeMove;
	        swipeEvents.onTouchEnd = this._onSwipeEnd;
	      }

	      return swipeEvents;
	    }
	  }]);

	  return Swipe;
	}();

	exports.default = Swipe;
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(20);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Keyboard = function () {
	  function Keyboard(pager) {
	    var _this = this;

	    _classCallCheck(this, Keyboard);

	    this._handleKeyDown = function (e) {
	      // handle respective key controls
	      switch (e.key) {
	        // move to the previous view
	        case 'ArrowUp':
	        case 'ArrowLeft':
	          _this.pager.prev();
	          return;

	        // move to the next view
	        case 'ArrowDown':
	        case 'ArrowRight':
	        case ' ':
	          _this.pager.next();
	          return;

	        // move to first view
	        case 'Home':
	          _this.pager.setCurrentView({ index: 0 });
	          return;

	        // move to last view
	        case 'End':
	          _this.pager.setCurrentView({ index: _this.pager.views.length - 1 });
	          return;
	      }

	      // 1 - 9 keys mapped to respective slide number
	      var maxNumKey = (0, _utils.clamp)(_this.pager.views.length, 0, 9);

	      for (var i = 1; i <= maxNumKey; i++) {
	        if (+e.key === i) {
	          _this.pager.setCurrentView({ index: i - 1 });
	        }
	      }
	    };

	    this.pager = pager;
	  }

	  _createClass(Keyboard, [{
	    key: 'getEvents',
	    value: function getEvents() {
	      var keyboardEvents = {};

	      if (this.pager.options.accessibility) {
	        keyboardEvents.onKeyDown = this._handleKeyDown;
	      }

	      return keyboardEvents;
	    }
	  }]);

	  return Keyboard;
	}();

	exports.default = Keyboard;
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = specialAssign;
	function specialAssign(a, b, reserved) {
	  for (var x in b) {
	    if (!b.hasOwnProperty(x) || reserved[x]) continue;
	    a[x] = b[x];
	  }
	  return a;
	}
	module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(23);

	var _reactMotion = __webpack_require__(24);

	var _Pager = __webpack_require__(12);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _getIndex = __webpack_require__(29);

	var _getIndex2 = _interopRequireDefault(_getIndex);

	var _specialAssign = __webpack_require__(27);

	var _specialAssign2 = _interopRequireDefault(_specialAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {
	  return null;
	};
	var checkedProps = {
	  tag: _propTypes2.default.any,
	  currentView: _propTypes2.default.any,
	  viewsToShow: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
	  viewsToMove: _propTypes2.default.number,
	  align: _propTypes2.default.number,
	  contain: _propTypes2.default.bool,
	  axis: _propTypes2.default.oneOf(['x', 'y']),
	  animations: _propTypes2.default.array,
	  infinite: _propTypes2.default.bool,
	  instant: _propTypes2.default.bool,
	  swipe: _propTypes2.default.oneOf([true, false, 'mouse', 'touch']),
	  swipeThreshold: _propTypes2.default.number,
	  flickTimeout: _propTypes2.default.number,
	  // rightToLeft: PropTypes.bool,
	  // lazyLoad: PropTypes.bool,
	  springConfig: _propTypes2.default.objectOf(_propTypes2.default.number),
	  onSwipeStart: _propTypes2.default.func,
	  onSwipeMove: _propTypes2.default.func,
	  onSwipeEnd: _propTypes2.default.func,
	  onScroll: _propTypes2.default.func,
	  onViewChange: _propTypes2.default.func,
	  onRest: _propTypes2.default.func
	};
	var isNotEqual = function isNotEqual(current, next) {
	  return current.viewsToShow !== next.viewsToShow || current.viewsToMove !== next.viewsToMove || current.align !== next.align || current.axis !== next.axis || current.animations !== next.animations || current.infinite !== next.infinite || current.swipe !== next.swipe || current.swipeThreshold !== next.swipeThreshold || current.flickTimeout !== next.flickTimeout;
	};

	// Track scroller is an intermediate component that allows us to provide the
	// React Motion value to onScroll and lets any user of onScroll use setState

	var TrackScroller = function (_Component) {
	  _inherits(TrackScroller, _Component);

	  function TrackScroller() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, TrackScroller);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TrackScroller.__proto__ || Object.getPrototypeOf(TrackScroller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      x: 0,
	      y: 0
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(TrackScroller, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref2) {
	      var _this2 = this;

	      var trackPosition = _ref2.trackPosition;
	      var pager = this.context.pager;

	      // update view styles with current position tween
	      // this method can get called hundreds of times, let's make sure to optimize as much as we can

	      pager.setViewStyles(trackPosition);

	      // update onScroll callback, we use requestAnimationFrame to avoid bouncing
	      // back from updates from onScroll while React Motion is trying to update it's own tree
	      // https://github.com/chenglou/react-motion/issues/357#issuecomment-262393424
	      if (this.props.trackPosition !== trackPosition) {
	        requestAnimationFrame(function () {
	          return _this2.props.onScroll(trackPosition / pager.getTrackSize(false) * -1, trackPosition);
	        });
	      }
	    }
	  }, {
	    key: '_renderViews',
	    value: function _renderViews() {
	      // we need Children map in order for the infinite option to work
	      // not actually sure why this is the case
	      return _react.Children.map(this.props.children, function (child) {
	        return child;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pager = this.context.pager;

	      var _props = this.props,
	          tag = _props.tag,
	          trackPosition = _props.trackPosition,
	          children = _props.children,
	          restProps = _objectWithoutProperties(_props, ['tag', 'trackPosition', 'children']);

	      var style = _extends({}, restProps.style);

	      if (pager.track) {
	        style = _extends({}, style, pager.track.getStyles(trackPosition));
	      }

	      return (0, _react.createElement)(tag, _extends({}, restProps, {
	        style: style
	      }), this._renderViews());
	    }
	  }]);

	  return TrackScroller;
	}(_react.Component);

	TrackScroller.propTypes = checkedProps;
	TrackScroller.contextTypes = {
	  pager: _propTypes2.default.instanceOf(_Pager2.default)
	};

	var Track = function (_Component2) {
	  _inherits(Track, _Component2);

	  function Track() {
	    var _ref3;

	    var _temp2, _this3, _ret2;

	    _classCallCheck(this, Track);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref3 = Track.__proto__ || Object.getPrototypeOf(Track)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
	      instant: false
	    }, _this3._currentTween = 0, _this3._hydrate = false, _this3._handleOnRest = function () {
	      if (_this3.props.infinite && !_this3.state.instant) {
	        // reset back to a normal index
	        _this3.context.pager.resetViewIndex();

	        // set instant flag so we can prime track for next move
	        _this3._setValueInstantly(true, true);
	      }

	      _this3.props.onRest();
	    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
	  }

	  _createClass(Track, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.context.pager.setOptions(this.props);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this4 = this;

	      var pager = this.context.pager;

	      // add track to pager

	      pager.addTrack((0, _reactDom.findDOMNode)(this));

	      // set initial view index and listen for any incoming view index changes
	      this.scrollTo((0, _getIndex2.default)(this.props.currentView, this.props.children));

	      // set values instantly on respective events
	      pager.on('hydrated', function () {
	        return _this4._setValueInstantly(true, true);
	      });
	      pager.on('swipeMove', function () {
	        return _this4._setValueInstantly(true);
	      });
	      pager.on('swipeEnd', function () {
	        return _this4._setValueInstantly(false);
	      });

	      // prop callbacks
	      pager.on('swipeStart', this.props.onSwipeStart);
	      pager.on('swipeMove', this.props.onSwipeMove);
	      pager.on('swipeEnd', this.props.onSwipeEnd);
	      pager.on('viewChange', this.props.onViewChange);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var currentView = nextProps.currentView,
	          instant = nextProps.instant,
	          children = nextProps.children;

	      // update instant state from props

	      if (this.props.instant !== instant) {
	        this._setValueInstantly(instant);
	      }

	      // update state with new index if necessary
	      if ((typeof currentView === 'undefined' ? 'undefined' : _typeof(currentView)) !== undefined && this.props.currentView !== currentView) {
	        this.scrollTo((0, _getIndex2.default)(currentView, children));
	      }

	      // update any options that have changed
	      if (isNotEqual(this.props, nextProps)) {
	        this.context.pager.setOptions(nextProps);
	        this._hydrate = true;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(nextProps) {
	      if (this._hydrate) {
	        this.context.pager.hydrate();
	        this._hydrate = false;
	      }
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	      this.context.pager.prev();
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      this.context.pager.next();
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo(index) {
	      this.context.pager.setCurrentView({ index: index });
	    }
	  }, {
	    key: '_setValueInstantly',
	    value: function _setValueInstantly(instant, reset) {
	      var _this5 = this;

	      this.setState({ instant: instant }, function () {
	        if (reset) {
	          _this5.setState({ instant: false });
	        }
	      });
	    }
	  }, {
	    key: '_getTrackStyle',
	    value: function _getTrackStyle() {
	      var trackPosition = this.context.pager.trackPosition;

	      if (!this.state.instant) {
	        trackPosition = (0, _reactMotion.spring)(trackPosition, this.props.springConfig);
	      }
	      return { trackPosition: trackPosition };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          tag = _props2.tag,
	          onScroll = _props2.onScroll,
	          restProps = _objectWithoutProperties(_props2, ['tag', 'onScroll']);

	      return _react2.default.createElement(
	        _reactMotion.Motion,
	        {
	          style: this._getTrackStyle(),
	          onRest: this._handleOnRest
	        },
	        function (_ref4) {
	          var trackPosition = _ref4.trackPosition;
	          return (0, _react.createElement)(TrackScroller, (0, _specialAssign2.default)({ trackPosition: trackPosition, tag: tag, onScroll: onScroll }, restProps, checkedProps));
	        }
	      );
	    }
	  }]);

	  return Track;
	}(_react.Component);

	Track.propTypes = checkedProps;
	Track.defaultProps = {
	  tag: 'div',
	  currentView: 0,
	  viewsToShow: 1,
	  viewsToMove: 1,
	  align: 0,
	  contain: false,
	  axis: 'x',
	  infinite: false,
	  instant: false,
	  swipe: true,
	  swipeThreshold: 0.5,
	  flickTimeout: 300,
	  springConfig: _reactMotion.presets.noWobble,
	  onSwipeStart: noop,
	  onSwipeMove: noop,
	  onSwipeEnd: noop,
	  onScroll: noop,
	  onViewChange: noop,
	  onRest: noop
	};
	Track.contextTypes = {
	  pager: _propTypes2.default.instanceOf(_Pager2.default)
	};
	exports.default = Track;
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getIndex;

	var _react = __webpack_require__(2);

	function getIndex(key, children) {
	  var index = null;

	  _react.Children.forEach(children, function (child, _index) {
	    if (child.key === key || _index === key) {
	      index = _index;
	      return;
	    }
	  });

	  return index;
	}
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(23);

	var _Pager = __webpack_require__(12);

	var _Pager2 = _interopRequireDefault(_Pager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_Component) {
	  _inherits(View, _Component);

	  function View() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, View);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this._viewAdded = false, _this._viewInstance = null, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(View, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        view: this._viewInstance
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._viewInstance = this.context.pager.addView((0, _reactDom.findDOMNode)(this));
	      this._viewAdded = true;
	      this.forceUpdate();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.pager.removeView(this._viewInstance);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pager = this.context.pager;
	      var _pager$options = pager.options,
	          viewsToShow = _pager$options.viewsToShow,
	          axis = _pager$options.axis;

	      var _props = this.props,
	          tag = _props.tag,
	          trackSize = _props.trackSize,
	          restProps = _objectWithoutProperties(_props, ['tag', 'trackSize']);

	      var style = _extends({}, restProps.style);

	      // hide view visually until it has been added to the pager
	      // this should help avoid FOUC
	      if (!this._viewAdded) {
	        style.visibility = 'hidden';
	        style.pointerEvents = 'none';
	      }

	      if (this._viewInstance) {
	        style = _extends({}, style, this._viewInstance.getStyles());
	      }

	      return (0, _react.createElement)(tag, _extends({}, restProps, { style: style }));
	    }
	  }]);

	  return View;
	}(_react.Component);

	View.contextTypes = {
	  pager: _propTypes2.default.instanceOf(_Pager2.default)
	};
	View.childContextTypes = {
	  view: _propTypes2.default.any
	};
	View.propTypes = {
	  tag: _propTypes2.default.any
	};
	View.defaultProps = {
	  tag: 'div'
	};
	exports.default = View;
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _animationBus = __webpack_require__(15);

	var _animationBus2 = _interopRequireDefault(_animationBus);

	var _Pager = __webpack_require__(12);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _specialAssign = __webpack_require__(27);

	var _specialAssign2 = _interopRequireDefault(_specialAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var checkedProps = {
	  tag: _propTypes2.default.string,
	  index: _propTypes2.default.number,
	  animations: _propTypes2.default.array
	};

	var AnimatedView = function (_Component) {
	  _inherits(AnimatedView, _Component);

	  function AnimatedView() {
	    _classCallCheck(this, AnimatedView);

	    return _possibleConstructorReturn(this, (AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).apply(this, arguments));
	  }

	  _createClass(AnimatedView, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var animations = this.props.animations;


	      if (animations.length) {
	        this._animationBus = new _animationBus2.default({
	          animations: animations,
	          origin: function origin(view) {
	            return view.origin;
	          }
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          tag = _props.tag,
	          index = _props.index,
	          restProps = _objectWithoutProperties(_props, ['tag', 'index']);

	      var style = _extends({}, restProps.style);

	      if (this._animationBus) {
	        var view = this.context.view || this.context.pager.getView(index);
	        if (view) {
	          style = _extends({}, restProps.style, this._animationBus.getStyles(view));
	        }
	      }

	      return (0, _react.createElement)(tag, (0, _specialAssign2.default)({ style: style }, this.props, checkedProps));
	    }
	  }]);

	  return AnimatedView;
	}(_react.Component);

	AnimatedView.contextTypes = {
	  pager: _propTypes2.default.instanceOf(_Pager2.default),
	  view: _propTypes2.default.any
	};
	AnimatedView.propTypes = checkedProps;
	AnimatedView.defaultProps = {
	  tag: 'div',
	  animations: []
	};
	exports.default = AnimatedView;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;