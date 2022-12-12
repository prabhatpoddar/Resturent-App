import React from "react";

const Contact = () => {
  return (
    <div>
    <h2 style={{textAlign:"center",marginTop:"15px",marginBottom:"15px"}}>How Can We Help ?</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.9774605186335!2d77.29678141435814!3d28.299006905849843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc0b01f0f019%3A0x93e4211b9a200ed0!2sAlchem%20International%20Private%20Limited!5e0!3m2!1sen!2sin!4v1664815246439!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xdojzzlj" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" autoComplete="off"  required/>
          <input type="email" placeholder="Enter Email" name="email" autoComplete="off"  required/>
          <textarea name="message" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your Message"></textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
     </div>
     </div>
  );
};

export default Contact;
