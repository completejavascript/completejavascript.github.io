import React from 'react';

const ExternalLink = ({ className, href, children }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

export default ExternalLink;