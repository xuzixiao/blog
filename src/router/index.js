import Vue from 'vue';
import Router from 'vue-router';
import indexpage from '../page/index.vue';
import artlist from '../page/articlelist.vue';
Vue.use(Router);
export default new Router({
  //  去掉#
  mode: 'history',
  routes: [
    {
      path:"/",
      component:indexpage
    },{
      path:"/index",
      component:indexpage
    },{
      path:"/list",
      component:artlist
    }
  ]
});
