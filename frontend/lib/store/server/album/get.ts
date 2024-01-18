import axios from "@/lib/api/axios";
import { albumApiResSchema } from "./schema";
import { albumSelector } from "./selector";

const API_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export const getAlbums = async () => {
  const response = await axios.get(
    `${API_URL}/api/albums?pagination[page]=1&pagination[pageSize]=5&populate[0]=music,cover&populate[1]=music.file,music.image
`
  );

  const modifedData = albumSelector(albumApiResSchema.parse(response.data));

  return modifedData;
};
