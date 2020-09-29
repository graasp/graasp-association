import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';

import SEO from '@common/SEO';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import i18n from '../../../config/i18n/i18n';

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
            buttonText={t('Accept')}
            cookieName="gatsby-gdpr-google-analytics"
            buttonStyle={{ background: '#fafafa', fontSize: '13px' }}
            sameSite="lax"
          >
            {t(
              'We use cookies and other tracking technologies to improve your ' +
                'browsing experience on our website, to analyze our website traffic, ' +
                'and to understand where our visitors are coming from. By browsing our ' +
                'website, you consent to our use of cookies and other tracking ' +
                'technologies.',
            )}
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
