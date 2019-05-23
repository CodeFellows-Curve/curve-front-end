import React from 'react'
import people from './people.js'
import "./cards.css"
import github from './assets/github.png'
import 
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
                      <div class='icons'>  
                        <a href={gitbase+member.github}> <img class='icon' src={github} /> </a>
                        <img class ='icon' src = {member.logo==='js'? 'https://raw.githubusercontent.com/CodeFellows-Curve/project-resources/master/assets/480px-Unofficial_JavaScript_logo_2.svg.png' : 'https://raw.githubusercontent.com/CodeFellows-Curve/project-resources/master/assets/C-Logo-1.jpg'} />
                        <a href={member.linkedin}><img class='icon' src={linkedin} /></a>
                      </div>
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