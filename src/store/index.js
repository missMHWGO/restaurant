import Vue from 'vue'
import Vuex from 'vuex'

// import registerInfo from './modules/register'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
  },
  strict: debug
})
