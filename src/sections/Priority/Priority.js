import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '../../utils/useLang';

const Priority = () => {
  const { t } = useTranslation();
  const lp = useLangPath();

  return (
    <section className="priority-section" data-aos="fade-up" data-aos-duration="2000">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 col-md-6">
            <div className="priority-img">
              <img src={priorityImg} alt={t('about.priority.imageAlt')} width="506" height="380" />
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
                <Link to={lp('/contact')}>{t('common.bookAppointment')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priority;