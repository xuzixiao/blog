<template>
  <div class="header">
      <div class="header-box">
      <div class="logo">
        <h1><img src="/static/images/logo.jpg" alt="原野博客" name="原野博客"/></h1>
      </div>
      
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
          menu:[
              {id:1,text:"首页"},
              {id:2,text:"我的文章"},
              {id:3,text:"新闻中心"},
              {id:4,text:"留言板"}
          ]
      }
  }
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 120px;
}
.header-box{
    width: 1000px;
    height: 120px;
    margin: 0 auto;
}
.logo{
    width: auto;
    height: 100px;
    
}
.logo img {
    height: 100px;
    margin: 10px 0px;
}
</style>
