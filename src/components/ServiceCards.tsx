import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const ServiceCards = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: t.serviceCards.photo.title,
      description: t.serviceCards.photo.description,
      image: "/lovable-uploads/62c32e6e-17b5-4d81-8a6f-1f36630e0400.png",
      path: "/tjanster/foto"
    },
    {
      title: t.serviceCards.video.title,
      description: t.serviceCards.video.description,
      image: "/lovable-uploads/d3588cb5-5c9f-47b6-8536-525ef99f8e62.png",
      path: "/tjanster/film"
    },
    {
      title: t.serviceCards.inspections.title,
      description: t.serviceCards.inspections.description,
      image: "/lovable-uploads/5e51a7aa-41ab-4b41-855c-85714b46bda1.png",
      path: "/tjanster/inspektioner"
    },
    {
      title: t.serviceCards.surfaceModels.title,
      description: t.serviceCards.surfaceModels.description,
      image: "/lovable-uploads/3ac3e220-30f2-428f-b213-b091c2a7d5de.png",
      path: "/tjanster/ytmodeller"
    },
    {
      title: t.serviceCards.models3d.title,
      description: t.serviceCards.models3d.description,
      image: "/lovable-uploads/c013bcea-f9ae-44f2-ae75-4524b236ede2.png",
      path: "/tjanster/3d-modeller"
    },
    {
      title: t.serviceCards.volumeCalculations.title,
      description: t.serviceCards.volumeCalculations.description,
      image: "/lovable-uploads/c3eb379f-b131-4379-9695-47ab3cd30710.png",
      path: "/tjanster/volymberakningar"
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group relative overflow-hidden h-[400px] transition-all duration-300 shadow-lg border-none">
            <div className="absolute inset-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-colors duration-300" />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl font-bold text-white text-center px-4 drop-shadow-lg">{service.title}</h3>
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <div>
                <p className="mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.path}>
                  <Button 
                    variant="outline" 
                    className="bg-accent hover:bg-accent/90 text-white border-none"
                  >
                    {language === 'sv' ? 'LÄS MER' : 'READ MORE'}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;