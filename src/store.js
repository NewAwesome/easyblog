import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * 1. 记录用户登陆与否
 * 2. 当前“阅读全文”的博文
 */
export default new Vuex.Store({
  state: {
    user: '',
    currentDetail: {}
  },
  mutations: {
    changeUser (state, payload) {
      state.user = payload.username
    },
    changeCDetail (state, payload) {
      state.currentDetail = payload.detail
    }
  },
  actions: {

  }
})
