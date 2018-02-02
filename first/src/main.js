// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/icon/iconfont.css'
import axios from 'axios';
Vue.prototype.$axios=axios;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach(function (to, from, next) {
  //如果路由中配置了meta auth信息，则需要判断用户是否登录；
  if (to.matched.some(r => r.meta.auth)) {
      //登录后会把token作为登录的标示，存在localStorage中
      if (!localStorage.getItem('token')) {
          alert("请登录")
          console.log("需要登录");
          next({
              path: '/login',
              query: { to: to.fullPath }
          })
      } else {
          next();
      }
  } else {
      next()
  }
});