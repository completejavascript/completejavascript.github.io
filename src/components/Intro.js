import React from 'react';
import InternalLink from './InternalLink';
import ExternalLink from './ExternalLink';

const Intro = () => {
  return (
    <header className="app-header background-color-yellow" id="intro">
      <div className="container-full row">
        <div className="col-xs-12 text-center margin-top-3 padding-top-3 padding-bottom-3">
          <h1 className="text-uppercase text-title"><strong>I'm Lam Pham.</strong></h1>
          <p className="margin-bottom-3 padding-bottom">Software Engineer, Web Developer, JavaScript Lover &amp;
            Blogger @<ExternalLink href="https://completejavascript.com/">completejavascript</ExternalLink></p>
          <div className="margin-bottom-2">
            <InternalLink className="btn btn-primary" href="#about">
              <strong>About</strong>
            </InternalLink>
            <InternalLink className="btn btn-primary-inverse margin-left-half border-2" href="#contact">
              <strong>Contact</strong>
            </InternalLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Intro;
