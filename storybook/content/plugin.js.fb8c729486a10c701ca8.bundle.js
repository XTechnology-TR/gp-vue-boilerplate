(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1295:function(module,exports,__webpack_require__){__webpack_require__(3),__webpack_require__(13),__webpack_require__(26),__webpack_require__(1276),__webpack_require__(32),__webpack_require__(45),__webpack_require__(594),__webpack_require__(22),__webpack_require__(43),__webpack_require__(27),__webpack_require__(17),__webpack_require__(16),__webpack_require__(62),__webpack_require__(10),__webpack_require__(6),__webpack_require__(7),__webpack_require__(8),__webpack_require__(1),__webpack_require__(12),__webpack_require__(61),__webpack_require__(9),__webpack_require__(11),__webpack_require__(1276),__webpack_require__(32),__webpack_require__(45),__webpack_require__(594),__webpack_require__(43),__webpack_require__(27),__webpack_require__(16),__webpack_require__(62),__webpack_require__(10),__webpack_require__(8),__webpack_require__(61),__webpack_require__(71);var _asyncToGenerator=__webpack_require__(595),_typeof=__webpack_require__(1297),_classCallCheck=__webpack_require__(1298),_createClass=__webpack_require__(1299),_defineProperty=__webpack_require__(196);function _createForOfIteratorHelper(o,allowArrayLike){var it;if("undefined"==typeof Symbol||null==o[Symbol.iterator]){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=o[Symbol.iterator]()},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var pick=function pick(obj){var keys=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(obj).filter((function(key){return keys.includes(key)})).reduce((function(newObj,key){return Object.assign(newObj,_defineProperty({},key,obj[key]))}),{})},omit=function omit(obj){var keys=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(obj).filter((function(key){return!keys.includes(key)})).reduce((function(newObj,key){return Object.assign(newObj,_defineProperty({},key,obj[key]))}),{})},QueryBuilder=function(){"use strict";function QueryBuilder(_ref,options){var query=_ref.query,path=_ref.path,init=_ref.init,text=_ref.text,_ref$postprocess=_ref.postprocess,postprocess=void 0===_ref$postprocess?[]:_ref$postprocess;_classCallCheck(this,QueryBuilder),this.query=query,this.path=path,this.init=init,this.postprocess=postprocess,this.options=options||{},this.onlyKeys=null,this.withoutKeys=null,this.sortKeys=[],this.limitN=null,this.skipN=null,text||this.postprocess.unshift((function(data){return data.map((function(item){return omit(item,["text"])}))}))}var _fetch;return _createClass(QueryBuilder,[{key:"only",value:function only(keys){return this.onlyKeys=Array.isArray(keys)?keys:[keys],this}},{key:"without",value:function without(keys){return this.withoutKeys=Array.isArray(keys)?keys:[keys],this}},{key:"sortBy",value:function sortBy(field,direction){return this.sortKeys.push([field,"desc"===direction]),this}},{key:"where",value:function where(query){return this.query=this.query.find(query),this}},{key:"search",value:function search(query,value){return query?($fts="object"===_typeof(query)?query:value?{query:{type:"match",field:query,value:value,prefix_length:1,fuzziness:1,extended:!0,minimum_should_match:1}}:{query:{type:"bool",should:this.options.fullTextSearchFields.map((function(field){return{type:"match",field:field,value:query,prefix_length:1,operator:"and",minimum_should_match:1,fuzziness:1,extended:!0}}))}},this.query=this.query.find({$fts:$fts}).sortByScoring(),this):this;var $fts}},{key:"surround",value:function surround(slugOrPath){var _ref2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_ref2$before=_ref2.before,before=void 0===_ref2$before?1:_ref2$before,_ref2$after=_ref2.after,after=void 0===_ref2$after?1:_ref2$after,_key=0===slugOrPath.indexOf("/")?"path":"slug";this.onlyKeys&&this.onlyKeys.push(_key),this.withoutKeys&&(this.withoutKeys=this.withoutKeys.filter((function(key){return key!==_key})));var fn=function fn(data){var index=data.findIndex((function(item){return item[_key]===slugOrPath})),slice=new Array(before+after).fill(null,0);if(-1===index)return slice;for(var prevSlice=data.slice(index-before,index),nextSlice=data.slice(index+1,index+1+after),prevIndex=0,i=before-1;i>=0;i--)slice[i]=prevSlice[prevIndex]||null,prevIndex++;for(var nextIndex=0,_i=before;_i<=after;_i++)slice[_i]=nextSlice[nextIndex]||null,nextIndex++;return slice};return this.postprocess.push(fn),this}},{key:"limit",value:function limit(n){return"string"==typeof n&&(n=parseInt(n)),this.limitN=n,this}},{key:"skip",value:function skip(n){return"string"==typeof n&&(n=parseInt(n)),this.skipN=n,this}},{key:"fetch",value:(_fetch=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var data,fn,_fn,_iterator,_step,_fn2,_this=this;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.sortKeys&&this.sortKeys.length&&(this.query=this.query.compoundsort(this.sortKeys)),this.skipN&&(this.query=this.query.offset(this.skipN)),this.limitN&&(this.query=this.query.limit(this.limitN)),data=this.query.data({removeMeta:!0}),this.onlyKeys&&(this.options.watch&&this.onlyKeys.push("path","extension"),fn=function fn(data){return data.map((function(item){return pick(item,_this.onlyKeys)}))},this.postprocess.unshift(fn)),this.withoutKeys&&(this.options.watch&&(this.withoutKeys=this.withoutKeys.filter((function(key){return!["path","extension"].includes(key)}))),_fn=function _fn(data){return data.map((function(item){return omit(item,_this.withoutKeys)}))},this.postprocess.unshift(_fn)),_iterator=_createForOfIteratorHelper(this.postprocess);try{for(_iterator.s();!(_step=_iterator.n()).done;)_fn2=_step.value,data=_fn2(data)}catch(err){_iterator.e(err)}finally{_iterator.f()}if(data){_context.next=10;break}throw new Error("".concat(this.path," not found"));case 10:return _context.abrupt("return",JSON.parse(JSON.stringify(data)));case 11:case"end":return _context.stop()}}),_callee,this)}))),function fetch(){return _fetch.apply(this,arguments)})}]),QueryBuilder}();module.exports=QueryBuilder},1309:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(45),__webpack_require__(24),__webpack_require__(22),__webpack_require__(52),__webpack_require__(154),__webpack_require__(19),__webpack_require__(12),__webpack_require__(9),__webpack_require__(37),__webpack_require__(25);var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(78),_query_builder__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1295),_query_builder__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_query_builder__WEBPACK_IMPORTED_MODULE_11__),_lokidb_loki__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1300),_lokidb_loki__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_lokidb_loki__WEBPACK_IMPORTED_MODULE_12__),_lokidb_full_text_search__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1301);__webpack_require__.n(_lokidb_full_text_search__WEBPACK_IMPORTED_MODULE_13__).a.register();var db,items,dirs=["/","/de","/en","/de/projekte","/en/projects"],$content=function $content(){var options={},paths=[];Array.from(arguments).forEach((function(argument){"string"==typeof argument?paths.push(argument):"object"===Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_10__.a)(argument)&&(options=argument)}));var _options=options,_options$text=_options.text,text=void 0!==_options$text&&_options$text,_options$deep=_options.deep,deep=void 0!==_options$deep&&_options$deep,path="/".concat(paths.join("/").replace(/\/+/g,"/")),isDir=!path||!!dirs.find((function(dir){return dir===path})),query=isDir?{dir:deep?{$regex:new RegExp("^".concat(path))}:path}:{path:path},postprocess=isDir?[]:[function(data){return data[0]}];return new _query_builder__WEBPACK_IMPORTED_MODULE_11___default.a({query:items.chain().find(query,!isDir),path:path,postprocess:postprocess,text:text},{fullTextSearchFields:["title","description","slug","text"]})};__webpack_exports__.default=function(database){return(db=new _lokidb_loki__WEBPACK_IMPORTED_MODULE_12___default.a("content.db")).loadJSONObject(database),items=db.getCollection("items"),$content}}}]);
//# sourceMappingURL=plugin.js.fb8c729486a10c701ca8.bundle.js.map