<template>
    <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" class="myname"></mt-field>
        <mt-field label="密码"  placeholder="请输入密码" v-model="upwd"></mt-field>
        <div class="modile"><img src="../../img/手机.svg" alt=""><a href=""> 手机短信密码验证</a></div>
        <mt-button size="large" class="mypwd" @click="login" type="danger">登录</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            upwd:"",
        }
    },
    methods: {
        login(){
            var uname=this.uname;
            var upwd=this.upwd;
            console.log(uname);
            var reg=/^\w{3,12}$/i;
            if(!reg.test(uname)){
                this.$toast("用户名格式错误");
                return
            }
            if(!reg.test(upwd)){
                this.$toast("密码不能少于4位");
                return;
            }
            this.axios.get("pro/login",
                {params:{
                uname,
                upwd
                }}
            ).then(result=>{
                console.log(result);
               if(result.data=="0"){
                   this.$toast({message:"用户名或密码错误，请重新输入",duration:1500});
               }else{
                   this.$toast({message:"登录成功",duration:1500});
                   this.$router.push("/hwcart")
               }
            })
        }
    }
}
</script>
<style>
.mint-cell-wrapper{
    border-bottom: 1px solid #ddd;
    width:150px;
}

.modile{
    display: flex;
   height:48px;
   line-height: 48px;
   margin-left:10px;
   font-size:12px;
}
.modile a{
    color:#000;
    text-decoration: none;
}
</style>

