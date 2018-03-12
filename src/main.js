import Vue from "vue";
import App from "./App.vue"; 
//import router from "./router/index.js";
import Vueresource from "vue-resource";
Vue.use(Vueresource);
new Vue({
  el:"#app",
  //router,
  components:{
    "my-app":App
  },
  template:"<my-app></my-app>",
  beforeCreate:function(){
    console.log("created!!");
  },
  created:function(){
    console.log("createding!!")
    this.$http.get("getlist").then(function(data){
      console.log(data);
    },function(error){
      console.log(error);
    })
  },
  mounted:function(){
  this.$http.post("getlist",{username:"xuyuanye"}).then(function(data){
    console.log(data);
  },function(error){
    console.log(error);
  })

  }
})