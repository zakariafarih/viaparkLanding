import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const SITE_URL = 'https://viaparkdental.com';
const LANGUAGES = ['en', 'es', 'nl', 'fr'];
const DEFAULT_IMAGE = `${SITE_URL}/media/entrance.jpeg`;
const LOCALE_MAP = {
  en: 'en_US',
  es: 'es_ES',
  nl: 'nl_NL',
  fr: 'fr_FR'
};

const PageSEO = ({ path = '/', titleKey, descriptionKey, schema, preloadImage, titleValues, descriptionValues }) => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const resolvedLang = lang || i18n.language?.split('-')[0] || 'en';
  const currentLang = LANGUAGES.includes(resolvedLang) ? resolvedLang : 'en';
  const canonicalUrl = `${SITE_URL}/${currentLang}${path === '/' ? '' : path}`;
  const preloadImageUrl = preloadImage
    ? (preloadImage.startsWith('http') ? preloadImage : `${SITE_URL}${preloadImage}`)
    : null;

  const title = t(titleKey, titleValues);
  const description = t(descriptionKey, descriptionValues);

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      {preloadImageUrl && <link rel="preload" as="image" href={preloadImageUrl} />}

      {/* Hreflang tags — each language has its own subdirectory URL */}
      {LANGUAGES.map(lng => (
        <link
          key={lng}
          rel="alternate"
          hrefLang={lng}
          href={`${SITE_URL}/${lng}${path === '/' ? '' : path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en${path === '/' ? '' : path}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Clínica Dental Viapark" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={LOCALE_MAP[currentLang]} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:alt" content="Clínica Dental Viapark exterior" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

// Dentist schema for homepage
export const getDentistSchema = (t) => ({
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${SITE_URL}/#dentist`,
  name: 'Clínica Dental Viapark',
  alternateName: 'Viapark Dental',
  url: SITE_URL,
  telephone: '+34641328992',
  email: 'info@viaparkdental.com',
  image: DEFAULT_IMAGE,
  logo: `${SITE_URL}/favicon.png`,
  description: t('footer.description'),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C. Lagunas de Ruidera, 127, Loc. 6 Pb, Centro Comercial Viapark V',
    addressLocality: 'Orihuela Costa',
    addressRegion: 'Alicante',
    postalCode: '03189',
    addressCountry: 'ES'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.957985,
    longitude: -0.737958
  },
  areaServed: [
    { '@type': 'Place', name: 'Orihuela Costa' },
    { '@type': 'Place', name: 'Torrevieja' },
    { '@type': 'Place', name: 'Costa Blanca South' }
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:30',
    closes: '15:00'
  },
  priceRange: '€€',
  paymentAccepted: 'Cash, Credit Card',
  availableLanguage: [
    { '@type': 'Language', name: 'Spanish' },
    { '@type': 'Language', name: 'English' },
    { '@type': 'Language', name: 'Dutch' },
    { '@type': 'Language', name: 'German' }
  ],
  medicalSpecialty: 'Dentistry',
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Viapark+Dental,+Orihuela+Costa',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '25',
    bestRating: '5'
  },
  sameAs: [
    'https://www.google.com/maps/place/Viapark+Dental+-+Deutscher+Zahnarzt/'
  ]
});

// Service schema for service detail pages
export const getServiceSchema = (serviceId, t, lang = 'en') => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: t(`services.items.${serviceId}.title`),
  description: t(`services.items.${serviceId}.description`),
  procedureType: 'http://schema.org/NoninvasiveProcedure',
  url: `${SITE_URL}/${lang}/services/${serviceId}`,
  bodyLocation: 'Mouth',
  howPerformed: t(`serviceDetail.${serviceId}.overview`, { defaultValue: '' }),
  provider: {
    '@type': 'Dentist',
    '@id': `${SITE_URL}/#dentist`,
    name: 'Clínica Dental Viapark'
  }
});

// Person schema for about page (Dr. Nasre)
export const getDentistPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${SITE_URL}/#dentist`,
  name: 'Clínica Dental Viapark',
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  telephone: '+34641328992',
  email: 'info@viaparkdental.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C. Lagunas de Ruidera, 127, Loc. 6 Pb, Centro Comercial Viapark V',
    addressLocality: 'Orihuela Costa',
    addressRegion: 'Alicante',
    postalCode: '03189',
    addressCountry: 'ES'
  },
  member: {
    '@type': 'Person',
    name: 'Dr. Nasre',
    jobTitle: 'Lead Dentist',
    worksFor: {
      '@type': 'Dentist',
      '@id': `${SITE_URL}/#dentist`
    },
    medicalSpecialty: ['Implantology', 'Reconstructive Dentistry', 'General Dentistry'],
    knowsLanguage: ['Spanish', 'English', 'Dutch', 'German']
  }
});

// ItemList schema for services listing page
export const getServicesListSchema = (t, lang = 'en') => {
  const serviceIds = ['general', 'pediatric', 'implant', 'aesthetic', 'reconstructive', 'orthodontics', 'surgical', 'emergency'];
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('seo.services.title'),
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: serviceIds.length,
    itemListElement: serviceIds.map((id, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/${lang}/services/${id}`,
      name: t(`services.items.${id}.title`)
    }))
  };
};

// FAQ schema for contact page
export const getFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export default PageSEO;
