import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import MainBtn from "./MainBtn"

function Navbar() {
  const location = useLocation()

  console.log(location)

  if (location.pathname !== '/') return <MainBtn />

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