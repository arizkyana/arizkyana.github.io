(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(t,e,r){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var l=e[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function r(t,r,l){return r&&e(t.prototype,r),l&&e(t,l),t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={fatal:{level:0},error:{level:0},warn:{level:1},log:{level:2},info:{level:3},success:{level:3},debug:{level:4},trace:{level:5},silent:{level:1/0},ready:{level:3},start:{level:3}},n=!1,a=[],u=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var l in t(this,e),this._reporters=r.reporters||[],this._types=r.types||o,this._level=null!=r.level?r.level:3,this._defaults=r.defaults||{},this._async=void 0!==r.async?r.async:null,this._stdout=r.stdout,this._stderr=r.stdout,this._mockFn=r.mockFn,this._throttle=r.throttle||2e3,this._types)this[l]=this._wrapLogFn(Object.assign({type:l},this._types[l],this._defaults));this._mockFn&&this.mockTypes(),this._lastLogSerialized=null,this._lastLog=null,this._lastLogTime=null,this._lastLogCount=0}return r(e,[{key:"create",value:function(t){return new e(Object.assign({reporters:this._reporters,level:this._level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},t))}},{key:"withDefaults",value:function(t){return this.create({defaults:Object.assign({},this._defaults,t)})}},{key:"withTag",value:function(t){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+t:t})}},{key:"addReporter",value:function(t){return this._reporters.push(t),this}},{key:"removeReporter",value:function(t){if(t){var e=this._reporters.indexOf(t);if(e>=0)return this._reporters.splice(e,1)}else this._reporters.splice(0);return this}},{key:"setReporters",value:function(t){return this._reporters=Array.isArray(t)?t:[t],this}},{key:"wrapAll",value:function(){this.wrapConsole(),this.wrapStd()}},{key:"restoreAll",value:function(){this.restoreConsole(),this.restoreStd()}},{key:"wrapConsole",value:function(){for(var t in this._types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t]}},{key:"restoreConsole",value:function(){for(var t in this._types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}},{key:"wrapStd",value:function(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log")}},{key:"_wrapStream",value:function(t,e){var r=this;t&&(t.__write||(t.__write=t.write),t.write=function(t){r[e](String(t).trim())})}},{key:"restoreStd",value:function(){this._restoreStream(this.stdout),this._restoreStream(this.stderr)}},{key:"_restoreStream",value:function(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}},{key:"pauseLogs",value:function(){n=!0}},{key:"resumeLogs",value:function(){n=!1;var t=a.splice(0),e=!0,r=!1,l=void 0;try{for(var s,o=t[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var i=s.value;i[0]._logFn(i[1],i[2])}}catch(t){r=!0,l=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw l}}}},{key:"mockTypes",value:function(t){if(this._mockFn=t||this._mockFn,"function"==typeof this._mockFn)for(var e in this._types)this[e]=this._mockFn(e,this._types[e])||this[e]}},{key:"_wrapLogFn",value:function(t){return function(){if(!n)return this._logFn(t,arguments);a.push([this,t,arguments])}.bind(this)}},{key:"_logFn",value:function(t,e){if(t.level>this._level)return!!this._async&&Promise.resolve(!1);var r=Object.assign({date:new Date,args:[]},t);1===e.length&&function(t){return e=t,!("[object Object]"!==Object.prototype.toString.call(e)||!t.message&&!t.args||t.stack);var e}(e[0])?Object.assign(r,e[0]):r.args=Array.from(e),r.message&&(r.args.unshift(r.message),delete r.message),r.additional&&(Array.isArray(r.additional)||(r.additional=r.additional.split("\n")),r.args.push("\n"+r.additional.join("\n")),delete r.additional),r.type&&(r.type=r.type.toLowerCase()),r.tag&&(r.tag=r.tag.toLowerCase());var o=this._lastLogTime?r.date-this._lastLogTime:0;if(this._lastLogTime=r.date,o<this._throttle)try{var n=JSON.stringify([r.type,r.tag,r.args]),a=this._lastLogSerialized===n;if(this._lastLogSerialized=n,a)return void this._lastLogCount++}catch(t){}if(this._lastLogCount&&(this._log(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),s.forEach(function(e){l(t,e,r[e])})}return t}({},this._lastLog,{args:[].concat(s(this._lastLog.args),["(repeated ".concat(this._lastLogCount," times)")])})),this._lastLogCount=0),this._lastLog=r,this._async)return this._logAsync(r);this._log(r)}},{key:"_log",value:function(t){var e=!0,r=!1,l=void 0;try{for(var s,o=this._reporters[Symbol.iterator]();!(e=(s=o.next()).done);e=!0)s.value.log(t,{async:!1,stdout:this.stdout,stderr:this.stderr})}catch(t){r=!0,l=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw l}}}},{key:"_logAsync",value:function(t){var e=this;return Promise.all(this._reporters.map(function(r){return r.log(t,{async:!0,stdout:e.stdout,stderr:e.stderr})}))}},{key:"level",get:function(){return this._level},set:function(t){var e=0,r=0;for(var l in this._types){var s=this._types[l];s.level>r?r=s.level:s.level<e&&(e=s.level)}this._level=Math.min(r,Math.max(e,t))}},{key:"stdout",get:function(){return this._stdout||console._stdout}},{key:"stderr",get:function(){return this._stderr||console._stderr}}]),e}();u.prototype.add=u.prototype.addReporter,u.prototype.remove=u.prototype.removeReporter,u.prototype.clear=u.prototype.removeReporter,u.prototype.withScope=u.prototype.withTag,u.prototype.mock=u.prototype.mockTypes,u.prototype.pause=u.prototype.pauseLogs,u.prototype.resume=u.prototype.resumeLogs;var c,v=function(){function e(r){t(this,e),this.options=Object.assign({},r),this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}return r(e,[{key:"log",value:function(t){var e=t.level<1?console.__error||console.error:1===t.level&&console.warn?console.__warn||console.warn:console.__log||console.log,r="log"!==t.type?t.type:"",l=t.tag?t.tag:"",o=this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor,i="\n      background: ".concat(o,";\n      border-radius: 0.5em;\n      color: white;\n      font-weight: bold;\n      padding: 2px 0.5em;\n    ");e.apply(void 0,["%c"+[l,r].filter(Boolean).join(":"),i].concat(s(t.args)))}}]),e}();return"undefined"!=typeof window&&window.consola||((c=new u({reporters:[new v]})).Consola=u,c.BrowserReporter=v,c)}()},162:function(t,e,r){"use strict";r.r(e);var l=r(153),o=r.n(l),n={mounted:function(){o.a.info("edu")}},c=r(18),component=Object(c.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative pb6"},[r("nav",{staticClass:"bg-white flex items-stretch"},[r("div",{staticClass:"w-50-m w-50-l w-100 pv3 ph5"},[r("div",{staticClass:"f2-m f2-l f4"},[t._v("Arka Edu")])]),t._v(" "),r("div",{staticClass:"w-50-m w-50-l w-100 pv3 ph5 tr flex items-end"})]),t._v(" "),r("div",{},[r("div",{staticClass:"pv3 ph5"},[r("h1",{staticClass:"f1"},[t._v("Kelas Web dan Mobile Developer")]),t._v(" "),r("p",{staticClass:"f3 fw3"},[t._v("Cara tepat belajar pengembangan website dan aplikasi mobile")]),t._v(" "),r("p",{staticClass:"f3 fw3"},[t._v("Gabung sekarang juga untuk menjadi full-stack developer")]),t._v(" "),r("p",{staticClass:"f3 fw3"},[t._v("dengan teknologi paling populer")])]),t._v(" "),r("div",{staticClass:"pv3 ph5 w-50-ns w-100 cf"},[r("div",{staticClass:"fl w-50-ns w-100 pointer"},[r("div",{staticClass:"bg-dark-gray dim pa3 mr1 tc white"},[t._v("Coba dulu")])]),t._v(" "),r("div",{staticClass:"fl w-50-ns w-100 pointer"},[r("div",{staticClass:"bg-dark-blue dim pa3 mr1 tc b white"},[t._v("Gabung sekarang!")])])])]),t._v(" "),r("div",{staticClass:"pt5 pb6"},[r("div",{staticClass:"pv3 ph5 tc"},[r("div",{staticClass:"tc pv4"},[r("span",{staticClass:"f2 b"},[t._v("Mengapa harus gabung di kelas Arka Edu?")])])]),t._v(" "),r("div",{staticClass:"cf pv3 ph5"},[r("div",{staticClass:"fl w-third pointer dim"},[r("div",{staticClass:"pv3 ph5 tc mr1 bg-black-10"},[t._v("Akses kelas selamanya")])]),t._v(" "),r("div",{staticClass:"fl w-third pointer dim"},[r("div",{staticClass:"pv3 ph5 tc mr1 bg-black-10"},[t._v("Update materi")])]),t._v(" "),r("div",{staticClass:"fl w-third pointer dim"},[r("div",{staticClass:"pv3 ph5 tc mr1 bg-black-10"},[t._v("Konsultasi gratis")])])])]),t._v(" "),r("div",{staticClass:"pt4 pb6"},[r("div",{staticClass:"pv3 ph5 cf"},[r("div",{staticClass:"fl w-100"},[r("div",{staticClass:"tc pv4"},[r("span",{staticClass:"f2 b"},[t._v("Teknologi populer")])])]),t._v(" "),r("div",{staticClass:"fl w-100"},[r("div",{staticClass:"flex items-stretch"},[r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 mr1 pv3 ph3 tc pointer dim"},[t._v("Vue")])]),t._v(" "),r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 mr1 pv3 ph3 tc pointer dim"},[t._v("React Native")])]),t._v(" "),r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 pv3 ph3 tc pointer dim"},[t._v("NodeJS")])])]),t._v(" "),r("div",{staticClass:"flex items-stretch mt1"},[r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 mr1 pv3 ph3 tc pointer dim"},[t._v("Laravel")])]),t._v(" "),r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 mr1 pv3 ph3 tc pointer dim"},[t._v("MongoDB")])]),t._v(" "),r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 pv3 ph3 tc pointer dim"},[t._v("Segera...")])])])])])]),t._v(" "),r("div",{staticClass:"pt4 pb6"},[r("div",{staticClass:"pv3 ph5 cf"},[r("div",{staticClass:"fl w-100"},[r("div",{staticClass:"tc pv4"},[r("span",{staticClass:"f2 b"},[t._v("Tonton dulu kelas yang Anda sukai")])])]),t._v(" "),r("div",{staticClass:"fl w-100"},[r("div",{staticClass:"flex items-stretch"},[r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 mr1 pv3 ph3 tc pointer dim"},[t._v("Membuat shopping cart - Vue")])]),t._v(" "),r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 mr1 pv3 ph3 tc pointer dim"},[t._v("Login di aplikasi mobile - React native")])]),t._v(" "),r("div",{staticClass:"w-third"},[r("div",{staticClass:"bg-black-10 pv3 ph3 tc pointer dim"},[t._v("Authentikasi API - NodeJS")])])])])])]),t._v(" "),r("div",{staticClass:"pt4 pb6"},[r("div",{staticClass:"pv3 ph5 cf"},[r("div",{staticClass:"fl w-100"},[r("div",{staticClass:"tc pv4"},[r("span",{staticClass:"f2 b"},[t._v("Bayar sekali, masuk kelas kapan saja!")])])]),t._v(" "),r("div",{staticClass:"fl w-100"},[r("div",{staticClass:"flex items-stretch"},[r("div",{staticClass:"w-third center"},[r("div",{staticClass:"bg-black-10 mr1 pv3 ph3 pointer"},[r("div",{staticClass:"strike red b f4 tc"},[t._v("Rp. 500.000")]),t._v(" "),r("div",{staticClass:"b f1 tc bb b--black-10 pv2"},[t._v("Rp. 250.000")]),t._v(" "),r("div",{staticClass:"bb b--black-10 pv3"},[t._v("Membuat Aplikasi Web")]),t._v(" "),r("div",{staticClass:"bb b--black-10 pv3"},[t._v("Membuat Aplikasi Mobile")]),t._v(" "),r("div",{staticClass:"bb b--black-10 pv3"},[t._v("Membuat API + Security + Integrasi")]),t._v(" "),r("div",{staticClass:"bb b--black-10 pv3"},[t._v("\n                Konsultasi\n                "),r("span",{staticClass:"b"},[t._v("Gratis!")])]),t._v(" "),r("div",{staticClass:"bg-dark-blue ba b--dark-blue mt3 white pa3 tc b f3 dim"},[t._v("Gabung sekarang!")])])])])])])]),t._v(" "),r("div",{staticClass:"pt4 pb6"},[r("div",{staticClass:"pv3 ph5 cf"},[r("div",{staticClass:"bg-black-10 overflow-hidden"},[r("div",{staticClass:"fl w-50"},[r("div",{staticClass:"ph4 pv5"},[r("span",{staticClass:"f3 b"},[t._v("Ada pertanyaan?")])])]),t._v(" "),r("div",{staticClass:"fl w-50"},[r("div",{staticClass:"ph4 pv5 tr"},[r("span",{staticClass:"f3 b dim bg-dark-blue ba b--dark-blue white pa3 tc pointer"},[t._v("Whatsapp")])])])])])]),t._v(" "),r("div",{staticClass:"absolute bottom-0 left-0 right-0 bg-moon-gray"},[r("div",{staticClass:"pv5 ph5 cf"},[r("div",{staticClass:"fl w-50"},[r("p",[t._v("Copyright©2019")])])])])])}],!1,null,null,null);e.default=component.exports}}]);