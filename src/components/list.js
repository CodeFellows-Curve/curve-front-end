import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const List = () => (
  <StaticQuery
    query={graphql`
      {
        curve_users {
          individuals {
            name
            review {
              id
              overallScore
            }
          }
        }
      }
    `}
    render={data => {
      const content =
        (data &&
          data.curve_users &&
          data.curve_users.individuals &&
          data.curve_users.individuals.map(user => (
            <li key={user.id}>{user.name}</li>
          ))) ||
        null
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
