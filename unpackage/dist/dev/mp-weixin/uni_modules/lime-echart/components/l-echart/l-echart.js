(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/lime-echart/components/l-echart/l-echart"],{1186:function(t,e,n){"use strict";n.r(e);var i=n(1187),a=n(1189);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(1193);var c,r=n(32),o=Object(r["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,"52a46d79",null,!1,i["components"],c);o.options.__file="uni_modules/lime-echart/components/l-echart/l-echart.vue",e["default"]=o.exports},1187:function(t,e,n){"use strict";n.r(e);var i=n(1188);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},1188:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return c})),n.d(e,"recyclableRender",(function(){return s})),n.d(e,"components",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},s=!1,c=[];a._withStripped=!0},1189:function(t,e,n){"use strict";n.r(e);var i=n(1190),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},1190:function(t,e,n){"use strict";(function(t){var i=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n(55)),s=i(n(13)),c=i(n(57)),r=n(1191),o=n(1192),h={name:"lime-echart",props:{type:{type:String,default:"2d"},customStyle:String,isDisableScroll:Boolean,isClickable:{type:Boolean,default:!0},enableHover:Boolean,beforeDelay:{type:Number,default:30}},data:function(){return{use2dCanvas:!0,width:null,height:null,nodeWidth:null,nodeHeight:null,canvasNode:null,config:{},inited:!1,finished:!1,file:"",platform:"",isPc:!1,isDown:!1,isOffscreenCanvas:!1,offscreenWidth:0,offscreenHeight:0}},computed:{canvasId:function(){return"lime-echart".concat(this._&&this._.uid||this._uid)},offscreenCanvasId:function(){return"".concat(this.canvasId,"_offscreen")},offscreenStyle:function(){return"width:".concat(this.offscreenWidth,"px;height: ").concat(this.offscreenHeight,"px; position: fixed; left: 99999px; background: red")},canvasStyle:function(){return this.width&&this.height?"width:"+this.width+"px;height:"+this.height+"px":""}},beforeDestroy:function(){this.clear(),this.dispose()},created:function(){var e=t.getSystemInfoSync(),n=e.SDKVersion,i=e.version,a=e.platform,s=e.environment;this.isPC=/windows/i.test(a),this.use2dCanvas="2d"===this.type&&(0,o.compareVersion)(n,"2.9.2")>=0&&!(/ios/i.test(a)&&/7.0.20/.test(i)||/wxwork/i.test(s))},mounted:function(){var t=this;this.$nextTick((function(){t.$emit("finished")}))},methods:{setChart:function(t){this.chart?"function"===typeof t&&this.chart&&t(this.chart):console.warn("组件还未初始化，请先使用 init")},setOption:function(){var t;this.chart&&this.chart.setOption?(t=this.chart).setOption.apply(t,arguments):console.warn("组件还未初始化，请先使用 init")},showLoading:function(){var t;this.chart&&(t=this.chart).showLoading.apply(t,arguments)},hideLoading:function(){this.chart&&this.chart.hideLoading()},clear:function(){this.chart&&this.chart.clear()},dispose:function(){this.chart&&this.chart.dispose()},resize:function(e){var n=this;e&&e.width&&e.height?(this.height=e.height,this.width=e.width,this.chart&&this.chart.resize(e)):this.$nextTick((function(){t.createSelectorQuery().in(n).select(".lime-echart").boundingClientRect().exec((function(t){if(t){var e=t[0],i=e.width,a=e.height;n.width=i=i||300,n.height=a=a||300,n.chart.resize({width:i,height:a})}}))}))},canvasToTempFilePath:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.use2dCanvas,a=this.canvasId,s=this.canvasNode;return new Promise((function(c,r){var o=Object.assign({canvasId:a,success:c,fail:r},n);i&&(delete o.canvasId,o.canvas=s),t.canvasToTempFilePath(o,e)}))},init:function(t){var e=arguments,n=this;return(0,c.default)(a.default.mark((function i(){var c,h,u,d,l,f,v;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(c=e.length,h=new Array(c>1?c-1:0),u=1;u<c;u++)h[u-1]=e[u];if(!(e&&e.length<1)){i.next=4;break}return console.error("缺少参数：init(echarts, theme?:string, opts?: object, callback: function)"),i.abrupt("return");case 4:if(d=null,l={},Array.from(e).forEach((function(t){"function"===typeof t&&(f=t),["string"].includes((0,s.default)(t))&&(d=t),"object"===(0,s.default)(t)&&(l=t)})),!n.beforeDelay){i.next=9;break}return i.next=9,(0,o.sleep)(n.beforeDelay);case 9:return i.next=11,n.getContext();case 11:if(v=i.sent,(0,r.setCanvasCreator)(t,v),n.chart=t.init(v.canvas,d,Object.assign({},v,l)),"function"!==typeof f){i.next=18;break}f(n.chart),i.next=19;break;case 18:return i.abrupt("return",n.chart);case 19:case"end":return i.stop()}}),i)})))()},getContext:function(){var e=this,n=this.use2dCanvas,i=o.devicePixelRatio;return new Promise(n?function(n){t.createSelectorQuery().in(e).select("#".concat(e.canvasId)).fields({node:!0,size:!0}).exec((function(t){var a=t[0],s=a.node,c=a.width,o=a.height;e.width=c=c||300,e.height=o=o||300;var h=s.getContext("2d"),u=new r.Canvas(h,e,!0,s);e.canvasNode=s,n({canvas:u,width:c,height:o,devicePixelRatio:i,node:s})}))}:function(n){t.createSelectorQuery().in(e).select("#".concat(e.canvasId)).boundingClientRect().exec((function(a){if(a){var s=a[0],c=s.width,h=s.height;e.width=c=c||300,e.height=h=h||300,i=e.isPC?o.devicePixelRatio:1,e.rect=a[0],e.nodeWidth=c*i,e.nodeHeight=h*i;var u=t.createCanvasContext(e.canvasId,e),d=new r.Canvas(u,e,!1);n({canvas:d,width:c,height:h,devicePixelRatio:i})}}))})},getRelative:function(t){return{x:t.pageX-this.rect.left,y:t.pageY-this.rect.top,wheelDelta:t.wheelDelta}},getTouch:function(t){return t.touches&&t.touches[0]&&t.touches[0].x?t.touches[0]:this.getRelative(t)},touchStart:function(t){if(this.isDown=!0,this.chart&&((t.touches.length>0||t.touches["0"])&&"mousemove"!=t.type||"mousedown"==t.type)){var e=this.getTouch(t);this.startX=e.x,this.startY=e.y,this.startT=new Date;var n=this.chart.getZr().handler;r.dispatch.call(n,"mousedown",e),r.dispatch.call(n,"mousemove",e),n.processGesture((0,o.wrapTouch)(t),"start"),clearTimeout(this.endTimer)}},touchMove:function(t){if(this.isPc&&this.enableHover&&!this.isDown&&(this.isDown=!0),this.chart&&((t.touches.length>0||t.touches["0"])&&"mousemove"!=t.type||"mousemove"==t.type&&this.isDown)){var e=this.chart.getZr().handler;r.dispatch.call(e,"mousemove",this.getTouch(t)),e.processGesture((0,o.wrapTouch)(t),"change")}},touchEnd:function(t){if(this.isDown=!1,this.chart){var e=t.changedTouches&&t.changedTouches[0]||{},n=e.x,i=(n?t.changedTouches[0]:this.getRelative(t))||{},a=this.chart.getZr().handler,s=Math.abs(i.x-this.startX)<10&&new Date-this.startT<200;r.dispatch.call(a,"mouseup",i),a.processGesture((0,o.wrapTouch)(t),"end"),s?r.dispatch.call(a,"click",i):this.endTimer=setTimeout((function(){r.dispatch.call(a,"mousemove",{x:999999999,y:999999999}),r.dispatch.call(a,"mouseup",{x:999999999,y:999999999})}),50)}}}};e.default=h}).call(this,n(2)["default"])},1193:function(t,e,n){"use strict";n.r(e);var i=n(1194),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},1194:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-echart/components/l-echart/l-echart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/lime-echart/components/l-echart/l-echart-create-component',
    {
        'uni_modules/lime-echart/components/l-echart/l-echart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1186))
        })
    },
    [['uni_modules/lime-echart/components/l-echart/l-echart-create-component']]
]);
