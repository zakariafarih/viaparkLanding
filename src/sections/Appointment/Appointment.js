import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import ContactButtons from '../../components/ContactButtons/ContactButtons';
import { useTranslation } from 'react-i18next';

const Appointment = () => {
  const { t } = useTranslation();
  const mapLink = 'https://www.google.com/maps/search/?api=1&query=Viapark+Dental,+C.+Lagunas+de+Ruidera,+127,+Loc.+6+Pb,+03189+Orihuela+Costa,+Alicante';

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
            <a className="google-map google-map-link" href={mapLink} target="_blank" rel="noopener noreferrer" aria-label={t('appointment.mapTitle')}>
              <div className="google-map__canvas">
                <div className="google-map__badge">
                  <FaMapMarkerAlt aria-hidden="true" />
                  <span>{t('contact.methods.address.label')}</span>
                </div>
                <strong>Viapark V, Orihuela Costa</strong>
                <p>{t('contact.methods.address.value')}</p>
                <span className="google-map__cta">Open in Google Maps</span>
              </div>
            </a>
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