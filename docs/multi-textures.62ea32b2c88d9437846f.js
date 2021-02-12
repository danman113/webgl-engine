!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=34)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cross=e.normal=e.normalize=e.divide=e.mult=e.sub=e.sum=e.dot=e.distanceSquared=e.distance=e.ZERO=e.UP=e.v3=void 0;var r={get:function(){return this[0]},set:function(t){return this[0]=t,t}},i={get:function(){return this[1]},set:function(t){return this[1]=t,t}},o={get:function(){return this[2]},set:function(t){return this[2]=t,t}};e.v3=function(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0);var a=[t,e,n];return Object.defineProperty(a,"x",r),Object.defineProperty(a,"y",i),Object.defineProperty(a,"z",o),a},e.UP=e.v3(0,1),e.ZERO=e.v3(),e.distance=function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z))},e.distanceSquared=function(t,e){return(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z)},e.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z+e.z},e.sum=function(t,n){return e.v3(t.x+n.x,t.y+n.y,t.z+n.z)},e.sub=function(t,n){return e.v3(t.x-n.x,t.y-n.y,t.z-n.z)},e.mult=function(t,n){return e.v3(t.x*n.x,t.y*n.y,t.z*n.z)},e.divide=function(t,n){return e.v3(t.x/n.x,t.y/n.y,t.z/n.z)},e.normalize=function(t){var n=e.distance(e.ZERO,t);return e.v3(t.x/n,t.y/n,t.z/n)},e.normal=function(t,n){return e.v3(t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0])},e.cross=e.normal},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.scalarSum=e.scalarMultiply=e.orthogonal=e.cross=e.normal=e.normalize=e.divide=e.mult=e.sub=e.sum=e.dot=e.radToDeg=e.degToRad=e.numPi=e.piNum=e.angle3=e.angle2=e.ccw=e.magnitude=e.distanceSquared=e.distance=e.ZERO=e.v2=void 0;var r={get:function(){return this[0]},set:function(t){return this[0]=t,t}},i={get:function(){return this[1]},set:function(t){return this[1]=t,t}};Array.prototype.x||(Object.defineProperty(Array.prototype,"x",r),Object.defineProperty(Array.prototype,"y",i),Object.defineProperty(Array.prototype,"add",{value:function(t){return this[0]+=t[0],this[1]+=t[1],this}}),Object.defineProperty(Array.prototype,"sub",{value:function(t){return this[0]-=t[0],this[1]-=t[1],this}}),Object.defineProperty(Array.prototype,"magnitude",{value:function(){return e.magnitude(this)}}),Object.defineProperty(Array.prototype,"normalize",{value:function(t){var n=e.distance(e.ZERO,t);return this[0]/=n,this[1]/=n,this}})),e.v2=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),[t,e]},e.ZERO=e.v2(),e.distance=function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},e.distanceSquared=function(t,e){return(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)},e.magnitude=function(t){return e.distance(t,e.ZERO)},e.ccw=function(t,e,n){return(e.x-t.x)*(n.y-t.y)-(n.x-t.x)*(e.y-t.y)},e.angle2=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},e.angle3=function(t,e,n){return Math.atan2(t.y-e.y,t.x-e.x)-Math.atan2(n.y-e.y,n.x-e.x)},e.piNum=Math.PI/180,e.numPi=180/Math.PI,e.degToRad=function(t){return t*e.piNum},e.radToDeg=function(t){return t*e.numPi},e.dot=function(t,e){return t.x*e.x+t.y*e.y},e.sum=function(t,n){return e.v2(t.x+n.x,t.y+n.y)},e.sub=function(t,n){return e.v2(t.x-n.x,t.y-n.y)},e.mult=function(t,n){return e.v2(t.x*n.x,t.y*n.y)},e.divide=function(t,n){return e.v2(t.x/n.x,t.y/n.y)},e.normalize=function(t){var n=e.distance(e.ZERO,t);return e.v2(t.x/n,t.y/n)},e.normal=function(t,n){var r=n.x-t.x,i=n.y-t.y;return e.v2(-i,r)},e.cross=e.normal,e.orthogonal=function(t){return e.v2(-t.y,t.x)},e.scalarMultiply=function(t,n){return e.v2(t.x*n,t.y*n)},e.scalarSum=function(t,n){return e.v2(t.x+n,t.y+n)}},function(t,e,n){"use strict";var r,i=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.ShaderTypes=void 0,function(t){t.Fragment="FRAGMENT",t.Vertex="VERTEX"}(r=e.ShaderTypes||(e.ShaderTypes={}));var o=function(t,e,n){this.location=t,this.type=e,this.size=n},a=function(){function t(e,n,a,u){var s=this;for(var c in this.gl=e,this.vertexSource=n,this.fragmentSource=a,this.attributes=u,this.uniformLocations={},this.bindAttributes=function(){for(var t in s.attributes){var e=s.attributes[t];s.gl.enableVertexAttribArray(e.location),s.gl.bindBuffer(s.gl.ARRAY_BUFFER,e.buffer),s.gl.vertexAttribPointer(e.location,e.vertexAttributeMetadata.dimension,e.vertexAttributeMetadata.type,e.vertexAttributeMetadata.normalize,e.vertexAttributeMetadata.stride,e.vertexAttributeMetadata.offset)}},this.setUniform=function(e){for(var n,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(!s.uniformLocations[e])throw new Error("Uniform '"+e+"' not referenced in source program");var a=s.uniformLocations[e],u=a.location,c=a.type;(n=s.gl)[t.typeToLocationMap[c]].apply(n,i([u],r))},this.useProgram=function(){return s.gl.useProgram(s.program)},this.drawUsingAttribute=function(t,e,n){void 0===e&&(e=s.gl.TRIANGLES),void 0===n&&(n=0);var r=s.attributes[t];s.bindAttributes(),s.gl.drawArrays(e,n,r.data.length/r.vertexAttributeMetadata.dimension)},this.compileShader=function(t,e){var n=s.gl,i=n.createShader(e===r.Fragment?n.FRAGMENT_SHADER:n.VERTEX_SHADER);if(n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS)){var o=new Error(n.getShaderInfoLog(i));throw n.deleteShader(i),o}return i},this.initShaderProgram=function(t,e){var n=s.gl,r=n.createProgram();if(n.attachShader(r,t),n.attachShader(r,e),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS)){var i=new Error(n.getProgramInfoLog(r));throw n.deleteProgram(r),i}return r},t.typeToLocationMap||t.setTypeToLocationMap(e),this.vertexShader=this.compileShader(n,r.Vertex),this.fragmentShader=this.compileShader(a,r.Fragment),this.program=this.initShaderProgram(this.vertexShader,this.fragmentShader),u){var h=this.gl.getAttribLocation(this.program,c);u[c].location=h}for(var f=e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS),d=0;d<f;d++){var l=e.getActiveUniform(this.program,d),v=l.name,p=l.type,m=l.size,y=m>1,g=this.gl.getUniformLocation(this.program,v);this.uniformLocations[v]=new o(g,p*(+y+1),m)}}return t.setTypeToLocationMap=function(e){var n;t.typeToLocationMap=((n={})[e.FLOAT]="uniform1f",n[e.INT]="uniform1i",n[e.INT_VEC2]="uniform2i",n[2*e.INT_VEC2]="uniform2iv",n[e.INT_VEC3]="uniform3i",n[2*e.INT_VEC3]="uniform3iv",n[e.INT_VEC4]="uniform4i",n[2*e.INT_VEC4]="uniform4iv",n[2*e.FLOAT]="uniform1fv",n[e.FLOAT_VEC2]="uniform2f",n[2*e.FLOAT_VEC2]="uniform2fv",n[e.FLOAT_VEC3]="uniform3f",n[2*e.FLOAT_VEC3]="uniform3fv",n[e.FLOAT_VEC4]="uniform4f",n[2*e.FLOAT_VEC4]="uniform4fv",n[e.FLOAT_MAT2]="uniformMatrix2fv",n[e.FLOAT_MAT3]="uniformMatrix3fv",n[e.FLOAT_MAT4]="uniformMatrix4fv",n[e.SAMPLER_2D]="uniform1i",n)},t}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e,n,r){var i=n.dimension,o=n.type,a=void 0===o?t.FLOAT:o,u=n.normalize,s=void 0!==u&&u,c=n.stride,h=void 0===c?0:c,f=n.offset,d=void 0===f?0:f;void 0===r&&(r=t.STATIC_DRAW),this.data=e,this.location=null;var l=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,l),t.bufferData(t.ARRAY_BUFFER,e,r),this.buffer=l,this.vertexAttributeMetadata={dimension:i,type:a,normalize:s,stride:h,offset:d}};e.default=r},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),u=function(t,e){var n=this;this.element=t,this.settings=e,this.mouse=a.v2(),this.mouseMovement=a.v2(),this.mouseButtons=Array(),this.mouseMoved=!1,this.keys=new Set,this.touches=[],this.updateTouches=function(t){t.preventDefault(),n.touches=o(t.touches).map((function(t){return a.v2(t.pageX,t.pageY)}))},this.then=0,this.render=function(t){var e=(t-n.then)/(1e3/n.settings.fps);n.then=t,n.draw(n.gl,n,e),n.mouseMoved&&(n.mouseMovement.x=0,n.mouseMovement.y=0,n.mouseMoved=!1),window.requestAnimationFrame(n.render)},this.start=function(){return r(n,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,this.init(this.gl,this)];case 1:return t.sent(),this.RAF=requestAnimationFrame(this.render),[2]}}))}))},this.draw=function(t,e,n){},this.init=function(t,e){return r(n,void 0,void 0,(function(){return i(this,(function(t){return[2]}))}))},this.onResize=function(t,e){},this.onClick=function(t,e){},this.onMouseDown=function(t,e){},this.onMouseUp=function(t,e){},this.onKeyDown=function(t,e,n){},this.onKeyUp=function(t,e,n){},this.setCanvasDimensions=function(t,e){var r=n.element;r.width=t,r.height=e,r.style.width=String(t),r.style.height=String(e)},this.setCanvasSize=function(t){t.fullscreen&&(t.width=window.innerWidth,t.height=window.innerHeight),n.setCanvasDimensions(t.width,t.height)},e.fps=e.fps||60,this.setCanvasSize(e);var u=this.gl=this.element.getContext("webgl");if(u||(u=this.gl=this.element.getContext("experimental-webgl")),!u)throw new Error("Could not find webgl context");window.addEventListener("resize",(function(){n.setCanvasSize(e),u.viewport(0,0,e.width,e.height),n.onResize(u,n)})),t.addEventListener("mousemove",(function(t){n.mouseMoved=!0,(t.offsetX||t.offsetY)&&(n.mouse.x=t.offsetX,n.mouse.y=t.offsetY),n.mouseMovement.x=t.movementX||0,n.mouseMovement.y=t.movementY||0})),t.addEventListener("mousedown",(function(t){n.mouseButtons[t.button]=!0,n.onMouseDown(u,n)})),t.addEventListener("mouseup",(function(t){n.mouseButtons[t.button]=!1,n.onMouseUp(u,n)})),t.addEventListener("mouseleave",(function(t){n.mouseButtons=Array(),n.onMouseUp(u,n)})),t.addEventListener("click",(function(t){n.onClick(u,n)})),t.addEventListener("touchstart",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}n.onMouseDown(u,n)})),t.addEventListener("touchend",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}n.onMouseUp(u,n),n.onClick(u,n)})),t.addEventListener("touchmove",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}})),t.addEventListener("keydown",(function(t){t.preventDefault();var e=t.keyCode;n.keys.add(e),n.onKeyDown(n.gl,n,e)})),t.addEventListener("keyup",(function(t){t.preventDefault();var e=t.keyCode;n.keys.delete(e),n.onKeyUp(n.gl,n,e)})),t.addEventListener("contextmenu",(function(t){return t.preventDefault()})),t.addEventListener("dragenter",(function(t){return t.preventDefault()}))};e.default=u},function(t,e,n){"use strict";var r=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.generateSphere=e.SimpleRectangle=void 0;var i=n(0);e.SimpleRectangle=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.generateSphere=function(t,e,n){void 0===t&&(t=10),void 0===e&&(e=10),void 0===n&&(n=10);var o=[],a=(1+Math.sqrt(5))/2;o.push(i.v3(-1,a,0)),o.push(i.v3(1,a,0)),o.push(i.v3(-1,-a,0)),o.push(i.v3(1,-a,0)),o.push(i.v3(0,-1,a)),o.push(i.v3(0,1,a)),o.push(i.v3(0,-1,-a)),o.push(i.v3(0,1,-a)),o.push(i.v3(a,0,-1)),o.push(i.v3(a,0,1)),o.push(i.v3(-a,0,-1)),o.push(i.v3(-a,0,1));var u=[];return u.push(0,11,5),u.push(0,5,1),u.push(0,1,7),u.push(0,7,10),u.push(0,10,11),u.push(1,5,9),u.push(5,11,4),u.push(11,10,2),u.push(10,7,6),u.push(7,1,8),u.push(3,9,4),u.push(3,4,2),u.push(3,2,6),u.push(3,6,8),u.push(3,8,9),u.push(4,9,5),u.push(2,4,11),u.push(6,2,10),u.push(8,6,7),u.push(9,8,1),u=u.map((function(t){return o[t]})).reduce((function(t,e){return r(t,e)}),[]),new Float32Array(u.map((function(t){return t*n})))}},function(t,e){function n(t){if(t&&"object"==typeof t){var e=t.which||t.keyCode||t.charCode;e&&(t=e)}if("number"==typeof t)return a[t];var n,o=String(t);return(n=r[o.toLowerCase()])?n:(n=i[o.toLowerCase()])||(1===o.length?o.charCodeAt(0):void 0)}n.isEventKey=function(t,e){if(t&&"object"==typeof t){var n=t.which||t.keyCode||t.charCode;if(null==n)return!1;if("string"==typeof e){var o;if(o=r[e.toLowerCase()])return o===n;if(o=i[e.toLowerCase()])return o===n}else if("number"==typeof e)return e===n;return!1}};var r=(e=t.exports=n).code=e.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},i=e.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};
/*!
 * Programatically add the following
 */
for(o=97;o<123;o++)r[String.fromCharCode(o)]=o-32;for(var o=48;o<58;o++)r[o-48]=o;for(o=1;o<13;o++)r["f"+o]=o+111;for(o=0;o<10;o++)r["numpad "+o]=o+96;var a=e.names=e.title={};for(o in r)a[r[o]]=o;for(var u in i)r[u]=i[u]},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.ImageTexture=e.CanvasTexture=void 0;var o=0,a=-1/0,u=function(){function t(){this.textureSource=o++,this.loaded=!0}return Object.defineProperty(t.prototype,"textureUnit",{get:function(){return this.textureSource%a},enumerable:!1,configurable:!0}),t.prototype.setTexture=function(t){if(a<0&&(a=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),!this.loaded)throw new Error("Attempted to bind image to texture before it loads. Make sure the image is loaded by the time you call bindTexture");var e=t.createTexture();return this._texture=e,this.bindTexture(t),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.texture),e},t.prototype.bindTexture=function(t){t.activeTexture(t.TEXTURE0+this.textureUnit),t.bindTexture(t.TEXTURE_2D,this._texture)},t.prototype.delete=function(t){t.deleteTexture(this._texture),this.loaded=!1},t}();e.default=u;var s=function(t){function e(e){var n=t.call(this)||this;return n.texture=e.canvas,n.height=e.canvas.height,n.width=e.canvas.width,n}return i(e,t),e.prototype.rebindTexture=function(t){this.bindTexture(t),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.texture)},e}(u);e.CanvasTexture=s;var c=function(t){function e(e){var n=t.call(this)||this;n.source=e,n.loaded=!1;var r=new Image;return r.src=e,n.width=r.width,n.height=r.height,n.load=new Promise((function(t,e){r.onload=function(){n.loaded=!0,n.width=r.width,n.height=r.height,t(n)},r.onerror=function(t){n.loaded=!1,n.width=r.width,n.height=r.height,e(t)}})),n.texture=r,n}return i(e,t),e}(u);e.ImageTexture=c},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeOffscreenCanvas=void 0,e.makeOffscreenCanvas=function(t,e){var n=document.createElement("canvas").getContext("2d");return n.canvas.width=t,n.canvas.height=e,n}},,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});for(var o=n(6),a=n(1),u=n(35),s=n(4),c=n(2),h=n(3),f=n(7),d=n(10),l=n(36),v=n(37),p=n(38),m=n(5),y="",g=0;g<26;g++)y+=String.fromCharCode(65+g);var x,b=d.makeOffscreenCanvas(200,100),w=function(t){var e=Array(Math.floor(20*Math.random()+5)).fill(0).map((function(t){return y[Math.floor(Math.random()*y.length)]})).join("")+": "+t;b.font="14px sans-serif";var n=b.measureText(e).width;b.canvas.width=n,b.clearRect(0,0,Math.ceil(b.canvas.width),Math.ceil(b.canvas.height)),b.fillStyle="rgba(0, "+(156*Math.random()+100|0)+", "+(156*Math.random()+100|0)+", 0.6)",b.fillRect(0,0,Math.ceil(b.canvas.width),Math.ceil(b.canvas.height)),b.fillStyle="red",b.font="14px sans-serif",b.fillText(e,0,14);var r=new f.CanvasTexture(b),i=2*Math.random();return new T(r,a.v2(Math.random(),Math.random()),a.v2(Math.sin(i),Math.cos(i)),e)},T=function(t,e,n,r){this.texture=t,this.position=e,this.rotation=n,this.id=r},_=[];window.onload=function(){var t=new s.default(document.getElementById("webgl"),{fullscreen:!0});window.engine=t,window.textureEntities=_,window.keycode=o,t.init=function(t){return r(void 0,void 0,void 0,(function(){var e,n;return i(this,(function(r){for(e=0;e<500;e++)(n=w(e)).texture.setTexture(t),_.push(n);return x=new c.default(t,v,l,{aPosition:new h.default(t,m.SimpleRectangle,{dimension:2}),aTextcoord:new h.default(t,m.SimpleRectangle,{dimension:2})}),[2]}))}))};var e=-1,n=a.v2(0,0);t.onMouseDown=function(r,i){for(var o=a.v2(t.settings.width,t.settings.height),u=_.length-1;u>=0;u--){var s=_[u],c=a.mult(s.position,o),h=new p.default(c,a.sum(c,a.v2(s.texture.width,s.texture.height))),f=new p.default(t.mouse,a.sum(t.mouse,a.v2(-2,-2)));if(h.intersectsBox(f)){e=u,n=t.mouse.slice();break}}},t.onMouseUp=function(r,i){if(e>-1){var o=a.v2(t.settings.width,t.settings.height),u=a.divide(a.sub(t.mouse,n),o);_[e].position=a.sum(_[e].position,u),e=-1}};var f=0,d=a.v2(-.5,-.5);t.draw=function(t,r){t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),r.keys.has(o("left"))&&(f+=.02),r.keys.has(o("right"))&&(f-=.02);for(var i=1;i<10;i++)if(r.keys.has(o(String(i)))){var s=i-1,c=Math.floor(s%3)/2,h=Math.floor(s/3)/2;d=a.v2(-c,h-1)}var l=a.v2(r.settings.width,r.settings.height),v=a.divide(a.sub(r.mouse,n),l);x.useProgram();for(i=0;i<_.length;i++){var p=_[i];p.texture.bindTexture(t),x.setUniform("uImage",p.texture.textureUnit);var m=void 0;if(e===i){var y=a.sum(p.position,v);m=u.translation(y)}else m=u.translation(p.position);var g=u.rotation(f),b=u.scale(a.v2(p.texture.width/r.settings.width,p.texture.height/r.settings.height)),w=m;w=u.multiplication(w,u.translation(a.mult(d,a.v2(-b[0],-b[4])))),w=u.multiplication(w,g),w=u.multiplication(w,b),w=u.multiplication(w,u.translation(d)),x.setUniform("uMatrix",!1,w),x.drawUsingAttribute("aPosition")}},t.start()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.multiplication=e.rotation=e.scale=e.translation=e.identity=void 0,e.identity=function(){var t=Array(9).fill(0);return t[0]=1,t[4]=1,t[8]=1,t},e.translation=function(t){var n=e.identity();return n[6]=t.x,n[7]=t.y,n},e.scale=function(t){var n=e.identity();return n[0]=t.x,n[4]=t.y,n},e.rotation=function(t){var n=e.identity(),r=Math.cos(t),i=Math.sin(t);return n[0]=r,n[1]=-i,n[3]=i,n[4]=r,n},e.multiplication=function(t,e){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],u=t[5],s=t[6],c=t[7],h=t[8],f=e[0],d=e[1],l=e[2],v=e[3],p=e[4],m=e[5],y=e[6],g=e[7],x=e[8];return[f*n+d*o+l*s,f*r+d*a+l*c,f*i+d*u+l*h,v*n+p*o+m*s,v*r+p*a+m*c,v*i+p*u+m*h,y*n+g*o+x*s,y*r+g*a+x*c,y*i+g*u+x*h]}},function(t,e){t.exports="precision mediump float;\nvarying vec2 vTextcoord;\nuniform sampler2D uImage;\n\nvoid main () {\n  gl_FragColor = texture2D(uImage, vTextcoord);\n}\n"},function(t,e){t.exports="precision mediump float;\nattribute vec2 aPosition;\nattribute vec2 aTextcoord;\nuniform mat3 uMatrix;\nvarying vec2 vTextcoord;\n\nvoid main () {\n  vTextcoord = aTextcoord;\n  vec2 position = (uMatrix * vec3(aPosition, 1.0)).xy;\n  vec2 clipspacePosition = (position * 2.0 - 1.0) * vec2(1, -1);\n  gl_Position = vec4(clipspacePosition, 0, 1);\n}"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=function(){function t(t,e){this.min=t,this.max=e}return t.prototype.intersectsBox=function(t){return!(this.max[0]<t.min[0]||this.min[0]>t.max[0]||this.max[1]<t.min[1]||this.min[1]>t.max[1])},t.prototype.intersectsPoint=function(t){return!(this.max[0]<t[0]||this.min[0]>t[0]||this.max[1]<t[1]||this.min[1]>t[1])},t}();e.default=i;var o=new(function(){function t(t){this.boundary=t,this.points=[],this.northWest=null,this.northEast=null,this.southWest=null,this.southEast=null}return t.prototype.insert=function(e){return!!this.boundary.intersectsPoint(e)&&(this.points.length<t.QT_NODE_CAPACITY&&null==this.northWest?(this.points.push(e),!0):(null==this.northWest&&this.subdivide(),!!this.northWest.insert(e)||(!!this.northEast.insert(e)||(!!this.southWest.insert(e)||!!this.southEast.insert(e)))))},t.prototype.subdivide=function(){var e=r.scalarMultiply(r.sub(this.boundary.max,this.boundary.min),.5);this.northWest=new t(new i(this.boundary.min,r.sum(this.boundary.min,e))),this.northEast=new t(new i(r.v2(this.boundary.min.x+e.x,this.boundary.min.y),r.v2(this.boundary.max.x,this.boundary.max.y-e.y))),this.southEast=new t(new i(r.sum(this.boundary.min,e),this.boundary.max)),this.southWest=new t(new i(r.v2(this.boundary.min.x,this.boundary.min.y+e.y),r.v2(this.boundary.max.x-e.x,this.boundary.max.y)));for(var n=0,o=this.points;n<o.length;n++){var a=o[n];this.northWest.insert(a)||(this.northEast.insert(a)||this.southWest.insert(a)||this.southEast.insert(a))}this.points=[]},t.prototype.queryRange=function(t){var e=[];if(!this.boundary.intersectsBox(t))return e;for(var n=0;n<this.points.length;n++)t.intersectsPoint(this.points[n])&&e.push(this.points[n]);return null===this.northWest?e:e=e.concat(this.northWest.queryRange(t),this.northEast.queryRange(t),this.southWest.queryRange(t),this.southEast.queryRange(t))},t.QT_NODE_CAPACITY=4,t}())(new i(r.v2(0,0),r.v2(50,50)));o.insert(r.v2(1,1)),o.insert(r.v2(30,30)),o.insert(r.v2(4,2)),o.insert(r.v2(30,0)),o.insert(r.v2(0,30)),console.log(o),console.log(o.queryRange(new i(r.v2(0,0),r.v2(25,25))))}]);