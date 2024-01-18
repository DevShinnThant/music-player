import { SelectMusic } from "../music/types";

export interface SelectAlbum {
  id: number;
  name: string;
  artist: string;
  cover: string;
  songs: SelectMusic[];
}
