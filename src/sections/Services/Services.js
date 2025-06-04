import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();
    
    const featuredServices = ServicesData.slice(0, 4);

    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle 
                            title={t('services.homeSection.title')} 
                            subTitle={t('services.homeSection.subTitle')}
                        />
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>
                            {t('services.homeSection.description')}
                        </p>
                    </div>
                </div>

                <div className="row featured-services">
                    {featuredServices.map((singleService, index) => (
                        <Service key={index} serviceList={singleService} />
                    ))}
                </div>
                
                <div className="view-all-services">
                    <Link to='/services' className='view-all-btn'>
                        <span>{t('services.viewAllButton')}</span>
                        <BsFillArrowRightCircleFill className="arrow-icon" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;