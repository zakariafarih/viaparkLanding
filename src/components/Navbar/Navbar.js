import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';
import logo from './../../assets/logo.png';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const navbarItems = [
    { name: t('navbar.home'),    path: '/' },
    { name: t('navbar.about'),   path: '/about' },
    { name: t('navbar.services'),path: '/services' },
    { name: t('navbar.contact'), path: '/contact' }
  ];

  useEffect(() => {
    const setBodyPadding = () => {
      if (navbarRef.current) {
        const navHeight = navbarRef.current.offsetHeight;
        document.body.style.paddingTop = `${navHeight-50}px`;
        
        if (menuRef.current) {
          menuRef.current.style.top = `${navHeight-50}px`;
        }
      }
    };

    setBodyPadding();
    
    window.addEventListener('resize', setBodyPadding);
    
    return () => {
      window.removeEventListener('resize', setBodyPadding);
      document.body.style.paddingTop = '0';
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="main-nav" ref={navbarRef}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={closeMenu}>
              <img src={logo} alt="logo" />
            </Link>

            <div className="mobile-right-wrapper">
              <div className="mobile-language-switcher">
                <LanguageSwitcher closeParentMenu={closeMenu} />
              </div>
              
              <button
                ref={toggleButtonRef}
                className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleMenu}
                aria-controls="navbarContent"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
              </button>
            </div>

            <div 
              ref={menuRef}
              className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} 
              id="navbarContent"
            >
              <ul className="navbar-nav">
                {navbarItems.map(item => (
                  <li key={item.path} className="nav-item">
                    <Link 
                      className="nav-link" 
                      to={item.path}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="navbar-actions">
                <div className="language-switcher-desktop">
                  <LanguageSwitcher closeParentMenu={closeMenu} />
                </div>
                
                <div className="theme-btn">
                  <Link to="/contact" onClick={closeMenu}>
                    {t('navbar.cta')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;