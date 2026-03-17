import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({subTitle, title, description, headingLevel}) => {
    const Heading = headingLevel || 'h2';
    return (
        <div className='section-title'>
            <span>{subTitle}</span>
            <Heading>{title}</Heading>
            <p>{description}</p>
        </div>
    );
};

export default SectionTitle;