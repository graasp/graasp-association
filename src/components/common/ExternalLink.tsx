import React, { ReactElement, StyleHTMLAttributes } from 'react';

type Props = {
  href: string;
  children: ReactElement;
  style?: JSX.IntrinsicElements['a']['style'];
};

const ExternalLink = ({ href, children, style }: Props) => {
  return (
    <a href={href} style={style} rel="noreferrer noopener" target="_blank">
      {children}
    </a>
  );
};

export default ExternalLink;
