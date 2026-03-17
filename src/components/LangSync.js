import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { trackPageView } from '../utils/analytics';

const SUPPORTED = ['en', 'es', 'fr', 'nl'];

/**
 * Syncs the :lang URL param with i18next.
 * Wrap page components with this so that navigating to /es/about
 * automatically switches the i18n language.
 */
const LangSync = ({ children }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (lang && SUPPORTED.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    if (!lang || !SUPPORTED.includes(lang)) {
      return;
    }

    trackPageView({
      path: `${location.pathname}${location.search}${location.hash}`,
      title: document.title,
      language: lang
    });
  }, [lang, location.pathname, location.search, location.hash]);

  return children;
};

export default LangSync;
