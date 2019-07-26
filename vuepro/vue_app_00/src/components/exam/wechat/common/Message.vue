<template>
    <div class="rootstyle"  @click="itemClick(id)">
        <!-- 消息子组件message.vue -->
        <div class="leftimgandtxt">
            <img :src="imgurl" alt="" class="imgstyle">
            <div>
                <span class="rightOfImg title">{{title}}</span>
                <span class="subtitle">{{subtitle}}</span>
            </div>            
        </div>
        <span class="subtitle">{{sendtime}}</span>
    </div>
</template>
<script>
export default {
    props:{
        //声明接受元素数据
        imgurl:{default:""},
        title:{default:""},
        subtitle:{default:""},
        sendtime:{default:""},
        id:{default:""},
        itemClick:{type:Function}
    },
    data(){return{}}
}
</script>
<style scoped>
/* 根元素样式 */
.rootstyle{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/* 图片样式 */
.leftimgandtxt{
    display: flex;
    /* align-items: center; */
}
/* 图片的样式 */
.imgstyle{
    width:50px;height:50px;
}
/* 图片右侧文本 */
.rightOfImg{
    display: flex;
    /* 子元素程纵向排列 */
    flex-direction:column;
    justify-content:center;
    margin-left:7px;
}
/* 主标题 */
.title{
    color:#000;
    font-size:17px;
}
/* 子标题 */
.subtitle{
    color:gray;
    margin-top:4px;
}
/* 发送时间 */
.sendtime{
    color:gray;
}
</style>