import React, { useState } from 'react'
import './style/award.css'
import Awardpix from './images/award.png'


function Award() {
  return (
    <section className='section-award'>
      <div className='award-content'>
      <img src={Awardpix} alt="" className="award-pix" />
      <h3>Google digital skill for AFRICA</h3>
      <span>2020</span>
      <code className='code-color'><></></code>
      </div>
      
     
    </section>
  )
}

export default Award
