(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1302:function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=function(){"use strict";var scheduleStart,throttleDelay,lazytimer,lazyraf,root="undefined"!=typeof window?window:null!=typeof global?global:this||{},requestAnimationFrame=root.cancelRequestAnimationFrame&&root.requestAnimationFrame||setTimeout,cancelRequestAnimationFrame=root.cancelRequestAnimationFrame||clearTimeout,tasks=[],runAttempts=0,isRunning=!1,remainingTime=7,minThrottle=35,throttle=125,index=0,taskStart=0,tasklength=0,IdleDeadline={get didTimeout(){return!1},timeRemaining:function(){var timeRemaining=remainingTime-(Date.now()-taskStart);return timeRemaining<0?0:timeRemaining}},setInactive=function debounce(fn){var id,timestamp,check=function(){var last=Date.now()-timestamp;last<99?id=setTimeout(check,99-last):(id=null,fn())};return function(){timestamp=Date.now(),id||(id=setTimeout(check,99))}}((function(){remainingTime=22,throttle=66,minThrottle=0}));function onInputorMutation(){125!=throttle&&(remainingTime=7,throttle=125,minThrottle=35,isRunning&&(function abortRunning(){isRunning&&(lazyraf&&cancelRequestAnimationFrame(lazyraf),lazytimer&&clearTimeout(lazytimer),isRunning=!1)}(),scheduleLazy())),setInactive()}function scheduleAfterRaf(){lazyraf=null,lazytimer=setTimeout(runTasks,0)}function scheduleRaf(){lazytimer=null,requestAnimationFrame(scheduleAfterRaf)}function scheduleLazy(){isRunning||(throttleDelay=throttle-(Date.now()-taskStart),scheduleStart=Date.now(),isRunning=!0,minThrottle&&throttleDelay<minThrottle&&(throttleDelay=minThrottle),throttleDelay>9?lazytimer=setTimeout(scheduleRaf,throttleDelay):(throttleDelay=0,scheduleRaf()))}function runTasks(){var task,i,len,timeThreshold=remainingTime>9?9:1;if(taskStart=Date.now(),isRunning=!1,lazytimer=null,runAttempts>2||taskStart-throttleDelay-50<scheduleStart)for(i=0,len=tasks.length;i<len&&IdleDeadline.timeRemaining()>timeThreshold;i++)task=tasks.shift(),tasklength++,task&&task(IdleDeadline);tasks.length?scheduleLazy():runAttempts=0}function requestIdleCallbackShim(task){return index++,tasks.push(task),scheduleLazy(),index}function cancelIdleCallbackShim(id){var index=id-1-tasklength;tasks[index]&&(tasks[index]=null)}if(root.requestIdleCallback&&root.cancelIdleCallback)try{root.requestIdleCallback((function(){}),{timeout:0})}catch(e){!function(rIC){var timeRemainingProto,timeRemaining;if(root.requestIdleCallback=function(fn,timeout){return timeout&&"number"==typeof timeout.timeout?rIC(fn,timeout.timeout):rIC(fn)},root.IdleCallbackDeadline&&(timeRemainingProto=IdleCallbackDeadline.prototype)){if(!(timeRemaining=Object.getOwnPropertyDescriptor(timeRemainingProto,"timeRemaining"))||!timeRemaining.configurable||!timeRemaining.get)return;Object.defineProperty(timeRemainingProto,"timeRemaining",{value:function(){return timeRemaining.get.call(this)},enumerable:!0,configurable:!0})}}(root.requestIdleCallback)}else root.requestIdleCallback=requestIdleCallbackShim,root.cancelIdleCallback=cancelIdleCallbackShim,root.document&&document.addEventListener&&(root.addEventListener("scroll",onInputorMutation,!0),root.addEventListener("resize",onInputorMutation),document.addEventListener("focus",onInputorMutation,!0),document.addEventListener("mouseover",onInputorMutation,!0),["click","keypress","touchstart","mousedown"].forEach((function(name){document.addEventListener(name,onInputorMutation,{capture:!0,passive:!0})})),root.MutationObserver&&new MutationObserver(onInputorMutation).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));return{request:requestIdleCallbackShim,cancel:cancelIdleCallbackShim}})?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}).call(this,__webpack_require__(53))}}]);
//# sourceMappingURL=22.fb8c729486a10c701ca8.bundle.js.map