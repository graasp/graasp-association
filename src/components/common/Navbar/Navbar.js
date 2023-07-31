/* eslint-disable react/no-unused-state */
// added a piece of 'langugeChanged' state to refresh this component when a language is changed
// this raises the eslint flag disabled above
// this section needs reworking (current iteration is to demo language toggle)
import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

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

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
    opacityIncrement: 0,
    languageChanged: false,
  };

  // code in componentDidMount darkens the initially transparent navbar as we scroll down the page
  // the NavBar initially has opacity of 0.8 (see ./style.js)
  // each 150px of scrollY result in an opacity increment of 0.05, set on state via newOpacityIncrement
  componentDidMount() {
    window.onscroll = () => {
      const newOpacityIncrement = Math.floor(window.scrollY / 150) / 20;
      const { opacityIncrement } = this.state;
      if (opacityIncrement !== newOpacityIncrement) {
        this.setState({ opacityIncrement: newOpacityIncrement });
      }
    };
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  closeMobileMenu = () => {
    const { mobileMenuOpen } = this.state;
    if (mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = (id, text) => (
    <AnchorLink href={`#${id}`} onClick={this.closeMobileMenu}>
      {i18n.t(text, { ns: namespaces.association })}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(({ id }) => id)}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(({ id, text }) => (
          <NavItem key={id}>{this.getNavAnchorLink(id, text)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    // this extracts the opacityIncrement from state, and uses it to determine final opacity
    // final opacity is set as a prop on the Nav component in the return statement below
    let opacity;
    const { opacityIncrement } = this.state;
    if (opacityIncrement > 0.2) {
      opacity = 1;
    } else {
      opacity = 0.8 + opacityIncrement;
    }

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Nav {...this.props} style={{ opacity }}>
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
                  this.setState({ languageChanged: true });
                }}
                frenchCallback={() => {
                  i18n.changeLanguage('fr');
                  this.setState({ languageChanged: true });
                }}
              />
              <button
                type="button"
                onClick={this.toggleMobileMenu}
                style={{ color: 'black' }}
              >
                <MenuIcon />
              </button>
            </div>
          </Mobile>
          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
        <Mobile hide>
          <TranslationPair
            englishCallback={() => {
              i18n.changeLanguage('en');
              this.setState({ languageChanged: true });
            }}
            frenchCallback={() => {
              i18n.changeLanguage('fr');
              this.setState({ languageChanged: true });
            }}
          />
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
