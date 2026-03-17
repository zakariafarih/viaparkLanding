/**
 * Push a custom event to the GTM dataLayer.
 * Safe to call even before GTM loads — events are queued.
 */
export const trackEvent = (eventName, params = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
};

export const trackPageView = ({ path, title, language }) =>
  trackEvent('virtual_page_view', {
    page_path: path,
    page_title: title,
    page_language: language
  });

export const trackPhoneClick = () =>
  trackEvent('phone_click', { contact_method: 'phone', phone_number: '+34641328992' });

export const trackWhatsAppClick = () =>
  trackEvent('whatsapp_click', { contact_method: 'whatsapp', phone_number: '+34641328992' });

export const trackEmailClick = () =>
  trackEvent('email_click', { contact_method: 'email', email: 'info@viaparkdental.com' });
