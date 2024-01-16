import * as z from "zod";

import { SelectedPlaylist } from "./types";
import { playlistApiResSchema } from "./schema";

export const playlistSelector = (
  dataObj: z.infer<typeof playlistApiResSchema>
): SelectedPlaylist[] => {
  return dataObj.data.map((item) => ({
    id: item.id,
    image:
      process.env.NEXT_PUBLIC_DATABASE_URL +
      item.attributes.image.data.attributes.url,
    name: item.attributes.name,
    soundCount: item.attributes.song_count,
    duration: item.attributes.duration,
  }));
};
