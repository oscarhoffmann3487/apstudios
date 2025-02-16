
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types/project";

interface ProjectDialogProps {
  project: Project;
}

export function ProjectDialog({ project }: ProjectDialogProps) {
  const { language } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <ProjectCard project={project} />
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
}
