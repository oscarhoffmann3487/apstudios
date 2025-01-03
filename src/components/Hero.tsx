import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

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

          <ContactForm />
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