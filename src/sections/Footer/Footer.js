import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import callIcon from '../../assets/footer/calling.png';
import timeIcon from '../../assets/footer/time.png';
import locationIcon from '../../assets/footer/location.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const footerMenu = [
    { nameKey: 'about', link: '/about' },
    { nameKey: 'services', link: '/services' },
    { nameKey: 'contact', link: '/contact' }
  ];

  const footerContacts = [
    {
      titleKey: 'phoneNumber',
      info: '+34 641 328 992',
      icon: callIcon,
    },
    {
      titleKey: 'openingHours',
      infoKey: 'openingHoursValue',
      icon: timeIcon,
    },
    {
      titleKey: 'clinicAddress',
      infoKey: 'clinicAddressValue',
      icon: locationIcon,
    },
  ];

  return (
    <footer className="pt-100 pb-70">
      <div className="container">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-lg-6 col-md-5">
            <div className="footer-logo">
              <img src={logo} alt={t('footer.logoAlt')} />
            </div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="social-logo">
              <p>{t('footer.followUs')}</p>
              <ul>
                <li>
                  <a href="https://www.facebook.com/viaparkdental" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/viaparkdental" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/viaparkdental" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-2">
            <div className="footer-link">
              <p>{t('footer.quickLinks')}</p>
              <ul>
                <li>
                  <Link to="/">{t('navbar.home')}</Link>
                </li>
                {footerMenu.map((item) => (
                  <li key={item.nameKey}>
                    <Link to={item.link}>{t(`navbar.${item.nameKey}`)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Info */}
          <div className="col-lg-4 col-md-5">
            <div className="footer-contact">
              <p>{t('footer.contactInfo')}</p>
              {footerContacts.map((contact) => (
                <div className="contact-list" key={contact.titleKey}>
                  <div className="contact-icon">
                    <img src={contact.icon} alt={t(`footer.${contact.titleKey}Icon`)} />
                  </div>
                  <div className="contact-text">
                    <p>{t(`footer.${contact.titleKey}`)}</p>
                    <h5>
                      {contact.infoKey 
                        ? t(`footer.${contact.infoKey}`)
                        : contact.info}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-area">
          <div className="copy-text">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
          <div className="copy-links">
            <ul>
              <li>
                <Link to="/terms">{t('footer.terms')}</Link>
              </li>
              <li>
                <Link to="/privacy">{t('footer.privacy')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;