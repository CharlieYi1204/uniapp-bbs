(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/login/signup/signup"],{419:function(e,n,r){"use strict";(function(e,n){var t=r(4);r(26);t(r(25));var o=t(r(420));e.__webpack_require_UNI_MP_PLUGIN__=r,n(o.default)}).call(this,r(1)["default"],r(2)["createPage"])},420:function(e,n,r){"use strict";r.r(n);var t=r(421),o=r(423);for(var u in o)["default"].indexOf(u)<0&&function(e){r.d(n,e,(function(){return o[e]}))}(u);r(425);var i,s=r(32),a=Object(s["default"])(o["default"],t["render"],t["staticRenderFns"],!1,null,null,null,!1,t["components"],i);a.options.__file="pages/user/login/signup/signup.vue",n["default"]=a.exports},421:function(e,n,r){"use strict";r.r(n);var t=r(422);r.d(n,"render",(function(){return t["render"]})),r.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),r.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),r.d(n,"components",(function(){return t["components"]}))},422:function(e,n,r){"use strict";var t;r.r(n),r.d(n,"render",(function(){return o})),r.d(n,"staticRenderFns",(function(){return i})),r.d(n,"recyclableRender",(function(){return u})),r.d(n,"components",(function(){return t}));try{t={"u-Form":function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uview-ui/components/u--form/u--form")]).then(r.bind(null,990))},uFormItem:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(r.bind(null,996))},"u-Input":function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uview-ui/components/u--input/u--input")]).then(r.bind(null,1004))},uIcon:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(r.bind(null,963))},uButton:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uview-ui/components/u-button/u-button")]).then(r.bind(null,980))},uActionSheet:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uview-ui/components/u-action-sheet/u-action-sheet")]).then(r.bind(null,1034))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.showSex=!0,e.hideKeyboard()},e.e1=function(n){e.showSex=!1})},u=!1,i=[];o._withStripped=!0},423:function(e,n,r){"use strict";r.r(n);var t=r(424),o=r.n(t);for(var u in t)["default"].indexOf(u)<0&&function(e){r.d(n,e,(function(){return t[e]}))}(u);n["default"]=o.a},424:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){var n=this;return{model1:{userInfo:{username:"",password:"",nickname:null,gender:null},passwordSecond:""},showSex:!1,genderArr:[{name:"男"},{name:"女"},{name:"保密"}],rules:{"userInfo.username":[{type:"string",required:!0,message:"请填写姓名",trigger:["blur","change"]},{min:3,message:"长度不小于3"},{validator:function(n,r,t){return e.$u.test.enOrNum(r)},message:"账号只能包含数字和字母",trigger:["change","blur"]},{asyncValidator:function(n,r,t){e.$u.http.get("/users/getUserName",{params:{name:r}}).then((function(e){e.data.msg?t(new Error("该用户已存在")):t()}))},trigger:["change","blur"]}],"userInfo.nickname":[{min:0,max:15,message:"长度在0-15个字符之间"},{pattern:/^[\u4e00-\u9fa5A-Za-z0-9_]{0,15}$/,transform:function(e){return String(e)},message:"只能包含中文、数字、字母、下划线,且长度大于1"}],"userInfo.password":[{type:"string",required:!0,message:"请输入密码",trigger:["blur","change"]},{min:5,message:"长度不小于5"}],passwordSecond:[{type:"string",required:!0,message:"请再次输入密码",trigger:["blur","change"]},{validator:function(e,r,t){var o=n.model1.userInfo.password==r;return o},message:"与第一次输入的密码不匹配",trigger:["blur"]}]}}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{toLogin:function(){e.navigateTo({url:"/pages/user/login/login"})},hideKeyboard:function(){e.hideKeyboard()},sexSelect:function(e){this.model1.userInfo.gender=e.name},submit:function(){var n=this;this.$refs.form.validate().then((function(r){var t=n.model1.userInfo;"男"===t.gender?t.gender=1:"女"===t.gender?t.gender=0:t.gender=-1,e.$u.http.post("/users/register",{username:t.username,nickname:t.nickname,password:t.password,gender:t.gender},{dataType:"json"}).then((function(n){console.log(n),e.$u.toast(n.data.msg),"注册成功"==n.data.msg&&setTimeout((function(){e.navigateTo({url:"/pages/user/login/login"})}),500)})).catch((function(e){console.log(e)}))})).catch((function(n){console.log(n),e.$u.toast("注册失败")}))}}};n.default=r}).call(this,r(2)["default"])},425:function(e,n,r){"use strict";r.r(n);var t=r(426),o=r.n(t);for(var u in t)["default"].indexOf(u)<0&&function(e){r.d(n,e,(function(){return t[e]}))}(u);n["default"]=o.a},426:function(e,n,r){}},[[419,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/user/login/signup/signup.js.map