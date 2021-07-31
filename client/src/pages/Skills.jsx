import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SkillCard from '../components/SkillCard'
import skills from '../skillsCollection'

function Skills() {
  return (
    <Router>
      <div className="page" id="skills">
        <h2>MY SKILLS</h2>
        <div id="skills-table">
          <ul>
            <SkillCard 
              skills = {
                skills
              }
            />
          </ul>
        </div>
      </div>
    </Router>
  )
}

export default Skills