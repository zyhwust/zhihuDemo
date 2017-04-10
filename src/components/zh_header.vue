<template>
  <div class="navigator">
    <div class="wrap">
      <a id="logo" href=""></a>
      <div class="search inline">
        <input type="text"  placeholder="请输入你感兴趣的内容">
        <button class="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
      </div>
      <div class="menu inline">
        <li v-for="menu in menuList" :class="{active: menu.active}">
          <a href="">{{menu.name}}</a>
        </li>
      </div>
      <div class="info">
        <a href="">
          <img :src="userInfo.img" :alt="userInfo.name">
          <span>{{userInfo.name}}</span>
        </a>
        <ul class="info-dropdown" id="">
          <li v-for="info in infoDropList">
            <a href="">
              <i :class="info.fa"></i>{{info.name}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import zh_header from './zh_header.vue';
export default {
  name: 'navigator',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuList: [
        {
          name : '首页',
          active : true
        },
        {
          name : '话题',
          active : false
        },
        {
          name : '兴趣',
          active : false
        },
        {
          name : '消息',
          active : false
        }

      ],
      userInfo: {
        name : "张远航",
        img : "https://pic2.zhimg.com/d52c22e32580b24ee98f6c9f889ac635_s.jpg"
      },
      infoDropList: [
        {
          name : '首页',
          fa : 'fa fa-search'
        },
        {
          name : '话题',
          fa : 'fa fa-search'
          
        },
        {
          name : '兴趣',
          fa : 'fa fa-search'
        },
        {
          name : '消息',
          fa : 'fa fa-search'
        }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navigator{
    width: 100%;
    height: 45px;
    background: linear-gradient(to bottom,#086ed5,#055db5);
  }
  .inline{
    float: left;
    margin-left: 10px;
    height: 45px;
    line-height: 45px;
  }
  #logo{
    float: left;
    height: 45px;
    width: 62px;
    background: url(https://static.zhihu.com/static/revved/img/sticky_header/new_logo.ede2316d.png) no-repeat 0 8px;
    color: #fff;
  }
  .search{
  }
  .search input{
    font-size: 15px;
    padding: 3px;
    margin: 0;
    height: 25px;
    width: 360px;
    background-color: #e1eaf2;
    color: #49525c;
    outline: 0;
    border: 1px solid #045bb2;
    border-radius: 3px;
  }
  .search input:focus{
    background-color: #fff;
  }
  .search .submit{
    width: 32.6px;
    height: 32px;
    position: relative;
    left: -32.6px;
    top: -1px;
    background-color: #0e7bef;
    border: 1px solid #045bb2;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,.05), inset 0 1px 1px rgba(255,255,255,.15);
    box-sizing: border-box;
    outline: 0;
    cursor: pointer;
    color: #fff;
  }
  .menu{
  }
  .menu li,menu ul{
    display: inline-block;
    position: relative;    
  }
  .menu li a{
    display: inline-block;
    width: 54px;
    height: 45px;
    color: #eee;
    text-align: center;
    
  }
  .menu li a:hover{
    color: #fff;
  }
  .menu .active{
    background-color: #055fb8;
  }
  .info{
    overflow: hidden;
    position: relative;
  }
  .info:hover{
    background-color: #055fb8;
  }
  .info a{
    text-indent: 46px;
    color: #fff;
    min-width: 120px;
    float: right;
    height: 45px;
    line-height: 45px;
  }
  .info span{
  }
  .info img{
    position: absolute;
    left: 10px;
    top: 9.5px;
    width: 25px;
    height: 25px;
    border: 1px solid rgba(0,0,0,.1);
  }
  .info-dropdown {
    width: 120px;
    position: absolute;
    top: 45px;
    background-color: #055fb8;
  }
  .info-dropdown li{
    height: 45px;
    background-color: #055fb8;
  }
  .info-dropdown li .fa{
    color: #fff;
    float: left;
  }
</style>
