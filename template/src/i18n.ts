import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en",
    fallbackLng: 'en',
    fallbackNS: 'common',

    resources: { en },

    keySeparator: '.',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
