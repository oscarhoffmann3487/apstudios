
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import LogoCarousel from "./LogoCarousel";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { useState, useEffect } from "react";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = '/lovable-uploads/8c415486-6700-4338-bf9f-d997e847e563.png';
    img.onload = () => setIsImageLoaded(true);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      <div className="relative min-h-screen w-full bg-[#222324]">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/lovable-uploads/8c415486-6700-4338-bf9f-d997e847e563.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isVideoLoaded ? 0 : (isImageLoaded ? 1 : 0),
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
          src="/lovable-uploads/showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
        />

        <div className="absolute inset-0 bg-[#222324]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#222324]/40 to-[#222324]/20"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-12">
              {t.hero.title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="text-base md:text-lg font-medium opacity-90"
                >
                  {service}
                  {index < services.length - 1 && (
                    <span className="mx-3 opacity-50">/</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-12">
              {t.hero.description}
            </p>
            <a href="mailto:info@apstudios.se">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-6 px-8">
                <Mail className="mr-2" />
                {t.hero.contactUs}
              </Button>
            </a>
          </div>
        </div>
      </div>

      <LogoCarousel />

      <section className="bg-[#222324] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            {t.about.title}
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>{t.about.description1}</p>
            <p>{t.about.description2}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

