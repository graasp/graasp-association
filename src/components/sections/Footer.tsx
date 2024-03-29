import React from 'react';
import styled from 'styled-components';

import ExternalLink from '@common/ExternalLink';
import { Container, Section } from '@components/global';

import EcLogo from '@images/sponsors/ec.svg';
import EpflLogo from '@images/sponsors/epfl.svg';
import SwissUniLogo from '@images/sponsors/swissuniversities.svg';

import GithubIcon from '@images/icons/github.svg';
import LinkedInIcon from '@images/icons/linkedin.svg';
import WebIcon from '@images/icons/web.svg';

import GraaspLogoDark from '@images/art/handDark.svg';

import { useAssociationTranslation } from '@config/i18n/i18n';
import { ASSOCIATION } from '@graasp/translations';

const copyright = `© Graasp 2014 - ${new Date().getFullYear()}`;

const LOGOS = [
  {
    Logo: <EcLogo />,
    link: 'https://ec.europa.eu/info/index_en',
  },
  {
    Logo: <EpflLogo />,
    link: 'https://www.epfl.ch/en/',
  },
  {
    Logo: <SwissUniLogo />,
    link: 'https://www.swissuniversities.ch',
  },
];

const SOCIAL = [
  {
    Icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/company/graasp',
  },
  {
    Icon: <GithubIcon />,
    link: 'https://github.com/graasp/',
  },
  {
    Icon: <WebIcon />,
    link: 'https://graasp.org',
  },
];

function Footer() {
  const { t: translateAssociation } = useAssociationTranslation();

  return (
    <>
      <Section accent="secondary" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <StyledLogoContainer>
          <div>
            <h3 style={{ textAlign: 'center' }}>
              {translateAssociation(ASSOCIATION.HEADER_SUPPORTED_BY)}
            </h3>
            <LogoGrid>
              {LOGOS.map(({ Logo, link }) => (
                <ExternalLink
                  key={link}
                  href={link}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {Logo}
                </ExternalLink>
              ))}
            </LogoGrid>
          </div>
        </StyledLogoContainer>
      </Section>
      <Art>
        <GraaspLogoDark />
      </Art>
      <FooterWrapper>
        <StyledContainer>
          <Copyright>{copyright}</Copyright>
          <SocialIcons>
            {SOCIAL.map(({ Icon, link }) => (
              <ExternalLink key={link} href={link}>
                {Icon}
              </ExternalLink>
            ))}
          </SocialIcons>
        </StyledContainer>
      </FooterWrapper>
    </>
  );
}

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledLogoContainer = styled(Container)`
  margin: 0 auto;
  position: relative;
  color: ${(props) => props.theme.color.black.regular};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  color: ${(props) => props.theme.color.white.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
