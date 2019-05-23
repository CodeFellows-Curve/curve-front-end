import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import PersonCard from './person-card'
import styled from 'styled-components'

const User = styled.div`
  text-align: center;
  font-family: 'markweb-light', Arial;

  h2 {
    font-size: 1.5em;
  }
  ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justfy-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul > li {
    font-size: 1.2em;
    color: purple;
    border-bottom: 1px solid #ccc;
  }
  li:last-child {
    border: none;
  }
  li {
    > button {
      border: 0;
      color: #000;
      display: block;
      font-size: 20px;
      min-width: 200px;
      text-decoration: none;
      width: 40vw;

      -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
      -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
      -o-transition: font-size 0.3s ease, background-color 0.3s ease;
      -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
      transition: font-size 0.3s ease, background-color 0.3s ease;
    }
    > button:hover {
      ${'' /* background: #f6f6f6; */}
      font-size: 30px;
    }

    &:nth-child(odd) > button:hover {
      background: #53ec86;
      color: #fff;
    }
    &:nth-child(even) > button:hover {
      background: #5ecddd;
      color: #fff;
    }
  }
`
const INDIVIDUALS = gql`
  query {
    individuals {
      id
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
    // console.log(data)
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
                <User>
                  <h2>All Users</h2>
                  <p>
                    Click a user's name to make a graphQL query for their data
                    and set that data to state (in the Redux store).
                  </p>
                  <ul>
                    {data.individuals.map(person => (
                      <li key={person.id}>
                        <PersonCard name={person.name} />
                      </li>
                    ))}
                  </ul>
                </User>
              </>
            )
          }}
        </Query>
      </>
    )
  }
}

export default List
