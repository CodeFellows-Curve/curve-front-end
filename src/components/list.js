import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const List = () => (
  <StaticQuery
    query={graphql`
      query {
        swapi {
          allPersons {
            id
            name
          }
        }
      }
    `}
    render={data => {
      const content = data.swapi.allPersons.map(num => (
        <li key={num.id}>{num.name}</li>
      ))
      return (
        <>
          <h1>All Users</h1>
          <ul>{content}</ul>
        </>
      )
    }}
  />
)

export default List
