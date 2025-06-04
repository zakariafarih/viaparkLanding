import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner_1.png';
import bannerTwo from '../../assets/about/banner/banner_2.png';
import pattern from '../../assets/banner/pattern.png';
import { useTranslation } from 'react-i18next';

const AboutBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" data-aos="fade-up" data-aos-duration="2000">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              {/* Text Column */}
              <div className="col-lg-5">
                <div className="about-banner-text">
                  <h2>{t('about.banner.title')}</h2>
                  <p>{t('about.banner.description')}</p>
                  <div className="theme-btn">
                    <Link to="/contact">{t('common.bookAppointment')}</Link>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="col-lg-7">
                <div className="about-banner-img">
                  <img src={bannerOne} alt={t('about.banner.imageAlt1')} />
                  <img src={bannerTwo} alt={t('about.banner.imageAlt2')} />
                  <img className="pattern" src={pattern} alt={t('common.patternAlt')} />
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