import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import { Container, Section } from '@components/global';

import { useAssociationTranslation } from '@config/i18n/i18n';
import { ASSOCIATION } from '@graasp/translations';

const TEAM = [
  {
    name: 'Denis Gillet',
    image: 'denis.png',
    role: ASSOCIATION.TITLE_PRESIDENT,
  },
  {
    name: 'Isabelle Vonèche Cardia',
    image: 'isabelle.jpg',
    role: ASSOCIATION.TITLE_MANAGING_DIRECTOR,
  },
  {
    name: 'María Jesús Rodríguez-Triana',
    image: 'maria.jpg',
    role: ASSOCIATION.TITLE_VP_RESEARCH,
  },
  {
    name: 'Juan Carlos Farah',
    image: 'juancarlos.jpg',
    role: ASSOCIATION.TITLE_VP_PRODUCT,
  },
  {
    name: 'Kim Lan Phan Hoang',
    image: 'kim.jpg',
    role: ASSOCIATION.TITLE_VP_ENGINEERING,
  },
  {
    name: 'Jérémy La Scala',
    image: 'jeremy.jpg',
    role: ASSOCIATION.TITLE_VP_OUTREACH,
  },
  {
    name: 'Sandy Ingram',
    image: 'sandy.jpg',
    role: ASSOCIATION.TITLE_VP_INNOVATION,
  },
  {
    name: 'Basile Spaenlehauer',
    image: 'basile.jpg',
    role: ASSOCIATION.TITLE_VP_TECHNOLOGY,
  },
  {
    name: 'Michele Notari',
    image: 'michele.jpg',
    role: ASSOCIATION.TITLE_VP_EDUCATION_AND_CONTENT,
  },
  {
    name: 'Hagop Taminian',
    image: 'hagop.jpg',
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

const Team = () => {
  const { t: translateAssociation } = useAssociationTranslation();
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "team" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
          }
        }
      }
    }
  `);
  return (
    <Section id="team" accent="secondary">
      <Container style={{ position: 'relative' }}>
        <h1>{translateAssociation(ASSOCIATION.HEADER_TEAM)}</h1>
        <TeamGrid>
          {TEAM.map(({ name, image, role }) => {
            const imageNode = allFile.edges?.find(
              ({ node }: { node: { relativePath: string } }) =>
                node.relativePath === image,
            );

            return (
              <TeamWrapper key={name}>
                {imageNode ? (
                  <GatsbyImage
                    image={imageNode.node.childImageSharp.gatsbyImageData}
                    alt={name}
                    style={{ borderRadius: '50%' }}
                  />
                ) : (
                  <StaticImage
                    src="../../images/team/graasp.png"
                    alt={name}
                    style={{ borderRadius: '50%' }}
                  />
                )}
                <Title>{name}</Title>
                <Subtitle>{translateAssociation(role)}</Subtitle>
              </TeamWrapper>
            );
          })}
        </TeamGrid>
      </Container>
    </Section>
  );
};

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: center;
  margin: auto;
  margin-top: 72px;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 400px;
    grid-gap: 24px;
  }
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
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
