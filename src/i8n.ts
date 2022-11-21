import { createI18n } from "vue-i18n";
import ja from "./locales/ja-JP.json";
import vi from "./locales/vi-VN.json";
// import en from "./locales/en-US.json";

const messages = {
  vi,
  ja,
};

// 2. Create i18n instance with options
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "ja", // set locale
  fallbackLocale: "ja", // set fallback locale
  messages,
});

export default i18n;
