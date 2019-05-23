import React, { Component } from 'react'

import { graphql } from 'gatsby'
import { Router } from '@reach/router'

import * as a from '../../actions/competencies-actions'
import Layout from '../../components/layout/'
import PrivateRoute from '../../components/private-route'
import Graph from '../../components/graph'
import List from '../../components/list/index.js'
import authService from '../../utils/auth-service'
import BuildMD from '../../components/buildMarkdown'

import { Provider } from 'react-redux'
import store from '../../store/'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Router>
            <PrivateRoute path="/app/graph" component={Graph} />
            <PrivateRoute path="/app/list" component={List} />
          </Router>
          <BuildMD data={data} />
        </Layout>
      </Provider>
    )
  }
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "markdown/competencies/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            category
            milestone
            proficiency
          }
        }
      }
    }
  }
`

export default App;
