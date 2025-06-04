import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import Footer from '../../sections/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contactus = () => {
  const { t } = useTranslation();

  // Contact methods
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'email',
      info: 'info@viaparkdental.nl',
      link: 'mailto:info@viaparkdental.nl',
      linkType: 'email'
    },
    {
      icon: <FaPhone />,
      title: 'phone',
      info: '+34 641 328 992',
      link: 'tel:+34641328992',
      linkType: 'phone'
    },
    {
      icon: <FaWhatsapp />,
      title: 'whatsapp',
      info: '+34 641 328 992',
      link: 'https://wa.me/34641328992',
      linkType: 'whatsapp'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'address',
      info: 'addressValue',
      linkType: 'map'
    },
    {
      icon: <FaClock />,
      title: 'hours',
      info: 'hoursValue',
      linkType: 'text'
    }
  ];

  return (
    <>
      <Navbar />
      <section className='contact-section' data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
          <SectionTitle 
            subTitle={t('contact.subTitle')}
            title={t('contact.title')}
            description={t('contact.description')}
          />
          
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div className="contact-method-card" key={index}>
                <div className="contact-method-icon">
                  {method.icon}
                </div>
                <div className="contact-method-content">
                  <h3>{t(`contact.methods.${method.title}.label`)}</h3>
                  <p>
                    {method.linkType !== 'text' && method.linkType !== 'map' ? (
                      <a 
                        href={method.link} 
                        target={method.linkType === 'whatsapp' ? '_blank' : '_self'}
                        rel={method.linkType === 'whatsapp' ? 'noopener noreferrer' : ''}
                        className={`contact-link contact-link-${method.linkType}`}
                      >
                        {method.info}
                      </a>
                    ) : (
                      method.info === 'addressValue' || method.info === 'hoursValue' 
                        ? t(`contact.methods.${method.title}.value`) 
                        : method.info
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="map-container">
            <iframe
              title={t('contact.mapTitle')}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.4550334680937!2d-0.7379588303367207!3d37.957985555656464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63072ec17dbbb7%3A0x88ea46939bc06bf!2sViapark%20Dental%20-%20Deutscher%20Zahnarzt!5e0!3m2!1sfr!2ses!4v1749002813102!5m2!1sfr!2ses"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;