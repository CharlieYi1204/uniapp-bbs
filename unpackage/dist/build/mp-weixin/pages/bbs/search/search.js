(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bbs/search/search"],{"24fb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{keywords:"",navIndex:0,postData:"",userData:""}},methods:{getUserData:function(){var e=this;t.$u.http.get("/bbs/getTargetPostData",{params:{post_id:27}}).then((function(t){e.postData=t.data.data[0]})),t.$u.http.get("/users/getIDTargetUser",{params:{user_id:52}}).then((function(t){e.userData=t.data.data[0]}))},changeCateState:function(t){this.navIndex=1===t?1:0},getSearchData:function(){console.log(this.keywords)}},mounted:function(){this.getUserData()}};e.default=n}).call(this,n("543d")["default"])},"2f98":function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("0ba6");a(n("66fd"));var u=a(n("f540"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(u.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},a5f1:function(t,e,n){},c373:function(t,e,n){"use strict";n.r(e);var a=n("24fb"),u=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},dfa0:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uSearch:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-search/u-search")]).then(n.bind(null,"073f"))},pageCard:function(){return n.e("components/pageCard/pageCard").then(n.bind(null,"5a8c"))},userTitle:function(){return n.e("components/userTitle/userTitle").then(n.bind(null,"9db4"))}},u=function(){var t=this.$createElement;this._self._c},r=[]},f540:function(t,e,n){"use strict";n.r(e);var a=n("dfa0"),u=n("c373");for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("f750");var o=n("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=c.exports},f750:function(t,e,n){"use strict";var a=n("a5f1"),u=n.n(a);u.a}},[["2f98","common/runtime","common/vendor"]]]);