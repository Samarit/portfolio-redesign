import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  return(
    <Router>
      <div>
        <h1>I'm Aleksey</h1>
      </div>
      <Navbar />
    </Router>
  )
}

export default Home