import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

import { Trans } from 'react-i18next';
import { ASSOCIATION, namespaces } from '@graasp/translations';
import { useAssociationTranslation } from '../../config/i18n/i18n';

import {
  URL_GRAASP_ORG,
  URL_GRAASP_DESKTOP,
  URL_GRAASP_INSIGHTS,
  URL_GRAASP_LIBRARY,
} from '../../config/hrefs';

function About() {
  const { t: translateAssociation } = useAssociationTranslation();

  return (
    <StaticQuery
      query={graphql`
        query {
          art_fast: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "fast" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }

          art_learn: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "learn_yourself" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }

          art_ideas: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "ideas" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }

          art_pot: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "customers_pot" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }

          tell_story: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "tell_story" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={(data) => (
        <Section id="about">
          <Container>
            <Grid>
              <div>
                <h2>
                  {translateAssociation(
                    ASSOCIATION.ABOUT_CREATE_RESOURCES_HEADER,
                  )}
                </h2>
                <p>
                  {translateAssociation(
                    ASSOCIATION.ABOUT_CREATE_RESOURCES_TEXT,
                  )}
                </p>
              </div>
              <Art>
                <Img fluid={data.art_learn.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_ideas.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>
                  {translateAssociation(ASSOCIATION.ABOUT_ADAPTABLE_HEADER)}
                </h2>
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
                <h2>
                  {translateAssociation(ASSOCIATION.ABOUT_SUPPORT_HEADER)}
                </h2>
                <p>{translateAssociation(ASSOCIATION.ABOUT_SUPPORT_TEXT)}</p>
              </div>
              <Art>
                <Img fluid={data.art_fast.childImageSharp.fluid} />
              </Art>
            </Grid>
            <Grid inverse>
              <Art>
                <Img fluid={data.art_pot.childImageSharp.fluid} />
              </Art>
              <div>
                <h2>
                  {translateAssociation(ASSOCIATION.ABOUT_COMMUNITY_HEADER)}
                </h2>
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
                <Img fluid={data.tell_story.childImageSharp.fluid} />
              </Art>
            </Grid>
          </Container>
        </Section>
      )}
    />
  );
}

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const Grid = styled.div`
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
