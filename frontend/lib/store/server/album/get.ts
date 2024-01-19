import axios from "@/lib/api/axios";
import { albumApiResArraySchema, albumDetailApiResSchema } from "./schema";
import { albumArraySelector, albumObjectSelector } from "./selector";

const API_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export const getAlbums = async () => {
  const response = await axios.get(
    `${API_URL}/api/albums?pagination[page]=1&pagination[pageSize]=5&populate[0]=music,cover&populate[1]=music.file,music.image`
  );

  const modifedData = albumArraySelector(
    albumApiResArraySchema.parse(response.data)
  );

  return modifedData;
};

export const getAlbum = async (id: number) => {
  const response = await axios.get(
    `${API_URL}/api/albums/${id}?populate[0]=music,cover&populate[1]=music.file,music.image`
  );

  const modifedData = albumObjectSelector(
    albumDetailApiResSchema.parse(response.data)
  );

  return modifedData;
};
