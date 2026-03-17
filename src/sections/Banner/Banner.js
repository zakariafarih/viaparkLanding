import React from 'react';
import './Banner.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';
import { useLangPath } from '../../utils/useLang';

const Banner = () => {
    const { t } = useTranslation();
    const lp = useLangPath();
    const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Viapark+Dental,+C.+Lagunas+de+Ruidera,+127,+Loc.+6+Pb,+03189+Orihuela+Costa,+Alicante';

    return (
        <section className="banner-section">
            <div className="banner-stage">
                <div className="banner-split">
                    <div className="banner-left">
                        <div className="banner-copy-card">
                            <div className="banner-topline">
                                <span className="banner-kicker">Clínica Dental Viapark</span>
                                <div className="banner-lang-badge" aria-label="Languages spoken">
                                    {t('banner.languageBadge')}
                                </div>
                            </div>

                            <h1>{t('banner.headline')}</h1>

                            <p className="banner-lead">{t('banner.lead')}</p>

                            <div className="banner-actions">
                                <Link className="banner-btn-primary" to={lp('/contact')}>
                                    {t('banner.cta')}
                                </Link>
                                <a
                                    className="banner-btn-whatsapp"
                                    href="https://wa.me/34641328992"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={trackWhatsAppClick}
                                >
                                    <FaWhatsapp aria-hidden="true" />
                                    WhatsApp
                                </a>
                                <a className="banner-btn-call" href="tel:+34641328992" onClick={trackPhoneClick}>
                                    <FaPhoneAlt aria-hidden="true" />
                                    {t('contact.methods.phone.label')}
                                </a>
                            </div>

                            <div className="banner-meta-grid">
                                <div className="banner-meta-card">
                                    <div className="banner-meta-icon">
                                        <FaClock aria-hidden="true" />
                                    </div>
                                    <div>
                                        <span>{t('footer.openingHours')}</span>
                                        <strong>{t('footer.openingHoursValue')}</strong>
                                    </div>
                                </div>

                                <a
                                    className="banner-meta-card banner-meta-card-primary"
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="banner-meta-icon">
                                        <FaMapMarkerAlt aria-hidden="true" />
                                    </div>
                                    <div>
                                        <span>{t('contact.methods.address.label')}</span>
                                        <strong>Viapark V, Orihuela Costa, Alicante</strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="banner-right">
                        <div className="banner-visual-frame">
                            <div className="banner-image-panel">
                                <picture>
                                    <source
                                        srcSet="/media/entrance-640.webp 640w, /media/entrance-960.webp 960w, /media/entrance.webp 1280w"
                                        sizes="(max-width: 991px) 100vw, 622px"
                                        type="image/webp"
                                    />
                                    <img
                                        src="/media/entrance-960.webp"
                                        alt="Clínica Dental Viapark – Orihuela Costa"
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="async"
                                        width="1280"
                                        height="572"
                                        sizes="(max-width: 991px) 100vw, 622px"
                                    />
                                </picture>

                                <a
                                    className="banner-visual-card banner-visual-card-bottom"
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{t('contact.methods.address.label')}</span>
                                    <strong>{t('contact.methods.address.value').split('\n')[2]}</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;