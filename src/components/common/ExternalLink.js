import React from 'react';

// eslint-disable-next-line react/prop-types
const ExternalLink = ({ href, children, ...other }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <a href={href} {...other} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
