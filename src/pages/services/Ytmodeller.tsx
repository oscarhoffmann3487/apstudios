import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const sectionMeta = [
  { key: "ortofoto", image: "/lovable-uploads/4e712ef7-a6f2-4da9-aec3-dc83e1e0940b.png", altSv: "Ortofoto över ett bostadsområde", altEn: "Orthophoto of a residential area" },
  { key: "dtm", image: "/lovable-uploads/09a0c538-0292-4c48-857a-37c7ad74f50c.png", altSv: "Terrängmodell färgkodad efter höjd", altEn: "Terrain model colour-coded by height" },
  { key: "dsm", image: "/lovable-uploads/eb04d2bc-326a-4099-be2e-aa341247b64a.png", altSv: "Ytmodell med endast markytan kvar", altEn: "Surface model showing only the ground" },
  { key: "konturlinjer", image: "/services/ytmodeller/konturlinjer.webp", altSv: "Höjdkurvor över ett område", altEn: "Contour lines over an area" },
  { key: "inmatning", image: "/lovable-uploads/cda9a75e-9bd6-4b80-9c56-7350fd00c073.png", altSv: "Inmätning av flygstöd", altEn: "Ground-control survey" },
] as const;

const galleryImages = [
  { src: "/lovable-uploads/4e712ef7-a6f2-4da9-aec3-dc83e1e0940b.png", altSv: "Ortofoto över ett bostadsområde", altEn: "Orthophoto of a residential area" },
  { src: "/services/ytmodeller/ortofoto.webp", altSv: "Ortofoto över skärgård och strand", altEn: "Orthophoto of archipelago shoreline" },
  { src: "/lovable-uploads/09a0c538-0292-4c48-857a-37c7ad74f50c.png", altSv: "Terrängmodell färgkodad efter höjd", altEn: "Terrain model colour-coded by height" },
  { src: "/services/ytmodeller/konturlinjer.webp", altSv: "Höjdkurvor över ett område", altEn: "Contour lines over an area" },
];

const Ytmodeller = () => {
  const { language } = useLanguage();
  const copy = translations[language];
  const t = copy.servicePages.ytmodeller;
  const seo = copy.seo.ytmodeller;

  return (
    <>
    <Seo title={seo.title} description={seo.description} path="/tjanster/ytmodeller" />
    <ServicePage title={t.title} description={t.description}>
      <div className="mb-16">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.src}>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img src={image.src} alt={language === "sv" ? image.altSv : image.altEn} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="space-y-16">
        {sectionMeta.map((meta) => {
          const section = t.sections[meta.key];
          return (
            <div key={meta.key} className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-none">
                <h2 className="text-2xl font-bold mb-4 text-white">{section.title}</h2>
                <p className="text-gray-300">{section.content}</p>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-800">
                <img
                  src={meta.image}
                  alt={language === "sv" ? meta.altSv : meta.altEn}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </ServicePage>
    </>
  );
};

export default Ytmodeller;
