import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "language-selection-header-stage": "Language",
      "language-selection-title": "Please select your preferred language from the options below.",
      "soft-skills-selection-header-stage": "Soft Skills",
      "soft-skills-selection-title": "When seeking a front-end developer, what soft skills are you looking for?",
      "hard-skills-selection-header-stage": "Hard Skills",
      "hard-skills-selection-title": "When seeking a front-end developer, which hard skills you are looking for?",
      "result-header-stage": "Result",
      "next-button-text": "Next"
    }
  },
  pt: {
    translation: {
      "language-selection-header-stage": "Linguagem",
      "language-selection-title": "Por favor selecione a linguagem de sua preferência nas opções abaixo.",
      "soft-skills-selection-header-stage": "Soft Skills",
      "soft-skills-selection-title": "Quando você está procurando por um desenvolvedor front-end, quais soft skills você busca?",
      "hard-skills-selection-header-stage": "Hard Skills",
      "hard-skills-selection-title": "Quando você está procurando por um desenvolvedor front-end, quais hard skills você busca?",
      "result-header-stage": "Resultado",
      "next-button-text": "Próximo"
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