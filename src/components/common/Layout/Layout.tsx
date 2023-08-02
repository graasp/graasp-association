import SEO from '@common/SEO';
import { hasAcceptedCookies } from '@graasp/sdk';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
import ReactGA from 'react-ga4';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import i18n from '@config/i18n/i18n';
import CookiesBanner from '../CookiesBanner';

import '@graasp/ui/dist/bundle.css';

import { ENV, GA_MEASUREMENT_ID, NODE_ENV } from '@config/constants';

if (GA_MEASUREMENT_ID && hasAcceptedCookies() && NODE_ENV !== ENV.TEST) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.send('pageview');
}

function Layout({ children }: { children: ReactElement | ReactElement[] }) {
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
