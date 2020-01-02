import { fireAuth } from '@/plugins/firebase.js'
import jwtDecode from 'jwt-decode'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    const { store } = context
    fireAuth.onAuthStateChanged(async user => {
      if (user) {
        var token = await user.getIdToken(true)
        var userInfo = jwtDecode(token)
        userInfo.token = token
        await store.commit('auth/SET_USER', userInfo)
        if (window.location.pathname == '/login') {
          window.location.href = window.location.origin
        }
      }
      resolve()
    })
  })
}
