import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from '@components/global';
import { ASSOCIATION, namespaces } from '@graasp/translations';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';
import TranslationPair from './TranslationPair';
import i18n, { useAssociationTranslation } from '@config/i18n/i18n';
import { Close } from '@mui/icons-material';
import { Grow, Stack } from '@mui/material';

const NAV_ITEMS = [
  { id: 'about', text: ASSOCIATION.NAV_ABOUT },
  { id: 'partners', text: ASSOCIATION.NAV_PARTNERS },
  { id: 'team', text: ASSOCIATION.NAV_TEAM },
  { id: 'faq', text: ASSOCIATION.NAV_FAQ },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useAssociationTranslation();

  useEffect(() => {
    console.info(`Changed language to ${i18n.language}`);
  }, [i18n.language]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const NavList = ({ mobile = false }: { mobile?: boolean }) => (
    <NavListWrapper mobile={mobile}>
      {NAV_ITEMS.map(({ id, text }) => (
        <NavItem key={id}>
          <AnchorLink
            data-to-scrollspy-id={id}
            href={`#${id}`}
            onClick={closeMobileMenu}
          >
            {t(text, { ns: namespaces.association })}
          </AnchorLink>
        </NavItem>
      ))}
    </NavListWrapper>
  );

  return (
    <Nav>
      <StyledContainer>
        <Brand>
          <AnchorLink href={`#home`} data-to-scrollspy-id="home">
            Graasp
          </AnchorLink>
        </Brand>
        <Stack direction="row" spacing={2}>
          <Mobile hide>
            <NavList />
          </Mobile>
          <TranslationPair
            englishCallback={() => {
              i18n.changeLanguage('en');
            }}
            frenchCallback={() => {
              i18n.changeLanguage('fr');
            }}
          />
          <Mobile>
            <button type="button" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <Close htmlColor="white" />
              ) : (
                <MenuIcon htmlColor="white" />
              )}
            </button>
          </Mobile>
        </Stack>
      </StyledContainer>
      {/* Mobile Menu */}
      <Mobile>
        {mobileMenuOpen && (
          <Grow in={mobileMenuOpen} style={{ transformOrigin: 'center 0' }}>
            <MobileMenu>
              <Container fluid>
                <NavList mobile />
              </Container>
            </MobileMenu>
          </Grow>
        )}
      </Mobile>
    </Nav>
  );
};

export default Navbar;
