import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'

import * as a from '../actions/competencies-actions'
import Layout from '../components/layout/'
import PrivateRoute from '../components/private-route'
import Login from '../components/login'
import Graph from '../components/graph'
import List from '../components/list'

class App extends Component {
  componentDidMount() {
    // Add competencies markdown to Redux store
    const { data, pullMarkdown } = this.props

    pullMarkdown(data)
  }

  render() {
    return (
      <Layout>
        <Router>
          <PrivateRoute path="/app/graph" component={Graph} />
          <PrivateRoute path="/app/list" component={List} />
          <Login path="/app/login" />
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
