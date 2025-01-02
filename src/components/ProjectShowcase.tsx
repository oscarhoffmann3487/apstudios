import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BLAIKENGRUVAN",
    image: "/lovable-uploads/27ebd10e-4dee-45bf-99e1-b4267b6b7764.png",
    syfte: "Syftet med uppdraget var att ta fram underlag för en pågående miljöåtgärd i Blaikengruvan i Sorsele kommun. Kunden ville bland annat göra beräkningar av olika slag samt simulera hur vattennivån i dagbrottet ändrade sig givet en viss vattenmängd.",
    fakta: {
      "Område": "Blaiken",
      "Area": "460 hektar",
      "Upplösning": "3 cm/pixel",
      "Noggrannhet": "ca 4 cm",
      "Inmätta flygstöd": "Ja",
      "Koordinatsystem": "SWEREF 99TM"
    },
    leverans: [
      "Punktmoln (.las)",
      "3D modell/Mesh (.obj)",
      "Digital ytmodell (.tiff)",
      "Digital terrängmodell (.tiff)",
      "Ekvidistans kurvor (.shp)",
      "Projektrapport (.pdf)"
    ],
    kund: "Golder Associates AB"
  },
  {
    title: "ENSKEDE GÅRDS GYMNASIUM",
    image: "/lovable-uploads/25c39bf7-0647-46ed-b016-87f9b1dc6a64.png",
    syfte: "Syftet med uppdraget var att samla in material över tak och fasader för att skapa ett punktmoln som kunde kombineras med LIDAR-data. Med hjälp av detta kunde kunden skapa en komplett 3D modell och använda för detaljinspektion av fastigheten.",
    fakta: {
      "Område": "Enskede",
      "Area": "1 hektar",
      "Upplösning": "1 cm/pixel",
      "Noggrannhet": "ca 1 cm",
      "Inmätta flygstöd": "Ja",
      "Koordinatsystem": "Lokalt"
    },
    leverans: [
      "Punktmoln (.las)",
      "Videoanimering (.mp4)",
      "Insamlade bilder (.jpg)",
      "Projektrapport (.pdf)"
    ],
    kund: "Norconsult AB"
  },
  {
    title: "GRÄNSÖ VÄSTERVIK",
    image: "/lovable-uploads/508c6e20-88e8-4a10-bc07-83449675c045.png",
    syfte: "Syftet med uppdraget var att ta fram en modell över en del av Gränsö i Västervik. Modellen skulle användas som en testbädd i olika forskningsprojekt för att kunna testa simuleringar.",
    fakta: {
      "Område": "Västervik",
      "Area": "42 hektar",
      "Upplösning": "2,5 cm/pixel",
      "Noggrannhet": "ca 15 cm",
      "Inmätta flygstöd": "Ja",
      "Koordinatsystem": "WGS84"
    },
    leverans: [
      "Punktmoln (.las)",
      "3D modell/Mesh (.obj)",
      "Insamlade bilder",
      "Projektrapport (.pdf)"
    ],
    kund: "Combitech"
  }
];

const ProjectShowcase = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">ETT URVAL AV VÅRA UPPDRAG</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[400px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-8">{project.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h4 className="font-bold mb-2">SYFTE</h4>
                    <p className="text-sm">{project.syfte}</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">FAKTA</h4>
                    <ul className="text-sm space-y-1">
                      {Object.entries(project.fakta).map(([key, value]) => (
                        <li key={key}>
                          <span className="font-medium">{key}:</span> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">LEVERANS</h4>
                    <ul className="text-sm space-y-1">
                      {project.leverans.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">KUND</h4>
                    <p className="text-sm">{project.kund}</p>
                    <Button 
                      className="mt-4 bg-accent hover:bg-accent/90 text-white"
                    >
                      LÄS MER
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;