import { request } from 'https'
import firebase, { fireAuth, GoogleProvider } from '@/plugins/firebase.js'
const unsetToken = require('~/utils/auth').unsetToken
import jwt_decode from 'jwt-decode'

async function signInWithGoogle() {
  GoogleProvider.setCustomParameters({
    prompt: 'select_account'
  })
  var googleAuth = await fireAuth.signInWithRedirect(GoogleProvider)
  return googleAuth
}

// async function getRedirectGoogle(context) {
//   debugger
//   var response = await fireAuth.getRedirectResult()
//   if (response.credential) {
//     var token = response.user._lat
//     var decode = jwt_decode(token)
//     localStorage.setItem('TOKEN', token)
//     localStorage.setItem('USER', JSON.stringify(decode))
//     context.commit('auth/SET_USER', response.user)
//   } else {
//     context.commit('auth/SET_USER')
//     // redirect('/login');
//   }
// }

const logout = async context => {
  await context.commit('auth/SET_USER', null)
}
export default {
  signInWithGoogle
  // getRedirectGoogle
}
