import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import './assets/App.css';
import About from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Resume from './components/Resume'
import Contact2 from './components/Contact'
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <header>
        <a href='/'> <h1 id='jdtitle'>Juan Diego Mullert</h1> </a>
        <nav>


          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/AboutMe">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact2">Contact</Link>
            </li>
          </ul>

        </nav>

      </header>

      <div className='navlinks'>
        
          <Routes>
            <Route path='/AboutMe' element={<About />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/Contact2' element={<Contact2 />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/' element={<Home />} />

          </Routes>
        
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
