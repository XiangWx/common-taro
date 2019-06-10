// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

import './assets/styles/reset.css' //初始化样式
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'  //iconfont

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

import {post,get} from './api/http'
import store from './store/index.js'

Vue.prototype.$post = post
Vue.prototype.$get = get 

Vue.config.productionTip = false

//nprogress

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
 
router.afterEach(() => {
  NProgress.done()
})
// progress进度条简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

Vue.use(Vuex)
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
