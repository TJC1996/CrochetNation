import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9uuecp', 'template_imupfr8', form.current, 'o9FZ4o6_bTNsmBLBD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    
    
    <div style={{marginTop: '40px', width: '100%', display: 'flex', justifyContent: 'center', padding: '20px'}}>
      <form ref={form} onSubmit={sendEmail} style={{width: '70%', textAlign: 'center', backgroundColor: '#f4f4f4', padding: '30px', borderRadius: '8px'}}>
        
        <h2>Contact Form</h2>
            <p >
              For all inquries please fill out the form below and we will get back to you as soon as possible.
            </p>
           
           
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>Name</label>
          <input style={{display: 'block', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}} type="text" name="user_name" />
        </div>
        
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>Email</label>
          <input style={{display: 'block', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc'}} type="email" name="user_email" />
        </div>
        
        <div style={{marginBottom: '15px'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>Message</label>
          <textarea style={{display: 'block', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px'}} name="message" />
        </div>
        
        <input style={{padding: '10px 20px', cursor: 'pointer', backgroundColor: '#008CBA', color: '#fff', border: 'none', borderRadius: '5px', marginTop: '10px'}} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs;
