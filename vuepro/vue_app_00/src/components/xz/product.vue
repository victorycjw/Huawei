<template>
    <div class="pro_title">
        <div v-for="(elem,i) of list" :key="i" class="pro_sun">
                <img :src="'http://127.0.0.1:3000/img/'+elem.img_url"  class="imgurl" alt="">
                <h5>{{elem.title}}</h5> 
                <div class="price">￥{{elem.price.toFixed(2)}}</div>              
        </div>
        <!-- 按钮 -->
        <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){return{
        list:[],
        pno:0,
        ps:4
    }},
     methods: {
         loadMore(){//加载更多的数据
            var url="product";
            this.pno++;
            var obj={pno:this.pno,pageSize:this.ps}
            this.axios.get(url,{params:obj}).then(result=>{
                // console.log(result)
                console.log(result.data.data);
                // this.list=result.data.data
                // concat数据拼接
                var rows=this.list.concat(result.data.data);
                this.list=rows;
            })
            }
        },
      created(){
             this.loadMore();
         }
}
</script>
<style>
   .pro_title{
       display:flex;
       flex-wrap: wrap;
       justify-content:space-between;
       padding:4px;
   } 
   .pro_sun{
    width:49%;
    border:1px solid #ddd;
    border-radius:15px;
    box-sizing: border-box;
    padding:2px;
    margin:2px 0;
    display: flex;
    flex-direction: column;
    min-height:247px;
   }
 .imgurl{
     width:100%
 }
 .price{
     color:cornflowerblue
 }
</style>