//import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './components/content'
import Award from './components/award'
import About from './components/aboutme'
import Project from './components/project'
import Navbar from './components/Navbar'
import Form from './components/form'



function App() {
  const[isModalOpen,setIsModalOpen] = useState(false)
  const OpenModal =()=>{
    setIsModalOpen(true)
  }
  const CloseModal =()=>{
    setIsModalOpen(false)
  }
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <Form openmodal={OpenModal} closemodal={CloseModal} open={isModalOpen}/>
      <Routes>
      <Route  path='/' element={<Content/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/award' element={<Award/>}/>
      <Route path='/community' element={<About opentoggle ={OpenModal}/>}/>
      
      </Routes>
      <ToastContainer/>
      </Router>

       
    </div>
  );
}

export default App;
