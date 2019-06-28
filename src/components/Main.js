import React from 'react';
import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import './Main.css';

const Main = () => {
  return (
    <div className="app-main float-right transition">
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main;
