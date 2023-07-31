import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

import { ASSOCIATION } from '@graasp/translations';
import { useAssociationTranslation } from '../../config/i18n/i18n';

const TEAM = [
  {
    name: 'Denis Gillet',
    image: 'denis.png',
    role: ASSOCIATION.TITLE_PRESIDENT,
  },
  {
    name: 'Isabelle Vonèche Cardia',
    image: 'isabelle.jpg',
    role: 'TITLE_MANAGING_DIRECTOR',
  },
  {
    name: 'María Jesús Rodríguez-Triana',
    image: 'maria.jpg',
    role: ASSOCIATION.TITLE_VP_EDUCATION,
  },
  {
    name: 'Juan Carlos Farah',
    image: 'juancarlos.jpg',
    role: ASSOCIATION.TITLE_VP_RESEARCH,
  },
  {
    name: 'Kim Lan Phan Hoang',
    image: 'kim.jpg',
    role: ASSOCIATION.TITLE_VP_ENGINEERING,
  },
  {
    name: 'Jérémy La Scala',
    image: 'jeremy.jpg',
    role: 'TITLE_VP_OUTREACH',
  },
  {
    name: 'Alexandre Chau',
    image: 'alexandre.jpg',
    role: ASSOCIATION.TITLE_SOFTWARE_ENGINEER,
  },
  {
    name: 'Basile Spaenlehauer',
    image: 'basile.jpg',
    role: ASSOCIATION.TITLE_SOFTWARE_ENGINEER,
  },
  {
    name: 'Hagop Taminian',
    image: 'hagop.jpg',
    role: ASSOCIATION.TITLE_SOFTWARE_ENGINEER,
  },
  {
    name: 'Álvaro Bautista',
    image: 'alvaro.jpeg',
    role: ASSOCIATION.TITLE_SOFTWARE_ENGINEER,
  },
  {
    name: 'Philippe Kobel',
    image: 'philippe.jpg',
    role: ASSOCIATION.TITLE_AMBASSADOR,
  },
  {
    name: 'François Bierlaire',
    image: 'francois.jpg',
    role: 'TITLE_PEDAGOGICAL_ENGINEER',
  },
];

function Team() {
  const { t: translateAssociation } = useAssociationTranslation();

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
      render={(data) => (
        <Section id="team" accent="secondary">
          <Container style={{ position: 'relative' }}>
            <h1>{translateAssociation(ASSOCIATION.HEADER_TEAM)}</h1>
            <TeamGrid>
              {TEAM.map(({ name, image, role }) => {
                const img = data.allFile.edges.find(
                  ({ node }) => node.relativePath === image,
                ).node;

                return (
                  <div key={name}>
                    <Img
                      fluid={img.childImageSharp.fluid}
                      alt={name}
                      style={{ borderRadius: '50%' }}
                    />
                    <Title>{name}</Title>
                    <Subtitle>{translateAssociation(role)}</Subtitle>
                  </div>
                );
              })}
            </TeamGrid>
          </Container>
        </Section>
      )}
    />
  );
}

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 165px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  margin-top: 72px;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Title = styled.p`
  ${(props) => props.theme.font_size.small};
  margin-top: 16px;
  color: ${(props) => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${(props) => props.theme.font_size.smaller};
  color: ${(props) => props.theme.color.black.light};
`;

export default Team;
