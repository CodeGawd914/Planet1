import React from 'react';
import emailjs from 'emailjs-com';
const SERVICE_ID = process.env.REACT_APP_emailjs_serviceID;
const TAMPLATE_ID = process.env.REACT_APP_emailjs_tamplateID;
const USER_ID = process.env.REACT_APP_emailjs_userID;
require('dotenv').config();


// import './ContactUs.css';


export default function Contactform() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_0qnyrll', TAMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          window.location.href = "/";
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="use_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Submit" />
    </form>
  );
}
