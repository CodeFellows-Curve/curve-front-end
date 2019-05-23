import auth0 from 'auth0-js'
import { navigate } from 'gatsby'
import store from '../store/'

import * as a from '../actions/auth-actions'

const isBrowser = typeof window !== 'undefined'

class AuthService {
  constructor() {
    this.auth = isBrowser
      ? new auth0.WebAuth({
          domain: process.env.AUTH0_DOMAIN,
          clientID: process.env.AUTH0_CLIENT_ID,
          redirectUri: process.env.AUTH0_REDIRECT_URI,
          audience: process.env.AUTH0_AUDIENCE,
          responseType: 'token id_token',
          scope: 'openid profile email',
        })
      : {}

    this.tokens = {
      accessToken: false,
      idToken: false,
      expiresAt: false,
    }
  }
  handleLogin() {
    if (!isBrowser) {
      return
    }
    this.auth.authorize()
  }
  handleAuthentication() {
    if (!isBrowser) {
      return
    }

    this.auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession()(null, authResult)
      } else if (err) {
        console.error(err)
      }
    })
  }

  setSession = (cb = () => false) => (err, authResult) => {
    if (err) {
      navigate('/')
      cb()
      return
    }

    if (authResult && authResult.accessToken && authResult.idToken) {
      const expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
      this.tokens.accessToken = authResult.accessToken
      this.tokens.idToken = authResult.idToken
      this.tokens.expiresAt = expiresAt

      const user = authResult.idTokenPayload

      localStorage.setItem('access_token', authResult.accessToken)
      localStorage.setItem('id_token', authResult.idToken)
      localStorage.setItem('expires_at', expiresAt)
      localStorage.setItem('authorized_user', user)

      store.dispatch(a.login(user))
      navigate('/app/graph')
      return cb()
    }
  }

  isAuthenticated() {
    if (!isBrowser) {
      return
    }

    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    // maybe on logout set this to null
    return new Date().getTime() < expiresAt
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) {
      throw new Error('No access token found')
    }
    return accessToken
  }
  getTokens() {
    return this.tokens
  }

  silentAuth(callback) {
    if (!this.isAuthenticated()) {
      return callback()
    }
    this.auth.checkSession({}, this.setSession(callback))
  }

  handleLogout() {
    localStorage.setItem('access_token', null)
    localStorage.setItem('id_token', null)
    localStorage.setItem('expires_at', null)
    localStorage.setItem('authorized_user', null)

    //  const options = {
    //    client_id: process.env.AUTH0_CLIENT_ID,
    //    returnTo: process.env.AUTH0_DOMAIN,
    //  }

    this.auth.logout()
  }
}

const authService = new AuthService()
export default authService
