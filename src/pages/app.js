import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/layout/'
import PrivateRoute from '../components/private-route'
import Login from '../components/login'
import Graph from '../components/graph'

// const Graph = () => <div>I am beautiful graph</div>
const List = () => <div>I am very much list</div>

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
