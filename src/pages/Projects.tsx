import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

type MediaType = "image" | "video" | "iframe" | "3d";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  mediaType: MediaType;
  mediaSrc: string;
  thumbnailSrc: string;
  additionalMedia?: { type: MediaType; src: string }[];
  client: string;
  date: string;
  tags: string[];
  location?: string;
  deliverables?: string[];
}

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
    title: "BLAIKENGRUVAN",
    description: "Miljöåtgärder och volymberäkningar i Sorsele kommun",
    longDescription: "Ett omfattande projekt för miljöövervakning och volymberäkning vid Blaikengruvan. Projektet innefattade detaljerad kartläggning av området med hjälp av drönare för att möjliggöra precisa beräkningar och miljöanalyser.",
    category: "Volymberäkning",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/c01f5521-3595-4db0-81df-f077b17c7643.png",
    thumbnailSrc: "/lovable-uploads/c01f5521-3595-4db0-81df-f077b17c7643.png",
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

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
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

  const ProjectDialog = ({ project }: { project: Project }) => (
    <Dialog>
      <DialogTrigger className="w-full">
        <Card className="group overflow-hidden hover:shadow-lg transition-shadow h-[440px] relative">
          <div className="aspect-video relative overflow-hidden">
            {project.mediaType === "image" && (
              <img
                src={project.thumbnailSrc}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
            {project.mediaType === "video" && (
              <video
                src={project.mediaSrc}
                className="w-full h-full object-cover"
                controls
              />
            )}
            {project.mediaType === "iframe" && (
              <iframe
                src={project.mediaSrc}
                className="w-full h-full"
                allowFullScreen
              />
            )}
          </div>
          <CardHeader>
            <div className="space-y-2">
              <div className="flex justify-between items-center gap-2">
                <CardTitle className="text-xl font-bold truncate">
                  {project.title}
                </CardTitle>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {project.date}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">
                  {language === 'sv' ? 'Kund: ' : 'Client: '}
                </span>
                {project.client}
              </p>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <div className="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-600 transition-colors">
            <ChevronDown className="w-5 h-5" />
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{project.title}</DialogTitle>
          <DialogDescription>{project.longDescription || project.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-full">
              {project.mediaType === "image" && (
                <img
                  src={project.mediaSrc}
                  alt={project.title}
                  className="w-full rounded-lg object-cover"
                />
              )}
              {project.mediaType === "video" && (
                <video
                  src={project.mediaSrc}
                  controls
                  className="w-full rounded-lg"
                />
              )}
              {project.mediaType === "iframe" && (
                <iframe
                  src={project.mediaSrc}
                  className="w-full h-[400px] rounded-lg"
                  allowFullScreen
                />
              )}
            </div>
            
            {project.additionalMedia?.map((media, index) => (
              <div key={index} className="aspect-video">
                {media.type === "image" && (
                  <img
                    src={media.src}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                {media.type === "video" && (
                  <video
                    src={media.src}
                    controls
                    className="w-full h-full rounded-lg"
                  />
                )}
                {media.type === "iframe" && (
                  <iframe
                    src={media.src}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">
                {language === 'sv' ? 'Projektinformation' : 'Project Information'}
              </h3>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium text-gray-600">
                    {language === 'sv' ? 'Kund' : 'Client'}
                  </dt>
                  <dd>{project.client}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-600">
                    {language === 'sv' ? 'Plats' : 'Location'}
                  </dt>
                  <dd>{project.location}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-600">
                    {language === 'sv' ? 'Datum' : 'Date'}
                  </dt>
                  <dd>{project.date}</dd>
                </div>
              </dl>
            </div>
            
            {project.deliverables && (
              <div>
                <h3 className="font-semibold mb-2">
                  {language === 'sv' ? 'Leverabler' : 'Deliverables'}
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {project.deliverables.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

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
};

export default Projects;
