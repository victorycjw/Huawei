<template>
    <div class="wechat_container">
        <!-- 防止外边距溢出 -->
        <div class="page_wrap">
            <titlebar leftTitle="微信(11)" :rightFristImg="require('../../../assets/resource/ic_search.png')" :rightLastImg="require('../../../assets/resource/ic_add.png')" :search="mysearch" :add2="myadd2"> 
            </titlebar>
            <!-- 2.防止顶部内溢出-->
            <div style="margin-top:48px"></div>
            <!-- 3.面板 1父面板 4子面板 -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="message">dddddd
                    <messagelist>
                    </messagelist>
                </mt-tab-container-item>
                <mt-tab-container-item id="contact">222
                    <messagelist>
                    </messagelist>
                </mt-tab-container-item>
                <mt-tab-container-item id="find">333
                    <messagelist>
                    </messagelist>
                </mt-tab-container-item>
                <mt-tab-container-item id="me">444
                    <messagelist>
                    </messagelist>
                </mt-tab-container-item>
            </mt-tab-container>
        <!-- 4.底部导航条 -->
            <mt-tabbar v-model="active" fixed>
                <mt-tab-item id="message" @click.native="changeState(0)">
                    <tabbaricon :selectedImage="require('../../../assets/resource/ic_weixin_selected.png')"
                    :normalImage="require('../../../assets/resource/ic_weixin_normal.png')"
                    :focused="currentIndex[0].isSelect">     
                    </tabbaricon>
                    微信
                </mt-tab-item>
                <mt-tab-item id="contact" @click.native="changeState(1)">
                    <tabbaricon :selectedImage="require('../../../assets/resource/ic_contacts_selected.png')"
                    :normalImage="require('../../../assets/resource/ic_contacts_normal.png')"
                    :focused="currentIndex[1].isSelect">     
                    </tabbaricon>
                    通讯录
                </mt-tab-item>
                <mt-tab-item id="find" @click.native="changeState(2)">
                    <tabbaricon :selectedImage="require('../../../assets/resource/ic_find_selected.png')"
                    :normalImage="require('../../../assets/resource/ic_find_normal.png')"
                    :focused="currentIndex[2].isSelect">     
                    </tabbaricon>
                    发现
                </mt-tab-item>
                <mt-tab-item id="me" @click.native="changeState(3)">
                    <tabbaricon :selectedImage="require('../../../assets/resource/ic_me_selected.png')"
                    :normalImage="require('../../../assets/resource/ic_me_normal.png')"
                    :focused="currentIndex[3].isSelect">     
                    </tabbaricon>
                    发现
                </mt-tab-item>
            </mt-tabbar>
    </div>
</div>
</template>
<script>
//导入顶部导航栏 TitleBar注册组件名和下面保持一致即可
import TitleBar from "./common/TitleBar.vue"
// import
import MessageList from "./common/MessageList.vue" 
//引入子组件
import TabBarIcon from "./common/TabBarIcon.vue"
export default {
    data(){return{
        active:"message",
        currentIndex:[
            {isSelect:true},
            {isSelect:false},
            {isSelect:false},
            {isSelect:false},
        ]  
    }},
    //2.注册顶部导航条子组件
    components:{
        "titlebar":TitleBar,
        //注册标签必须小写
        "messagelist":MessageList,
        "tabbaricon":TabBarIcon
    },
    methods:{
        mysearch(){
             console.log(123)
        },
        myadd2(){
             console.log(456)
        },
        changeState(n){
            console.log(123);
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
.wechat_container{
    overflow: hidden;
}
.page_wrap{
    overflow: auto;
    padding-bottom: 60px;
}
/* 修改tabbar默认修改颜色 */
.mit-tabbar>.mint-tab-item{
    color:#999999;
}
/* 修改tabbar默认选中的颜色 */
.mint-tabbar>.mint-tab-item.is-selected{
   background-color: transparent;
   color:#45c018;
}
</style>
