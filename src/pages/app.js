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
    const { data, loggedIn, pullMarkdown } = this.props
    if (loggedIn) {
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
          <Login path="/app/login" />
        </Router>
      </Layout>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn })

const mapDispatchToProps = dispatch => ({
  pullMarkdown: data => dispatch(a.pullMarkdown(data)),
})

export default connect(
  mapStateToProps,
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
