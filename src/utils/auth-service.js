import auth0 from 'auth0-js'
import { navigate } from 'gatsby'

// Note that auth uses Redux without React.
import store from '../store/'
import * as a from '../actions/auth-actions'

/***
 * Check if we are in a browser environment.
 * Don't authenticate for machine to machine requests.
 ***/
const isBrowser = typeof window !== 'undefined'

class AuthService {
  constructor() {
    /***
     * If in a browser environment,
     * create a new instance of the auth0 WebAuth object with
     * environment variables and the information we want back.
     ***/
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

    /***
     * Store tokens in memory only.
     * Avoid putting tokens in localStorage.
     ***/
    this.tokens = {
      accessToken: false,
      idToken: false,
    }
  }

  handleLogin() {
    if (!isBrowser) {
      return
    }
    // Call the Auth0 authorize method
    this.auth.authorize()
  }
  handleAuthentication() {
    if (!isBrowser) {
      return
    }

    /***
     * Auth0 will parse the results from the login attempt.
     * If the tokens we requested are included, call `setSession`.
     ***/
    this.auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession()(null, authResult)
      } else if (err) {
        console.error(err)
      }
    })
  }

  /***
   * Set a user session.
   *
   * This method is curried because if a SessionCheck component
   * is implemented at the root element for silent authentication,
   * we'll want to pass it a `setState` callback to trigger refresh
   * once we're authenticated. The `cb` defaults to empty.
   ***/
  setSession = (cb = () => {}) => (err, authResult) => {
    if (!isBrowser) {
      return
    }

    if (err) {
      navigate('/')
      cb()
      return
    }

    if (authResult && authResult.accessToken && authResult.idToken) {
      // Store the tokens in memory
      this.tokens.accessToken = authResult.accessToken
      this.tokens.idToken = authResult.idToken

      // Token expiration is set in the Auth0 control panel. Track it.
      const expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
      localStorage.setItem('expires_at', expiresAt)

      // Add the user object to localStorage (for persistence)
      // and the Redux store.
      const user = authResult.idTokenPayload
      const curve_user = JSON.stringify(user)
      localStorage.setItem('curve_user', curve_user)
      store.dispatch(a.login(user))

      // Authenticated users are redirected to an authorized route.
      // This redirect should not be hardcoded in a larger application.
      navigate('/app/graph')
      return cb()
    }
  }

  isAuthenticated() {
    if (!isBrowser) {
      return
    }

    // Check if the tokens have expired yet.
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    const loggedIn = new Date().getTime() < expiresAt

    // If not, make sure the Redux store has the user data, e.g.,
    // in case the user refreshed their browser.
    if (loggedIn) {
      const user = JSON.parse(localStorage.getItem('curve_user'))
      store.dispatch(a.login(user))
      return true
    }
    return false
  }

  // The tokens may be used as part of authentication with the back end server.
  getTokens() {
    if (!isBrowser) {
      return
    }

    const { accessToken, idToken } = this.tokens
    if (!accessToken) {
      throw new Error('No access token found')
    }
    if (!idToken) {
      throw new Error('No id token found')
    }
    return this.tokens
  }

  /***
   * Silent authentication would refresh a user's tokens
   * if they browsed to the page while their tokens are valid,
   * cutting down on how often active users would have to
   * manually log in.
   *
   * TODO: Silent auth will not work with Google test keys
   * Auth0 provides for development.
   * You can generate Google keys and add them to the
   * Auth0 configuration.
   * https://auth0.com/blog/securing-gatsby-with-auth0
   * and
   * https://auth0.com/docs/connections/social/google
   *
   * When ready, you would wrap the root element in
   * `gatsby-browser.js` in a component that calls this function,
   * and you might want to change how the user is set in
   * localStorage.
   ***/
  silentAuth(callback) {
    if (!isBrowser) {
      return
    }

    if (!this.isAuthenticated()) {
      return callback()
    }
    this.auth.checkSession({}, this.setSession(callback))
  }

  /***
   * Remove the data from localStorage and call Auth0 `logout`.
   * Logout `options` argument may be necessary depending on
   * configuration.
   ***/
  handleLogout() {
    if (!isBrowser) {
      return
    }

    localStorage.removeItem('expires_at')
    localStorage.removeItem('curve_user')

    //  const options = {
    //    client_id: process.env.AUTH0_CLIENT_ID,
    //    returnTo: process.env.AUTH0_DOMAIN,
    //  }

    this.auth.logout()
  }
}

/***
 * Export an instance of this class so all imports have access
 * to the same context.
 ***/
export default new AuthService()
