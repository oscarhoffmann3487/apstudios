
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  
  return (
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
  );
}
