import React from 'react'
import people from './people.js'
import "./cards.css"
import github from './assets/team-pics/other_logos/github_50x50.png'
import pictures from './assets/team-pics'
// import js from '.assets/js.png'
// import c from '.assets/c.png'
import linkedin from './assets/team-pics/other_logos/linkedin_50x50.png'
import js from './assets/team-pics/other_logos/javaScript.png'
import c from './assets/team-pics/other_logos/c.png'


const Cards = () => {
  const gitbase='http://github.com/'
  return (
  <div id='teams'>
    <h2>Meet the Teams</h2>
    
    {
      people.teams.map(team => {
        console.log(pictures)
        return (
          <div class='team'>
          <h3 class='title'> {team.name} </h3>
            <div class='members'>             
                {team.members.map( member => {
                  return (
                    <div class='card'>        
                      <div class='name'> {member.name} </div>
                      <img class='portrait' src={pictures[member.picture]} />
                      <div class='icons'>  
                        <a href={gitbase+member.github}> <img class='icon' src={github} /> </a>
                        <img class ='icon' src = {member.logo==='js'? js : c} />
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