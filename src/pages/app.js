import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/layout/'
import PrivateRoute from '../components/private-route'
import Login from '../components/login'
import Graph from '../components/graph'
import SecretSwapi from '../components/secret-swapi'

const List = () => <div>I am very much list</div>

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/graph" component={Graph} />
      <PrivateRoute path="/app/list" component={List} />
      <PrivateRoute path="/app/secret-swapi" component={SecretSwapi} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
