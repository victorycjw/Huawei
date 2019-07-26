<template>
   <div>
      <h3>子组件 S09.vue</h3>
      <h3>{{msg}}</h3>
      <img :src="img_url" />
      <button @click="add3">
        点击事件
      </button>
   </div>
</template>
<script>
  export default {
    props:{    //声明接收父组件数据
      msg:{default:""},//消息 54
      img_url:{default:""},//图片
      add3:{type:Function}//函数
    },
    data(){
      return {}
    },
  }
 </script>
