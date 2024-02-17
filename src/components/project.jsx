import React from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import BlackImage from './images/blackimage-1.jpg'
import ExcelImage from './images/excel-pix.png'
import CalculatorImage from './images/simple-calculator.png'
import Mapty from './images/mapty-app-1.png'
import Housemarketplace from './images/marketplace-1.png'
import Winebar from './images/wine-bar-3-post.png'
import Dailymeal from './images/dailymeal-edited.png'
import Currency from './images/currency-convertor.png'

 
function Project() {
  return ( 
  <section className='section-project-header'>
    
  <h3 className='text-center projects-font'>Projects</h3>
  <div className='project-content'>
  <div className='g-col-4'>
    <h3>Mapty App</h3>
    <img src={Mapty} alt="" className='project-image' />
    <p>Features includes,geolocation, booking ride, and cycling.OOP method was used</p>
    <a href="https://github.com/greenbright/Mapty-Geolocation-App-Javascript-.git"><button className='project-btn-code'>View code</button></a>
    <a href="https://mapty-geolocation-app-javascript.vercel.app/"><button className='project-btn-page'>View page</button></a>
  </div>
  <div className='g-col-4'>
  <h3>Housemarketing App</h3>
    <img src={Housemarketplace} alt="" className='project-image'/>
    <p>Real estate app with renting and hirng features,discount and google authetication, and storing data in firebase</p>
    <a href="https://github.com/greenbright/house-marketplace-web.git"><button className='project-btn-code' >View code</button></a>
     <a href="https://greenbright.github.io/house-marketplace-web"><button className='project-btn-page'>View page </button></a>
    </div>
  <div className='g-col-4'>
  <h3>Resturant locator </h3>
    <img src={BlackImage} alt="" className='project-image'/>
    <p>Search for any eatery and find one</p>
    <button className='project-btn-code'>View code</button>
    <button className='project-btn-page'>View page</button>
  </div>
  <div >
  <h3>Daily-meal-app</h3>
    <img src={Dailymeal}alt="" className='project-image'/>
    <p>Created an internal API of meal.Users can breakfast,lunch and dinner to find meal meant for that time.</p>
    <button className='project-btn-code'>View code</button>
    <button className='project-btn-page'>View page</button>
  </div>
  <div >
  <h3>Winebar-app(API)</h3>
    <img src={Winebar}alt="" className='project-image'/>
    <p>I made use of an external API to create this App, so users could find any wine or cocktail they desire.</p>
    <button className='project-btn-code'>View code</button>
    <button className='project-btn-page'>View page</button>
  </div>

  <div >
  <h3>MsExcel Data Sheet</h3>
    <img src={ExcelImage}alt="" className='project-image'/>
    <p>Data entry and evaluation for a project work</p>
    <button className='project-btn-code'>View code</button>
    <button className='project-btn-page'>View page</button>
  </div>
  <div className='g-col-4'>
  <h3>Currency Convertor</h3>
    <img src={Currency}alt="" className='project-image' />
    <p>A simple currency converter with vanilla javascript</p>
    <a href="https://github.com/greenbright/currrency-converter.git"><button className='project-btn-code'>View code</button></a> 
    <a href="http://currency-convertor-nine.vercel.app"><button className='project-btn-page'>View page</button></a>
  </div>
  <div className='g-col-4'>
  <h3>OOP Maths Caculator</h3>
    <img src={CalculatorImage}alt="" className='project-image' />
    <p>A simple calculator built with vanilla javascript</p>
    <button className='project-btn-code'>View code</button>
    <button className='project-btn-page'>View page</button>
  </div>
  
  </div>
  </section>
   
  )
}

export default Project
