import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';

import { ReactComponent as GraaspLogo } from '@images/art/hand.svg';
import { ASSOCIATION } from '@graasp/translations';
import { useAssociationTranslation } from '../../config/i18n/i18n';

function Header() {
  const { t: translateAssociation } = useAssociationTranslation();

  return (
    <HeaderWrapper>
      <Container>
        <Grid>
          <Art>{GraaspLogo()}</Art>
          <Text>
            <h1>{translateAssociation(ASSOCIATION.BANNER_TEXT)}</h1>
          </Text>
        </Grid>
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  opacity: 0.8;
  padding-top: 204px;
  padding-bottom: 180px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
    text-align: center;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
  text-align: center;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: -1;
    }
  }
`;

const Text = styled.div`
  color: ${props => props.theme.color.white.regular};
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default Header;
