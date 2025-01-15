import ServicePage from "@/components/ServicePage";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const sections = [
  {
    title: "ORTOFOTO",
    content: "Vi tar fram ortofoton över allt ifrån små tomter till statsdelar på flera hundra hektar. Ortofotot är högupplöst och georeffererad i erat föredragna koordinatsystem. Med ortofoton kan man exempelvis följa utveckligen på en byggarbetsplats över tid för att säkerhetställa att allt fortlöper enligt plan.",
    image: "/lovable-uploads/4e712ef7-a6f2-4da9-aec3-dc83e1e0940b.png"
  },
  {
    title: "DTM",
    content: "En digitala terrängmodell (DTM) fungerar som ett ortofoto men är färgkodat baserat på höjd. Detta gör det lättare att få perspektiv i bilden där man uppfattar djup. Det underlättar även när mätdata ska tas som exempelvis volymberäkningar.",
    image: "/lovable-uploads/09a0c538-0292-4c48-857a-37c7ad74f50c.png"
  },
  {
    title: "DSM",
    content: "En Digital Ytmodell (DSM) är liksom ett ortofoto och en DTM koordinatsatt. Skillanden är att den visar markytan utan träd, växter, hus eller infrastruktur. Detta är användbart om man planerar att avverka skog och vill kunna beräkna fyllandsmassor på marken under.",
    image: "/lovable-uploads/eb04d2bc-326a-4099-be2e-aa341247b64a.png"
  },
  {
    title: "KONTURLINJER",
    content: "Konturlinjer är en förenklad kartbild som är lätt att visa och förstå. De kan skapas baserat på ortofoton med olika intervall på höjdkurvorna enligt önskemål från kunden. De kan levereras i många olika format för att passa just erat kartprogram.",
    imagePlaceholder: "Skärmavbild 2021-06-22 kl. 11.51_edited.jpg"
  },
  {
    title: "INMÄTNING",
    content: "När en 3D modell skapas med drönare krävs det att man mäter in flygstöd för att uppnå hög noggrannhet. Vi kan utföra detta som extern tjänst där vi placerar ut markörer och mäter in i exempelvis SWEREF. Med vår RTK-utrustning vi även mäta in andra objekt såsom tomtgränser vägbanor och höjder.",
    image: "/lovable-uploads/cda9a75e-9bd6-4b80-9c56-7350fd00c073.png"
  }
];

const placeholderImages = [
  "/lovable-uploads/d3588cb5-5c9f-47b6-8536-525ef99f8e62.png",
  "/lovable-uploads/5e51a7aa-41ab-4b41-855c-85714b46bda1.png",
  "/lovable-uploads/3ac3e220-30f2-428f-b213-b091c2a7d5de.png"
];

const Ytmodeller = () => {
  return (
    <ServicePage 
      title="ORTOFOTON OCH YTMODELLER" 
      description="Genom att flyga med drönare på hög höjd och fotografera i sekvenser med överlapp kan man kombinera bilder för att skapa ortofoton. Ett Ortofoto kan sedan omvandlas till en Digital Terrängmodell (DTM). Genom att använda AI system för bildigenkänning kan vegetation, byggnader och andra artificiella objekt klassificeras. Därefter kan dessa plockas bort och kvar blir då endast markytan. Detta är vad man kallar en Digital Ytmodell (DSM). För att underlätta visningen av en karta kan man göra om ortofoton till konturlinjer med höjdkurvor som kan integreras direkt med era ritningar i CAD-mjukvara. Det går även att lägga över CAD-ritningar så att man kan se att bygget uppförs enligt plan. Ortofoton kan även användas till inspektion av solcellsparker eller stora fasadtak där brister kan taggas med koordinater för att enkelt kunna lokaliseras och åtgärdas."
    >
      <div className="mb-16">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {placeholderImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="space-y-16">
        {sections.map((section, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-none">
              <h3 className="text-2xl font-bold mb-4 text-white">{section.title}</h3>
              <p className="text-gray-300">{section.content}</p>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-800">
              <img
                src={section.image || placeholderImages[0]}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </ServicePage>
  );
};

export default Ytmodeller;