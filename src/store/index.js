import Vue from 'vue'
import Vuex from 'vuex'

import menuList from './modules/menuList'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        menuList
    }
})