import React from "react";
import ProfileImage from "../res/lampv-profile-completejavascript.com.jpg";
import ProfileImagePlaceHolder from "../res/profile-place-holder-sidebar.png";
import LazyImage from "./LazyImage";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";
import "./SideBar.css";
import {
  IconCodepen,
  IconFacebook,
  IconFreeCodeCamp,
  IconGithub,
  IconLinkedinSquare,
  IconTwitter,
} from "./Icons";

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
        <h3 className="text-uppercase color-white">
          <strong>Lam Pham</strong>
        </h3>
        <p className="color-grey">
          <small>Software Engineer &amp; Web Developer</small>
        </p>
        <nav>
          <InternalLink className="block" href="#intro">
            Intro
          </InternalLink>
          <InternalLink className="block" href="#portfolio">
            Portfolio
          </InternalLink>
          <InternalLink className="block" href="#about">
            About
          </InternalLink>
          <InternalLink className="block" href="#contact">
            Contact
          </InternalLink>
          <ExternalLink className="block" href="https://linktr.ee/lampv">
            Linktree
          </ExternalLink>
        </nav>
      </div>
    </div>
  );
};

const SideBarBottom = () => {
  return (
    <div className="flex-static text-center padding-bottom">
      <ExternalLink
        className="margin-right"
        href="https://codepen.io/completejavascript/"
      >
        <IconCodepen color="#FFF" />
      </ExternalLink>

      <ExternalLink
        className="margin-right"
        href="https://www.freecodecamp.org/completejavascript"
      >
        <IconFreeCodeCamp color="#FFF" />
      </ExternalLink>

      <ExternalLink
        className="margin-right"
        href="https://github.com/completejavascript"
      >
        <IconGithub color="#FFF" />
      </ExternalLink>

      <ExternalLink
        className="margin-right"
        href="https://www.facebook.com/completejavascript/"
      >
        <IconFacebook color="#FFF" />
      </ExternalLink>

      <ExternalLink
        className="margin-right"
        href="https://www.linkedin.com/in/completejavascript/"
      >
        <IconLinkedinSquare color="#FFF" />
      </ExternalLink>

      <ExternalLink href="https://twitter.com/CmpltJavaScript">
        <IconTwitter color="#FFF" />
      </ExternalLink>
    </div>
  );
};

const SideBar = (props) => {
  return (
    <aside
      className={`app-sidebar background-color-dark-grey position-fixed top-zero 
        height-full flex flex-column transition ${
          props.isResponsive ? "responsive" : ""
        }`}
    >
      <SideBarTop />
      <SideBarBottom />
    </aside>
  );
};

export default SideBar;
