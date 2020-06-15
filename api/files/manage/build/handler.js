(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(1));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = ({
  statusCode = 200,
  type = "text/html",
  body = "",
  isBase64Encoded = false,
  headers = {}
} = {}) => {
  return {
    statusCode,
    body,
    headers: _objectSpread({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": type
    }, headers),
    isBase64Encoded
  };
};

exports.default = _default;
//# sourceMappingURL=createResponse.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getEnvironment", {
  enumerable: true,
  get: function () {
    return _getEnvironment.default;
  }
});
Object.defineProperty(exports, "createHandler", {
  enumerable: true,
  get: function () {
    return _createHandler.default;
  }
});
Object.defineProperty(exports, "getObjectParams", {
  enumerable: true,
  get: function () {
    return _getObjectParams.default;
  }
});

var _getEnvironment = _interopRequireDefault(__webpack_require__(4));

var _createHandler = _interopRequireDefault(__webpack_require__(14));

var _getObjectParams = _interopRequireDefault(__webpack_require__(15));
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => ({
  bucket: process.env.S3_BUCKET,
  region: process.env.AWS_REGION
});

exports.default = _default;
//# sourceMappingURL=getEnvironment.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createHandler", {
  enumerable: true,
  get: function () {
    return _create.default;
  }
});
Object.defineProperty(exports, "createResponse", {
  enumerable: true,
  get: function () {
    return _createResponse.default;
  }
});

var _create = _interopRequireDefault(__webpack_require__(8));

var _createResponse = _interopRequireDefault(__webpack_require__(2));
//# sourceMappingURL=index.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(__webpack_require__(12));

var _s = _interopRequireDefault(__webpack_require__(13));

var _utils = __webpack_require__(3);

var _managers = _interopRequireDefault(__webpack_require__(16));

var _default = () => ({
  type: "handler",
  name: "handler-download-file",

  async handle({
    args
  }) {
    const [event] = args;
    const handler = (0, _utils.createHandler)(async event => {
      const keys = [];

      for (let i = 0; i < event.Records.length; i++) {
        const record = event.Records[i];

        if (typeof record.s3.object.key === "string") {
          keys.push(record.s3.object.key);
        }
      }

      const {
        region
      } = (0, _utils.getEnvironment)();
      const s3 = new _s.default({
        region
      });

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        const extension = _path.default.extname(key);

        for (let j = 0; j < _managers.default.length; j++) {
          const manager = _managers.default[j];
          const canProcess = manager.canProcess({
            s3,
            key,
            extension
          });

          if (canProcess) {
            await manager.process({
              s3,
              key,
              extension
            });
          }
        }
      }
    });
    return await handler(event);
  }

});

exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var _webiny_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _webiny_handler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webiny_handler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webiny_serverless_files_functions_manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _webiny_serverless_files_functions_manage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webiny_serverless_files_functions_manage__WEBPACK_IMPORTED_MODULE_1__);


const handler = Object(_webiny_handler__WEBPACK_IMPORTED_MODULE_0__["createHandler"])(_webiny_serverless_files_functions_manage__WEBPACK_IMPORTED_MODULE_1___default()());

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _plugins = __webpack_require__(9);

var _createResponse = _interopRequireDefault(__webpack_require__(2));

var _middleware = _interopRequireDefault(__webpack_require__(11));

var _default = (...plugins) => async (...args) => {
  const context = {
    plugins: new _plugins.PluginsContainer(plugins)
  };

  try {
    const contextPlugins = context.plugins.byType("handler-context");

    for (let i = 0; i < contextPlugins.length; i++) {
      contextPlugins[i].apply({
        context,
        args
      });
    }

    const handlers = context.plugins.byType("handler");
    const handler = (0, _middleware.default)(handlers.map(pl => pl.handle));
    const result = await handler({
      args,
      context
    });

    if (!result) {
      throw Error(`Handlers did not produce a result!`);
    }

    return result;
  } catch (error) {
    const handlers = context.plugins.byType("error-handler");
    const handler = (0, _middleware.default)(handlers.map(pl => pl.handle));
    const result = await handler({
      args,
      context,
      error
    });

    if (result) {
      return result;
    }

    return (0, _createResponse.default)({
      statusCode: 500,
      type: "application/json",
      body: JSON.stringify({
        error: {
          name: error.constructor.name,
          message: error.message,
          stack: error.stack
        }
      }),
      headers: {
        "Cache-Control": "no-store"
      }
    });
  }
};

exports.default = _default;
//# sourceMappingURL=create.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PluginsContainer", {
  enumerable: true,
  get: function () {
    return _PluginsContainer.PluginsContainer;
  }
});
exports.unregisterPlugin = exports.getPlugin = exports.getPlugins = exports.registerPlugins = exports.plugins = void 0;

var _PluginsContainer = __webpack_require__(10);

const plugins = new _PluginsContainer.PluginsContainer();
exports.plugins = plugins;

const registerPlugins = (...args) => {
  plugins.register(...args);
};

exports.registerPlugins = registerPlugins;

const getPlugins = type => {
  return plugins.byType(type);
};

exports.getPlugins = getPlugins;

const getPlugin = name => {
  return plugins.byName(name);
};

exports.getPlugin = getPlugin;

const unregisterPlugin = name => {
  return plugins.unregister(name);
};

exports.unregisterPlugin = unregisterPlugin;
//# sourceMappingURL=index.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginsContainer = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(1));

const assign = (plugins, target) => {
  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];

    if (Array.isArray(plugin)) {
      assign(plugin, target);
      continue;
    }

    const name = plugin._name || plugin.name;

    if (!name) {
      throw Error(`Plugin must have a "name" or "_name" key.`);
    }

    target[name] = plugin;
    plugin.init && plugin.init();
  }
};

class PluginsContainer {
  constructor(plugins = []) {
    (0, _defineProperty2.default)(this, "plugins", {});
    assign(plugins, this.plugins);
  }

  byName(name) {
    return this.plugins[name];
  }

  byType(type) {
    if (!type) {
      return Object.values(this.plugins);
    }

    return Object.values(this.plugins).filter(pl => pl.type === type);
  }

  register(...plugins) {
    assign(plugins, this.plugins);
  }

  unregister(name) {
    delete this.plugins[name];
  }

}

exports.PluginsContainer = PluginsContainer;
//# sourceMappingURL=PluginsContainer.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Compose a single middleware from the array of middleware functions
 */
var _default = (functions = []) => {
  return params => {
    if (!functions.length) {
      return Promise.resolve();
    } // Create a clone of function chain to prevent modifying the original array with `shift()`


    const chain = [...functions];
    return new Promise((parentResolve, parentReject) => {
      const next = async () => {
        const fn = chain.shift();

        if (!fn) {
          return Promise.resolve();
        }

        return new Promise(async (resolve, reject) => {
          try {
            const result = await fn(params, resolve);

            if (typeof result !== "undefined") {
              return parentResolve(result);
            }
          } catch (e) {
            reject(e);
          }
        }).then(() => {
          return next();
        }).then(() => {
          parentResolve(params);
        }).catch(e => {
          parentReject(e);
        });
      };

      return next();
    });
  };
};

exports.default = _default;
//# sourceMappingURL=middleware.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk/clients/s3");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(1));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * We need to respond with adequate CORS headers.
 * @type {{"Access-Control-Allow-Origin": string, "Access-Control-Allow-Credentials": boolean}}
 */
const baseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true
};

var _default = handler => async event => {
  if (event.httpMethod === "OPTIONS") {
    return {
      body: "",
      statusCode: 204,
      headers: baseHeaders
    };
  }

  try {
    const {
      data,
      statusCode,
      headers = {}
    } = await handler(event);
    const isBuffer = Buffer.isBuffer(data);
    const body = isBuffer ? data.toString("base64") : JSON.stringify({
      error: false,
      data,
      message: null
    });
    return {
      isBase64Encoded: isBuffer,
      statusCode: statusCode || 200,
      headers: _objectSpread(_objectSpread({}, baseHeaders), headers),
      body
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: baseHeaders,
      body: JSON.stringify({
        error: true,
        data: null,
        message: e.message
      })
    };
  }
};

exports.default = _default;
//# sourceMappingURL=createHandler.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getEnvironment = _interopRequireDefault(__webpack_require__(4));

/**
 * Returns site's Bucket and file's Key values.
 * @param filename
 * @returns {{Bucket: string, Key: string}}
 */
var _default = filename => {
  const {
    bucket: Bucket
  } = (0, _getEnvironment.default)();
  return {
    Bucket,
    Key: `${filename}`
  };
};

exports.default = _default;
//# sourceMappingURL=getObjectParams.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imageManager = _interopRequireDefault(__webpack_require__(17));

var _default = [_imageManager.default];
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(3);

var _utils2 = __webpack_require__(18);

var _default = {
  canProcess: opts => {
    const {
      key,
      extension
    } = opts;

    if (!_utils2.SUPPORTED_IMAGES.includes(extension)) {
      return false;
    }

    if (key.startsWith(_utils2.OPTIMIZED_IMAGE_PREFIX || key.startsWith(_utils2.OPTIMIZED_TRANSFORMED_IMAGE_PREFIX))) {
      return false;
    }

    return true;
  },

  async process({
    s3,
    key,
    extension
  }) {
    // 1. Get optimized image's key.
    await s3.deleteObject((0, _utils.getObjectParams)((0, _utils2.getImageKey)({
      key
    }))).promise(); // 2. Search for all transformed images and delete those too.

    if (_utils2.SUPPORTED_TRANSFORMABLE_IMAGES.includes(extension)) {
      const env = (0, _utils.getEnvironment)();
      const imagesList = await s3.listObjects({
        Bucket: env.bucket,
        Prefix: (0, _utils2.getOptimizedTransformedImageKeyPrefix)(key)
      }).promise();

      for (let i = 0; i < imagesList.Contents.length; i++) {
        const imageObject = imagesList.Contents[i];
        await s3.deleteObject((0, _utils.getObjectParams)(imageObject.Key)).promise();
      }
    }
  }

};
exports.default = _default;
//# sourceMappingURL=imageManager.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptimizedTransformedImageKeyPrefix = exports.getOptimizedImageKeyPrefix = exports.getImageKey = exports.OPTIMIZED_IMAGE_PREFIX = exports.OPTIMIZED_TRANSFORMED_IMAGE_PREFIX = exports.SUPPORTED_TRANSFORMABLE_IMAGES = exports.SUPPORTED_IMAGES = void 0;

var _objectHash = _interopRequireDefault(__webpack_require__(19));

const SUPPORTED_IMAGES = [".jpg", ".jpeg", ".png", ".svg", ".gif"];
exports.SUPPORTED_IMAGES = SUPPORTED_IMAGES;
const SUPPORTED_TRANSFORMABLE_IMAGES = [".jpg", ".jpeg", ".png"];
exports.SUPPORTED_TRANSFORMABLE_IMAGES = SUPPORTED_TRANSFORMABLE_IMAGES;
const OPTIMIZED_TRANSFORMED_IMAGE_PREFIX = "img-o-t-";
exports.OPTIMIZED_TRANSFORMED_IMAGE_PREFIX = OPTIMIZED_TRANSFORMED_IMAGE_PREFIX;
const OPTIMIZED_IMAGE_PREFIX = "img-o-";
exports.OPTIMIZED_IMAGE_PREFIX = OPTIMIZED_IMAGE_PREFIX;

const getOptimizedImageKeyPrefix = key => {
  return `${OPTIMIZED_IMAGE_PREFIX}${(0, _objectHash.default)(key)}-`;
};

exports.getOptimizedImageKeyPrefix = getOptimizedImageKeyPrefix;

const getOptimizedTransformedImageKeyPrefix = key => {
  return `${OPTIMIZED_TRANSFORMED_IMAGE_PREFIX}${(0, _objectHash.default)(key)}-`;
};

exports.getOptimizedTransformedImageKeyPrefix = getOptimizedTransformedImageKeyPrefix;

const getImageKey = ({
  key,
  transformations
}) => {
  if (!transformations) {
    const prefix = getOptimizedImageKeyPrefix(key);
    return prefix + key;
  }

  const prefix = getOptimizedTransformedImageKeyPrefix(key);
  return `${prefix}${(0, _objectHash.default)(transformations)}-${key}`;
};

exports.getImageKey = getImageKey;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = __webpack_require__(20);

/**
 * Exported function
 *
 * Options:
 *
 *  - `algorithm` hash algo to be used by this instance: *'sha1', 'md5'
 *  - `excludeValues` {true|*false} hash object keys, values ignored
 *  - `encoding` hash encoding, supports 'buffer', '*hex', 'binary', 'base64'
 *  - `ignoreUnknown` {true|*false} ignore unknown object types
 *  - `replacer` optional function that replaces values before hashing
 *  - `respectFunctionProperties` {*true|false} consider function properties when hashing
 *  - `respectFunctionNames` {*true|false} consider 'name' property of functions for hashing
 *  - `respectType` {*true|false} Respect special properties (prototype, constructor)
 *    when hashing to distinguish between types
 *  - `unorderedArrays` {true|*false} Sort all arrays before hashing
 *  - `unorderedSets` {*true|false} Sort `Set` and `Map` instances before hashing
 *  * = default
 *
 * @param {object} object value to hash
 * @param {object} options hashing options
 * @return {string} hash value
 * @api public
 */
exports = module.exports = objectHash;

function objectHash(object, options){
  options = applyDefaults(object, options);

  return hash(object, options);
}

/**
 * Exported sugar methods
 *
 * @param {object} object value to hash
 * @return {string} hash value
 * @api public
 */
exports.sha1 = function(object){
  return objectHash(object);
};
exports.keys = function(object){
  return objectHash(object, {excludeValues: true, algorithm: 'sha1', encoding: 'hex'});
};
exports.MD5 = function(object){
  return objectHash(object, {algorithm: 'md5', encoding: 'hex'});
};
exports.keysMD5 = function(object){
  return objectHash(object, {algorithm: 'md5', encoding: 'hex', excludeValues: true});
};

// Internals
var hashes = crypto.getHashes ? crypto.getHashes().slice() : ['sha1', 'md5'];
hashes.push('passthrough');
var encodings = ['buffer', 'hex', 'binary', 'base64'];

function applyDefaults(object, options){
  options = options || {};
  options.algorithm = options.algorithm || 'sha1';
  options.encoding = options.encoding || 'hex';
  options.excludeValues = options.excludeValues ? true : false;
  options.algorithm = options.algorithm.toLowerCase();
  options.encoding = options.encoding.toLowerCase();
  options.ignoreUnknown = options.ignoreUnknown !== true ? false : true; // default to false
  options.respectType = options.respectType === false ? false : true; // default to true
  options.respectFunctionNames = options.respectFunctionNames === false ? false : true;
  options.respectFunctionProperties = options.respectFunctionProperties === false ? false : true;
  options.unorderedArrays = options.unorderedArrays !== true ? false : true; // default to false
  options.unorderedSets = options.unorderedSets === false ? false : true; // default to false
  options.unorderedObjects = options.unorderedObjects === false ? false : true; // default to true
  options.replacer = options.replacer || undefined;
  options.excludeKeys = options.excludeKeys || undefined;

  if(typeof object === 'undefined') {
    throw new Error('Object argument required.');
  }

  // if there is a case-insensitive match in the hashes list, accept it
  // (i.e. SHA256 for sha256)
  for (var i = 0; i < hashes.length; ++i) {
    if (hashes[i].toLowerCase() === options.algorithm.toLowerCase()) {
      options.algorithm = hashes[i];
    }
  }

  if(hashes.indexOf(options.algorithm) === -1){
    throw new Error('Algorithm "' + options.algorithm + '"  not supported. ' +
      'supported values: ' + hashes.join(', '));
  }

  if(encodings.indexOf(options.encoding) === -1 &&
     options.algorithm !== 'passthrough'){
    throw new Error('Encoding "' + options.encoding + '"  not supported. ' +
      'supported values: ' + encodings.join(', '));
  }

  return options;
}

/** Check if the given function is a native function */
function isNativeFunction(f) {
  if ((typeof f) !== 'function') {
    return false;
  }
  var exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
  return exp.exec(Function.prototype.toString.call(f)) != null;
}

function hash(object, options) {
  var hashingStream;

  if (options.algorithm !== 'passthrough') {
    hashingStream = crypto.createHash(options.algorithm);
  } else {
    hashingStream = new PassThrough();
  }

  if (typeof hashingStream.write === 'undefined') {
    hashingStream.write = hashingStream.update;
    hashingStream.end   = hashingStream.update;
  }

  var hasher = typeHasher(options, hashingStream);
  hasher.dispatch(object);
  if (!hashingStream.update)
    hashingStream.end('')

  if (hashingStream.digest) {
    return hashingStream.digest(options.encoding === 'buffer' ? undefined : options.encoding);
  }

  var buf = hashingStream.read();
  if (options.encoding === 'buffer') {
    return buf;
  }

  return buf.toString(options.encoding);
}

/**
 * Expose streaming API
 *
 * @param {object} object  Value to serialize
 * @param {object} options  Options, as for hash()
 * @param {object} stream  A stream to write the serializiation to
 * @api public
 */
exports.writeToStream = function(object, options, stream) {
  if (typeof stream === 'undefined') {
    stream = options;
    options = {};
  }

  options = applyDefaults(object, options);

  return typeHasher(options, stream).dispatch(object);
};

function typeHasher(options, writeTo, context){
  context = context || [];
  var write = function(str) {
    if (writeTo.update)
      return writeTo.update(str, 'utf8');
    else
      return writeTo.write(str, 'utf8');
  }

  return {
    dispatch: function(value){
      if (options.replacer) {
        value = options.replacer(value);
      }

      var type = typeof value;
      if (value === null) {
        type = 'null';
      }

      //console.log("[DEBUG] Dispatch: ", value, "->", type, " -> ", "_" + type);

      return this['_' + type](value);
    },
    _object: function(object) {
      var pattern = (/\[object (.*)\]/i);
      var objString = Object.prototype.toString.call(object);
      var objType = pattern.exec(objString);
      if (!objType) { // object type did not match [object ...]
        objType = 'unknown:[' + objString + ']';
      } else {
        objType = objType[1]; // take only the class name
      }

      objType = objType.toLowerCase();

      var objectNumber = null;

      if ((objectNumber = context.indexOf(object)) >= 0) {
        return this.dispatch('[CIRCULAR:' + objectNumber + ']');
      } else {
        context.push(object);
      }

      if (typeof Buffer !== 'undefined' && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write('buffer:');
        return write(object);
      }

      if(objType !== 'object' && objType !== 'function') {
        if(this['_' + objType]) {
          this['_' + objType](object);
        } else if (options.ignoreUnknown) {
          return write('[' + objType + ']');
        } else {
          throw new Error('Unknown object type "' + objType + '"');
        }
      }else{
        var keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        // Make sure to incorporate special properties, so
        // Types with different prototypes will produce
        // a different hash and objects derived from
        // different functions (`new Foo`, `new Bar`) will
        // produce different hashes.
        // We never do this for native functions since some
        // seem to break because of that.
        if (options.respectType !== false && !isNativeFunction(object)) {
          keys.splice(0, 0, 'prototype', '__proto__', 'constructor');
        }

        if (options.excludeKeys) {
          keys = keys.filter(function(key) { return !options.excludeKeys(key); });
        }

        write('object:' + keys.length + ':');
        var self = this;
        return keys.forEach(function(key){
          self.dispatch(key);
          write(':');
          if(!options.excludeValues) {
            self.dispatch(object[key]);
          }
          write(',');
        });
      }
    },
    _array: function(arr, unordered){
      unordered = typeof unordered !== 'undefined' ? unordered :
        options.unorderedArrays !== false; // default to options.unorderedArrays

      var self = this;
      write('array:' + arr.length + ':');
      if (!unordered || arr.length <= 1) {
        return arr.forEach(function(entry) {
          return self.dispatch(entry);
        });
      }

      // the unordered case is a little more complicated:
      // since there is no canonical ordering on objects,
      // i.e. {a:1} < {a:2} and {a:1} > {a:2} are both false,
      // we first serialize each entry using a PassThrough stream
      // before sorting.
      // also: we can’t use the same context array for all entries
      // since the order of hashing should *not* matter. instead,
      // we keep track of the additions to a copy of the context array
      // and add all of them to the global context array when we’re done
      var contextAdditions = [];
      var entries = arr.map(function(entry) {
        var strm = new PassThrough();
        var localContext = context.slice(); // make copy
        var hasher = typeHasher(options, strm, localContext);
        hasher.dispatch(entry);
        // take only what was added to localContext and append it to contextAdditions
        contextAdditions = contextAdditions.concat(localContext.slice(context.length));
        return strm.read().toString();
      });
      context = context.concat(contextAdditions);
      entries.sort();
      return this._array(entries, false);
    },
    _date: function(date){
      return write('date:' + date.toJSON());
    },
    _symbol: function(sym){
      return write('symbol:' + sym.toString());
    },
    _error: function(err){
      return write('error:' + err.toString());
    },
    _boolean: function(bool){
      return write('bool:' + bool.toString());
    },
    _string: function(string){
      write('string:' + string.length + ':');
      write(string.toString());
    },
    _function: function(fn){
      write('fn:');
      if (isNativeFunction(fn)) {
        this.dispatch('[native]');
      } else {
        this.dispatch(fn.toString());
      }

      if (options.respectFunctionNames !== false) {
        // Make sure we can still distinguish native functions
        // by their name, otherwise String and Function will
        // have the same hash
        this.dispatch("function-name:" + String(fn.name));
      }

      if (options.respectFunctionProperties) {
        this._object(fn);
      }
    },
    _number: function(number){
      return write('number:' + number.toString());
    },
    _xml: function(xml){
      return write('xml:' + xml.toString());
    },
    _null: function() {
      return write('Null');
    },
    _undefined: function() {
      return write('Undefined');
    },
    _regexp: function(regex){
      return write('regex:' + regex.toString());
    },
    _uint8array: function(arr){
      write('uint8array:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint8clampedarray: function(arr){
      write('uint8clampedarray:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int8array: function(arr){
      write('uint8array:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint16array: function(arr){
      write('uint16array:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int16array: function(arr){
      write('uint16array:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint32array: function(arr){
      write('uint32array:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int32array: function(arr){
      write('uint32array:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float32array: function(arr){
      write('float32array:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float64array: function(arr){
      write('float64array:');
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _arraybuffer: function(arr){
      write('arraybuffer:');
      return this.dispatch(new Uint8Array(arr));
    },
    _url: function(url) {
      return write('url:' + url.toString(), 'utf8');
    },
    _map: function(map) {
      write('map:');
      var arr = Array.from(map);
      return this._array(arr, options.unorderedSets !== false);
    },
    _set: function(set) {
      write('set:');
      var arr = Array.from(set);
      return this._array(arr, options.unorderedSets !== false);
    },
    _blob: function() {
      if (options.ignoreUnknown) {
        return write('[blob]');
      }

      throw Error('Hashing Blob objects is currently not supported\n' +
        '(see https://github.com/puleos/object-hash/issues/26)\n' +
        'Use "options.replacer" or "options.ignoreUnknown"\n');
    },
    _domwindow: function() { return write('domwindow'); },
    /* Node.js standard native objects */
    _process: function() { return write('process'); },
    _timer: function() { return write('timer'); },
    _pipe: function() { return write('pipe'); },
    _tcp: function() { return write('tcp'); },
    _udp: function() { return write('udp'); },
    _tty: function() { return write('tty'); },
    _statwatcher: function() { return write('statwatcher'); },
    _securecontext: function() { return write('securecontext'); },
    _connection: function() { return write('connection'); },
    _zlib: function() { return write('zlib'); },
    _context: function() { return write('context'); },
    _nodescript: function() { return write('nodescript'); },
    _httpparser: function() { return write('httpparser'); },
    _dataview: function() { return write('dataview'); },
    _signal: function() { return write('signal'); },
    _fsevent: function() { return write('fsevent'); },
    _tlswrap: function() { return write('tlswrap'); }
  };
}

// Mini-implementation of stream.PassThrough
// We are far from having need for the full implementation, and we can
// make assumptions like "many writes, then only one final read"
// and we can ignore encoding specifics
function PassThrough() {
  return {
    buf: '',

    write: function(b) {
      this.buf += b;
    },

    end: function(b) {
      this.buf += b;
    },

    read: function() {
      return this.buf;
    }
  };
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ })
/******/ ])));