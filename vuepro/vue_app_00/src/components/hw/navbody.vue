<template>
    <div class="navbody">
        <div class="navd"><a href=""><img :src="navimg" alt="" class="titleimg"></a></div>
        <div class="navfont"><a href="">{{navTitle}}</a></div>
    </div> 
</template>
<script>
export default {
    props:{
        navimg:{default:""},
        navTitle:{default:""},
    },
    data(){
        return{}
    }
}
</script>
<style scoped>
.navbody{
    width:20%;
    display: flex;
}
.titleimg{
    width:100%;
    display: flex;
}
.navd{
    width:100%;
    display: flex;
}
</style>