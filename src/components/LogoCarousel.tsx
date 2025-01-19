import { useEffect, useRef } from "react";

const LogoCarousel = () => {
  const logos = [
    { src: "/lovable-uploads/ae200406-26ca-43c5-8600-512e7bd95cce.png", alt: "Linköpings Universitet", url: "https://liu.se/" },
    { src: "/lovable-uploads/1616a5ea-7734-4519-9057-922de5267457.png", alt: "Villamarken" },
    { src: "/lovable-uploads/fc6ba801-ef68-4240-bbb3-1fc3637ae899.png", alt: "Combitech" },
    { src: "/lovable-uploads/6a068d01-f71c-4ec1-8107-137e00357f57.png", alt: "Golder" },
    { src: "/lovable-uploads/0f6e677e-9e9a-4220-b627-cfcc921c77b2.png", alt: "HSB" }
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
                className="h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;