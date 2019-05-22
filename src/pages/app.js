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
  // set redux store to data
  componentDidMount() {
    const competencies = {}

    this.props.data.allMarkdownRemark.edges.forEach(num => {
      const { category } = num.node.frontmatter
      if (competencies[category]) {
        const { proficiency } = num.node.frontmatter
        if (competencies[category][proficiency]) {
          competencies[category][proficiency].push(num.node)
        } else {
          competencies[category][proficiency] = [num.node]
        }
      } else {
        competencies[category] = {}
        const { proficiency } = num.node.frontmatter
        competencies[category][proficiency] = [num.node]
      }
    })

    this.props.pullMarkdown(competencies)
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
      filter: { fileAbsolutePath: { regex: "/competencies/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            category
            milestone
            proficiency
            title
          }
        }
      }
    }
  }
`
