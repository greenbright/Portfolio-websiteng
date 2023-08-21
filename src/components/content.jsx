import React from 'react'
import { useState , useRef,useEffect } from 'react'
import './style/content.css'
import CodeImage from '../components/images/webImage.jpg'
import TestingImage from '../components/images/webimage2..webp'
import DesignImage from '../components/images/blackimage-1.jpg'



function Content() {
  const getRef = useRef()
  console.log(getRef)

  
  return (
   <main className='main'>
   <section className='section-1 text-center'> 
    <div className=' blue'>
      
        <div className='full-stack'>
          <h2>Welcome, I'm Meshach Bright Ekwebelem</h2>
          <h2 className='full-dev'>Fullstack Developer</h2>
          <p>A developer, with interest in building small and big web3 projects includings other(websites and apps)</p>
          <span>Writing codes | Data entry | Document typing | Data Evaluation| </span>
        
       </div> 

       <div className='main-stack'>
       <h3 ref={getRef} className='packages'>Features</h3>
      </div>
      
      <div className='features'>
        <div className='design-head'>
        <h3>The Design</h3>
        <img src={DesignImage} alt="Design"  className='design'/>
        <p>The design step is important, it gives a view of how the finished product should look like. </p>
        </div>
        <div className='codes-head'>
        <h3>The Codes</h3>
        <img src={CodeImage} alt="Codes"  className='codes'/>
        <p> Fullstack is more of writing a clean readable codes, that is functional and responsive.</p>
        </div>
        <div className='test-deploy-head'>
        <h3>Deployment</h3>
        <img src={TestingImage} alt="Testing" className='testing'/>
        <p>Testing and Deployment is the perfecting stage of any project.</p>
        </div>
       </div>
      </div>
      </section>
   </main>
    
  )
}

export default Content
