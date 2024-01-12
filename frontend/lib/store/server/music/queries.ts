import { useQuery } from "@tanstack/react-query";
import { strapi } from "../strapi";
import { musicApiResSchema } from "./schema";
import { SelectMusicOptions } from "./types";

const getMusics = async () => {
  const response = await strapi.find("musics", {
    populate: "*",
  });

  return musicApiResSchema.parse(response);
};

export const useGetMusics = () => {
  return useQuery({
    queryKey: ["get-musics"],
    queryFn: () => getMusics(),
    select: (data): SelectMusicOptions[] => {
      return data.data.map((item) => ({
        value: item.id.toString(),
        label: item.attributes.name,
        url: item.attributes.file.data.attributes.url,
      }));
    },
  });
};
