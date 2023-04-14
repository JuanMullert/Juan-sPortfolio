import React from "react";
import '../assets/resume.css';
import resume from '../assets/juancv.pdf';

export default function Resume() {
    return (
        <div className="body4">
      <h2>Resume</h2>
      <p>
        Download my resume: <a href={resume} download>Click Here</a>
      </p>
      <div className="proficiencies">
        <h3>Frontend Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>jQuery</li>
        </ul>
      </div>
      <div className="proficiencies">
        <h3>Backend Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
        </ul>
      </div>

       <footer className="bg-dark text-center text-white footer4">
   
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
    )}

    