(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{381:function(t,e,r){"use strict";(function(t){r(63);var n=r(146),c=r(386),o=r(56),l=r(382),A=r(387),d=r(68),f=new A.a;function m(t){return t.type===Object(l.a)("webp")}e.a={props:{sources:{type:Array,default:function(){return[]}},preload:{type:Array,default:function(){return[]}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head:function(){var e=this,data={};if(this.preload.length&&(this.isCritical||this.visible)){var source=function(t){return t.filter((function(source){return!m(source)||m(source)&&c.b}))}(this.preload)[0];f.getPromise(Object(d.a)(source.srcset),(function(r,n){Object(c.a)()?data={link:[Object(o.b)(source,e.crossorigin,r)]}:function(e,r,n){var c=e.srcset,o=e.sizes;void 0===n&&(n=function(){});var img=new t.Image;img.onload=n,img.crossorigin=r,img.sizes=o,img.srcset=c}(source,e.crossorigin,r)})).then((function(t){return e.onPreload(t)}))}return data},watch:{sources:function(){this.imageSources.length||(this.imageSources=this.sources)}},mounted:function(){var t=this;Object(n.a)(this.$el,(function(e){t.visible=!0,t.$emit("enter",e)}))},destroyed:function(){Object(n.b)(this.$el)},methods:{onPreload:function(t){this.style.backgroundImage="url("+this.$refs.image.currentSrc+")",this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")}}}}).call(this,r(19))},382:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function c(t){return n[String(t)]}},383:function(t,e,r){var content=r(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("0a7c9b2a",content,!0,{sourceMap:!1})},384:function(t,e,r){var content=r(391);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("4d9dc503",content,!0,{sourceMap:!1})},385:function(t,e,r){var content=r(393);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("3f6c6f66",content,!0,{sourceMap:!1})},386:function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return l}));var n=r(181);var c,o=!(!(c=t.document.createElement("canvas")).getContext||!c.getContext("2d"))&&0===c.toDataURL("image/webp").indexOf("data:image/webp");function l(){if(Object(n.a)())return!1;var e=t.document.createElement("link").relList;return function(element,e){var r={};t.document&&(r=t.document.createElement(element));if(e in r)return!0;return!1}("link","imageSrcset")&&!!(e&&e.supports&&e.supports("preload"))}}).call(this,r(19))},387:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(29),r(21),r(100),r(6),r(33),r(101),r(102),r(103),r(104),r(105),r(106),r(107),r(108),r(109),r(110),r(111),r(112),r(113),r(37);var n=r(182),c=function(){function t(){this.map=new Map}return t.prototype.getPromise=function(t,e){if(!this.map.has(t)){var r=new n.a;this.map.set(t,r.promise),e(r.resolve,r.reject)}return this.map.get(t)},t}()},388:function(t,e,r){"use strict";r(383)},389:function(t,e,r){var n=r(38)((function(i){return i[1]}));n.push([t.i,'picture[data-v-22740056]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-22740056]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);font-family:"object-fit:cover";object-fit:cover}',""]),t.exports=n},390:function(t,e,r){"use strict";r(384)},391:function(t,e,r){var n=r(38)((function(i){return i[1]}));n.push([t.i,".nuxt-speedkit__noscript[data-v-e63e686a]{display:block;height:inherit}",""]),t.exports=n},392:function(t,e,r){"use strict";r(385)},393:function(t,e,r){var n=r(38)((function(i){return i[1]}));n.push([t.i,".nuxt-speedkit__speedkit-picture[data-v-231a42ed]{width:100%;height:inherit;margin:0}",""]),t.exports=n},394:function(t,e,r){"use strict";r(71),r(21);var n=r(382),c=r(56),o=r(381).a,l=(r(388),r(11)),A=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{style:t.style},[t._l(t.imageSources,(function(source,t){return r("source",{key:t,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),t._v(" "),r("img",{ref:"image",class:{"in-progress":t.inProgress},attrs:{loading:"lazy",alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],2)}),[],!1,null,"22740056",null).exports,d=(r(390),{components:{CustomPicture:A,CustomNoScript:Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"e63e686a",null).exports},props:{sources:{type:Array,default:function(){return[]}},placeholders:{type:Array,default:function(){return[]}},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:function(){return{noscript:[Object(c.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}},computed:{hasSlot:function(){return this.$slots.caption}},methods:{getPlaceholders:function(){return this.placeholders.map((function(t){var e=t.media,r=t.url,c=t.format;return{media:e,url:r,type:Object(n.a)(c)}}))},getSources:function(){return this.sources.map((function(t){var e=t.sizes,r=t.format;return{media:t.media,srcset:e.map((function(t){var e=t.width,r=t.url;return e?r+" "+e+"w":r})).join(", "),sizes:e.map((function(t){var e=t.width,r=t.media;return r?r+" "+e+"px":e+"px"})).sort((function(a,b){return a.width>b.width?1:-1})).join(", "),type:Object(n.a)(r)}}))}}}),f=(r(392),Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.resolvedPlacholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"231a42ed",null));e.a=f.exports},459:function(t,e,r){"use strict";r.r(e);var n=r(180),c=r(394),o={components:{LayoutDefaultContainer:n.a,SpeedkitPicture:c.a},props:{picture:{type:Object,required:!1,default:function(){return{placeholders:[{format:"jpg",url:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjA2MTQ3MDIzMTU5MTFBRkYxQzFFNUExMTk5Q0FEMUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4OTdCREZBNkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4OTdCREY5NkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmFiN2YyNTUtZjAzZC00MDA1LWIzN2ItZDUzZDk0ZDBhNzQxIiBzdFJlZjpkb2N1bWVudElEPSIwNjE0NzAyMzE1OTExQUZGMUMxRTVBMTE5OUNBRDFBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABEAHgMBEQACEQEDEQH/xACCAAEAAwEAAAAAAAAAAAAAAAAGAgUHBAEAAwEBAAAAAAAAAAAAAAAAAgQFAwYQAAIBAwICBQoHAAAAAAAAAAECAxEEBQASIQYxkTITB1FxgcHRIkJysnMzsxQ0dDU2EQABAwMEAQUBAAAAAAAAAAACAAEDESExYYESMhNRwUJSBBT/2gAMAwEAAhEDEQA/AEmE8f45ZVimsLN5iGOyOPazMBwVArNUnq1zrtOOBEtleKGH7k26lkPGjmCbJ/oMbyvbyXZFVt5J2WUMBuO+MEBAB5dORQzegs+iXLwt8idtkT5n568QeYLOZchdSYbG2oEd1HjnSWNTIvauCrq7buim4+bW5QSk13QxfogB7NfX2QJ+X7M3ccozMBtVU1j7mQELtIrtrQ9esPA9KUTf9rZqiuNEpQOhSMn3Y1Ttn0e3TbkpzRukOAyr4u7e9ZzdXUNGtUmeRIAwFS0oU7pQvwpWleJ4aMJGG9KugOJytWyvbTm+fLYd4csZbjIWrPO0gRYu9haqEQJEgSscbHgy0I41ppoJeQ3ylDicSthCTcxI6r3UgsJB3ggPbMQPbDbukAV6dY8hrotuJLnxf7+H5R9GlSVAVY2v9UPuevQj2RF1WiZr/PL/ABI/yzquXRSR7rNJ/wAe1+y/06jDh1TfLL//2Q=="}],sources:[{format:"jpg",sizes:[{width:414,media:"all",url:"img/sample-a-16-9/412x232.jpg"},{width:576,media:"(min-width: 576px)",url:"img/sample-a-16-9/768x432.jpg"},{width:768,media:"(min-width: 768px)",url:"img/sample-a-16-9/992x558.jpg"},{width:1024,media:"(min-width: 1024px)",url:"img/sample-a-16-9/1200x675.jpg"},{width:1200,media:"(min-width: 1200px)",url:"img/sample-a-16-9/1600x900.jpg"},{width:1600,media:"(min-width: 1600px)",url:"img/sample-a-16-9/1920x1080.jpg"}]}]}}}}},l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-default-container",{staticClass:"organism-stage-picture"},[r("template",{slot:"background"},[r("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1))],1)],2)}),[],!1,null,null,null);e.default=component.exports}}]);