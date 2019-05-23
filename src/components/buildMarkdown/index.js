import React, { Component } from 'react';
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import authService from '../../utils/auth-service'
import * as a from '../../actions/competencies-actions'
import { Query } from 'react-apollo'

// const query = graphql`
//   {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "markdown/competencies/" } }
//     ) {
//       edges {
//         node {
//           html
//           frontmatter {
//             category
//             milestone
//             proficiency
//           }
//         }
//       }
//     }
//   }
// `

class BuildMD extends Component {

  render() {
    return (
      <>
        {/* // <Query query={query}>
      //   {({ loading, error, data }) => {
      //     if (loading) return 'Loading users...'
      //     if (error) return `Error! ${error.message}`
      //     const { pullMarkdown } = this.props
      //     if (authService.isAuthenticated()) {
      //       // Add competencies markdown to Redux store on login
      //       pullMarkdown(data)
      //     }
      //     return (<></>)
      //   }}
      // </Query> */}
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  pullMarkdown: data => dispatch(a.pullMarkdown(data)),
})

export default connect(
  null,
  mapDispatchToProps
)(BuildMD)