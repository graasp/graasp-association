import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { useTranslation } from 'react-i18next';

import { ReactComponent as EcLogo } from '@images/sponsors/ec.svg';
import { ReactComponent as EpflLogo } from '@images/sponsors/epfl.svg';
import { ReactComponent as SwissUniLogo } from '@images/sponsors/swissuniversities.svg';

import { ReactComponent as GraaspLogoDark } from '@images/art/handDark.svg';

import GithubIcon from '@static/icons/github.svg';
import WebIcon from '@static/icons/web.svg';
import LinkedInIcon from '@static/icons/linkedin.svg';
import ASSOCIATION from '../../config/i18n/keys';

const copyright = `© Graasp 2014 - ${new Date().getFullYear()}`;

const LOGOS = [
  {
    logo: EcLogo,
    link: 'https://ec.europa.eu/info/index_en',
  },
  {
    logo: EpflLogo,
    link: 'https://www.epfl.ch/en/',
  },
  {
    logo: SwissUniLogo,
    link: 'https://www.swissuniversities.ch',
  },
];

const SOCIAL = [
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/company/graasp',
  },
  {
    icon: GithubIcon,
    link: 'https://github.com/graasp/',
  },
  {
    icon: WebIcon,
    link: 'https://graasp.org',
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section accent="secondary" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <StyledLogoContainer>
          <div>
            <h3 style={{ textAlign: 'center' }}>
              {t(ASSOCIATION.HEADER_SUPPORTED_BY)}
            </h3>
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
        </StyledLogoContainer>
      </Section>
      <Art>
        <GraaspLogoDark style={{ marginBottom: 30 }} />
      </Art>
      <FooterWrapper>
        <StyledContainer>
          <Copyright>{copyright}</Copyright>
          <SocialIcons>
            {SOCIAL.map(({ icon, link }) => (
              <ExternalLink key={link} href={link}>
                <img src={icon} alt="link" />
              </ExternalLink>
            ))}
          </SocialIcons>
        </StyledContainer>
      </FooterWrapper>
    </>
  );
};

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

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledLogoContainer = styled(Container)`
  margin: 0 auto;
  position: relative;
  color: ${props => props.theme.color.black.regular};

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.color.white.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
