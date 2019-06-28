import React from 'react';
import Intro from './Intro';
import About from './About';
import './Main.css';

const Main = () => {
  return (
    <div className="app-main float-right transition">
      <Intro />
      <About />
    </div>
  )
}

export default Main;
