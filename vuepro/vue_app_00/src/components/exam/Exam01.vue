<template>
    <div>
    第一个组件，唯一根元素div
    <button @click="openToast">显示提示消息</button>
    </div>
</template>
<script>
    //导出默认对象
    export default{
        data(){//当前组件共享数据
            return {}//共享数据
        },
        methods: {
            openToast(){
                console.log(this)
                //显示短消息
              this.$toast({
                  message:"老师请讲",//内容
                  position:"middle",//位置
                  duration:3000,//持续时间
                  className:"mytoast",
                  iconClass:"iconfont icon-speak"
              })
            }
        },
    }
</script>
<style>
.mytoast{
    color:#0f0 !important;
    background:#666 !important;
    transition:all 2s linear !important;
}
.iconfont{
    font-size:64px !important;
    color:#f00;
}
</style>
