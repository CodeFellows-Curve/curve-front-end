import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const User = styled.div`
  text-align: center;
  font-family: 'markweb-light', Arial;

  h2{
    font-size: 1.5em;
  }
  ul{
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
  ul>li{
    font-size: 1.2em;
    color: purple;
    border-bottom: 1px solid #ccc;
  }
  li:last-child {
    border: none;
  }
  li a {
    text-decoration: none;
    color: #000;
    display: block;
    width: 200px;
   
    -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
    -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
    -o-transition: font-size 0.3s ease, background-color 0.3s ease;
    -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
    transition: font-size 0.3s ease, background-color 0.3s ease;
  }
   
  li a:hover {
    font-size: 30px;
    background: #f6f6f6;
  }

`

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
            <li key={user.id}><a href="/">{user.name}</a></li>
          ))) ||
        null
      return (
        <>
          <User>
            <h2>Users list</h2>
            <ul>{content}</ul>
          </User>
        </>
      )
    }}
  />
)

export default List
