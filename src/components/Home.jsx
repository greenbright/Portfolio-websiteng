import React from 'react'
import { useState , useRef,useEffect, useContext} from 'react'
import { AppContext } from '../context'
import './style/content.css'
import{Link} from 'react-router-dom'
import MyImage from '../components/images/zmes2.jpg'
import {FaListUl,FaBars,FaTimes} from 'react-icons/fa'
import { GrProjects } from "react-icons/gr";




function Home() {
  const getRef = useRef()
  console.log(getRef)
  const data = useContext(AppContext)
  console.log(data)
  
  return (
   <main className='main'>
    <div className='portfolio-container'>
    <GrProjects className='icon-image'/>
    <nav className='portfolio-nav'>
          <button className='portfolio-link-1'><Link to ="/project" className='link-1'> Projects</Link></button>
          <button className='portfolio-link-1'><Link to ="/award" className='link-1' > Award</Link></button>
          <button className='portfolio-link-1'><Link to ="/community" className='link-1'>Aboutme</Link></button>   
      </nav>
      <div className='portfolio-display'>
        <div className='portfolio-text'>
          <h2 className='header-1'>I'm Meshach Bright Ekwebelem</h2>
          <p className='header-2'>A fullstack developer and crypto enthusiat.</p>
          <span className='header-3'>I'm available in building small and big web app,especially those related to cryptocurrencies</span>
         
       </div> 
       <div className='portfolio-image'>
         <img src={MyImage} alt="" className='image-1' />
         </div>
         </div> 
      </div>
     
   </main>
    
  )
}

export default Home
