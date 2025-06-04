import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import Priority from '../sections/Priority/Priority';
import PatientGallery from '../sections/PatientGallery/PatientGallery';
import Footer from '../sections/Footer/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <Priority />
            <PatientGallery />
            <Footer />
        </>
    );
};

export default About;