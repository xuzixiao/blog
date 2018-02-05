<template>
<div class="box">
    <my-header></my-header>
    <my-concent></my-concent>
    <my-footer></my-footer>
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
   }
})
</script>
<style scoped>
.box{
    width: 100%;
    height: 400px;
    min-height: 400px;
    background: #dd7373;
}
.header{
    width: 100%;
    height: 100px;
    background: #978989;
}
</style>
