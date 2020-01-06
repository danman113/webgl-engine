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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/engine/index.ts":
/*!*****************************!*\
  !*** ./src/engine/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var v2_1 = __webpack_require__(/*! ./v2 */ "./src/engine/v2.ts");
var Engine = /** @class */ (function () {
    function Engine(element, settings) {
        var _this = this;
        this.element = element;
        this.settings = settings;
        this.mouse = v2_1.v2();
        this.touches = [];
        this.updateTouches = function (e) {
            e.preventDefault();
            _this.touches = __spreadArrays(e.touches).map(function (touch) { return v2_1.v2(touch.pageX, touch.pageY); });
        };
        this.render = function () {
            _this.draw(_this.gl, _this);
            window.requestAnimationFrame(_this.render);
        };
        this.start = function () {
            _this.init(_this.gl, _this);
            _this.RAF = requestAnimationFrame(_this.render);
        };
        this.draw = function (gl, e) { };
        this.init = function (gl, e) { };
        this.onResize = function (gl, e) { };
        this.onClick = function (gl, e) { };
        this.setCanvasDimensions = function (maxWidth, maxHeight) {
            var element = _this.element;
            element.width = maxWidth;
            element.height = maxHeight;
            element.style.width = "" + maxWidth;
            element.style.height = "" + maxHeight;
        };
        this.setCanvasSize = function (settings) {
            if (!!settings.fullscreen) {
                settings.width = window.innerWidth;
                settings.height = window.innerHeight;
            }
            _this.setCanvasDimensions(settings.width, settings.height);
        };
        this.setCanvasSize(settings);
        var gl = (this.gl = this.element.getContext('webgl'));
        if (!gl)
            throw new Error('Could not find webgl context');
        window.addEventListener('resize', function () {
            _this.setCanvasSize(settings);
            // Sets internal webgl viewport to be the size of the canvas
            gl.viewport(0, 0, settings.width, settings.height);
            _this.onResize(gl, _this);
        });
        element.addEventListener('mousemove', function (e) {
            if (e.offsetX) {
                _this.mouse.x = e.offsetX;
                _this.mouse.y = e.offsetY;
            }
        });
        element.addEventListener('click', function (e) {
            _this.onClick(gl, _this);
        });
        element.addEventListener('touchstart', function (e) {
            _this.updateTouches(e);
            for (var i = 0; i < e.changedTouches.length; i++) {
                var touch = e.changedTouches[i];
                if (i === 0) {
                    _this.mouse.x = touch.pageX;
                    _this.mouse.y = touch.pageY;
                }
            }
        });
        element.addEventListener('touchend', function (e) {
            _this.updateTouches(e);
            for (var i = 0; i < e.changedTouches.length; i++) {
                var touch = e.changedTouches[i];
                if (i === 0) {
                    _this.mouse.x = touch.pageX;
                    _this.mouse.y = touch.pageY;
                }
            }
            _this.onClick(gl, _this);
        });
        element.addEventListener('touchmove', function (e) {
            _this.updateTouches(e);
            for (var i = 0; i < e.changedTouches.length; i++) {
                var touch = e.changedTouches[i];
                if (i === 0) {
                    _this.mouse.x = touch.pageX;
                    _this.mouse.y = touch.pageY;
                }
            }
        });
        element.addEventListener('contextmenu', function (e) { return e.preventDefault(); });
        element.addEventListener('dragenter', function (e) { return e.preventDefault(); });
    }
    return Engine;
}());
exports.default = Engine;


/***/ }),

/***/ "./src/engine/material.ts":
/*!********************************!*\
  !*** ./src/engine/material.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShaderTypes;
(function (ShaderTypes) {
    ShaderTypes["Fragment"] = "FRAGMENT";
    ShaderTypes["Vertex"] = "VERTEX";
})(ShaderTypes = exports.ShaderTypes || (exports.ShaderTypes = {}));
var UniformTypeToLocation = function (gl) {
    var _a;
    return (_a = {},
        _a[gl.FLOAT] = 'uniform1f',
        _a[gl.FLOAT_VEC2] = 'uniform2f',
        _a[gl.FLOAT_VEC3] = 'uniform3f',
        _a);
};
var Material = /** @class */ (function () {
    function Material(gl, vertexSource, fragmentSource, attributes, uniformNames) {
        var _this = this;
        if (uniformNames === void 0) { uniformNames = []; }
        this.gl = gl;
        this.vertexSource = vertexSource;
        this.fragmentSource = fragmentSource;
        this.attributes = attributes;
        this.uniformLocations = {};
        this.bindAttributes = function () {
            for (var attrName in _this.attributes) {
                var attr = _this.attributes[attrName];
                _this.gl.enableVertexAttribArray(attr.location);
                _this.gl.bindBuffer(_this.gl.ARRAY_BUFFER, attr.buffer);
                _this.gl.vertexAttribPointer(attr.location, attr.vertexAttributeMetadata.dimension, attr.vertexAttributeMetadata.type, attr.vertexAttributeMetadata.normalize, attr.vertexAttributeMetadata.stride, attr.vertexAttributeMetadata.offset);
            }
        };
        this.setAttribute = function (attrName, attrType) {
            var _a;
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var uniformLocation = _this.uniformLocations[attrName];
            (_a = _this.gl)[UniformTypeToLocation(_this.gl)[attrType]].apply(_a, __spreadArrays([uniformLocation], rest));
        };
        this.useProgram = function () { return _this.gl.useProgram(_this.program); };
        this.drawUsingAttribute = function (attrName, drawType, offset) {
            if (drawType === void 0) { drawType = _this.gl.TRIANGLES; }
            if (offset === void 0) { offset = 0; }
            var attr = _this.attributes[attrName];
            _this.bindAttributes();
            _this.gl.drawArrays(_this.gl.TRIANGLES, offset, attr.data.length / attr.vertexAttributeMetadata.dimension);
        };
        this.compileShader = function (src, shaderType) {
            var gl = _this.gl;
            var compiledShader = gl.createShader(shaderType === ShaderTypes.Fragment ? gl.FRAGMENT_SHADER : gl.VERTEX_SHADER);
            gl.shaderSource(compiledShader, src);
            gl.compileShader(compiledShader);
            if (!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
                var error = new Error(gl.getShaderInfoLog(compiledShader));
                gl.deleteShader(compiledShader);
                throw error;
            }
            return compiledShader;
        };
        this.initShaderProgram = function (vertexShader, fragmentShader) {
            var gl = _this.gl;
            var shaderProgram = gl.createProgram();
            gl.attachShader(shaderProgram, vertexShader);
            gl.attachShader(shaderProgram, fragmentShader);
            gl.linkProgram(shaderProgram);
            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
                var error = new Error(gl.getProgramInfoLog(shaderProgram));
                gl.deleteProgram(shaderProgram);
                throw error;
            }
            return shaderProgram;
        };
        this.vertexShader = this.compileShader(vertexSource, ShaderTypes.Vertex);
        this.fragmentShader = this.compileShader(fragmentSource, ShaderTypes.Fragment);
        this.program = this.initShaderProgram(this.vertexShader, this.fragmentShader);
        for (var attr in attributes) {
            var location_1 = this.gl.getAttribLocation(this.program, attr);
            attributes[attr].location = location_1;
        }
        for (var _i = 0, uniformNames_1 = uniformNames; _i < uniformNames_1.length; _i++) {
            var uniform = uniformNames_1[_i];
            var location_2 = this.gl.getUniformLocation(this.program, uniform);
            this.uniformLocations[uniform] = location_2;
        }
    }
    return Material;
}());
exports.default = Material;


/***/ }),

/***/ "./src/engine/v2.ts":
/*!**************************!*\
  !*** ./src/engine/v2.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getx() {
    return this[0];
}
function setx(val) {
    this[0] = val;
    return val;
}
function gety() {
    return this[1];
}
function sety(val) {
    this[1] = val;
    return val;
}
var xProperty = { get: getx, set: setx };
var yProperty = { get: gety, set: sety };
exports.v2 = function (x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    var out = [x, y];
    Object.defineProperty(out, 'x', xProperty);
    Object.defineProperty(out, 'y', yProperty);
    return out;
};


/***/ }),

/***/ "./src/engine/vertexAttribute.ts":
/*!***************************************!*\
  !*** ./src/engine/vertexAttribute.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VertexAttribute = /** @class */ (function () {
    function VertexAttribute(gl, data, _a, usage) {
        var dimension = _a.dimension, _b = _a.type, type = _b === void 0 ? gl.FLOAT : _b, _c = _a.normalize, normalize = _c === void 0 ? false : _c, _d = _a.stride, stride = _d === void 0 ? 0 : _d, _e = _a.offset, offset = _e === void 0 ? 0 : _e;
        if (usage === void 0) { usage = gl.STATIC_DRAW; }
        this.data = data;
        this.location = null;
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, usage);
        this.buffer = buffer;
        this.vertexAttributeMetadata = { dimension: dimension, type: type, normalize: normalize, stride: stride, offset: offset };
    }
    return VertexAttribute;
}());
exports.default = VertexAttribute;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(/*! ./engine */ "./src/engine/index.ts");
// import * as simpleFrag from './shaders/simple.frag'
// import * as simpleVert from './shaders/simple.vert'
var material_1 = __webpack_require__(/*! ./engine/material */ "./src/engine/material.ts");
var vertexAttribute_1 = __webpack_require__(/*! ./engine/vertexAttribute */ "./src/engine/vertexAttribute.ts");
var entities = [];
window.onload = function () {
    var engine = new engine_1.default(document.getElementById('webgl'), {
        fullscreen: true
    });
    engine.init = function (gl) {
        global.engine = engine;
        var simpleMaterial = new material_1.default(gl, "\n      precision mediump float;\n      attribute vec3 aPosition;\n      varying float vColor;\n      void main () {\n        vColor = aPosition.z;\n        vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);\n        gl_Position = vec4(pos, 0, 1);\n      }", "\n      precision mediump float;\n      varying float vColor;\n      uniform vec3 uColor;\n      void main () {\n        gl_FragColor = vec4(uColor * vColor, 1);\n      }\n      ", {
            aPosition: new vertexAttribute_1.default(gl, new Float32Array([0, 0, 1, 1, 0, 0.5, 0, 1, 0.5, 0, 1, 0.5, 1, 0, 0.5, 1, 1, 0]), {
                dimension: 3
            })
        }, ['uResolution', 'uColor']);
        entities.push(simpleMaterial);
    };
    engine.draw = function (gl, engine) {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            entity.useProgram();
            entity.setAttribute('uColor', gl.FLOAT_VEC3, engine.mouse[0] / engine.settings.width, 0.42, engine.mouse[1] / engine.settings.height);
            entity.drawUsingAttribute('aPosition');
        }
    };
    engine.start();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=out.js.map