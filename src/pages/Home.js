import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Emergency from '../sections/Emergency/Emergency';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>
            <Emergency/>
            <Features />
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;