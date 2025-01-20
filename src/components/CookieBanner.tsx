import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
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
          {language === 'sv' 
            ? 'Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att fortsätta använda webbplatsen godkänner du användningen av cookies.' 
            : 'We use cookies to enhance your experience on our website. By continuing to use the website, you consent to the use of cookies.'}
          <Link to="/gdpr" className="text-primary hover:underline ml-1">
            {language === 'sv' ? 'Läs mer' : 'Learn more'}
          </Link>
        </p>
        <Button onClick={acceptCookies} className="whitespace-nowrap">
          {language === 'sv' ? 'Acceptera' : 'Accept'}
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;