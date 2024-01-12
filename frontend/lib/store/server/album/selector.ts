import * as z from "zod";
import { albumApiResSchema } from "./schema";
import { SelectAlbum } from "./types";

export const albumSelector = (
  dataObj: z.infer<typeof albumApiResSchema>
): SelectAlbum[] => {
  return dataObj.data.map((item) => ({
    id: item.id.toString(),
    name: item.attributes.name,
    artist: item.attributes.artist_name,
    cover:
      process.env.NEXT_PUBLIC_DATABASE_URL +
      item.attributes.cover.data.attributes.url,
  }));
};
