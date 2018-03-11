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
})