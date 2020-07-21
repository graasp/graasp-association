import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

const Background = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <BackgroundImage fluid={data.background.childImageSharp.fluid}>
        {children}
      </BackgroundImage>
    )}
  />
);

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
