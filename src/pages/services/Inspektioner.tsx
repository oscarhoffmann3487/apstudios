import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const images = [
  { src: "/services/inspektion/dji-0031.webp", alt: "Närbild av taknock och takpannor" },
  { src: "/services/inspektion/dji-0314.webp", alt: "Tak och skorsten på ett bostadshus" },
  { src: "/services/inspektion/tak.webp", alt: "Flerbostadshus med plåttak sett från ovan" },
  { src: "/services/inspektion/tak-2.webp", alt: "Takinspektion från drönare" },
  { src: "/services/inspektion/enskede-tak.webp", alt: "Tak på Enskede gårds gymnasium" },
  { src: "/services/inspektion/dji-0026.webp", alt: "Flygfoto över skog och hus vid en inspektion" },
  { src: "/services/inspektion/dji-0036.webp", alt: "Drönarbild från ett inspektionsuppdrag" },
  { src: "/services/inspektion/dji-0017.webp", alt: "Detaljbild från en drönarinspektion" },
  { src: "/services/inspektion/dji-0305.webp", alt: "Takyta fotograferad med drönare" },
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
