import { lazy, Suspense, useEffect } from 'react';
import './App.scss';
import Home from './pages/Home';
import {Routes, Route, Navigate, Outlet} from 'react-router-dom';
import EmergencyBar from './components/EmergencyBar/EmergencyBar';
import LangSync from './components/LangSync';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Contactus = lazy(() => import('./pages/Contact/Contactus'));

/** Layout that syncs the :lang param with i18next */
const LangLayout = () => (
  <LangSync>
    <Outlet />
  </LangSync>
);

function App() {
  useEffect(() => {
    let isCancelled = false;

    const scheduleAnimationSetup = () => {
      const loadAnimations = async () => {
        const [{ default: AOS }] = await Promise.all([
          import('aos'),
          import('aos/dist/aos.css')
        ]);

        if (isCancelled) {
          return;
        }

        AOS.init({
          once: true,
          duration: 800,
          offset: 40,
          easing: 'ease-out-cubic'
        });
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadAnimations, { timeout: 2500 });
      } else {
        window.setTimeout(loadAnimations, 1200);
      }
    };

    scheduleAnimationSetup();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          {/* Redirect bare / to default language */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* All pages under /:lang — LangSync keeps i18n in sync */}
          <Route path="/:lang" element={<LangLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:serviceId" element={<ServiceDetail />} />
            <Route path="contact" element={<Contactus />} />
          </Route>
        </Routes>
      </Suspense>
      <EmergencyBar />
    </>
  );
}

export default App;
