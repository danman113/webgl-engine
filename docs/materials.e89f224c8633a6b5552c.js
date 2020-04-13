!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";var r,o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Fragment="FRAGMENT",e.Vertex="VERTEX"}(r=t.ShaderTypes||(t.ShaderTypes={}));var i=function(e,t,n){this.location=e,this.type=t,this.size=n},a=function(){function e(t,n,a,u){var c=this;for(var s in this.gl=t,this.vertexSource=n,this.fragmentSource=a,this.attributes=u,this.uniformLocations={},this.bindAttributes=function(){for(var e in c.attributes){var t=c.attributes[e];c.gl.enableVertexAttribArray(t.location),c.gl.bindBuffer(c.gl.ARRAY_BUFFER,t.buffer),c.gl.vertexAttribPointer(t.location,t.vertexAttributeMetadata.dimension,t.vertexAttributeMetadata.type,t.vertexAttributeMetadata.normalize,t.vertexAttributeMetadata.stride,t.vertexAttributeMetadata.offset)}},this.setUniform=function(t){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(!c.uniformLocations[t])throw new Error("Uniform '"+t+"' not referenced in source program");var a=c.uniformLocations[t],u=a.location,s=a.type;(n=c.gl)[e.typeToLocationMap[s]].apply(n,o([u],r))},this.useProgram=function(){return c.gl.useProgram(c.program)},this.drawUsingAttribute=function(e,t,n){void 0===t&&(t=c.gl.TRIANGLES),void 0===n&&(n=0);var r=c.attributes[e];c.bindAttributes(),c.gl.drawArrays(t,n,r.data.length/r.vertexAttributeMetadata.dimension)},this.compileShader=function(e,t){var n=c.gl,o=n.createShader(t===r.Fragment?n.FRAGMENT_SHADER:n.VERTEX_SHADER);if(n.shaderSource(o,e),n.compileShader(o),!n.getShaderParameter(o,n.COMPILE_STATUS)){var i=new Error(n.getShaderInfoLog(o));throw n.deleteShader(o),i}return o},this.initShaderProgram=function(e,t){var n=c.gl,r=n.createProgram();if(n.attachShader(r,e),n.attachShader(r,t),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS)){var o=new Error(n.getProgramInfoLog(r));throw n.deleteProgram(r),o}return r},e.typeToLocationMap||e.setTypeToLocationMap(t),this.vertexShader=this.compileShader(n,r.Vertex),this.fragmentShader=this.compileShader(a,r.Fragment),this.program=this.initShaderProgram(this.vertexShader,this.fragmentShader),u){var l=this.gl.getAttribLocation(this.program,s);u[s].location=l}for(var f=t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS),d=0;d<f;d++){var h=t.getActiveUniform(this.program,d),v=h.name,p=h.type,m=h.size,g=m>1,y=this.gl.getUniformLocation(this.program,v);this.uniformLocations[v]=new i(y,p*(+g+1),m)}}return e.setTypeToLocationMap=function(t){var n;e.typeToLocationMap=((n={})[t.FLOAT]="uniform1f",n[t.INT]="uniform1i",n[t.INT_VEC2]="uniform2i",n[2*t.INT_VEC2]="uniform2iv",n[t.INT_VEC3]="uniform3i",n[2*t.INT_VEC3]="uniform3iv",n[t.INT_VEC4]="uniform4i",n[2*t.INT_VEC4]="uniform4iv",n[2*t.FLOAT]="uniform1fv",n[t.FLOAT_VEC2]="uniform2f",n[2*t.FLOAT_VEC2]="uniform2fv",n[t.FLOAT_VEC3]="uniform3f",n[2*t.FLOAT_VEC3]="uniform3fv",n[t.FLOAT_VEC4]="uniform4f",n[2*t.FLOAT_VEC4]="uniform4fv",n[t.FLOAT_MAT2]="uniformMatrix2fv",n[t.FLOAT_MAT3]="uniformMatrix3fv",n[t.FLOAT_MAT4]="uniformMatrix4fv",n[t.SAMPLER_2D]="uniform1i",n)},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n,r){var o=n.dimension,i=n.type,a=void 0===i?e.FLOAT:i,u=n.normalize,c=void 0!==u&&u,s=n.stride,l=void 0===s?0:s,f=n.offset,d=void 0===f?0:f;void 0===r&&(r=e.STATIC_DRAW),this.data=t,this.location=null;var h=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,t,r),this.buffer=h,this.vertexAttributeMetadata={dimension:o,type:a,normalize:c,stride:l,offset:d}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={get:function(){return this[0]},set:function(e){return this[0]=e,e}},o={get:function(){return this[1]},set:function(e){return this[1]=e,e}};Array.prototype.x||(Object.defineProperty(Array.prototype,"x",r),Object.defineProperty(Array.prototype,"y",o)),t.v2=function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),[e,t]},t.ZERO=t.v2(),t.distance=function(e,t){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},t.distanceSquared=function(e,t){return(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)},t.magnitude=function(e){return t.distance(e,t.ZERO)},t.ccw=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(n.x-e.x)*(t.y-e.y)},t.angle2=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},t.angle3=function(e,t,n){return Math.atan2(e.y-t.y,e.x-t.x)-Math.atan2(n.y-t.y,n.x-t.x)},t.piNum=Math.PI/180,t.numPi=180/Math.PI,t.degToRad=function(e){return e*t.piNum},t.radToDeg=function(e){return e*t.numPi},t.dot=function(e,t){return e.x*t.x+e.y*t.y},t.sum=function(e,n){return t.v2(e.x+n.x,e.y+n.y)},t.sub=function(e,n){return t.v2(e.x-n.x,e.y-n.y)},t.mult=function(e,n){return t.v2(e.x*n.x,e.y*n.y)},t.divide=function(e,n){return t.v2(e.x/n.x,e.y/n.y)},t.unit=function(e){var n=t.distance(t.ZERO,e);return t.v2(e.x/n,e.y/n)},t.normal=function(e,n){var r=n.x-e.x,o=n.y-e.y;return t.v2(-o,r)},t.orthogonal=function(e){return t.v2(-e.y,e.x)},t.scalarMultiply=function(e,n){return t.v2(e.x*n,e.y*n)},t.scalarSum=function(e,n){return t.v2(e.x+n,e.y+n)}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),u=function(e,t){var n=this;this.element=e,this.settings=t,this.mouse=a.v2(),this.mouseButtons=Array(),this.keys=new Set,this.touches=[],this.updateTouches=function(e){e.preventDefault(),n.touches=i(e.touches).map((function(e){return a.v2(e.pageX,e.pageY)}))},this.render=function(){n.draw(n.gl,n),window.requestAnimationFrame(n.render)},this.start=function(){return r(n,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.init(this.gl,this)];case 1:return e.sent(),this.RAF=requestAnimationFrame(this.render),[2]}}))}))},this.draw=function(e,t){},this.init=function(e,t){return r(n,void 0,void 0,(function(){return o(this,(function(e){return[2]}))}))},this.onResize=function(e,t){},this.onClick=function(e,t){},this.onMouseDown=function(e,t){},this.onMouseUp=function(e,t){},this.onKeyDown=function(e,t,n){},this.onKeyUp=function(e,t,n){},this.setCanvasDimensions=function(e,t){var r=n.element;r.width=e,r.height=t,r.style.width=String(e),r.style.height=String(t)},this.setCanvasSize=function(e){e.fullscreen&&(e.width=window.innerWidth,e.height=window.innerHeight),n.setCanvasDimensions(e.width,e.height)},this.setCanvasSize(t);var u=this.gl=this.element.getContext("webgl");if(u||(u=this.gl=this.element.getContext("experimental-webgl")),!u)throw new Error("Could not find webgl context");window.addEventListener("resize",(function(){n.setCanvasSize(t),u.viewport(0,0,t.width,t.height),n.onResize(u,n)})),e.addEventListener("mousemove",(function(e){e.offsetX&&(n.mouse.x=e.offsetX,n.mouse.y=e.offsetY)})),e.addEventListener("mousedown",(function(e){n.mouseButtons[e.button]=!0,n.onMouseDown(u,n)})),e.addEventListener("mouseup",(function(e){n.mouseButtons[e.button]=!1,n.onMouseUp(u,n)})),e.addEventListener("mouseleave",(function(e){n.mouseButtons=Array(),n.onMouseUp(u,n)})),e.addEventListener("click",(function(e){n.onClick(u,n)})),e.addEventListener("touchstart",(function(e){n.updateTouches(e);for(var t=0;t<e.changedTouches.length;t++){var r=e.changedTouches[t];0===t&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}n.onMouseDown(u,n)})),e.addEventListener("touchend",(function(e){n.updateTouches(e);for(var t=0;t<e.changedTouches.length;t++){var r=e.changedTouches[t];0===t&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}n.onMouseUp(u,n),n.onClick(u,n)})),e.addEventListener("touchmove",(function(e){n.updateTouches(e);for(var t=0;t<e.changedTouches.length;t++){var r=e.changedTouches[t];0===t&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}})),e.addEventListener("keydown",(function(e){e.preventDefault();var t=e.keyCode;n.keys.add(t),n.onKeyDown(n.gl,n,t)})),e.addEventListener("keyup",(function(e){e.preventDefault();var t=e.keyCode;n.keys.delete(t),n.onKeyUp(n.gl,n,t)})),e.addEventListener("contextmenu",(function(e){return e.preventDefault()})),e.addEventListener("dragenter",(function(e){return e.preventDefault()}))};t.default=u},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=0,a=-1/0,u=function(){function e(){this.textureSource=i++,this.loaded=!0}return Object.defineProperty(e.prototype,"textureUnit",{get:function(){return this.textureSource%a},enumerable:!0,configurable:!0}),e.prototype.setTexture=function(e){if(a<0&&(a=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),!this.loaded)throw new Error("Attempted to bind image to texture before it loads. Make sure the image is loaded by the time you call bindTexture");var t=e.createTexture();return this._texture=t,this.bindTexture(e),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.texture),t},e.prototype.bindTexture=function(e){e.activeTexture(e.TEXTURE0+this.textureUnit),e.bindTexture(e.TEXTURE_2D,this._texture)},e.prototype.delete=function(e){e.deleteTexture(this._texture),this.loaded=!1},e}();t.default=u;var c=function(e){function t(t){var n=e.call(this)||this;return n.texture=t.canvas,n.height=t.canvas.height,n.width=t.canvas.width,n}return o(t,e),t.prototype.rebindTexture=function(e){this.bindTexture(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.texture)},t}(u);t.CanvasTexture=c;var s=function(e){function t(t){var n=e.call(this)||this;n.source=t,n.loaded=!1;var r=new Image;return r.src=t,n.width=r.width,n.height=r.height,n.load=new Promise((function(e,t){r.onload=function(){n.loaded=!0,n.width=r.width,n.height=r.height,e(n)},r.onerror=function(e){n.loaded=!1,n.width=r.width,n.height=r.height,t(e)}})),n.texture=r,n}return o(t,e),t}(u);t.ImageTexture=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleRectangle=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1])},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,n){this.name=e,this.setup=t,this.draw=n}return e.prototype.onload=function(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t=this,[4,this.setup(e)];case 1:return t.material=n.sent(),[2]}}))}))},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeOffscreenCanvas=function(e,t){var n=document.createElement("canvas").getContext("2d");return n.canvas.width=e,n.canvas.height=t,n}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(1),u=n(6),c=n(9),s=n(10),l=new u.default("Mouse Gradient",(function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(t){return[2,new i.default(e,s,c,{aPosition:new a.default(e,new Float32Array([0,0,1,1,0,.5,0,1,.5,0,1,.5,1,0,.5,1,1,0]),{dimension:3})})]}))}))}),(function(e,t,n){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),t.useProgram(),t.setUniform("uColor",n.mouse.x/n.settings.width,.42,n.mouse.y/n.settings.height),t.drawUsingAttribute("aPosition")}));t.default=l},function(e,t){e.exports="precision mediump float;\nvarying float vColor;\nuniform vec3 uColor;\nvoid main () {\n  gl_FragColor = vec4(uColor * vColor, 1);\n}"},function(e,t){e.exports="precision mediump float;\nattribute vec3 aPosition;\nvarying float vColor;\nvoid main () {\n  vColor = aPosition.z;\n  vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);\n  gl_Position = vec4(pos, 0, 1);\n}"},,function(e,t,n){"use strict";n.r(t),t.default=n.p+"c72192d9f5410ff728784c1dbdcc7bf3.jpg"},function(e,t,n){"use strict";(function(e){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=n(8),u=n(15),c=n(18),s=[a.default,u.default,c.default],l=s[0],f=document.createElement("ul");s.map((function(e,t){var n=document.createElement("li"),r=document.createElement("a");return r.textContent=e.name,r.addEventListener("click",(function(e){e.preventDefault(),l=s[t]})),n.appendChild(r),n})).forEach((function(e){return f.appendChild(e)})),window.onload=function(){document.body.appendChild(f);var t=new i.default(document.getElementById("webgl"),{fullscreen:!0});t.init=function(n){return r(void 0,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return e.engine=t,[4,Promise.all(s.map((function(e){return e.onload(n)})))];case 1:return r.sent(),[2]}}))}))},t.draw=function(e,t){l&&l.draw(e,l.material,t)},t.start()}}).call(this,n(14))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=n(1),u=n(4),c=n(6),s=n(16),l=n(17),f=n(12),d=n(5),h=new u.ImageTexture(f.default),v=new c.default("Texture Example",(function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t=new i.default(e,l,s,{aPosition:new a.default(e,d.SimpleRectangle,{dimension:2}),aTextcoord:new a.default(e,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),{dimension:2})}),[4,h.load];case 1:return n.sent(),h.setTexture(e),[2,t]}}))}))}),(function(e,t,n){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),t.useProgram(),h.bindTexture(e),t.setUniform("uImage",h.textureUnit),t.setUniform("uColor",n.mouse[0]/n.settings.width,.42,n.mouse[1]/n.settings.height),t.drawUsingAttribute("aPosition")}));t.default=v},function(e,t){e.exports="precision mediump float;\nvarying vec2 vTextcoord;\nuniform vec3 uColor;\nuniform sampler2D uImage;\n\nvoid main () {\n  vec4 tex = texture2D(uImage, vTextcoord);\n  gl_FragColor = vec4(\n    tex.r * max(uColor.r, 0.5), // Half the red depending on the mouse\n    tex.g,\n    tex.b * max(uColor.b, 0.5), // Half the blue depending on the mouse\n    tex.a // Will probably always be one, but in the case that we get a PNG\n  );\n}"},function(e,t){e.exports="precision mediump float;\nattribute vec2 aPosition;\nattribute vec2 aTextcoord;\nvarying vec2 vTextcoord;\n\nvoid main () {\n  vTextcoord = aTextcoord;\n  vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);\n  gl_Position = vec4(pos, 0, 1);\n}\n"},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var i,a,u,c=n(4),s=n(0),l=n(1),f=n(4),d=n(6),h=n(19),v=n(20),p=n(21),m=n(22),g=n(23),y=n(12),x=n(24),b=n(25),w=n(5),T=n(7),_=0,E=[g.default,y.default,x.default,b.default].map((function(e){return new f.ImageTexture(e)})),P=0,A={normal:[0,0,0,0,1,0,0,0,0],gaussianBlur:[.045,.122,.045,.122,.332,.122,.045,.122,.045],gaussianBlur2:[1,2,1,2,4,2,1,2,1],gaussianBlur3:[0,1,0,1,1,1,0,1,0],unsharpen:[-1,-1,-1,-1,9,-1,-1,-1,-1],sharpness:[0,-1,0,-1,5,-1,0,-1,0],sharpen:[-1,-1,-1,-1,16,-1,-1,-1,-1],edgeDetect:[-.125,-.125,-.125,-.125,1,-.125,-.125,-.125,-.125],edgeDetect2:[-1,-1,-1,-1,8,-1,-1,-1,-1],edgeDetect3:[-5,0,0,0,0,0,0,0,5],edgeDetect4:[-1,-1,-1,0,0,0,1,1,1],edgeDetect5:[-1,-1,-1,2,2,2,-1,-1,-1],edgeDetect6:[-5,-5,-5,-5,39,-5,-5,-5,-5],sobelHorizontal:[1,2,1,0,0,0,-1,-2,-1],sobelVertical:[1,0,-1,2,0,-2,1,0,-1],previtHorizontal:[1,1,1,0,0,0,-1,-1,-1],previtVertical:[1,0,-1,1,0,-1,1,0,-1],boxBlur:[.111,.111,.111,.111,.111,.111,.111,.111,.111],triangleBlur:[.0625,.125,.0625,.125,.25,.125,.0625,.125,.0625],emboss:[-2,-1,0,-1,1,1,0,1,2]},S=Object.keys(A),I=new d.default("Image Kernel Example",(function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t=new s.default(e,v,h,{aPosition:new l.default(e,w.SimpleRectangle,{dimension:2}),aTextcoord:new l.default(e,w.SimpleRectangle,{dimension:2})}),u=T.makeOffscreenCanvas(e.canvas.width,e.canvas.height),(i=new c.CanvasTexture(u)).setTexture(e),a=new s.default(e,m,p,{aPosition:new l.default(e,w.SimpleRectangle,{dimension:2}),aTextcoord:new l.default(e,w.SimpleRectangle,{dimension:2})}),[4,Promise.all(E.map((function(e){return e.load})))];case 1:return n.sent(),E.forEach((function(t){return t.setTexture(e)})),[2,t]}}))}))}),(function(e,t,n){var r=E[_];n.onKeyUp=function(e,t,n){38===n&&(P=P?P-1:S.length-1),40===n&&(P=(P+1)%S.length),37===n&&(_=_?_-1:E.length-1),39===n&&(_=(_+1)%E.length)},e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);var o=S[P],c=A[o];t.useProgram(),r.bindTexture(e);var s=Math.max(c.reduce((function(e,t){return e+t})),1);t.setUniform("uImage",r.textureUnit),t.setUniform("uImageResolution",r.width,r.height),t.setUniform("uImageKernel[0]",c),t.setUniform("uKernelWeight",s),t.drawUsingAttribute("aPosition");var l=n.settings,f=l.width,d=l.height;u.canvas.width=f,u.canvas.height=d,u.clearRect(0,0,f,d);var h=["Use the top and bottom arrow keys to select a separate filter","Use the left and right arrow keys to swap images","Selected Filter: "+o,"Selected Image: "+_],v=d-30*h.length,p=.25*f;u.font="24px sans-serif";for(var m=0,g=h;m<g.length;m++){var y=g[m];u.fillStyle="white",u.fillText(y,p+1,v+1),u.fillStyle="black",u.fillText(y,p,v),v+=30}i.rebindTexture(e),a.useProgram(),a.setUniform("uImage",i.textureUnit),a.drawUsingAttribute("aPosition")}));t.default=I},function(e,t){e.exports="precision mediump float;\nvarying vec2 vTextcoord;\nuniform sampler2D uImage;\nuniform vec2 uImageResolution;\nuniform float uImageKernel[9];\nuniform float uKernelWeight;\n\nvoid main () {\n  vec2 pixel = vec2(1.0, 1.0) / uImageResolution;\n  vec4 colorSum = (\n    texture2D(uImage, vTextcoord + pixel * vec2(-1.0, -1.0)) * uImageKernel[0] +\n    texture2D(uImage, vTextcoord + pixel * vec2(-1.0, 0.0)) * uImageKernel[1] +\n    texture2D(uImage, vTextcoord + pixel * vec2(-1.0, 1.0)) * uImageKernel[2] +\n    texture2D(uImage, vTextcoord + pixel * vec2(0.0, -1.0)) * uImageKernel[3] +\n    texture2D(uImage, vTextcoord + pixel * vec2(0.0, 0.0)) * uImageKernel[4] +\n    texture2D(uImage, vTextcoord + pixel * vec2(0.0, 1.0)) * uImageKernel[5] +\n    texture2D(uImage, vTextcoord + pixel * vec2(1.0, -1.0)) * uImageKernel[6] +\n    texture2D(uImage, vTextcoord + pixel * vec2(1.0, 0.0)) * uImageKernel[7] +\n    texture2D(uImage, vTextcoord + pixel * vec2(1.0, 1.0)) * uImageKernel[8]\n  );\n  gl_FragColor = vec4((colorSum / uKernelWeight).rgb, 1.0);\n}"},function(e,t){e.exports="precision mediump float;\nattribute vec2 aPosition;\nattribute vec2 aTextcoord;\nvarying vec2 vTextcoord;\n\nvoid main () {\n  vTextcoord = aTextcoord;\n  vec2 pos = (aPosition.xy * 2.0 - 1.0) * vec2(1, -1);\n  gl_Position = vec4(pos, 0, 1);\n}\n"},function(e,t){e.exports="precision mediump float;\nvarying vec2 vTextcoord;\nuniform sampler2D uImage;\n\nvoid main () {\n  gl_FragColor = texture2D(uImage, vTextcoord);\n}\n"},function(e,t){e.exports="precision mediump float;\nattribute vec2 aPosition;\nattribute vec2 aTextcoord;\nvarying vec2 vTextcoord;\n\nvoid main () {\n  vTextcoord = aTextcoord;\n  // Moving from a -1 => 1 to 0 => 1\n  vec2 pos = (aPosition * 2.0 - 1.0) * vec2(1, -1);\n  gl_Position = vec4(pos, 0, 1);\n}"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"d85048dcac18bf58b004bd7e9a0474b7.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"5e942e37425491f63e617a1ba9c1120d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"61c0357c5d8f16f9e14d5588832307b4.jpg"}]);