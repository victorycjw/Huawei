<template>
   <div>
        <div class="product_app">
            <div class="hot">- 爆品专区 -</div>
            <div class="prwit">
                <div class="goods_item" v-for="(item,i) of list2" :key="i">
                    <img :src="'http://127.0.0.1:3000/img/hotpro/'+item.img_url" alt="" class="rimg"> 
                    <div class="details">    
                        <div class="p_title">{{item.title}}</div>
                        <div class="p2_title">{{item.rise}}</div>
                        <div>
                            <span class="price_font">￥{{item.price}}</span>
                            <a href=""> <img :src="'http://127.0.0.1:3000/img/'+item.chapImg" alt="" class="chapimg"></a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
       <div class="product_app">
            <div class="tj_phone">- 手机专区 -</div>
            <div class="prwit">
                <div class="goods_item" v-for="(item,i) of list" :key="i">
                    <img :src="'http://127.0.0.1:3000/img/phone/'+item.img_url" alt="" class="rimg"> 
                    <div class="details">    
                        <div class="p_title">{{item.title}}</div>
                        <div class="p2_title">{{item.rise}}</div>
                        <div>
                            <span class="price_font">￥{{item.price}}</span>
                            <a href=""> <img :src="'http://127.0.0.1:3000/img/'+item.chapImg" alt="" class="chapimg"></a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        <!-- 视频广告 -->
        <video width="100%" height="140px" controls class="video1">
            <source src="../../img/vodie/da6f7293-b335-4ab3-863d-538638385b47.mp4" type="video/mp4">
        </video>
        <video width="100%" height="140px" controls class="video1">
            <source src="../../img/vodie/ead30cb6-9ee2-4f9a-9ef6-3710e934c22f.mp4" type="video/mp4">
        </video>
    </div>   
</template>
<script>
export default {
    data(){
        return{
            list:[],
            list2:[],
            keepTime: '',
            limittime:300,
            settime: '',
            flag: false
        }
    },
     created() {
      this.axios.get("pro/sele").then(result=>{
          console.log(result);
        this.list=result.data[0];
        this.list2=result.data[1];
      }) 
    }
}
</script>

<style scoped>
.prwit{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    /* margin-top:80px; */
}
.product_app .goods_item{
    width:46%;
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
    width:80%;
    height:75px;
    margin: 0 auto;
    /* padding:0 15px; */
}
.hot{
    text-align: center;
    margin-top:100px;
    padding:20px 0;
    font:16px "Helvetica Neue";
}
.tj_phone{
    padding:20px 0;
    text-align: center;
    font:16px "Helvetica Neue";
}
.chapimg{
    width:25px;
    padding-left:5px;
}
/* 视频 */
.video1{
    margin:15px 0;
}
</style>



