import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/'
import Login from '../components/login'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/rubric/">Go to Rubric</Link>
    <Login />
  </Layout>
)

export default IndexPage
