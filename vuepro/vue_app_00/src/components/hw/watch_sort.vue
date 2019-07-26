<template>
<div>
    <div class="hot">手环</div>
    <div class="prwit">
        <div v-for="(item,i) of list2" :key="i" class="goods_item">
            <img :src="'http://127.0.0.1:3000/img/watch/'+item.img_url" alt="" class="rimg">
            <div class="p_title">{{item.title}}</div>
        </div>
    </div>
    <div class="hot">手表</div>
    <div class="prwit">
        <div v-for="(item,i) of list" :key="i" class="goods_item">
            <img :src="'http://127.0.0.1:3000/img/watch/'+item.img_url" alt=""  class="rimg">
            <div class="p_title">{{item.title}}</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            list2:[]
        }
    },
    created(){
        this.axios.get("pro/sort").then(result=>{
            this.list=result.data[0];
            this.list2=result.data[1];
        });
    }
}
</script>
<style scoped>
.prwit{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin-top:8px;
}
.goods_item{
    width:33.3%;
    border-radius: 8px;
    box-sizing: border-box;
    margin:5px 0;
    padding:2px;
    display:flex;
    flex-direction: column;
    max-height:135px;
    border-radius: 5px;
}
.rimg{
    width:75%;
    height:75px;
    margin: 0 auto;
    /* padding:0 15px; */
}
.p_title{
    font-size:12px;
    margin:0 auto;
}
.hot{
    display: block;
    text-align: center;
    padding:15px 0;
    font-family: \5FAE\8F6F\96C5\9ED1,"Helvetica Neue",Helvetica,Arial,sans-serif;
}
</style>


