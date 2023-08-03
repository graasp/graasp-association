import styled from 'styled-components';

import { Container } from '@components/global';

export const Nav = styled.nav`
  padding: 16px 0;
  background-color: ${(props) => props.theme.color.primary};
  opacity: 0.9;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;

  .active-scroll-spy {
    opacity: 1;
    color: white;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${(props) => props.theme.font.secondary};
  ${(props) => props.theme.font_size.small};

  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${(props) => props.theme.color.white.regular};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`;

export const NavListWrapper = styled.ul<{ mobile: boolean }>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

  ${({ mobile }) =>
    mobile &&
    `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
`;

export const MobileMenu = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.primary};
`;

export const Brand = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  ${(props) => props.theme.font_size.large};
  color: ${(props) => props.theme.color.white.regular};
`;

export const Mobile = styled.div<{ hide?: boolean }>`
  display: none;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: flex;
  }

  ${(props) =>
    props.hide &&
    `
    display: flex;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
