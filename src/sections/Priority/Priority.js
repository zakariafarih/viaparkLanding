import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';
import { useTranslation } from 'react-i18next';

const Priority = () => {
  const { t } = useTranslation();

  return (
    <section className="priority-section" data-aos="fade-up" data-aos-duration="2000">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 col-md-6">
            <div className="priority-img">
              <img src={priorityImg} alt={t('about.priority.imageAlt')} />
            </div>
          </div>

          {/* Text Column */}
          <div className="col-lg-6 col-md-6">
            <div className="priority-text">
              <SectionTitle
                subTitle={t('about.priority.subTitle')}
                title={t('about.priority.title')}
                description={t('about.priority.description')}
              />
              <div className="theme-btn">
                <Link to="/contact">{t('common.bookAppointment')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priority;