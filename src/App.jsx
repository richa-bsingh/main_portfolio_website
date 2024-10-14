// src/App.js

import React, { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Languages, Navbar, Portfolio } from "./components";
import Projects from './components/Projects';

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
            <Portfolio scrollContainer={wrapperRef} />
          </div>
          <div id="projects" className='relative z-30 bg-primary'>
            <Projects />
          </div>
          <div id="languages" className='relative z-30 bg-primary'>
            <Languages />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;