import React from 'react'
import { navigate } from 'gatsby'
import authService from '../utils/auth-service'

const PrivateRoute = ({
  component: Component,
  location,
  loggedIn,
  ...rest
}) => {
  console.log('isAuthenticated:', authService.isAuthenticated())
  if (!authService.isAuthenticated() && location.pathname !== `/`) {
    // If the user is not logged in, redirect to the login page
    console.log('Hello from PrivateRoute!')
    navigate(`/`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
