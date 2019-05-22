import React from 'react'
import { Query, ApolloConsumer } from 'react-apollo'

import gql from 'graphql-tag'

// individual(name: "Nate")
const PERSON = gql`
  query($name: String!) {
    individual(name: $name) {
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

class PersonCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { person: null }
  }

  onPersonFetched = person => this.setState(() => ({ person }))

  render() {
    return (
      <li>
        <ApolloConsumer>
          {client => (
            <button
              onClick={async () => {
                const { data } = await client.query({
                  query: PERSON,
                  variables: { name: this.props.name },
                })
                console.log(data)
                // this.onPersonFetched(data)
              }}
            >
              {this.props.name}
            </button>
          )}
        </ApolloConsumer>
      </li>
    )
  }
}

export default PersonCard
