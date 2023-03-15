import React from 'react'

import gamebro from '../assets/images/gamebro.jpeg'
import weather from '../assets/images/weather2.jpeg'
import scheduler from '../assets/images/schedulerimg.png'
import passGen from '../assets/images/passgen.jpeg'
import textEd from '../assets/images/texted.jpeg'
import thenoSQL from '../assets/images/nosql.png'

import '../../src/assets/portfolio.css';

export default function Myprojects() {
    return (
      <div className='body2'>
        <h1 className='textProjects'>My Projects</h1>
        
<div className='row'>

  <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
    <a href="https://gamebrobysarj.herokuapp.com/">
      GameBro
    <img 
      src= {gamebro} 
      className='imagespr'
      alt="Boat on Calm Water"/>
      </a>
  </div>

  <div className='col-lg-4 mb-4 mb-lg-0'>
    <a href="https://juanmullert.github.io/Juan-s_WorkDayScheduler/">
      Scheduler
    <img
      src={scheduler}
      className='imagespr'
      alt=""/>
      </a>
  </div>

  <div className='col-lg-4 mb-4 mb-lg-0'>
    <a href="https://juanmullert.github.io/Juan-s-WeatherDashboard/">
      Weather Dashboard
    <img
      src={weather}
      className='imagespr'
      alt=""/>
      </a>
  </div>

  <div className='col-lg-4 mb-4 mb-lg-0'>
    <a href="https://juanmullert.github.io/JuanMullert-03-Challenge-PasswordGeneratorProject/">
      Password Generator
    <img
      src={passGen}
      className='imagespr'
      alt=""/>
      </a>
  </div>

  <div className='col-lg-4 mb-4 mb-lg-0'>
    <a href="https://github.com/JuanMullert/PWA_TextEdior_ByJD">
      Text Editor - PWA
    <img
      src={textEd}
      className='imagespr'
      alt=""/>
      </a>
  </div>

  <div className='col-lg-4 mb-4 mb-lg-0'>
    <a href="https://github.com/JuanMullert/NoSQL-API-ByJD">
    NoSQL API (Social Network)
    <img
      src={thenoSQL}
      className='imagespr'
      alt=""/>
      </a>
  </div>


</div>

    <footer className="bg-dark text-center text-white footer2">
   
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