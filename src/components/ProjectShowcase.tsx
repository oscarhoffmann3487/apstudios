import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const projects = [
  {
    title: "BLAIKENGRUVAN",
    image: "/lovable-uploads/project-showcase/blaiken1.png",
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
    image: "/lovable-uploads/6c8a31ee-ec6d-4bea-ac7e-168bf23d9d88.png",
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
    image: "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
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
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {language === 'sv' ? 'ETT URVAL AV VÅRA UPPDRAG' : 'A SELECTION OF OUR PROJECTS'}
        </h2>
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
                <h3 className="text-2xl font-bold mb-8 text-gray-900">{project.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h4 className="font-bold mb-2 text-gray-900">{t.projects.purpose}</h4>
                    <p className="text-sm text-gray-700">
                      {language === 'sv' ? project.syfte : t.projects.blaiken.purpose}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-gray-900">{t.projects.facts}</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      {Object.entries(project.fakta).map(([key, value]) => (
                        <li key={key}>
                          <span className="font-medium">
                            {language === 'sv' ? key : t.facts[key.toLowerCase()]}: 
                          </span>{' '}
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-gray-900">{t.projects.delivery}</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      {project.leverans.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-gray-900">{t.projects.client}</h4>
                    <p className="text-sm text-gray-700">{project.kund}</p>
                    <button 
                      className="mt-4 px-6 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
                    >
                      {t.projects.readMore}
                    </button>
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