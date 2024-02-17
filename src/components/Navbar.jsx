import React from 'react'
import {useRef} from 'react'
import './style/navbar.css'





function Navbar() {
  const navRef = useRef()
  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive_nav");
    
  }
  return (
    <React.Fragment>
    <header>
     
      
      
      </header>
      </React.Fragment>
  )
  }

export default Navbar
