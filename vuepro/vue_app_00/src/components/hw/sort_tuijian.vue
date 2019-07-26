<template>
    <div class="hw_phone">
        <div class="hot title" >HUAWEI P系列</div>
        <div class="prwit">
            <div v-for="(item,i) of list" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/phone/p/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
       <div class="hot">HUAWEI Mate系列</div>
        <div class="prwit">
            <div v-for="(item,i) of list2" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/phone/mate/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">HUAWEI Nova系列</div>
        <div class="prwit">
            <div v-for="(item,i) of list3" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/phone/nova/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">华为畅享系列</div>
        <div class="prwit">
            <div v-for="(item,i) of list4" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/phone/changx/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">荣耀系列</div>
        <div class="prwit">
            <div v-for="(item,i) of list5" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/honorp/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">荣耀畅玩系列</div>
        <div class="prwit">
            <div v-for="(item,i) of list6" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/phone/honorc/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">手环</div>
        <div class="prwit">
            <div v-for="(item,i) of list7" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/hand/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">手表</div>
        <div class="prwit">
            <div v-for="(item,i) of list8" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/watch/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">笔记本电脑</div>
        <div class="prwit">
            <div v-for="(item,i) of list9" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/computer/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">平板电脑</div>
        <div class="prwit">
            <div v-for="(item,i) of list10" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/bijiben/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">专属配件分类</div>
        <div class="prwit">
            <div v-for="(item,i) of list11" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/onlypj/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">智能家居分类</div>
        <div class="prwit">
            <div v-for="(item,i) of list12" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/typj/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
        <div class="hot">生态产品分类</div>
        <div class="prwit">
            <div v-for="(item,i) of list13" :key="i" class="goods_item">
                <img :src="'http://127.0.0.1:3000/img/al/'+item.img_url" alt="" class="rimg">
                <div class="p_title"><span>{{item.title}}</span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            list2:[],
            list3:[],
            list4:[],
            list5:[],
            list6:[],
            list7:[],
            list8:[],
            list9:[],
            list10:[],
            list11:[],
            list12:[],
            list13:[]
        }
    },
    created(){
        this.axios.get("pro/tj").then(result=>{
            this.list=result.data[0];
            this.list2=result.data[1];
            this.list3=result.data[2];
            this.list4=result.data[3];
            this.list5=result.data[4];
            this.list6=result.data[5];
            this.list7=result.data[6];
            this.list8=result.data[7];
            this.list9=result.data[8];
            this.list10=result.data[9];
            this.list11=result.data[10];
            this.list12=result.data[11];
            this.list13=result.data[12]
        })
    }
}
</script>
<style scoped>
.prwit{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    padding-bottom: 15px;
}
.goods_item{
    width:33.3%;
    border-radius: 8px;
    box-sizing: border-box;
     margin:10px 0; 
    padding:2px;
    display:flex;
    flex-direction: column;
    max-height:135px;
    border-radius: 5px;
}
.rimg{
    width:75%;
    height:70px;
    margin: 0 auto;
    /* padding:0 15px; */
}
.p_title{
    font-size:12px;
    text-align: center
}
.hot{
    display: block;
    text-align: center;
    padding:15px 0;
    font-family: \5FAE\8F6F\96C5\9ED1,"Helvetica Neue",Helvetica,Arial,sans-serif;
}
.hot.title{
    margin-top:40px;
}
.hw_phone{
    margin-bottom:57px;
}
</style>


