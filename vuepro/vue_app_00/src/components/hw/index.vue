<template>
    <div>
        <mt-tab-container v-model="active">
            <!-- 首页推荐 -->
            <mt-tab-container-item id="v">
                <!-- 头部 -->
                <titlelar></titlelar>
                <!-- 导航 -->
                <navtitle></navtitle>
                <!-- 轮播图 -->
                <carousel></carousel>
                <!-- 推荐好物 -->
                <recomm></recomm>
                <proinner></proinner>  
            </mt-tab-container-item>
            <!--分类 -->
            <mt-tab-container-item id="sort">
                <sortall></sortall>
            </mt-tab-container-item>
            <!-- 第三页面 -->
            <mt-tab-container-item id="seacher">
                 
            </mt-tab-container-item>
            <mt-tab-container-item id="shop">
                  <shopping></shopping>
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                <login></login>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航栏 -->
        <mt-tabbar v-model="active" fixed>
            <mt-tab-item id="v" @click.native="change(0)">
               <bottombar :selImg="require('../../img/f3.svg')" :noImg="require('../../img/f.svg')" :focused="currentIndex[0].isSelect"></bottombar>  
                首页
            </mt-tab-item >
            <mt-tab-item id="sort" @click.native="change(1)">
                 <bottombar :selImg="require('../../img/f3.svg')" :noImg="require('../../img/f.svg')" :focused="currentIndex[1].isSelect" ></bottombar>
                 分类 
            </mt-tab-item>
            <mt-tab-item id="seacher" @click.native="change(2)">
                 <bottombar :selImg="require('../../img/s.svg')" :noImg="require('../../img/s (1).svg')" :focused="currentIndex[2].isSelect" ></bottombar>
                 发现 
            </mt-tab-item>
            <mt-tab-item id="shop" @click.native="change(3)">
                 <bottombar :selImg="require('../../img/g2.svg')" :noImg="require('../../img/g.svg')" :focused="currentIndex[3].isSelect"></bottombar>
                 购物车 
            </mt-tab-item>
              <mt-tab-item id="me" @click.native="change(4)">
                 <bottombar :selImg="require('../../img/m2.svg')" :noImg="require('../../img/w.svg')" :focused="currentIndex[4].isSelect"></bottombar>
                 我的 
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
// 头部搜索
import titlelar from "./p.vue"
// 轮播图
import carousel from "./carousel"
// 底部导航栏
import bottomBar from "./bottom.vue";
// 首页主体内容
import proinner from "./tbody.vue";
// 头部导航
import navtitle from "./navf.vue";
// 推荐页面
import recomm from "./body.vue";
// 登陆页面
import login from "./login.vue";
// 购物车
import shopping from "./shoppchart.vue"
// 第三个荣耀专场
import honor from "./3honor.vue"
// 第二分类也
import sortall from "./sele_page"
export default {
    data(){
        return{
            active:"v",
         currentIndex:[
            {isSelect:true},
            {isSelect:false},
            {isSelect:false},
            {isSelect:false},
            {isSelect:false}
        ]  
        }
    },
    components:{
        "bottombar":bottomBar,
        "proinner":proinner,
        "titlelar":titlelar,
        "navtitle":navtitle,
        "recomm":recomm,
        "login":login,
        "shopping":shopping,
        "honor":honor,
        "sortall":sortall,
        "carousel":carousel

    },
    methods: {
        change(n){
           //1.n当前按钮下标
            //2.创建循环数据
            //3.如果当前下标与参数一致
            for(var i=0;i<this.currentIndex.length;i++){
                if(n==i){
                    this.currentIndex[i].isSelect=true;
                }else{
                    this.currentIndex[i].isSelect=false
                }           
            }
        }
    },
}
</script>
<style scoped>
/* 修改tabbar默认修改颜色 */
.mit-tabbar>.mint-tab-item{
    color:#999999;
}
/* 修改tabbar默认选中的颜色 */
.mint-tabbar>.mint-tab-item.is-selected{
   background-color: transparent;
   color:#f00;
}
</style>