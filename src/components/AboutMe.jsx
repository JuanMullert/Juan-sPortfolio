import React from 'react';
import '../assets/Aboutme.css';
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
      I am a Junior Full-Stack Developer with a strong work ethic and a passion for the field. Through the last year, I have honed my skills in web development and developed essential qualities such as patience, consistency, and attention to detail. These qualities have helped me excel in completing assignments with ease and efficiency.
                              <br />
               <br /> To further enhance my skills, I have recently joined Vanderbilt Web Development Bootcamp. This program has provided me with valuable opportunities to expand my knowledge and gain a deeper understanding of what it takes to be a successful Web Developer. With the rapidly growing importance of websites for businesses, I firmly believe that web development will continue to be a crucial aspect in the future of every industry.

Overall, I am confident in my abilities and eager to contribute my skills to any project or team that I am a part of.
      </p>
    </div>

   
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
    </div>
  );
}