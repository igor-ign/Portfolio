import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TRANSLATION_RESOURCES } from "./constants";

i18n
  .use(initReactI18next)
  .init({
    resources: TRANSLATION_RESOURCES,
    lng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;