import React from 'react'
import people from './people.js'
import "./cards.css"
import github from './assets/github.png'
// import js from '.assets/js.png'
// import c from '.assets/c.png'
import linkedin from './assets/linkedin.jpg'


const Cards = () => {
  console.log('people object', people.teams);
  const gitbase='http://github.com/'
  return (
  <div id='teams'>
    <h2>Teams</h2>
    
    {
      people.teams.map(team => {
        return (
          <div class='team'>
          <h3 class='title'> {team.name} </h3>
            <div class='members'>             
                {team.members.map( member => {
                  return (
                    <div class='card'>        
                      {member.name}
                      <img src='https://via.placeholder.com/200' />
                      <a href={gitbase+member.github}> <img src={github} /> </a>
                      {/* <img src = {member.logo==='js'? js : c} />*/}
                      <a href={member.linkedin}><img class='icon' src={linkedin} width='30' height='30'/></a>
                    </div>
                    )
                  }
                )}             
            </div>
          </div>
        )
      })
    }
    
  </div>
  )
}

export default Cards