(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/userComment/userComment"],{1172:function(e,t,n){"use strict";n.r(t);var o=n(1173),r=n(1175);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n(1177);var a,s=n(32),c=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);c.options.__file="components/userComment/userComment.vue",t["default"]=c.exports},1173:function(e,t,n){"use strict";n.r(t);var o=n(1174);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},1174:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return o}));try{o={uAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(n.bind(null,955))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,980))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},u=!1,a=[];r._withStripped=!0},1175:function(e,t,n){"use strict";n.r(t);var o=n(1176),r=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},1176:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"userComment",props:{datatime:{type:String,default:"2023-4-15 18:39"},commentData:{type:Object},propUserData:{type:Object}},data:function(){return{userData:this.propUserData,userName:null,deleteShow:!1,currentUser:null}},methods:{toPageDetail:function(){console.log(1111),e.navigateTo({url:"/pages/bbs/pageDetail/pageDetail?postID=".concat(this.commentData.post_id)})},deletComment:function(){var t=this.commentData,n=this;e.showModal({title:"提示",content:"确认要删除这条评论吗?",success:function(o){o.confirm?(console.log(t),e.$u.http.post("/bbs/deleteComment",{comment_id:"".concat(t.commment_id)}).then((function(t){e.showToast({title:"删除成功",duration:800}),n.$emit("resetCommentData",111)}))):o.cancel&&console.log("用户点击取消")}})}},onReady:function(){var t=e.getStorageSync("user_id");this.userData.nickname?this.userName=this.userData.nickname:this.userName="用户".concat(this.userData.user_id),t===this.userData.user_id&&(this.deleteShow=!0)}};t.default=n}).call(this,n(2)["default"])},1177:function(e,t,n){"use strict";n.r(t);var o=n(1178),r=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},1178:function(e,t,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/userComment/userComment.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/userComment/userComment-create-component',
    {
        'components/userComment/userComment-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1172))
        })
    },
    [['components/userComment/userComment-create-component']]
]);
