import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import Carousel from 'react-elastic-carousel';

import { ASSOCIATION } from '@graasp/translations';
import GenevaLogo from '@images/logos/geneva.svg';
import UnctadLogo from '@images/logos/unctad.svg';
import GoLabLogo from '@images/logos/golab.svg';
import ColliderLogo from '@images/logos/collider.svg';
import EpflInnovationLogo from '@images/logos/epfl-innovation.svg';
import TremplinLogo from '@images/logos/tremplin.svg';
import UnineLogo from '@images/logos/unine.svg';
import GogaLogo from '@images/logos/goga.svg';
import IHub4Schools from '@images/logos/ihub4schools.svg';
import { useAssociationTranslation } from '@config/i18n/i18n';

const LOGOS = [
  {
    Logo: <GenevaLogo />,
    link: 'https://www.ge.ch',
  },
  {
    Logo: <UnctadLogo />,
    link: 'https://unctad.org',
  },
  {
    Logo: <ColliderLogo />,
    link: 'https://www.edtech-collider.ch',
  },
  {
    Logo: <UnineLogo />,
    link: 'https://www.unine.ch',
  },
  {
    Logo: <IHub4Schools />,
    link: 'https://www.ihub4schools.eu/',
  },
  {
    Logo: <GoLabLogo />,
    link: 'https://www.golabz.eu',
  },
  {
    Logo: <EpflInnovationLogo />,
    link: 'https://epfl-innovationpark.ch',
  },
  {
    Logo: <TremplinLogo />,
    link: 'https://tremplin.ens-lyon.fr',
  },
  {
    Logo: <GogaLogo />,
    link: 'https://go-ga.org',
  },
];

const breakPoints = [
  { width: 472, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 728, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 },
];

const Partners = () => {
  const { t: translateAssociation } = useAssociationTranslation();

  return (
    <Section id="partners" accent>
      <StyledContainer>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            {translateAssociation(ASSOCIATION.HEADER_PARTNERS)}
          </h2>
          <Carousel
            breakPoints={breakPoints}
            renderArrow={({ type, onClick }) => {
              const pointer =
                type === 'PREV' ? (
                  <ArrowLeft onClick={onClick} />
                ) : (
                  <ArrowRight onClick={onClick} />
                );
              return <Button onClick={onClick}>{pointer}</Button>;
            }}
          >
            {LOGOS.map(({ Logo, link }) => (
              <ExternalLink
                key={link}
                href={link}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  objectFit: 'cover',
                  height: '200px',
                  width: '100%',
                  color: '#fff',
                  margin: '15px',
                }}
              >
                {Logo}
              </ExternalLink>
            ))}
          </Carousel>
        </div>
      </StyledContainer>
    </Section>
  );
};

const StyledContainer = styled(Container)`
  margin: 0 auto;
  position: relative;
  color: ${(props) => props.theme.color.white.dark};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid white;
  cursor: pointer;
`;

const ArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-right: 12px solid white;
  cursor: pointer;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:disabled {
    cursor: not-allowed;
  }
`;

export default Partners;
