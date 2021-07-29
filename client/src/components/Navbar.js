import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/works">Works</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
      </ul> 
    </nav>
  )
}

export default Navbar