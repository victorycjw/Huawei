// router.js 引入路由组件
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"
//1.引入Exam01.vue 组件
import Exam01 from "./components/exam/Exam01.vue"
//2.引入Exam02.vue组件
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import login from "./components/exam/login.vue"
import Exam05 from "./components/exam/Exam05.vue"
import Exam06 from "./components/exam/Exam06Container06.vue"
import Exam07 from "./components/exam/Exam_array.vue"
import Exam08 from "./components/exam/Exam_Tabbar08.vue"
import F10 from "./components/exam/F10.vue"
import homeWork from "./components/exam/homeWork.vue"
import wechat from "./components/exam/wechat/Home.vue"
import MessageList from "./components/exam/wechat/common/MessageList.vue"
import xz from "./components/xz/login.vue"
import exec from './components/exam/wechat/wx.vue'
import Home1 from "./components/xz/Home1.vue"
import pro from "./components/xz/product.vue"
import cart from "./components/xz/shoppingcart.vue"
import hwtitle from "./components/hw/p.vue"
import index from "./components/hw/index.vue"
import hb from "./components/hw/body.vue"
import pro1 from "./components/hw/tbody.vue"
import nab from "./components/hw/navf.vue"
import can from "./components/hw/carousel.vue"
import loghw from "./components/hw/login.vue"
import test from "./components/hw/sele_page.vue"
// import test from "./components/hw/mint-list.vue"
import hwcart from "./components/hw/shoppchart.vue"
import navt from "./components/hw/3honor_nav.vue"
import set from "./components/hw/test.vue"
import srcoll from "./components/hw/isrcoll.vue"
Vue.use(Router)
//2.为Exam01.vue 配置路径
export default new Router({
  routes: [
    {path:"/o",component:srcoll},
    {path:"/test",component:test},{
    path:"/exec",component:exec
  }, 
  {path:"/navt",component:navt},
  {path:"/hwcart",component:hwcart},
  {path:"/hw",component:hwtitle},
  {path:"/index",component:index},
  {path:"/set",component:set},
  {path:"/hb",component:hb}, 
  {path:"/pro1",component:pro1},
  {path:"/nab",component:nab},
  {path:"/can",component:can},
  {path:"/loghw",component:loghw},
    {path:"/Home1",component:Home1},
    {path:"/pro",component:pro},
    {path:"/cart",component:cart},
    {path:'/',
    component:HelloContainer},
    {//path:"/"必须有斜杠，且path内容也可以更改，component组件名可以更改 
    //但3着要保持一致import Exam01 
      path:"/Exam01",component:Exam01
    },
    {
      path:"/Exam02",component:Exam02
    },
    {
      path:"/Exam03",component:Exam03
    },
    {
      path:"/login",component:login
    },
    {
      path:"/Exam05",component:Exam05
    },
    {
      path:"/Exam06",component:Exam06
    },
    {path:"/Exam07",component: Exam07},
    {path:'/Exam08',component:Exam08},
    {path:"/F10",component:F10},
    {path:'/work',component:homeWork},
    {path:'/wechat',component:wechat},
    {path:"/MessageList",component:MessageList},
    {path:"/xz",component:xz}
  ]
})
