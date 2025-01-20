import { Youtube } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#222324] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">{t.footer.about.title}</h3>
          <p className="text-sm text-gray-300">
            {t.footer.about.description}
          </p>
        </div>
        
        <div className="text-center flex flex-col items-center">
          <img 
            src="/lovable-uploads/80657fb0-a28a-4802-96f9-f7cee84e4c7d.png" 
            alt="AP Studios Logo" 
            className="h-20 mx-auto mb-4"
          />
          <p className="text-sm text-gray-400 mb-4">© 2015 APstudios - Org nr: 990203-6475</p>
          <a 
            href="https://youtube.com/@apstudios1335?si=qW6bvDQydIKf7IIL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent transition-colors"
          >
            <Youtube size={24} />
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">{t.footer.info.title}</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>{t.footer.info.address}: Kunskapslänken 94</p>
            <p>{t.footer.info.postAddress}: 583 28 Linköping</p>
            <p>{t.footer.info.email}: <a href="mailto:info@apstudios.se" className="hover:underline">info@apstudios.se</a></p>
            <p>{t.footer.info.phone}: 072-544 88 60</p>
            <div className="flex items-center justify-between mt-4">
              <a href="/gdpr" className="hover:underline">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;