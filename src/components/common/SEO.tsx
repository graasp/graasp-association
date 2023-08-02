import React from 'react';
import Helmet from 'react-helmet';
import { ASSOCIATION } from '@graasp/translations';
import { URL_SEO_IMAGE, URL_GRAASP_ASSOCIATION } from '../../config/hrefs';
import { useAssociationTranslation } from '../../config/i18n/i18n';

function SEO() {
  const { t: translateAssociation } = useAssociationTranslation();

  const SEO_DATA = {
    description: translateAssociation(ASSOCIATION.SEO_DESCRIPTION),
    title: translateAssociation(ASSOCIATION.SEO_TITLE),
    url: URL_GRAASP_ASSOCIATION,
    author: 'Graasp',
    keywords: [
      translateAssociation(ASSOCIATION.SEO_KEYWORD_GRAASP_ASSOCIATION),
      translateAssociation(ASSOCIATION.SEO_KEYWORD_DIGITAL_EDUCATION),
      'Graasp',
      'EPFL',
    ],
    img: URL_SEO_IMAGE,
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
}

export default SEO;
