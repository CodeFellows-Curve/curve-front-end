export const isBrowser = () => typeof window !== 'undefined'

export const handleLogin = ({ username, password }) => {
  if (username === `john` && password === `johnny`) {
    return true
  }
  return false
}

export const handleLogout = callback => {
  if (callback) {
    // callback()
  }
  return true
}

// export const silentAuth = callback => {
//   if (!isAuthenticated()) {
//     return callback()
//   }
//   auth.checkSession({}, setSession(callback))
// }

/***
 * Not using local storage for now because Redux is set up
 ***
 * export const getUser = () =>
 *   isBrowser() && window.localStorage.getItem('curveUser')
 *     ? JSON.parse(window.localStorage.getItem('curveUser'))
 *     : {}
 *
 * const setUser = user =>
 *   window.localStorage.setItem('curveUser', JSON.stringify(user))
 *
 * export const handleLogin = ({ username, password }) => {
 *   if (username === `john` && password === `johnny`) {
 *     return setUser({
 *       username: `john`,
 *       name: `Johnny`,
 *       email: `johnny@example.org`,
 *     })
 *   }
 *   return false
 * }
 *
 * export const isLoggedIn = () => {
 *   const user = getUser()
 *   return !!user.username
 * }
 *
 * export const logout = callback => {
 *   setUser({})
 *   if (callback) {
 *     // callback()
 *   }
 * }
 ***/
