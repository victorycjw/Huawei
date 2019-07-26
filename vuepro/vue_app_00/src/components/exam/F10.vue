<template>
    <div>
       <div>
      <h3>父组件 F10</h3>
      <s09
        msg="微信(11)"
        :img_url="require('../../assets/resource/02.png')"
        :add3="myadd"
      >
      </s09>
   </div>
   </div>
</template>
<script>
 //1:引入子组件
  import S09 from "./S09";
  export default {
    data(){
      return {}
    },
    methods:{
      myadd(){
        console.log(123)
      }
    },
    components:{//2:注册子组件
       "s09":S09
    }

  }
</script>
