import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

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
    <>
      <div className="relative min-h-screen w-full">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/public/lovable-uploads/showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 pt-20 pb-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Effektiva lösningar med drönare
            </h1>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
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

            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Vi erbjuder professionella drönartjänster för alla typer av projekt. 
              Kontakta oss för en kostnadsfri konsultation.
            </p>

            <a href="mailto:info@apstudios.se">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-6 px-8">
                <Mail className="mr-2" />
                Kontakta oss
              </Button>
            </a>
          </div>
        </div>
      </div>

      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Aerial Picture studios - Effektiva lösningar med drönare!
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Vi är specialister på drönartjänster och har många års erfarenhet av att identifiera applikationer och ta fram lösningar till kunder. Vi startade 2015 med visionen att ligga i framkant när det kommer till innovation, pris och kvalitet. Vår utrustning är därför modern och diversifierad för att kunna anpassas till kundens budget och behov.
            </p>
            <p>
              Vi innehar alla nödvändiga tillstånd och försäkringar som krävs för att flyga drönare och tar alltid hänsyn till regler och risker. Vi finns i Stockholm och Linköping men utför uppdrag över hela landet. Du är alltid välkommen att kontakta oss för att bolla idéer!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
