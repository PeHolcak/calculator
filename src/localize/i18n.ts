import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import csDashboard from './cs/dashboard.json';
import csNotFound from './cs/not-found.json';
import enDashboard from './en/dashboard.json';
import enNotFound from './en/not-found.json';

const resources = {
  cs: {
    dashboard: csDashboard,
    notFound: csNotFound,
  },
  en: {
    dashboard: enDashboard,
    notFound: enNotFound,
  }
};

export enum NS {
  dashboard="dashboard",
  notFound="notFound"
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;