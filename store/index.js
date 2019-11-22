import Vuex from 'vuex'
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    getters: {
    },
    mutations: {
      SET_USER (state, payload) {
        state.user = payload
      }
    },
    actions: {
      signInWithGoogle ({commit}) {
        var googleAuth = auth.signInWithRedirect(GoogleProvider)
        return googleAuth
      }
    }
  })
}

export default createStore
