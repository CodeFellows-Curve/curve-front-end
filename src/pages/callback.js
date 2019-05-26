import React from 'react'

import Layout from '../components/layout'
import authService from '../utils/auth-service'

const Callback = () => {
  // componentDidMount() {
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
  // }
  // componentDidUpdate(prevProps) {
  //   if (!!this.props.loggedIn && !prevProps.loggedIn) {
  //     navigate(`/app/graph`)
  //   }
  // }

  authService.handleAuthentication()
  return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  )
}

export default Callback
