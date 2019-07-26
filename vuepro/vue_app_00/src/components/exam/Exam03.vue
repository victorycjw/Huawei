<template>
    <div>
      <h1>表单输入域</h1>
      <div>
          <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxLength:10}" v-model="uname"></mt-field>
          <mt-field label="密码" placeholder="请输入6位密码" type="password" :attr="{maxlength:6}" v-model="upwd"></mt-field>
          <mt-field label="生日" placeholder="输入出生年月日" type="date" v-model="birthday"></mt-field>
          <button @click="submit">提交</button>
      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {uname:"",
            upwd:"",
            birthday:""
            }
        },
        methods: {
            submit(){
                this.$messagebox("不能为空")
            }
        },
    }
</script>
<style>
    
</style>
