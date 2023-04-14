import React, {useState} from "react";

import '../assets/contact.css';
import contactimg from '../assets/images/conact.png'

export default function Contact() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');
  
    // const [validationErrors, setValidationErrors] = useState({
    //   name: false,
    //   email: false,
    //   subject: false,
    //   message: false,
    // });
  
    // const handleOnChange = (event) => {
    //   const { name, value } = event.target;
  
    //   if (name === 'name') setName(value);
    //   if (name === 'email') setEmail(value);
    //   if (name === 'subject') setSubject(value);
    //   if (name === 'message') setMessage(value);
    // }
  
    // const handleOnClick = () => {
    //   if (name.length < 1) {
    //     setValidationErrors({
    //       ...validationErrors,
    //       name: true
    //     });
    //   } else {
    //     setValidationErrors({
    //       ...validationErrors,
    //       name: false
    //     });
    //   }
    // }
  
    return (
        
      <section className="mb-4">
        
        <picture>
          <img className='juan' src={contactimg} alt="" />
        </picture>
         
        <h2 className="h1-responsive font-weight-bold text-center my-4 textFont">Contact me</h2>
        <p className="text-center w-responsive mx-auto mb-5 textFont2">Do you have any questions? Please do not hesitate to contact me. <br />
        <br />
        LOCATION: Clarksville, TN, USA <br />
        TEL: 859-513-1445 <br />
        EMAIL: jmullert9@gmail.com</p>
        {/* <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" className="theform" name="contact-form" action="mail.php" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input value={name} onChange={(event) => { handleOnChange(event) }} type="text" id="name" name="name" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`} placeholder='Enter your name'></input>
                    <label className="textFont" for="name"></label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input value={email} onChange={(event) => { handleOnChange(event) }} type="text" id="email" name="email" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`} placeholder='Enter your email'></input>
                    <label className="textFont" for="email"></label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input value={subject} onChange={(event) => { handleOnChange(event) }} type="text" id="subject" name="subject" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`} placeholder='Subject'></input>
                    <label className="textFont" for="subject"></label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea value={message} onChange={(event) => { handleOnChange(event) }} type="text" id="message" name="message" rows="2" className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`} placeholder='Your Message'></textarea>
                    <label className="textFont" for="message"></label>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center text-md-left">
              <button className="btn btn-primary theform" onClick={handleOnClick}>Send</button>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center ">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p className="textFont">Clarksville, TN, USA</p>
              </li>
              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p className="textFont">859-513-1445</p>
              </li>
              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p className="textFont">jmullert9@gmail.com</p>
              </li>
            </ul>
          </div>
        </div> */}
        <footer className="bg-dark text-center text-white footer">
   
   <div className="container p-4 pb-0">
     
     <section className="mb-4">
       
       <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/juan-mullert-6a2537253/" role="button"
         ><i className="fab fa-facebook-f"></i>LinkedIn</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/juanmullert" role="button"
         ><i className="fab fa-twitter"></i>Github</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="https://vanderbilt.bootcampcontent.com/jmullert9-WmlPAO" role="button"
         ><i className="fab fa-google"></i>Gitlab</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/" role="button"
         ><i className="fab fa-instagram"></i>Youtube</a>

     </section>
     
   </div>
   
 
   
   <div className="text-center p-3" >
     © 2023 Copyright: 
     <a className="text-white" href="https://mdbootstrap.com/"> Juan's Portfolio</a>
   </div>
   
 </footer>
      </section>
      
    )
  }
       
  
     
         