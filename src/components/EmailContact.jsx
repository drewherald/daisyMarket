import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailContact() {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sanwscg', 'template_ov23kbq', e.target, 'C55wNle3LaabHENnf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };
  
    return (
      <form className='mailListForm' ref={form} onSubmit={sendEmail}>
       <input type="email" id='email' name='message' placeholder='EMAIL'/>
       <button>SUBMIT</button>
      </form>
      
    );
}
