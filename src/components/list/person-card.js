import React from 'react'
import { ApolloConsumer } from 'react-apollo'


import { navigate } from 'gatsby'

import gql from 'graphql-tag'

import * as actions from '../../actions/graph-actions.js'
import { connect } from 'react-redux'

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
      // <li>
      <ApolloConsumer>
        {client => (
          <button
            onClick={async () => {
              const { data } = await client.query({
                query: PERSON,
                variables: { name: this.props.name },
              })
              // adds individual's data to state in Redux store
              this.props.setReduxState(data.individual)
              // Then redirect to the graph page
              navigate('/')
            }}
          >
            {this.props.name}
          </button>
        )}
      </ApolloConsumer>
      // </li>
    )
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  setReduxState: payload => dispatch(actions.setIndividualsData(payload)),
})
export default connect(
  null,
  mapDispatchToProps
)(PersonCard)

// export default PersonCard
