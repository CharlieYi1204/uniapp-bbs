(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/pageCard/pageCard"],{457:function(t,e,n){"use strict";n.r(e);var o=n(458),a=n(460);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n(462);var s,r=n(32),u=Object(r["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],s);u.options.__file="components/pageCard/pageCard.vue",e["default"]=u.exports},458:function(t,e,n){"use strict";n.r(e);var o=n(459);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},459:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return o}));try{o={uToast:function(){return n.e("uni_modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,450))},uModal:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(n.bind(null,464))},uAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(n.bind(null,589))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,579))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c},i=!1,s=[];a._withStripped=!0},460:function(t,e,n){"use strict";n.r(e);var o=n(461),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},461:function(t,e,n){"use strict";(function(t){var o=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n(25)),i={name:"pageCard",props:{propUserHeadImgSrc:{type:String,default:""},propPageTime:{type:String,default:"2023/4/15"},imgBaseUrl:{type:String},propImgUrl:{type:Array},content:{type:String},title:{type:String},deletshow:{type:Boolean,default:!1},userCard:{type:Boolean,default:!1},collectCard:{type:Boolean,default:!1},propData:{type:Object,default:function(){return{id:null,user_id:null,create_time:"2023-4-20",title:"标题",content:"这里是内容",image:null}}}},data:function(){return{collectCard:!1,isStar:!1,$imgBaseUrl:a.default.prototype.$imgBaseUrl,isLike:null,likeCount:null,userAvatar:null,userName:null,commentNum:null,currentUserID:null,modalShow:!1,isDelete:!0}},methods:{addCollect:function(){var e=this;t.$u.http.post("/bbs/addCollect",{post_id:"".concat(this.propData.id),user_id:"".concat(this.currentUserID)}).then((function(t){e.isStar=!e.isStar})).catch((function(t){console.log(t)}))},cancelCollect:function(){var e=this;t.$u.http.post("/bbs/cancelCollect",{post_id:"".concat(this.propData.id),user_id:"".concat(this.currentUserID)}).then((function(t){e.isStar=!e.isStar})).catch((function(t){console.log(t)}))},getCollectState:function(){var e=this;t.$u.http.get("/bbs/getCollectState",{params:{user_id:"".concat(this.currentUserID),post_id:"".concat(this.propData.id)}}).then((function(t){e.isStar=t.data})).catch((function(t){console.log(t)}))},isFocus:function(){this.isStar?this.cancelCollect():this.addCollect()},toDeletePost:function(){var e=this;console.log(111),t.$u.http.post("/bbs/deletePost",{post_id:"".concat(this.propData.id),user_id:"".concat(this.propData.user_id)}).then((function(t){console.log("删除成功",t),e.modalShow=!1,e.$refs.uToast.show({type:"success",message:"删除成功",duration:800}),e.isDelete=!1})).catch((function(t){console.log(t)}))},deletPost:function(){this.modalShow=!0},hiddenModal:function(){this.modalShow=!1},getCommmentNum:function(){var e=this;t.$u.http.get("/bbs/getCommentCountByPostID",{params:{post_id:"".concat(this.propData.id)}}).then((function(t){e.commentNum=t.data[0].commentNum})).catch((function(t){console.log(t)}))},addVisitCount:function(){t.$u.http.get("/bbs/addVisitCount",{params:{post_id:"".concat(this.propData.id)}}).then((function(t){}))},getPostAuthor:function(){var e=this,n=this.propData.user_id;t.$u.http.get("/users/getIDTargetUser",{params:{user_id:"".concat(n)}}).then((function(t){var n=t.data.data[0];e.userAvatar=n.icon,n.nickname?e.userName=n.nickname:e.userName="用户".concat(n.user_id)}))},getLikesNum:function(){var e=this,n=this.propData.id;t.$u.http.get("/bbs/getLikesNum",{params:{post_id:"".concat(n)}}).then((function(t){e.likeCount=t.data.data[0].likesNum})),this.currentUserID=t.getStorageSync("user_id");var o=this.currentUserID;t.$u.http.get("/bbs/getIsLikes",{params:{post_id:"".concat(n),user_id:"".concat(o)}}).then((function(t){e.isLike=t.data}))},changeLikeStatus:function(){var e=this,n=this.propData.id;this.isLike?t.$u.http.get("/bbs/delLikes",{params:{post_id:"".concat(n),user_id:"".concat(this.currentUserID)}}).then((function(o){t.$u.http.get("/bbs/getLikesNum",{params:{post_id:"".concat(n)}}).then((function(t){e.likeCount=t.data.data[0].likesNum}))})):t.$u.http.get("/bbs/addLikes",{params:{post_id:"".concat(n),user_id:"".concat(this.currentUserID)}}).then((function(o){t.$u.http.get("/bbs/getLikesNum",{params:{post_id:"".concat(n)}}).then((function(t){e.likeCount=t.data.data[0].likesNum}))})),this.isLike=!this.isLike},toPageDetil:function(){var e=this.propData.id;this.addVisitCount(),t.navigateTo({url:"/pages/bbs/pageDetail/pageDetail?postID=".concat(e)})},toUserDetail:function(){t.navigateTo({url:"/pages/bbs/userDetail/userDetail?userID=".concat(this.propData.user_id)})}},mounted:function(){this.getPostAuthor(),this.getLikesNum(),this.getCommmentNum(),this.getCollectState()}};e.default=i}).call(this,n(2)["default"])},462:function(t,e,n){"use strict";n.r(e);var o=n(463),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},463:function(t,e,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/pageCard/pageCard.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/pageCard/pageCard-create-component',
    {
        'components/pageCard/pageCard-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(457))
        })
    },
    [['components/pageCard/pageCard-create-component']]
]);
