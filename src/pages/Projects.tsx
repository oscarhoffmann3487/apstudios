import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { ProjectDialog } from "@/components/ProjectDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Project } from "@/types/project";

const ITEMS_PER_PAGE = 9;

const allServices = [
  "Flygfoto",
  "Videoproduktion",
  "Ytmodeller",
  "3D-Modeller",
  "Volymberäkningar",
  "Inspektioner"
];

const projects: Project[] = [
  {
    id: 1,
    title: "BLAIKENGRUVAN STORUMAN",
    description: "Miljöåtgärder och volymberäkningar i Sorsele kommun",
    longDescription: "Ett omfattande projekt för miljöövervakning och volymberäkning vid Blaikengruvan. Projektet innefattade detaljerad kartläggning av området med hjälp av drönare för att möjliggöra precisa beräkningar och miljöanalyser.",
    category: "Volymberäkning",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/project-showcase/blaiken1.png",
    thumbnailSrc: "/lovable-uploads/project-showcase/blaiken1.png",
    client: "Golder Associates AB",
    date: "2023",
    tags: ["Volymberäkning", "Miljö", "3D-Modellering"],
    location: "Sorsele, Sverige",
    deliverables: ["3D-modell", "Volymberäkningar", "Miljörapport"]
  },
  {
    id: 2,
    title: "ENSKEDE GÅRDS GYMNASIUM",
    description: "3D-modellering och detaljinspektion av fastighet",
    category: "3D-Modellering",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/6c8a31ee-ec6d-4bea-ac7e-168bf23d9d88.png",
    thumbnailSrc: "/lovable-uploads/6c8a31ee-ec6d-4bea-ac7e-168bf23d9d88.png",
    client: "Norconsult AB",
    date: "2023",
    tags: ["3D-Modellering", "Inspektion", "Fastighet"]
  },
  {
    id: 3,
    title: "GRÄNSÖ VÄSTERVIK",
    description: "Testbädd för forskningsprojekt och simuleringar",
    category: "3D-Modellering",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
    thumbnailSrc: "/lovable-uploads/9845fc1b-8224-40ec-92e9-9222d770ffca.png",
    client: "Combitech",
    date: "2023",
    tags: ["3D-Modellering", "Forskning", "Simulering"]
  }
];

export default function Projects() {
  const { language } = useLanguage();
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
              <h1 className="text-4xl font-bold mb-4">
                {language === 'sv' ? 'Våra projekt' : 'Our Projects'}
              </h1>
              <p className="text-gray-600 max-w-2xl">
                {language === 'sv' 
                  ? 'Ett urval av våra senaste projekt inom drönartjänster, från volymberäkningar till 3D-modellering.'
                  : 'A selection of our latest drone service projects, from volume calculations to 3D modeling.'}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={language === 'sv' ? 'Välj kategori' : 'Select category'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {language === 'sv' ? 'Alla kategorier' : 'All categories'}
                  </SelectItem>
                  {allServices.map(service => (
                    <SelectItem key={service} value={service}>
                      {service}
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
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                    >
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
