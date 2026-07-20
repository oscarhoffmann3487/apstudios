
export type MediaType = "image" | "video" | "iframe" | "3d";

export interface Project {
  id: number;
  translationKey: "blaiken" | "enskede" | "gransoe";
  category: string;
  mediaType: MediaType;
  mediaSrc: string;
  thumbnailSrc: string;
  additionalMedia?: { type: MediaType; src: string }[];
  client: string;
  date: string;
}
