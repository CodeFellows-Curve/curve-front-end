import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/layout/'
import PrivateRoute from '../components/private-route'
import Login from '../components/login'
import Graph from '../components/graph'
import List from '../components/list'

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/graph" component={Graph} />
      <PrivateRoute path="/app/list" component={List} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
