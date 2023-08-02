import React from 'react';
import { COOKIE_KEYS } from '@graasp/sdk';
import { COMMON } from '@graasp/translations';

import { DOMAIN } from '../../config/constants';
import { useCommonTranslation } from '../../config/i18n/i18n';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { theme as GraaspTheme } from '@graasp/ui';
import { CookiesBanner } from '@graasp/ui';

function Component() {
  const { t } = useCommonTranslation();

  return (
    <MUIThemeProvider theme={GraaspTheme}>
      <CookiesBanner
        acceptText={t(COMMON.COOKIE_BANNER_ACCEPT_BUTTON)}
        declineButtonText={t(COMMON.COOKIE_BANNER_DECLINE_BUTTON)}
        cookieName={COOKIE_KEYS.ACCEPT_COOKIES_KEY}
        text={t(COMMON.COOKIE_BANNER_TEXT)}
        domain={DOMAIN}
      />
    </MUIThemeProvider>
  );
}

export default Component;
