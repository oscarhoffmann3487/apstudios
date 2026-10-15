import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const images = [
  "/lovable-uploads/b495093f-ac67-422e-a494-89492dc723f7.png",
  "/lovable-uploads/b2dff953-7322-495f-be44-8698e5748a17.png",
  "/lovable-uploads/9bf22b4a-639c-435a-ae4e-8cf243b6b231.png",
  "/lovable-uploads/5593789f-9adb-4ccb-8ea7-71c9a34dca1e.png",
  "/lovable-uploads/17f25583-1430-4e02-a812-e048cf591f57.png",
  "/lovable-uploads/99600917-39a3-4938-a526-75dd031a0226.png",
  "/lovable-uploads/38365479-74a9-4de1-9603-9bf835b935fb.png",
  { src: "/services/inspektion/dji-0031.webp", alt: "Närbild av antenner och utrustning i en mast" },
  { src: "/services/inspektion/dji-0036.webp", alt: "Antenner på en telemast fotograferade med drönare" },
  { src: "/services/inspektion/enskede-tak.webp", alt: "Tak på Enskede gårds gymnasium" },
];

const Inspektioner = () => {
  const { language } = useLanguage();
  const copy = translations[language];
  const t = copy.servicePages.inspektioner;
  const seo = copy.seo.inspektioner;

  return (
    <>
    <Seo title={seo.title} description={seo.description} path="/tjanster/inspektioner" />
    <ServicePage title={t.title} description={t.description} images={images}>
      <div className="space-y-12 text-white">
        <div>
          <h2 className="text-2xl font-bold mb-4">{t.smart.title}</h2>
          <p className="text-gray-300">{t.smart.text}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">{t.situations.title}</h2>
          <p className="text-gray-300">{t.situations.text}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">{t.useCasesTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white text-center">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePage>
    </>
  );
};

export default Inspektioner;
