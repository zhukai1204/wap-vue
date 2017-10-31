import { Header, Button } from 'mint-ui';
Vue.component(Header.name, Header, Button.name, Button);

<template>
  <div class="content">
    <mt-header title="健硕@JIANSHOU" class="header">
      <!--<div slot="left">
        首页
      </div>-->
      <!--<mt-button  slot="right"></mt-button>-->
    </mt-header>
    <img src="../assets/b1.png" class="img-b"/>
    <div class="header-info">
        <p>125万人都在玩游戏，</p>
        <p>你还在等什么？{{VueQr}}</p>
    </div>

    <vue-qr  text="http://47.95.251.73/app/release.apk" height="160" width="160"></vue-qr>
    <p>目前只支持android用户</p>
    <a style="text-decoration: none;" href="http://47.95.251.73/app/release.apk" download="release.apk"><mt-button size="large" class="btn" type="danger">点击下载</mt-button></a>

    <div class="item">
      <h3 style="margin-bottom:0;">首页</h3>
      <p>有游戏可以选择</p>
      <img src="../assets/1.jpg" class="img-p" />
    </div>

    <div class="item">
      <h3 style="margin-bottom:0;">充值</h3>
      <p>包括支付宝、银联、微信支付</p>
      <img src="../assets/2.jpg" class="img-p" />
    </div>

    <div class="item">
      <h3 style="margin-bottom:0;">玩游戏</h3>
      <p>高速服务器，玩的更尽兴</p>
      <img src="../assets/31.jpg" class="img-p" />
    </div>

    <div class="item">
      <h3 style="margin-bottom:0;">分享</h3>
      <p>好游戏就要与好友一同分享</p>
      <img src="../assets/4.jpg" class="img-p" />
    </div>

    <div class="footer">
      <p>健硕科技@JIANSHUO</p>
    </div>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
export default {
  name: 'Index',
  components: {
    VueQr
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bgSrc: '',
      logoSrc: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    margin:0;
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
    margin-top: 20px;
    padding:20px;
    background-color:#9160ff;
    color:#fff;
  }
</style>
