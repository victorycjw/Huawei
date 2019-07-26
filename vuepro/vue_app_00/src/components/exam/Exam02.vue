<template>
    <div>交互提示框<br>
        <button @click="cici">奶油布丁</button>
        <button @click="conff">确认购买</button>
        <button @click="nono">不需要了</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        methods: {
            nono(){
               this.$messagebox.prompt("请输入年龄").then((value,action)=>{
                   //action就是确认框confirm
                   console.log(value)
               })
            },
            conff(){
                this.$messagebox.confirm("是否删除").then(action=>{
                    console.log(action)
                }).catch(err=>{
                    console.log(err)
                })
            },
            cici(){
                this.$messagebox("","llalalllll")
            }
        },
    }
    
</script>
<style>
    
</style>