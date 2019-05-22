import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import gql from 'graphql-tag'
import { Query, ApolloConsumer } from 'react-apollo'

// const INDIVIDUALS = gql`
// query {
//   individuals{
//     name
//   }
// }`

const SWAPI = gql`
query {
  allPeople {
    edges {
      node {
        name
      }
    }
  }
}`

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: null
    }
  }

  updateData = (data) => {
    console.log(data)
    this.setState({ data })
  }

  render(){
    return(
      <>
      <ApolloConsumer>
      {client => (
          <div>
            <button
              onClick={async () => {
                const { data } = await client.query({
                  query: SWAPI,
                });
                this.updateData(data);
              }}
            >
              Click me!
            </button>
          </div>
        )}
      </ApolloConsumer>
      </>
    )
  }
  

}



export default List
