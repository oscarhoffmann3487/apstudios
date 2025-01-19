import { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const logos = [
    { src: "/lovable-uploads/ae200406-26ca-43c5-8600-512e7bd95cce.png", alt: "Linköpings Universitet", url: "https://liu.se/" },
    { src: "/lovable-uploads/1616a5ea-7734-4519-9057-922de5267457.png", alt: "Villamarken" },
    { src: "/lovable-uploads/fc6ba801-ef68-4240-bbb3-1fc3637ae899.png", alt: "Combitech" },
    { src: "/lovable-uploads/6a068d01-f71c-4ec1-8107-137e00357f57.png", alt: "Golder" },
    { src: "/lovable-uploads/0f6e677e-9e9a-4220-b627-cfcc921c77b2.png", alt: "HSB" },
    { src: "/lovable-uploads/480e31ab-cf5e-4a03-8d28-6c61a1897e99.png", alt: "Ikano Bostad" },
    { src: "/lovable-uploads/d8a21703-6081-4a6d-a209-2b4baa9b712e.png", alt: "Wilfast" },
    { src: "/lovable-uploads/28c4b193-d1b2-4342-a472-334afc1cbcd0.png", alt: "BLIR" },
    { src: "/lovable-uploads/78bd1c49-89b5-41c3-a7e5-f33f6e44cf38.png", alt: "Norconsult" },
    { src: "/lovable-uploads/0b834c64-25c8-422f-89a1-d53cd7732f77.png", alt: "MA Living" },
    { src: "/lovable-uploads/35f40fa7-00ac-4883-ac3a-1dd40048cc27.png", alt: "SWE Scan" },
    { src: "/lovable-uploads/de3f1110-32d3-4195-a7d7-25d5ef65c1d0.png", alt: "Platskoll" },
    { src: "/lovable-uploads/a495862a-e866-4cec-927e-4fbae4ad99aa.png", alt: "Ready Digital" },
    { src: "/lovable-uploads/02447210-3aa0-46b9-a403-473e158b98e3.png", alt: "Riksbyggen" },
    { src: "/lovable-uploads/a394650d-6284-4581-b5ac-7d41f2b9f210.png", alt: "Terra Development" },
    { src: "/lovable-uploads/11d83e45-618d-45bb-9dc2-511e20d01b16.png", alt: "Film Stockholm Festival" },
    { src: "/lovable-uploads/c435ff25-5517-49f0-8132-963c7d90e9e7.png", alt: "Ness, Risan & Partners" },
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
              className="flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;