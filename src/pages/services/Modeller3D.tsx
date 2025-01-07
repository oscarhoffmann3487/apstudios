import ServicePage from "@/components/ServicePage";
import { Card, CardContent } from "@/components/ui/card";

const Modeller3D = () => {
  const images = [
    "/lovable-uploads/näsby7.jpg",
    "/lovable-uploads/Hisinge_hus2.png",
    "/lovable-uploads/katarina bg.jpg",
    "/lovable-uploads/Enskede_g_rd_3.png"
  ];

  return (
    <ServicePage 
      title="3D MODELLER OCH PUNKTMOLN" 
      description="Vi skapar och levererar högkvalitativa punktmoln och 3D modeller över stora och små områden. Vare sig syfte är att visualisera, analysera eller använda för mätdata har vi lösningen. Vi kan skapa digitala tvillingar där vi skannar en byggnad både på in- och utsidan. Med gedigen utrustning och noga kontroller säkerhetställer vi att våra modeller håller hög kvalitet. Med moderna visualiseringsprogram kan vi ger er tillgång till modellerna direkt över webben eller leverera som fil om ni föredrar att arbeta i egna program."
      images={images}
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">VISUALISERA OCH ANALYSERA</h2>
          <p className="text-gray-300 mb-8">
            Vi kan skapa 3D modeller där man kan montera planerad bebyggelse från exempelvis en sketch-up modell. Med "Field of view" kan man släppa en gubbe i modellen, likt google streetview, och ställa sig på en balkong exempelvis för att se hur utsikten kommer bli. Det går även att visualisera hus solen rör sig över huskroppar och vart skuggor hamnar under olika tider på dagen. Dessutom kan solpotential visualiseras vilket kan användas för att se vart solceller kan göra mest nytta på en fastighet. Ytterligare funktionalitet fås genom att modellera vatten i modellen och lägga in info-points.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black border-gray-800">
              <CardContent className="p-4">
                <img src="/lovable-uploads/Skärmavbild 2021-06-22 kl. 15.37.46.png" alt="Field of View" className="w-full h-48 object-cover rounded mb-2" />
                <h3 className="text-white text-xl">FIELD OF VIEW</h3>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-4">
                <img src="/lovable-uploads/Skärmavbild 2021-06-22 kl. 15.42.58.png" alt="Solanalys" className="w-full h-48 object-cover rounded mb-2" />
                <h3 className="text-white text-xl">SOLANALYS</h3>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-4">
                <img src="/lovable-uploads/Skärmavbild 2021-06-22 kl. 16.41.28.png" alt="Solpotential" className="w-full h-48 object-cover rounded mb-2" />
                <h3 className="text-white text-xl">SOLPOTENTIAL</h3>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-4">
                <img src="/lovable-uploads/Skärmavbild 2021-06-22 kl. 16.47.44.png" alt="Vattenanalys" className="w-full h-48 object-cover rounded mb-2" />
                <h3 className="text-white text-xl">VATTENANALYS</h3>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-4">
                <img src="/lovable-uploads/Skärmavbild 2021-06-22 kl. 16.49.44.png" alt="Info Points" className="w-full h-48 object-cover rounded mb-2" />
                <h3 className="text-white text-xl">INFO POINTS</h3>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">3D UTSKRIFTER</h2>
          <p className="text-gray-300">
            Vi kan omvandla digitala 3D-modeller skapade med drönare till fysiska modeller med hjälp av vår 3D-skrivare. Vi erbjuder en maximal utskriftsvolym på 30x30x40cm och en utskriftsupplösningen på 0,06 mm vilket ger otroligt detaljerade modeller.
          </p>
        </section>
      </div>
    </ServicePage>
  );
};

export default Modeller3D;