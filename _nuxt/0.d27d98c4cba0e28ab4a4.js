(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(t,e,r){"use strict";(function(t){var o=r(55),n=r(205),l=r(19),c=r(201),d=r(206),A=r(25);const f=new d.a;function m({type:t}){return t===Object(c.a)("webp")}e.a={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||this.visible)){const source=this.getPreloadSource();f.getPromise(Object(A.a)(source.srcset),((e,r)=>{Object(n.b)()?data={link:[Object(l.b)(source,this.crossorigin,e)]}:function({srcset:e,sizes:r},o,l=(()=>{})){if(Object(n.a)()){const img=new t.Image;img.sizes=r,img.srcset=e,img.crossorigin=o,img.onload=l}else l()}(source,this.crossorigin,e)})).then((t=>this.onPreload(t)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(o.a)(this.$el,(t=>{this.visible=!0,this.$emit("enter",t)}))},destroyed(){Object(o.b)(this.$el)},methods:{onPreload(e){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load"),t.requestAnimationFrame((()=>{!function(e,r){"objectFitImages"in t&&t.objectFitImages(r);"picturefill"in t&&t.picturefill({elements:e})}(this.$el,this.$refs.image)}))},getPreloadSource(){const t=function(t){return t.filter((source=>!m(source)||m(source)&&n.c))}(this.preload),e=Array.from(new Set(t.map((({type:t})=>t)))).shift(),{srcset:r,sizes:o}=t.filter((source=>source.type===e)).reduce(((t,source)=>(t.srcset.push(source.srcset),t.sizes.push(source.sizes),t)),{srcset:[],sizes:[]});return{srcset:r.join(", "),sizes:o.join(", "),type:e}}}}}).call(this,r(8))},201:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const o={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function n(t){return o[String(t)]}},202:function(t,e,r){var content=r(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("61df53f2",content,!0,{sourceMap:!1})},203:function(t,e,r){var content=r(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("29504130",content,!0,{sourceMap:!1})},204:function(t,e,r){var content=r(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("2334d963",content,!0,{sourceMap:!1})},205:function(t,e,r){"use strict";(function(t){r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return c}));var o=r(39);const n=function(){const e=t.document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")}();function l(){if(Object(o.a)())return!1;{const e=t.document.createElement("link").relList;return function(element,e){let r={};t.document&&(r=t.document.createElement(element));if(e in r)return!0;return!1}("link","imageSrcset")&&!!(e&&e.supports&&e.supports("preload"))}}function c(){return"HTMLPictureElement"in t}}).call(this,r(8))},206:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r(67);class n{constructor(){this.map=new Map}getPromise(t,e){if(!this.map.has(t)){const r=new o.a;this.map.set(t,r.promise),e(r.resolve,r.reject)}return this.map.get(t)}}},207:function(t,e,r){"use strict";r(202)},208:function(t,e,r){var o=r(12)((function(i){return i[1]}));o.push([t.i,'picture[data-v-4296fafd]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-4296fafd]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);font-family:"object-fit:cover";object-fit:cover}',""]),o.locals={},t.exports=o},209:function(t,e,r){"use strict";r(203)},210:function(t,e,r){var o=r(12)((function(i){return i[1]}));o.push([t.i,".nuxt-speedkit__noscript[data-v-62a7a308]{display:block;height:inherit}",""]),o.locals={},t.exports=o},211:function(t,e,r){"use strict";r(204)},212:function(t,e,r){var o=r(12)((function(i){return i[1]}));o.push([t.i,".nuxt-speedkit__speedkit-picture[data-v-2e74cd6a]{width:100%;height:inherit;margin:0}",""]),o.locals={},t.exports=o},213:function(t,e,r){"use strict";var o=r(201),n=r(19),l=r(200).a,c=(r(207),r(5)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{style:t.style},[t._l(t.imageSources,(function(source,t){return r("source",{key:t,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),t._v(" "),r("img",{ref:"image",class:{"in-progress":t.inProgress},attrs:{loading:"lazy",alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],2)}),[],!1,null,"4296fafd",null).exports,A=(r(209),{components:{CustomPicture:d,CustomNoScript:Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"62a7a308",null).exports},props:{sources:{type:Array,default:()=>[]},placeholders:{type:Array,default:()=>[]},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:()=>({noscript:[Object(n.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},methods:{getPlaceholders(){return this.placeholders.map((({media:t,url:e,format:r})=>({media:t,url:e,type:Object(o.a)(r)})))},getSources(){return this.sources.map((({sizes:t,format:e,media:r})=>{const n=t.sort(((a,b)=>a.width>b.width?-1:1));return{media:r,srcset:n.map((({width:t,url:e})=>t?`${e} ${t}w`:e)).join(", "),sizes:n.map((({width:t,media:e})=>e?`${e} ${t}px`:`${t}px`)).join(", "),type:Object(o.a)(e)}}))}}}),f=(r(211),Object(c.a)(A,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.resolvedPlacholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"2e74cd6a",null));e.a=f.exports},229:function(t,e,r){var content=r(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("7b42e922",content,!0,{sourceMap:!1})},239:function(t,e,r){"use strict";var o={components:{SpeedkitPicture:r(213).a},props:{poster:{type:Object,required:!1,default:()=>({placeholders:[{media:"(min-width: 576px)",format:"jpg",url:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9Ijc1QjU0MkYxRkVFMzdENzk5MDFDRDgwRDAwOURFRUI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4OTdCREZFNkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4OTdCREZENkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M2M0ZDFhODAtZGNhYy00ODc2LTkwYjAtOTMwNTIwZDg1MTg0IiBzdFJlZjpkb2N1bWVudElEPSI3NUI1NDJGMUZFRTM3RDc5OTAxQ0Q4MEQwMDlERUVCNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABEAHgMBEQACEQEDEQH/xAB/AAADAQEAAAAAAAAAAAAAAAAEBQYHCAEAAwEBAAAAAAAAAAAAAAAAAQIDBAAQAAEDAQUFBgcBAAAAAAAAAAECAwQRABIFBgchMUETNFGBsSIyFHGRcsIzQyQVEQACAQMBCAMAAAAAAAAAAAAAAQIRMQQhQVGRoVIDExThMmL/2gAMAwEAAhEDEQA/ANTwbPjUuMZDMBz2yR1BdQWid1EqHqpxtl999PMt6f65DCHn2OsO+5j0QgFSXGV1AA9QcSrzA8dlQbNHOp9lwOeJ0viBZn1Jy/hWCP4k2pUpxCUcqOkEFSnTdRerS6LM86Fo6sEcSddbEDF1nMjBJuKuww3MhltyOwP2sOLDaqpJ9aSTx7DZY5bo1XXf8FZYiTV6PYRTGVtR2pLc6LCci/57UaK4029fZW2mocSygG6Qb1VrI+ZNsyi6NPUZzVxhJwDUiJjH9WFmauSVjD2WHFLaU0mh5jl26Wtmyqtx4G0JYsmXj34oGzTp7rFiEK8xgvLjtp56YiZLDqy8DTlq8wv3RuNq9rFcbiyyIuxNR8palCPJivZXkIdUzdjMEpIU5zWyUJorZ5UqXU7Nnbavh1rUXznTED8a/rFtisYhxC6JXd4mwCAu9Wn4fbYB2Ai+vb7/AANmAf/Z"},{format:"jpg",url:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjU0MTg5QUQyMjVGQjFBQzRENjU0NjQxN0UyQjU0M0QxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk2NTdDRjMzNkUwRTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2NTdDRjMyNkUwRTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGZlNGM5Y2ItZmE5OC00NWNkLWFkMmQtMzA2MzU1ZDllNTFmIiBzdFJlZjpkb2N1bWVudElEPSI1NDE4OUFEMjI1RkIxQUM0RDY1NDY0MTdFMkI1NDNEMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIADUAHgMBEQACEQEDEQH/xACDAAEAAgMBAAAAAAAAAAAAAAAABAcBBQYIAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQEQAAIBAgQGAQMFAAAAAAAAAAEDAgAEERIFBiExUSITB2FBMghxgcEUJBEAAgEDAgQDCQAAAAAAAAAAAAECESEDQRIxYZEF4SIEUYGx0TJSExQV/9oADAMBAAIRAxEAPwDypQCgFAKAUAoBQCgL5l609czsmZLRqXwJJm1zQMvQ8cv71hlkyVsyMpeY0zfXO1R5lqtmOctYmQts5iPHuMsDy+gPKpxyTdK2JKLk6I1btj7fhHHwkEjHL5Jkg9Dx+KuTkVbnUhx2jpBE/wDJLNEA4eSf1+catPXK5c2m7NurmyjLVHi0s4SMnxLIza4DiFrjicBLkZS5Vxsvd4btsI+Z6v6Y83T4I9x4JVrJ0RndqrJGmNstraNbycxS2MtlOlJ7hEYzWxpIiCs/Zl5n5rL6bPknLfnyO1lai5UXPWpq3wgqR1OdZtG4FjbXdx42NuVhsbNDpZ1CXd424jhPjlrpYO5wcnGadrbuFTHmwyi/K1f3kdO1L0272yRKDYyjkQZ4sZEkdgwOAy8cZGtH7+GvF0K9k6cUV7D3HuqEDAKtDE8hJczh+nfUH6HG/aXKCJaPem60nhY6dIdJJn/DKql2zG9ZdfAmrElX5BbuWDhp+mEmRkZSSwnu4kY+Xl06VXLs+J6y6+BJS5Esfkju0QMBouiiJ+4/1m5ieeObzc6q/h4/vydV8if5eSKlrtFQoBQCgFAKAUAoD//Z"}],sources:[{format:"webp",sizes:[{width:576,media:"(min-width: 576px)",url:"img/sample-a-16-9/576.webp"},{width:768,media:"(min-width: 768px)",url:"video/16_9/poster/768.webp"},{width:1024,media:"(min-width: 1024px)",url:"video/16_9/poster/992.webp"},{width:1200,media:"(min-width: 1200px)",url:"video/16_9/poster/1200.webp"},{width:1600,media:"(min-width: 1600px)",url:"video/16_9/poster/1600.webp"}]},{format:"jpg",sizes:[{width:576,media:"(min-width: 576px)",url:"img/sample-a-16-9/576.jpg"},{width:768,media:"(min-width: 768px)",url:"video/16_9/poster/768.jpg"},{width:1024,media:"(min-width: 1024px)",url:"video/16_9/poster/992.jpg"},{width:1200,media:"(min-width: 1200px)",url:"video/16_9/poster/1200.jpg"},{width:1600,media:"(min-width: 1600px)",url:"video/16_9/poster/1600.jpg"}]},{format:"webp",sizes:[{width:414,media:"all",url:"video/9_16/poster/412.jpg"}]},{format:"jpg",sizes:[{width:414,media:"all",url:"video/9_16/poster/412.jpg"}]}]})},sources:{type:Array,required:!1,default:()=>[{type:"video/mp4",src:"video/9_16/BigBuckBunny_9_16.mp4",media:"all and (max-width:575px)"},{type:"video/mp4",src:"video/16_9/BigBuckBunny_16_9.mp4",media:"all and (min-width:576px)"}]},autoplay:{type:Boolean,required:!1,default:()=>!1},muted:{type:Boolean,required:!1,default:()=>!1},loop:{type:Boolean,required:!1,default:()=>!1},controls:{type:Boolean,required:!1,default:()=>!0},playsinline:{type:Boolean,required:!1,default:()=>!1},preload:{type:String,required:!1,default:()=>"none"}},data:()=>({videoPlaying:!1,videoStarted:!1}),computed:{videoAttributes(){return{playsinline:this.playsinline,preload:this.preload,loop:this.loop,controls:this.controls,muted:this.muted}},styleClasses(){return{"js--started":this.videoStarted,"js--playing":this.videoPlaying}},filteredSources(){return this.$isServer?[]:this.sources.filter((source=>this.isMedia(source.media)))}},mounted(){this.$nextTick((()=>{this.autoplay&&this.$refs.video.play()}))},methods:{isMedia(t){return!!this.$isServer||t&&window.matchMedia(t).matches},onClickPlayButton(){this.$refs.video.play()},onPlay(){this.videoStarted=this.videoPlaying=!0},onPause(){this.videoPlaying=!1}}},n=(r(240),r(5)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"atom-responsive-video",class:t.styleClasses},[r("client-only",[r("video",t._b({ref:"video",on:{play:t.onPlay,pause:t.onPause}},"video",t.videoAttributes,!1),t._l(t.filteredSources,(function(source,e){return r("source",t._b({key:e},"source",source,!1))})),0)]),t._v(" "),r("speedkit-picture",t._b({staticClass:"poster"},"speedkit-picture",t.poster,!1)),t._v(" "),t.autoplay?t._e():r("span",{staticClass:"play-button",on:{click:t.onClickPlayButton}},[r("i")])],1)}),[],!1,null,"a8ffb8f2",null);e.a=component.exports},240:function(t,e,r){"use strict";r(229)},241:function(t,e,r){var o=r(12)((function(i){return i[1]}));o.push([t.i,'.atom-responsive-video[data-v-a8ffb8f2]{position:relative;background:#000}.atom-responsive-video[data-v-a8ffb8f2]:before{display:block;padding-top:177.77778%;content:""}@media (min-width:576px){.atom-responsive-video[data-v-a8ffb8f2]:before{padding-top:56.25%}}.atom-responsive-video video[data-v-a8ffb8f2]{position:absolute;top:0;left:0;z-index:5;width:100%;height:100%}.atom-responsive-video .poster[data-v-a8ffb8f2]{position:absolute;top:0;left:0;z-index:10;width:100%;height:100%}.atom-responsive-video .poster[data-v-a8ffb8f2]:before{display:block;padding-top:177.77778%;content:""}@media (min-width:576px){.atom-responsive-video .poster[data-v-a8ffb8f2]:before{padding-top:56.25%}}.atom-responsive-video .poster[data-v-a8ffb8f2] picture{height:100%}.atom-responsive-video .play-button[data-v-a8ffb8f2],.atom-responsive-video .poster[data-v-a8ffb8f2] img,.atom-responsive-video .poster[data-v-a8ffb8f2] picture{position:absolute;top:0;left:0;width:100%}.atom-responsive-video .play-button[data-v-a8ffb8f2]{z-index:11;height:100%;cursor:pointer}.atom-responsive-video .play-button i[data-v-a8ffb8f2]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.atom-responsive-video .play-button i[data-v-a8ffb8f2]:before{display:block;width:48px;height:48px;content:"";background:red;border-radius:50%}.atom-responsive-video.js--started .play-button[data-v-a8ffb8f2],.atom-responsive-video.js--started .poster[data-v-a8ffb8f2]{pointer-events:none;opacity:0}',""]),o.locals={},t.exports=o}}]);