(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{398:function(t,e,n){"use strict";var r=n(4);n(26),n(57),n(58),n(23);function c(path,t){return t+"/"+((path=path.replace(/^\//,"").replace(t,"").replace(/^[\\/]?/,"").replace(/^\//,""))||"index")}var o={extends:n(187).a,asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,d,f,path,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.store,o=t.app,l=t.error,d=t.route,f=o.i18n.locale,path=c(d.path,f),e.next=5,n(path).fetch().catch((function(t){return l(t)}));case 5:return data=e.sent,Array.isArray(data)&&(data=data.find((function(t){return"index"===t.slug}))),"routeParams"in data&&r.dispatch("i18n/setRouteParams",data.routeParams),e.abrupt("return",{title:data.title,components:data.components});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"title of page",components:[]}},head:function(){return{title:this.title}}},l=n(10),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.components,(function(e,r){return n(e.component,t._b({key:r,tag:"component",attrs:{critical:r<1}},"component",e.data,!1))})),1)}),[],!1,null,null,null);e.a=component.exports},465:function(t,e,n){"use strict";n.r(e);var r={extends:n(398).a,nuxtI18n:{paths:{de:"/p/:sub/:child",en:"/p/:sub/:child"}}},c=n(10),component=Object(c.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);