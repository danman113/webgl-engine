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
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/materials/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/materials/imageExample/image.frag":
/*!****************************************************!*\
  !*** ./examples/materials/imageExample/image.frag ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nvarying vec2 vTextcoord;\nuniform vec3 uColor;\nuniform sampler2D uImage;\n\nvoid main () {\n  vec4 tex = texture2D(uImage, vTextcoord);\n  gl_FragColor = vec4(\n    tex.r * max(uColor.r, 0.5), // Half the red depending on the mouse\n    tex.g,\n    tex.b * max(uColor.b, 0.5), // Half the blue depending on the mouse\n    tex.a // Will probably always be one, but in the case that we get a PNG\n  );\n}"

/***/ }),

/***/ "./examples/materials/imageExample/image.vert":
/*!****************************************************!*\
  !*** ./examples/materials/imageExample/image.vert ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nattribute vec2 aPosition;\nattribute vec2 aTextcoord;\nvarying vec2 vTextcoord;\n\nvoid main () {\n  vTextcoord = aTextcoord;\n  vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);\n  gl_Position = vec4(pos, 0, 1);\n}\n"

/***/ }),

/***/ "./examples/materials/imageExample/img.jpg":
/*!*************************************************!*\
  !*** ./examples/materials/imageExample/img.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c72192d9f5410ff728784c1dbdcc7bf3.jpg");

/***/ }),

/***/ "./examples/materials/imageExample/index.ts":
/*!**************************************************!*\
  !*** ./examples/materials/imageExample/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__(/*! ../../../src/engine/material */ "./src/engine/material.ts");
var vertexAttribute_1 = __webpack_require__(/*! ../../../src/engine/vertexAttribute */ "./src/engine/vertexAttribute.ts");
var texture_1 = __webpack_require__(/*! ../../../src/engine/texture */ "./src/engine/texture.ts");
var materialExample_1 = __webpack_require__(/*! ../materialExample */ "./examples/materials/materialExample.ts");
var FragmentSource = __webpack_require__(/*! ./image.frag */ "./examples/materials/imageExample/image.frag");
var VertexSource = __webpack_require__(/*! ./image.vert */ "./examples/materials/imageExample/image.vert");
var img_jpg_1 = __webpack_require__(/*! ./img.jpg */ "./examples/materials/imageExample/img.jpg");
var texture = new texture_1.ImageTexture(img_jpg_1.default);
var example = new materialExample_1.default('Texture Example', function (gl) {
    var mat = new material_1.default(gl, VertexSource, FragmentSource, {
        aPosition: new vertexAttribute_1.default(gl, 
        // prettier-ignore
        new Float32Array([
            0, 0,
            1, 0,
            0, 1,
            0, 1,
            1, 0,
            1, 1,
        ]), {
            dimension: 2
        }),
        aTextcoord: new vertexAttribute_1.default(gl, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), {
            dimension: 2
        })
    });
    texture.bindTexture(gl);
    return mat;
}, function (gl, material, engine) {
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    material.useProgram();
    material.setUniform('uColor', gl.FLOAT_VEC3, engine.mouse[0] / engine.settings.width, // Percentage of mouse to last x coord
    0.42, engine.mouse[1] / engine.settings.height // Percentage of mouse to last y coord
    );
    material.drawUsingAttribute('aPosition');
});
exports.default = example;


/***/ }),

/***/ "./examples/materials/index.ts":
/*!*************************************!*\
  !*** ./examples/materials/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(/*! ./../../src/engine */ "./src/engine/index.ts");
var mouseGradientExample_1 = __webpack_require__(/*! ./mouseGradientExample */ "./examples/materials/mouseGradientExample/index.ts");
var imageExample_1 = __webpack_require__(/*! ./imageExample */ "./examples/materials/imageExample/index.ts");
var entities = [mouseGradientExample_1.default, imageExample_1.default];
var selectedEntity = entities[0];
var list = document.createElement('ul');
var listElements = entities.map(function (entity, i) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = entity.name;
    a.addEventListener('click', function (e) {
        e.preventDefault();
        selectedEntity = entities[i];
    });
    li.append(a);
    return li;
});
list.append.apply(list, listElements);
window.onload = function () {
    document.body.append(list);
    var engine = new engine_1.default(document.getElementById('webgl'), {
        fullscreen: true
    });
    engine.init = function (gl) {
        global.engine = engine;
        entities.forEach(function (ent) { return ent.onload(gl); });
    };
    engine.draw = function (gl, engine) {
        if (selectedEntity) {
            selectedEntity.draw(gl, selectedEntity.material, engine);
        }
    };
    engine.start();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./examples/materials/materialExample.ts":
/*!***********************************************!*\
  !*** ./examples/materials/materialExample.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialExample = /** @class */ (function () {
    function MaterialExample(name, setup, draw) {
        this.name = name;
        this.setup = setup;
        this.draw = draw;
    }
    MaterialExample.prototype.onload = function (gl) {
        this.material = this.setup(gl);
    };
    return MaterialExample;
}());
exports.default = MaterialExample;


/***/ }),

/***/ "./examples/materials/mouseGradientExample/index.ts":
/*!**********************************************************!*\
  !*** ./examples/materials/mouseGradientExample/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__(/*! ../../../src/engine/material */ "./src/engine/material.ts");
var vertexAttribute_1 = __webpack_require__(/*! ../../../src/engine/vertexAttribute */ "./src/engine/vertexAttribute.ts");
var materialExample_1 = __webpack_require__(/*! ../materialExample */ "./examples/materials/materialExample.ts");
var FragmentSource = __webpack_require__(/*! ./mouseGradient.frag */ "./examples/materials/mouseGradientExample/mouseGradient.frag");
var VertexSource = __webpack_require__(/*! ./mouseGradient.vert */ "./examples/materials/mouseGradientExample/mouseGradient.vert");
var example = new materialExample_1.default('Mouse Gradient', function (gl) {
    return new material_1.default(gl, VertexSource, FragmentSource, {
        aPosition: new vertexAttribute_1.default(gl, new Float32Array([0, 0, 1, 1, 0, 0.5, 0, 1, 0.5, 0, 1, 0.5, 1, 0, 0.5, 1, 1, 0]), {
            dimension: 3
        })
    });
}, function (gl, material, engine) {
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    material.useProgram();
    material.setUniform('uColor', gl.FLOAT_VEC3, engine.mouse.x / engine.settings.width, 0.42, engine.mouse.y / engine.settings.height);
    material.drawUsingAttribute('aPosition');
});
exports.default = example;


/***/ }),

/***/ "./examples/materials/mouseGradientExample/mouseGradient.frag":
/*!********************************************************************!*\
  !*** ./examples/materials/mouseGradientExample/mouseGradient.frag ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nvarying float vColor;\nuniform vec3 uColor;\nvoid main () {\n  gl_FragColor = vec4(uColor * vColor, 1);\n}"

/***/ }),

/***/ "./examples/materials/mouseGradientExample/mouseGradient.vert":
/*!********************************************************************!*\
  !*** ./examples/materials/mouseGradientExample/mouseGradient.vert ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nattribute vec3 aPosition;\nvarying float vColor;\nvoid main () {\n  vColor = aPosition.z;\n  vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);\n  gl_Position = vec4(pos, 0, 1);\n}"

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
        this.keys = new Set();
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
        this.onKeyDown = function (gl, e, keyCode) { };
        this.onKeyUp = function (gl, e, keyCode) { };
        this.setCanvasDimensions = function (maxWidth, maxHeight) {
            var element = _this.element;
            element.width = maxWidth;
            element.height = maxHeight;
            element.style.width = String(maxWidth);
            element.style.height = String(maxHeight);
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
        element.addEventListener('keydown', function (e) {
            e.preventDefault();
            var keyCode = e.keyCode;
            _this.keys.add(keyCode);
            _this.onKeyDown(_this.gl, _this, keyCode);
        });
        element.addEventListener('keyup', function (e) {
            e.preventDefault();
            var keyCode = e.keyCode;
            _this.keys.delete(keyCode);
            _this.onKeyUp(_this.gl, _this, keyCode);
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
    function Material(gl, vertexSource, fragmentSource, attributes) {
        var _this = this;
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
        this.setUniform = function (attrName, attrType) {
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
            _this.gl.drawArrays(drawType, offset, attr.data.length / attr.vertexAttributeMetadata.dimension);
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
        var uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
        for (var i = 0; i < uniformCount; i++) {
            var _a = gl.getActiveUniform(this.program, i), uniformName = _a.name, type = _a.type, size = _a.size;
            var location_2 = this.gl.getUniformLocation(this.program, uniformName);
            this.uniformLocations[uniformName] = location_2;
        }
    }
    return Material;
}());
exports.default = Material;


/***/ }),

/***/ "./src/engine/texture.ts":
/*!*******************************!*\
  !*** ./src/engine/texture.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var textureSource = 0;
var Texture = /** @class */ (function () {
    function Texture() {
        this.textureSource = textureSource++;
        this.loaded = true;
    }
    Texture.prototype.bindTexture = function (gl) {
        if (!this.loaded)
            throw new Error('Attempted to bind image to texture before it loads. Make sure the image is loaded by the time you call bindTexture');
        var texture = gl.createTexture();
        this._texture = texture;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, this.textureSource, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.texture);
        return texture;
    };
    Texture.prototype.delete = function (gl) {
        gl.deleteTexture(this._texture);
        this.loaded = false;
    };
    return Texture;
}());
exports.default = Texture;
var CanvasTexture = /** @class */ (function (_super) {
    __extends(CanvasTexture, _super);
    function CanvasTexture(context) {
        var _this = _super.call(this) || this;
        _this.texture = context.canvas;
        return _this;
    }
    CanvasTexture.prototype.rebindTexture = function (gl) {
        gl.texImage2D(gl.TEXTURE_2D, this.textureSource, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.texture);
    };
    return CanvasTexture;
}(Texture));
exports.CanvasTexture = CanvasTexture;
var ImageTexture = /** @class */ (function (_super) {
    __extends(ImageTexture, _super);
    function ImageTexture(source) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.loaded = false;
        var image = new Image();
        image.src = source;
        image.onload = function () {
            _this.loaded = true;
        };
        _this.texture = image;
        return _this;
    }
    return ImageTexture;
}(Texture));
exports.ImageTexture = ImageTexture;


/***/ }),

/***/ "./src/engine/v2.ts":
/*!**************************!*\
  !*** ./src/engine/v2.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Note that we need these to be *function* declarations due to this binding
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
if (!Array.prototype.x) {
    Object.defineProperty(Array.prototype, 'x', xProperty);
    Object.defineProperty(Array.prototype, 'y', yProperty);
}
exports.v2 = function (x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return [x, y];
};
exports.ZERO = exports.v2();
// Euclidean distance between two points
exports.distance = function (pt1, pt2) {
    return Math.sqrt((pt2.x - pt1.x) * (pt2.x - pt1.x) + (pt2.y - pt1.y) * (pt2.y - pt1.y));
};
// Faster than distance
exports.distanceSquared = function (pt1, pt2) {
    return (pt2.x - pt1.x) * (pt2.x - pt1.x) + (pt2.y - pt1.y) * (pt2.y - pt1.y);
};
// Magnitude
exports.magnitude = function (v) { return exports.distance(v, exports.ZERO); };
// Given the three points, are they counter clockwise?
exports.ccw = function (a, b, c) {
    return (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y);
};
// Angle between two points in radians
exports.angle2 = function (a, b) { return Math.atan2(b.y - a.y, b.x - a.x); };
// Angle between three points in radians
exports.angle3 = function (a, b, c) {
    return Math.atan2(a.y - b.y, a.x - b.x) - Math.atan2(c.y - b.y, c.x - b.x);
};
exports.piNum = Math.PI / 180;
exports.numPi = 180 / Math.PI;
exports.degToRad = function (deg) { return deg * exports.piNum; };
exports.radToDeg = function (rad) { return rad * exports.numPi; };
exports.dot = function (a, b) { return a.x * b.x + a.y * b.y; };
exports.sum = function (a, b) { return exports.v2(a.x + b.x, a.y + b.y); };
exports.sub = function (a, b) { return exports.v2(a.x - b.x, a.y - b.y); };
exports.unit = function (a) {
    var dist = exports.distance(exports.ZERO, a);
    return exports.v2(a.x / dist, a.y / dist);
};
exports.normal = function (p0, p1) {
    // if we define dx=x2-x1 and dy=y2-y1, then the normals are (-dy, dx) and (dy, -dx).
    var dx = p1.x - p0.x;
    var dy = p1.y - p0.y;
    // orthoginal(sub(p1, p0))
    return exports.v2(-dy, dx);
};
exports.orthogonal = function (v) { return exports.v2(-v.y, v.x); };
exports.scalarMultiply = function (a, c) { return exports.v2(a.x * c, a.y * c); };
exports.scalarSum = function (a, c) { return exports.v2(a.x + c, a.y + c); };


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


/***/ })

/******/ });
//# sourceMappingURL=materials.js.map