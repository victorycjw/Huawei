<template>
    <div>
        <mt-swipe :auto="4000" @change="handleChange">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods: {
        handleChange(){
            console.log(1)
        }
    },
}
</script>
<style scoped>
.mint-swipe .mint-swipe-indicator{
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000 !important;
    opacity: 0 !important;
    margin: 0 3px;
}
.mint-swipe-indicator.is-active {
    background: #ffff00;
}
.mint-swipe {
    position: relative;
    height: 120px;
    margin-top:95px;
}
.mint-swipe-items-wrap .mint-swipe-item{
    background-repeat:no-repeat;
    background-size:100% 120px;  
    border-radius: 8px;
}
.mint-swipe-items-wrap .mint-swipe-item:first-child {
    background-image: url('../../img/carousal/1a37ff01-41aa-4a79-9094-3aadf29a8a16 (1).jpg');
}
.mint-swipe-items-wrap .mint-swipe-item:nth-child(2){
    background-image: url('../../img/carousal/1cce17df-fcf2-4af0-b649-a0108822e42e.jpg'); 
}
.mint-swipe-items-wrap .mint-swipe-item:nth-child(3){
    background-image: url('../../img/carousal/2e7861bc-950a-4515-8eb3-3a414624fa5e.jpg'); 
}
.mint-swipe-items-wrap .mint-swipe-item:nth-child(4){
    background-image: url('../../img/carousal/2eafb3de-b865-4a8d-b4fe-5a4365f498ec.jpg'); 
}
.mint-swipe-items-wrap .mint-swipe-item:nth-child(5){
    background-image: url('../../img/carousal/847b3c55-4abc-4ff6-85bd-14541a0e8ac8.jpg'); 
}
.mint-swipe-items-wrap .mint-swipe-item:nth-child(6){
    background-image: url('../../img/carousal/bc18e04b-b472-4575-86d8-e794c935be02.jpg'); 
}
.mint-swipe-items-wrap .mint-swipe-item:nth-child(7){
    background-image: url('../../img/carousal/d721973a-6ad9-4663-abe7-e31513e0cd09.png'); 
}
.mint-swipe-items-wrap .mint-swipe-item:nth-child(8){
    background-image: url('../../img/carousal/e337ee47-0642-4e73-bbd9-8ff76d1f27ee.png'); 
}
</style>
  
