import React from 'react'
import {useRef} from 'react'
import { useGlobalContext } from '../../context';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import {FaTimes} from 'react-icons/fa'



function Form() {
  const{isModalOpen,CloseModal} = useGlobalContext()
  const form = useRef()
  const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm(
      'service_wdxlkb1', 
      'template_zlefifo',
       form.current, 
       'hhrxp3SXQuMHqgbTW')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          toast.success('Message sent')
          
      }, (error) => {
          console.log(error.text);
          toast.error('Something went wrong,check network connection')
      });
  }
  return (
    <div className={`${isModalOpen ?'modal-overlay show-modal':'modal-overlay'}`}>
      <div className="form-container">
        <h3>Contact Me</h3>
        <form ref={form} onSubmit={sendEmail} className='form-area'>
            <p><input type="text" name="user_name" id="form-text" placeholder='Name'/></p>
            <p><input type="email" name="user_email" id ="form-email" placeholder='Email' /></p>
            <textarea name="user_message" id ="form-content" placeholder='Message' />
            <div>
             <button type="submit" value="send" className='btn-add'>Send</button>
            </div>
             <button className='close-modal-btn' onClick={CloseModal}><FaTimes/></button>
        </form>
      </div>
    </div>
    
  )
}


export default Form
