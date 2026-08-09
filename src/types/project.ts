
export type MediaType = "image" | "video" | "iframe" | "3d";

export interface Project {
  id: number;
  translationKey:
    | "jungfruholmen" | "fyrisskolan" | "rotenberg" | "blaiken"
    | "upplandsbro" | "katarina" | "palmstruchs" | "enskede"
    | "atea" | "gransoe" | "hisinge" | "dava" | "plantagen"
    | "lidingoGolf" | "onninen" | "svartvik" | "mekonomen"
    | "bring" | "norraStationsgatan" | "rusta";
  category: string;
  mediaType: MediaType;
  mediaSrc?: string;
  thumbnailSrc?: string;
  additionalMedia?: { type: MediaType; src: string }[];
  client?: string;
  date?: string;
}
