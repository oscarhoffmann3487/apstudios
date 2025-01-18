import ServicePage from "@/components/ServicePage";

const images = [
  "/lovable-uploads/b495093f-ac67-422e-a494-89492dc723f7.png",
  "/lovable-uploads/b2dff953-7322-495f-be44-8698e5748a17.png",
  "/lovable-uploads/9bf22b4a-639c-435a-ae4e-8cf243b6b231.png",
  "/lovable-uploads/5593789f-9adb-4ccb-8ea7-71c9a34dca1e.png",
  "/lovable-uploads/17f25583-1430-4e02-a812-e048cf591f57.png",
  "/lovable-uploads/99600917-39a3-4938-a526-75dd031a0226.png",
  "/lovable-uploads/38365479-74a9-4de1-9603-9bf835b935fb.png"
];

const useCases = [
  "Kraftledningar",
  "Vindkraftverk",
  "Solceller",
  "Broar",
  "Vägar",
  "Samhällsanläggningar",
  "Industrier",
  "Fastigheter",
  "Telemaster"
];

const Inspektioner = () => (
  <ServicePage 
    title="INSPEKTIONER" 
    description="Inspektion med drönare är ett smart alternativ till skylifts när det rör sig om höga och svårtillgängliga platser. I jämförelse med traditionella metoder är det mer tidseffektivt, billigare och framför allt säkrare att använda drönare. Dessutom kan inspektioner med drönare genomföras i tuffa väderförhållanden och man kan lättare komma åt svårtillgängliga platser."
    images={images}
  >
    <div className="space-y-12 text-white">
      <div>
        <h2 className="text-2xl font-bold mb-4">SMART TEKNOLOGI</h2>
        <p className="text-gray-300">
          Våra drönare är utrustade med smarta sensorer som hjälper drönaren undvika hinder automatiskt. Detta möjliggör för drönaren att flyga väldigt nära objektet som inspekteras utan att riskera att egendom kommer till skada.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">SITUATIONER</h2>
        <p className="text-gray-300">
          Skorstenar, master, kraftledningar, broar, fastigheter och industrier är exempel på perfekta objekt för drönarinspektion. Fotografering och video är vanligt att använda vid inspektion av infrastruktur. Genom att använda optisk zoom kan man få en extremt detaljerad bild av ett objekt utan att behöva vara särskilt nära. Ortofoton kan användas för att inspektera vägar, tak och fasader. Fel kan markeras i bilden och taggas med koordinater så att det lätt går att hitta när det ska åtgärdas. Leveransen kan vara bilder, film, 3D modeller eller högupplösta och mätbara ortofoton över fasader och tak.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">ANVÄNDNINGSOMRÅDEN</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-white text-center">{useCase}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ServicePage>
);

export default Inspektioner;