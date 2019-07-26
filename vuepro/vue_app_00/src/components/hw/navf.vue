<template>
    <div>
        <mt-navbar v-model="active" fixed>
            <mt-tab-item id="rcommend">推荐</mt-tab-item>
            <mt-tab-item id="hw" >华为</mt-tab-item>
            <mt-tab-item id="ry">荣耀</mt-tab-item>
            <mt-tab-item id="p30">p30</mt-tab-item>
            <mt-tab-item id="mod">数码汇</mt-tab-item>
            <mt-tab-item id="zn">智能家居</mt-tab-item>
        </mt-navbar>
        <!-- 面板 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="rcommend">
            </mt-tab-container-item>
            <mt-tab-container-item id="hw">
                <!-- 第二页面华为专区 -->
                <selepage></selepage>
            </mt-tab-container-item>
            <mt-tab-container-item id="ry">
                <!-- 第三荣耀专区 -->
                <honor></honor>
            </mt-tab-container-item>
            <mt-tab-container-item id="p30">fff</mt-tab-container-item>
            <mt-tab-container-item id="mod">bbb</mt-tab-container-item>
            <mt-tab-container-item id="zn">nnn</mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
// 第二个华为专场界面
import selepage from "./second_phone.vue"
// 第三荣耀专区
import honor from "./3honor.vue"
export default {
    data(){
        return{active:"rcommend"  }
    },
     methods:{
    },
    components:{
        "selepage":selepage,
        "honor":honor
    }
}
</script>
<style scoped>
.mint-navbar{
    margin-top:40px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #f00;
    color: #f00;
    margin-bottom: -3px;
}
</style>


