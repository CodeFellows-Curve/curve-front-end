import React from 'react'
import people from './people.js'


const Cards = () => {
  console.log('people object', people.teams);
  return (<div>
    <h2>Teams</h2>
    
    {
      people.teams.map(team => {
        return (<h3> {team.name} </h3>)
      })
    }
  </div>)
}

export default Cards