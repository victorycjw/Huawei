<template>
    <div>
        <h3>底部导航栏</h3>
        <!-- 面板 -->
        <mt-tab-container v-model="selected" >
            <mt-tab-container-item id="外卖">
                外卖
            </mt-tab-container-item >
            <mt-tab-container-item id="美团">
                美团
            </mt-tab-container-item>
            <mt-tab-container-item id="饿了么">
                饿了么
            </mt-tab-container-item>
            <mt-tab-container-item id="达达">
                达达
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航栏 -->
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="外卖">
                <img src="../../assets/resource/01.png" slot="icon" alt="" >
            </mt-tab-item>
            <mt-tab-item id="美团">
                <img src="../../assets/resource/02.png" slot="icon" alt="">
            </mt-tab-item>
            <mt-tab-item id="饿了么"  >
                <img src="../../assets/resource/03.png" slot="icon" alt="">
            </mt-tab-item>
            <mt-tab-item id="达达">
                <img src="../../assets/resource/04.png" slot="icon" alt="">
            </mt-tab-item>
        </mt-tabbar>   
    </div>
</template>
<script>
export default {
    props:{},
    data(){return{
        selected:"外卖"
    }},
}
</script>