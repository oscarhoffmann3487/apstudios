import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "FLYGFOTO",
    description: "Med bilder från drönare får du ett helt nytt perspektiv. Fastigheter är ett utmärkt motiv att skildra från ovan. Bilder från balkonghöjder för att visa utsikten redan innan en byggnad är uppförd är ett bra användningsområde. Eller varför inte göra ett fotomontage för att visa hur planerad bebyggelse passar in i landskapet?",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    path: "/tjanster/foto"
  },
  {
    title: "VIDEOPRODUKTION",
    description: "Behöver ni en säljande film för en fastighet eller ett varumärke? Med videoklipp både från marken från luften får filmen en häftig känsla. Vi kan producera en hel film från början till slut med klippning musik och grafik. Vi kan även leverera flygfilm till en större produktion som vill ha ett unikt perspektiv.",
    image: "https://images.unsplash.com/photo-1579548520664-b1b8377180ee",
    path: "/tjanster/film"
  },
  {
    title: "INSPEKTIONER",
    description: "Höghöjdsinspektion är ofta dyrt, svårt och ibland farligt men med drönare blir det enkelt och effektivt. Skorstenar, master, kraftledningar, broar, fastigheter och industrier är exempel på perfekta objekt för drönarinspektion. Leveransen kan vara bilder, film, 3D modeller eller högupplösta och mätbara ortofoton över fasader och tak.",
    image: "https://images.unsplash.com/photo-1461786540673-5c800c03b4bd",
    path: "/tjanster/inspektioner"
  },
  {
    title: "YTMODELLER",
    description: "Vi kan leverera ortofoton, ytmodeller och höjdkurvor med hög noggrannhet. Ortofoton från drönare ger en betydligt högre detaljrikedom än Lantmäteriets kartor. När det kommer till ytmodeller kan vi ta fram både DTM och DSM. Konturlinjer kan tas fram med önskade höjdintervaller och användas i CAD-program.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    path: "/tjanster/ytmodeller"
  },
  {
    title: "3D MODELLER",
    description: "Vi kan leverera 3D-modeller och punktmoln. Punktmolnen kan klassificeras med avancerade algoritmer för att exempelvis ta bort vegetation. 3D modeller kan användas till solstudier och visualisering i olika sammanhang. En 3D modell av en fastighet kan även kompletteras med laserskanning av insidan för att skapa en digital tvilling.",
    image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4",
    path: "/tjanster/3d-modeller"
  },
  {
    title: "VOLYMBERÄKNINGAR",
    description: "Företag med stora inventarier kan dra nytta av att enkelt kunna göra noggranna volymberäkningar. Oavsett om det handlar om flis, stockhögar eller bergtäkter har vi smarta lösningar. Vi kan leverera ett inmätt punktmoln där kunden får tillgång direkt över webben och kan ta mått.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    path: "/tjanster/volymberakningar"
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group relative overflow-hidden h-[400px] transition-all duration-300">
            <div className="absolute inset-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-colors duration-300" />
            </div>
            
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="mb-4 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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