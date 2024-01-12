import axios from "@/lib/api/axios";
import { albumApiResSchema } from "./schema";
import { albumSelector } from "./selector";

const API_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export const getAlbumns = async () => {
  const response = await axios.get(`${API_URL}/api/albums?populate=*`);

  const modifedData = albumSelector(response.data);

  return modifedData;
};
