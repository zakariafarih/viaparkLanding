import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const footerMenu = [
    { nameKey: 'home', link: '/' },
    { nameKey: 'about', link: '/about' },
    { nameKey: 'services', link: '/services' },
    { nameKey: 'contact', link: '/contact' }
  ];

  const footerContacts = [
    {
      label: t('contact.methods.phone.label'),
      value: '+34 641 328 992',
      href: 'tel:+34641328992',
      icon: <FaPhoneAlt />,
    },
    {
      label: t('contact.methods.whatsapp.label'),
      value: '+34 641 328 992',
      href: 'https://wa.me/34641328992',
      external: true,
      icon: <FaWhatsapp />,
    },
    {
      label: t('contact.methods.email.label'),
      value: 'info@viaparkdental.nl',
      href: 'mailto:info@viaparkdental.nl',
      icon: <FaEnvelope />,
    },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main row g-4">
          <div className="col-lg-6 col-md-12">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt={t('footer.logoAlt')} />
              </div>
              <p className="footer-description">{t('footer.description')}</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <div className="footer-nav">
              <p className="footer-heading">{t('footer.quickLinks')}</p>
              <ul>
                {footerMenu.map((item) => (
                  <li key={item.nameKey}>
                    <Link to={item.link}>{t(`navbar.${item.nameKey}`)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-12">
            <div className="footer-contact">
              <p className="footer-heading">{t('navbar.cta')}</p>

              <div className="footer-action-list">
                {footerContacts.map((contact) => (
                  <a
                    className="footer-action-item"
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? '_blank' : undefined}
                    rel={contact.external ? 'noopener noreferrer' : undefined}
                  >
                    <span className="footer-action-icon">{contact.icon}</span>
                    <span className="footer-action-copy">
                      <small>{contact.label}</small>
                      <strong>{contact.value}</strong>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copy-text">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
          <div className="footer-bottom-note">
            <p>{t('footer.openingHours')}: {t('footer.openingHoursValue')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;