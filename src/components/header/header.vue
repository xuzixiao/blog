<template>
  <div class="header">
      <div class="header-box">
        <div class="logo">
            <h1><img src="/static/images/logo.jpg" alt="原野博客" name="原野博客"/></h1>
        </div>
        <div class="nav">
            <ul>
                <li><router-link to="index">首页</router-link></li>
                <li><router-link to="list">文章</router-link></li>
                <li><a href="">说说语录</a></li>
                <li><a href="">留言板</a></li>
            </ul>
        </div>
        
      </div>
  </div>
</template>
<script>
export default {
  props: ["number"], 
  data() {
    return {   
      menu: [
        { id: 1, text: "首页" },
        { id: 2, text: "我的文章" },
        { id: 3, text: "新闻中心" },
        { id: 4, text: "留言板" }
      ]
    };
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 120px;
}
.header-box {
  width: 1000px;
  height: 120px;
  margin: 0 auto;
}
.logo {
  width: auto;
  height: 100px;
  float: left;
}
.logo img {
  height: 100px;
  margin: 10px 0px;
  float: left;
}
.nav{
    width:auto;
    height: 30px;
    float: left;
    margin-top: 80px;
    margin-left: 100px;
    border-radius: 4px;
    overflow: hidden;
    }
.nav li{
    float: left;
    background:#2b2b2b;
    padding: 8px 15px;
}
.nav li a{
    color: #fff
}
.nav li:hover{
    background:#666;
}    
</style>
