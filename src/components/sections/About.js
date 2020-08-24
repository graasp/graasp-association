import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

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
      render={data => (
        <Section id="about">
          <Container>
            <Grid>
              <div>
                <h2>
                  {t(
                    'We help institutions and educators create interactive resources for blended learning',
                  )}
                </h2>
                <p>
                  {t(
                    'Using our authoring tools, you can create custom digital activities that fit your needs with a few clicks. These activities can be kept private, or shared with your colleagues.',
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
                  {t('Our solutions are adaptable to your educational needs')}
                </h2>
                <p>
                  <Trans>
                    Built with accessibility in mind, Graasp&apos;s solutions
                    are available on web, mobile, and desktop devices, both
                    online and offline. You can choose between our cloud
                    infrastructure (
                    <a
                      href="https://graasp.eu"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Graasp.eu
                    </a>
                    ) or on-premise hosting (coming soon!).
                  </Trans>
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <h2>{t('We support you every step of the way')}</h2>
                <p>
                  {t(
                    "Whether you're just getting started with digital education or are an experienced user, we provide support and training to help you achieve your educational objectives.",
                  )}
                </p>
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
                <h2>{t('Our community of experts is here for you')}</h2>
                <p>
                  {t(
                    'If your teaching needs require custom digital experiences, our community of developers and educators are here to help.',
                  )}
                </p>
              </div>
            </Grid>
            <Grid>
              <div>
                <h2>
                  {t(
                    'We enable open translational research in digital education',
                  )}
                </h2>
                <p>
                  {t(
                    'We provide dedicated services for analyzing and sharing anonymous learning analytics and data. This enables the research community and public institutions to conduct evidence-based assessments of innovative pedagogical scenarios and technological solutions.',
                  )}
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
};

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

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
    color: ${props => props.theme.color.black.regular};
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

export default About;
