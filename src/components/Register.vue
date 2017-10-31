import { Header, Button, Field } from 'mint-ui';
Vue.component(Header.name, Header, Button.name, Button, Field.name, Field);

<template>
  <div class="content">
    <mt-header title="注册" class="header" fixed>
    </mt-header>
   	<h1 class="logo">健硕@JIANSHOU</h1>
    <div class="input-arean">
	    <mt-field label="账号/用户名" placeholder="请输入您的账号/用户名" v-model="username"></mt-field>
	    <mt-field label="密码" placeholder="请输入您的密码" type="password" v-model="password"></mt-field>
	    <mt-field label="确认密码" placeholder="重复输入您的密码" type="password" v-model="secPassword"></mt-field>
	     <mt-field label="推荐码" placeholder="请输入您的介绍人"  v-model="pid" readonly></mt-field>
    	<mt-button size="large" class="btn" v-on:click="regester">注册</mt-button>
    </div>
    <div class="footer">
      <p>健硕科技@JIANSHUO</p>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import Vue from 'vue';
export default {
  name: 'Regester',
  data () {
    return {
      username: '',
      password: '',
      secPassword: '',
      pid:''
    }
  },
  created: function() {
    this.pid = this.$route.params.pid;
  },
  methods: {
	regester: function () {
		if(!this.username){
			Toast('请输入账号/用户名');
		}else if(this.username.length<6||this.username.length>15){
			Toast('账号/用户名长度6-15位');
		}else if(!this.password){
			Toast('请输入密码');
		}else if(this.password.length<6 || this.password.length>15){
			Toast('密码长度6-15位');
		}else if(this.password != this.secPassword){
			Toast('两次密码不一致');
		}else {			
			let data = {
				userName:this.username, 
				password:this.password,
				pid:this.$route.params.pid
			}
			//Vue.http.options.xhr = { withCredentials: true }
			Vue.http.post('http://47.95.251.73:7600/user/register', data 
	 		).then((res)=>{
	 			if(res.body.status == 1){
	 				this.$router.push('/');
	 			}else{
	 				Toast(res.body.info);
	 			}
	 		}, function(err){
	 			Toast(JSON.stringify(err))
	 		});
		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    margin:0;
  }
  .content{
  	padding-top:44px;
  }
  .logo{
  	font-size: 28px;
  	font-weight: bold;
  }
  .input-arean{
  }
  .header {
      height:44px;
      background-color:#9160ff
  }
  .img-b{
    width: 100%
  }
  .header-info{
    padding-left: 5%;
  }
  .header-info p{
    margin:0;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }
  .btn{
    width: 90%;
    margin-left:5%;
    background: #9160ff;
    color:#fff;
    margin-top:20px;
  }
  .itme{
    text-align: center;
  }
  .itme-title{
    text-align: center;
    margin-top:20px;
    margin-bottom:0;
  }
  .item p{
    text-align: center;
    margin:0;
    font-size: 18px;
    font-weight: bold;
    color:#9160ff;
  }
  .img-p{
    max-width: 80%;
  }
  .footer{
  	position: absolute;
  	bottom:0;
  	right: 0;
  	left:0;
    margin-top: 12px;
    padding:12px;
    background-color:#9160ff;
    color:#fff;
  }
</style>
