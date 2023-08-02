// added a piece of 'langugeChanged' state to refresh this component when a language is changed
// this raises the eslint flag disabled above
// this section needs reworking (current iteration is to demo language toggle)
import React, { useState } from 'react';
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
import i18n from '../../../config/i18n/i18n';

const NAV_ITEMS = [
  { id: 'about', text: ASSOCIATION.NAV_ABOUT },
  { id: 'partners', text: ASSOCIATION.NAV_PARTNERS },
  { id: 'team', text: ASSOCIATION.NAV_TEAM },
  { id: 'faq', text: ASSOCIATION.NAV_FAQ },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageChanged] = useState(false);

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
            {i18n.t(text, { ns: namespaces.association })}
          </AnchorLink>
        </NavItem>
      ))}
    </NavListWrapper>
  );

  return (
    <Nav>
      <StyledContainer>
        <Brand>Graasp</Brand>
        <Mobile>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <TranslationPair
              englishCallback={() => {
                i18n.changeLanguage('en');
                // setLanguagelanguageChanged: true });
              }}
              frenchCallback={() => {
                i18n.changeLanguage('fr');
                // this.setState({ languageChanged: true });
              }}
            />
            <button type="button" onClick={toggleMobileMenu}>
              <MenuIcon htmlColor="white" />
            </button>
          </div>
        </Mobile>
        <Mobile hide>
          <NavList />
        </Mobile>
      </StyledContainer>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container fluid>
              <NavList mobile />
            </Container>
          </MobileMenu>
        )}
      </Mobile>
      <Mobile hide>
        <TranslationPair
          englishCallback={() => {
            i18n.changeLanguage('en');
            // this.setState({ languageChanged: true });
          }}
          frenchCallback={() => {
            i18n.changeLanguage('fr');
            // this.setState({ languageChanged: true });
          }}
        />
      </Mobile>
    </Nav>
  );
};

export default Navbar;
