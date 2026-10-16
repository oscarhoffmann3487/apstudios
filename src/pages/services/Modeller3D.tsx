import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Modeller3D = () => {
  const { language } = useLanguage();
  const copy = translations[language];
  const t = copy.servicePages.modeller3d;
  const seo = copy.seo.modeller3d;

  const images = [
    { src: "/services/3d/nasby.webp", alt: language === "sv" ? "Flygfoto över Näsby, underlag för 3D-modell" : "Aerial photo of Näsby, source imagery for a 3D model" },
    { src: "/services/3d/hisinge.webp", alt: language === "sv" ? "Hisinge hus i Göteborg" : "Hisinge building in Gothenburg" },
    { src: "/projects/wix/073.webp", alt: language === "sv" ? "3D-modell av Katarina Bangata" : "3D model of Katarina Bangata" },
    { src: "/projects/wix/046.webp", alt: language === "sv" ? "3D-modell av Enskede gårds gymnasium" : "3D model of Enskede gårds gymnasium" },
  ];

  const cards = [
    { img: "/services/3d/fov-1.webp", label: t.cards.fov },
    { img: "/services/3d/fov-2.webp", label: t.cards.fov },
    { img: "/services/3d/fov-3.webp", label: t.cards.fov },
    { img: "/services/3d/solanalys-1.webp", label: t.cards.solanalys },
    { img: "/services/3d/solanalys-2.webp", label: t.cards.solanalys },
    { img: "/services/3d/solanalys-3.webp", label: t.cards.solanalys },
    { img: "/services/3d/solpotential.webp", label: t.cards.solpotential },
    { img: "/services/3d/vattenanalys.webp", label: t.cards.vatten },
    { img: "/services/3d/info-points.webp", label: t.cards.infoPoints },
  ];

  return (
    <>
    <Seo title={seo.title} description={seo.description} path="/tjanster/3d-modeller" />
    <ServicePage title={t.title} description={t.description} images={images}>
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">{t.visualize.title}</h2>
          <p className="text-gray-300 mb-8">{t.visualize.text}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c) => (
              <Card key={c.label} className="bg-black border-gray-800">
                <CardContent className="p-4">
                  <img src={c.img} alt={c.label} className="w-full h-48 object-cover rounded mb-2" />
                  <h3 className="text-white text-xl">{c.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-6">{t.print.title}</h2>
          <p className="text-gray-300 mb-8">{t.print.text}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="/services/3d/print-model.webp" alt={language === "sv" ? "Hand som håller en vit 3D-utskrift av en byggnad" : "Hand holding a white 3D-printed building model"} className="w-full rounded-lg object-cover" />
            <img src="/services/3d/print-screen.webp" alt={language === "sv" ? "3D-modell av en byggnad visad på en skärm" : "Building model shown on a screen"} className="w-full rounded-lg object-cover" />
          </div>
        </section>
      </div>
    </ServicePage>
    </>
  );
};

export default Modeller3D;
