import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeIcon from '../ThemeIcon/ThemeIcon';
import './Service.scss';
import { useLangPath } from '../../utils/useLang';

const Service = ({serviceList}) => {
    const { t } = useTranslation();
    const lp = useLangPath();
    const { translationKey, icon } = serviceList;
 
    const title = t(`services.items.${translationKey}.title`);
    const description = t(`services.items.${translationKey}.description`);

    return (
        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
           <div className="service-box">
                <div className="service-icon">
                    <div className='icon-area'>
                        <ThemeIcon icon={icon} alt={title} />
                    </div>
                </div>
                <div className="service-text">
                    <h3><Link to={lp(`/services/${translationKey}`)}>{title}</Link></h3>
                    <p>{description}</p>
                </div>
           </div>
        </div>
    );
};

export default Service;