import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types/project";
import { Images } from "lucide-react";

interface ProjectDialogProps {
  project: Project;
}

export function ProjectDialog({ project }: ProjectDialogProps) {
  const { language } = useLanguage();
  const t = translations[language].projectsPage;
  const item = t.items[project.translationKey];
  const longDescription = "longDescription" in item ? item.longDescription : undefined;
  const location = "location" in item ? item.location : undefined;
  const deliverables = "deliverables" in item ? item.deliverables : undefined;
  const facts = "facts" in item ? item.facts : undefined;

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <ProjectCard project={project} />
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{item.title}</DialogTitle>
          <DialogDescription>{longDescription || item.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-full">
              {project.mediaType === "image" && project.mediaSrc && (
                <img src={project.mediaSrc} alt={item.title} decoding="async" className="w-full rounded-lg object-cover" />
              )}
              {project.mediaType === "image" && !project.mediaSrc && (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 text-white">
                  <Images className="h-12 w-12 text-white/70" aria-hidden="true" />
                  <span className="text-xl font-semibold">{item.title}</span>
                  <span className="text-sm text-white/70">{t.mediaComingSoon}</span>
                </div>
              )}
              {project.mediaType === "video" && (
                <video src={project.mediaSrc} controls className="w-full rounded-lg" />
              )}
              {project.mediaType === "iframe" && project.mediaSrc && (
                <iframe
                  src={project.mediaSrc}
                  title={item.title}
                  className="w-full h-[400px] rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </div>

            {project.additionalMedia?.map((media, index) => (
              <div key={index} className="aspect-video">
                {media.type === "image" && (
                  <img
                    src={media.src}
                    alt={`${item.title} - ${index + 2}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                {media.type === "video" && (
                  <video src={media.src} controls className="w-full h-full rounded-lg" />
                )}
                {media.type === "iframe" && (
                  <iframe src={media.src} className="w-full h-full rounded-lg" allowFullScreen />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">{t.projectInfo}</h3>
              <dl className="space-y-2">
                {project.client && (
                  <div>
                    <dt className="font-medium text-gray-600">{t.client}</dt>
                    <dd>{project.client}</dd>
                  </div>
                )}
                {facts && Object.entries(facts).map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-medium text-gray-600">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
                {location && (
                  <div>
                    <dt className="font-medium text-gray-600">{t.location}</dt>
                    <dd>{location}</dd>
                  </div>
                )}
                {project.date && (
                  <div>
                    <dt className="font-medium text-gray-600">{t.date}</dt>
                    <dd>{project.date}</dd>
                  </div>
                )}
              </dl>
            </div>

            {deliverables && (
              <div>
                <h3 className="font-semibold mb-2">{t.deliverables}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {deliverables.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
