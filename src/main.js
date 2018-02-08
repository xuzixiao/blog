import Vue from "vue";
import App from "./App.vue";


new Vue({
  el:"#app",
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