!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cross=e.normal=e.normalize=e.divide=e.mult=e.sub=e.sum=e.dot=e.distanceSquared=e.distance=e.ZERO=e.UP=e.v3=void 0;var r={get:function(){return this[0]},set:function(t){return this[0]=t,t}},o={get:function(){return this[1]},set:function(t){return this[1]=t,t}},i={get:function(){return this[2]},set:function(t){return this[2]=t,t}};e.v3=function(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0);var a=[t,e,n];return Object.defineProperty(a,"x",r),Object.defineProperty(a,"y",o),Object.defineProperty(a,"z",i),a},e.UP=e.v3(0,1),e.ZERO=e.v3(),e.distance=function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z))},e.distanceSquared=function(t,e){return(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z)},e.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z+e.z},e.sum=function(t,n){return e.v3(t.x+n.x,t.y+n.y,t.z+n.z)},e.sub=function(t,n){return e.v3(t.x-n.x,t.y-n.y,t.z-n.z)},e.mult=function(t,n){return e.v3(t.x*n.x,t.y*n.y,t.z*n.z)},e.divide=function(t,n){return e.v3(t.x/n.x,t.y/n.y,t.z/n.z)},e.normalize=function(t){var n=e.distance(e.ZERO,t);return e.v3(t.x/n,t.y/n,t.z/n)},e.normal=function(t,n){return e.v3(t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0])},e.cross=e.normal},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.scalarSum=e.scalarMultiply=e.orthogonal=e.cross=e.normal=e.normalize=e.divide=e.mult=e.sub=e.sum=e.dot=e.radToDeg=e.degToRad=e.numPi=e.piNum=e.angle3=e.angle2=e.ccw=e.magnitude=e.distanceSquared=e.distance=e.ZERO=e.v2=void 0;var r={get:function(){return this[0]},set:function(t){return this[0]=t,t}},o={get:function(){return this[1]},set:function(t){return this[1]=t,t}};Array.prototype.x||(Object.defineProperty(Array.prototype,"x",r),Object.defineProperty(Array.prototype,"y",o),Object.defineProperty(Array.prototype,"add",{value:function(t){return this[0]+=t[0],this[1]+=t[1],this}}),Object.defineProperty(Array.prototype,"sub",{value:function(t){return this[0]-=t[0],this[1]-=t[1],this}}),Object.defineProperty(Array.prototype,"magnitude",{value:function(){return e.magnitude(this)}}),Object.defineProperty(Array.prototype,"normalize",{value:function(t){var n=e.distance(e.ZERO,t);return this[0]/=n,this[1]/=n,this}})),e.v2=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),[t,e]},e.ZERO=e.v2(),e.distance=function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},e.distanceSquared=function(t,e){return(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)},e.magnitude=function(t){return e.distance(t,e.ZERO)},e.ccw=function(t,e,n){return(e.x-t.x)*(n.y-t.y)-(n.x-t.x)*(e.y-t.y)},e.angle2=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},e.angle3=function(t,e,n){return Math.atan2(t.y-e.y,t.x-e.x)-Math.atan2(n.y-e.y,n.x-e.x)},e.piNum=Math.PI/180,e.numPi=180/Math.PI,e.degToRad=function(t){return t*e.piNum},e.radToDeg=function(t){return t*e.numPi},e.dot=function(t,e){return t.x*e.x+t.y*e.y},e.sum=function(t,n){return e.v2(t.x+n.x,t.y+n.y)},e.sub=function(t,n){return e.v2(t.x-n.x,t.y-n.y)},e.mult=function(t,n){return e.v2(t.x*n.x,t.y*n.y)},e.divide=function(t,n){return e.v2(t.x/n.x,t.y/n.y)},e.normalize=function(t){var n=e.distance(e.ZERO,t);return e.v2(t.x/n,t.y/n)},e.normal=function(t,n){var r=n.x-t.x,o=n.y-t.y;return e.v2(-o,r)},e.cross=e.normal,e.orthogonal=function(t){return e.v2(-t.y,t.x)},e.scalarMultiply=function(t,n){return e.v2(t.x*n,t.y*n)},e.scalarSum=function(t,n){return e.v2(t.x+n,t.y+n)}},function(t,e,n){"use strict";var r,o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.ShaderTypes=void 0,function(t){t.Fragment="FRAGMENT",t.Vertex="VERTEX"}(r=e.ShaderTypes||(e.ShaderTypes={}));var i=function(t,e,n){this.location=t,this.type=e,this.size=n},a=function(){function t(e,n,a,u){var s=this;for(var c in this.gl=e,this.vertexSource=n,this.fragmentSource=a,this.attributes=u,this.uniformLocations={},this.bindAttributes=function(){for(var t in s.attributes){var e=s.attributes[t];s.gl.enableVertexAttribArray(e.location),s.gl.bindBuffer(s.gl.ARRAY_BUFFER,e.buffer),s.gl.vertexAttribPointer(e.location,e.vertexAttributeMetadata.dimension,e.vertexAttributeMetadata.type,e.vertexAttributeMetadata.normalize,e.vertexAttributeMetadata.stride,e.vertexAttributeMetadata.offset)}},this.setUniform=function(e){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(!s.uniformLocations[e])throw new Error("Uniform '"+e+"' not referenced in source program");var a=s.uniformLocations[e],u=a.location,c=a.type;(n=s.gl)[t.typeToLocationMap[c]].apply(n,o([u],r))},this.useProgram=function(){return s.gl.useProgram(s.program)},this.drawUsingAttribute=function(t,e,n){void 0===e&&(e=s.gl.TRIANGLES),void 0===n&&(n=0);var r=s.attributes[t];s.bindAttributes(),s.gl.drawArrays(e,n,r.data.length/r.vertexAttributeMetadata.dimension)},this.compileShader=function(t,e){var n=s.gl,o=n.createShader(e===r.Fragment?n.FRAGMENT_SHADER:n.VERTEX_SHADER);if(n.shaderSource(o,t),n.compileShader(o),!n.getShaderParameter(o,n.COMPILE_STATUS)){var i=new Error(n.getShaderInfoLog(o));throw n.deleteShader(o),i}return o},this.initShaderProgram=function(t,e){var n=s.gl,r=n.createProgram();if(n.attachShader(r,t),n.attachShader(r,e),n.linkProgram(r),!n.getProgramParameter(r,n.LINK_STATUS)){var o=new Error(n.getProgramInfoLog(r));throw n.deleteProgram(r),o}return r},t.typeToLocationMap||t.setTypeToLocationMap(e),this.vertexShader=this.compileShader(n,r.Vertex),this.fragmentShader=this.compileShader(a,r.Fragment),this.program=this.initShaderProgram(this.vertexShader,this.fragmentShader),u){var f=this.gl.getAttribLocation(this.program,c);u[c].location=f}for(var l=e.getProgramParameter(this.program,e.ACTIVE_UNIFORMS),d=0;d<l;d++){var h=e.getActiveUniform(this.program,d),v=h.name,y=h.type,p=h.size,m=p>1,g=this.gl.getUniformLocation(this.program,v);this.uniformLocations[v]=new i(g,y*(+m+1),p)}}return t.setTypeToLocationMap=function(e){var n;t.typeToLocationMap=((n={})[e.FLOAT]="uniform1f",n[e.INT]="uniform1i",n[e.INT_VEC2]="uniform2i",n[2*e.INT_VEC2]="uniform2iv",n[e.INT_VEC3]="uniform3i",n[2*e.INT_VEC3]="uniform3iv",n[e.INT_VEC4]="uniform4i",n[2*e.INT_VEC4]="uniform4iv",n[2*e.FLOAT]="uniform1fv",n[e.FLOAT_VEC2]="uniform2f",n[2*e.FLOAT_VEC2]="uniform2fv",n[e.FLOAT_VEC3]="uniform3f",n[2*e.FLOAT_VEC3]="uniform3fv",n[e.FLOAT_VEC4]="uniform4f",n[2*e.FLOAT_VEC4]="uniform4fv",n[e.FLOAT_MAT2]="uniformMatrix2fv",n[e.FLOAT_MAT3]="uniformMatrix3fv",n[e.FLOAT_MAT4]="uniformMatrix4fv",n[e.SAMPLER_2D]="uniform1i",n)},t}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e,n,r){var o=n.dimension,i=n.type,a=void 0===i?t.FLOAT:i,u=n.normalize,s=void 0!==u&&u,c=n.stride,f=void 0===c?0:c,l=n.offset,d=void 0===l?0:l;void 0===r&&(r=t.STATIC_DRAW),this.data=e,this.location=null;var h=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,h),t.bufferData(t.ARRAY_BUFFER,e,r),this.buffer=h,this.vertexAttributeMetadata={dimension:o,type:a,normalize:s,stride:f,offset:d}};e.default=r},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),u=function(t,e){var n=this;this.element=t,this.settings=e,this.mouse=a.v2(),this.mouseMovement=a.v2(),this.mouseButtons=Array(),this.mouseMoved=!1,this.keys=new Set,this.touches=[],this.updateTouches=function(t){t.preventDefault(),n.touches=i(t.touches).map((function(t){return a.v2(t.pageX,t.pageY)}))},this.then=0,this.render=function(t){var e=(t-n.then)/(1e3/n.settings.fps);n.then=t,n.draw(n.gl,n,e),n.mouseMoved&&(n.mouseMovement.x=0,n.mouseMovement.y=0,n.mouseMoved=!1),window.requestAnimationFrame(n.render)},this.start=function(){return r(n,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.init(this.gl,this)];case 1:return t.sent(),this.RAF=requestAnimationFrame(this.render),[2]}}))}))},this.draw=function(t,e,n){},this.init=function(t,e){return r(n,void 0,void 0,(function(){return o(this,(function(t){return[2]}))}))},this.onResize=function(t,e){},this.onClick=function(t,e){},this.onMouseDown=function(t,e){},this.onMouseUp=function(t,e){},this.onKeyDown=function(t,e,n){},this.onKeyUp=function(t,e,n){},this.setCanvasDimensions=function(t,e){var r=n.element;r.width=t,r.height=e,r.style.width=String(t),r.style.height=String(e)},this.setCanvasSize=function(t){t.fullscreen&&(t.width=window.innerWidth,t.height=window.innerHeight),n.setCanvasDimensions(t.width,t.height)},e.fps=e.fps||60,this.setCanvasSize(e);var u=this.gl=this.element.getContext("webgl");if(u||(u=this.gl=this.element.getContext("experimental-webgl")),!u)throw new Error("Could not find webgl context");window.addEventListener("resize",(function(){n.setCanvasSize(e),u.viewport(0,0,e.width,e.height),n.onResize(u,n)})),t.addEventListener("mousemove",(function(t){n.mouseMoved=!0,(t.offsetX||t.offsetY)&&(n.mouse.x=t.offsetX,n.mouse.y=t.offsetY),n.mouseMovement.x=t.movementX||0,n.mouseMovement.y=t.movementY||0})),t.addEventListener("mousedown",(function(t){n.mouseButtons[t.button]=!0,n.onMouseDown(u,n)})),t.addEventListener("mouseup",(function(t){n.mouseButtons[t.button]=!1,n.onMouseUp(u,n)})),t.addEventListener("mouseleave",(function(t){n.mouseButtons=Array(),n.onMouseUp(u,n)})),t.addEventListener("click",(function(t){n.onClick(u,n)})),t.addEventListener("touchstart",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}n.onMouseDown(u,n)})),t.addEventListener("touchend",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}n.onMouseUp(u,n),n.onClick(u,n)})),t.addEventListener("touchmove",(function(t){n.updateTouches(t);for(var e=0;e<t.changedTouches.length;e++){var r=t.changedTouches[e];0===e&&(n.mouse.x=r.pageX,n.mouse.y=r.pageY)}})),t.addEventListener("keydown",(function(t){t.preventDefault();var e=t.keyCode;n.keys.add(e),n.onKeyDown(n.gl,n,e)})),t.addEventListener("keyup",(function(t){t.preventDefault();var e=t.keyCode;n.keys.delete(e),n.onKeyUp(n.gl,n,e)})),t.addEventListener("contextmenu",(function(t){return t.preventDefault()})),t.addEventListener("dragenter",(function(t){return t.preventDefault()}))};e.default=u},,function(t,e){function n(t){if(t&&"object"==typeof t){var e=t.which||t.keyCode||t.charCode;e&&(t=e)}if("number"==typeof t)return a[t];var n,i=String(t);return(n=r[i.toLowerCase()])?n:(n=o[i.toLowerCase()])||(1===i.length?i.charCodeAt(0):void 0)}n.isEventKey=function(t,e){if(t&&"object"==typeof t){var n=t.which||t.keyCode||t.charCode;if(null==n)return!1;if("string"==typeof e){var i;if(i=r[e.toLowerCase()])return i===n;if(i=o[e.toLowerCase()])return i===n}else if("number"==typeof e)return e===n;return!1}};var r=(e=t.exports=n).code=e.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},o=e.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};
/*!
 * Programatically add the following
 */
for(i=97;i<123;i++)r[String.fromCharCode(i)]=i-32;for(var i=48;i<58;i++)r[i-48]=i;for(i=1;i<13;i++)r["f"+i]=i+111;for(i=0;i<10;i++)r["numpad "+i]=i+96;var a=e.names=e.title={};for(i in r)a[r[i]]=i;for(var u in o)r[u]=o[u]},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.lookAt=e.multiplication=e.inverse=e.perspective=e.orthographic=e.rotationZ=e.rotationY=e.rotationX=e.scale=e.translation=e.identity=void 0;var r=n(1),o=n(0);e.identity=function(){var t=Array(16).fill(0);return t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},e.translation=function(t){var n=e.identity();return n[12]=t.x,n[13]=t.y,n[14]=t.z,n},e.scale=function(t){var n=e.identity();return n[0]=t.x,n[5]=t.y,n[10]=t.z,n},e.rotationX=function(t){var n=e.identity(),r=Math.cos(t),o=Math.sin(t);return n[5]=r,n[6]=o,n[9]=-o,n[10]=r,n},e.rotationY=function(t){var n=e.identity(),r=Math.cos(t),o=Math.sin(t);return n[0]=r,n[2]=-o,n[8]=o,n[10]=r,n},e.rotationZ=function(t){var n=e.identity(),r=Math.cos(t),o=Math.sin(t);return n[0]=r,n[1]=o,n[4]=-o,n[5]=r,n},Array.prototype.translate||(Object.defineProperty(Array.prototype,"position",{get:function(){var t=o.v3();return t[0]=this[12],t[1]=this[13],t[2]=this[14],t}}),Object.defineProperty(Array.prototype,"translate",{value:function(t){return this[12]+=t[0],this[13]+=t[1],this[14]+=t[2],this}}),Object.defineProperty(Array.prototype,"scale",{value:function(t){return this[0]=t[0],this[5]=t[1],this[10]=t[2],this}}),Object.defineProperty(Array.prototype,"scaleVector",{value:function(){var t=o.v3();return t[0]=this[0],t[1]=this[5],t[2]=this[10],t}}),Object.defineProperty(Array.prototype,"multiply",{value:function(t){var e=this,n=t[0],r=t[1],o=t[2],i=t[3],a=t[4],u=t[5],s=t[6],c=t[7],f=t[8],l=t[9],d=t[10],h=t[11],v=t[12],y=t[13],p=t[14],m=t[15],g=e[0],b=e[1],x=e[2],w=e[3],M=e[4],A=e[5],P=e[6],T=e[7],_=e[8],E=e[9],S=e[10],C=e[11],O=e[12],L=e[13],k=e[14],z=e[15],R=this;return R[0]=n*g+r*M+o*_+i*O,R[1]=n*b+r*A+o*E+i*L,R[2]=n*x+r*P+o*S+i*k,R[3]=n*w+r*T+o*C+i*z,R[4]=a*g+u*M+s*_+c*O,R[5]=a*b+u*A+s*E+c*L,R[6]=a*x+u*P+s*S+c*k,R[7]=a*w+u*T+s*C+c*z,R[8]=f*g+l*M+d*_+h*O,R[9]=f*b+l*A+d*E+h*L,R[10]=f*x+l*P+d*S+h*k,R[11]=f*w+l*T+d*C+h*z,R[12]=v*g+y*M+p*_+m*O,R[13]=v*b+y*A+p*E+m*L,R[14]=v*x+y*P+p*S+m*k,R[15]=v*w+y*T+p*C+m*z,R}}),Object.defineProperty(Array.prototype,"invert",{value:function(){var t=this,e=t[0],n=t[1],r=t[2],o=t[3],i=t[4],a=t[5],u=t[6],s=t[7],c=t[8],f=t[9],l=t[10],d=t[11],h=t[12],v=t[13],y=t[14],p=t[15],m=l*p,g=y*d,b=u*p,x=y*s,w=u*d,M=l*s,A=r*p,P=y*o,T=r*d,_=l*o,E=r*s,S=u*o,C=c*v,O=h*f,L=i*v,k=h*a,z=i*f,R=c*a,F=e*v,j=h*n,I=e*f,U=c*n,D=e*a,N=i*n,V=m*a+x*f+w*v-(g*a+b*f+M*v),B=g*n+A*f+_*v-(m*n+P*f+T*v),Y=b*n+P*a+E*v-(x*n+A*a+S*v),X=M*n+T*a+S*f-(w*n+_*a+E*f),Z=1/(e*V+i*B+c*Y+h*X),q=this;return q[0]=Z*V,q[1]=Z*B,q[2]=Z*Y,q[3]=Z*X,q[4]=Z*(g*i+b*c+M*h-(m*i+x*c+w*h)),q[5]=Z*(m*e+P*c+T*h-(g*e+A*c+_*h)),q[6]=Z*(x*e+A*i+S*h-(b*e+P*i+E*h)),q[7]=Z*(w*e+_*i+E*c-(M*e+T*i+S*c)),q[8]=Z*(C*s+k*d+z*p-(O*s+L*d+R*p)),q[9]=Z*(O*o+F*d+U*p-(C*o+j*d+I*p)),q[10]=Z*(L*o+j*s+D*p-(k*o+F*s+N*p)),q[11]=Z*(R*o+I*s+N*d-(z*o+U*s+D*d)),q[12]=Z*(L*l+R*y+O*u-(z*y+C*u+k*l)),q[13]=Z*(I*y+C*r+j*l-(F*l+U*y+O*r)),q[14]=Z*(F*u+N*y+k*r-(D*y+L*r+j*u)),q[15]=Z*(D*l+z*r+U*u-(I*u+N*l+R*r)),q}})),e.orthographic=function(t,n,r,o,i,a){var u=e.identity();return u[0]=2/(n-t),u[5]=2/(o-r),u[10]=2/(i-a),u[12]=(t+n)/(t-n),u[13]=(r+o)/(r-o),u[14]=(i+a)/(i-a),u},e.perspective=function(t,n,o,i){var a=Math.tan(.5*Math.PI-.5*r.degToRad(t)),u=1/(o-i),s=e.identity();return s[0]=a/n,s[5]=a,s[10]=(o+i)*u,s[11]=-1,s[14]=o*i*u*2,s[15]=0,s},e.inverse=function(t){var n=t[0],r=t[1],o=t[2],i=t[3],a=t[4],u=t[5],s=t[6],c=t[7],f=t[8],l=t[9],d=t[10],h=t[11],v=t[12],y=t[13],p=t[14],m=t[15],g=d*m,b=p*h,x=s*m,w=p*c,M=s*h,A=d*c,P=o*m,T=p*i,_=o*h,E=d*i,S=o*c,C=s*i,O=f*y,L=v*l,k=a*y,z=v*u,R=a*l,F=f*u,j=n*y,I=v*r,U=n*l,D=f*r,N=n*u,V=a*r,B=g*u+w*l+M*y-(b*u+x*l+A*y),Y=b*r+P*l+E*y-(g*r+T*l+_*y),X=x*r+T*u+S*y-(w*r+P*u+C*y),Z=A*r+_*u+C*l-(M*r+E*u+S*l),q=1/(n*B+a*Y+f*X+v*Z),G=e.identity();return G[0]=q*B,G[1]=q*Y,G[2]=q*X,G[3]=q*Z,G[4]=q*(b*a+x*f+A*v-(g*a+w*f+M*v)),G[5]=q*(g*n+T*f+_*v-(b*n+P*f+E*v)),G[6]=q*(w*n+P*a+C*v-(x*n+T*a+S*v)),G[7]=q*(M*n+E*a+S*f-(A*n+_*a+C*f)),G[8]=q*(O*c+z*h+R*m-(L*c+k*h+F*m)),G[9]=q*(L*i+j*h+D*m-(O*i+I*h+U*m)),G[10]=q*(k*i+I*c+N*m-(z*i+j*c+V*m)),G[11]=q*(F*i+U*c+V*h-(R*i+D*c+N*h)),G[12]=q*(k*d+F*p+L*s-(R*p+O*s+z*d)),G[13]=q*(U*p+O*o+I*d-(j*d+D*p+L*o)),G[14]=q*(j*s+V*p+z*o-(N*p+k*o+I*s)),G[15]=q*(N*d+R*o+D*s-(U*s+V*d+F*o)),G},e.multiplication=function(t,n){var r=n[0],o=n[1],i=n[2],a=n[3],u=n[4],s=n[5],c=n[6],f=n[7],l=n[8],d=n[9],h=n[10],v=n[11],y=n[12],p=n[13],m=n[14],g=n[15],b=t[0],x=t[1],w=t[2],M=t[3],A=t[4],P=t[5],T=t[6],_=t[7],E=t[8],S=t[9],C=t[10],O=t[11],L=t[12],k=t[13],z=t[14],R=t[15],F=e.identity();return F[0]=r*b+o*A+i*E+a*L,F[1]=r*x+o*P+i*S+a*k,F[2]=r*w+o*T+i*C+a*z,F[3]=r*M+o*_+i*O+a*R,F[4]=u*b+s*A+c*E+f*L,F[5]=u*x+s*P+c*S+f*k,F[6]=u*w+s*T+c*C+f*z,F[7]=u*M+s*_+c*O+f*R,F[8]=l*b+d*A+h*E+v*L,F[9]=l*x+d*P+h*S+v*k,F[10]=l*w+d*T+h*C+v*z,F[11]=l*M+d*_+h*O+v*R,F[12]=y*b+p*A+m*E+g*L,F[13]=y*x+p*P+m*S+g*k,F[14]=y*w+p*T+m*C+g*z,F[15]=y*M+p*_+m*O+g*R,F},e.lookAt=function(t,n,r){var i=o.normalize(o.sub(t,n)),a=o.normalize(o.cross(r,i)),u=o.normalize(o.cross(i,a)),s=e.identity();return s[0]=a[0],s[1]=a[1],s[2]=a[2],s[4]=u[0],s[5]=u[1],s[6]=u[2],s[8]=i[0],s[9]=i[1],s[10]=i[2],s[12]=t[0],s[13]=t[1],s[14]=t[2],s}},,,,,,,function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(6),u=n(0),s=n(8),c=n(4),f=n(2),l=n(3),d=n(16),h=n(17);window.onload=function(){var t,e=new c.default(document.getElementById("webgl"),{fullscreen:!0});window.engine=e,e.init=function(e){return r(void 0,void 0,void 0,(function(){return o(this,(function(n){return t=new f.default(e,h,d,{aPosition:new l.default(e,new Float32Array([0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0]),{dimension:3}),aColor:new l.default(e,new Uint8Array([200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220]),{dimension:3,type:e.UNSIGNED_BYTE,normalize:!0})}),window.material=t,[2]}))}))};var n=s.perspective(60,e.settings.width/e.settings.height,1,2e3),v=s.translation(u.v3(0,-50,250)),y=0;e.onClick=function(t){t.canvas.requestPointerLock()},e.draw=function(e,r){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.enable(e.CULL_FACE),e.enable(e.DEPTH_TEST),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);var o=3;if(r.keys.has(a("shift"))&&(o=5),r.keys.has(a("ctrl"))&&(o=.5),(r.keys.has(a("right"))||r.keys.has(a("d")))&&v.multiply(s.translation(u.v3(o))),(r.keys.has(a("left"))||r.keys.has(a("a")))&&v.multiply(s.translation(u.v3(-o))),r.keys.has(a("up"))&&v.translate(u.v3(0,o)),r.keys.has(a("down"))&&v.translate(u.v3(0,-o)),r.keys.has(a("s"))&&v.multiply(s.translation(u.v3(0,0,o))),r.keys.has(a("w"))&&v.multiply(s.translation(u.v3(0,0,-o))),r.keys.has(a("q"))&&v.multiply(s.rotationZ(.01*Math.PI)),r.keys.has(a("e"))&&v.multiply(s.rotationZ(-.01*Math.PI)),r.keys.has(a("f"))){var c=y*(2*Math.PI)/5,f=200*Math.sin(c),l=200*Math.cos(c);v=s.lookAt(v.position,u.v3(l,0,f),i.UP)}Array(5).fill(0).forEach((function(t,e){r.keys.has(a(String(e)))&&(y=e)})),r.mouseMovement.y&&v.multiply(s.rotationX(-.01*r.mouseMovement.y)),r.mouseMovement.x&&v.multiply(s.rotationY(-.01*r.mouseMovement.x)),t.useProgram();for(var d=s.inverse(v),h=s.multiplication(n,d),p=0;p<5;p++){c=p*(2*Math.PI)/5,f=200*Math.sin(c),l=200*Math.cos(c);var m=u.v3(l,0,f),g=s.translation(u.v3()),b=0===p&&r.keys.has(a("y"));if(b){var x=y*(2*Math.PI)/5,w=200*Math.sin(x),M=200*Math.cos(x);g=s.lookAt(m,u.v3(M,0,w),i.UP)}(g=s.multiplication(h,g)).multiply(s.rotationX(Math.PI)),b||g.multiply(s.translation(m)),t.setUniform("uMatrix",!1,g),t.drawUsingAttribute("aPosition")}},e.start()}},function(t,e){t.exports="precision mediump float;\n// uniform vec3 uColor;\n\nvarying vec4 vColor;\n\nvoid main () {\n  gl_FragColor = vColor;\n}\n"},function(t,e){t.exports="attribute vec4 aPosition;\nattribute vec4 aColor;\n\nuniform mat4 uMatrix;\n\nvarying vec4 vColor;\n\nvoid main() {\n  vColor = aColor;\n  vec4 pos = uMatrix * aPosition;\n\n  gl_Position = pos;\n}"}]);