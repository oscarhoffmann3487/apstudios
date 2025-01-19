import { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const logos = [
    { src: "/lovable-uploads/e39acb34-cdc5-44b6-bcf5-bbb23296f73a.png", alt: "Combitech", url: "https://www.combitech.com" },
    { src: "/lovable-uploads/1616a5ea-7734-4519-9057-922de5267457.png", alt: "Villamarken" },
    { src: "/lovable-uploads/fc6ba801-ef68-4240-bbb3-1fc3637ae899.png", alt: "Combitech" },
    { src: "/lovable-uploads/6a068d01-f71c-4ec1-8107-137e00357f57.png", alt: "Golder" },
    { src: "/lovable-uploads/0f6e677e-9e9a-4220-b627-cfcc921c77b2.png", alt: "HSB" },
    { src: "/lovable-uploads/480e31ab-cf5e-4a03-8d28-6c61a1897e99.png", alt: "Ikano Bostad" },
    { src: "/lovable-uploads/d8a21703-6081-4a6d-a209-2b4baa9b712e.png", alt: "Wilfast" },
    { src: "/lovable-uploads/28c4b193-d1b2-4342-a472-334afc1cbcd0.png", alt: "BLIR" },
    { src: "/lovable-uploads/c2480fda-f305-46c0-b63d-214c801dc9ab.png", alt: "Norconsult", url: "https://www.norconsult.se" },
    { src: "/lovable-uploads/0b834c64-25c8-422f-89a1-d53cd7732f77.png", alt: "MA Living" },
    { src: "/lovable-uploads/35f40fa7-00ac-4883-ac3a-1dd40048cc27.png", alt: "SWE Scan" },
    { src: "/lovable-uploads/de3f1110-32d3-4195-a7d7-25d5ef65c1d0.png", alt: "Platskoll" },
    { src: "/lovable-uploads/a495862a-e866-4cec-927e-4fbae4ad99aa.png", alt: "Ready Digital" },
    { src: "/lovable-uploads/cbcf519c-1661-4399-a397-31ef96d267c9.png", alt: "Riksbyggen", url: "https://www.riksbyggen.se" },
    { src: "/lovable-uploads/481a4a94-e979-4762-92d9-c0ee5b1191fa.png", alt: "NRP", url: "https://www.nrp.no" },
    { src: "/lovable-uploads/0444899f-32a5-4dda-8d77-f1753183c42e.png", alt: "Agtech 2030" },
    { src: "/lovable-uploads/d4451a1c-fd1b-4da4-a8af-fb01ad3645d4.png", alt: "Future Aerial Innovations" },
    { src: "/lovable-uploads/bc06426d-5aeb-4be2-bf00-6222c3fa98cd.png", alt: "Warpin" },
    { src: "/lovable-uploads/8f25afab-74bf-4f76-b3a1-0df02045c1d0.png", alt: "Spotscale" }
  ];

  // Duplicate the logos array to create a seamless loop
  const allLogos = [...logos, ...logos];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-16 items-center whitespace-nowrap overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {allLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
