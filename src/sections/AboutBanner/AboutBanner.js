import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner_1.png';
import bannerTwo from '../../assets/about/banner/banner_2.png';
import pattern from '../../assets/banner/pattern.png';
import { useTranslation } from 'react-i18next';
import { useLangPath } from '../../utils/useLang';

const AboutBanner = () => {
  const { t } = useTranslation();
  const lp = useLangPath();

  return (
    <section className="about-section" data-aos="fade-up" data-aos-duration="2000">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              {/* Text Column */}
              <div className="col-lg-5">
                <div className="about-banner-text">
                  <h1>{t('about.banner.title')}</h1>
                  <p>{t('about.banner.description')}</p>
                  <div className="theme-btn">
                    <Link to={lp('/contact')}>{t('common.bookAppointment')}</Link>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="col-lg-7">
                <div className="about-banner-img">
                  <img src={bannerOne} alt={t('about.banner.imageAlt1')} width="290" height="400" />
                  <img src={bannerTwo} alt={t('about.banner.imageAlt2')} width="290" height="400" />
                  <img className="pattern" src={pattern} alt="" width="144" height="144" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;