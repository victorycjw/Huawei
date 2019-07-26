<template>
    <div class="">
        <mt-field :placeholder="unameHolder" v-model="uname" class="myinput"></mt-field>
        <mt-field :placeholder="upwdHolder" v-model="upwd" class="myinput">
        </mt-field>
        <mt-button @click="login" size="large" class="mybutton" >登陆</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
        unameHolder:"请输入用户名",
        upwdHolder:"请输入密码",
        uname:"",
        upwd:""
    }},
    methods: {
        login(){
            //1.获取用户名和密码
           var uname=this.uname
           var upwd=this.upwd
            //2.创建正则表达式字母数字下滑线3~12
             //3.验证用户名 出错提示
             //4.验证密码
            var reg=/^\w{3,12}$/i;
            //不能写这个，会占用mysql的结果
            // if(reg.test(uname)==true&&reg.test(upwd)==true){
            //      this.$toast("登陆成功")
            // }else{
            //     this.$toast("用户名或密码错误")
            // }
            //效率较高的
             if(!reg.test(uname)){
                  this.$toast("用户名错误");
                  return
             }
             if(!reg.test(upwd)){
                 this.$toast("密码错误");
                 return 
             }
             //5.ajax请求
            this.axios.get('login',{
                params:{
                    // 名值对，最好把变量名和值名搞成一致
                    uname,
                    upwd,
                }
            }).then(result=>{
                //查看result的结果，json数组对象
                 console.log(result);
                if(result.data.code==-1){
                     this.$toast({
                        message:"用户名或密码错误",
                        duration:1500
                     })
                }else{
                     this.$toast({
                         message:"登录成功",
                         duration:1500
                     })
                     this.$router.push("/Home1")
                 }
            })        
        }
    },
}
</script>
<style>
    
</style>