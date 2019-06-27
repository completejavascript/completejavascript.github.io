import React from 'react';
import Header from './Header';
import About from './About';
import './Main.css';

const Main = () => {
  return (
    <div className="app-main float-right transition">
      <Header />
      <About />
    </div>
  )
}

export default Main;
