import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';

// import NavBar from './components/NavBar'
import About from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  return (
   <>
   <header>
    <h1>Juan Mullert's Portfolio</h1>
   </header>

   <nav>
            <a href='/AboutMe'>About</a>
            <a href='/Contact'>Contact</a>
            <a href='/Projects'>Projects</a>

        </nav>


   <div className='navlinks'>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<NavBar/>} /> */}
      <Route path='/AboutMe' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Projects' element={<Projects/>} />
   </Routes>
    </BrowserRouter>
   </div>
   </>
  );
}

export default App;
