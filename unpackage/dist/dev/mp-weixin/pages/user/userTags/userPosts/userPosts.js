(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/userTags/userPosts/userPosts"],{299:function(e,n,t){"use strict";(function(e,n){var r=t(4);t(26);r(t(25));var o=r(t(300));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t(1)["default"],t(2)["createPage"])},300:function(e,n,t){"use strict";t.r(n);var r=t(301),o=t(303);for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t(305);var s,a=t(32),c=Object(a["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],s);c.options.__file="pages/user/userTags/userPosts/userPosts.vue",n["default"]=c.exports},301:function(e,n,t){"use strict";t.r(n);var r=t(302);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},302:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return s})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));try{r={pageCard:function(){return t.e("components/pageCard/pageCard").then(t.bind(null,457))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},u=!1,s=[];o._withStripped=!0},303:function(e,n,t){"use strict";t.r(n);var r=t(304),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},304:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{userID:null,postData:null}},methods:{getData:function(){var n=this;e.$u.http.get("/bbs/getPostByUserID",{params:{user_id:"".concat(this.userID)}}).then((function(e){n.postData=e.data.data,console.log(n.postData)}))}},onLoad:function(e){this.userID=e.user_id},mounted:function(){this.getData()}};n.default=t}).call(this,t(2)["default"])},305:function(e,n,t){"use strict";t.r(n);var r=t(306),o=t.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},306:function(e,n,t){}},[[299,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/user/userTags/userPosts/userPosts.js.map