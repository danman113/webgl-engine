!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=31)}({0:function(t,e,n){"use strict";var r,o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.Fragment="FRAGMENT",t.Vertex="VERTEX"}(r=e.ShaderTypes||(e.ShaderTypes={}));var i=function(t,e,n){this.location=t,this.type=e,this.size=n},a=function(){function t(e,n,a,u){var s=this;for(var c in this.gl=e,this.vertexSource=n,this.fragmentSource=a,this.attributes=u,this.uniformLocations={},this.bindAttributes=function(){for(var t in s.attributes){var e=s.attributes[t];s.gl.enableVertexAttribArray(e.location),s.gl.bindBuffer(s.gl.ARRAY_BUFFER,e.buffer),s.gl.vertexAttribPointer(e.location,e.vertexAttributeMetadata.dimension,e.vertexAttributeMetadata.type,e.vertexAttributeMetadata.normalize,e.vertexAttributeMetadata.stride,e.vertexAttributeMetadata.offset)}},this.setUniform=function(e){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(!s.uniformLocations[e])throw new Error("Uniform '"+e+"' not referenced in source program");var a=s.uniformLocations[e],u=a.location,c=a.type;(n=s.gl)[t.typeToLocationMap[c]].apply(n,o([u],r))},this.useProgram=function(){return s.gl.useProgram(s.program)},this.drawUsingAttribute=function(t,e,n){void 0===e&&(e=s.gl.TRIANGLES),void 0===n&&(n=0);var r=s.attributes[t];s.bindAttributes(),s.gl.drawArrays(e,n,r.data.length/r.vertexAttributeMetadata.dimension)},this.compileShader=function(t,e){var n=s.gl,o=n.createShader(e===r.Fragment?n.FRAGMENT_SHADER:n.VERTEX_SHADER);if(n.shaderSource(o,t),n.compileShader(o),!n.getShaderParameter(o,n.COMPILE_STATUS)){var i=new Error(n.getShaderInfoLog(o));throw n.deleteShader(o),i}return o},this.initShaderProgram=function(t,e){var n=s.gl,r=n.createProgram();if(n.attachShader(r,t),n.attachShader(r,e),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS)){var o=new Error(n.getProgramInfoLog(r));throw n.deleteProgram(r),o}return r},t.typeToLocationMap||t.setTypeToLocationMap(e),this.vertexShader=this.compileShader(n,r.Vertex),this.fragmentShader=this.compileShader(a,r.Fragment),this.program=this.initShaderProgram(this.vertexShader,this.fragmentShader),u){var f=this.gl.getAttribLocation(this.program,c);u[c].location=f}for(var l=e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS),h=0;h<l;h++){var d=e.getActiveUniform(this.program,h),v=d.name,y=d.type,p=d.size,m=p>1,g=this.gl.getUniformLocation(this.program,v);this.uniformLocations[v]=new i(g,y*(+m+1),p)}}return t.setTypeToLocationMap=function(e){var n;t.typeToLocationMap=((n={})[e.FLOAT]="uniform1f",n[e.INT]="uniform1i",n[e.INT_VEC2]="uniform2i",n[2*e.INT_VEC2]="uniform2iv",n[e.INT_VEC3]="uniform3i",n[2*e.INT_VEC3]="uniform3iv",n[e.INT_VEC4]="uniform4i",n[2*e.INT_VEC4]="uniform4iv",n[2*e.FLOAT]="uniform1fv",n[e.FLOAT_VEC2]="uniform2f",n[2*e.FLOAT_VEC2]="uniform2fv",n[e.FLOAT_VEC3]="uniform3f",n[2*e.FLOAT_VEC3]="uniform3fv",n[e.FLOAT_VEC4]="uniform4f",n[2*e.FLOAT_VEC4]="uniform4fv",n[e.FLOAT_MAT2]="uniformMatrix2fv",n[e.FLOAT_MAT3]="uniformMatrix3fv",n[e.FLOAT_MAT4]="uniformMatrix4fv",n[e.SAMPLER_2D]="uniform1i",n)},t}();e.default=a},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e,n,r){var o=n.dimension,i=n.type,a=void 0===i?t.FLOAT:i,u=n.normalize,s=void 0!==u&&u,c=n.stride,f=void 0===c?0:c,l=n.offset,h=void 0===l?0:l;void 0===r&&(r=t.STATIC_DRAW),this.data=e,this.location=null;var d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,e,r),this.buffer=d,this.vertexAttributeMetadata={dimension:o,type:a,normalize:s,stride:f,offset:h}};e.default=r},11:function(t,e){function n(t){if(t&&"object"==typeof t){var e=t.which||t.keyCode||t.charCode;e&&(t=e)}if("number"==typeof t)return a[t];var n,i=String(t);return(n=r[i.toLowerCase()])?n:(n=o[i.toLowerCase()])||(1===i.length?i.charCodeAt(0):void 0)}n.isEventKey=function(t,e){if(t&&"object"==typeof t){var n=t.which||t.keyCode||t.charCode;if(null==n)return!1;if("string"==typeof e){var i;if(i=r[e.toLowerCase()])return i===n;if(i=o[e.toLowerCase()])return i===n}else if("number"==typeof e)return e===n;return!1}};var r=(e=t.exports=n).code=e.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},o=e.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};
/*!
 * Programatically add the following
 */
for(i=97;i<123;i++)r[String.fromCharCode(i)]=i-32;for(var i=48;i<58;i++)r[i-48]=i;for(i=1;i<13;i++)r["f"+i]=i+111;for(i=0;i<10;i++)r["numpad "+i]=i+96;var a=e.names=e.title={};for(i in r)a[r[i]]=i;for(var u in o)r[u]=o[u]},2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={get:function(){return this[0]},set:function(t){return this[0]=t,t}},o={get:function(){return this[1]},set:function(t){return this[1]=t,t}};Array.prototype.x||(Object.defineProperty(Array.prototype,"x",r),Object.defineProperty(Array.prototype,"y",o)),e.v2=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),[t,e]},e.ZERO=e.v2(),e.distance=function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},e.distanceSquared=function(t,e){return(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)},e.magnitude=function(t){return e.distance(t,e.ZERO)},e.ccw=function(t,e,n){return(e.x-t.x)*(n.y-t.y)-(n.x-t.x)*(e.y-t.y)},e.angle2=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},e.angle3=function(t,e,n){return Math.atan2(t.y-e.y,t.x-e.x)-Math.atan2(n.y-e.y,n.x-e.x)},e.piNum=Math.PI/180,e.numPi=180/Math.PI,e.degToRad=function(t){return t*e.piNum},e.radToDeg=function(t){return t*e.numPi},e.dot=function(t,e){return t.x*e.x+t.y*e.y},e.sum=function(t,n){return e.v2(t.x+n.x,t.y+n.y)},e.sub=function(t,n){return e.v2(t.x-n.x,t.y-n.y)},e.mult=function(t,n){return e.v2(t.x*n.x,t.y*n.y)},e.divide=function(t,n){return e.v2(t.x/n.x,t.y/n.y)},e.unit=function(t){var n=e.distance(e.ZERO,t);return e.v2(t.x/n,t.y/n)},e.normal=function(t,n){var r=n.x-t.x,o=n.y-t.y;return e.v2(-o,r)},e.orthogonal=function(t){return e.v2(-t.y,t.x)},e.scalarMultiply=function(t,n){return e.v2(t.x*n,t.y*n)},e.scalarSum=function(t,n){return e.v2(t.x+n,t.y+n)}},3:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=function(t,e){var n=this;this.element=t,this.settings=e,this.mouse=a.v2(),this.mouseButtons=Array(),this.keys=new Set,this.touches=[],this.updateTouches=function(t){t.preventDefault(),n.touches=i(t.touches).map((function(t){return a.v2(t.pageX,t.pageY)}))},this.render=function(){n.draw(n.gl,n),window.requestAnimationFrame(n.render)},this.start=function(){return r(n,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.init(this.gl,this)];case 1:return t.sent(),this.RAF=requestAnimationFrame(this.render),[2]}}))}))},this.draw=function(t,e){},this.init=function(t,e){return r(n,void 0,void 0,(function(){return o(this,(function(t){return[2]}))}))},this.onResize=function(t,e){},this.onClick=function(t,e){},this.onMouseDown=function(t,e){},this.onMouseUp=function(t,e){},this.onKeyDown=function(t,e,n){},this.onKeyUp=function(t,e,n){},this.setCanvasDimensions=function(t,e){var r=n.element;r.width=t,r.height=e,r.style.width=String(t),r.style.height=String(e)},this.setCanvasSize=function(t){t.fullscreen&&(t.width=window.innerWidth,t.height=window.innerHeight),n.setCanvasDimensions(t.width,t.height)},this.setCanvasSize(e);var u=this.gl=this.element.getContext("webgl");if(u||(u=this.gl=this.element.getContext("experimental-webgl")),!u)throw new Error("Could not find webgl context");window.addEventListener("resize",(function(){n.setCanvasSize(e),u.viewport(0,0,e.width,e.height),n.onResize(u,n)})),t.addEventListener("mousemove",(function(t){t.offsetX&&(n.mouse.x=t.offsetX,n.mouse.y=t.offsetY)})),t.addEventListener("mousedown",(function(t){n.mouseButtons[t.button]=!0,n.onMouseDown(u,n)})),t.addEventListener("mouseup",(function(t){n.mouseButtons[t.button]=!1,n.onMouseUp(u,n)})),t.addEventListener("mouseleave",(function(t){n.mouseButtons=Array(),n.onMouseUp(u,n)})),t.addEventListener("click",(function(t){n.onClick(u,n)})),t.addEventListener("touchstart",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}n.onMouseDown(u,n)})),t.addEventListener("touchend",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}n.onMouseUp(u,n),n.onClick(u,n)})),t.addEventListener("touchmove",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}})),t.addEventListener("keydown",(function(t){t.preventDefault();var e=t.keyCode;n.keys.add(e),n.onKeyDown(n.gl,n,e)})),t.addEventListener("keyup",(function(t){t.preventDefault();var e=t.keyCode;n.keys.delete(e),n.onKeyUp(n.gl,n,e)})),t.addEventListener("contextmenu",(function(t){return t.preventDefault()})),t.addEventListener("dragenter",(function(t){return t.preventDefault()}))};e.default=u},31:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),a=n(32),u=n(33),s=n(3),c=n(0),f=n(1),l=n(34),h=n(35);window.onload=function(){var t,e=new s.default(document.getElementById("webgl"),{fullscreen:!0});window.engine=e,e.init=function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(n){return t=new c.default(e,h,l,{aPosition:new f.default(e,new Float32Array([0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0]),{dimension:3}),aColor:new f.default(e,new Uint8Array([200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220]),{dimension:3,type:e.UNSIGNED_BYTE,normalize:!0})}),window.material=t,[2]}))}))};var n=a.v3(Math.random(),Math.random(),Math.random()),d=a.v3(1,1,1),v=a.v3(.1*Math.PI,0,5*Math.PI/3),y=d,p=e.settings.width,m=e.settings.height,g=a.v3(0,p,m),b=a.v3(0,400,-400);e.draw=function(e,r){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.enable(e.CULL_FACE),e.enable(e.DEPTH_TEST),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);var o=.01,s=a.v3(r.mouse.x,r.mouse.y,0);r.keys.has(i("shift"))&&(o=2),r.keys.has(i("ctrl"))&&(o=.025),r.keys.has(i("-"))&&(y=g),r.keys.has(i("="))&&(y=b),r.keys.has(i("4"))&&(y=n),r.keys.has(i("5"))&&(y=d),r.keys.has(i("6"))&&(y=v),r.keys.has(i("7"))&&(y.x+=o),r.keys.has(i("1"))&&(y.x-=o),r.keys.has(i("8"))&&(y.y+=o),r.keys.has(i("2"))&&(y.y-=o),r.keys.has(i("9"))&&(y.z+=o),r.keys.has(i("3"))&&(y.z-=o);var c=u.orthographic(g.x,g.y,g.z,b.x,b.y,b.z);c=u.multiplication(c,u.translation(s)),c=u.multiplication(c,u.rotationX(v.x)),c=u.multiplication(c,u.rotationY(v.y)),c=u.multiplication(c,u.rotationZ(v.z)),c=u.multiplication(c,u.scale(d)),t.useProgram(),t.setUniform("uMatrix",!1,c),t.drawUsingAttribute("aPosition")},e.start()}},32:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={get:function(){return this[0]},set:function(t){return this[0]=t,t}},o={get:function(){return this[1]},set:function(t){return this[1]=t,t}},i={get:function(){return this[2]},set:function(t){return this[2]=t,t}};e.v3=function(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0);var a=[t,e,n];return Object.defineProperty(a,"x",r),Object.defineProperty(a,"y",o),Object.defineProperty(a,"z",i),a}},33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.identity=function(){var t=Array(16).fill(0);return t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},e.translation=function(t){var n=e.identity();return n[12]=t.x,n[13]=t.y,n[14]=t.z,n},e.scale=function(t){var n=e.identity();return n[0]=t.x,n[5]=t.y,n[10]=t.z,n},e.rotationX=function(t){var n=e.identity(),r=Math.cos(t),o=Math.sin(t);return n[5]=r,n[6]=o,n[9]=-o,n[10]=r,n},e.rotationY=function(t){var n=e.identity(),r=Math.cos(t),o=Math.sin(t);return n[0]=r,n[2]=-o,n[8]=o,n[10]=r,n},e.rotationZ=function(t){var n=e.identity(),r=Math.cos(t),o=Math.sin(t);return n[0]=r,n[1]=o,n[4]=-o,n[5]=r,n},e.orthographic=function(t,n,r,o,i,a){var u=e.identity();return u[0]=2/(n-t),u[5]=2/(o-r),u[10]=2/(i-a),u[12]=(t+n)/(t-n),u[13]=(r+o)/(r-o),u[14]=(i+a)/(i-a),u},e.multiplication=function(t,n){var r=n[0],o=n[1],i=n[2],a=n[3],u=n[4],s=n[5],c=n[6],f=n[7],l=n[8],h=n[9],d=n[10],v=n[11],y=n[12],p=n[13],m=n[14],g=n[15],b=t[0],x=t[1],w=t[2],A=t[3],_=t[4],T=t[5],M=t[6],E=t[7],S=t[8],C=t[9],L=t[10],P=t[11],k=t[12],O=t[13],F=t[14],R=t[15],U=e.identity();return U[0]=r*b+o*_+i*S+a*k,U[1]=r*x+o*T+i*C+a*O,U[2]=r*w+o*M+i*L+a*F,U[3]=r*A+o*E+i*P+a*R,U[4]=u*b+s*_+c*S+f*k,U[5]=u*x+s*T+c*C+f*O,U[6]=u*w+s*M+c*L+f*F,U[7]=u*A+s*E+c*P+f*R,U[8]=l*b+h*_+d*S+v*k,U[9]=l*x+h*T+d*C+v*O,U[10]=l*w+h*M+d*L+v*F,U[11]=l*A+h*E+d*P+v*R,U[12]=y*b+p*_+m*S+g*k,U[13]=y*x+p*T+m*C+g*O,U[14]=y*w+p*M+m*L+g*F,U[15]=y*A+p*E+m*P+g*R,U}},34:function(t,e){t.exports="precision mediump float;\n// uniform vec3 uColor;\n\nvarying vec4 vColor;\n\nvoid main () {\n  gl_FragColor = vColor;\n}\n"},35:function(t,e){t.exports="attribute vec4 aPosition;\nattribute vec4 aColor;\n\nuniform mat4 uMatrix;\n\nvarying vec4 vColor;\n\nvoid main() {\n  vColor = aColor;\n  gl_Position = uMatrix * aPosition;\n}"}});