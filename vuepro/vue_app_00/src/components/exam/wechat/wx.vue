<template>
    <div>
        <!-- 父组件 -->
    <!-- 调用子组件 -->
        <titlel messaged="微信(999)" :rightSearch="require('../../../assets/resource/ic_search.png')" :rightadd="require('../../../assets/resource/ic_add.png')" :search="myseach" :add1="myadd"></titlel>
    </div>
</template>
<script>
//引入导航栏子组件
import Titlel from "./common/title.vue"
export default {
    data(){return{
        
    }},
    //注册子组件、
    components:{
        "titlel":Titlel
    },
    methods: {
        myseach(){console.log(111)},
        myadd(){console.log(222)}
    },
}
</script>