import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import About from './components/AboutMe'
import Contact from './components/AboutMe'

function App() {
  return (
   <>
   <div className='navlinks'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />

   </Routes>
    </BrowserRouter>
   </div>
   </>
  );
}

export default App;
