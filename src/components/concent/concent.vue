<template>
  <div class="concent">
      <div class="concent-left">
           {{concentLeft}}
      </div>
      <div class="concent-con">
          {{concent}}
      </div>
      <div class="concent-right">
          {{concentright}}
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
         concentLeft:"这是我的内容噢，左侧内容",
         concentright:"这是我的内容噢，右侧内容",
         concent:"这是我的内容噢，左侧内容",
        }
    }
}
</script>
<style scoped>
.concent{
    width: 100%;
    height: 500px;
    
}
.concent-left{
    width: 30%;
    height: 500px;
    float: left;
    
}
.concent-con{
    width: 50%;
    height: 500px;
    float: left;
}
.concent-right{
    width: 20%;
    height: 500px;
    float: left;
}
</style>


