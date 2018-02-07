<template>
<div class="box">
    <my-header></my-header>
    <my-concent></my-concent>
    <my-footer></my-footer>
    <span v-on:click="aa">这是我的span</span>
</div>
</template>
<script>
import header from "./components/header/header.vue";
import concent from "./components/concent/concent.vue";
import footer from "./components/footer/footer.vue";
export default({
   components:{
       "my-header":header,
       "my-concent":concent,
       "my-footer":footer
   },
   data(){
     return {
         aaa:1
     }  
   },
   methods:{
      aa:function(){
       this.aaa++;
        console.log(this.aaa);
      }
   }
})
</script>
<style scoped>
.box{
    width: 100%;
    height: 400px;
    min-height: 400px;
    background: #dd737300;
}
.header{
    width: 100%;
    height: 100px;
    background: #ffffff6c;
}
</style>
