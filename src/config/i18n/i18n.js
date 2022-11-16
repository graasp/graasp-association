import { initReactI18next, useTranslation } from 'react-i18next';
import buildI18n, { namespaces } from '@graasp/translations';

const i18n = buildI18n().use(initReactI18next);

export const useCommonTranslation = () => useTranslation(namespaces.common);
export const useAssociationTranslation = () =>
  useTranslation(namespaces.association);

export default i18n;
