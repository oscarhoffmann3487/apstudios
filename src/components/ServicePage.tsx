import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ServicePageProps {
  title: string;
  description?: string;
  images?: string[];
  children?: React.ReactNode;
}

const ServicePage = ({ title, description, images, children }: ServicePageProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!images?.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="min-h-screen flex flex-col bg-[#222324]">
      <Navbar />
      <main className="flex-grow pt-16">
        {images && images.length > 0 && (
          <div className="w-full h-[60vh] relative mb-8">
            <Carousel 
              className="w-full h-full"
              selectedIndex={currentSlide}
              setSelectedIndex={setCurrentSlide}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full h-[60vh] relative">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
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
          {description && <p className="text-gray-300 mb-12">{description}</p>}
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;