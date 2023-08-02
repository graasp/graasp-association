import React, { ReactElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function Background({ children }: { children: ReactElement }) {
  return (
    <StaticImage src="../../images/art/background.png" alt="background image">
      {children}
    </StaticImage>
  );
}

export default Background;
