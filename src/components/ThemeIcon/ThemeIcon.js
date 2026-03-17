import React from 'react';
import './ThemeIcon.scss';

const ThemeIcon = ({icon, alt = ''}) => {
    return (
        <div className='icon-box'>
            <img src={icon} alt={alt} loading="lazy" decoding="async" width="50" height="50" />
        </div>
    );
};

export default ThemeIcon;