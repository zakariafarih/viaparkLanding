import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AiFillHome } from 'react-icons/ai';
import { FaClock } from 'react-icons/fa';
import ContactButtons from '../../components/ContactButtons/ContactButtons';
import { useTranslation } from 'react-i18next';

const Appointment = () => {
  const { t } = useTranslation();
  
  // Embed link centered on C. Lagunas de Ruidera, 127, Orihuela Costa
  const mapLink =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.4550334680937!2d-0.7379588303367207!3d37.957985555656464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63072ec17dbbb7%3A0x88ea46939bc06bf!2sViapark%20Dental%20-%20Deutscher%20Zahnarzt!5e0!3m2!1sfr!2ses!4v1749002813102!5m2!1sfr!2ses';

  return (
    <section
      className="appointment-section pb-70"
      id="appointment"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="appointment-shell row align-items-center g-4">
          <div className="col-lg-6 col-md-12">
            <div className="google-map">
              <iframe
                title={t('appointment.mapTitle')}
                src={mapLink}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="appointment-contact-area">
              <SectionTitle
                subTitle={t('appointment.subTitle')}
                title={t('appointment.title')}
                description={t('appointment.description')}
              />

              <div className="appointment-meta-strip">
                <div className="appointment-meta-item">
                  <FaClock aria-hidden="true" />
                  <span>{t('footer.openingHoursValue')}</span>
                </div>
              </div>

              <ContactButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;