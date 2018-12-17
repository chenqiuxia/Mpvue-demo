// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login: (state) => {
      state.isLogin = true
    },
    logout: (state) => {
      state.isLogin = false
    }
  }
})

export default store
