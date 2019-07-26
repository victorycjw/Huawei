<template>
    <div>
        <h3>表单练习</h3>
        <h4>开关组件</h4>
        <mt-switch v-model="val3">开关</mt-switch>
        <h4>单选列表组件</h4>
        <mt-radio v-model="val2" :options="['选项a','选项b','选项c']"></mt-radio>
        <button @click="handleRadio">选中哪个</button>
        <mt-checklist title="复选框列表" v-model="val1" :options="['选项1','选项2','选项3']"></mt-checklist>
        <button @click="handleCheck">读取复选框内容</button>
    </div>
</template>
<script>
export default {
    data(){return{
        val3:false,
        val2:"选项a",
        val1:[]
    }},
    methods: {
        handleRadio(){
            if(this.val2!="选项a"){
                this.$messagebox(`请选择${this.val2}`)
            }
        },
        handleCheck(){
            console.log(this.val1)
        }
    },
}
</script>