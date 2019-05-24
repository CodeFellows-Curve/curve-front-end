import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'

import * as a from '../../actions/competencies-actions'
import Layout from '../../components/layout/'
import PrivateRoute from '../../components/private-route'
import Graph from '../../components/graph/'
import List from '../../components/list/'
import AddUser from '../../components/add-user/'
import authService from '../../utils/auth-service'

import { Provider } from 'react-redux'
import store from '../../store/'

class App extends Component {
  //TODO: move {connect} to a component within the app root

  // componentDidMount() {
  //   const { data, pullMarkdown } = this.props
  //   if (authService.isAuthenticated()) {
  //     // Add competencies markdown to Redux store on login
  //     pullMarkdown(data)
  //   }
  // }

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Router>
            <PrivateRoute path="/app/graph" component={Graph} />
            <PrivateRoute path="/app/list" component={List} />
            <PrivateRoute path="/app/add-user" component={AddUser} />
          </Router>
          {/* <DoStoreStuff data={data} /> */}
        </Layout>
      </Provider>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   pullMarkdown: data => dispatch(a.pullMarkdown(data)),
// })

// export default connect(
//   null,
//   mapDispatchToProps
// )(App)

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

export default App
