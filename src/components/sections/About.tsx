import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Section, Container } from '@components/global';

import { Trans } from 'react-i18next';
import { ASSOCIATION, namespaces } from '@graasp/translations';
import { useAssociationTranslation } from '@config/i18n/i18n';

import {
  URL_GRAASP_ORG,
  URL_GRAASP_DESKTOP,
  URL_GRAASP_INSIGHTS,
  URL_GRAASP_LIBRARY,
} from '@config/hrefs';
import { GatsbyImage } from 'gatsby-plugin-image';

const About = () => {
  const { t: translateAssociation } = useAssociationTranslation();
  const data = useStaticQuery(graphql`
    query {
      art_fast: file(sourceInstanceName: { eq: "art" }, name: { eq: "fast" }) {
        childImageSharp {
          gatsbyImageData(width: 760)
        }
      }

      art_learn: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "learn_yourself" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 760)
        }
      }

      art_ideas: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "ideas" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 760)
        }
      }

      art_pot: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "customers_pot" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 760)
        }
      }

      tell_story: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "tell_story" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 760)
        }
      }
    }
  `);
  return (
    <Section id="about">
      <Container>
        <Grid>
          <div>
            <h2>
              {translateAssociation(ASSOCIATION.ABOUT_CREATE_RESOURCES_HEADER)}
            </h2>
            <p>
              {translateAssociation(ASSOCIATION.ABOUT_CREATE_RESOURCES_TEXT)}
            </p>
          </div>
          <Art>
            <GatsbyImage
              image={data.art_learn.childImageSharp.gatsbyImageData}
              alt="learn"
            />
          </Art>
        </Grid>
        <Grid inverse>
          <Art>
            <GatsbyImage
              image={data.art_ideas.childImageSharp.gatsbyImageData}
              alt="ideas"
            />
          </Art>
          <div>
            <h2>{translateAssociation(ASSOCIATION.ABOUT_ADAPTABLE_HEADER)}</h2>
            <p>
              <Trans
                ns={namespaces.association}
                components={[
                  <a
                    href={URL_GRAASP_ORG}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Graasp
                  </a>,
                  <a
                    href={URL_GRAASP_DESKTOP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Graasp Desktop
                  </a>,
                ]}
              >
                {ASSOCIATION.ABOUT_ADAPTABLE_TEXT}
              </Trans>
            </p>
          </div>
        </Grid>
        <Grid>
          <div>
            <h2>{translateAssociation(ASSOCIATION.ABOUT_SUPPORT_HEADER)}</h2>
            <p>{translateAssociation(ASSOCIATION.ABOUT_SUPPORT_TEXT)}</p>
          </div>
          <Art>
            <GatsbyImage
              image={data.art_fast.childImageSharp.gatsbyImageData}
              alt="fast"
            />
          </Art>
        </Grid>
        <Grid inverse>
          <Art>
            <GatsbyImage
              image={data.art_pot.childImageSharp.gatsbyImageData}
              alt="pot"
            />
          </Art>
          <div>
            <h2>{translateAssociation(ASSOCIATION.ABOUT_COMMUNITY_HEADER)}</h2>
            <p>{translateAssociation(ASSOCIATION.ABOUT_COMMUNITY_TEXT)}</p>
          </div>
        </Grid>
        <Grid>
          <div>
            <h2>
              {translateAssociation(ASSOCIATION.ABOUT_TRANSLATIONAL_HEADER)}
            </h2>
            <p>
              <Trans
                ns={namespaces.association}
                components={[
                  <a
                    href={URL_GRAASP_INSIGHTS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Graasp Insights
                  </a>,
                  <a
                    href={URL_GRAASP_LIBRARY}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Graasp Library
                  </a>,
                ]}
              >
                {ASSOCIATION.ABOUT_TRANSLATIONAL_TEXT}
              </Trans>
            </p>
          </div>
          <Art>
            <GatsbyImage
              image={data.tell_story.childImageSharp.gatsbyImageData}
              alt="story"
            />
          </Art>
        </Grid>
      </Container>
    </Section>
  );
};

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const Grid = styled.div<{ inverse?: boolean }>`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${(props) =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
    color: ${(props) => props.theme.color.black.regular};
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${(props) =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

export default About;
