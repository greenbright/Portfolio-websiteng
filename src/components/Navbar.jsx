import React from 'react'
import {useRef} from 'react'
import{Link} from 'react-router-dom'
import './style/navbar.css'
import {FaListUl,FaBars,FaTimes} from 'react-icons/fa'
import MyImage from '../components/images/zmes2.jpg'



function Navbar() {
  const navRef = useRef()
  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive_nav");
    
  }
  return (
    <React.Fragment>
    <header>
      <img src={MyImage} alt="" className="img-1" />
      <nav ref={navRef} >
          <Link to ="/" className='li'> MainPage</Link>
          <Link to ="/project" className='li'> Projects</Link>
          <Link to ="/award" className='li'> Award</Link>
          <Link to ="/community" className='li'>Aboutme</Link>
           
           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/> 
           </button>
      </nav>
      <button className ="nav-btn" onClick={showNavbar}>
            <FaBars/>
           </button>
      </header>
      </React.Fragment>
  )
  }

export default Navbar
