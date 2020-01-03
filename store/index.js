import Vuex from 'vuex'
import moment from 'moment'

import user from './modules/user'
import auth from './modules/auth'

const createStore = () => {
  return new Vuex.Store({
    state: {
      hideMenu: false,
      locale: 'vi',
    },
    modules: {
      auth: auth,
      user: user
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
