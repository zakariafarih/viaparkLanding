import React from 'react';
import './PatientGallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';

import caseImage1 from '../../assets/about/patient-gallery/case1.png';
import caseImage2 from '../../assets/about/patient-gallery/case2.png';
import caseImage3 from '../../assets/about/patient-gallery/case3.png';

const PatientGallery = () => {
  const { t } = useTranslation();

  const galleryItems = [
    {
      id: 1,
      image: caseImage1,
      altKey: 'image1Alt'
    },
    {
      id: 2,
      image: caseImage2,
      altKey: 'image2Alt'
    },
    {
      id: 3,
      image: caseImage3,
      altKey: 'image3Alt'
    }
  ];

  return (
    <section className="patient-gallery-section" data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <SectionTitle
          subTitle={t('about.patientGallery.subTitle')}
          title={t('about.patientGallery.title')}
          description={t('about.patientGallery.description')}
        />

        <div className="gallery-grid gallery-grid-3">
          {galleryItems.map((item) => (
            <div className="gallery-item" key={item.id}>
              <div className="gallery-image">
                <img src={item.image} alt={t(`about.patientGallery.${item.altKey}`)} />
              </div>
            </div>
          ))}
        </div>

        <div className="patient-gallery-cta">
          <h4>{t('about.patientGallery.moreWorkTitle')}</h4>
          <p>{t('about.patientGallery.moreWorkText')}</p>
        </div>
      </div>
    </section>
  );
};

export default PatientGallery;