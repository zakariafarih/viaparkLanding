import React from 'react';
import './EmergencyBar.scss';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';

const EmergencyBar = () => {
  const { t } = useTranslation();

  return (
    <div className="emergency-bar" role="complementary" aria-label={t('emergency.subTitle')}>
      <a href="tel:+34641328992" className="emergency-bar-btn emergency-bar-call" onClick={trackPhoneClick}>
        <FaPhoneAlt aria-hidden="true" />
        <span>{t('contact.methods.phone.label')}</span>
      </a>
      <a
        href="https://wa.me/34641328992"
        className="emergency-bar-btn emergency-bar-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
      >
        <FaWhatsapp aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default EmergencyBar;
