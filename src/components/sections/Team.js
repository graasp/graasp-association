import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { useTranslation } from 'react-i18next';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Denis Gillet',
    image: 'denis.png',
    role: 'President',
  },
  {
    name: 'Isabelle Vonèche Cardia',
    image: 'isabelle.jpg',
    role: 'VP Communication',
  },
  {
    name: 'María Jesús Rodríguez-Triana',
    image: 'maria.jpg',
    role: 'VP Education',
  },
  {
    name: 'Juan Carlos Farah',
    image: 'juancarlos.jpg',
    role: 'VP Research',
  },
  {
    name: 'Kim Lan Phan Hoang',
    image: 'kim.jpg',
    role: 'VP Engineering',
  },
  {
    name: 'Jérémy La Scala',
    image: 'jeremy.jpg',
    role: 'Software Engineer',
  },
  {
    name: 'Alexandre Chau',
    image: 'alexandre.jpg',
    role: 'Software Engineer',
  },
  {
    name: 'Basile Spaenlehauer',
    image: 'basile.jpg',
    role: 'Software Engineer',
  },
  {
    name: 'Philippe Kobel',
    image: 'philippe.jpg',
    role: 'Ambassador',
  },
];

const COLLABORATORS = [
  {
    name: 'André Nogueira',
    image: 'andre.jpg',
    role: 'Software Engineer',
  },
  {
    name: 'Hagop Taminian',
    image: 'hagop.jpg',
    role: 'Software Engineer',
  },
  {
    name: 'Joana Machado',
    image: 'joana.jpg',
    role: 'Researcher',
  },
  {
    name: 'Álvaro Bautista',
    image: 'alvaro.jpeg',
    role: 'Software Engineer',
  },
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { sourceInstanceName: { eq: "team" } }) {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Section id="team" accent="secondary">
          <Container style={{ position: 'relative' }}>
            <h1>{t('The Team')}</h1>
            <p>{t('Core')}</p>
            <TeamGrid>
              {TEAM.map(({ name, image, role }) => {
                const img = data.allFile.edges.find(
                  ({ node }) => node.relativePath === image,
                )?.node;

                return (
                  <div key={name}>
                    <Img
                      fluid={img?.childImageSharp.fluid}
                      alt={name}
                      style={{ borderRadius: '50%' }}
                    />
                    <Title>{name}</Title>
                    <Subtitle>{t(role)}</Subtitle>
                  </div>
                );
              })}
            </TeamGrid>
            <p style={{ marginTop: '5rem' }}>{t('Collaborators')}</p>
            <TeamGrid>
              {COLLABORATORS.map(({ name, image, role }) => {
                const img = data.allFile.edges.find(
                  ({ node }) => node.relativePath === image,
                )?.node;

                return (
                  <div key={name}>
                    <Img
                      fluid={img?.childImageSharp.fluid}
                      alt={name}
                      style={{ borderRadius: '50%' }}
                    />
                    <Title>{name}</Title>
                    <Subtitle>{t(role)}</Subtitle>
                  </div>
                );
              })}
            </TeamGrid>
          </Container>
        </Section>
      )}
    />
  );
};

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 165px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  ${props => props.theme.font_size.small};
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.smaller};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
