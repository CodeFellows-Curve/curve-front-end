import auth0 from 'auth0-js'
import { AUTH_CONFIG } from './auth0-config'
import { navigate } from 'gatsby'

const isBrowser = typeof window !== 'undefined'

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientID,
      redirectUri: AUTH_CONFIG.redirectUri,
      audience: AUTH_CONFIG.audience,
      responseType: 'token id_token',
      scope: 'openid profile email',
    })
  : {}

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }
  return localStorage.getItem('isLoggedIn') === 'true'
}

export const login = () => {
  // console.log('THIS IS AUTH OBJECT:', auth)
  if (!isBrowser) {
    return
  }
  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate('/')
    cb()
    return
  }
  if (authResult && authResult.accessToken && authResult.idToken) {
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt

    user = authResult.idTokenPayload
    localStorage.setItem('isLoggedIn', true)
    navigate('/app')
    cb()
  }
}

export default class AuthService {
  auth0 = auth

  login() {
    this.auth0.authorize()
  }
}
export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }
  auth.parseHash(setSession())
}

export const silentAuth = callback => {
  if (!isAuthenticated()) {
    return callback()
  }
  auth.checkSession({}, setSession(callback))
}

export const getTokens = () => tokens

export const getProfile = () => user

export const logout = () => {
  localStorage.setItem('isLoggedIn', false)
  auth.logout({
    //   client_id: process.env.AUTH0_CLIENTID,
    //       returnTo: process.env.DOMAIN,
    //
  })
}
