import Vuex from 'vuex'
import authModule from './modules/auth'
import moment from 'moment'

const createStore = () => {
  return new Vuex.Store({
    state: {
      hideMenu: false,
      locale: 'vi',
    },
    modules: {
      auth: authModule
    },
    actions: {
      hideMenu({ commit }) {
        commit('HIDE_MENU')
      },
      setLang({ commit }, req) {
        commit('SET_LANG', req)
      },
    },
    mutations: {
      HIDE_MENU: function(state) {
        state.hideMenu = !state.hideMenu
      },
      SET_LANG(state, locale) {
        state.locale = locale
        this.app.i18n.locale = locale
        moment.locale(locale)
        localStorage.setItem('language', locale)
      },
    }
  })
}

export default createStore
