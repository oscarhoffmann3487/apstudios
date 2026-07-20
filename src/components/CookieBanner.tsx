import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { Button } from './ui/button';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].cookieBanner;

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          {t.text}
          <Link to="/gdpr" className="text-primary hover:underline ml-1">{t.learnMore}</Link>
        </p>
        <Button onClick={acceptCookies} className="whitespace-nowrap">{t.accept}</Button>
      </div>
    </div>
  );
};

export default CookieBanner;
