import React from 'react';
import './ContactButtons.scss';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ContactButtons = () => {
  const { t } = useTranslation();

  // Contact methods
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'email',
      info: t('contact.methods.email.value'),
      link: 'mailto:info@viaparkdental.nl',
      colorClass: 'email-button'
    },
    {
      icon: <FaPhone />,
      title: 'phone',
      info: t('contact.methods.phone.value'),
      link: 'tel:+34641328992',
      colorClass: 'phone-button'
    },
    {
      icon: <FaWhatsapp />,
      title: 'whatsapp',
      info: t('contact.methods.whatsapp.value'),
      link: 'https://wa.me/34641328992',
      colorClass: 'whatsapp-button'
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
            target={method.title === 'whatsapp' ? '_blank' : '_self'}
            rel={method.title === 'whatsapp' ? 'noopener noreferrer' : ''}
          >
            <span className="button-icon">{method.icon}</span>
            <span className="button-text">
              <span className="button-title">{t(`contact.methods.${method.title}.label`)}</span>
              <span className="button-info">{method.info}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="emergency-call">
        <div className="emergency-icon">
          <FaPhone />
        </div>
        <div className="emergency-text">
          <p>{t('appointment.emergency.label')}</p>
          <a href="tel:+34641328992">{t('banner.phone')}</a>
        </div>
      </div>
      
      <div className="hours-info">
        <h4>{t('footer.openingHours')}</h4>
        <p>{t('footer.openingHoursValue')}</p>
      </div>
    </div>
  );
};

export default ContactButtons;