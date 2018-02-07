<template>
  <div class="header">
      <ul>
        <li v-for="item in menu">
            {{item.text}}
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  
  props:['number'],
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
.header ul li{
    display: block;
    width: 100px;
    float: left;
}
</style>
