//第三方组件库
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上的三行固定位置，
//原因引入有序，不能随便改顺序
//第三方组件库在下面引入
//出现this.toast不是一个函数，证明一下三者任意没有引入成功
//1.完整引入mint-ui
import MintUI from "mint-ui"
//2.单独引入mint-ui的样式
import'mint-ui/lib/style.css'
//3.将mint-ui注册vue
Vue.use(MintUI);
//4.引入图标字体的样式文件
import "./font/iconfont.css"
//5.引入axios文件
import axios from "./axios"
// 10.引入iscroll模块
import IScrollView from 'vue-iscroll-view'
import iscroll from "iscroll"
Vue.use(IScrollView,iscroll);
//6.引入vuex模块
import Vuex from "vuex"
//7.注册一个vuex组件
Vue.use(Vuex)
//8.创建一个store
var store=new Vuex.Store({
  //vuex中全局共享的数据
  state:{cartCount:0},
  //修改vuex中全局共享的数据
  mutations:{
    //购物车加1
    increment(state){
      state.cartCount++
    },
    clear(state){
      state.cartCount = 0;
    },
    //购物车加指定值 多个
    updateCount(state,c){
      //原基础加c个
      state.cartCount+=c;
    }
    // miseCart(stata){
    //   state.cartCount--;
    // }
  },
  //获取vuex中全局共享的数据
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
})
//9.将store保存在vue实例中
Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
//import './lib/mui/css/icons-extra.css'
new Vue({
  router,
  render: h => h(App),
  //9.将store保存在vue实例中
  store
}).$mount('#app')
