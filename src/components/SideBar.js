import React from 'react';
import ProfileImage from '../res/lampv-profile-completejavascript.com.jpg';
import ProfileImagePlaceHolder from '../res/profile-place-holder-sidebar.png';
import LazyImage from './LazyImage';
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
        <LazyImage
          placeHolder={ProfileImagePlaceHolder}
          src={ProfileImage}
          width="100%"
          height="auto"
          effect="opacity"
          alt="Lam Pham's profile"
          extraClass="image-responsive image-round border border-3 border-color-white"
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
      <a className="margin-right" target="_blank" rel="noopener noreferrer" href="https://codepen.io/completejavascript/">
        <IconCodepen color="#FFF" />
      </a>
      <a className="margin-right" target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/completejavascript">
        <IconFreeCodeCamp color="#FFF" />
      </a>
      <a className="margin-right" target="_blank" rel="noopener noreferrer" href="https://github.com/completejavascript">
        <IconGithub color="#FFF" />
      </a>
      <a className="margin-right" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/completejavascript/">
        <IconFacebook color="#FFF" />
      </a>
      <a className="margin-right" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/completejavascript/">
        <IconLinkedinSquare color="#FFF" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CmpltJavaScript">
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