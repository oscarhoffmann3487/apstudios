import { useEffect, useState } from "react";

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const logos = [
    { src: "/lovable-uploads/ae200406-26ca-43c5-8600-512e7bd95cce.png", alt: "Linköpings Universitet" },
    { src: "/lovable-uploads/1616a5ea-7734-4519-9057-922de5267457.png", alt: "Villamarken" },
    { src: "/lovable-uploads/fc6ba801-ef68-4240-bbb3-1fc3637ae899.png", alt: "Combitech" },
    { src: "/lovable-uploads/6a068d01-f71c-4ec1-8107-137e00357f57.png", alt: "Golder" },
    { src: "/lovable-uploads/0f6e677e-9e9a-4220-b627-cfcc921c77b2.png", alt: "HSB" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-20">
          <img
            src={logos[currentIndex].src}
            alt={logos[currentIndex].alt}
            className="max-h-16 w-auto object-contain transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;