import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineAlignRight} from 'react-icons/fa'
function Header() {
  
  return (
      <main>
       <div className='social-media'>
        <div className='social-media-inner'> 
        <ul className='social-media-ul'>
          <li>
            <a href='https://facebook.com'>
            <FaFacebookSquare className='social-fa' />
            </a>
          </li>
          <li>
            <a href='https://facebook.com'>
            <FaLinkedin className='social-fa'/>
            </a>
          </li>
          <li>
            <a href='https://facebook.com'>
           <FaTwitter className='social-fa'/>
            </a>
          </li>
          <li>
            <a href='https://github.com/greenbright'>
            <FaGithub className='social-fa' />
            </a>
          </li>
        </ul>
        </div>
        </div>
      </main>
  
  )
}

export default Header
