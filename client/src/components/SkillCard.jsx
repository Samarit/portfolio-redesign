import React from 'react'

function SkillCard({ skills }) {
  return (
    skills.map((skill, index) => {
      return <li 
              key={ index }
              id={ skill.id }>
                <div className="cardContainer">
                  <img src="" alt="img"/>
                  <p>{ skill.text }</p>
                </div>
            </li>
    })
  )
}

export default SkillCard