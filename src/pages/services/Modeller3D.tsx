import ServicePage from "@/components/ServicePage";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Modeller3D = () => {
  const { language } = useLanguage();
  const t = translations[language].servicePages.modeller3d;

  const images = [
    "/lovable-uploads/näsby7.jpg",
    "/lovable-uploads/Hisinge_hus2.png",
    "/lovable-uploads/katarina bg.jpg",
    "/lovable-uploads/Enskede_g_rd_3.png",
  ];

  const cards = [
    { img: "/lovable-uploads/Skärmavbild 2021-06-22 kl. 15.37.46.png", label: t.cards.fov },
    { img: "/lovable-uploads/Skärmavbild 2021-06-22 kl. 15.42.58.png", label: t.cards.solanalys },
    { img: "/lovable-uploads/Skärmavbild 2021-06-22 kl. 16.41.28.png", label: t.cards.solpotential },
    { img: "/lovable-uploads/Skärmavbild 2021-06-22 kl. 16.47.44.png", label: t.cards.vatten },
    { img: "/lovable-uploads/Skärmavbild 2021-06-22 kl. 16.49.44.png", label: t.cards.infoPoints },
  ];

  return (
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
          <p className="text-gray-300">{t.print.text}</p>
        </section>
      </div>
    </ServicePage>
  );
};

export default Modeller3D;
