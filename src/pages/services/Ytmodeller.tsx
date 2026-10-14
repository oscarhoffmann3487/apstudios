import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const sectionMeta = [
  { key: "ortofoto", image: "/services/ytmodeller/ortofoto.webp", altSv: "Ortofoto över skärgård och skog", altEn: "Orthophoto of archipelago and forest" },
  // The old site's DTM is the colour-coded elevation image. Its file was named dsm_edited.
  { key: "dtm", image: "/services/ytmodeller/dsm.webp", altSv: "Höjdmodell färgkodad efter höjd", altEn: "Elevation model colour-coded by height" },
  // The old site's DSM is the bare-ground model. Its file was named DTM.jpg.
  { key: "dsm", image: "/services/ytmodeller/dtm.webp", altSv: "Markmodell utan vegetation och byggnader", altEn: "Ground model without vegetation and buildings" },
  { key: "konturlinjer", image: "/services/ytmodeller/konturlinjer.webp", altSv: "Höjdkurvor över en tomt", altEn: "Contour lines over a plot" },
  { key: "inmatning", image: "/lovable-uploads/cda9a75e-9bd6-4b80-9c56-7350fd00c073.png", altSv: "Inmätning av flygstöd", altEn: "Ground-control survey" },
] as const;

const galleryImages = [
  { src: "/services/ytmodeller/ortofoto.webp", altSv: "Ortofoto över skärgård och skog", altEn: "Orthophoto of archipelago and forest" },
  { src: "/projects/wix/005.webp", altSv: "Ortofoto från Blaikengruvan", altEn: "Orthophoto from the Blaiken mine" },
  { src: "/projects/wix/008.webp", altSv: "Höjdmodell från Blaikengruvan", altEn: "Elevation model from the Blaiken mine" },
  { src: "/services/ytmodeller/konturlinjer.webp", altSv: "Höjdkurvor över en tomt", altEn: "Contour lines over a plot" },
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
