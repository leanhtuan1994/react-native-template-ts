import i18n from 'i18next';
import { useCallback } from 'react';
import { useMMKVString } from 'react-native-mmkv';

import { storage } from '../storage';
import type { Language } from './resources';

export const LOCAL = 'local';

export const getLanguage = () => storage.getString(LOCAL); // 'Marc' getItem<Language | undefined>(LOCAL);

export const changeLanguage = (lang: Language) => {
  // eslint-disable-next-line import/no-named-as-default-member
  i18n.changeLanguage(lang);
};

export const useSelectedLanguage = () => {
  const [language, setLang] = useMMKVString(LOCAL);

  const setLanguage = useCallback(
    (lang: Language) => {
      setLang(lang);
      if (lang !== undefined) changeLanguage(lang as Language);
    },
    [setLang]
  );

  return { language: language as Language, setLanguage };
};
