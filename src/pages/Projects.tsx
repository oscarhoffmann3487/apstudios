import { useState } from "react";
import Navbar from "@/components/Navbar";
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

const allServices = [
  "Flygfoto",
  "Videoproduktion",
  "Ytmodeller",
  "3D-Modeller",
  "Volymberäkningar",
  "Inspektioner",
];

const projects: Project[] = [
  {
    id: 1,
    translationKey: "blaiken",
    category: "Volymberäkningar",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/project-showcase/blaiken1.png",
    thumbnailSrc: "/lovable-uploads/project-showcase/blaiken1.png",
    additionalMedia: [
      "/lovable-uploads/project-showcase/blaiken2.jpg",
      "/lovable-uploads/project-showcase/blaiken3.jpg",
      "/lovable-uploads/project-showcase/blaiken4.jpg",
      "/lovable-uploads/project-showcase/blaiken5.jpg",
      "/lovable-uploads/project-showcase/blaiken6.jpg",
      "/lovable-uploads/project-showcase/blaiken7.jpg",
    ].map((src) => ({ type: "image" as const, src })),
    client: "Golder Associates AB",
    date: "2023",
  },
  {
    id: 2,
    translationKey: "enskede",
    category: "3D-Modeller",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/project-showcase/enskede1.png",
    thumbnailSrc: "/lovable-uploads/project-showcase/enskede1.png",
    additionalMedia: [
      "/lovable-uploads/project-showcase/enskede2.jpg",
      "/lovable-uploads/project-showcase/enskede3.jpg",
      "/lovable-uploads/project-showcase/enskede4.jpg",
      "/lovable-uploads/project-showcase/enskede5.jpg",
      "/lovable-uploads/project-showcase/enskede6.jpg",
    ].map((src) => ({ type: "image" as const, src })),
    client: "Norconsult AB",
    date: "2023",
  },
  {
    id: 3,
    translationKey: "gransoe",
    category: "3D-Modeller",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
    thumbnailSrc: "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
    additionalMedia: [
      { type: "image", src: "/lovable-uploads/project-showcase/gränsö5.jpg" },
    ],
    client: "Combitech",
    date: "2023",
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projectsPage;
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
