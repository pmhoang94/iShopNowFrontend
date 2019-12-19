import { fireAuth } from '@/plugins/firebase.js'

export default (context) => {
  const {store} = context

  return new Promise((resolve, reject) => {
    fireAuth.onAuthStateChanged(user => {
      store.commit('auth/SET_USER', user)
      resolve()
    })
  })
} 
