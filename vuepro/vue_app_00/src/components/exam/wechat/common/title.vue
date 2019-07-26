<template>
    <div>
        <!--子组件  -->
        <div>
            <span>{{messaged}}</span>
            <div>
                <div @click="search"><img :src="rightSearch" alt=""></div>
                <div @click="add1"><img :src="rightadd" alt=""></div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {//接受父组件中的数据
// props接受父组件的数据，prop错误导致数据无法接收
   props:{
        messaged:{default:""},
        rightSearch:{default:""},
        rightadd:{default:""},
        search:{type:Function},
        add1:{type:Function}
    },
    data(){return{}}
}
</script>