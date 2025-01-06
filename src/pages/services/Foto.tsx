import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePage from "@/components/ServicePage";

const ServiceSection = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => (
  <div className="mb-16">
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <p className="text-gray-700">{description}</p>
        <div className="aspect-square w-full overflow-hidden rounded-lg">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
);

const slideImages = [
  "/lovable-uploads/14c55413-16d4-41fa-9b29-4fe1e1aae90a.png",
  "/lovable-uploads/f84651d6-c6ac-40ba-b19d-44d0e6800832.png",
  "/lovable-uploads/b6a00063-356f-4af0-98b6-bf641c7def8d.png",
  "/lovable-uploads/7da84fa7-af98-4786-b8ae-0486a9d49c10.png"
];

const sections = [
  {
    title: "UTSIKTSFOTO",
    description: "Visa utsikten i nyproduktion genom att låta drönaren flyga upp till den planerade balkongens höjd och ta bilder. Ett balkongräcke kan även monteras i bilden för en mer verklighetstrogen känsla. Bilderna kan tas i olika väderstreck.",
    imageSrc: "/lovable-uploads/377669bc-fd80-4eac-b04a-a352e8866b3e.png"
  },
  {
    title: "FOTOMONTAGE",
    description: "Fotomontage lämpar sig, precis som utsiktsfoton, vid planerad bebyggelse av olika slag. Det är ofta användbart att se hur ny bebyggelse kommer passa in i miljön redan i förväg. Fotomontage är ett bra alternativ till 3D-modeller då det är enklare och lämpar sig bättre för stora områden.",
    imageSrc: "/lovable-uploads/b065a950-b094-475f-a30c-10c67af34f4c.png"
  },
  {
    title: "FASTIGHETSFOTO",
    description: "Vi fotograferar alla typer av kommersiella och privata fastigheter, både från drönare och från marken. Vi kan lyfta det ni tycker är viktiga nyckelpunkter för fastigheten såsom infrastruktur, kommunikationer och läge.",
    imageSrc: "/lovable-uploads/8f2538f8-49c9-45b3-b28b-9f42d56838d9.png"
  },
  {
    title: "MÄKLARFOTO",
    description: "Drönarbilder lämpar sig utmärkt för mäklare. Vi kan dokumentera en bostad både inifrån och utifrån med drönare och vanlig kamera. Vi kan även skapa digitala floorplans med 360 tours för att på ett interaktivt sätt kunna visa upp bostaden.",
    imageSrc: "/lovable-uploads/d3daeb2a-5100-485e-b15d-9324a92ff1f0.png"
  },
  {
    title: "EVENEMANG",
    description: "Vi kan hjälpa till med fotografering av ditt evenemang så att det förevigas. Vi kan både fotografera från marken och från drönare.",
    imageSrc: "/lovable-uploads/50c1a4e4-1c78-482b-8f2d-ea8d422dc5c3.png"
  },
  {
    title: "LANDSKAPSFOTO",
    description: "Har du ett vackert motiv du vill fotografera? Vi fotar landskap och arkitektur på beställning.",
    imageSrc: "/lovable-uploads/d1c31bcf-d6a7-4ed7-8e5d-bcc048891161.png"
  }
];

const Foto = () => {
  return (
    <ServicePage 
      title="FLYGFOTO" 
      description="Med drönarbilder kan du skildra olika motiv från ett helt nytt perspektiv. Detta öppnar upp möjligheter i en mängd olika branscher. I fastighetsbranschen är drönarbilder väldigt relevant då man får ett helhetsintryck av både tomt och byggnad. Genom att ta utsiktsfoton kan man vid nyproduktion marknadsföra balkongutsikter från olika våningsplan. Vi kan även fota interiör från marken för att komplettera drönarbilderna, vilket passar perfekt för exempelvis mäklare."
      images={slideImages}
    >
      <div className="space-y-16 bg-white text-black p-8">
        {sections.map((section, index) => (
          <ServiceSection key={index} {...section} />
        ))}
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-black mb-8">Har du behov av våra tjänster eller en egen idé?</h3>
          <a href="mailto:info@apstudios.se">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-6 px-8">
              <Mail className="mr-2" />
              Kontakta oss
            </Button>
          </a>
        </div>
      </div>
    </ServicePage>
  );
};

export default Foto;
