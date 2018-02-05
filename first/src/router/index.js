import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/common/Home'
import page1 from '@/components/pages/page1'
import watchpic from '@/components/pages/watchpic'
import watch from '@/components/pages/watch'
import login from '@/components/pages/login'
import index from '@/components/common/index'
import mymsg from '@/components/common/mymsg'
import setmymsg from '@/components/common/setmymsg'
import setmima from '@/components/common/setmima'
import jilu from '@/components/common/jilu'
Vue.use(Router)
export default new Router({
  
  routes: [
    {
      path: '/watchpic',
      name: 'watchpic',
      component: watchpic,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        auth: false,  // 添加该字段，表示进入这个路由是需要登录的
    },
      children:[
            {
              path: '/mymsg',
              name: 'mymsg',
              component: mymsg,
            },
            {
              path: '/jilu',
              name: 'jilu',
              component: jilu,
            },
            {
              path: '/setmymsg',
              name: 'setmymsg',
              component: setmymsg,
            },
            {
              path: '/setmima',
              name: 'setmima',
              component: setmima,
            }
          ]
    },

  ]
})
