<template>
    <div>
        <h4>切换面板</h4>
        <div>
            <!-- 1.为按钮绑定事件 -->
            <!-- 2.获取面板的下标 -->
            <!-- 3.将下标+1 -->
            <!-- 4.拼接字符串 -->
             <!-- <mt-button v-for="(elem,i) of arr" :key="i" @click.prevent="active=`tab${[i+1]}`">{{elem}}</mt-button> -->
             <!-- data-idx="i"通用 -->
             <mt-button v-for="(elem,i) of arr" :key="i" @click="setAction" :data-idx="i" >{{elem}}</mt-button>
        </div>
        <div>
            <mt-tab-container v-model="active" >
                <mt-tab-container-item id="tab1">去小寨去买烤猪蹄，烤鱿鱼，奶茶
                </mt-tab-container-item>  
                <mt-tab-container-item id="tab2">去钟楼买衣服，罗马仕逛逛
                </mt-tab-container-item> 
                <mt-tab-container-item id="tab3">去大雁塔去听听音乐
                </mt-tab-container-item> 
            </mt-tab-container>    
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:["美食","购物","休闲"],
            active:""
        }
    },
    methods: {
        setAction(e){
            //获取自定义属性
            var idx=parseInt(e.target.dataset.idx);
            //修改active值
            this.active='tab'+(idx+1);
            console.log(idx);
            console.log(this.active)
        }
    },
}
</script>