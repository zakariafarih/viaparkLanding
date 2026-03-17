import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import PageSEO, { getDentistSchema } from '../components/PageSEO';

const Services = lazy(() => import('../sections/Services/Services'));
const Emergency = lazy(() => import('../sections/Emergency/Emergency'));
const Features = lazy(() => import('../sections/Features/Features'));
const Appointment = lazy(() => import('../sections/Appointment/Appointment'));
const Footer = lazy(() => import('../sections/Footer/Footer'));

const Home = () => {
    const { t } = useTranslation();
    const [showDeferredSections, setShowDeferredSections] = useState(false);

    useEffect(() => {
        let timerId;
        let idleId;

        const revealDeferredSections = () => {
            setShowDeferredSections(true);
        };

        if ('requestIdleCallback' in window) {
            idleId = window.requestIdleCallback(revealDeferredSections, { timeout: 1200 });
        } else {
            timerId = window.setTimeout(revealDeferredSections, 600);
        }

        return () => {
            if (idleId) {
                window.cancelIdleCallback(idleId);
            }

            if (timerId) {
                window.clearTimeout(timerId);
            }
        };
    }, []);

    return (
        <>
            <PageSEO
                path="/"
                titleKey="seo.home.title"
                descriptionKey="seo.home.description"
                schema={getDentistSchema(t)}
                preloadImage="/media/entrance.webp"
            />
            <Navbar/>
            <main>
                <Banner/>
                {showDeferredSections ? (
                    <Suspense fallback={null}>
                        <Services/>
                        <Emergency/>
                        <Features />
                        <Appointment/>
                    </Suspense>
                ) : null}
            </main>
            {showDeferredSections ? (
                <Suspense fallback={null}>
                    <Footer/>
                </Suspense>
            ) : null}
        </>
    );
};

export default Home;