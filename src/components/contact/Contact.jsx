import React from "react";
import './contact.css';
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_85no5wp', 'template_15urpyh', form.current, '3lmYLWF3M-yYHcGeM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
    return(
        <section id="contact">
            <h5 style={{textAlign:"center"}}>Get In Touch</h5>
            <h2 style={{textAlign:"center"}}>Contact</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>tombibish8@gmail.com</h5>
                        <a href='mailto:tombibish8@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Tom Bibish</h5>
                        <a href='https://m.me/tbibish' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+972 54-987-9846</h5>
                        <a href='https://api.whatsapp.com/send?phone=+972549879846' target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required/>
                    <input type="email" name='email' placeholder="Your Email" required/>
                    <textarea name="message" rows='7' placeholder='Your Message' required/>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact