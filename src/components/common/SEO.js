import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ASSOCIATION from '../../config/i18n/keys';

const SEO = () => {
  const { t } = useTranslation();

  const SEO_DATA = {
    description: t(ASSOCIATION.SEO_DESCRIPTION),
    title: t(ASSOCIATION.SEO_TITLE),
    url: 'https://association.graasp.org',
    author: 'Graasp',
    keywords: [
      t(ASSOCIATION.SEO_KEYWORD_GRAASP_ASSOCIATION),
      t(ASSOCIATION.SEO_KEYWORD_DIGITAL_EDUCATION),
      'Graasp',
      'EPFL',
    ],
    img:
      'https://images.unsplash.com/photo-1504860708171-19abd233ec3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    twitterId: 'graasp',
    facebookId: 'graasp',
  };

  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
