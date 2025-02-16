
export type MediaType = "image" | "video" | "iframe" | "3d";

export interface Project {
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
