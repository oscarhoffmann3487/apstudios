import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export type ServiceImage = string | { src: string; alt: string };

interface ServicePageProps {
  title: string;
  description?: string;
  images?: ServiceImage[];
  children?: React.ReactNode;
  beforeContent?: React.ReactNode;
}

const imageSrc = (image: ServiceImage) => (typeof image === "string" ? image : image.src);
const imageAltText = (image: ServiceImage, fallback: string) => (typeof image === "string" ? fallback : image.alt);

const ServicePage = ({ title, description, images, children, beforeContent }: ServicePageProps) => {
  const { language } = useLanguage();
  const imageAlt = translations[language].servicePage.imageAlt;
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !images?.length) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api, images]);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="min-h-screen flex flex-col bg-[#222324]">
      <Navbar />
      <main className="flex-grow pt-16">
        {beforeContent}
        {images && images.length > 0 && (
          <div className="w-full h-[60vh] relative mb-8">
            <Carousel
              className="w-full h-full"
              setApi={setApi}
              opts={{ loop: true }}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full h-[60vh] relative">
                      <img
                        src={imageSrc(image)}
                        alt={imageAltText(image, `${title} – ${imageAlt} ${index + 1}`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
          {description && <p className="text-gray-300 mb-12 whitespace-pre-line">{description}</p>}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
