import React from 'react'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'

const PrivateRoute = ({
  component: Component,
  location,
  loggedIn,
  ...rest
}) => {
  if (!loggedIn && location.pathname !== `/app/login`) {
    // If the user is not logged in, redirect to the login page
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn })

export default connect(
  mapStateToProps,
  null
)(PrivateRoute)
