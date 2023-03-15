import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import '../src/assets/App.css';
import About from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Resume from './components/Resume'
import Contact2 from './components/Contact'

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
    <a class="nav-link" href="/Portfolio">Portfolio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Resume">Resume</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Contact2">Contact</a>
  </li>
</ul>

        </nav>
    
   </header>

   <div className='navlinks'>
    <BrowserRouter>
    <Routes>
      <Route path='/AboutMe' element={<About/>} />
      <Route path='/Resume' element={<Resume/>} />
      <Route path='/Contact2' element={<Contact2/>} />
      <Route path='/Portfolio' element={<Portfolio/>} />
      <Route path='/' element={<Home/>} />
      
   </Routes>
    </BrowserRouter>
   </div>

   </>
  );
}

export default App;
