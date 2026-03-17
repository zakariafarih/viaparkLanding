import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './LanguageSwitcher.scss';

const LanguageSwitcher = ({ closeParentMenu }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const LANGUAGES = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  ];

  const currentLang = lang || i18n.language || 'en';
  const currentLanguage = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    // Replace current language prefix in URL with the new one
    const pathAfterLang = location.pathname.replace(/^\/[a-z]{2}/, '');
    navigate(`/${code}${pathAfterLang || ''}`);
    setIsOpen(false);
    
    // Close parent menu if provided
    if (closeParentMenu && typeof closeParentMenu === 'function') {
      closeParentMenu();
    }
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-switcher__button" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="language-switcher__flag">{currentLanguage.flag}</span>
        <span className="language-switcher__code">{currentLanguage.code.toUpperCase()}</span>
        <span className="language-switcher__arrow">▼</span>
      </button>
      
      {isOpen && (
        <ul className="language-switcher__dropdown">
          {LANGUAGES.map(language => (
            <li key={language.code}>
              <button
                className={`language-switcher__option ${i18n.language === language.code ? 'language-switcher__option--active' : ''}`}
                onClick={() => handleLanguageChange(language.code)}
              >
                <span className="language-switcher__flag">{language.flag}</span>
                <span className="language-switcher__label">{language.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;