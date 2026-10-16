import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const sectionMeta = [
  { key: "utsiktsfoto", imageSrc: "/lovable-uploads/377669bc-fd80-4eac-b04a-a352e8866b3e.png" },
  { key: "fotomontage", imageSrc: "/lovable-uploads/b065a950-b094-475f-a30c-10c67af34f4c.png" },
  { key: "fastighetsfoto", imageSrc: "/lovable-uploads/8f2538f8-49c9-45b3-b28b-9f42d56838d9.png" },
  { key: "maklarfoto", imageSrc: "/lovable-uploads/d3daeb2a-5100-485e-b15d-9324a92ff1f0.png" },
  { key: "evenemang", imageSrc: "/lovable-uploads/50c1a4e4-1c78-482b-8f2d-ea8d422dc5c3.png" },
  { key: "landskapsfoto", imageSrc: "/lovable-uploads/d1c31bcf-d6a7-4ed7-8e5d-bcc048891161.png" },
  { key: "bilder360", imageSrc: "/services/foto/360-tour.webp" },
] as const;

const Foto = () => {
  const { language } = useLanguage();
  const copy = translations[language];
  const t = copy.servicePages.foto;
  const seo = copy.seo.foto;

  return (
    <>
    <Seo title={seo.title} description={seo.description} path="/tjanster/foto" />
    <ServicePage
      title={t.title}
      description={t.description}
      images={[
        "/lovable-uploads/14c55413-16d4-41fa-9b29-4fe1e1aae90a.png",
        "/lovable-uploads/f84651d6-c6ac-40ba-b19d-44d0e6800832.png",
        "/lovable-uploads/b6a00063-356f-4af0-98b6-bf641c7def8d.png",
        "/lovable-uploads/7da84fa7-af98-4786-b8ae-0486a9d49c10.png",
      ]}
    >
      <div className="bg-white w-screen relative left-1/2 right-1/2 -mx-[50vw] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-12">
            {sectionMeta.map((meta) => {
              const section = t.sections[meta.key];
              return (
                <div key={meta.key} className="bg-white rounded-lg shadow-xl p-8 mx-[42px] px-[41px]">
                  <div className="grid md:grid-cols-2 gap-8 items-center my-0 py-0">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <p className="text-gray-700">{section.description}</p>
                    </div>
                    <div className="aspect-[4/3] w-full max-w-md mx-auto overflow-hidden rounded-lg">
                      <img src={meta.imageSrc} alt={section.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ServicePage>
    </>
  );
};

export default Foto;
