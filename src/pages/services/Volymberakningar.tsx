import ServicePage from "@/components/ServicePage";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const images = [
  "/lovable-uploads/9430c346-15cd-48f4-a510-1b182fed9149.png",
  "/lovable-uploads/217f8396-485c-4653-97a9-04ca5b6aef91.png",
  "/lovable-uploads/5ef66c5f-d816-428f-bfec-d20fb7f423f0.png",
  "/lovable-uploads/05e3c69c-650f-4ef4-b9a3-20c354eb495c.png",
  "/lovable-uploads/087d77b6-29bb-4628-934d-b5886466e49b.png",
  "/lovable-uploads/3abf06cd-3c32-4ea6-ab84-4bac4da157d3.png",
];

const Volymberakningar = () => {
  const { language } = useLanguage();
  const t = translations[language].servicePages.volymberakningar;

  return (
    <ServicePage title={t.title} description={t.description} images={images}>
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

        <div className="aspect-video w-full max-w-4xl mx-auto">
          <iframe
            width="100%" height="100%"
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
};

export default Volymberakningar;
