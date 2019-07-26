<template>
<div class="nav_title">
        <!-- 官方认证 -->
        <div class="auth">
            <div><img src="../../img/选中 (1).svg" alt=""><span> 官方商城</span></div>
            <div><img src="../../img/选中 (1).svg" alt=""> <span>正品保障</span></div>
            <div><img src="../../img/选中 (1).svg" alt=""> <span>售后无忧</span></div>
        </div>
        <div class="nav_pire">
            <div v-for="(item,i) of list" :key="i">
                <img :src="'http://127.0.0.1:3000/img/nav_sel/'+item.img_url" alt="" class="img0">
                <div class="details"><span class="nav-f">{{item.title}}</span></div>
            </div>
        </div>
        <!-- 推荐轮播 -->
    <div class="tj_car">
        <div class="mg">限时购 <img src="../../img/go.png" alt="" class="img1"><span type="text" v-text="keepTime"></span></div>
        <div class="senr">
            <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1560758954741mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">华为平板M6</a></div>
            </div>
            <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1539230426520mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">荣耀8x</a></div>
            </div>
            <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1539243364035mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">hw手表GT</a></div>
            </div>
                <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1543910753321mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">荣耀平板5.10.1</a></div>
            </div>
            <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1539912870678mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">华为40w快充移动电源</a></div>
            </div>
            <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1540987820121mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">荣耀Note10</a></div>
            </div>
            <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1542771943501mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">FlyPods青春版</a></div>
            </div>
            <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1542853081338mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">FreeBuds系列</a></div>
            </div>
            <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1543910753321mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">荣耀</a></div>
            </div>
                <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1543910753321mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">最高优惠</a></div>
            </div>
                <div class="navbody">
                <div class="navd"><a href=""><img src="../../img/428_428_1543910753321mp.png" alt="" class="titleimg"></a></div>
                <div class="navfont"><a href="">最高优惠</a></div>
            </div>
        </div>
    </div>
    <!-- 广告栏
    <div v-show="isPoup">
        <button type="button" class=btn @click="showPopup"></button>
    </div> -->
</div>
</template>
<script>

export default {
    data(){return{list:[],
            keepTime: '',
            limittime:300,
            settime: '',
            flag: false
    }},
    created() {
        // 获取现在的时间
        var mydate=new Date();
        mydate.setMinutes(mydate.getMinutes() + this.limittime);
        this.settime=mydate;
        let time = setInterval(() => {
                 if (this.flag == true) {
                    clearInterval(time)
                 }
             this.timeDown()
         }, 100);
         this.axios.get("pro/nav_s").then(result=>{
            console.log(result)
            this.list=result.data;
        })
    },
    methods:  {
        timeDown() {
            const endTime = new Date(this.settime);
            const nowTime = new Date();
            let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
            let d = parseInt(leftTime / (24 * 60 * 60));
            let h = this.formate(parseInt(leftTime / (60 * 60) % 24));
            let m = this.formate(parseInt(leftTime / 60 % 60));
            let s = this.formate(parseInt(leftTime % 60));
            if (leftTime <= 0) {
                this.flag = true;
            }
            this.keepTime = `${h}:${m}:${s}`;
        },
        formate (time) {
            if (time >= 10) {
                return time
            } else {
                return `0${time}`
            }
        }
}
}
</script>
<style scoped>
/* 推荐专栏 */
.navd{
    width:80px;
}
.nav_pire{
    display: flex;
    justify-content: space-around;
    margin:10px 0;
}
.nav_pire>div{
    width:60px;
    max-height:80px;
    text-align: center;
}
.img0{
    max-width:35px;
    max-height:35px;
    border-radius:60%;
    font-weight: 800;
}
.details{
    display: flex;
    justify-content: center
}
/* 官方认证 */
.auth{
    display: flex;
    justify-content: space-between;
    padding:0 10px;
    margin-top:5px;
}
.auth div,.nav_pire .nav-f{
    font-size:12px;
    color:#8a8a8a;
    display: flex;
}
.auth div span{
    padding-left:4px;
}
.senr{
    display: flex;
}
.mint-navbar .mint-tab-item{
    border-bottom: 2px solid #fff; 
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
}
/* 限时购 */
.mg{
 display: flex;
 justify-content: center;
}
.mg>span{
     padding:0 5px;
}
.img1{
    padding-left:5px;
}
.hwnav{
     display: flex;
     justify-content: space-between;
}
.navbody{
    width:75px;
    height:75px;
    border:1px solid #ddd;
    border-radius: 8px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    text-align: center;
    margin-left:10px;
    margin-top:10px;
}
.titleimg{
    width:40px;
    height:46px;
}
.navfont{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.navfont a{
    text-decoration: none;
    font-size:8px;
    color:#000;
}
</style>