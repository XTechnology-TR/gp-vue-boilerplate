!function(t){function e(data){for(var e,o,c=data[0],d=data[1],f=data[2],i=0,v=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(t[e]=d[e]);for(m&&m(data);v.length;)v.shift()();return l.push.apply(l,f||[]),n()}function n(){for(var t,i=0;i<l.length;i++){for(var e=l[i],n=!0,o=1;o<e.length;o++){var d=e[o];0!==r[d]&&(n=!1)}n&&(l.splice(i--,1),t=c(c.s=e[0]))}return t}var o={},r={1:0},l=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var l,script=document.createElement("script");script.charset="utf-8",script.timeout=120,c.nc&&script.setAttribute("nonce",c.nc),script.src=function(t){return c.p+""+({3:"pages/index",4:"pages/p/_page",5:"pages/p/_sub/_child",7:"vendors/content/plugin.js"}[t]||t)+"."+{0:"d27d98c4cba0e28ab4a4",3:"1380bd764ac308d7dee4",4:"2733520ce4d612478248",5:"d7f939971669b2717ed5",7:"8396871c21283c23d3e4",8:"0deb9eb4cf68ab7da548",9:"a21ade59da3c08f69515",10:"b9ecbf7945ad4dcb6362",11:"5e1645a9789263ee10da",12:"dfcb18ad7a460762c2f3",13:"b9c3441f312ee922795d",14:"d1c724e5824e3cccf78f",15:"eb2b99a9fd7551d5c262",16:"e3e935958d62ae12c212",17:"8f0d533f8c34d9fdadf3",18:"55b63f37996b4afff2af",19:"de2c4e1f0260bd7f4b99",20:"cac307327f1c2e1ea104",21:"220436bb38164bfdb15e",22:"5f7d3fa0998e7f164d27",23:"48275ba96a5e7b3a7ab6"}[t]+".js"}(t);var d=new Error;l=function(e){script.onerror=script.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",d.name="ChunkLoadError",d.type=o,d.request=l,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:script})}),12e4);script.onerror=script.onload=l,document.head.appendChild(script)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},c.p="/gp-vue-boilerplate/_nuxt/",c.oe=function(t){throw console.error(t),t};var d=window.webpackJsonp=window.webpackJsonp||[],f=d.push.bind(d);d.push=e,d=d.slice();for(var i=0;i<d.length;i++)e(d[i]);var m=f;l.push([122,2,6]),n()}(Array(22).concat([function(t,e,n){"use strict";var o={extends:n(69).a,props:{error:{type:Object,default:()=>({})}},head(){return{title:this.error.statusCode}},computed:{components(){return[{component:"StagePicture",data:{picture:{placeholders:[{format:"jpg",url:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCNEVGN0EyNkU5RTExRUJCMDkwQ0MwRUY0MUI3MjY2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCNEVGN0ExNkU5RTExRUJCMDkwQ0MwRUY0MUI3MjY2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM2QjRDNzlGRkRBMTFFOUJFRjk4MkQ3MEUxODg0RDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM2QjRDN0FGRkRBMTFFOUJFRjk4MkQ3MEUxODg0RDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAARAB4DAREAAhEBAxEB/8QAWwABAQEBAAAAAAAAAAAAAAAAAAUCCAEBAAAAAAAAAAAAAAAAAAAAABAAAgICAgICAwAAAAAAAAAAAgMBBAAFEgYRITETcSIUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDlTAqaTr9vcEYVWoFoMQoEtaINadlwpCErmeTPBF5Lj8R7wN9u1uv1faNrrNcxjaVC02qlzZiTOEnK5OeMRH7SPmIwJGAwK/Xd5X09j+uaIWbyXVrFGyTGDKDruFszADPE/sgeE8onx8x7wNdztay523cXdW2W663cdYqmQyBfW45YIkJe/I8uM/jAjYDAYDAYH//Z"}],sources:[{format:"jpg",sizes:[{width:414,media:"all",url:n(127)},{width:576,media:"(min-width: 576px)",url:n(128)},{width:768,media:"(min-width: 768px)",url:n(129)},{width:992,media:"(min-width: 992px)",url:n(130)},{width:1200,media:"(min-width: 1200px)",url:n(131)},{width:1600,media:"(min-width: 1600px)",url:n(132)},{width:1600,media:"(min-width: 1900)",url:n(133)}]}]}}},{component:"ArticleText",data:{article:{headline:{overline:null,headline:String(this.error.statusCode),subline:null},content:`<p>${this.error.message}</p>`}}}]}}},r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.components,(function(e,o){return n(e.component,t._b({key:o,tag:"component"},"component",e.data,!1))})),1)}),[],!1,null,null,null);e.a=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t){t.exports=JSON.parse('{"de":{"components":{"pageHeader":{},"pageMenu":{"navigation":[{"title":"Home","url":"/"},{"title":"Über uns","url":"/p/ueber-uns"},{"title":"Projekte","url":"/p/projekte","childrens":[{"title":"Projekt 1","url":"/p/projekte/projekt-1"},{"title":"Projekt 2","url":"/p/projekte/projekt-2"}]}]},"pageMenuButton":{"label":"Menu Öffnen/Schließen"},"pageFooter":{"navigation":[{"title":"Kontakt","url":"/p/kontakt"},{"title":"Nutzungsbedingungen","url":"/p/nutzungsbedingungen"},{"title":"Rechtliche Hinweise","url":"/p/rechtliche-hinweise"}]}}},"en":{"components":{"pageHeader":{},"pageMenu":{"navigation":[{"title":"Home","url":"index"},{"title":"About","url":"/p/about"},{"title":"Projects","url":"/p/projects","childrens":[{"title":"Project 1","url":"/p/projects/project-1"},{"title":"Project 2","url":"/p/projects/project-2"}]}]},"pageMenuButton":{"label":"Menu Open/Close"},"pageFooter":{"navigation":[{"title":"Contact","url":"/p/contact"},{"title":"Terms of use","url":"/p/terms"},{"title":"Legals","url":"/p/legals"}]}}}}')},,,,,,,,,function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return y}));var o=n(64),r=n(121),l=n(65),c=n(120),d=n(15),f=n(54),m=n(36),v=n(60);const h=Object(o.a)(t,"resize").pipe(Object(l.a)(0),Object(c.a)((()=>Object(r.a)(350))),Object(d.a)((()=>A())),Object(f.a)());let x=Object(v.b)();const y=Object(v.a)().pipe(Object(d.a)((t=>{const e=new m.a((()=>(t-x)/Math.abs(t-x)));return x=t,{position:t,direction:e}})),Object(f.a)());Object(o.a)(t,"orientationchange").pipe(Object(l.a)(0),Object(c.a)((()=>Object(r.a)(350))),Object(d.a)((()=>A())),Object(f.a)());function A(){const e=void 0!==t&&t,n=void 0!==e.document&&e.document,o=n&&n.documentElement;return new m.a(_(o.clientWidth,e.innerWidth),_(o.clientHeight,e.innerHeight))}function _(a,b){return a<b?b:a}}).call(this,n(8))},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v}));var o=n(64),r=n(65),l=n(15),c=n(54),d=n(36);const f=new Map;m();function m(e=t){return f.has(e)||f.set(e,Object(o.a)(e,"scroll")),f.get(e).pipe(Object(r.a)(0),Object(l.a)((()=>v(e))),Object(c.a)())}function v(e=t){const n=t.document,o=n&&n.documentElement||{scrollLeft:0,scrollTop:0};return new d.a(e.scrollLeft||t.pageXOffset||o.scrollLeft,e.scrollTop||t.pageYOffset||o.scrollTop)}}).call(this,n(8))},,,,,,function(t,e,n){"use strict";var o={props:{tag:{type:String,required:!1,default:()=>"div"}}},r=(n(146),n(5)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"layouts-default-container"},[t._t("background"),t._v(" "),t._t("container",[t.$slots.default?n("div",{staticClass:"lost-flex-container"},[t._t("default")],2):t._e()])],2)}),[],!1,null,null,null);e.a=component.exports},,function(t,e,n){"use strict";var o={props:{url:{type:[String,Object],default:"#"},title:{type:String,default:null},target:{type:String,default:"_blank"}},computed:{isExternal(){return"string"==typeof this.url&&(/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#"))}}},r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal?n("a",{attrs:{href:t.url,target:t.target||"_blank",rel:"noopener",title:t.title}},[t._t("default",[t._v(t._s(t.title))])],2):t.isExternal?t._e():n("nuxt-link",{attrs:{to:t.url,title:t.title}},[t._t("default",[t._v(t._s(t.title))])],2)}),[],!1,null,null,null);e.a=component.exports},function(t,e,n){"use strict";var o={speedkitComponents:{StagePicture:()=>n.e(10).then(n.bind(null,274)),StageVideo:()=>Promise.all([n.e(0),n.e(15)]).then(n.bind(null,275)),ArticleText:()=>n.e(11).then(n.bind(null,276)),ArticleTextImage:()=>n.e(8).then(n.bind(null,272)),SinglePicture:()=>n.e(9).then(n.bind(null,277)),SingleVideo:()=>Promise.all([n.e(0),n.e(14)]).then(n.bind(null,278))}},r=n(5),component=Object(r.a)(o,undefined,undefined,!1,null,null,null);e.a=component.exports},,,,,function(t,e,n){var content=n(139);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("230fbd13",content,!0,{sourceMap:!1})},,function(t,e,n){var content=n(143);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("144e9bf0",content,!0,{sourceMap:!1})},function(t,e){var n=["class","staticClass","style","staticStyle","attrs"];function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},o=Object.keys(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,m=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,x=data.attrs,y=void 0===x?{}:x,A=l(data,n);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,v],style:[style,h],attrs:Object.assign({viewBox:"0 0 100 100"},y)},A),f.concat([c("g",[c("path",{attrs:{d:"M93.3 24.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7zM93.3 54.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7zM93.3 84.8H6.7a6.7 6.7 0 010-13.4h86.7c3.7 0 6.7 3 6.7 6.7-.1 3.7-3.1 6.7-6.8 6.7z"}})]),c("g",[c("path",{attrs:{d:"M59.6 50L98 11.6c2.7-2.7 2.7-7 0-9.6-2.7-2.7-7-2.7-9.6 0L50 40.4 11.6 2C8.9-.7 4.6-.7 2 2-.7 4.7-.7 9 2 11.6L40.4 50 2 88.4c-2.7 2.7-2.7 7 0 9.6 2.7 2.7 7 2.7 9.6 0L50 59.6 88.4 98c2.7 2.7 7 2.7 9.6 0 2.7-2.7 2.7-7 0-9.6L59.6 50z"}})])]))}}},function(t,e,n){var content=n(145);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("ccb4df68",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(147);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5f57434c",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(149);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("384551a5",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(151);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("bab17f6a",content,!0,{sourceMap:!1})},,,,,,,,,,,,,,,,,,,function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-regular.d003394.woff2"},function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-italic.23f11e5.woff2"},function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700.3683284.woff2"},function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700italic.44dad63.woff2"},function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-regular.839e5a2.woff2"},function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-700.ae7afc8.woff2"},,,,,,,,,,,,,function(t,e,n){"use strict";var o={props:{label:{type:String,default:"Button Label"}},methods:{onClick(t){this.$emit("click",t)}}},r=(n(138),n(5)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",400,"normal"),expression:"$getFont('Raleway', 400, 'normal')"}],staticClass:"atom-base-button",on:{click:t.onClick}},[t._t("default",[n("span",[t._v(t._s(t.label))])])],2)}),[],!1,null,null,null).exports,c=n(119),d=n(19),f={components:{BaseButton:l,SpeedkitLayer:c.a},data:()=>({hydrate:!1}),head:()=>({noscript:[Object(d.c)(".page-info-layer > div { animation-delay: initial !important; }",!0)],__dangerouslyDisableSanitizers:["noscript"]})},m=(n(142),Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("speedkit-layer",{staticClass:"page-info-layer"},[n("div",[n("p",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",400,"normal"),expression:"$getFont('Raleway', 400, 'normal')"}]},[t._v("\n      Sorry, but you will have a limited user experience due to a…\n    ")]),t._v(" "),n("ul",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Raleway",700,"normal"),expression:"$getFont('Raleway', 700, 'normal')"}]},[n("li",{attrs:{id:"nuxt-speedkit__message__nojs"}},[t._v("\n        disabled javascript\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__unsupported-browser"}},[t._v("\n        outdated browser\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__outdated-device"}},[t._v("\n        outdated device\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__slow-connection"}},[t._v("\n        slow connection\n      ")])]),t._v(" "),n("div",{staticClass:"info_layer__buttons"},[n("base-button",{attrs:{id:"nuxt-speedkit__button__init-nojs"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          OK\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-font",onclick:"window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          No\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-app",label:"Yes",onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}})],1)])])}),[],!1,null,"1521a0e2",null).exports),v=n(41),h=n(199),x=n(198),y=n(195),A=n(196),map=n(15),filter=n(197),_=n(59);const w=Object(h.a)(_.a,_.b).pipe(Object(x.a)({refCount:!0,bufferSize:1})).pipe(Object(y.a)(1)).pipe(Object(y.a)("direction")).pipe(Object(A.a)(3,1)).pipe(Object(map.a)((t=>t.reduce(((t,e)=>t+e.y),0)/t.length))).pipe(Object(filter.a)((t=>!(t%1)))).pipe(Object(x.a)({refCount:!0,bufferSize:1}));var j=n(77),O={components:{svgIconMenuClose:n.n(j).a},props:{label:{type:String,default:()=>"Menu Open/Close"}},computed:{isMenuOpened(){return this.$store.getters["modal/isModelOpened"]("menu")},toggleDirection(){return this.$store.getters["layout/toggleDirection"]||!1}},methods:{onClickMenu(){this.$store.dispatch("modal/toggleModal",{name:"menu"})}}},k=(n(144),Object(r.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"button-toggle"}},[t.toggleDirection?t._e():n("button",{staticClass:"page-menu-button",class:{"js--selected":t.isMenuOpened},attrs:{"aria-label":t.label},on:{click:t.onClickMenu}},[n("i",[n("svg-icon-menu-close")],1)])])}),[],!1,null,null,null).exports),M=n(50);var C={components:{PageMenuButton:k,PageMenu:Object(v.a)((()=>n.e(12).then(n.bind(null,271))),{event:"hydrate"}),PageInfoLayer:m},speedkitComponents:{PageHeader:()=>Promise.resolve().then(n.bind(null,193)),PageFooter:()=>n.e(13).then(n.bind(null,273))},data:()=>({preventMenuOpened:!0}),head(){const t=this.$nuxtI18nSeo();return t.htmlAttrs[String("data-prevent-scrolling")]=this.preventScrolling,t},computed:{layoutData(){return M[this.$i18n.locale]},layoutComponents(){return(this.layoutData||{components:[]}).components},preventScrolling(){return this.$store.getters["layout/preventScrolling"]}},mounted(){this.subscriptions=[w.subscribe(this.onDirectionChange)],this.$nuxt.$on("triggerScroll",(()=>{this.onDirectionChange(null,!0)}))},destroyed(){this.subscriptions.forEach((t=>t.unsubscribe()))},methods:{onDirectionChange(t,e=!1){e?this.$store.dispatch("layout/toggleDirection",!1):this.$store.dispatch("layout/toggleDirection",t>0)},onClickMenuButton(){this.preventMenuOpened=!1,this.$refs.pageMenu.$el.dispatchEvent(new CustomEvent("hydrate"))}}},E=(n(150),Object(r.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",t._b({attrs:{sticky:""}},"page-header",t.layoutComponents.pageHeader,!1)),t._v(" "),n("page-menu",t._b({ref:"pageMenu",attrs:{opened:!t.preventMenuOpened}},"page-menu",t.layoutComponents.pageMenu,!1)),t._v(" "),n("page-menu-button",t._b({nativeOn:{click:function(e){return t.onClickMenuButton(e)}}},"page-menu-button",t.layoutComponents.pageMenuButton,!1)),t._v(" "),n("main",[n("nuxt")],1),t._v(" "),n("page-footer",t._b({},"page-footer",t.layoutComponents.pageFooter,!1)),t._v(" "),n("page-info-layer",{attrs:{critical:""}})],1)}),[],!1,null,null,null));e.a=E.exports},,,,function(t,e,n){t.exports=n(123)},,,,,function(t,e,n){t.exports=n.p+"img/414.c91de65.jpg"},function(t,e,n){t.exports=n.p+"img/576.f614056.jpg"},function(t,e,n){t.exports=n.p+"img/768.4cf4890.jpg"},function(t,e,n){t.exports=n.p+"img/992.e4dfdca.jpg"},function(t,e,n){t.exports=n.p+"img/1200.3ec4550.jpg"},function(t,e,n){t.exports=n.p+"img/1600.f0531af.jpg"},function(t,e,n){t.exports=n.p+"img/1920.d628427.jpg"},,,,,function(t,e,n){"use strict";n(74)},function(t,e,n){var o=n(12)((function(i){return i[1]}));o.push([t.i,".atom-base-button{color:currentColor;cursor:pointer;background:transparent;border:.0625em solid;border-radius:.3125em;outline:none;transition:transform .1s ease-in;-webkit-appearance:none;-moz-appearance:none;appearance:none;will-change:transform}.atom-base-button>*{display:block;padding:.625em 1.25em;cursor:pointer}.atom-base-button:hover{transform:scale(1.05)}.atom-base-button:active{transform:scale(.95)}",""]),o.locals={},t.exports=o},,,function(t,e,n){"use strict";n(76)},function(t,e,n){var o=n(12)((function(i){return i[1]}));o.push([t.i,".page-info-layer[data-v-1521a0e2] #nuxt-speedkit__speedkit-layer__content{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgba(0,0,0,.25);opacity:0;animation-name:fade-in-data-v-1521a0e2;animation-duration:.2s;animation-delay:3s;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);animation-fill-mode:forwards}.page-info-layer[data-v-1521a0e2] #nuxt-speedkit__speedkit-layer__content>div{padding:10px;color:#fff;text-align:center;background-color:rgba(0,0,0,.6);box-shadow:0 0 .625em rgba(0,0,0,.6);transform:translateY(-100%);animation-name:fall-down-data-v-1521a0e2;animation-duration:.2s;animation-delay:.5s;animation-fill-mode:forwards}.page-info-layer.nuxt-speedkit__speedkit-layer--visible[data-v-1521a0e2] #nuxt-speedkit__speedkit-layer__content{animation-delay:0s}ul[data-v-1521a0e2]{padding:0;margin:0}ul>li[data-v-1521a0e2]{display:none}.info_layer__buttons[data-v-1521a0e2]{margin:.625em 0}.info_layer__buttons>*[data-v-1521a0e2]{margin:0 .3125em}@keyframes fade-in-data-v-1521a0e2{to{opacity:1}}@keyframes fall-down-data-v-1521a0e2{to{transform:translateY(0)}}",""]),o.locals={},t.exports=o},function(t,e,n){"use strict";n(78)},function(t,e,n){var o=n(12)((function(i){return i[1]}));o.push([t.i,'.page-menu-button{position:fixed;bottom:10vh;left:calc(50% - 24px);z-index:1001;box-sizing:border-box;display:block;width:12.8vw;padding:12px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;background:hsla(0,0%,100%,.6);border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:50%;outline:none;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);box-shadow:0 0 10px rgba(0,0,0,.3);-webkit-tap-highlight-color:transparent}@media (min-width:576px){.page-menu-button{width:48px}}@media (min-width:992px){.page-menu-button{bottom:80px}}.page-menu-button svg{display:block;width:100%}.page-menu-button i{position:relative;display:block}.page-menu-button i:before{display:block;padding-top:100%;content:""}.page-menu-button i>*{position:absolute;top:0;left:0}.page-menu-button svg g{transition:transform .3s linear,opacity .3s linear;transform-origin:center center}.page-menu-button svg g:last-child{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}.page-menu-button.js--selected{background:rgba(0,0,0,.5)}.page-menu-button.js--selected svg{fill:#fff}.page-menu-button.js--selected svg g:first-child{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}.page-menu-button.js--selected svg g:last-child{opacity:1;transform:scale(1)}.button-toggle-enter-active,.button-toggle-leave-active{transition:transform .3s linear,opacity .3s linear}.button-toggle-enter,.button-toggle-leave-to{opacity:0;transition:transform .15s linear,opacity .15s linear;transform:scale(.4)}',""]),o.locals={},t.exports=o},function(t,e,n){"use strict";n(79)},function(t,e,n){var o=n(12)((function(i){return i[1]}));o.push([t.i,".layouts-default-container{margin:40px 0}.layouts-default-container:first-child{margin-top:0}.layouts-default-container .lost-flex-container{display:flex}@media (min-width:576px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:540px;margin-left:auto;margin-right:auto}}@media (max-width:575px){.layouts-default-container .lost-flex-container{padding:0 15px}}@media (min-width:768px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:720px;margin-left:auto;margin-right:auto}}@media (min-width:992px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:960px;margin-left:auto;margin-right:auto}}@media (min-width:1200px){.layouts-default-container .lost-flex-container{display:flex;flex-flow:row wrap;max-width:1140px;margin-left:auto;margin-right:auto}}",""]),o.locals={},t.exports=o},function(t,e,n){"use strict";n(80)},function(t,e,n){var o=n(12)((function(i){return i[1]}));o.push([t.i,".page-header[data-v-0b5a7d7d]{position:fixed;top:0;left:0;z-index:100;width:100%;margin:0;transition:transform .2s linear,opacity .2s linear}.page-header.sticky[data-v-0b5a7d7d]{position:sticky}.page-header.js--toggle[data-v-0b5a7d7d]{opacity:0;transform:translateY(-60%)}.page-header .logo[data-v-0b5a7d7d]{padding:10px 0;font-size:24px;font-weight:700;text-align:center;background:hsla(0,0%,100%,.5);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:0 0 10px rgba(0,0,0,.3)}.page-header .logo a[data-v-0b5a7d7d]{color:#000;text-decoration:none}",""]),o.locals={},t.exports=o},function(t,e,n){"use strict";n(81)},function(t,e,n){var o=n(12)((function(i){return i[1]}));o.push([t.i,"body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}html[data-prevent-scrolling=true] body{overflow:hidden}",""]),o.locals={},t.exports=o},function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return r}));var o=n(50);const r={nuxtServerInit({dispatch:t}){t("layout/setData",o)}}},function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l})),n.d(e,"actions",(function(){return c}));const o=()=>({data:{},preventScrolling:!1,toggleDirection:!1}),r={data(t,data){t.data=data},preventScrolling(t,data){t.preventScrolling=Boolean(data)},toggleDirection(t,data){t.toggleDirection=Boolean(data)}},l={data:t=>t.data,preventScrolling:t=>t.preventScrolling,toggleDirection:t=>t.toggleDirection},c={setData(t,e){t.commit("data",e)},toggleDirection(t,e){t.commit("toggleDirection",e)},togglePreventScrolling(t,e){let n=!t.getters.preventScrolling;void 0!==e&&(n=e),t.commit("preventScrolling",n)}}},function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r})),n.d(e,"getters",(function(){return l})),n.d(e,"actions",(function(){return c}));const o=()=>({modals:[]}),r={toggleModal(t,e){const n=t.modals.find((t=>t.name===e.name));n&&(n.opened=void 0!==e.flag?e.flag:!n.opened),this.dispatch("layout/togglePreventScrolling",!!t.modals.find((t=>t.opened)))},add(t,e){t.modals.push(e)},remove(t,e){t.modals.splice(t.modals.indexOf(e),1)}},l={getModal:t=>e=>d(t.modals,e),isModelOpened:t=>e=>(d(t.modals,e)||{opened:!1}).opened},c={registerModal(t,e){t.commit("add",Object.assign({name:null,opened:!1},e))},unregisterModal(t,e){t.commit("remove",e)},toggleModal(t,e){t.commit("toggleModal",e)}};function d(t,e){return t.find((t=>t.name===e))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-regular.f8d47ad.woff"},function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-italic.66656db.woff"},function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700.6aded4d.woff"},function(t,e,n){t.exports=n.p+"fonts/raleway-v19-latin-700italic.25b7072.woff"},function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-regular.c04c7bf.woff"},function(t,e,n){t.exports=n.p+"fonts/roboto-slab-v13-latin-700.b1d6d7d.woff"},,,,,function(t,e,n){"use strict";n.r(e);var o=n(66),r=n(68),l={components:{LayoutDefaultContainer:o.a,AtomLinkTo:r.a},props:{sticky:{type:Boolean,required:!1}},computed:{styleClasses(){return{"js--toggle":this.toggleDirection,sticky:this.sticky}},isMenuOpened(){return this.$store.getters["layout/isModelOpened"]("menu")},toggleDirection(){return this.$store.getters["layout/toggleDirection"]}}},c=(n(148),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-default-container",{staticClass:"page-header",class:t.styleClasses,attrs:{tag:"header"}},[n("template",{slot:"container"},[n("div",{staticClass:"logo"},[n("atom-link-to",{attrs:{url:"/"}},[t._v("\n        Logo\n      ")])],1)])],2)}),[],!1,null,"0b5a7d7d",null);e.default=component.exports}]));