import React from 'react'
import gql from 'graphql-tag'

// const PERSON = gql`
// query{
//   individual (name: "Nate") {
//     name
//     review{
//       category{
//         categoryName
//         overallScore
//         subcategory{
//           subCategoryName
//           score
//         }
//       }
//     }
//   }
// }`

class PersonCard extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = name => {
    console.log('handleClick', name)

  }

  PERSON = gql`
    query {
      individual(name: "Nate") {
        name
        review {
          category {
            categoryName
            overallScore
            subcategory {
              subCategoryName
              score
            }
          }
        }
      }
    }
  `

  render() {
    return (
      <li>
        <ApolloConsumer>
        <button onClick={() => this.handleClick(this.props.name)}>
          {this.props.name}
        </button>
        </ApolloConsumer>
      </li>
    )
  }
}

export default PersonCard
