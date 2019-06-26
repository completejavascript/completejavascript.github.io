import React from 'react';
import { IconBars } from './Icons';
import './ToggleMenu.css';

const ToggleMenu = (props) => {
  return (
    <button 
      onClick={props.handleClick}
      className={`app-toggle-menu position-fixed border-2 border-color-blue 
        transition ${props.isResponsive ? "responsive" : ""}`}
      >
        <IconBars color="#2196f3" />
    </button>
  )
}

export default ToggleMenu;
