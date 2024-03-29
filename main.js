import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

//引入echarts
import * as echarts from '@/uni_modules/lime-echart/static/echarts.min'
// 标签自动布局，全局过渡动画等特性
import {LabelLayout,UniversalTransition} from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';

//引入拦截器
// import './router/index.js'
// Vue.prototype.hasLogin = async function () {
// 	const token = uni.getStorageSync("user_token")
// 	if (token) {
// 		try {
// 			const res = await uni.$u.http.get("/users/verifyToken", {
// 				header: {
// 					Authorization: `Bearer ${token}`
// 				}
// 			})
// 		const {code,message,user} = res.data;
// 				if (code == 200) {
// 					// 获取用户信息成功，更新页面数据)
// 					//this.useInfo.username = user.username
// 					return true
// 				} else {
// 					//token过期则清除token
// 					uni.removeStorageSync('user_token');
// 					uni.removeStorageSync('user_id');
// 					uni.setStorageSync('isLogin', false);
// 					return false
// 				}}
// 				catch(err) {
// 				console.log(err)
// 				return false
// 				}
// 	} else {
// 		uni.setStorageSync('isLogin', false);
// 		return false
// 	}
// }
//全局配置baseURL
uni.$u.http.setConfig((config) => {
    /* config 为默认全局配置*/
    config.baseURL = `http://localhost:3000`; /* 根域名 */
    return config
})
//设置图片的全局变量
Vue.prototype.$imgBaseUrl = 'http://localhost:3000';

//定义全局函数

try {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  // 统一 vue2 API Promise 化返回格式与 vue3 保持一致
  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }
      return new Promise((resolve, reject) => {
        res.then((res) => {
          if (res[0]) {
            reject(res[0]);
          } else {
            resolve(res[1]);
          }
        });
      });
    },
  });
} catch (error) { }

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif