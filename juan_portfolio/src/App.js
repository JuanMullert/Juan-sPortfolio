import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import About from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Home from './components/Home'

function App() {
  return (
   <>
    <header>
   <a href='/'> <h1 id='jdtitle'>Juan Diego Mullert</h1> </a>
   <nav>


<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="/AboutMe">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Projects">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Contact">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Resume">Resume</a>
  </li>
</ul>

        </nav>
    
   </header> 

   

   <div className='navlinks'>
    <BrowserRouter>
    <Routes>
      <Route path='/AboutMe' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/' element={<Home/>} />
   </Routes>
    </BrowserRouter>
   </div>

   </>
  );
}

export default App;
