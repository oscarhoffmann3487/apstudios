import ServicePage from "@/components/ServicePage";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const videos = [
  "Fv0v4tLW1P8", "T_EyDPrXtI0", "yrbiW0VQkmY",
  "NUzeYX3o8zo", "Wy2UeGV86Ls", "NVjkYpaXQb8",
  "03VGquYAuf0", "RzyE5kg0hCY", "Ve3x7bd2nfw",
];

const Film = () => {
  const { language } = useLanguage();
  const t = translations[language].servicePages.film;

  return (
    <ServicePage
      title={t.title}
      description={t.description}
      beforeContent={
        <div className="w-full h-[80vh] bg-gray-900">
          <video
            className="w-full h-full object-cover"
            src="/lovable-uploads/videos/video_showreel.mp4"
            autoPlay loop muted playsInline
          />
        </div>
      }
    >
      <div className="bg-white text-black p-8">
        <h2 className="text-2xl font-bold mb-8">{t.productionsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((videoId, index) => (
            <div key={index} className="aspect-video w-full">
              <iframe
                width="100%" height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </ServicePage>
  );
};

export default Film;
