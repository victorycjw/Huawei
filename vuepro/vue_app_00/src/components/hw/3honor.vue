<template>
    <div class="product_app" id="phone">
        <div class="prwit">
            <div class="goods_item" v-for="(item,i) of list" :key="i">
                <img :src="'http://127.0.0.1:3000/img/honorp/'+item.img_url" alt="" class="rimg"> 
                <div class="details">    
                    <div class="p_title">{{item.title}}</div>
                    <div class="p2_title">{{item.rise}}</div>
                    <div class="bor">
                        <span class="price_font">￥{{item.price}}</span>
                        <a href="#" class="chapimg">立即购买</a>
                        <a href=""> <img :src="'http://127.0.0.1:3000/img/'+item.chapImg" alt="" class="chapimg"></a>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        list:[]
    }},
    created(){
        this.axios.get("pro/honor").then(result=>{
            console.log(result)
            this.list=result.data;
        })
    }
    
}
</script>
<style scoped>
.bor{
    border:1px dashed #bbb;
}
.prwit{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin-top:100px;
}
.product_app .goods_item{
    width:48%;
    border-radius: 8px;
    box-sizing: border-box;
    margin:5px 0;
    padding:2px;
    display:flex;
    flex-direction: column;
    max-height:150px;
    border-radius: 5px;
}
.details{
    text-align: center;
}
.p_title{
    font-size:12px;
}
.p2_title{
    font-size: 10px;
    color:#808080
}
.price_font{
    font-size: 10px;
    color: #f00;
}
.product_app .goods_item .rimg{
    width:75%;
    height:75px;
    margin: 0 auto;
    /* padding:0 15px; */
}
.hot{
    text-align: center;
    padding:15px 0;
    font-family: \5FAE\8F6F\96C5\9ED1,"Helvetica Neue",Helvetica,Arial,sans-serif;
}
.chapimg{
    width:25px;
    padding-left:5px;
}
</style>


