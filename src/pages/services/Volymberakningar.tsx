import ServicePage from "@/components/ServicePage";

const images = [
  "/lovable-uploads/9430c346-15cd-48f4-a510-1b182fed9149.png",
  "/lovable-uploads/217f8396-485c-4653-97a9-04ca5b6aef91.png",
  "/lovable-uploads/5ef66c5f-d816-428f-bfec-d20fb7f423f0.png",
  "/lovable-uploads/05e3c69c-650f-4ef4-b9a3-20c354eb495c.png",
  "/lovable-uploads/087d77b6-29bb-4628-934d-b5886466e49b.png",
  "/lovable-uploads/3abf06cd-3c32-4ea6-ab84-4bac4da157d3.png"
];

const Volymberakningar = () => (
  <ServicePage 
    title="VOLYMBERÄKNINGAR" 
    description="Med hjälp av drönare och avancerad mjukvara kan vi snabbt och effektivt beräkna volymer av olika material. Våra volymberäkningar är idealiska för bergtäkter, grustag, flishögar och andra typer av materialhögar. Genom att använda fotogrammetri skapar vi exakta 3D-modeller som ger noggranna mätresultat. Detta gör det möjligt att:

    • Få snabb överblick över materialvolymer
    • Spåra förändringar över tid
    • Optimera lagerhantering
    • Minska mätkostnader
    • Få tillgång till mätdata direkt via webben
    
    Tekniken är särskilt användbar för företag som behöver regelbunden inventering av stora materiallager."
    images={images}
  >
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        <div>
          <h2 className="text-2xl font-bold mb-4">NOGGRANNA MÄTNINGAR</h2>
          <p className="text-gray-300">
            Våra drönare samlar in tusentals mätpunkter som bearbetas i specialiserad programvara. Detta ger mycket noggranna resultat som kan användas för att beräkna volymer, skapa höjdkurvor och analysera massbalanser.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">EFFEKTIV PROCESS</h2>
          <p className="text-gray-300">
            Genom att använda drönare kan vi snabbt täcka stora områden och leverera resultat inom kort tid. Detta gör metoden både kostnadseffektiv och tidsbesparande jämfört med traditionella mätmetoder.
          </p>
        </div>
      </div>

      <div className="aspect-video w-full max-w-4xl mx-auto">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/5Qy6KDVEvtc?si=Bqjf0Nn79dRy83Ay" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    </div>
  </ServicePage>
);

export default Volymberakningar;