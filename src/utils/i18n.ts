import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "react-native-localize";

import signIn from "@traduction/sign-in.en.json";
import home from "@traduction/home.en.json";
import explore from "@traduction/explore.en.json";

// Define your resources here
const resources = {
  en: {
    signIn,
    home,
    explore,
  },
} as const;

// Function to get the best available language
const findBestAvailableLanguage = (): string => {
  const bestLanguage = Localization.findBestLanguageTag(Object.keys(resources));
  return bestLanguage?.languageTag || "en";
};

// Initialize i18next
i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: findBestAvailableLanguage(),
  fallbackLng: "en",
  debug: true,
  defaultNS: "translation",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
