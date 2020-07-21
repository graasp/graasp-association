import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

const NAV_ITEMS = ['About', 'Partners', 'Team', 'FAQ'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
    opacityIncrement: 0,
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
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    const { mobileMenuOpen } = this.state;
    if (mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
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
            <button
              type="button"
              onClick={this.toggleMobileMenu}
              style={{ color: 'black' }}
            >
              <MenuIcon />
            </button>
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
      </Nav>
    );
  }
}

export default Navbar;
