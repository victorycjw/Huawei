<template>
    <div>
        <div>面板</div>
        <!-- 三个按钮 -->
        <!-- 绑定事件：image,a,button,sunbimt,video阻止默认行为 -->
        <div>
            <mt-button size="small" type="primary" @click.prevent="active='tab1'">面板1</mt-button>
            <mt-button size="small" type="danger" @click.prevent="active='tab2'">面板2</mt-button>
            <mt-button size="small"  @click.prevent="active='tab3'">面板3</mt-button>
        </div>
        <!-- 一个父面板，3个子面板 -->
        <div>
            <mt-tab-container v-model="active">
                <!-- 子面板 -->
                <mt-tab-container-item id="tab1">子面板1</mt-tab-container-item>
                <mt-tab-container-item id="tab2">子面板2</mt-tab-container-item>
                <mt-tab-container-item id="tab3">子面板3</mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"tab3"
        }
    },
}
</script>