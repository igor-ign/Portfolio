import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "language-selection-header-stage": "Language",
      "soft-skills-selection-header-stage": "Soft Skills",
      "hard-skills-selection-header-stage": "Hard Skills",
      "result-header-stage": "Result"
    }
  },
  pt: {
    translation: {
      "language-selection-header-stage": "Linguagem",
      "soft-skills-selection-header-stage": "Soft Skills",
      "hard-skills-selection-header-stage": "Hard Skills",
      "result-header-stage": "Resultado"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;