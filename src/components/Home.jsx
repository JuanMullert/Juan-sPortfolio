import React from "react";
import background from '../assets/images/world.jpg'
import '../assets/home.css';

export default function Home() {
    return (
        <section>
        <div className='homeBackground'>
   <img
      src={background}
      className='w-100 shadow-1-strong rounded mb-4 backgr backphoto'
      alt="Wintry Mountain Landscape"
    />
   </div>

   <div className='welcomeTexts'>
    <h2 className="welcome">WELCOME TO MY PORTFOLIO</h2>
     <h3 className="fullstack">Full-Stack Developer</h3>
   </div>
   </section>

   
    )
}
