import React, { ReactElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function Background({ children }: { children: ReactElement }) {
  return (
    <div style={{ display: 'grid' }}>
      <StaticImage
        style={{ gridArea: '1/1' }}
        src="../../images/art/background.jpg"
        layout="fullWidth"
        alt=""
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          placeItems: 'center',
          display: 'grid',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Background;
