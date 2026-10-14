import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Seo } from "@/components/Seo";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { cn } from "@/lib/utils";
import { ProjectDialog } from "@/components/ProjectDialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination";
import { Project } from "@/types/project";

const ITEMS_PER_PAGE = 9;

const projectImage = (number: number) => `/projects/wix/${String(number).padStart(3, "0")}.webp`;
const imageGallery = (numbers: number[]) => numbers.map((number) => ({
  type: "image" as const,
  src: projectImage(number),
}));

const allServices = [
  "Flygfoto",
  "Videoproduktion",
  "Ytmodeller",
  "3D-Modeller",
  "Volymberäkningar",
  "Inspektioner",
];

const projects: Project[] = [
  { id: 1, translationKey: "jungfruholmen", category: "3D-Modeller", mediaType: "image" },
  { id: 2, translationKey: "fyrisskolan", category: "3D-Modeller", mediaType: "image" },
  { id: 3, translationKey: "rotenberg", category: "3D-Modeller", mediaType: "image", mediaSrc: projectImage(57), thumbnailSrc: projectImage(57), additionalMedia: imageGallery([58, 59, 60, 61, 62, 63, 64, 65, 66, 67]) },
  {
    id: 4,
    translationKey: "blaiken",
    category: "Volymberäkningar",
    mediaType: "image",
    mediaSrc: projectImage(1),
    thumbnailSrc: projectImage(1),
    additionalMedia: imageGallery([2, 3, 4, 5, 6, 7, 8]),
    client: "Golder Associates AB",
    date: "2023",
  },
  { id: 5, translationKey: "upplandsbro", category: "Flygfoto", mediaType: "image", mediaSrc: projectImage(53), thumbnailSrc: projectImage(53), additionalMedia: imageGallery([54, 55, 56]) },
  { id: 6, translationKey: "katarina", category: "3D-Modeller", mediaType: "image", mediaSrc: projectImage(73), thumbnailSrc: projectImage(73), additionalMedia: imageGallery([74, 75, 76]) },
  { id: 7, translationKey: "palmstruchs", category: "Flygfoto", mediaType: "image", mediaSrc: projectImage(68), thumbnailSrc: projectImage(68), additionalMedia: imageGallery([69, 70, 71, 72]) },
  {
    id: 8,
    translationKey: "enskede",
    category: "3D-Modeller",
    mediaType: "image",
    mediaSrc: projectImage(46),
    thumbnailSrc: projectImage(46),
    additionalMedia: imageGallery([47, 48, 49, 50, 51, 52]),
    client: "Norconsult AB",
    date: "2023",
  },
  { id: 9, translationKey: "atea", category: "Flygfoto", mediaType: "image", mediaSrc: projectImage(20), thumbnailSrc: projectImage(20), additionalMedia: imageGallery([21, 22, 23, 24, 25, 26, 27, 28]) },
  {
    id: 10,
    translationKey: "gransoe",
    category: "3D-Modeller",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
    thumbnailSrc: "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
    client: "Combitech",
    date: "2023",
  },
  { id: 11, translationKey: "hisinge", category: "Videoproduktion", mediaType: "iframe", mediaSrc: "https://www.youtube.com/embed/T_EyDPrXtI0", thumbnailSrc: "https://i.ytimg.com/vi/T_EyDPrXtI0/hqdefault.jpg" },
  { id: 12, translationKey: "dava", category: "3D-Modeller", mediaType: "image", mediaSrc: projectImage(34), thumbnailSrc: projectImage(34), additionalMedia: imageGallery([35, 36, 37, 38]) },
  { id: 13, translationKey: "plantagen", category: "Flygfoto", mediaType: "image", mediaSrc: projectImage(9), thumbnailSrc: projectImage(9), additionalMedia: imageGallery([10, 11, 12, 13, 14, 15]) },
  { id: 14, translationKey: "lidingoGolf", category: "3D-Modeller", mediaType: "image", mediaSrc: projectImage(77), thumbnailSrc: projectImage(77), additionalMedia: imageGallery([78, 79, 80, 81]) },
  { id: 15, translationKey: "onninen", category: "Flygfoto", mediaType: "image", mediaSrc: projectImage(39), thumbnailSrc: projectImage(39), additionalMedia: imageGallery([40, 41, 42, 43, 44, 45]) },
  { id: 16, translationKey: "svartvik", category: "Flygfoto", mediaType: "image" },
  { id: 17, translationKey: "mekonomen", category: "Videoproduktion", mediaType: "iframe", mediaSrc: "https://www.youtube.com/embed/NUzeYX3o8zo", thumbnailSrc: "https://i.ytimg.com/vi/NUzeYX3o8zo/hqdefault.jpg" },
  { id: 18, translationKey: "bring", category: "Flygfoto", mediaType: "image", mediaSrc: projectImage(29), thumbnailSrc: projectImage(29), additionalMedia: imageGallery([30, 31, 32, 33]) },
  { id: 19, translationKey: "norraStationsgatan", category: "Flygfoto", mediaType: "image", mediaSrc: projectImage(16), thumbnailSrc: projectImage(16), additionalMedia: imageGallery([17, 18, 19]) },
  { id: 20, translationKey: "rusta", category: "Videoproduktion", mediaType: "iframe", mediaSrc: "https://www.youtube.com/embed/03VGquYAuf0", thumbnailSrc: "https://i.ytimg.com/vi/03VGquYAuf0/hqdefault.jpg" },
];

export default function Projects() {
  const { language } = useLanguage();
  const copy = translations[language];
  const t = copy.projectsPage;
  const seo = copy.seo.projekt;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo title={seo.title} description={seo.description} path="/projekt" />
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
              <p className="text-gray-600 max-w-2xl">{t.intro}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[220px]">
                  <SelectValue placeholder={t.selectCategory} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.allCategories}</SelectItem>
                  {allServices.map(service => (
                    <SelectItem key={service} value={service}>
                      {t.categories[service as keyof typeof t.categories] ?? service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentProjects.map((project) => (
              <ProjectDialog key={project.id} project={project} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink onClick={() => setCurrentPage(page)} isActive={currentPage === page}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
