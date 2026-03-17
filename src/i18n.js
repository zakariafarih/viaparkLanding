import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ------- translation files -------
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';
import nl from './locales/nl/translation.json';

const SUPPORTED = ['en', 'es', 'fr', 'nl'];

// Detect language from the first URL path segment (/en/, /es/, …)
const pathLang = window.location.pathname.split('/')[1];
const detectedLang = SUPPORTED.includes(pathLang) ? pathLang : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      nl: { translation: nl },
    },
    lng: detectedLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
