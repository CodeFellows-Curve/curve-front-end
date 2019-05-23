import React, { Component } from 'react'
// import { navigate } from 'gatsby'
import If from 'react-ifs'
import Logo from './layout/logo.js'
import './layout/logo.css'

import authService from '../utils/auth-service'

class Login extends Component {
  componentDidMount() {
    //    if (!!this.props.loggedIn) {
    //      const accessToken = authService.getAccessToken()
    //      navigate(`/app/graph`)
    //      const user_email = 'TBD'
    //      const url = `https://cfcurve.azurewebsites.net/api/authorization/${user_email}`
    //      // FETCH A KEY FROM THE C# CURVE SERVER
    //      fetch(url, {
    //        headers: new Headers({
    //          Accept: 'application/json',
    //          Authorization: `Bearer ${accessToken}`,
    //        }),
    //      })
    //        .then(response => response.json())
    //        .then(thing => {
    //          console.log('Thing from Azure:', thing)
    //          navigate(`/app/graph`)
    //        })
    //        .catch(error => console.log(error))
    //    } else {
    //      authService.login()
    //    }
  }
  componentDidUpdate(prevProps) {
    //   if (!!this.props.loggedIn && !prevProps.loggedIn) {
    //     navigate(`/app/graph`)
    //}
  }
  login = e => {
    e.preventDefault()
    authService.handleLogin()
  }
  render() {
    return (
      <If condition={!authService.isAuthenticated()}>
        <button onClick={this.login}>Login</button>
        <div id="logo-container">
          <Logo />
        </div>
        
      </If>
    )
  }
}

export default Login
