import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import Priority from '../sections/Priority/Priority';
import PatientGallery from '../sections/PatientGallery/PatientGallery';
import Footer from '../sections/Footer/Footer';
import PageSEO, { getDentistPersonSchema } from '../components/PageSEO';

const About = () => {
    return (
        <>
            <PageSEO
                path="/about"
                titleKey="seo.about.title"
                descriptionKey="seo.about.description"
                schema={getDentistPersonSchema()}
            />
            <Navbar />
            <main>
                <AboutBanner />
                <Priority />
                <PatientGallery />
            </main>
            <Footer />
        </>
    );
};

export default About;