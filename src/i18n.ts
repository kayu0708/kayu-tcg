import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        shrinked: "Shrinked",
        unshrinked: "Unshrinked",
        noBox: "No Box",
        loosePack: "Loose Pack",
      },
    },
    zh: {
      translation: {
        shrinked: "原膜",
        unshrinked: "无膜",
        noBox: "垃圾袋",
        loosePack: "散包",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
