<template>
<!-- 子组件 -->
    <div class="title_heard">
       <span >{{leftTitle}}</span>
       <div class="right-title">
           <div @click="shine" class="left-pic">
               <img :src="timg1" alt="">
            </div>
            <span class="shu">|</span>
           <div @click="goback" class="right-pic">
               <img :src="timg2" alt="">
           </div>
       </div>
    </div>
</template>
<script>
export default {
    props:{
        leftTitle:{default:""},
        timg1:{default:""},
        timg2:{default:""},
        shine:{type:Function},
        goback:{type:Function}
    },
    data(){
        return{}
    }
}
</script>
<style scoped>
.title_heard{
    display: flex;
    position: fixed;
    z-index:999;
    width:100%;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    height:40px;
    color:#000;
    font-size:18px;
    padding-left:10px;
    /* margin-left:10px; */
    border-bottom:1px solid #ddd;
}
.right-title{
    display: flex;
    margin-right:20px;
    border:1px solid gray;
    border-radius: 12px;    
}
.left-pic,.right-pic,.shu{
    display: flex;
    align-items: center;
    margin:0 5px;
}
/* .shu{
    padding-right:2px;
} */
</style>