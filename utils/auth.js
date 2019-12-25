import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

export const setToken = token => {
  if (process.server) return
  window.localStorage.setItem('ishopnow_token', token)
  var user = JSON.stringify(jwtDecode(token))
  var currentUser = JSON.parse(user)
  currentUser.authToken = token
  window.localStorage.setItem('ishopnow_user', JSON.stringify(currentUser))
  Cookie.set('ishopnow_jwt', token)
}

export const unsetToken = () => {
  if (process.server) return
  window.localStorage.removeItem('ishopnow_token')
  window.localStorage.removeItem('ishopnow_user')
  window.localStorage.removeItem('ishopnow_secret')
  Cookie.remove('ishopnow_jwt')
}

export const getUserFromCookie = req => {
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith('ishopnow_jwt='))
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  const user = jwtDecode(jwt)
  if (!user) return

  if (new Date().getTime() > user.exp * 1000) {
    //console.log('[CHECK-AUTH] - token expired')
    return
  }
  user.authToken = jwt
  return user
}

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.getItem('ishopnow_user')
  if (!json) return
  if (new Date().getTime() > JSON.parse(json).exp * 1000) {
    console.log('[CHECK-AUTH] - token expired')
    return
  }
  return JSON.parse(json)
}

export const checkSecret = secret => window.localStorage.secret === secret
