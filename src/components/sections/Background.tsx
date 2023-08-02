import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

function Background({ children }: { children: ReactElement }) {
  const data = useStaticQuery(graphql`
    query {
      background: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "background" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage
      id="background"
      fluid={data.background.childImageSharp.fluid}
    >
      {children}
    </BackgroundImage>
  );
}

export default Background;
