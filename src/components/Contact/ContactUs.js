import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const userMessage = form.current.message.value;

    emailjs.init('o9FZ4o6_bTNsmBLBD'); // Initialize EmailJS with your user ID
    emailjs.send('service_y9uuecp', 'template_imupfr8', {
      user_name: userName,
      user_email: userEmail,
      message: userMessage,
    })
    .then((result) => {
        console.log(result.text);
        setMessage('Your message has been sent!');
        setMessageType('success');
    }, (error) => {
        console.log(error.text);
        setMessage('An error occurred, please try again.');
        setMessageType('error');
    });
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <form ref={form} onSubmit={sendEmail} style={{ width: '70%', textAlign: 'center', backgroundColor: '#f4f4f4', padding: '30px', borderRadius: '8px' }}>
        <h2>Contact Form</h2>
        <p>For all inquiries, please fill out the form below and we will get back to you as soon as possible.</p>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} type="text" name="user_name" />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} type="email" name="user_email" />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }} name="message" />
        </div>
        {message && <div style={{color: messageType === 'error' ? 'red' : 'green'}}>{message}</div>}
        <input style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#008CBA', color: '#fff', border: 'none', borderRadius: '5px', marginTop: '10px' }} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs;

