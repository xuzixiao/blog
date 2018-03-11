import Vue from "vue";
import App from "./App.vue"; 
import router from "./router/index.js";

new Vue({
  el:"#app",
  router,
  components:{
    "my-app":App
  },
  template:"<my-app></my-app>",
  beforeCreate:function(){
    console.log("created!!");
  },
  created:function(){
    console.log("createding!!")
  },
  mounted:function(){
  console.log("mounted");

  }
})