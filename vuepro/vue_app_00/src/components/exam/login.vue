<template>
    <div>
       <h1>用户登录</h1>
      <div>
          <mt-field label="用户名" placeholder="请输入用户名" :arrt="{maxLength:10}" v-model="uname"></mt-field>
          <mt-field label="密码" placeholder="请输入6位密码" type="password" :attr="{maxlength:6}" v-model="upwd"></mt-field>
          <mt-field label="生日" placeholder="输入出生年月日" type="date" v-model="birthday"></mt-field>
          <button @click="sublogin">提交</button>
      </div>
    </div>
</template>
<script>
export default {
    data(){return {
        uname:"",
        upwd:"",
        birthday:""
    }},
    methods: {
        sublogin(){
            //功能验证用户名
            //如果用户名为空 提示用户
            //如果密码为空 提示用户
            var u=this.uname;
            var p=this.upwd
            if(u==""||u.indexOf(" ")>0){
                this.$messagebox("用户名不能为空");
                return
            }
            if(p==""||p.indexOf(" ")>=0){
                this.$messagebox("密码不能为空");
                return
            }
        }
    }, 
}
</script>