import React from 'react';
import './Emergency.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EmergencyImg from '../../assets/emergency.png';
import { useTranslation } from 'react-i18next';

const Emergency = () => {
    const { t } = useTranslation();
    
    return (
        <section className='emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 emergency-image-col">
                        <div className="emergency-image-wrapper">
                            <img src={EmergencyImg} alt="Emergency Dentistry" className="emergency-image" />
                        </div>
                    </div>

                    {/* Textual content */}
                    <div className="col-lg-7 col-md-12">
                        <div className="emergency-content">
                            <SectionTitle
                                subTitle={t('emergency.subTitle')}
                                title={t('emergency.title')}
                                description={t('emergency.description')}
                            />

                            <div className="emergency-cta">
                                <a href="tel:+34641328992" className="emergency-call-button">
                                    {t('emergency.callButton')}: +34 641 328 992
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;