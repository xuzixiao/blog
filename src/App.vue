<template>
<div class="box">
    
    <keep-alive>
        <div :is="comtorander">
            <!--slot 子组件传文本-->
            <p slot="tou">我是头头头头土偶投投投脱兔通拓图呕吐</p>
            <p slot="wei">我是尾巴</p>
        </div>
    </keep-alive>


    <my-header :number="6666"></my-header>
    <my-concent></my-concent>
    <my-footer></my-footer>
    <span v-on:click="aa">这是我的{{aaa}}</span>
    <span v-on:click="he">切换header</span>
    <span v-on:click="fot">切换footer</span>
</div>
</template>
<script>
import Vue from "vue";
import header from "./components/header/header.vue";
import concent from "./components/concent/concent.vue";
import footer from "./components/footer/footer.vue";
import comA from "./components/a";
export default({
   components:{
       "my-header":header,
       "my-concent":concent,
       "my-footer":footer,
       "com-a":comA
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
       this.aaa+5;
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
    background: #ffff83;
}
.header{
    width: 100%;
    height: 100px;
    background: #ffff00;
}
</style>
