import { handleLogin, handleLogout } from '../utils/auth.js'

export const login = credentials => dispatch => {
  const user = handleLogin(credentials)
  console.log('login result:', user)
  if (!!user) {
    // dummy value
    const user = {
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    }
    dispatch(loginSync(user))
  }
  dispatch(nullSync())
}

export const logout = callback => dispatch => {
  const result = handleLogout(callback)
  console.log('logout result:', result)
  if (!!result) {
    dispatch(logoutSync())
  }
  dispatch(nullSync())
}

const loginSync = user => ({ user, type: 'LOGIN' })
const logoutSync = () => ({ type: 'LOGOUT' })
const nullSync = () => ({ type: null })
