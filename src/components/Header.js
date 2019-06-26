import React from 'react';

const Header = () => {
  return (
    <header className="app-header background-color-yellow">
      <div className="container-full row">
        <div className="col-xs-12 text-center margin-top-3 padding-top-3 padding-bottom-3">
          <h1 className="text-uppercase text-title"><strong>I'm Lam Pham.</strong></h1>
          <p className="margin-bottom-3">Software Engineer, Web Developer, JavaScript Lover &amp; Blogger @<a href="https://completejavascript.com/">completejavascript</a></p>
          <div>
            <a href="#about" className="btn btn-primary margin-half"><strong>About</strong></a>
            <a href="#contact" className="btn btn-primary-inverse margin-half border-2"><strong>Contact</strong></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
