import { useParams } from 'react-router-dom';

/**
 * Returns the current language prefix from the URL (e.g. "en").
 * Falls back to "en" if no :lang param is found.
 */
export const useLang = () => {
  const { lang } = useParams();
  return lang || 'en';
};

/**
 * Prepends the current language prefix to a path.
 * Usage: const to = useLangPath(); <Link to={to('/about')} />
 */
export const useLangPath = () => {
  const lang = useLang();
  return (path) => `/${lang}${path === '/' ? '' : path}`;
};
