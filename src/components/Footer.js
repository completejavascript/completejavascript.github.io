import React from "react";

import ExternalLink from "./ExternalLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container-full background-color-dark-grey color-white text-center padding-top-half padding-bottom-half">
      <small>
        Copyright &copy; 2018 - {currentYear} by
        <ExternalLink href="https://completejavascript.com/gioi-thieu/">
          {" "}
          Lam Pham
        </ExternalLink>
        . All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
