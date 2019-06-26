import React from 'react';
import ProfileImage from '../res/lampv-profile-completejavascript.com-640.jpg';
import "./SideBar.css";
import { 
  IconCodepen, 
  IconFacebook, 
  IconFreeCodeCamp, 
  IconGithub, 
  IconLinkedinSquare, 
  IconTwitter 
} from './Icons';

const SideBarTop = () => {
  return (
    <div className="flex-spread">
      <div className="padding margin-2">
        <img
          className="image-responsive image-round border border-3 border-white"
          alt="Lam Pham's profile"
          src={ProfileImage}
        />
      </div>
      <div className="text-center">
        <h3 className="text-uppercase color-white"><strong>Lam Pham</strong></h3>
        <p className="color-grey"><small>Software Engineer &amp; Web Developer</small></p>
        <nav>
          <a className="block" href="#intro">Intro</a>
          <a className="block" href="#portfolio">Portfolio</a>
          <a className="block" href="#about">About</a>
          <a className="block" href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  )
}

const SideBarBottom = () => {
  return (
    <div className="flex-static text-center padding-bottom">
      <a className="margin-right" href="https://codepen.io/completejavascript/">
        <IconCodepen color="#FFF" />
      </a>
      <a className="margin-right" href="https://www.freecodecamp.org/completejavascript">
        <IconFreeCodeCamp color="#FFF" />
      </a>
      <a className="margin-right" href="https://github.com/completejavascript">
        <IconGithub color="#FFF" />
      </a>
      <a className="margin-right" href="https://www.facebook.com/completejavascript/">
        <IconFacebook color="#FFF" />
      </a>
      <a className="margin-right" href="https://www.linkedin.com/in/completejavascript/">
        <IconLinkedinSquare color="#FFF" />
      </a>
      <a href="https://twitter.com/CmpltJavaScript">
        <IconTwitter color="#FFF" />
      </a>
    </div>
  )
}

const SideBar = (props) => {
  return (
    <aside 
      className={`app-sidebar background-color-dark-grey position-fixed top-zero 
        height-full flex flex-column transition ${props.isResponsive ? "responsive" : ""}`}
    >
      <SideBarTop />
      <SideBarBottom />
    </aside>
  )
}

export default SideBar;