import React from 'react';
import { I18nextProvider } from 'react-i18next';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import i18n from '../../../config/i18n/i18n';

const Layout = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  </I18nextProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
