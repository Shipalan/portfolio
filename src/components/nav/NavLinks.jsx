import React from 'react'
import './links.css'

const NavLinks = () => {
  return (
    <nav className='links'>
      <a href="#about-me" className='nav'>About Me</a>
      <a href="#skills" className='nav'>Skills</a>
      <a href="#portfolio" className='nav'>Portfolio</a>
    </nav>
  )
}

export default NavLinks