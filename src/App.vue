<template>
<div class="box">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
</div>
</template>
<script>
import Vue from "vue";
import header from "./components/header/header.vue";
import footer from "./components/footer/footer.vue";
export default({
   components:{
       "my-header":header,
       "my-footer":footer,
   },
   data(){
     return {
         comtorander:"com-a",
         aaa:1,
         number:10
     } 

   },
   methods:{
      aa:function(){
       this.aaa+=1;
      },
      he:function(){
         this.comtorander="my-header"
      },
      fot:function(){
         this.comtorander="my-footer"
      }
   }
})
</script>
<style scoped>
.box{
    width: 100%;
    height: 400px;
    min-height: 400px;
}
.header{
    width: 100%;
    height: 100px;
}
</style>
