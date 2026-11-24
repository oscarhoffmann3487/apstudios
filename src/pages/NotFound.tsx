import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const NotFound = () => {
  const { language } = useLanguage();
  const t = translations[language].notFound;

  useEffect(() => {
    document.title = `${t.title} | APstudios`;
  }, [t.title]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[calc(5rem+env(safe-area-inset-top))] px-4">
        <div className="max-w-3xl mx-auto py-16 text-center">
          <p className="text-sm font-medium tracking-widest text-primary">404</p>
          <h1 className="text-4xl font-bold mt-3 mb-4 text-black">{t.title}</h1>
          <p className="text-gray-600 mb-8">{t.text}</p>
          <Button asChild>
            <Link to="/">{t.home}</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
