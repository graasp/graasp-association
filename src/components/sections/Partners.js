import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import Carousel, { consts } from 'react-elastic-carousel';
import { useTranslation } from 'react-i18next';

import { ReactComponent as GenevaLogo } from '@images/logos/geneva.svg';
import { ReactComponent as UnctadLogo } from '@images/logos/unctad.svg';
import { ReactComponent as GoLabLogo } from '@images/logos/golab.svg';
import { ReactComponent as ColliderLogo } from '@images/logos/collider.svg';
import { ReactComponent as EpflInnovationLogo } from '@images/logos/epfl-innovation.svg';
import { ReactComponent as TremplinLogo } from '@images/logos/tremplin.svg';
import { ReactComponent as UnineLogo } from '@images/logos/unine.svg';
import { ReactComponent as GogaLogo } from '@images/logos/goga.svg';

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
    logo: UnineLogo,
    link: 'https://www.unine.ch',
  },
  {
    logo: GoLabLogo,
    link: 'https://www.golabz.eu',
  },
  {
    logo: EpflInnovationLogo,
    link: 'https://epfl-innovationpark.ch',
  },
  {
    logo: TremplinLogo,
    link: 'https://tremplin.ens-lyon.fr',
  },
  {
    logo: GogaLogo,
    link: 'https://go-ga.org',
  },
];

const breakPoints = [
  { width: 472, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 728, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 },
];

const UsedBy = () => {
  const { t } = useTranslation();

  return (
    <Section id="partners" accent>
      <StyledContainer>
        <div>
          <h2 style={{ textAlign: 'center' }}>
            {t('Our solutions are used around the world')}
          </h2>
          <Carousel
            breakPoints={breakPoints}
            renderArrow={({ type, onClick }) => {
              const pointer =
                type === consts.PREV ? (
                  <ArrowLeft onClick={onClick} />
                ) : (
                  <ArrowRight onClick={onClick} />
                );
              return <Button onClick={onClick}>{pointer}</Button>;
            }}
            style={{ marginTop: 50 }}
          >
            {LOGOS.map(({ logo, link }) => (
              <ExternalLink
                key={link}
                href={link}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '250px',
                  width: '100%',
                  color: '#fff',
                  margin: '0 15px',
                }}
              >
                {logo()}
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
  color: ${props => props.theme.color.white.dark};

  @media (max-width: ${props => props.theme.screen.md}) {
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

export default UsedBy;
