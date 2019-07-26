<template>
    <div class="product">
        <div class="hot">- 爆品推荐 -</div>
        <div class="product_app">
            <div class="prwit" >
                <div class="goods_item" id="hot-width" v-for="(item,i) of list0" :key="i">
                    <img :src="'http://127.0.0.1:3000/img/hotpro/'+item.img_url" alt="" class="rimg">
                    <div class="details">
                        <div class="p_title">{{item.title}}</div>
                        <div class="p2_title" id="hot-font">{{item.rise}}</div>
                        <div class="price_font">￥{{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot">- 数码产品 -</div>
        <div class="product_app">
            <div class="prwit" >
                <div class="goods_item" id="hot-width" v-for="(item,i) of list3" :key="i">
                    <img :src="'http://127.0.0.1:3000/img/watch/'+item.img_url" alt="" class="rimg">
                    <div class="details">
                        <div class="p_title">{{item.title}}</div>
                        <div class="p2_title" id="hot-font">{{item.rise}}</div>
                        <div class="price_font">￥{{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product_app" id="phone">
            <div class="hot">- 电脑 -</div>
            <div class="prwit">
                <div  class="goods_item" id="computer" v-for="(item,i) of list2" :key="i" >
                    <img :src="'http://127.0.0.1:3000/img/computer/'+item.img_url" alt="" class="rimg"> 
                    <div class="details">    
                        <div class="p_title" id="com-font">{{item.title}}</div>
                        <div class="p2_title">{{item.rise}} </div>
                        <div>
                            <span class="price_font">￥{{item.price}}</span> 
                        </div>
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
             list0:[],
             list2:[],
             list3:[]
        }
    },
    created(){
        this.axios.get("pro/fpage").then(result=>{
            //console.log(result)
            this.list0=result.data[0]
            this.list2=result.data[1];
            this.list3=result.data[2];
        });
    }
}
</script>
<style scoped>
.hot-width{
    width:46%;
}
.prwit{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin-top:8px;
}
.product_app .goods_item{
    width:33.3%;
    border-radius: 8px;
    box-sizing: border-box;
    margin:2px 0;
    padding:2px;
    display:flex;
    flex-direction: column;
    max-height:135px;
    border-radius: 5px;
}
.details{
    text-align: center;
}
#hot-font,#com-font{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
#hot-width,#computer{
    width:49%;
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
#phone{
    margin-bottom: 60px;
}
</style>
