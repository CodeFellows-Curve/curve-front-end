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

      localStorage.setItem('expires_at', expiresAt)

      const curve_user = JSON.stringify(user)
      localStorage.setItem('curve_user', curve_user)

      store.dispatch(a.login(user))
      // This redirect should not be hardcoded in a larger application
      navigate('/app/graph')
      return cb()
    }
  }

  isAuthenticated() {
    if (!isBrowser) {
      return
    }

    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    const loggedIn = new Date().getTime() < expiresAt
    if (loggedIn) {
      const user = JSON.parse(localStorage.getItem('curve_user'))
      store.dispatch(a.login(user))
      return true
    }
    return false
  }

  getTokens() {
    const { accessToken, idToken, expiresAt } = this.tokens
    if (!accessToken) {
      throw new Error('No access token found')
    }
    if (!idToken) {
      throw new Error('No id token found')
    }
    if (!expiresAt) {
      throw new Error('No token expiresAt found')
    }
    return this.tokens
  }

  silentAuth(callback) {
    // TODO: Silent auth will not work with Google test keys
    // Auth0 provides for development.
    // You can generate Google keys and add them to the
    // Auth0 configuration.
    // https://auth0.com/docs/connections/social/google
    if (!this.isAuthenticated()) {
      return callback()
    }
    this.auth.checkSession({}, this.setSession(callback))
  }

  handleLogout() {
    localStorage.removeItem('expires_at')
    localStorage.removeItem('curve_user')

    //  const options = {
    //    client_id: process.env.AUTH0_CLIENT_ID,
    //    returnTo: process.env.AUTH0_DOMAIN,
    //  }

    this.auth.logout()
  }
}

const authService = new AuthService()
export default authService
