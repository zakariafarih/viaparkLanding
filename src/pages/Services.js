import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Service from '../components/Service/Service';
import ServicesData from '../sections/Services/ServiceData';
import { useTranslation } from 'react-i18next';
import PageSEO, { getServicesListSchema } from '../components/PageSEO';
import './Services.scss';

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO
        path="/services"
        titleKey="seo.services.title"
        descriptionKey="seo.services.description"
        schema={getServicesListSchema(t)}
      />
      <Navbar />

      <main>
      <section className="all-services-section pt-100 pb-70" data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
          {/* Section header */}
          <div className="row mb-5">
            <div className="col-md-12">
              <SectionTitle
                subTitle={t('services.page.subTitle')}
                title={t('services.page.title')}
                description={t('services.page.description')}
                headingLevel="h1"
              />
            </div>
          </div>

          {/* Service cards */}
          <div className="row">
            {ServicesData.map((singleService, index) => (
              <Service key={index} serviceList={singleService} />
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;