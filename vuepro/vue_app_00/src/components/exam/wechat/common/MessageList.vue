<template>
    <div>
        <!-- {{list}} -->
        <!-- 消息子组件MessageList.vue  -->
        <!-- data的值去做循环 -->
        <!-- 3.调用子组件 -->
        <message v-for="(elem,i) of list.data" :key="i" :imgurl="require('../../../../assets/resource/05.png')"  :title="elem.title" :subtitle="elem.subtitle" :sendtime="elem.time" :id="elem.id" :itemClick='myclick' class="itemstyle"
        ></message>
    </div>
</template>
<script>
//1.引入子组件
import Message from "./Message"
//2.引入json文件[数据]
import messagejson from "../json/messagelist.json"
export default {
    data(){return{
        list:messagejson,
        id:"1",
    }},
    //2.注册子组件
    components:{
        "message":Message
    },
    methods: {
        myclick(){
            console.log(this.id)
        }
    },
}
</script>
<style scoped>
/* 消息外观 */
.itemstyle{
    padding:5px;
    border-bottom:1px solid #d9d9d9;
}

</style>
