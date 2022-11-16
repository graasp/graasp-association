import React from 'react';

// eslint-disable-next-line react/prop-types
function ExternalLink({ href, children, ...other }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={href} {...other} rel="noreferrer noopener" target="_blank">
      {children}
    </a>
  );
}

export default ExternalLink;
