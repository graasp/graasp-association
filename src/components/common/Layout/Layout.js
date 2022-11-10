import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';

import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import i18n from '../../../config/i18n/i18n';

import ASSOCIATION from '../../../config/i18n/keys';

const Layout = ({ children }) => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <>
          <SEO />
          <GlobalStyles />
          {children}
          <CookieConsent
            location="bottom"
            buttonText={t(ASSOCIATION.COOKIES_ACCEPT_BUTTON_TEXT)}
            cookieName="gatsby-gdpr-google-analytics"
            buttonStyle={{ background: '#fafafa', fontSize: '13px' }}
            onAccept={() => {
              ReactGA.initialize(process.env.GATSBY_GA_TRACKING_ID);
              ReactGA.pageview('/');
            }}
            sameSite="lax"
          >
            {t(ASSOCIATION.COOKIES_TEXT)}
          </CookieConsent>
        </>
      </ThemeProvider>
    </I18nextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
