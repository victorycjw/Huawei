<template>
    <div class="cart">
        <!-- 购物车 -->
        <!-- 商品列表 -->
        <div class="cart-item" v-for="(item,i) of list" :key="i">
            <div class="leftImg">
                <input type="checkbox" v-model="item.cb">
                <img :src="'http://127.0.0.1:3000/img/'+item.img_url" alt="" class="imgurl">
                <div class="price">
                    <span>￥{{item.price.toFixed(2)}}</span>
                </div>
            </div>
            <mt-button @click="del" :data-id="item.id">删除</mt-button>
        </div>
        <div>
            <mt-button @click="delAll">删除选中的商品</mt-button>
            <h3>购物车的数量:
                <span>{{$store.getters.
            getCartCount}}</span>
        </h3>
        </div> 
        <!-- 1.全选按钮 -->
        <div class="seleAll">全选
            <input type="checkbox" @change="seleAll">
        </div>    
    </div>
</template>
<script>
export default {
    data(){
       return{
           list:[]
        }
    },
    created() {
        this.loadMore()
    },
    methods: {
        //删除多个商品
        //1.创建变量保存空字符串
        delAll(){
            var str="";
            for(var item of this.list){
                //cb数据获取来自 v-model=item.cb
                if(item.cb){
                    str +=item.id+","
                }
            }
            //返回截取到的值
            str=str.substring(0,str.length-1);
            //substring(0,count);长度.只要字母
            if(str.length==0){
                this.$toast("请选中要删除的商品");
                return;
            }
            //发送Ajax请求
            var url="pro/delAll";
            var obj={ids:str};
            this.axios.get(url,{params:obj}).then(result=>{
            //获取没有删除商品
             this.loadMore();
      });
        },
        del(e){
            //获取当前商品的id
            var id=e.target.dataset.id;
            //2.显示交互框确认
            // 3.如果用户选择"确认""
            this.$messagebox.confirm("是否删除此商品").then(action=>{
                var url="pro/delitem";
                var obj={id:id};
                this.axios.get(url,{params:obj}).then(result=>{
                    // 重新加载页面
                   this.loadMore()
                })
            }).catch(err=>{
                return;
            })
        },
        // 5.如果用户选择取消
       seleAll(e){
            //全选按钮状态
            var cb=e.target.checked;
            //依据状态修改列表cb
            for(var item of this.list){
                item.cb=cb;
            }
        },
        loadMore(){
            this.$store.commit("clear");
            //1.创建url
            var url="pro/cart";
            //发送ajax请求
            this.axios.get(url).then(result=>{
                //1.获取服务器的数组
                console.log(result)
                var rows=result.data.data;
                //创建循环为数组中的每一个对象添加cb属性
                //cb属性控制商品复选框
                for(var item of rows){
                    item.cb=false;
                    // 2.2更新购物车
                    this.$store.commit("increment")
                }
                //3.将数据保存
                this.list=rows;
            })
        }
    }
}
</script>
<style scoped>
.seleAll{
    display: flex;
    height:50px;
    align-items: center;
    margin-bottom:60px;
    }
    .cart-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        height:100px;
    }
    .leftImg{
        /* 默认子元素水平对齐 */
        display: flex;
        align-items: center;
        justify-content:space-around
    }
    .leftImg img{
       width:50px;
       height:50px
    }
</style>

