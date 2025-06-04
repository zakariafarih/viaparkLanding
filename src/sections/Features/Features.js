import React from 'react';
import './Features.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import IconList from '../../components/IconList/IconList';
import featuresData from './FeaturesData';
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();
    
    return (
        <section
            className='section-bg section-common features-section pt-100 pb-70'
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="container">
                <SectionTitle
                    subTitle={t('features.subTitle')}
                    title={t('features.title')}
                    description={t('features.description')}
                />

                <div className="row align-items-center">
                    {featuresData.map(feature => (
                        <IconList
                            key={feature.translationKey}
                            icon={feature.icon}
                            title={t(`features.items.${feature.translationKey}.title`)}
                            description={t(`features.items.${feature.translationKey}.description`)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;