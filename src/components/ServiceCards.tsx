import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "FLYGFOTO",
    description: "Med bilder från drönare får du ett helt nytt perspektiv. Fastigheter är ett utmärkt motiv att skildra från ovan. Bilder från balkonghöjder för att visa utsikten redan innan en byggnad är uppförd är ett bra användningsområde. Eller varför inte göra ett fotomontage för att visa hur planerad bebyggelse passar in i landskapet?",
    image: "/lovable-uploads/62c32e6e-17b5-4d81-8a6f-1f36630e0400.png",
    path: "/tjanster/foto"
  },
  {
    title: "VIDEOPRODUKTION",
    description: "Behöver ni en säljande film för en fastighet eller ett varumärke? Med videoklipp både från marken från luften får filmen en häftig känsla. Vi kan producera en hel film från början till slut med klippning musik och grafik. Vi kan även leverera flygfilm till en större produktion som vill ha ett unikt perspektiv.",
    image: "/lovable-uploads/d3588cb5-5c9f-47b6-8536-525ef99f8e62.png",
    path: "/tjanster/film"
  },
  {
    title: "INSPEKTIONER",
    description: "Höghöjdsinspektion är ofta dyrt, svårt och ibland farligt men med drönare blir det enkelt och effektivt. Skorstenar, master, kraftledningar, broar, fastigheter och industrier är exempel på perfekta objekt för drönarinspektion. Leveransen kan vara bilder, film, 3D modeller eller högupplösta och mätbara ortofoton över fasader och tak.",
    image: "/lovable-uploads/5e51a7aa-41ab-4b41-855c-85714b46bda1.png",
    path: "/tjanster/inspektioner"
  },
  {
    title: "YTMODELLER",
    description: "Vi kan leverera ortofoton, ytmodeller och höjdkurvor med hög noggrannhet. Ortofoton från drönare ger en betydligt högre detaljrikedom än Lantmäteriets kartor. När det kommer till ytmodeller kan vi ta fram både DTM och DSM. Konturlinjer kan tas fram med önskade höjdintervaller och användas i CAD-program.",
    image: "/lovable-uploads/3ac3e220-30f2-428f-b213-b091c2a7d5de.png",
    path: "/tjanster/ytmodeller"
  },
  {
    title: "3D MODELLER",
    description: "Vi kan leverera 3D-modeller och punktmoln. Punktmolnen kan klassificeras med avancerade algoritmer för att exempelvis ta bort vegetation. 3D modeller kan användas till solstudier och visualisering i olika sammanhang. En 3D modell av en fastighet kan även kompletteras med laserskanning av insidan för att skapa en digital tvilling.",
    image: "/lovable-uploads/c013bcea-f9ae-44f2-ae75-4524b236ede2.png",
    path: "/tjanster/3d-modeller"
  },
  {
    title: "VOLYMBERÄKNINGAR",
    description: "Företag med stora inventarier kan dra nytta av att enkelt kunna göra noggranna volymberäkningar. Oavsett om det handlar om flis, stockhögar eller bergtäkter har vi smarta lösningar. Vi kan leverera ett inmätt punktmoln där kunden får tillgång direkt över webben och kan ta mått.",
    image: "/lovable-uploads/c3eb379f-b131-4379-9695-47ab3cd30710.png",
    path: "/tjanster/volymberakningar"
  },
];

const ServiceCards = () => {
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
            
            {/* Service title (visible when not hovering) */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-3xl font-bold text-white text-center px-4 drop-shadow-lg bg-black/30 py-2 rounded">{service.title}</h3>
            </div>
            
            {/* Description and button (visible on hover) */}
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
                    LÄS MER
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