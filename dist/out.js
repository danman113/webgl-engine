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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import Engine from './engine'
Object.defineProperty(exports, "__esModule", { value: true });
var simpleFrag = __webpack_require__(/*! ./shaders/simple.frag */ "./src/shaders/simple.frag");
var simpleVert = __webpack_require__(/*! ./shaders/simple.vert */ "./src/shaders/simple.vert");
var simpleGLSL = __webpack_require__(/*! ./shaders/toon.glsl */ "./src/shaders/toon.glsl");
console.log(simpleFrag);
console.log(simpleVert);
console.log(simpleGLSL);
// window.onload = () => {
//   const engine = new Engine(<HTMLCanvasElement>document.getElementById('webgl'), {
//     fullscreen: true
//   })
//   engine.init = () => {
//     engine.gl.clearColor(0.2, 0.2, 0.2, 1.0)
//     engine.gl.clear(engine.gl.COLOR_BUFFER_BIT)
//   }
//   engine.draw = () => {
//     engine.gl.clearColor(Math.random(), Math.random(), Math.random(), 1.0)
//     engine.gl.clear(engine.gl.COLOR_BUFFER_BIT)
//   }
//   engine.start()
// }


/***/ }),

/***/ "./src/shaders/simple.frag":
/*!*********************************!*\
  !*** ./src/shaders/simple.frag ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "void main() {\n  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}"

/***/ }),

/***/ "./src/shaders/simple.vert":
/*!*********************************!*\
  !*** ./src/shaders/simple.vert ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "attribute vec4 aVertexPosition;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvoid main () {\n  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n}"

/***/ }),

/***/ "./src/shaders/toon.glsl":
/*!*******************************!*\
  !*** ./src/shaders/toon.glsl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "uniform vec3 lightDir;\nvarying vec3 normal;\n\nvoid main()\n{\n\tfloat intensity;\n\tvec4 color;\n\tintensity = dot(lightDir,normal);\n\n\tif (intensity > 0.95)\n\t\tcolor = vec4(1.0,0.5,0.5,1.0);\n\telse if (intensity > 0.5)\n\t\tcolor = vec4(0.6,0.3,0.3,1.0);\n\telse if (intensity > 0.25)\n\t\tcolor = vec4(0.4,0.2,0.2,1.0);\n\telse\n\t\tcolor = vec4(0.2,0.1,0.1,1.0);\n\tgl_FragColor = color;\n\n}"

/***/ })

/******/ });
//# sourceMappingURL=out.js.map