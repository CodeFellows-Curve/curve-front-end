import React from 'react'
import { Provider } from 'react-redux'

import Layout from '../components/layout/'
import Login from '../components/login'
import SEO from '../components/seo'

import store from '../store/index.js'

const IndexPage = () => (
  <Provider store={store}>
    <Layout>
      <SEO title="Home" />
      <Login />
    </Layout>
  </Provider>
)

export default IndexPage
