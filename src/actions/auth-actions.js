import authService from '../utils/auth-service'

export const login = user => ({ user, type: 'LOGIN' })

export const logout = () => {
  authService.handleLogout()
  return { type: 'LOGOUT' }
}
