<template>
    <div>
        <!-- <mt-tab-container v-model="active">
            <mt-tab-container-item id="selet">
                <recommend></recommend>
            </mt-tab-container-item>
            <mt-tab-container-item id="hwp">
               <recommend></recommend>
            </mt-tab-container-item>
            <mt-tab-container-item id="horp">
               <recommend></recommend>
            </mt-tab-container-item>
            <mt-tab-container-item id="handp">
               
            </mt-tab-container-item>
            <mt-tab-container-item id="war">
               <wearable></wearable>
            </mt-tab-container-item>
            <mt-tab-container-item id="homej">
               
            </mt-tab-container-item>
            <mt-tab-container-item id="pares">
               
            </mt-tab-container-item>
            <mt-tab-container-item  id="aipro">
               
            </mt-tab-container-item>
        </mt-tab-container>
       <mt-tabbar v-model="active">
           <mt-tab-item id="selet">为您推荐</mt-tab-item> 
           <mt-tab-item id="hwp">华为手机</mt-tab-item> 
           <mt-tab-item  id="horp">荣耀手机</mt-tab-item> 
           <mt-tab-item id="handp">笔记本&平板</mt-tab-item> 
           <mt-tab-item id="war">智能穿戴</mt-tab-item> 
           <mt-tab-item  id="homej">智能家居</mt-tab-item> 
           <mt-tab-item  id="pares">专属配件</mt-tab-item> 
           <mt-tab-item  id="aipro">生态产品</mt-tab-item> 
       </mt-tabbar> -->
       <div class="sort">
           <!--v-bind class里面写的是判断条件，当样式为true时，该样式生效 -->
           <div v-bind:class="{ is_selected: status==0 }" @click="choose(0)">为您推荐</div>
           <div v-bind:class="{ is_selected: status==1 }" @click="choose(1)">华为手机</div>
           <div v-bind:class="{ is_selected: status==2 }" @click="choose(2)">荣耀手机</div>
           <div v-bind:class="{ is_selected: status==3 }" @click="choose(3)">笔记本&平板</div>
           <div v-bind:class="{ is_selected: status==4 }" @click="choose(4)">智能穿戴</div>
           <div v-bind:class="{ is_selected: status==5 }" @click="choose(5)">智能家居</div>
           <div v-bind:class="{ is_selected: status==6 }" @click="choose(6)">专属配件</div>
           <div v-bind:class="{ is_selected: status==7 }" @click="choose(7)">生态产品</div>
       </div>
       <div class="content" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
           <recommend></recommend>
       </div>
    </div>
</template>
<script>
// import wearable from "./watch_sort.vue"
 import recommend from "./sort_tuijian.vue"
export default {
    
    data(){
        return{
            status:0,
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    methods:{
        choose(n){
            console.log("choose~~~~~~~~~~!"+n)
            this.status=n;
        },
        handleTouchStart () {
            // console.log("touchstart~~!");
            this.touchStatus = true
        },
        handleTouchMove (e) {
        if (this.touchStatus) {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const touchY = e.touches[0].clientY-79
                // console.log(e.touches[0].clientY,this.startY);
                const index = Math.floor((touchY - this.startY) / 20)
                this.startY = e.touches[0].clientY
                console.log("touchmove:"+index);
                if (index >= 5) {
                    console.log("上滑事件");
                }
                if (index <= -5) {
                    console.log("下滑事件");
                }
            }, 16)
        }
        },
        handleTouchEnd () {
            // console.log("touchend~~!");
            this.touchStatus = false
        }
    },
     components:{
        // "wearable":wearable,
         "recommend":recommend
     }

}
</script>
<style scoped>
.sort{
    position: fixed;
    display: block;
    width:110px;
    /* bottom:50px; */
    /* margin-top:40px; */
    background-image:#fff;
}
.sort div{
    padding:20px 5px;
}
/* .mint-tab-container-item{
    flex-shrink:1;
    margin-left:80px;
}
.mint-tabbar{
    position: fixed;
    display: block;
    width:80px;
    bottom:50px;
    /* margin-top:40px; 
    background-image:#fff;
}
.mint-tab-item {
    padding:32px 0;
}
.mint-tabbar > .mint-tab-item.is-selected{
    color:#f00;
} */
.is_selected{
    color:#f00;
}
.content{
    margin-left:110px;
}
</style>


