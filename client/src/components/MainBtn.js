import React from 'react'
import { NavLink } from 'react-router-dom'

function MainBtn() {
  return(
    <nav>
      <ul>
        <li><NavLink to="/">Main</NavLink></li>
      </ul>
    </nav>
  )
}

export default MainBtn