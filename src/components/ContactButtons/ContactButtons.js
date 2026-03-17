import React from 'react';
import './ContactButtons.scss';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { trackPhoneClick, trackWhatsAppClick, trackEmailClick } from '../../utils/analytics';

const ContactButtons = () => {
  const { t } = useTranslation();

  // Contact methods
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'email',
      info: t('contact.methods.email.value'),
      link: 'mailto:info@viaparkdental.com',
      colorClass: 'email-button',
      onClick: trackEmailClick
    },
    {
      icon: <FaPhone />,
      title: 'phone',
      info: t('contact.methods.phone.value'),
      link: 'tel:+34641328992',
      colorClass: 'phone-button',
      onClick: trackPhoneClick
    },
    {
      icon: <FaWhatsapp />,
      title: 'whatsapp',
      info: t('contact.methods.whatsapp.value'),
      link: 'https://wa.me/34641328992',
      colorClass: 'whatsapp-button',
      onClick: trackWhatsAppClick
    }
  ];

  return (
    <div className="contact-buttons-container">
      <div className="contact-buttons">
        {contactMethods.map((method, index) => (
          <a 
            key={index}
            href={method.link}
            className={`contact-button ${method.colorClass}`}
            {...(method.title === 'whatsapp'
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            onClick={method.onClick}
          >
            <span className="button-icon">{method.icon}</span>
            <span className="button-text">
              <span className="button-title">{t(`contact.methods.${method.title}.label`)}</span>
              <span className="button-info">{method.info}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactButtons;