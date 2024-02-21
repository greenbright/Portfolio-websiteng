import React from 'react'
import './style/about.css'
import { useGlobalContext } from '../context';
import { toast } from 'react-toastify';
import WebAnimation from '../components/images/web-about-us.jpg'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import Form from './compo/form'
const PDF_FILE_URL = 'http://localhost:3000/Dev-Resume-Doc.pdf';


function About({open}) {
  const {OpenModal} = useGlobalContext()
  console.log(OpenModal)
  
  const downloadFileAtUrl=(url)=>{
    const fileName = url.split('/').pop()
   const aTag = document.createElement('a')
   aTag.href= url;
   aTag.setAttribute('download',fileName);
   document.body.appendChild(aTag);
   aTag.click()
   aTag.remove()
   toast.success('Downloaded successfully')
  }
  
  return (
    <section className='section-about-header'>
     
      <Form/>
      <div className='about-header'>
      
         <img src={WebAnimation} alt="animation images" className='about-web-ani'/>
        
        <div className='about-content'>
        <h3 className='text-center about-font'> About-me</h3>
        <p>I am a fullstack developer with a passion of developing small and larger project around Web3 and mobile application.My top four favourite resources for learning are </p>
        <span>Freecodecamp</span>| <span>Udemy</span>| <span>Traversy media</span>| <span>stackoverflow</span>
           <div className='about-btn'>
           <button className='about-btn-hire' onClick={OpenModal}>Hire me</button>
           <button className='about-btn-resume'onClick={()=>{downloadFileAtUrl(PDF_FILE_URL )}}>Resume</button>
           </div>
           <div className='about-social-media'>
           <li>
            <a href='https://twitter.com/greenrock100?t=P3b66gkawcJDCqqTWbfCiQ&s=09'>
            <FaTwitter className='about-fa' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/meshach-bright-ekwebelem-02b18421a'>
            <FaLinkedin  className='about-fa' />
            </a>
          </li>
          <li>
            <a href='https://github.com/greenbright'>
            <FaGithub  className='about-fa' />
            </a>
          </li>
           </div>
           <div className='about-stack'>
            <span>HTML&CSS</span>|
            <span>BOOTSTRAP</span>|
            <span>TAILWIND</span>|
            <span>NODE</span>|
            <span>REACT</span>|
            <span>MONGODB</span>|
            <span>FIREBASE</span>
           </div>
           </div>
      </div>
    </section>
  )
}

export default About
