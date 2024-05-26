import React from 'react';

import { IconBars } from './Icons';
import './ToggleMenu.css';

const ToggleMenu = ({ handleClick, isResponsive, color, bgColor }) => {
  return (
    <div 
      onClick={handleClick}
      className={`app-toggle-menu background-color-${bgColor} position-fixed padding cursor-pointer
        line-height-reset border-radius transition ${isResponsive ? "responsive" : ""}`}
      >
        <IconBars color={color} />
    </div>
  )
}

export default ToggleMenu;
