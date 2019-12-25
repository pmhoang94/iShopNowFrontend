import Vuex from 'vuex'
import authModule from './modules/auth'

const createStore = () => {
  return new Vuex.Store({
    state: {},
    modules: {
      auth: authModule
    },
    actions: {},
    mutations: {}
  })
}

export default createStore
