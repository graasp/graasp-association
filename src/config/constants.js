export const DOMAIN = process.env.GATSBY_DOMAIN || 'localhost';

export const ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  TEST: 'test',
};

export const NODE_ENV =
  process.env.GATSBY_NODE_ENV || process.env.NODE_ENV || ENV.DEVELOPMENT;

export const GA_MEASUREMENT_ID = process.env.GATSBY_GA_MEASUREMENT_ID;
