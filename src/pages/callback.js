import React from 'react'

import Layout from '../components/layout'
import authService from '../utils/auth-service'

const Callback = () => {
  authService.handleAuthentication()
  return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  )
}

export default Callback
