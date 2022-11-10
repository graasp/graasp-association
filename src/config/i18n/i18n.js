import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { association: en },
    fr: { association: fr },
  },
  fallbackLng: 'en',
  debug: process.env.NODE_ENV !== 'production',
  ns: ['association'],
  defaultNS: 'association',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;
