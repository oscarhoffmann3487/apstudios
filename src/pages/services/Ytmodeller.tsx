import ServicePage from "@/components/ServicePage";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const sectionMeta = [
  { key: "ortofoto", image: "/lovable-uploads/4e712ef7-a6f2-4da9-aec3-dc83e1e0940b.png" },
  { key: "dtm", image: "/lovable-uploads/09a0c538-0292-4c48-857a-37c7ad74f50c.png" },
  { key: "dsm", image: "/lovable-uploads/eb04d2bc-326a-4099-be2e-aa341247b64a.png" },
  { key: "konturlinjer", image: undefined as string | undefined },
  { key: "inmatning", image: "/lovable-uploads/cda9a75e-9bd6-4b80-9c56-7350fd00c073.png" },
] as const;

const placeholderImages = [
  "/lovable-uploads/d3588cb5-5c9f-47b6-8536-525ef99f8e62.png",
  "/lovable-uploads/5e51a7aa-41ab-4b41-855c-85714b46bda1.png",
  "/lovable-uploads/3ac3e220-30f2-428f-b213-b091c2a7d5de.png",
];

const Ytmodeller = () => {
  const { language } = useLanguage();
  const t = translations[language].servicePages.ytmodeller;

  return (
    <ServicePage title={t.title} description={t.description}>
      <div className="mb-16">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {placeholderImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img src={image} alt={`${t.title} – ${index + 1}`} className="w-full h-full object-cover" />
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
                  src={meta.image || placeholderImages[0]}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </ServicePage>
  );
};

export default Ytmodeller;
