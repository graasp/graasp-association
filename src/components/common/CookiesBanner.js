import React from 'react';
import { COOKIE_KEYS } from '@graasp/sdk';
import { COMMON } from '@graasp/translations';
import dynamic from 'next/dynamic';

import { DOMAIN } from '../../config/constants';
import { useCommonTranslation } from '../../config/i18n/i18n';

const CookiesBanner = dynamic(
  () => import('@graasp/ui').then((mod) => mod.CookiesBanner),
  {
    ssr: false,
  },
);

function Component() {
  const { t } = useCommonTranslation();

  return (
    <CookiesBanner
      acceptText={t(COMMON.COOKIE_BANNER_ACCEPT_BUTTON)}
      declineButtonText={t(COMMON.COOKIE_BANNER_DECLINE_BUTTON)}
      cookieName={COOKIE_KEYS.ACCEPT_COOKIES_KEY}
      text={t(COMMON.COOKIE_BANNER_TEXT)}
      domain={DOMAIN}
    />
  );
}

export default Component;
