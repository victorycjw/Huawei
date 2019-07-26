<template>
    <div class="cart">
    <!-- 购物车 -->
       <!-- 1.全选按钮 -->
        <div class="selectAll">全选
            <input type="checkbox" @change="selectAll">
        </div>
        <!-- 2.商品列表 -->
        <div class="cart-item" v-for="(elem,i) of list" :key="i">
            <div class="leftImgText">
                <input type="checkbox" v-model="elem.cb">
                 <img :src="'http://127.0.0.1:3000/img/img/'+elem.img_url"  class="imgurl" alt="">
                <div class="price"><span>{{elem.price.toFixed(2)}}</span></div>
            </div>
            <mt-button @click="del" :data-id="elem.id">删除</mt-button>
        </div>
        <div>
            <!-- 删除选中的商品 -->
           <mt-button @click="delAll">删除选中的商品</mt-button>
           <h3 style="color:red">购物车的数量:{{$store.getters.getCartCount}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    data(){return{
        list:[]
    }},
    created() {
        this.loadMore();
    },
    methods: {
        //删除多个商品
        //1.创建变量保存空字符串
        delAll(){
            var str="";
            for(var elem of this.list){
                //cb数据获取来自 v-model=elem.cb双向绑定更新
                if(elem.cb){
                   str += elem.id+",";
                }
            }
            // 返回截取到的值
                str=str.substring(0,str.length-1);
                console.log(str);
                if(str.length==0){
                    this.$toast("请选中要删除的商品");
                    return;
                }
                //4.发送ajax请求
                var url="delAll";
                var obj={ids:str};
                this.axios.get(url,{params:obj}).then(result=>{
                    this.loadMore();
                }) 
        },
        //2.创建循环拼接字符串内容
        //3.拍段如果用户没选中内容
        //4.发送ajax请求
        //5.重新加载数据
        del(e){
            //获取当前商品的id
            var id=e.target.dataset.id
            console.log(id)
            //2.显示交互确认框
            this.$messagebox.confirm("是否删除此商品").then(action=>{
                //console.log(action)
                    var url="delitem"
                    var obj={id:id};
                    this.axios.get(url,{params:obj}).then(result=>{
                     //重新加载数据，相当于刷新
                       this.loadMore() 
                    })
            }).catch(err=>{
                return
            })
            // 异步无顺序
            //3.如果用户选择“确认”
            //4.发送ajax请求删除数据
            //5.如果用户取消则不删除
            //点击mt-button是点击删除，从数据库删除某一行           
        },
         selectAll(e){
            var cb=e.target.checked;
            console.log(cb)
            for(var elem of this.list){
                elem.cb=cb;
            }
        },
        loadMore(){
            //1.创建url
            var url="cart";
            this.axios.get(url).then(result=>{
               //获取服务器数组
               var rows=result.data.data;
               //2.创建循环为数组中的每一个对象的cb属性
               //cb控制商品前复选框
                for(var elem of rows){
                    //2.1添加cb属性
                    elem.cb=false;
                    //2.2更新购物车数量
                    this.$store.commit("increment")
                }
                //3.将新数据保存
                this.list=rows;
            })
        },
        // 复选框触发对象
    },

}
</script>
<style scoped>
.selectAll{display: flex;height:50px;align-items: center}
    .cart-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
    }
    .leftImgText{
        /* 默认子元素水平对齐 */
        display: flex;
        align-items: center;
        justify-content:space-around
    }
    .leftImgText img{
       width:50px;
       height:50px
    }
</style>