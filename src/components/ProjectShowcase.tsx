import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: { 
      sv: "BLAIKENGRUVAN STORUMAN",
      en: "BLAIKEN STORUMAN"
    },
    images: [
      "/lovable-uploads/project-showcase/blaiken1.png",
      "/lovable-uploads/project-showcase/blaiken2.jpg",
      "/lovable-uploads/project-showcase/blaiken4.jpg",
      "/lovable-uploads/project-showcase/blaiken5.jpg",
      "/lovable-uploads/project-showcase/blaiken6.jpg",
      "/lovable-uploads/project-showcase/blaiken7.jpg"
    ],
    syfte: {
      sv: "Syftet med uppdraget var att ta fram underlag för en pågående miljöåtgärd i Blaikengruvan i Sorsele kommun. Kunden ville bland annat göra beräkningar av olika slag samt simulera hur vattennivån i dagbrottet ändrade sig givet en viss vattenmängd.",
      en: "The purpose of the assignment was to provide documentation for an ongoing environmental measure at the Blaiken mine in Sorsele municipality. The client wanted to make various calculations and simulate how the water level in the open pit changed given a certain amount of water."
    },
    fakta: {
      sv: {
        "Område": "Blaiken",
        "Area": "460 hektar",
        "Upplösning": "3 cm/pixel",
        "Noggrannhet": "ca 4 cm",
        "Inmätta flygstöd": "Ja",
        "Koordinatsystem": "SWEREF 99TM"
      },
      en: {
        "Location": "Blaiken",
        "Area": "460 hectares",
        "Resolution": "3 cm/pixel",
        "Accuracy": "approx. 4 cm",
        "Measured flight support": "Yes",
        "Coordinate system": "SWEREF 99TM"
      },
    },
    leverans: {
      sv: [
        "Punktmoln (.las)",
        "3D modell/Mesh (.obj)",
        "Digital ytmodell (.tiff)",
        "Digital terrängmodell (.tiff)",
        "Ekvidistanskurvor (.shp)",
        "Projektrapport (.pdf)"
      ],
      en: [
        "Point cloud (.las)",
        "3D model / Mesh (.obj)",
        "Digital surface model (.tiff)",
        "Digital terrain model (.tiff)",
        "Contour lines (.shp)",
        "Project report (.pdf)"
      ]
    },
    kund: {
      sv: "Golder Associates AB",
      en: "Golder Associates AB"
    }
  },

  // ----------------------------
  // Example for Enskede Gymnasium
  {
    title: {
      sv: "ENSKEDE GYMNASIUM",
      en: "ENSKEDE GYMNASIUM"
    },
    images: [
      "/lovable-uploads/project-showcase/enskede1.png",
      "/lovable-uploads/project-showcase/enskede2.jpg",
      "/lovable-uploads/project-showcase/enskede3.jpg",
      "/lovable-uploads/project-showcase/enskede4.jpg",
      "/lovable-uploads/project-showcase/enskede5.jpg",
      "/lovable-uploads/project-showcase/enskede6.jpg"
    ],
    syfte: {
      sv: "Syftet med uppdraget var att samla in material över tak och fasader för att skapa ett punktmoln som kunde kombineras med LIDAR-data. Med hjälp av detta kunde kunden skapa en komplett 3D modell och använda för detaljinspektion av fastigheten.",
      en: "The purpose of the assignment was to collect data over roofs and facades to create a point cloud that could be combined with LIDAR data. This allowed the client to create a complete 3D model and use it for detailed inspection of the building."
    },
    fakta: {
      sv: {
        "Område": "Enskede",
        "Area": "1 hektar",
        "Upplösning": "1 cm/pixel",
        "Noggrannhet": "ca 1 cm",
        "Inmätta flygstöd": "Ja",
        "Koordinatsystem": "Lokalt"
      },
      en: {
        "Location": "Enskede",
        "Area": "1 hectare",
        "Resolution": "1 cm/pixel",
        "Accuracy": "approx. 1 cm",
        "Measured flight support": "Yes",
        "Coordinate system": "Local"
      },
    },
    leverans: {
      sv: [
        "Punktmoln (.las)",
        "Videoanimering (.mp4)",
        "Insamlade bilder (.jpg)",
        "Projektrapport (.pdf)"
      ],
      en: [
        "Point cloud (.las)",
        "Video animation (.mp4)",
        "Collected images (.jpg)",
        "Project report (.pdf)"
      ]
    },
    kund: {
      sv: "Norconsult AB",
      en: "Norconsult AB"
    }
  },

  // ----------------------------
  // Example for Gränsö Västervik
  {
    title: {
      sv: "GRÄNSÖ VÄSTERVIK",
      en: "GRÄNSÖ VÄSTERVIK"
    },
    images: [
      "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
      "/lovable-uploads/project-showcase/gränsö5.jpg"
    ],
    syfte: {
      sv: "Syftet med uppdraget var att ta fram en modell över en del av Gränsö i Västervik. Modellen skulle användas som en testbädd i olika forskningsprojekt för att kunna testa simuleringar.",
      en: "The purpose of this assignment was to produce a model of part of Gränsö in Västervik. The model would be used as a testbed in various research projects to enable simulations."
    },
    fakta: {
      sv: {
        "Område": "Västervik",
        "Area": "42 hektar",
        "Upplösning": "2,5 cm/pixel",
        "Noggrannhet": "ca 15 cm",
        "Inmätta flygstöd": "Ja",
        "Koordinatsystem": "WGS84"
      },
      en: {
        "Location": "Västervik",
        "Area": "42 hectares",
        "Resolution": "2.5 cm/pixel",
        "Accuracy": "approx. 15 cm",
        "Measured flight support": "Yes",
        "Coordinate system": "WGS84"
      },
    },
    leverans: {
      sv: [
        "Punktmoln (.las)",
        "3D modell/Mesh (.obj)",
        "Insamlade bilder",
        "Projektrapport (.pdf)"
      ],
      en: [
        "Point cloud (.las)",
        "3D model / Mesh (.obj)",
        "Collected images",
        "Project report (.pdf)"
      ]
    },
    kund: {
      sv: "Combitech",
      en: "Combitech"
    }
  }
];

const ProjectShowcase = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: string]: number }>({});

  const navigateToProject = (projectTitle: string) => {
    navigate("/projekt", { state: { scrollToProject: projectTitle } });
  };

  const nextImage = (projectTitle: string, maxIndex: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % maxIndex,
    }));
  };

  const prevImage = (projectTitle: string, maxIndex: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) - 1 + maxIndex) % maxIndex,
    }));
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {language === "sv" ? "ETT URVAL AV VÅRA UPPDRAG" : "A SELECTION OF OUR PROJECTS"}
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const currentIndex = currentImageIndices[project.title[language]] || 0;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[400px]">
                  <img
                    src={project.images[currentIndex]}
                    alt={project.title[language]}
                    className="w-full h-full object-cover"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(project.title[language], project.images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={() => nextImage(project.title[language], project.images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </div>

                <div className="p-8">
                  {/* Project title */}
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">
                    {project.title[language]}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Purpose / Syfte */}
                    <div>
                      <h4 className="font-bold mb-2 text-gray-900">{t.projects.purpose}</h4>
                      <p className="text-sm text-gray-700">{project.syfte[language]}</p>
                    </div>

                    {/* Facts / Fakta */}
                    <div>
                      <h4 className="font-bold mb-2 text-gray-900">{t.projects.facts}</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        {Object.entries(project.fakta[language]).map(([key, value]) => (
                          <li key={key}>
                            <span className="font-medium">{key}:</span> {value}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Delivery / Leverans */}
                    <div>
                      <h4 className="font-bold mb-2 text-gray-900">{t.projects.delivery}</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        {project.leverans[language].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Client / Kund + Read More */}
                    <div>
                      <h4 className="font-bold mb-2 text-gray-900">{t.projects.client}</h4>
                      <p className="text-sm text-gray-700">{project.kund[language]}</p>
                      <Button
                        className="mt-4 px-6 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
                        onClick={() => navigateToProject(project.title[language])}
                      >
                        {t.projects.readMore}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
