import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const images = [
  { src: "/services/volym/volym-2.webp", alt: "Volymmätning av en materialhög i en 3D-modell" },
  { src: "/services/volym/volym-1.webp", alt: "Volymberäkning i ett punktmoln" },
  { src: "/services/volym/volym-3.webp", alt: "Volymberäkning av ett upplag" },
  { src: "/services/volym/stracka.webp", alt: "Sträckmätning i en 3D-modell" },
  { src: "/services/volym/volym-4.webp", alt: "Volymberäkning visad i ett punktmoln" },
  { src: "/services/volym/volym-5.webp", alt: "Mätning av volym i en drönarmodell" },
  { src: "/services/volym/volym-6.webp", alt: "Volymberäkning av massor i en 3D-vy" },
];

const Volymberakningar = () => {
  const { language } = useLanguage();
  const copy = translations[language];
  const t = copy.servicePages.volymberakningar;
  const seo = copy.seo.volym;

  return (
    <>
    <Seo title={seo.title} description={seo.description} path="/tjanster/volymberakningar" />
    <ServicePage title={t.title} description={`${t.lead}\n\n${t.description}`} images={images}>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.accurate.title}</h2>
            <p className="text-gray-300">{t.accurate.text}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.efficient.title}</h2>
            <p className="text-gray-300">{t.efficient.text}</p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">{t.videoTitle}</h2>
          <div className="aspect-video">
            <iframe
              width="100%" height="100%"
              src="https://www.youtube.com/embed/5Qy6KDVEvtc"
              title={language === "sv" ? "Instruktionsvideo 3D-modell" : "3D model instruction video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </ServicePage>
    </>
  );
};

export default Volymberakningar;
