import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ServicesData from '../sections/Services/ServiceData';
import { FaCheckCircle, FaPhoneAlt, FaArrowLeft } from 'react-icons/fa';
import PageSEO, { getServiceSchema } from '../components/PageSEO';
import { trackPhoneClick } from '../utils/analytics';
import { useLangPath } from '../utils/useLang';
import aestheticResult from '../assets/service/aesthetic-result.webp';
import './ServiceDetail.scss';

const VALID_SERVICES = ServicesData.map(s => s.translationKey);

const ServiceDetail = () => {
  const { serviceId, lang } = useParams();
  const { t } = useTranslation();
  const lp = useLangPath();

  if (!VALID_SERVICES.includes(serviceId)) {
    return <Navigate to={`/${lang || 'en'}/services`} replace />;
  }

  const serviceData = ServicesData.find(s => s.translationKey === serviceId);
  const title = t(`services.items.${serviceId}.title`);
  const description = t(`services.items.${serviceId}.description`);
  const detail = t(`serviceDetail.${serviceId}`, { returnObjects: true });

  return (
    <>
      <Navbar />

      <PageSEO
        path={`/services/${serviceId}`}
        titleKey="seo.serviceDetail.title"
        descriptionKey="seo.serviceDetail.description"
        titleValues={{ serviceName: title }}
        descriptionValues={{ serviceName: title }}
        schema={getServiceSchema(serviceId, t, lang || 'en')}
      />

      {/* Hero */}
      <main>
      <section className="service-detail-hero">
        <div className="container">
          <Link to={lp('/services')} className="back-link">
            <FaArrowLeft /> {t('serviceDetail.backToServices')}
          </Link>
          <div className="hero-content">
            <div className="hero-icon">
              <img src={serviceData.icon} alt={title} width="512" height="512" />
            </div>
            <h1>{title}</h1>
            <p className="hero-lead">{description}</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="service-detail-content pt-100 pb-70">
        <div className="container">
          <div className="row">
            {/* Left: detailed info */}
            <div className="col-lg-8">
              <div className="detail-block">
                <SectionTitle
                  subTitle={t('serviceDetail.overviewLabel')}
                  title={detail.heading}
                />
                <p className="detail-text">{detail.overview}</p>
              </div>

              {detail.benefits && detail.benefits.length > 0 && (
                <div className="detail-block">
                  <h3 className="block-heading">{t('serviceDetail.benefitsLabel')}</h3>
                  <ul className="benefits-list">
                    {detail.benefits.map((benefit, i) => (
                      <li key={i}>
                        <FaCheckCircle className="check-icon" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {serviceId === 'aesthetic' && (
                <div className="detail-block aesthetic-showcase">
                  <h3 className="block-heading">{t('serviceDetail.ourWorkLabel', 'Our Work')}</h3>
                  <img
                    src={aestheticResult}
                    alt={t('serviceDetail.aestheticResultAlt', 'Aesthetic dentistry result by Clínica Dental Viapark')}
                    className="showcase-image"
                    width="900"
                    height="900"
                    loading="lazy"
                  />
                </div>
              )}

              {detail.process && (
                <div className="detail-block">
                  <h3 className="block-heading">{t('serviceDetail.processLabel')}</h3>
                  <p className="detail-text">{detail.process}</p>
                </div>
              )}

              {detail.regulations && (
                <div className="detail-block regulations-block">
                  <h3 className="block-heading">{t('serviceDetail.regulationsLabel')}</h3>
                  <p className="detail-text">{detail.regulations}</p>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div className="col-lg-4">
              <div className="sidebar-card">
                <h4>{t('serviceDetail.ctaTitle')}</h4>
                <p>{t('serviceDetail.ctaText')}</p>
                <a href="tel:+34641328992" className="cta-phone" onClick={trackPhoneClick}>
                  <FaPhoneAlt />
                  <span>+34 641 328 992</span>
                </a>
              </div>

              {/* Other services */}
              <div className="sidebar-card other-services">
                <h4>{t('serviceDetail.otherServicesLabel')}</h4>
                <ul>
                  {ServicesData.filter(s => s.translationKey !== serviceId).map((s, i) => (
                    <li key={i}>
                      <Link to={lp(`/services/${s.translationKey}`)}>
                        {t(`services.items.${s.translationKey}.title`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceDetail;
