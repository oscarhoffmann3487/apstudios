
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { cn } from "@/lib/utils";
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

type MediaType = "image" | "video" | "iframe" | "3d";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  mediaType: MediaType;
  mediaSrc: string;
  thumbnailSrc: string;
  client: string;
  date: string;
  tags: string[];
}

// Example projects data
const projects: Project[] = [
  {
    id: 1,
    title: "BLAIKENGRUVAN",
    description: "Miljöåtgärder och volymberäkningar i Sorsele kommun",
    category: "Volymberäkning",
    mediaType: "image",
    mediaSrc: "/lovable-uploads/c01f5521-3595-4db0-81df-f077b17c7643.png",
    thumbnailSrc: "/lovable-uploads/c01f5521-3595-4db0-81df-f077b17c7643.png",
    client: "Golder Associates AB",
    date: "2023",
    tags: ["Volymberäkning", "Miljö", "3D-Modellering"]
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

  const categories = ["all", ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
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
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" 
                        ? (language === 'sv' ? 'Alla kategorier' : 'All categories') 
                        : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  {project.mediaType === "image" && (
                    <img
                      src={project.thumbnailSrc}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">
                      {language === 'sv' ? 'Kund: ' : 'Client: '}
                    </span>
                    {project.client}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
