import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as GenevaLogo } from '@images/logos/geneva.svg';
import { ReactComponent as UnctadLogo } from '@images/logos/unctad.svg';
import { ReactComponent as GoLabLogo } from '@images/logos/golab.svg';
import { ReactComponent as ColliderLogo } from '@images/logos/collider.svg';
import { ReactComponent as EpflInnovationLogo } from '@images/logos/epfl-innovation.svg';

const LOGOS = [
  {
    logo: GenevaLogo,
    link: 'https://www.ge.ch',
  },
  {
    logo: UnctadLogo,
    link: 'https://unctad.org',
  },
  {
    logo: ColliderLogo,
    link: 'https://www.edtech-collider.ch',
  },
  {
    logo: EpflInnovationLogo,
    link: 'https://epfl-innovationpark.ch',
  },
  {
    logo: GoLabLogo,
    link: 'https://www.golabz.eu',
  },
];

const UsedBy = () => (
  <Section id="partners" accent>
    <StyledContainer>
      <div>
        <h2 style={{ textAlign: 'center' }}>
          Graasp is used by organizations around the world
        </h2>
        <LogoGrid>
          {LOGOS.map(({ logo, link }) => (
            <ExternalLink
              key={link}
              href={link}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {logo()}
            </ExternalLink>
          ))}
        </LogoGrid>
      </div>
    </StyledContainer>
  </Section>
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  margin: 0 auto;
  position: relative;
  color: ${props => props.theme.color.white.dark};

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default UsedBy;
