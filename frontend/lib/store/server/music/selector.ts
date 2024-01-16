import * as z from "zod";

import { SelectMusic } from "./types";
import { musicApiResSchema } from "./schema";

export const musicSelector = (
  dataObj: z.infer<typeof musicApiResSchema>
): SelectMusic[] => {
  return dataObj.data.map((item, index) => ({
    id: item.id.toString(),
    index,
    name: item.attributes.name,
    artist: item.attributes.artist,
    image:
      process.env.NEXT_PUBLIC_DATABASE_URL +
      item.attributes.image.data.attributes.url,
    song:
      process.env.NEXT_PUBLIC_DATABASE_URL +
      item.attributes.file.data.attributes.url,
  }));
};
