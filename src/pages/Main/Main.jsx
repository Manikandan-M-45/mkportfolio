import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Skill from '../Skills/Skill'
import Projects from '../Projects/Projects'
import Journey from '../Journey/Journey'
import Contact from '../../components/contact/Contact'

const Main = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Projects />
      <Journey />
      <Contact />
    </div>
  )
}

export default Main