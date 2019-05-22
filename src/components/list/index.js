import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import gql from 'graphql-tag'
import { Query, ApolloConsumer } from 'react-apollo'
import PersonCard from './person-card'

const INDIVIDUALS = gql`
  query {
    individuals {
      name
    }
  }
`

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{ name: 'Jon' }],
    }
  }

  updateData = data => {
    console.log(data)
    this.setState({ data: data.individuals })
  }

  render() {
    return (
      <>
        <Query query={INDIVIDUALS}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading users...'
            if (error) return `Error! ${error.message}`
            console.log('DATA', data)
            return (
              <>
                <h2>All Users</h2>
                <p>
                  Click a user's name to make a graphQL query for their data and
                  set that data to state (in the Redux store).
                </p>
                <ul>
                  {data.individuals.map(person => (
                    <PersonCard name={person.name} />
                  ))}
                </ul>
              </>
            )
          }}
        </Query>
        {/* <ApolloConsumer>
          {client => (
            <div>
              <button
                onClick={async () => {
                  const { data } = await client.query({
                    query: INDIVIDUALS,
                  })
                  this.updateData(data)
                }}
              >
                Show all employees
              </button>
            </div>
          )}
        </ApolloConsumer>
        <ul>
          {this.state.data.map(person => (
            <PersonCard name={person.name} />
          ))}
        </ul> */}
      </>
    )
  }
}

export default List
