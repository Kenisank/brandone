/*!For license information please see tabs-with-icons.a2deea8e.js.LICENSE.txt*/(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[3027],{43253:function(e,n,t){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}t(68309),t(74916),t(23123),t(69600),t(24603),t(39714),t(15306),t(82526),t(41817),t(41539),t(32165),t(66992),t(78783),t(33948),function(n){var t="Modernizr"in n,i=n.Modernizr;!function(e,n,t,i){var a=[],r={_version:"3.11.8",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout((function(){n(t[e])}),0)},addTest:function(e,n,t){a.push({name:e,fn:n,options:t})},addAsyncTest:function(e){a.push({name:null,fn:e})}},s=function(){};s.prototype=r,s=new s;var A=[];function l(e,n){return o(e)===n}var c,d,f=t.documentElement,u="svg"===f.nodeName.toLowerCase();function p(e){var n=f.className,t=s._config.classPrefix||"";if(u&&(n=n.baseVal),s._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}s._config.enableClasses&&(e.length>0&&(n+=" "+t+e.join(" "+t)),u?f.className.baseVal=n:f.className=n)}function h(e,n){if("object"===o(e))for(var t in e)c(e,t)&&h(t,e[t]);else{var i=(e=e.toLowerCase()).split("."),a=s[i[0]];if(2===i.length&&(a=a[i[1]]),void 0!==a)return s;n="function"==typeof n?n():n,1===i.length?s[i[0]]=n:(!s[i[0]]||s[i[0]]instanceof Boolean||(s[i[0]]=new Boolean(s[i[0]])),s[i[0]][i[1]]=n),p([(n&&!1!==n?"":"no-")+i.join("-")]),s._trigger(e,n)}return s}c=l(d={}.hasOwnProperty,"undefined")||l(d.call,"undefined")?function(e,n){return n in e&&l(e.constructor.prototype[n],"undefined")}:function(e,n){return d.call(e,n)},r._l={},r.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),s.hasOwnProperty(e)&&setTimeout((function(){s._trigger(e,s[e])}),0)},r._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout((function(){var e;for(e=0;e<t.length;e++)(0,t[e])(n)}),0),delete this._l[e]}},s._q.push((function(){r.addTest=h})),s.addAsyncTest((function(){var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=e.shift();function t(e,n,t){var o=new Image;function i(n){var i=!(!n||"load"!==n.type)&&1===o.width;h(e,"webp"===e&&i?new Boolean(i):i),t&&t(n)}o.onerror=i,o.onload=i,o.src=n}t(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var o=0;o<e.length;o++)t(e[o].name,e[o].uri)}))})),function(){var e,n,t,o,i,r;for(var c in a)if(a.hasOwnProperty(c)){if(e=[],(n=a[c]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=l(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)1===(r=e[i].split(".")).length?s[r[0]]=o:(s[r[0]]&&(!s[r[0]]||s[r[0]]instanceof Boolean)||(s[r[0]]=new Boolean(s[r[0]])),s[r[0]][r[1]]=o),A.push((o?"":"no-")+r.join("-"))}}(),p(A),delete r.addTest,delete r.addAsyncTest;for(var g=0;g<s._q.length;g++)s._q[g]();e.Modernizr=s}(n,0,document),e.exports=n.Modernizr,t?n.Modernizr=i:delete n.Modernizr}(window)},98809:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});t(69826),t(41539),t(57327),t(73210),t(54747);var o=t(19755),i=t.n(o);t(27908),t(43511);function a(e){editmode||(i()('[data-slider="'.concat(e.id,'"]')).each((function(){var n=i()(this),t=new Array(e.options),o={maxSlides:1,adaptiveHeight:!0,preloadImages:"visible",touchEnabled:!0,oneToOneTouch:!0,swipeThreshold:100,pager:!0,controls:!0,infiniteLoop:!0,onSliderResize:function(){l()},onSliderLoad:function(){i()(".bx-clone").each((function(){i()(this).find("a").removeAttr("data-group")}))}},a=!!e.destroySlider&&e.destroySlider,r=!1,s=i()(this).children().filter((function(){return i().trim(i()(this).html())})).length,A=i()(".p-contact.old-template").length;function l(e){if(!a||window.innerWidth<=a.point){var s=window.innerWidth,A=i().extend({},o);t.length&&t[0].forEach((function(e){!isNaN(parseFloat(e.size))&&s>=parseFloat(e.size)&&(A=i().extend(A,e.props))})),r=r.reloadSlider?r:n.bxSlider(A),e<=1?r.destroySlider():r&&r.reloadSlider(A)}else r&&(r.destroySlider(),r=!1)}l(s),A>0&&setTimeout((function(){l(s)}),500),a&&i()(window).on("resize",(function(){l(s)})),n.on("reload-slider",l),n.find("img").one("load",(function(){n.parent().height()<n.height()&&n.parent().height(n.height())})),n.closest(".a-services__content-block").siblings(".a-services__tabs-container").find(".a-services__tabs-label").on("click",(function(e){var t=i()(this).data("slide-index");n.goToSlide(t),e.preventDefault(),e.stopPropagation()}))})),Waypoint.refreshAll())}},78246:function(e,n,t){"use strict";var o=t(19755),i=t.n(o),a=(t(43253),t(98809));i()(document).ready((function(){(0,a.Z)({id:"tabs-icons",class:"a-tabs-icons__content-container",options:[{size:0,props:{maxSlides:1,pager:!0,controls:!1,adaptiveHeight:!1,moveSlides:1,slideWidth:769,slideMargin:8}},{size:768,props:{maxSlides:1,pager:!0,controls:!1,slideMargin:0,speed:0,touchEnabled:!1,slideWidth:1133,pagerCustom:".a-tabs-icons__tabs-container"}}]})}))},69600:function(e,n,t){"use strict";var o=t(82109),i=t(1702),a=t(68361),r=t(45656),s=t(9341),A=i([].join),l=a!=Object,c=s("join",",");o({target:"Array",proto:!0,forced:l||!c},{join:function(e){return A(r(this),void 0===e?",":e)}})},21249:function(e,n,t){"use strict";var o=t(82109),i=t(42092).map;o({target:"Array",proto:!0,forced:!t(81194)("map")},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}},function(e){e.O(0,[9755,6055,1022,5306,6813,4603,8080,8661,7908],(function(){return n=78246,e(e.s=n);var n}));e.O()}]);