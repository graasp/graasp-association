import React from 'react';
import { I18nextProvider } from 'react-i18next';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga4';
import { ThemeProvider } from 'styled-components';
import SEO from '@common/SEO';
import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import { hasAcceptedCookies } from '@graasp/sdk';

import i18n from '../../../config/i18n/i18n';
// eslint-disable-next-line import/no-named-as-default-member
import CookiesBanner from '../CookiesBanner';

import '@graasp/ui/dist/bundle.css';

import { ENV, GA_MEASUREMENT_ID, NODE_ENV } from '../../../config/constants';

if (GA_MEASUREMENT_ID && hasAcceptedCookies() && NODE_ENV !== ENV.TEST) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.send('pageview');
}

function Layout({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <SEO />
        <GlobalStyles />
        {children}
        <CookiesBanner />
      </ThemeProvider>
    </I18nextProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
