import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/pages/Login'], resolve),
      meta: {
        title: '登录'
      }
    },
    {
      path:'/Main',
      name:'Main',
      component: resolve => require(['@/pages/Main'], resolve),
      children:[
        {
          path:'/',
          name:'Home',
          component:resolve => require(['@/pages/Home'], resolve),
          meta:{
            title:'首页'
          }
        },
        {
          path:'/SystemLimit',
          name:'SystemLimit',
          component: resolve => require(['@/pages/system/SystemLimit'], resolve),
          meta:{
            title:'权限管理'
          }
        },
        {
          path:'/SystemMenu',
          name:'SystemMenu',
          component: resolve => require(['@/pages/system/SystemMenu'], resolve),
          meta:{
            title:'菜单管理'
          }
        },
      ]
      
    }
  ]
})


export default router
