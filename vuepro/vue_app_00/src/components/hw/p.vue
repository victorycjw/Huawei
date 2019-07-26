<template>
    <div>
        <!-- 父组件 -->
    <hwtitle leftTitle="华为商城+" :timg1="require('../../img/menu (1).svg')" :timg2="require('../../img/menu (2).svg')" :shine="myshare" :goback="gback">
    </hwtitle>
    </div>
</template>
<script>
import hwtitle from "./s.vue"
export default {
    data(){
        return{}
    },
    methods: {
      myshare(){
          console.log(123)
      },
      gback(){console.log(456)},  
    },
    components:{
        "hwtitle":hwtitle
    }
}
</script>