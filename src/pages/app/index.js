import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import Layout from '../../components/layout/'
import PrivateRoute from '../../components/private-route'
import Graph from '../../components/graph'
import List from '../../components/list/index.js'
import BuildMD from '../../components/buildMarkdown'
import { Provider } from 'react-redux'
import store from '../../store/'

class App extends Component {

  render() {
    return (
      <Layout>
        <Router>
          <PrivateRoute path="/app/graph" component={Graph} />
          <PrivateRoute path="/app/list" component={List} />
        </Router>
        {/* <BuildMD /> */}
      </Layout>
    )
  }
}

export default App;
