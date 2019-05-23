import React from 'react'
// import { navigate } from 'gatsby'
import If from 'react-ifs'
import Logo from './layout/logo.js'
import './layout/logo.css'

import authService from '../utils/auth-service'

const Login = () => (
  <If condition={!authService.isAuthenticated()}>
    <div id="logo-container">
      <Logo />
    </div>
  </If>
)

export default Login
