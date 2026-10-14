import ServicePage from "@/components/ServicePage";
import { Seo } from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

type FocusKey = "utsiktsfoto" | "maklarfoto" | "bilder360";

const pages: Record<FocusKey, { path: string; images: { src: string; alt: string }[] }> = {
  utsiktsfoto: {
    path: "/tjanster/utsiktsfoto",
    images: [
      { src: "/lovable-uploads/377669bc-fd80-4eac-b04a-a352e8866b3e.png", alt: "Utsiktsfoto från planerad balkonghöjd" },
    ],
  },
  maklarfoto: {
    path: "/tjanster/maklarfoto",
    images: [
      { src: "/lovable-uploads/d3daeb2a-5100-485e-b15d-9324a92ff1f0.png", alt: "Mäklarfoto av en bostad" },
    ],
  },
  bilder360: {
    path: "/tjanster/360",
    images: [
      { src: "/services/foto/360-tour.webp", alt: "Flygfoto som exempelmaterial till en 360-tour" },
    ],
  },
};

function PhotoFocus({ sectionKey }: { sectionKey: FocusKey }) {
  const { language } = useLanguage();
  const copy = translations[language];
  const section = copy.servicePages.foto.sections[sectionKey];
  const seo = copy.seo[sectionKey];
  const page = pages[sectionKey];

  return (
    <>
      <Seo title={seo.title} description={seo.description} path={page.path} />
      <ServicePage
        title={section.title}
        description={section.description}
        images={page.images}
        quoteSubject={section.title}
      />
    </>
  );
}

export const Utsiktsfoto = () => <PhotoFocus sectionKey="utsiktsfoto" />;
export const Maklarfoto = () => <PhotoFocus sectionKey="maklarfoto" />;
export const Tours360 = () => <PhotoFocus sectionKey="bilder360" />;
