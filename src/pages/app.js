import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'

import * as a from '../actions/competencies-actions'
import Layout from '../components/layout/'
import PrivateRoute from '../components/private-route'
import Graph from '../components/graph'
import List from '../components/list/index.js'
import authService from '../utils/auth-service'

class App extends Component {
  componentDidMount() {
    const { data, pullMarkdown } = this.props
    if (authService.isAuthenticated()) {
      // Add competencies markdown to Redux store on login
      pullMarkdown(data)
    }
  }

  render() {
    return (
      <Layout>
        <Router>
          <PrivateRoute path="/app/graph" component={Graph} />
          <PrivateRoute path="/app/list" component={List} />
        </Router>
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  pullMarkdown: data => dispatch(a.pullMarkdown(data)),
})

export default connect(
  null,
  mapDispatchToProps
)(App)

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
