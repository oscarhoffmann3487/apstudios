import { Button } from "@/components/ui/button";

const Hero = () => {
  const services = [
    "FOTO",
    "FILM",
    "360 BILDER",
    "YTMODELLER",
    "3D MODELLER",
    "ORTOFOTON",
    "VOLYMBERÄKNINGAR",
    "INSPEKTIONER",
    "INMÄTNINGAR",
  ];

  return (
    <div className="relative h-screen w-full">
      {/* Placeholder video background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Effektiva lösningar med drönare
        </h1>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mb-12">
          {services.map((service, index) => (
            <span
              key={index}
              className="text-sm md:text-base font-medium opacity-90"
            >
              {service}
              {index < services.length - 1 && (
                <span className="mx-2 opacity-50">/</span>
              )}
            </span>
          ))}
        </div>

        <Button
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Kontakta oss
        </Button>
      </div>
    </div>
  );
};

export default Hero;