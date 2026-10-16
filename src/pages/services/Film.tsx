import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const videos = [
  { id: "yrbiW0VQkmY", title: "Axfood - Göteborg" },
  { id: "NVjkYpaXQb8", title: "Björnö - Skärgårdsboenden nära stan" },
  { id: "Wy2UeGV86Ls", title: "Torpavallen köpcentrum - Göteborg" },
  { id: "BvFX2Hwi21g", title: "Showreel skärgården" },
  { id: "NUzeYX3o8zo", title: "Mekonomen - Göteborg" },
  { id: "T_EyDPrXtI0", title: "Hisinge hus - Göteborg" },
  { id: "Fv0v4tLW1P8", title: "NetonNet - Borås" },
  { id: "VctNBwbbEeY", title: "Cedergrenska tornet" },
  { id: "03VGquYAuf0", title: "Rusta - Central warehouse and distribution center" },
  { id: "RzyE5kg0hCY", title: "Martin & Servera - Logistics/warehouse" },
  { id: "Ve3x7bd2nfw", title: "Rexel Sweden - central warehouse" },
];

const Film = () => {
  const { language } = useLanguage();
  const copy = translations[language];
  const t = copy.servicePages.film;
  const seo = copy.seo.film;

  return (
    <>
    <Seo title={seo.title} description={seo.description} path="/tjanster/film" />
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
          {videos.map((video) => (
            <div key={video.id} className="aspect-video w-full">
              <iframe
                width="100%" height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
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
    </>
  );
};

export default Film;
