import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/'
import Login from '../components/login'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Login />
  </Layout>
)

export default IndexPage
