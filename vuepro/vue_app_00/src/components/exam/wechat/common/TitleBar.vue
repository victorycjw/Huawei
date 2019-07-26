<template>
    <div  class="page-head"> 
        <span>{{leftTitle}}</span>
        <div class="right-head">
            <div @click="search" class="search"><img :src="rightFristImg" alt=""></div>
            <div @click="add2" class="search" style="margin-left:20px;"><img :src="rightLastImg" alt="" style="margin-right:15px;"></div>
        </div>
        <!-- 子组件 titltebar.vue -->
    </div>
</template>
<script>
export default {
    //左侧文字，和右侧的两张图片
    //props是子组件访问父组件数据的唯一接口
    //声明在prop中的变量可以引用父元素的数据
     props:{
         leftTitle:{default:""},
         rightFristImg:{default:""},
         rightLastImg:{default:""},
         search:{type:Function},
         add2:{type:Function}
     },
     data(){
         return {}
     },
}
</script>
<style scoped>
/* scoped样式在当前区域生效 */
/* 1.最外层父元素*/
.page-head{
    display: flex;
    position: fixed;
    z-index:999;
    width:100%;
    justify-content: space-between;
    align-items: center;
    background: #3e3a39;
    padding: 0 7px;
    height:48px;
    color:#fff;
    font-size:18px;
}
/* 2.右侧图片区域 */
.right-head{
    display: flex;
}
/* 3.图片 */
.search{
    display:flex;
    align-items: center;
    height:48px;
}
.search>img{
   width:25px;
}
</style>
