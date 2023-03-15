import React from 'react';
import '../../src/assets/Aboutme.css';
import profilepic from '../assets/images/jdm.jpeg'

export default function About() {
  return (
    <div className='body1'>
      <picture>
        <img className='juan' src={profilepic} alt="Juan" />
      </picture>

      <h1 className='text1'>About Me</h1>
    <div className='aboutText'>
      
      <p>
        I’m a 21 years old Junior Full-Stack Developer. Passion, patience and consistency are three essential qualities
                  I've developed as an early web developer. These values have helped me finish my assignments without 
                 being too overwhelmed.
                              <br />
               <br /> I joined Vanderbilt Web Development Bootcamp to shape my skills 
                 as much as possible and to expand my vision as well as my perception of what is to be a Web Developer. 
                  This field has shown in the past and present to be an important part in every large or small company, making the look of 
                   the website a way to attract more customers, 
                   in my opinion it will continue to be this way in the near and long future.
      </p>
    </div>

   
       <footer className="bg-dark text-center text-white footer">
   
   <div className="container p-4 pb-0">
     
     <section className="mb-4">
       
       <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/juanmullert" role="button"
         ><i className="fab fa-facebook-f"></i>LinkedIn</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
         ><i className="fab fa-twitter"></i>Github</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
         ><i className="fab fa-google"></i>Gitlab</a>
 
       
       <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
         ><i className="fab fa-instagram"></i>Youtube</a>

     </section>
     
   </div>
   
 
   
   <div className="text-center p-3" >
     © 2023 Copyright: 
     <a className="text-white" href="https://mdbootstrap.com/"> Juan's Portfolio</a>
   </div>
   
 </footer>
    </div>
  );
}