<template>
    <div>
        <!-- 面板 -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item  id="微信"><img src="../../assets/resource/01.png" alt=""></mt-tab-container-item>
            <mt-tab-container-item id="用户"><img src="../../assets/resource/02.png" alt=""></mt-tab-container-item>
            <mt-tab-container-item id="发现"><img src="../../assets/resource/03.png" alt=""> </mt-tab-container-item>
            <mt-tab-container-item id="我"><img src="../../assets/resource/04.png" alt=""></mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航栏 -->
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="微信">
                <img src="../../assets/resource/weichat (1).svg" slot="icon" alt="">
            </mt-tab-item>
            <mt-tab-item id="用户">
                <img src="../../assets/resource/weichat (2).svg" slot="icon" alt="">
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img src="../../assets/resource/weichat (3).svg" slot="icon" alt="">
            </mt-tab-item>
            <mt-tab-item id="我" >
                <img src="../../assets/resource/weichat (4).svg" slot="icon" alt="" >
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    props:{},
    data(){return{
        selected:"微信"
    }}
}
</script>
