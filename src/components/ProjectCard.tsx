import { ChevronDown, Images } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const t = translations[language].projectsPage;
  const item = t.items[project.translationKey];
  const tags = "tags" in item ? item.tags : [];

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow h-[440px] relative">
      <div className="aspect-video relative overflow-hidden">
        {project.mediaType === "image" && project.thumbnailSrc && (
          <img
            src={project.thumbnailSrc}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {project.mediaType === "image" && !project.thumbnailSrc && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 px-6 text-white">
            <Images className="h-10 w-10 text-white/70" aria-hidden="true" />
            <span className="text-center text-lg font-semibold tracking-wide">{item.title}</span>
            <span className="text-sm text-white/70">{t.mediaComingSoon}</span>
          </div>
        )}
        {project.mediaType === "video" && (
          <video src={project.mediaSrc} className="w-full h-full object-cover" controls preload="metadata" />
        )}
        {project.mediaType === "iframe" && (
          <iframe src={project.mediaSrc} className="w-full h-full" allowFullScreen />
        )}
      </div>
      <CardHeader>
        <div className="space-y-2">
          <div className="flex justify-between items-center gap-2">
            <CardTitle className="text-xl font-bold truncate">{item.title}</CardTitle>
            {project.date && <span className="text-sm text-gray-500 whitespace-nowrap">{project.date}</span>}
          </div>
          {project.client && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold">{t.clientLabel}</span>
              {project.client}
            </p>
          )}
          <CardDescription className="line-clamp-2">{item.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <div className="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-600 transition-colors">
        <ChevronDown className="w-5 h-5" />
      </div>
    </Card>
  );
}
