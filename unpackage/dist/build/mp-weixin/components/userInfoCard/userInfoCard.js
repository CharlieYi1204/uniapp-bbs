(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/userInfoCard/userInfoCard"],{2283:function(t,e,n){"use strict";var u=n("7f54"),o=n.n(u);o.a},"58e0":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return u}));var u={uAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(n.bind(null,"9706"))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"85ff"))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,"872b"))}},o=function(){var t=this.$createElement;this._self._c},s=[]},"5a30":function(t,e,n){"use strict";n.r(e);var u=n("58e0"),o=n("ef4c");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("2283");var i=n("f0c5"),c=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=c.exports},"7f54":function(t,e,n){},e61d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"userInfoCard",props:{userData:{type:Object},userID:{type:Number}},data:function(){return{isFocused:!1}},methods:{toUserDeatil:function(){t.navigateTo({url:"/pages/bbs/userDetail/userDetail?userID=".concat(this.userData.user_id)})},isFoucs:function(){this.isFocused?this.cancleFouces():this.addFouces()},getFocusState:function(){var e=this;t.$u.http.get("/bbs/getFollowState",{params:{user_id:"".concat(this.userID),followed_id:"".concat(this.userData.user_id)}}).then((function(t){e.isFocused=t.data,console.log(e.isFocused)})).catch((function(t){console.log(t)}))},cancleFouces:function(){var e=this;t.$u.http.get("/bbs/cancleFollow",{params:{user_id:"".concat(this.userID),follow_id:"".concat(this.userData.user_id)}}).then((function(t){e.isFocused=!e.isFocused}))},addFouces:function(){var e=this;t.$u.http.get("/bbs/follows",{params:{user_id:"".concat(this.userID),follow_id:"".concat(this.userData.user_id)}}).then((function(t){e.isFocused=!e.isFocused}))}},mounted:function(){this.getFocusState()}};e.default=n}).call(this,n("543d")["default"])},ef4c:function(t,e,n){"use strict";n.r(e);var u=n("e61d"),o=n.n(u);for(var s in u)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(s);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/userInfoCard/userInfoCard-create-component',
    {
        'components/userInfoCard/userInfoCard-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5a30"))
        })
    },
    [['components/userInfoCard/userInfoCard-create-component']]
]);
