import i18n, {
  LanguageDetectorAsyncModule,
  Services,
  InitOptions,
} from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

import { en, vi } from './localization';

export const AVAILABLE_LANGUAGES = {
  en,
  vi,
};

const AVAILABLE_LANGUAGES_CODES = Object.keys(AVAILABLE_LANGUAGES);

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: (
    _services: Services,
    _detectorOptions: Record<string, unknown>,
    _i18nextOptions: InitOptions,
  ) => {
    // use services of options
  },
  detect: (callback: (lng: string) => void) => {
    AsyncStorage.getItem('APP_LANG', (err, lng) => {
      console.log('lang: ' + lng);
      if (err || !lng) {
        if (err) {
          console.log('get storage lang error ' + err);
        } else {
          console.log(
            'no language is set before, choosing the best language available or Eng as fallback ',
          );
          const bestLang = RNLocalize.findBestAvailableLanguage(
            AVAILABLE_LANGUAGES_CODES,
          );
          console.log('best lang: ' + bestLang?.languageTag);
          callback(bestLang?.languageTag ?? AVAILABLE_LANGUAGES_CODES[0]);
          return;
        }
      }
      callback(lng ?? AVAILABLE_LANGUAGES_CODES[0]);
    });
  },
  cacheUserLanguage: (lang: string) => {
    AsyncStorage.setItem('APP_LANG', lang);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: AVAILABLE_LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
  });
